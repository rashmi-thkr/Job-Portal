import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobDetailsData from '@/DetailsData'; 

const ApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobDetailsData[id]; // Find the job using the id

  const [successMessage, setSuccessMessage] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      if (fileType === 'pdf' || fileType === 'docx') {
        setResumeFile(file);
        setResumeError('');
      } else {
        setResumeFile(null);
        setResumeError('Please upload a valid file (PDF or DOCX only).');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setResumeError('Please upload your resume before submitting.');
      return;
    }
    setSuccessMessage('Application submitted successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
        <p>Please check the job ID.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-200 font-monospace">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/form.jpg)',  }} >
      </div>
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ backdropFilter: 'blur(8px)' }}>
      </div>

      {/* Form Box */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border-2 border-gray-300 relative z-10 animate-scale-down">
        <h2 className="text-2xl font-bold text-center mb-2">Application Form</h2>
        <h3 className="text-lg text-gray-700 font-bold mb-4">
          Apply for {job.title} at {job.company}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-900 font-serif">Full Name</label>
            <input type="text" required className="w-full p-2 border border-gray-300 rounded font-serif" />
          </div>

          <div>
            <label className="block text-gray-900 font-serif">Email Address</label>
            <input type="email" required className="w-full p-2 border border-gray-300 rounded font-serif" />
          </div>

          <div>
            <label className="block text-gray-900 font-serif">Resume</label>
            <input type="file" accept=".pdf,.docx" onChange={handleFileChange} className="w-full font-serif" />
            {resumeFile && (
              <p className="text-sm text-green-700 mt-2"> 
                Uploaded File: {resumeFile.name}
              </p>
            )}
            {resumeError && (
              <p className="text-sm text-red-600 mt-2">{resumeError}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
            Submit Application
          </button>

          <div className="text-center">
            <button type="button" onClick={() => navigate(`/job/${id}`)} // Redirect to JobDetailsPage
              className="inline-block bg-red-500 text-white py-2 px-6 rounded hover:bg-red-700 transition duration-200 mt-2" >
              Close
            </button>
          </div>
        </form>
      </div>

      {successMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
          <div className="bg-green-100 text-green-700 p-6 rounded-lg shadow-lg text-center max-w-md mx-4">
            <p>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
