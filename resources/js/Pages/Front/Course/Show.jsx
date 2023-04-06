import React from 'react';
import Layout from '@/Layouts/Layout';
import ModuleList from '@/Components/Front/Module/ModuleList';
import { Link } from '@inertiajs/inertia-react';

export default function ({ course, modules }) {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8">
        <p className="mb-4 text-gray-500"><Link href={route('my-courses')} className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">My Courses</Link> {'>'} <span className="font-medium text-gray-900">{course.title}</span></p>

        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <div className="prose mb-8" dangerouslySetInnerHTML={{ __html: course.content }}></div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Modules</h2>
          <ModuleList modules={modules} course={course} />
        </div>
      </div>
    </Layout>
  )
}
