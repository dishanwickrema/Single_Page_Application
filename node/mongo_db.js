function writingData(source, dbName, collectionName) {
  const fs = require('fs')
  let rawdata = fs.readFileSync('../resources/Auto_Theft_2014_to_2017.json');
  let data = JSON.parse(rawdata);
  let theft = data.features
  // console.log(data.features);
  
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    dbo = db.db('autoinsurance')
    i = 0
    dbo.collection('theft2').insertMany(theft)
    db.close();
  
  });

  console.log('reading....')
}

function readingData(dbName, collectionName) {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('autoinsurance');
    var query = { "properties.occurrenceyear" : 2014 } 
    dbo.collection('theft2').find(query).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
}
readingData()

// writingData('../resources/Auto_Theft_2014_to_2017.json','autoinsurance','theft')


