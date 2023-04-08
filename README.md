<h1>Learnify - A Customizable Learning Management System</h1>

<p>Learnify is a Learning Management System built with Laravel, Inertia, React, and Tailwind CSS. This system was created to provide an easily customizable LMS that is suitable for a variety of educational institutions.</p>

<h2>Functionality</h2>

<h3>Courses</h3>
<ul>
    <li>Teachers/Admins can create courses with a title and some content (WYSIWYG)</li>
    <li>Courses can be viewed by students from chosen classes</li>
</ul>

<h3>Modules</h3>
<ul>
    <li>Each course can have a number of modules.</li>
    <li>Each module has a title and some content (WYSIWYG)</li>
    <li>Modules can be viewed by students from chosen classes</li>
</ul>

<h3>Lessons</h3>
<ul>
    <li>Each module can have a number of lessons</li>
    <li>Each lesson has a title and some content (WYSIWYG)</li>
    <li>Lessons can be viewed by students from chosen classes</li>
</ul>

<h3>Users</h3>
<ul>
    <li>Students can create their own accounts</li>
    <li>Teachers/Admins can create other users (Teachers/Admins or Students)</li>
    <li>Teachers/Admins can assign users to courses</li>
    <li>Teachers/Admins can remove users from courses</li>
    <li>Teachers/Admins can view a user's details</li>
    <li>Students can view their assigned courses on a My Courses page</li>
    <li>Students can only view the courses/modules/lessons they are assigned to</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>Laravel</li>
    <li>Inertia</li>
    <li>React</li>
    <li>Tailwind CSS</li>
</ul>

<h2>Installation and Setup</h2>
<ol>
    <li>Clone the repository</li>
    <li>Install the dependencies using <code>composer install</code> and <code>npm install</code></li>
    <li>Create a <code>.env</code> file by copying the <code>.env.example</code> file and updating it with your database credentials</li>
    <li>Run the migrations using <code>php artisan migrate</code></li>
    <li>Start the development server using <code>php artisan serve</code> and <code>npm run dev</code></li>
</ol>

<h2>Contribution Guidelines</h2>
<p>If you want to contribute to Learnify, please follow these guidelines:</p>
<ol>
    <li>Fork the repository</li>
    <li>Create a new branch with your changes</li>
    <li>Submit a pull request with a detailed description of your changes</li>
</ol>

<h2>Credits</h2>
<p>Learnify was inspired by Ghost, and was created by simou and [Ahmed|Abdell].</p>
