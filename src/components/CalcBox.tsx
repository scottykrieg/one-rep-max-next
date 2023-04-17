import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Brzycki from "@/pages/Brzycki";
import Epley from "@/pages/Epley";
import Landers from "@/pages/Landers";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CalcBox() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: "none",
          zIndex: "99",
          position: "relative",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
            "& .MuiTab-root": {
              width: "auto",
              margin: "0 10px",
            },
          }}
        >
          <Tab
            className="tabLabel"
            label="Brzycki"
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "silver",
              },
            }}
          />
          <Tab
            className="tabLabel"
            label="Epley"
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "silver",
              },
            }}
          />
          <Tab
            className="tabLabel"
            label="Landers"
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "silver",
              },
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Brzycki />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Epley />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Landers />
      </TabPanel>
    </>
  );
}
