const PORT = 3001 || process.env.PORT;
const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
	// This error should crash whole process

	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
module.exports = {
  PORT: PORT,
  MONGO_CONNECTION_STRING:
    "mongodb+srv://andra-raluca:Bisl2k5pczRc4kPK@ip-project-yau3a.mongodb.net/obesity_usa?authSource=admin&replicaSet=ip-project-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
};
