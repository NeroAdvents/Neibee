import gql from "graphql-tag"

export const REGISTER = gql(`
    mutation ($mail: String!, $pass: String!, $name: String!) {
        createUser(input: {email: $mail, password: $pass, firstname: $name}) {
            uid,
            status
        }
    }
`);

export const CONNECT = gql(`
    query ($mail : String!, $pass : String!) {
        isValid(email: $mail, password: $pass) {
            uid,
            status
        }
    }
`);

export const GET_INFO_USR = gql(`
    query ($uid : String!) {
        getInfoUser(uid: $uid) {
            status,
            name,
            email
        }
    }
`);

export const GET_REQUEST_USR = gql(`
    query ($uid : String!) {
        getRequestUser(uid: $uid) {
            status,
            request
        }
    }
`);

export const GET_OFFER_USR = gql(`
    query ($uid: String!) {
        getOfferUser(uid: $uid) {
            status
            query {
                user_uid
                type
                _info
            }
        }
    }
`);

export const ADD_OFFER_USR = gql(`
    mutation ($uid: String!, $type: Int!, $info: String!) {
        addOfferUser(uid: $uid, type: $type, _info: $info) {
            status
            uid
        }
    }
`);

export const ADD_REQUEST_USR = gql(`
    query ($uid : String!, $type : String!, $info : String!) {
        addRequestUser(uid: $uid, type: $type, info: $info) { 
            status,
            id
        }
    }
`);