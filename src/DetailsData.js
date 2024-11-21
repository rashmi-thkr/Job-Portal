const jobDetailsData = {
  1: {
    title: 'Software Engineer',
    company: 'Tech Innovations',
    location: 'Bangalore, India',
    salary: '₹ 40k - 80k',
    jobType: 'Full-Time',
    shift: 'Day Shift',
    description: 'We are looking for a skilled Software Engineer to join our dynamic team. You will work on developing cutting-edge software solutions and contribute to key projects. Your role will involve analyzing user needs, designing software solutions, and writing clean, scalable code. You will be part of a collaborative team working on exciting new technologies.',
    requirements: '3+ years of experience in software development, knowledge of Java and Python, and strong problem-solving skills. Experience with Agile methodologies is a plus.',
    qualifications: 'Bachelor\'s or Master\'s degree in Computer Science or related field.',
    skills: 'Java, Python, Agile Development, Problem-Solving, Teamwork',
    companyLogo: '/images/logo1.png', // Add company logo path
  },
  2: {
    title: 'Graphic Designer',
    company: 'Creative Minds',
    location: 'Delhi, India',
    salary: '₹ 25k - 50k',
    jobType: 'Part-Time',
    shift: 'Flexible Hours',
    description: 'We are looking for a talented Graphic Designer to create visual content for marketing campaigns, websites, and more. The ideal candidate will have a strong eye for design, creativity, and a passion for producing high-quality visuals. You will work closely with marketing teams to design visually appealing graphics that communicate our brand and message effectively.',
    requirements: 'Experience with Adobe Photoshop, Illustrator, and other design tools. A portfolio of design work is a must. Understanding of branding and typography is essential.',
    qualifications: 'Degree in Graphic Design or related field.',
    skills: 'Adobe Photoshop, Illustrator, Creativity, Typography, Branding',
    companyLogo: '/images/logo2.png', // Add company logo path
  },
  3: {
    title: 'Frontend Developer',
    company: 'Web Wizards',
    location: 'Remote',
    salary: '₹ 50k - 1 Lakh',
    jobType: 'Full-Time',
    shift: 'Flexible Hours',
    description: 'Join our remote team to work on exciting frontend development projects. The ideal candidate should be passionate about creating user-friendly, responsive websites. You will be involved in building interactive user interfaces, implementing new features, and optimizing web pages for maximum speed and scalability. You will collaborate closely with backend developers to integrate frontend functionalities.',
    requirements: '3+ years of experience in React.js, HTML, CSS, and JavaScript. Experience with Git and responsive design principles is a plus.',
    qualifications: 'Bachelor\'s degree in Computer Science or related field.',
    skills: 'React.js, HTML, CSS, JavaScript, Git, Responsive Design',
    companyLogo: '/images/logo3.png', // Add company logo path
  },
  4: {
    title: 'Data Scientist',
    company: 'Data Vision',
    location: 'Mumbai, India',
    salary: '₹ 60k - 1.2 Lakh',
    jobType: 'Full-Time',
    shift: 'Day Shift',
    description: 'As a Data Scientist, you will work on collecting, analyzing, and interpreting large data sets to help make business decisions. You will also be responsible for building predictive models and delivering actionable insights to stakeholders. The role involves collaborating with product teams to identify key business challenges and leverage data to drive improvements.',
    requirements: 'Proficient in Python, R, and machine learning algorithms. Experience with data visualization tools such as Tableau or PowerBI. Knowledge of big data technologies is a plus.',
    qualifications: 'Master\'s degree in Data Science, Mathematics, or related field.',
    skills: 'Python, R, Machine Learning, Data Visualization, Statistics',
    companyLogo: '/images/logo4.png', // Add company logo path
  },
  5: {
    title: 'Backend Developer',
    company: 'Soft Solutions',
    location: 'Pune, India',
    salary: '₹ 45k - 90k',
    jobType: 'Full-Time',
    shift: 'Night Shift',
    description: 'We are seeking an experienced Backend Developer to join our team and work on building robust, scalable, and high-performance server-side applications. You will be responsible for designing the backend architecture, developing RESTful APIs, and working with databases to ensure data integrity and performance. You will collaborate closely with frontend developers to create seamless user experiences.',
    requirements: 'Proficiency in Node.js, Express.js, MongoDB, and RESTful API development. Familiarity with cloud services such as AWS or Azure is a plus.',
    qualifications: 'Bachelor\'s degree in Computer Science or related field.',
    skills: 'Node.js, Express.js, MongoDB, API Development, RESTful Services',
    companyLogo: '/images/logo5.png', // Add company logo path
  },
  6: {
    title: 'Product Manager',
    company: 'Innovative Tech',
    location: 'Mumbai, India',
    salary: '₹ 70k - 1.5 Lakh',
    jobType: 'Full-Time',
    shift: 'Flexible Hours',
    description: 'As a Product Manager, you will work closely with development, marketing, and sales teams to bring innovative products to market. You will be responsible for the product lifecycle from concept to delivery, including defining product vision, creating roadmaps, and managing timelines. You will be the voice of the customer and ensure that our products meet user needs and exceed expectations.',
    requirements: 'Proven experience in product management, excellent communication and leadership skills. Ability to prioritize tasks and manage resources effectively.',
    qualifications: 'MBA or equivalent degree in Product Management or Business.',
    skills: 'Product Management, Leadership, Communication, Agile, Problem-Solving',
    companyLogo: '/images/logo6.png', // Add company logo path
  },
  7: {
    title: 'UX/UI Designer',
    company: 'Digital Creators',
    location: 'Remote',
    salary: '₹ 30k - 60k',
    jobType: 'Contract',
    shift: 'Flexible Hours',
    description: 'Join our team to work on enhancing user experiences and interfaces for web and mobile applications. You will design intuitive and visually appealing interfaces, ensuring seamless interaction for users. A strong portfolio of UI/UX design work is required to demonstrate your expertise in creating user-centered designs.',
    requirements: 'Experience with Figma, Adobe XD, Sketch, and prototyping tools. Understanding of user research and testing methodologies is essential.',
    qualifications: 'Degree in Graphic Design, UX/UI Design, or related field.',
    skills: 'Figma, Adobe XD, Prototyping, Wireframing, User Testing',
    companyLogo: '/images/logo7.png', // Add company logo path
  },
  8: {
    title: 'JavaScript Developer',
    company: 'Web Studios',
    location: 'Bangalore, India',
    salary: '₹ 35k - 70k',
    jobType: 'Internship',
    shift: 'Day Shift',
    description: 'We are looking for a JavaScript Developer to work on frontend and backend technologies. This internship is ideal for those looking to gain hands-on experience in the industry. You will assist in developing web applications, debugging issues, and testing new features. This is a great opportunity for individuals who want to learn from experienced developers and grow their skills.',
    requirements: 'Knowledge of JavaScript, HTML, and CSS. Basic understanding of Node.js is a plus.',
    qualifications: 'Bachelor\'s degree or currently enrolled in a Computer Science program.',
    skills: 'JavaScript, HTML, CSS, Node.js, Git',
    companyLogo: '/images/logo8.png', // Add company logo path
  },
  9: {
    title: 'DevOps Engineer',
    company: 'Cloud Innovators',
    location: 'Hyderabad, India',
    salary: '₹ 50k - 1 Lakh',
    jobType: 'Full-Time',
    shift: 'Day Shift',
    description: 'We are seeking a DevOps Engineer to streamline our development processes and manage the infrastructure. Your responsibilities will include automating deployment, monitoring, and ensuring high availability of applications. This is an exciting opportunity to work with cloud technologies and contribute to improving operational efficiency.',
    requirements: 'Experience with CI/CD pipelines, Kubernetes, Docker, and AWS services. Strong scripting skills in Python or Bash. Familiarity with infrastructure as code tools like Terraform is a plus.',
    qualifications: 'Bachelor\'s degree in Computer Science or related field.',
    skills: 'CI/CD, Kubernetes, Docker, AWS, Python, Bash, Terraform',
    companyLogo: '/images/logo9.png', // Add company logo path
  },
  10: {
    title: 'Marketing Manager',
    company: 'Brand Builders',
    location: 'Chennai, India',
    salary: '₹ 40k - 90k',
    jobType: 'Full-Time',
    shift: 'Flexible Hours',
    description: 'Join our team as a Marketing Manager to lead brand-building campaigns and oversee digital marketing strategies. You will be responsible for managing marketing budgets, creating marketing plans, and driving user engagement through innovative campaigns. This role requires a mix of creativity and strategic thinking.',
    requirements: 'Proven experience in marketing, knowledge of digital marketing tools, and strong analytical skills. Experience with SEO, Google Ads, and social media marketing is a plus.',
    qualifications: 'MBA in Marketing or equivalent degree.',
    skills: 'Marketing Strategy, SEO, Google Ads, Analytics, Creativity, Team Management',
    companyLogo: '/images/logo10.png', // Add company logo path
  },
  
};

export default jobDetailsData;
