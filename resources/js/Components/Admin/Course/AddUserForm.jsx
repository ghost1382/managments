import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import Select from '@/Components/Select';

export default function AddUserToCourse({ course }) {
    const { data, setData, post, errors: formErrors } = useForm({
        class_id: ''
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                post(route('admin.course.user.store', course))
                    .catch((error) => {
                        if (error.response.status === 422) {
                            setFormErrors(error.response.data.errors);
                        }
                    });
            }}
        >
            <ValidationErrors errors={formErrors} />
            <div className="flex items-end gap-4">
                <div>
                    <Label value="Class" forInput="class_id" />
                    <Select
                        id="class_id"
                        name="class_id"
                        value={data.class_id}
                        onChange={e => setData('class_id', e.target.value)}
                        options={[
                            { value: '1', label: 'S1' },
                            { value: '2', label: 'S2' },
                            { value: '3', label: 'S3' },
                            { value: '4', label: 'Master' },
                        ]}
                    />
                    <Button>Add</Button> 
                </div>
                
            </div>
        </form>
    );
}
