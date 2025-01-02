import mongoose from "mongoose";

const username = process.env.MONGODB_ATLAS_ID;
const dbPassword = process.env.MONGODB_ATLAS_PW;
const dbname = process.env.MONGODB_ATLAS_DB;
const replica1 = process.env.ATLAS_REPLICA_1;
const replica2 = process.env.ATLAS_REPLICA_2;
const replica3 = process.env.ATLAS_REPLICA_3;
const replicaset = process.env.ATLAS_REPLICASET;

const dbUri = `mongodb://${username}:${dbPassword}@${replica1}:27017,${replica2}:27017,${replica3}:27017/${dbname}?ssl=true&authSource=admin&replicaSet=${replicaset}&retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.error("MongoDB 연결 실패", error);
    process.exit(1);
  }
};
