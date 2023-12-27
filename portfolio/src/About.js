import { Tab } from '@headlessui/react';
import { useState } from 'react';


const experienceData = [
  {
    company: '21.co',
    location: 'New York, NY',
    dates: 'June 2023 - August 2023',
    jobTitle: 'Software Engineering Intern',
    description: 'Collaborated with a team of 5 to develop a mock ETP (Exchange Traded Product) portfolio web application using technologies such as React, Fast API, and AWS. Led the implementation of a user-friendly interface and integrated real-time data to enhance the app\'s functionality. Contributed to the entire development lifecycle to deployment ensuring seamless user experience and efficient data handling.',
    skills: ['React', 'CI/CD', 'AWS', 'FastAPI', 'Agile', 'PostgreSQL', 'Javascript', 'Software Development'],
  },
  {
    company: 'Art + AI Group @ UVM',
    location: 'Burlington, VT',
    dates: 'January 2023 - Present',
    jobTitle: 'Research Programmer',
    skills: ['Python', 'Pytorch', 'Matomo', 'Machine Learning', 'Research'],
    description:
      'Led the implementation of an AI system using CycleGAN to render pictures of damaged leaves into healthy ones. Co-led research for the American Heart Association. Worked on web development and analytics in Matomo tailored to the needs of several clinical trials.',
  },
  {
    company: 'SWiCS @ UVM',
    location: 'Burlington, VT',
    dates: 'September 2021 - May 2023',
    jobTitle: 'President of Society of Women in CS',
    skills: ['Leadership', 'Communication', 'Event Planning', 'Collaboration'],
    description:
      'Worked closely with the student government, the computer science department, and corporate partners to spearhead and organize CS-related workshops, networking events, and events such as the CS fair and Women in STEM conference and to increase undergraduate engagement for women in technology at UVM.',
  },
  {
    company: 'UVM CS Department',
    jobTitle: 'Teaching Assistant for Intro to Python and Data Structures in C++',
    dates: 'September 2021 - May 2023',
    skills: ['Data Structures', 'Python', 'C++', 'Teaching', 'Communication',],
    description:
      'Conducted office hours, graded projects, and provided guidance and support to a diverse group of over 100 students.',
  },
  {
    company: 'UVM CEMS',
    jobTitle: 'Communications Assistant',
    dates: 'September 2022 - Present',
    skills: ['Drupal', 'Wordpress', 'Communications', 'Accessibility', 'HTML/CSS'],
    description:
      'Updated the UVM website using Drupal and WordPress focusing on accessibility following WCAG standards, for thousands of people to view.',
  },
  {
    company: 'UVM Student Services',
    jobTitle: 'Communications Assistant',
    dates: 'September 2022 - Present',
    skills: ['Canva', 'Web Development', 'Organization', 'Troubleshooting'],
    description:
      'Assisted with updating the department website. Created and edited content for the department using Canva. Assisted with general techology support for student and the office. Gave advising to students on course selection and registration.',
  },
  {
    company: 'Girls Who Code',
    location: 'New York, NY',
    dates: 'June 2022 - August 2022',
    jobTitle: 'Teaching Assistant',
    skills: ['Web Development', 'HTML/CSS', 'Javascript', 'Community Building'],
    description:
      'Taught Web development including HTML/CSS/JS on Zoom to high school girls, developed community and mentorship.',
  },
  {
    company: 'Code Ninjas',
    location: 'Norwood, NJ',
    dates: 'June 2019 - August 2020',
    jobTitle: 'Computer Science Teacher',
    skills: ['Javascript', 'Teaching', 'Communication'],
    description:
      'Taught Javascript, Scratch, and basic programming concepts to kids aged 5-14.',
  },
  {
    company: 'Tech Tutors',
    location: 'Old Tappan, NJ',
    dates: 'September 2016 - June 2020',
    jobTitle: 'Co-President',
    skills: ['Community Development', 'Troubleshooting', 'Leadership'],
    description:
      'Assisted individuals of all ages within the community to increase accessibility and knowledge of technical devices.',
  },
];

function About() {
  const [activeTab, setActiveTab] = useState(0);

  const splitDescription = (description) => {
    const sentences = description.split('. ');
    return sentences.map((sentence, index) => (
      <div key={index} className={`flex items-start ${index === 0 ? 'pl-4' : 'ml-4'} pb-2`}>
        <span className="text-gray-800">{sentence}</span>
      </div>
    ));
  };


  return (
    <div className="pt-20">
      <h1 className="ml-[5%] mb-10 text-4xl font-bold text-pink-700">Experience</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex h-auto pd:0 md:h-screen w-full ml-[0%] md:w-1/4 sm:pl-[0%] md:w-3/5 md:r-[10%] pl-10 pr-10">
          {/* Left Side (Tabs) */}
          <Tab.Group>
            <Tab.List className="flex flex-col space-y-2 bg-gray-200 p-4 sm:ml-24 md:ml-0 h-auto md:h-3/5 max-w-content whitespace-nowrap">
              {experienceData.map((experience, index) => (
                <Tab
                  key={index}
                  className={`relative text-left ${
                    activeTab === index
                      ? 'text-pink-500 hover:text-pink-500 focus:outline-none focus:ring-0 pb-2'
                      : 'text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0 pb-2'
                  } focus:border-blue-300 transition duration-150 ease-in-out`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className={`${
                    activeTab === index
                      ? 'absolute inset-x-0 bottom-0 h-1 bg-pink-500'
                      : 'invisible'
                    }`}
                  />
                  {experience.company}
                </Tab>
              ))}
            </Tab.List>

            {/* Left Side (Content) */}
            <Tab.Panels className="flex-grow p-4 bg-pink-200 h-auto sm:h-3/5">
              {experienceData.map((experience, index) => (
                <Tab.Panel key={index}>
                  <div>
                    <h2 className="text-xl font-bold text-pink-500 mb-2">
                      {experience.jobTitle}
                    </h2>
                    <p className="text-gray-700 mb-2">{experience.company}</p>
                    <p className="text-gray-600 mb-4">{experience.dates}</p>
                  </div>
                  <ul className="list-disc list-inside">
                    {splitDescription(experience.description)}
                  </ul>
                  <div className="mt-4 flex flex-wrap space-x-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <button
                        key={skillIndex}
                        className="bg-pink-500 text-white py-1 px-2 rounded-full mb-2 hover:animate-shake"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>

        {/* Right Side (Photo Section) */}
        <div className="w-full md:w-1/3 mt-[3%] md:pl-[5%]">
          <div className="flex flex-col items-center">
            <img src="/maya-baby.png" alt="Maya Baby" className="h-72 w-auto" />
            <p className="text-gray-700 text-center text-sm mt-4">Computers have fascinated me since a young age. I loved the creativity and problem-solving that it afforded me. During college, I found my passion for building fast and beautiful software.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;