// src/services/Api.tsx

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  skills: string[],
  status: "Pending" | "Approved" | "Rejected";
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TCS",
    location: "Pune",
    experience: "0-2 Years",
    salary: "₹4-6 LPA",
    description: "Work on UI using React and Ant Design.",
    skills: ["React", "TypeScript", "Redux"],
    status: "Pending"
  },
  {
    id: 2,
    title: "React Developer",
    company: "Infosys",
    location: "Bangalore",
    experience: "1-3 Years",
    salary: "₹5-7 LPA",
    description: "Develop scalable React applications.",
    skills: ["React", "JavaScript", "REST API"],
    status:"Approved"
  },
  {
    id: 3,
    title: "Junior Full Stack Developer",
    company: "Wipro",
    location: "Hyderabad",
    experience: "0-1 Year",
    salary: "₹3-5 LPA",
    description: "Work on React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB"],
    status: "Rejected"
  },

  {
  id: 4,
  title: "Software Engineer",
  company: "Accenture",
  location: "Mumbai",
  experience: "1-3 Years",
  salary: "₹4-6 LPA",
  description: "Build and maintain enterprise-level applications.",
  skills: ["Java", "Spring Boot", "SQL"],
  status: "Pending" 
},
{
  id: 5,
  title: "UI Developer",
  company: "Capgemini",
  location: "Chennai",
  experience: "0-2 Years",
  salary: "₹3.5-5.5 LPA",
  description: "Design responsive UI using React and Ant Design.",
  skills: ["HTML", "CSS", "React", "Ant Design"],
  status:  "Rejected"
}

];