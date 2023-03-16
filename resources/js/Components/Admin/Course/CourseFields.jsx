import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import Input from '@/Components/Input';
import Label from '@/Components/Label';

const CourseFields = ({form, setData, editorRef, content}) => {
    
    return (
        <>
            <Label forInput="title">Title</Label>
            <Input type="text" name="title" value={form.title} handleChange={e => setData('title', e.target.value)} />

            <div className="mt-4">
                <Label>Description</Label>
                <textarea
                    name="description"
                    rows="5"
                    value={form.description}
                    onChange={e => setData('description', e.target.value)}
                    className="border border-gray-400 p-2 w-full"
                ></textarea>
            </div>

            <div className="mt-4">
                <Label>Image</Label>
                <input type="file" name="image" onChange={e => setData('image', e.target.files[0])} />
            </div>

            <div className="mt-4">
                <Label>File</Label>
                <input type="file" name="file" onChange={e => setData('file', e.target.files[0])} />
            </div>

            {/* <div className="mt-4">
                <Label>Content</Label>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue={content}
                    init={{
                        height: 500,
                    }}/>
            </div> */}
        </>
    )
}

export default CourseFields;
