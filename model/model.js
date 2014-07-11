var Player = require('./player.js');
var MongoClient = require('mongodb').MongoClient;

var database = null;

MongoClient.connect("mongodb://localhost:27017/tradelight", function(err, db) {
    if(!err) {
        console.log("We are connected");

        database = db;
    }
});

var getDatabase = function() {
    return database;
}

exports.savePlayer = function(player, callback) {
    getDatabase().collection('players', function(err, collection) {
        collection.insert(player, {w:1}, function(err, result) {
            console.log(result);
            callback(result);
        });
    });
}

exports.fetchPlayer = function(name, callback) {
    getDatabase().collection('players', function(err, collection) {
        collection.findOne({'name': name}, function(err, item) {
            callback(item);
        });
    });
}

exports.saveSession = function(session, callback) {
    getDatabase().collection('sessions', function(err, collection) {
        collection.insert(session, {w:1}, function(err, result) {
            console.log(result);
            callback(result);
        });
    });
}