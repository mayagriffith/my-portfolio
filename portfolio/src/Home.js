import React from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row justify-center items-center h-screen">
      {/* Left Side */}
      <div className="md:w-1/2 relative lg:pl-24 lg:ml-20">
        {/* Pink Blob */}
        <div className="absolute md:ml-20 top-30 -left-10 w-72 h-72 bg-purple-300 rounded-full opacity-80 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="z-10 absolute top-40 -right-4 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        {/* Image */}
        <img
          src="/maya_photo.JPG"
          alt="Maya oof why isnt"
          className="h-auto mx-auto md:-mt-12 z-20"
          style={{ maxWidth: '60%' }}
        />
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 text-center md:pl-20 lg:pr-20">
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-pink-700">Hi! I'm Maya</h1>
          <div className="text-2xl text-pink-600">
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Web Developer', 'Researcher', 'Student'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="sm:m-0 font-bold mt-2 px-6 md:px-12 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full inline-flex items-center"
        >
          Download Resume (PDF)   <img src="/image.png" alt="Download Icon" className="ml-2 w-6 h-6 fill-white inline-block pr-0" />
        </a>
      </div>
    </div>
  );
};

export default Home;