import { connect, disconnect } from "mongoose";
async function connectToDatabases() {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("couldn't connect to databases");
  }
}

async function disconnectFromDatabases() {
    try {
        await disconnect();
      } catch (error) {
        console.log(error);
        throw new Error("couldn't disconnect from databases");
      }
}

export {connectToDatabases, disconnectFromDatabases};
