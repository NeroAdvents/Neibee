var admin = require('firebase-admin');
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyB9FXbHaDrIHhEi7njX0j399RloNMeN7Oc",
    authDomain: "neibee-33efb.firebaseapp.com",
    databaseURL: "https://neibee-33efb.firebaseio.com",
    projectId: "neibee-33efb",
    storageBucket: "",
    messagingSenderId: "848592018641"
};

var serviceAccount = require("/root/neibeesite/graphql-mongo/src/neibee-33efb-firebase-adminsdk-eobvx-61b42f6536.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://neibee-33efb.firebaseio.com"
});
firebase.initializeApp(config);
var db = admin.firestore();

let data = [];
let user_data = {
    status: 200,
    uid: null
};
let user_info = {
    status: 200,
    name: '',
    email: '',
    offers: [],
    requests: []
};
let user_query = {
    status: 200,
    query: null
}

let account_status = 400;

async function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    //data = [];
    await admin.auth().listUsers(1000, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                data.push(userRecord.toJSON());
            });
            if (listUsersResult.pageToken) {
                // List next batch of users.
                listAllUsers(listUsersResult.pageToken)
            }
        })
        .catch(function(error) {
            console.log("Error listing users:", error);
        });
}

export const resolvers = {
    Query: {
        async isValid(parent, { email, password }, context, info) {
            //status = 200;
            user_data.status = 200;
            user_data.uid = null;
            await firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                if (errorCode) {
                    user_data.status = 400;
                }
		//errorCode = 0;
		//errorMessage = "";
            });
            if (user_data.status === 200) {
                await admin.auth().getUserByEmail(email)
                    .then(function(userRecord) {
                        // See the UserRecord reference doc for the contents of userRecord.
                        user_data.uid = userRecord.toJSON()["uid"];
                        console.log("Successfully fetched user data:", userRecord.toJSON());
                    })
                    .catch(function(error) {
                        console.log("Error fetching user data:", error);
                    });
            }
            return user_data
        },
        async users() {
            await listAllUsers();
            var tmp = data;
            data = [];
            return await tmp
        },
        async getInfoUser(parent, { uid }, context, info) {
            await admin.auth().getUser(uid).then(function (userRecord) {
                var infoData = userRecord.toJSON();
                user_info.status = 200;
                user_info.name = userRecord["displayName"];
                user_info.email = userRecord["email"]
            }).catch(function (error) {
                user_info.status = 400;
                user_info.name = '';
                user_info.email = '';
                console.log(error)
            });
            return await user_info
        },
        async getOfferUser(parent, { uid }, context, info){
            var offers = await db.collection('users').doc(uid);
            user_query.status = 200;
            await offers.get().then(doc => {
                if (!doc.exists) {
                    user_query.status = 400;
                    user_query.query = null;
                    console.log("no offer")
                } else {
                    user_query.query = doc.data()["offers"]
                }
            }).catch(err => {
                console.log(err)
            });
            return await user_query
        },
        async getRequestUser(parent, { uid }, context, info){
            var requests = await db.collection('users').doc(uid);
            user_query.status = 200;
            await requests.get().then(doc => {
                if (!doc.exists) {
                    user_query.status = 400;
                    user_query.query = null;
                    console.log("no request")
                } else {
                    user_query.query = doc.data()["requests"]
                }
            }).catch(err => {
                console.log(err)
            });
            return await user_query
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            await admin.auth().createUser({
                email: input.email,
                emailVerified: false,
                password: input.password,
                disabled: false

            }).then(function (userRecord) {
                user_data.status = 200;
                user_data.uid = userRecord.toJSON()["uid"];
                var users = db.collection('users');
                users.doc(user_data.uid).set({
                    uid: user_data.uid,
                    email: userRecord.toJSON()["email"],
                    offers: [],
                    requests: []
                });
                console.log("success", userRecord)
            }).catch(function (error) {
                user_data.status = 400;
                user_data.uid = null;
                console.log("Error: ", error)
            });
            return await user_data;
        },
        async addOfferUser(parent, { uid, type, _info }, context, info) {
            var users = db.collection('users');
            var offers = db.collection('offers');
            user_data.status = 200;
            user_data.uid = null;
            await admin.auth().getUser(uid).then(async function (userRecord) {
                await offers.add({
                    user_uid: uid,
                    type: type,
                    _info: _info
                }).then(function (docref) {
                    user_data.uid = docref.id;
                    console.log("done: ", docref.id)
                })
            }).catch(function (error) {
                console.log("user doesn't exist");
                user_data.status = 400;
                user_data.uid = null;
            });
            //await offers.add();
            var user_offers = await offers.where('user_uid', '==', uid.toString());
            await user_offers.get().then(snapshot => {
                if (snapshot.empty) {
                    user_data.uid = null;
                    user_data.status = 400;
                    console.log("no such thing");
                    return
                }
                snapshot.forEach(doc => {
                    user_info.offers.push(doc.data());
                    users.doc(uid).update({
                        offers: user_info.offers
                    })
                })
            }).catch(err => {
                console.log(error)
            });
            return await user_data
        },
        async addRequestUser(parent, { uid, type, _info }, context, info) {
            var users = db.collection('users');
            var requests = db.collection('requests');
            user_data.status = 200;
            user_data.uid = null;
            await admin.auth().getUser(uid).then(async function (userRecord) {
                await requests.add({
                    user_uid: uid,
                    type: type,
                    _info: _info
                }).then(function (docref) {
                    user_data.uid = docref.id;
                    console.log("done: ", docref.id)
                })
            }).catch(function (error) {
                console.log("user doesn't exist");
                user_data.status = 400;
                user_data.uid = null;
            });
            var user_requests = await requests.where('user_uid', '==', uid.toString());
            await user_requests.get().then(snapshot => {
                if (snapshot.empty) {
                    user_data.uid = null;
                    user_data.status = 400;
                    console.log("no such thing");
                    return
                }
                snapshot.forEach(doc => {
                    user_info.requests.push(doc.data());
                    users.doc(uid).update({
                        requests: user_info.requests
                    })
                })
            }).catch(err => {
                console.log(error)
            });
            return await user_data
        }
    }
};
