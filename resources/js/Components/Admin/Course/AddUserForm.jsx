import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

import ValidationErrors from '@/Components/ValidationErrors';
import Label from '@/Components/Label';
import Button from '@/Components/Button';

export default function AddUserToCourse({ course }) {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, post, errors: formErrors } = useForm({
        class_id: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        post(route('admin.course.user.store', course), {
            onSuccess: (response) => {
                setData('class_id', '');
                course.users = response.users;
            },
            onError: () => {
                setIsLoading(false);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ValidationErrors errors={formErrors} />
            <div className="flex items-end gap-4">
                <div>
                    <Label value="Class" forInput="class_id" />
                    <select id="class_id" name="class_id" value={data.class_id} onChange={e => setData('class_id', e.target.value)}>
                        <option value="">Select a class</option>
                        <option value="1">S1</option>
                        <option value="2">S2</option>
                        <option value="3">S3</option>
                        <option value="4">Master</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <Button disabled={isLoading}>
                    {isLoading ? 'Adding Users...' : 'Add Users'}
                </Button>
            </div>
        </form>
    )
}
