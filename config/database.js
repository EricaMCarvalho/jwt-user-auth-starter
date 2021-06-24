const mongoose = require('mongoose');

module.exports = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB is connected...'.green.inverse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
