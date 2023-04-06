import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function({ course }) {
  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition ease-in-out duration-150">
      <h2 className="text-lg font-medium text-gray-900 mb-2">{course.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{course.description}</p>
      <Link href={route('course.show', course)} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150">
        View Course
      </Link>
    </div>
  );
}
