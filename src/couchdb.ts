import nano from "nano";

const COUCHDB_URL = "http://localhost:5984"; 
const COUCHDB_USERNAME = "admin"; 
const COUCHDB_PASSWORD = "senha"; 


const couch = nano(COUCHDB_URL);


const db = couch.use("primeiraloja");

export default db;
