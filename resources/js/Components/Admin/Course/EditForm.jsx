import React, { useState } from 'react';
import axios from 'axios';

import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';

const EditForm = ({ course }) => {
  const [form, setForm] = useState({
    title: course.title,
    file: null
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('_method', 'put');
    formData.append('title', form.title);
    formData.append('file', form.file);
    formData.append('id', course.id); // include the id of the course in the form data
  
    try {
      const response = await axios.put('/admin/courses', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      setSuccessMessage(response.data.message);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  
  

  return (
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="hidden" name="_method" value="PUT"/>
<input type="hidden" name="_token" value="{{ csrf_token() }}"/>

      <Label forInput="title">Title</Label>
      <Input type="text" name="title" value={form.title} handleChange={e => setForm({ ...form, title: e.target.value })} />

      <div className="mt-4">
        <Label>File</Label>
        <label className="file-input-label">
          <span className="file-input-text">{form.file ? form.file.name : 'Choose File'}</span>
          <input className="file-input" type="file" name="file" onChange={e => setForm({ ...form, file: e.target.files[0] })} />
        </label>
      </div>

      {/* add a hidden input field to the form */}
      <input type="hidden" name="id" value={course.id} />

      <br />

      <Button type="submit">Save</Button>

      {successMessage && (
        <div className="mt-4 text-green-500">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 text-red-500">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

export default EditForm;
