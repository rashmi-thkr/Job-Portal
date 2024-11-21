import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import jobDetailsData from '@/DetailsData';

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobDetailsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <Link to="/" className="text-blue-600 underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/page.jpg)', 
          filter: 'blur(8px)', 
        }}
      ></div>

      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backdropFilter: 'blur(8px)' }}
      ></div>

      <div className="container mx-auto px-16 py-8 relative z-10">
        <h1
          className="text-3xl font-bold text-white text-center sha mb-6 italic animate-appear" 
          style={{ fontFamily: 'Palatino, serif', textShadow: '1px 1px 2px #000000', animationDelay: '0.2s' }}
        >
          Job Details
        </h1>

        <div className="border-2 border-gray-400 rounded-lg p-6 shadow-lg bg-gradient-to-r from-blue-100 via-white to-blue-100">
          <div className="flex items-center mb-4">
            <img
              src={job.companyLogo}
              alt={job.company + ' logo'}
              className="w-16 h-16 object-cover rounded-none mr-5"
            />
            <h2
              className="text-3xl font-bold animate-appear"
              style={{ fontFamily: 'Arial Black, sans-serif', animationDelay: '0.4s' }}
            >
              {job.title}
            </h2>
          </div>
          <p
            className="text-xl font-bold text-gray-900 mb-4 animate-appear"
            style={{
              fontFamily: 'Comic Sans MS',
              animationDelay: '0.6s',
            }}
          >
            Company: {job.company}
          </p>

          <h3 className="font-bold text-xl mt-6 animate-appear" style={{ animationDelay: '0.8s' }}>
            Job Description:
          </h3>
          <p className="text-lg animate-appear" style={{ animationDelay: '1s' }}>
            {job.description}
          </p><br />

          <p className="text-gray-900 animate-appear" style={{ animationDelay: '1.2s' }}>
            Location: {job.location}
          </p>
          <p className="text-gray-900 animate-appear" style={{ animationDelay: '1.4s' }}>
            Salary: {job.salary}
          </p>
          <p className="text-gray-900 animate-appear" style={{ animationDelay: '1.6s' }}>
            Job Type: {job.jobType}
          </p>
          <p className="text-gray-900 animate-appear" style={{ animationDelay: '1.8s' }}>
            Shift: {job.shift}
          </p>

          <h3 className="font-bold text-xl mt-6 animate-appear" style={{ animationDelay: '2s' }}>
            Requirements:
          </h3>
          <p className="text-lg animate-appear" style={{ animationDelay: '2.2s' }}>
            {job.requirements}
          </p>

          <h3 className="font-bold text-xl mt-6 animate-appear" style={{ animationDelay: '2.4s' }}>
            Qualifications:
          </h3>
          <p className="text-lg animate-appear" style={{ animationDelay: '2.6s' }}>
            {job.qualifications}
          </p>

          <h3 className="font-bold text-xl mt-6 animate-appear" style={{ animationDelay: '2.8s' }}>
            Skills:
          </h3>
          <p className="text-lg animate-appear" style={{ animationDelay: '3s' }}>
            {job.skills}
          </p>

          <div className="mt-6 text-center animate-appear" style={{ animationDelay: '3.2s' }}>
            <Link
              to={`/apply/${id}`}
              className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
