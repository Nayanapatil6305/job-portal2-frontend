export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
}

export const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "TCS", location: "Pune" },
  { id: 2, title: "React Developer", company: "Infosys", location: "Bangalore" },
    { id: 3, title: "Java Developer", company: "Wipro", location: "Mumbai" },
      { id: 4, title: "Python Developer", company: "TCS", location: "Nashik" },
        { id: 5, title: "SQL Developer", company: "Infosys", location: "Delhi" },


];