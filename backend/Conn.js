import { connect, Schema, model } from 'mongoose';

// Connect to MongoDB Compass
connect('mongodb://localhost:27017/pro-skill', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


