
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from '@/pages/HomePage';
import JobDetailsPage from '@/pages/JobDetailsPage';
import ApplicationForm from './pages/ApplicationForm';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/apply/:id" element={<ApplicationForm />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          © 2024 JobSphere. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
