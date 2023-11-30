"use client";

import React, { useRef, useState } from "react";
import { Alert, Button, Checkbox, Label, Modal, TextInput, Datepicker } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import axios from "axios";
import RegisterModal from "./registerModal";

function AddEducation() {
  const [openModal, setOpenModal] = useState(false);
  const [lastEdu, setLastEdu] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [grade, setGrade] = useState('');
  const [organization, setOrganization] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      lastEdu,
      startDate,
      finishDate,
      grade,
      organization
    };

    try {
      const response = await axios.post('/api/userEdu/create', formData);
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error as needed
    }
  };

  return (
    <>
      <Button gradientDuoTone="greenToBlue" onClick={() => setOpenModal(true)}>
        Add New Education
      </Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white pb-5">
          Education History
        </h3>
          <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="lastEdu" value="Pendidikan Terakhir" />
              </div>
              <TextInput
                id="lastEdu"
                type="text"
                placeholder="Pendidikan Terakhir"
                value={lastEdu}
                onChange={(e) => setLastEdu(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="startDate" value="Tahun Mulai" />
                <Datepicker
                  id="startDate"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="finishDate" value="Tahun Selesai" />
                <Datepicker
                  id="finishDate"
                  selected={finishDate}
                  onChange={(date) => setFinishDate(date)}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="grade" value="Nilai" />
              </div>
              <TextInput
                id="grade"
                type="number"
                placeholder="Nilai"
                value={grade}
                onChange={(e) => setGrade(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="organization" value="Organisasi" />
              </div>
              <TextInput
                id="organization"
                type="text"
                placeholder="Organisasi"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
            <Button gradientDuoTone="redToYellow" type="submit">Add</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddEducation;
