
'use client';

import { Datepicker, Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

function RegisterPage() {
  return (
    <div className='p-10'> 
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput id="email" type="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Username" />
          </div>
          <TextInput id="username" type="username" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Full name" />
          </div>
          <TextInput id="name" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Address" />
          </div>
          <TextInput id="address" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Phone number" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="gender" value="Select gender" />
          </div>
          <Select id="gender" required>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Date of bird" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Joining date" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput id="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default RegisterPage;
