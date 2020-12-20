import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  const db = process.env.MONGO_URI;
  console.log(db)

  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log(db);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
export default connectDB;
