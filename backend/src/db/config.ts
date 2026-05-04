import mongoose from "mongoose";

export async function connectToDb(url: string) {
  try {
    await mongoose.connect(url);
    console.log("Successfully connected to DB!");
  } catch (error) {
    console.error("Couldn't connect to DB!");
    process.exit(1);
  }
}
