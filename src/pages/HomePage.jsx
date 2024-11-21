import { useState, useEffect } from 'react';
import JobCard from '@/components/JobCard';
import jobList from '@/DummyData';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime); // Extend dayjs with the relativeTime plugin

const HomePage = () => {
  const [scroll, setScroll] = useState(0); // State to track scroll position
  const [showMore, setShowMore] = useState(false); // State to control visibility of more job cards

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatPostedTime = (date) => {
    return dayjs(date).fromNow(); 
  };

  const backgroundScale = 1 + scroll * 0.0001; 

  const displayedJobs = showMore ? jobList : jobList.slice(0, 6); // Show first 6 jobs initially

  return (
    <div className="w-full">
      <div className="relative w-full h-[500px] fade-in-background">
        <div
          className="absolute inset-0 bg-cover bg-center bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('/images/handshake.jpg')",
            filter: 'blur(2px)',
            transform: `scale(${backgroundScale})`,
            transition: 'transform 0.1s ease-out',
          }}
        ></div>

        <header className="relative flex items-center justify-center h-full text-center text-white z-10 px-8 sm:px-12">
          <div>
            <h1 className="text-6xl mb-4 animate-appear" style={{ fontFamily: 'Impact, sans-serif', textShadow: '2px 2px 4px #000000' }}>
              Welcome to JobSphere!
            </h1>
            <p className="text-xl font-semibold animate-appear" style={{ fontFamily: 'Palatino, serif', textShadow: '1px 1px 2px #000000' }}>
              Discover your next career opportunity with JobSphere. Our platform connects you with top employers and provides a seamless application process. <br />Explore our job listings and take the first step towards your dream job.
            </p>
          </div>
        </header>
      </div>

      {/* Job Listings Section */}
      <section className="py-12 px-8 md:px-40">
        <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {displayedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={{
                ...job,
                postedTime: formatPostedTime(job.postedTime),
              }}
            />
          ))}
        </div>

        {!showMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowMore(true)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
            >
              View More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
