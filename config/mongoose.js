const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/codesocial_development', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database :: MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

module.exports = db;  