import { Box, Tab, Tabs, Typography } from "@mui/material";
import { ReactNode, SyntheticEvent, useState } from "react";
import StudentSignUp from "../components/student-sign-up/StudentSignUp";
import TrainerSignUp from "../components/trainer-sign-up/TrainerSignUp";

type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

const CustomTabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    {value === index && <div>{children}</div>}
  </div>
);

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RegisterPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth={600} width="100%" m="0 auto">
      <Typography textAlign="center" variant="h2" gutterBottom fontWeight={500}>
        Регистрация
      </Typography>
      <Tabs
        sx={{ width: 600 }}
        value={value}
        onChange={handleChange}
        aria-label="Register tabs"
      >
        <Tab sx={{ width: 300 }} label="Student" {...a11yProps(0)} />
        <Tab sx={{ width: 300 }} label="Trainer" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <StudentSignUp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <TrainerSignUp />
      </CustomTabPanel>
    </Box>
  );
};

export default RegisterPage;
