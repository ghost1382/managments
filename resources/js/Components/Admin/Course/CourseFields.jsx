import React, {useState} from 'react';
import CourseForm from '@/Components/CourseForm';
import axios from 'axios';


const CreateCourse = () => {
    const [form, setForm] = useState({
        title: '',
        file: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('file', form.file);

        axios.post('/admin/courses', formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Create Course</h1>
            <CourseForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
        </div>
    )
}

export default CreateCourse;
