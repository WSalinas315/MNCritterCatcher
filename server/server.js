const express = require('express');
const multer = require('multer');
// const sharp = require('sharp');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const searchRouter = require('./routes/search.router');
const sightingRouter = require('./routes/sighting.router');
const challengeRouter = require('./routes/challenge.router');

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});
const upload = multer({storage: storage});

// Multer file availability
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('./public/images/uploads'));

// Multer POST
app.post('/post-photo-upload', upload.single('photo-upload'), function (req, res, next){
  // res.send({filepath: req.file.path});
});

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/search', searchRouter);
app.use('/api/sighting', sightingRouter);
app.use('/api/challenge', challengeRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
