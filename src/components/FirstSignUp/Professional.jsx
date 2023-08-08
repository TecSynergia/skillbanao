import React, { useState } from 'react';
import { Form, Input, Select, Radio, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Form.scss';

const { Option } = Select;

const App = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('role', role);
      formData.append('gender', gender);
      formData.append('image', image); // Add image data to formData
      formData.append('phoneNumber', phoneNumber);

      const response = await fetch('/add-user', {
        method: 'POST',
        body: formData,
      });

      if (response.status == 201) {
        // Handle successful response, navigate to a new page
        alert("Successfully Added");
        navigate('/success');
      } else {
        console.error(response);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch error:', error);
    }
  };

  const handleimageUpload = (info) => {
    if (info.file.status === 'done') {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target.result);
      };
      reader.onerror = (error) => {
        console.error('Error reading the image:', error);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };
  

  const handleimageChange = (info) => {
    if (info.file.status === 'done') {
      // Update the image state after successful upload
     setImage(info.file.response.url);
    }
  };


  const handleReload = () => {
    navigate(0); // Navigate to home page using navigate
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <img id="logo" src={logo} alt="" />
        <h2>Start As Professional</h2>
        <Form.Item label="Name">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Role">
          <Select
            value={role}
            onChange={(value) => setRole(value)}
            required
          >
            <Option value="">Select Role</Option>
            <Option value="CA">CA</Option>
            <Option value="Lawyer">Lawyer</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Gender">
          <Radio.Group
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Upload Profile Pic">
          <Upload
            accept="image/*"
            customRequest={handleimageUpload}
            showUploadList={false}
            onChange={handleimageChange}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>

          {image && <img className="uploaded-image" src={image} alt="Uploaded" />}
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            value={phoneNumber}
            pattern="[0-9]{10}"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </Form.Item>
        <div className="button-group">
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>Send</Button>
          <Button onClick={handleReload}>Back</Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
