import React, { useState } from "react";
import './Prostyle.css';
import logo from '../../images/logo.png';

const Professional = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
      <div class="container">
      <h1 class="form-title">Skill Banano</h1>
      <h2>Start Your Journey</h2>
      <form action="#">
        {/* <h1>Start Your Journey</h1> */}
        <div class="main-user-info">
          <div class="user-input-box">
            
            <label for="fullName">Full Name</label>
            <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Full Name"/>
          </div>
          <div class="user-input-box">
            <label for="username">Username</label>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username"/>
          </div>
          <div class="user-input-box">
            <label for="email">Email</label>
            <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"/>
          </div>
          <div class="user-input-box">
            <label for="phoneNumber">Password</label>
            <input type="password"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"/>
          </div>
          <div class="user-input-box">
            <label for="password">Date of Birth</label>
            <input type="date"
                    id="date"
                    name="date"
                    placeholder="Enter DOB"/>
          </div>
          <div class="user-input-box">
            <label for="confirmPassword">Upload Image</label>
            <input type="file"
                    id="file"
                    name="file"
                    placeholder="Upload the image"/>
          </div>
        </div>
        <div class="gender-details-box">
          <span class="gender-title">Gender</span>
          <div class="gender-category">
           

          </div>
        </div>
        <div class="form-submit-btn">
          <input type="submit" value="send"/>
          <input type="submit" value="Back"/>
          
        </div>
      </form>
    </div>
    )
}
export default  Professional

// import React, { useState } from 'react';
// import './Form.scss';
// import logo from '../../images/logo.png';

// const Professional = () => {
//   const [name, setName] = useState('');
//   const [role, setRole] = useState('');
//   const [gender, setGender] = useState('');
//   const [image, setImage] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setImage(imageUrl);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   const handleReload = () => {
//     window.location.reload();
//   };

//   return (

//       <div className="form-container">
//       <form onSubmit={handleSubmit}>
//       <img id="logo" src={logo} alt="" />
//        <h2>Start As Professional</h2>
//         <div className="form-field">
//           <label className="label">Name</label>
//           <input 
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//        </div>
//          <div className="form-field">
//            <label className="label">Role</label>
//            <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="">Select Role</option>
//            <option value="CA">CA</option>
//          <option value="Lawyer">Lawyer</option>
//           </select>
//          </div>
//        <div className="form-field">
//           <label className="label">Gender</label>
//            <div className="radio-group">
//              <label>
//               <input
//                 type="radio"
//                 value="male"
//                 checked={gender === 'male'}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="female"
//                 checked={gender === 'female'}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               Female
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="other"
//                 checked={gender === 'other'}
//                 onChange={(e) => setGender(e.target.value)}
//               />
//               Other
//             </label>
//           </div>
//         </div>
//         <div className="form-field">
//           <label className="label">Upload Profile Pic</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//           {image && <img className="uploaded-image" src={image} text-align="center" alt="Uploaded" />}
//         </div>
//         <div className="form-field">
//           <label className="label">Phone Number</label>
//           <input
//             type="text"
//             value={phoneNumber}
//             pattern="[0-9]{10}"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="button-group">
//           <button type="submit" className="send-button">Send</button>
//           <button type="button" className="go-back-button" onClick={handleReload}>
//             Back
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }
  
// export default Professional;
    