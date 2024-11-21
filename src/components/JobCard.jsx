import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`); // Navigate to JobDetailsPage with job ID
  };

  return (
    <div
      className="bg-slate-200 px-8 py-7 rounded-lg border-2 border-gray-300 w-full max-w-[calc(100%-12px)] mx-auto sm:max-w-none transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex flex-col justify-between"
      style={{
        WebkitBoxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
        boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
      }}
    >
      <div className="flex items-center mb-4">
        <img src={job.companyLogo} alt="Company Logo" className="w-12 h-12 mr-6 rounded-full" />
        <div>
          <h3 className="font-semibold text-xl">{job.companyName}</h3>
          <p className="text-sm text-gray-500">{job.postedTime}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">{job.jobTitle}</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded">
          🕒 {job.jobType}
        </span>
        <span className="bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded">
          💰 {job.salary}
        </span>
      </div>
      <div className="mb-4">
        <span className="bg-gray-300 text-gray-700 text-sm py-1 px-2 rounded">
          📍 {job.location}
        </span>
      </div>

      <div className="flex justify-start mt-6">
  <button
    onClick={handleViewDetails} // Call navigation handler
    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
  >
    View Details
  </button>
</div>

    </div>
  );
};

// Prop validation
JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    postedTime: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
