import {Client, Account, ID , Databases} from "appwrite";

export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASEID;
export const COLLECTION_ID_COMMENTS = import.meta.env.VITE_APPWRITE_COLLECTIONID;


const client = new Client();

client
.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
.setProject(PROJECT_ID);


export const account = new Account(client);
export const databases = new Databases(client);


export default client;