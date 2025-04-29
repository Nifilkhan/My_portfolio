export const projects = [
  {
    id: 1,
    title: "Edutech E-learning platform",
    description: "A responsive e-commerce dashboard with sales analytics, inventory management, and customer insights. Built with React, Chart.js, and styled with TailwindCSS.",
    image: "https://media.gettyimages.com/id/1328523997/photo/brother-and-sister-e-learning-at-home.jpg?s=612x612&w=0&k=20&c=9WHcZGruyloX9vd4Eu1gOXKZKiOt-ndYpI89W6g7PBU=",
    tags: ["Angular", "TailwindCSS", "AWS"],
    technologies: ["Angular", "TailwindCSS", "AWS EC2", "Typescript", "NGRX","AWS S3","Google oauth","Git","Github","Stripe","Pm2","Ngnix"],
    features: [
      "Course creation system with section and lecture management (admin panel)",
      "AWS S3 video upload with draft-saving functionality during course creation",
      "User-side course preview with locked lectures until Stripe payment is completed",
      "Add to Cart and Buy Now functionality with multi-course Stripe checkout",
      "Video player integration using Video.js with auto-play and responsive design",
      "Secure authentication with JWT (HttpOnly cookies) and Google OAuth login",
      "NgRx state management for cart and course modules with async effects",
      "Fully responsive UI with profile dropdown by custom created",
      "Full-stack deployment on AWS EC2 with PM2 and Nginx reverse proxy"
    ],    
    liveLink: "http://13.50.118.48/signin",
    githubLink: "https://github.com/Nifilkhan/Learning-management-system-Frontend.git",
    date: "january 2025"
  },
  {
    id: 2,
    title: "QuizMaster – Interactive Quiz Web Application",
    description: "QuizMaster is a full-stack web application designed to deliver an engaging quiz experience. Users can choose a subject, and take timed quizzes with multiple-choice questions. The application ensures secure access with authentication and route guards, and offers a clean, responsive UI with smooth loader animations.",
    image: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Angular", "Jwt", "Expressjs"],
    technologies: ["Angular" , "Node.js" , "Express.js" , "MongoDB" , "Render" , "Typescript" , "Git" , "Github"],
    features: [
      "User authentication with secure JWT tokens stored in HttpOnly cookies",
      "Route guards to restrict access based on login status and subject selection",
      "Subject-wise dynamic quiz questions with real-time validation",
      "Only allows quiz submission after all questions are answered",
      "Custom loader overlays for improved route transition experience",
      "MVC backend architecture for clean and scalable code organization",
      "Fully responsive design with smooth user interactions"
    ],    
    liveLink: "https://quizz-app-frontend-jnpc.onrender.com/",
    githubLink: "https://github.com/Nifilkhan/Quizz-App-Frontend",
    date: "February 2023"
  },
  {
    id: 3,
    title: "E-learning Website",
    description: "This project showcases a responsive static website built using HTML and CSS. It was developed as part of the Moringa School's initial assessment for scholars, focusing on fundamental web development skills. The site emphasizes clean design, semantic HTML structure, and responsive layouts without relying on JavaScript frameworks.",
    image: "https://imgs.search.brave.com/lFVSzgR14bDVOlfqKhwTWA25ZL6CHYO604WU2gy5StY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/NDA5NDA1L3Bob3Rv/L3JlYXItdmlldy1v/Zi10ZWVuYWdlLXN0/dWRlbnRzLXJhaXNp/bmctaGFuZHMtaW4t/Y2xhc3Nyb29tLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1p/YWVfdVRNNzd2SzNO/MUo2cTBaaTdrdmZP/VGpsaXJwMlA1TUlW/c3dieG1vPQ",
    tags: ["Html", "Css" , "Html5" , "Css3"],
    technologies: ["Html","Css"],
    features: [
      "Responsive Design: Ensures optimal viewing experience across various devices and screen sizes.",
      "Semantic HTML: Utilizes meaningful HTML tags to enhance accessibility and SEO.",     
      "Clean CSS Styling: Implements organized and maintainable CSS for consistent styling.",
      "Image Integration: Incorporates relevant images to enhance visual appeal.",
      "Deployed on Vercel: Hosted using Vercel for fast and reliable delivery.",
    ],
    liveLink: "html-project-murex.vercel.app",
    githubLink: "https://github.com/Nifilkhan/HTML-project",
    date: "October 2024"
  },
  {
    id: 4,
    title: "Weather App",
    description: "This Weather App is designed to give users access to real-time weather information for cities around the world. Built with Angular and TypeScript, the application interacts with the OpenWeather API to retrieve accurate and up-to-date weather data.",
    image: "https://imgs.search.brave.com/sU66rl_WxApWy9f9Hxii4k7ZPMN5IcMZG4I_4lQHZL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ncmF5/LWt0dGMtcHJvZC5n/dHYtY2RuLmNvbS9y/ZXNpemVyL3YyL1ZM/QllQT1BGNEpGMlBK/VklSSTZNM05BTjM0/LmpwZz9hdXRoPTJk/MmUzNThiOTE1Mzky/NjdkOGEyMmZlZmJj/M2M0YTQyODg4NzZk/OWVjZTQxMmUxMTA4/YjQyNTRkOTQ3ZWE1/YzMmd2lkdGg9OTgw/JmhlaWdodD03MzUm/c21hcnQ9dHJ1ZQ",
    tags: ["Angular", "Typescript", "Error handler"],
    technologies: ["Angular", "Typescript", "OpenWeather API", "Git", "Github","Vercel"],
    features: [
      "Current Weather: View live weather conditions such as temperature, humidity, and wind speed for any city.",
      "Responsive Design: Fully optimized for both desktop and mobile devices, providing a smooth user experience across platforms.",
      "Search Functionality: Search for cities by name and get immediate weather updates.",
      "Error Handling: Clear and informative error messages if a city is not found or if there's an issue fetching data."
    ],
    liveLink: "https://weather-app-zeta-smoky.vercel.app/",
    githubLink: "https://github.com/Nifilkhan/weather-app-",
    date: "December 2024"
  }
]