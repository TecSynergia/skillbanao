import express from 'express';
import './Conn.js'; // Import your MongoDB connection setup
import User from './models/User.js';

import multer from 'multer';
//photo uploading 

const upload  = multer({
  storage:multer.diskStorage({
    destination:function(req,file,cb)
    {
      cb(null,"uploads")
    },
    filename:function(req,file,cb)
    {
      cb(null,file.fieldname+"-"+Date.now()+".jpg")
    }
  })
}).single("photo");


const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to handle the POST request for adding user data
app.post('/add-user', upload, async (req, res) => {
    try {
        const userData = req.body; // Assuming the request body contains user data
    
        // Create a new User instance using the data from the request
        const newUser = new User({
          name: userData.name,
          role: userData.role,
          gender: userData.gender,
          photo: req.file.filename,
          phoneNumber: userData.phoneNumber,
        });
    
        // Save the user data to the database
        await newUser.save();
    
        res.status(201).json({ message: 'User data added successfully' });
      } catch (error) {
        console.error('Error adding user data:', error);
        res.status(500).json({ error: 'An error occurred while adding user data' });
      }
});

// Route to get all user data
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all user data from the database
    res.status(200).json(users);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'An error occurred while retrieving user data' });
  }
});


//upload signup for for professionals


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
