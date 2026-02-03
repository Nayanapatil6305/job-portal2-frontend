import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // clear auth token here
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
