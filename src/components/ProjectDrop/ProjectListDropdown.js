import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          "&:hover": {
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            backgroundColor: "#F1F5F9",
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2A59FE",
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: "8px", // Add margin above the menu container
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#F1F5F9",
          },
        },
      },
    },
  },
});

const ProjectListDropdown = ({
  projects,
  selectedProject,
  setSelectedProject,
}) => {
  const handleProjectSelect = (event) => {
    setSelectedProject(event.target.value);

    localStorage.setItem("fav_project", event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "35ch",
        alignSelf: "flex-end"
      }}
    >
      <div>
        <InputLabel
          htmlFor="project-dropdown"
          sx={{ color: "#2B2B2B", marginBottom: "10px" }}
        >
          Project List
        </InputLabel>
      </div>
      <div>
        <ThemeProvider theme={theme}>
          <FormControl fullWidth className="dropdown__select">
            {" "}
            <InputLabel
              id="label-dropdown"
              sx={{ paddingLeft: "10px", fontSize: "14px", color: "#666" }}
            >
              Select Projects
            </InputLabel>
            <Select
              sx={{
                borderRadius: "10px",
                marginLeft: "10px",

                maxHeight: "50px",
                boxShadow: "0 4px 14px 0px rgba(0, 0, 0, 0.2)",
              }}
              id="project-dropdown"
              value={selectedProject}
              label="Select Projects"
              onChange={handleProjectSelect}
            >
              <MenuItem value="" disabled>
                <p>None</p>
              </MenuItem>
              {projects.map((project, index) => (
                <MenuItem value={project.sf_project_id} key={index}>
                  <p>{project.project_name}</p>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ProjectListDropdown;
