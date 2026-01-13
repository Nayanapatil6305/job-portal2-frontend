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