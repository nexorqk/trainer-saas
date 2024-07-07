import { Typography } from "@mui/material";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Typography p={6} textAlign="center" variant="h1">
        Добро пожаловать в Trainers App
      </Typography>
    </>
  );
};

export default Home;
