export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TCS",
    location: "Pune",
  },
  {
    id: 2,
    title: "React Developer",
    company: "Infosys",
    location: "Bangalore",
  },

    {
    id: 3,
    title: "Backend Developer",
    company: "Wipro",
    location: "Mumbai",
  },

];


// export const applicationData = [
//   {
//     //object
//     id: 1,
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     course: 'React Development',
//     progress: 85,
//     status: 'active',
//     joinDate: '2024-01-15',
//     phone: '+912345678901',
//     address: '123 Main St, New York, NY'
//   },

  export  const data = [
    {
      key: "1",
      name: "Rahul Patil",
      job: "Frontend Developer",
      date: "12 Jan 2026",
      status: "Pending",
      email: "rahul@gmail.com",
      phone: "9876543210",
      linkedin: "https://linkedin.com/in/rahul",
      skills: "React, TypeScript, CSS",
    },
    {
      key: "2",
      name: "Sneha Deshmukh",
      job: "Backend Developer",
      date: "10 Jan 2026",
      status: "Shortlisted",
      email: "sneha@gmail.com",
      phone: "9123456780",
      linkedin: "https://linkedin.com/in/sneha",
      skills: "Node.js, MongoDB",
    },
  ];


   export interface Application {
  id: number;
  name: string;
  title: string;
  experience: string;
  skills: string[];
  email: string;
  resume: string;
  status: "Pending" | "Accepted" | "Rejected";
  linkedinUrl: string;
  profileStrength: number;
  appliedDate: string;
  tags: string[];
}

  const initialData:Application[]=[
    {
id: 1,
    name: "Vaishnavi Patil",
    title: "Frontend Developer",
    experience: "2 Years",
    skills: ["React", "TypeScript", "CSS"],
    email: "vaishnavi@gmail.com",
    resume: "Resume_Vaishnavi.pdf",
    status: "Pending",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-patil",
    profileStrength: 82,
    appliedDate: "Applied 2 days ago",
    tags: ["Shortlisted", "Frontend"],
    },
    {
id: 2,
    name: "Rahul Sharma",
    title: "Backend Developer",
    experience: "3 Years",
    skills: ["Node.js", "MongoDB", "Express"],
    email: "rahul@gmail.com",
    resume: "Resume_Rahul.pdf",
    status: "Pending",
    linkedinUrl: "https://www.linkedin.com/in/rahul-sharma",
    profileStrength: 65,
    appliedDate: "Applied 4 days ago",
    tags: ["Backend"],
    },
{
  id: 3,
    name: "karina Sharma",
    title: "Backend Developer",
    experience: "3 Years",
    skills: ["Node.js", "MongoDB", "Express"],
    email: "rahul@gmail.com",
    resume: "Resume_Rahul.pdf",
    status: "Pending",
    linkedinUrl: "https://www.linkedin.com/in/rahul-sharma",
    profileStrength: 65,
    appliedDate: "Applied 4 days ago",
    tags: ["Backend"],
},
{
  id: 4,
    name: "Rahul Sharma",
    title: "Backend Developer",
    experience: "3 Years",
    skills: ["Node.js", "MongoDB", "Express"],
    email: "rahul@gmail.com",
    resume: "Resume_Rahul.pdf",
    status: "Pending",
    linkedinUrl: "https://www.linkedin.com/in/rahul-sharma",
    profileStrength: 65,
    appliedDate: "Applied 4 days ago",
    tags: ["Backend"],
}


  ];
  export default initialData;