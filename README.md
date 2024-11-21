# JobSphere

**JobSphere** is a web-based job portal that connects job seekers with top employers, providing a seamless platform to explore career opportunities and streamline the application process. The platform features a user-friendly interface, search filters, and interactive job details to enhance the recruitment experience.

---

## 🚀 Features

- **Homepage with Animated Banner**: A visually appealing homepage with a dynamic background and welcoming message.
- **Job Listings**: Browse job opportunities with key details like job title, company name, location, and salary displayed in a responsive card layout.
- **Search and Filter Jobs**:
  - Search jobs by role, type, location, and experience using an intuitive dropdown-based search bar.
  - Hide the search bar on specific routes like job details or application forms.
- **Job Details Page**: View detailed descriptions of individual job postings, including job requirements, company information, and salary.
- **Apply for Jobs**:
  - Upload resumes in PDF or DOCX format.
  - Get instant feedback on the uploaded file type.
  - A success message confirms the application submission.
- **Responsive Design**: Fully responsive and optimized for devices of all screen sizes.

---

## 🛠️ Technologies Used

### Frontend:
- **React.js**: Core library for building UI components.
- **React Router**: For managing navigation and dynamic routing.
- **TailwindCSS**: To style the components and create responsive layouts.

### State Management:
- **useState & useEffect**: To handle component states and lifecycle events.

### Date Manipulation:
- **Day.js**: For formatting job posting dates (e.g., "Posted 2 days ago").

### Utility Libraries:
- **PropTypes**: To validate props passed to components.

---

## 📁 How to Run the Project Locally
### Prerequisites:
- Node.js (v16 or higher)
- npm or yarn

### Steps: ###
1. Clone the repository:
---bash
git clone https://github.com/rashmi-thkr/Job-Portal.git

2. Navigate to the project directory:
---bash
cd frontend

3. Install dependencies:
---bash
npm install
npm install dayjs prop-types react-icons @heroicons/react react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


4. Start the development server:
---bash
npm start

5. Open the application in your browser:
http://localhost:5173/