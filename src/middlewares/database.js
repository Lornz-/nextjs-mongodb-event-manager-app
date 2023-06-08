import dbConnect from '@/lib/dbConnect';

const database = async (req, res, next) => {
  await dbConnect();

  return next();
};

export default database;
