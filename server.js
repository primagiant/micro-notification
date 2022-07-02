import express from 'express';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import notifikasiRoute from "./routes/notifikasi.js"

// Global Variable
const app = express();
const port = 3000;

// conect to mongodb
mongoose.connect("mongodb://localhost:27017/porto_notification",{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// init database
const db = mongoose.connection;

// validate database error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to mongodb");
});

// set a request json
app.use(express.json());

// routes
app.use('/auth', authRoute);
app.use('/notifikasi', notifikasiRoute);

// for console information and running the server
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}!`));