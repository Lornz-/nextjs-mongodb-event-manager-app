/* eslint-disable import/no-anonymous-default-export */
// vendors
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import dbConnect from '../dbConnect';

let mongoServer;

// Provide connection to a new in-memory database server.
const connect = async () => {
  // before establishing a new connection close previous
  // await mongoose.disconnect();

  mongoServer = await MongoMemoryServer.create();

  process.env.MONGODB_URI = await mongoServer.getUri();
  await dbConnect();
};

// Remove and close the database and server.
const close = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};

// Remove all data from collections
const clear = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    await collections[key].deleteMany();
  }
};

export default {
  connect,
  close,
  clear,
};
