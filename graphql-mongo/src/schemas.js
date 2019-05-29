import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type User {
        uid: ID
        displayName: String
        email: String
        phoneNumber: Int
        address: String
        city: String
        zip: Int
    }
    type Info {
        email: String,
        password: String
    }
    type UserInfo {
        status: Int
        name: String
        email: String
    }
    type Message {
        _id: ID
        user: User
        message: String
        Date: Int
    }
    type ChatBox {
        _id: ID
        name: String
        users: [User]
    }
    type UserData {
        status: Int
        uid: ID
    }
    type Response {
        user_uid: ID
        type: Int
        _info: String
    }
    type UserQuery {
        status: Int
        query: [Response]
    }
    type Query {
        users: [User]!
        isValid(email: String!, password: String!): UserData!
        getInfoUser(uid: String!): UserInfo!
        getOfferUser(uid: String!): UserQuery!
        getRequestUser(uid: String!): UserQuery!
        listBox: [ChatBox]!
    }
    input UserInput {
        firstname: String
        lastname: String
        email: String!
        password: String!
        phone_number: Int
        address: String
        city: String
        zip: Int
    }
    input ChatInput {
        name: String
        email: String
    }
    type Mutation {
        createUser(input: UserInput): UserData!
        createChatBox(input: ChatInput): ChatBox
        addOfferUser(uid: String!, type: Int!, _info: String!): UserData!
        addRequestUser(uid: String!, type: Int!, _info: String!): UserData!
    }
`;
export default makeExecutableSchema(
    {
        typeDefs,
        resolvers
    }
)
