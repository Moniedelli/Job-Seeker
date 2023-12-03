"use client";

import React, { useState } from "react";
import { Button, Label, Modal, TextInput, Datepicker } from "flowbite-react";

import axios from "axios";

function AddJob() {
  const [openModal, setOpenModal] = useState(false);
  const [jobHistory, setJobHistory] = useState('');
  const [companyHistory, setCompanyHistory] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [workExperience, setWorkExperience] = useState('');
  const [skill, setSkill] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      jobHistory,
      companyHistory,
      startDate,
      finishDate,
      workExperience,
      skill
    };

    try {
      const response = await axios.post('/api/userJob/create', formData);
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error as needed
    }
  };

  return (
    <>
      <Button outline gradientDuoTone="redToYellow" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white pb-5">
          Job History
        </h3>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Pekerjaan terdahulu" />
          </div>
          <TextInput id="text" type="text" value={jobHistory} onChange={(e) => setJobHistory(e.target.value)} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Perusahaan terdahulu" />
          </div>
          <TextInput id="text" type="text" value={companyHistory} onChange={(e) => setCompanyHistory(e.target.value)} sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Tahun Mulai" />
            <Datepicker id="startDate" selected={startDate} onChange={(date) => setStartDate(date)}/>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Tahun selesai" />
            <Datepicker id="finishDate" selected={finishDate} onChange={(date) => setFinishDate(date)}/>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Pengalaman kerja" />
          </div>
          <TextInput id="text" type="text" value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="text" value="Keahlian" />
          </div>
          <TextInput id="text" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} sizing="md" />
        </div>
        <Button gradientDuoTone="redToYellow" type="submit">Add</Button>
      </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddJob;
