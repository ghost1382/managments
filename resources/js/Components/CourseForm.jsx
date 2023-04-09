import React from 'react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Button from '@/Components/Button';

const CourseForm = ({form, setForm, handleSubmit, csrfToken}) => {
    
    return (
        <form action="/admin/courses" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input type="hidden" name="_token" value={csrfToken} />
            <input type="hidden" name="_method" value="PUT" />
            <Label forInput="title">Title</Label>
            <Input type="text" name="title" value={form.title} handleChange={e => setForm({...form, title: e.target.value})} />

            <div className="mt-4">
                <Label>File</Label>
                <input type="file" name="file" onChange={e => setForm({...form, file: e.target.files[0]})} />
            </div>
<br/>
            <Button type="submit">Create Course</Button>
        </form>
    )
}

export default CourseForm;
