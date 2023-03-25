import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Button from '@/Components/Button';

export default function AddUserToCourse({ course }) {
    const { data, setData, post, errors: formErrors } = useForm({
        class_id: ''
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                post(route('admin.course.user.store', course));
            }}
        >
            <ValidationErrors errors={formErrors} />
            <div className="flex items-end gap-4">
                <div>
                    <Label value="Class" forInput="class_id" />
                    <Input id="class_id" name="class_id" type="text" placeholder="Class ID" value={data.class_id} handleChange={e => setData('class_id', e.target.value)} />
                </div>
                <Button>
                    Add Users
                </Button>
            </div>
        </form>
    )
}

