import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const SearchBar = () => {
  const location = useLocation();

  const [jobRole, setJobRole] = useState('');
  const [jobType, setJobType] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [experience, setExperience] = useState('');

  // Hide SearchBar on JobDetailsPage and ApplicationForm routes
  if (location.pathname.includes('/job') || location.pathname.includes('/apply')) {
    return null;
  }

  // Function to reset all dropdowns to their initial values
  const handleClear = () => {
    setJobRole('');
    setJobType('');
    setLocationValue('');
    setExperience('');
  };

  return (
    <div
      className="bg-gray-100 px-6 py-4"
      style={{ background: 'linear-gradient(45deg, #BCCCDC, #D6E4E5, #E0F7FA)' }}
    >
      <div className="flex gap-6 justify-center px-10 flex-wrap">
        {/* Job Role Custom Dropdown with Image */}
        <div className="relative w-52">
          <select
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded pl-8"
          >
            <option value="" disabled hidden>
              Job Role
            </option>
            <option value="manager">Manager</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="support">Support</option>
          </select>
          <img src="/images/role1.png" alt="Job Role" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Job Type Custom Dropdown with Image */}
        <div className="relative w-52">
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded pl-8"
          >
            <option value="" disabled hidden>
              Job Type
            </option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
          <img src="/images/sch1.png" alt="Job Type" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Location Custom Dropdown with Image */}
        <div className="relative w-52">
          <select
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded pl-8"
          >
            <option value="" disabled hidden>
              Location
            </option>
            <option value="remote">Remote</option>
            <option value="in-office">In-Office</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <img src="/images/loc1.png" alt="Location" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Experience Custom Dropdown with Image */}
        <div className="relative w-52">
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded pl-8"
          >
            <option value="" disabled hidden>
              Experience
            </option>
            <option value="fresher">Fresher</option>
            <option value="junior-level">Junior Level</option>
            <option value="intermediate-level">Intermediate Level</option>
            <option value="senior-level">Senior Level</option>
          </select>
          <img src="/images/exp1.png" alt="Experience" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>

        {/* Search Button */}
        <button className="w-52 p-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2">
          <img src="/images/s1.gif" alt="Loading" className="w-6 h-6" />
          Search
        </button>

        {/* Clear Button */}
        <button className="w-10 flex items-center justify-center gap-2 rounded hover:bg-gray-100 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          onClick={handleClear} >
              <img src="/images/clear.png" alt="Clear" className="w-10 h-10" />
        </button>

      </div>
    </div>
  );
};

export default SearchBar;
