
'use client';

import { Datepicker, Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

function FormEducation() {
  return (
    <div> 
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Pendidikan Terakhir" />
          </div>
          <TextInput id="email" type="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Tahun Mulai" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Tahun selesai" />
            <Datepicker />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Nilai" />
          </div>
          <TextInput id="address" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Organisasi" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FormEducation;
