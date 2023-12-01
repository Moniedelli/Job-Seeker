
'use client';

import { Button, Checkbox, Label, Modal, TextInput, Select, Datepicker } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';

function RegisterModal() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [joiningDate, setJoiningDate] = useState(new Date());
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      username,
      name,
      address,
      phoneNumber,
      gender,
      dateOfBirth,
      joiningDate,
      password,
      rememberMe,
    };

    try {
      const response = await axios.post("/api/user/create", formData);
      const success = response.status === 201;

      if (success) {
        localStorage.setItem("login", JSON.stringify(response.data));
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error as needed
    }
  };

  return (
    <>
      <Button outline gradientDuoTone="tealToLime" onClick={() => setOpenModal(true)}>Create an account</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white pb-5">
            Register here
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Email"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="username"
              value="Username"
            />
          </div>
          <TextInput
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sizing="md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Full name"
            />
          </div>
          <TextInput
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sizing="md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="address"
              value="Address"
            />
          </div>
          <TextInput
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sizing="md"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="phoneNumber"
              value="Phone number"
            />
          </div>
          <TextInput
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sizing="md"
          />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label
              htmlFor="gender"
              value="Select gender"
            />
          </div>
          <Select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="dateOfBirth"
              value="Date of birth"
            />
            <Datepicker
              id="dateOfBirth"
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="joiningDate"
              value="Joining date"
            />
            <Datepicker
              id="joiningDate"
              selected={joiningDate}
              onChange={(date) => setJoiningDate(date)}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="rememberMe"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <Label htmlFor="rememberMe" className='py-3'>Remember me</Label>
        </div>
          <div className="w-full">
            <Button gradientDuoTone="greenToBlue" onClick={handleSubmit}>Register</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModal;