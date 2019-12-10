const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://oleh:adminadmin@cluster0-b6rzg.mongodb.net/test?retryWrites=true&w=majority')
  .then(client => {
    console.log('mongo connected');
    callback(client);
  })
  .catch(err => console.log(err));
}

module.exports = mongoConnect; 
