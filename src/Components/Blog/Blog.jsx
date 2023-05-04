import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-24 mb-24'>

<div className="flex flex-col w-full">
  <div className="grid h-auto card bg-emerald-700 rounded place-items-center p-6">
    <div><h2 className='text-emerald-100 font-semibold'>Question - 1: Differences Between Uncontrolled and Controlled Components.</h2></div>
  <div className='border p-6 border-red-100 rounded-md tex mt-4'>
    <h3 className='text-center bg-white rounded w-36 mx-auto underline text-emerald-700'>Answer</h3>
  <div className='flex gap-10 mt-4 text-red-100 text-sm'>
    <ul>
        <h3 className='font-bold'>Controlled</h3>
        <li className='mt-2'>- It does not maintain its internal state.</li>
        <li>- Here, data is controlled by the parent component.</li>
        <li>- It accepts its current value as a prop.</li>
        <li>- It allows validation control.</li>
        <li>- It has better control over the form elements and data.</li>
    </ul>
    
    <ul>
        <h3 className='font-bold'>Uncontrolled</h3>
        <li className='mt-2'>- It maintains its internal states.</li>
        <li>- Here, data is controlled by the DOM itself.</li>
        <li>- It uses a ref for their current values.</li>
        <li>- It does not allow validation control.</li>
        <li>- It has limited control over the form elements and data.</li>
    </ul>
  </div>
  </div>
  </div> 
  
  <div className="divider"></div> 
  <div className="grid h-auto card bg-emerald-700 rounded place-items-center p-6">
    <div><h2 className='text-emerald-100 font-semibold'>Question - 2: How to validate React props using PropTypes</h2></div>
  <div className='border p-6 border-red-100 rounded-md tex mt-4 w-96'>
    <h3 className='text-center bg-white rounded w-36 mx-auto underline text-emerald-700'>Answer</h3>
  <div className='flex gap-10 mt-4 text-red-100 text-sm'>
    <p className=''>Child components receive props from their parent components. And they are received by child components. This enables components to communicate with one another, allowing us to use data anywhere we want.Any data can be passed as a prop. So that the child component receives the data they anticipate, we need a means to validate their data type.Prop-types package gives us methods to validate any prop type, making component prop data type validation simple.
</p>
  </div>
  </div>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-auto card bg-emerald-700 rounded place-items-center p-6">
    <div><h2 className='text-emerald-100 font-semibold'>Question - 3: Tell us the difference between nodejs and express js.</h2></div>
  <div className='border p-6 border-red-100 rounded-md tex mt-4'>
    <h3 className='text-center bg-white rounded w-36 mx-auto underline text-emerald-700'>Answer</h3>
  <div className='flex gap-10 mt-4 text-red-100 text-sm'>
  <ul>
        <h3 className='font-bold'>Express.js</h3>
        <li className='mt-2'>- It is used to build web-apps using approaches and principles of Node.js.</li>
        <li>- More features than Node.js.</li>
        <li>- It is built on Node.js.</li>
        <li>- Framework based on Node.js.</li>
        <li>- Routing is provided.</li>
        <li>- Uses middleware for the arrangement of functions systematically server-side.</li>
        <li>- It requires less coding time.</li>
        
    </ul>
    <ul>
    <h3 className='font-bold'>Node.js</h3>
    <li className='mt-2'>- It is used to build server-side, input-output, event-driven apps.</li>
        <li>- Fewer features.</li>
        <li>- It is built on Google’s V8 engine.</li>
        <li>- Run-time platform or environment designed for server-side execution of JavaScript.</li>
        <li>- Routing is not provided.</li>
        <li>- Doesn’t use such a provision.</li>
        <li>- It requires more coding time.</li>
    </ul>
  </div>
  </div>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-auto card bg-emerald-700 rounded place-items-center p-6">
    <div><h2 className='text-emerald-100 font-semibold'>Question - 4: What is a custom hook, and why will you create a custom hook?</h2></div>
  <div className='border p-6 border-red-100 rounded-md tex mt-4'>
    <h3 className='text-center bg-white rounded w-36 mx-auto underline text-emerald-700'>Answer</h3>
  <div className='mt-4 text-red-100 text-sm'>
    <p>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. </p> <br />
    
    <div className='font-thin italic'>
    <p>Let’s take a look at some major differences between a custom React JS hook and React JS components:</p>
    <li>A custom hook does not require a specific signature.</li>
    <li>A software developer can choose what argument the custom hook has and what should the argument return.</li>
    <li>A custom hook always starts with the name ‘use’.</li>
    </div>
  </div>
  </div>
  </div>
</div>
  </div>
    );
};

export default Blog;