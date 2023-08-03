import { Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "../tgdetail.js/tgdetail.css";
import Detailscontent from "../tgdetail.js/Detailscontent";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Imagecontainer from "./sessionimage/Imagecontainer";
import { useQuery } from "@apollo/client";
import { GET_TRAINING_SESSION_IMAGE } from "../../graphql/queries/trainingSessionsRequests";
import { BeatLoader } from "react-spinners";

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  marginRight: "10px",
  textTransform: "initial",
  backgroundColor: "rgba(244, 103, 0, 1)",
  
  color: "#fff",

  "&:hover": {
    backgroundColor: "rgba(244, 103, 0, 0.5)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const Tstabdetail = ({ details }) => {
  const [open, setOpen] = useState(false);
  const [session_image, setSession_image] = useState(null);
  const { data, loading } = useQuery(GET_TRAINING_SESSION_IMAGE, {
    variables: { tsId: details.ts_id },
  });

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!loading && data.trainingSessionImage.status === 200) {
      setSession_image(data.trainingSessionImage.trainingSessionImage);
    }
  }, [data, loading]);

  return (
    <div>
      <div>
        <Paper elevation={2}>
          <div>
            <div className="details__title">{details.ts_name}</div>
            <div style={{ padding: "10px", paddingLeft: "20px" }}></div>
            <div
              className="ts__details-container"
              style={{ display: "flex", gap: "50px" }}
            >
              <div style={{ width: "110px" }}>
                <CircularProgressbarWithChildren
                  value={22}
                  styles={buildStyles({
                    rotation: 1,
                    strokeLinecap: "round",
                    textSize: "20px",
                    pathTransitionDuration: 0.5,
                    pathColor: "rgba(244, 103, 0, 1)",
                    textColor: "rgba(244, 103, 0, 1)",
                    trailColor: "#ECF3FE",
                  })}
                >
                  <div style={{ position: "absolute", top: "15px" }}>
                    <p
                      style={{
                        fontSize: "20px",
                        textAlign: "center",
                        color: "#F46700",
                        fontWeight: "700",
                        paddingBottom: "10px",
                      }}
                    >
                      22{" "}
                    </p>
                    <p
                      style={{ fontSize: "10px", fontWeight: "600", color: "" }}
                    >
                      Total Attendance
                    </p>
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Module Name"}
                  paragraph={details.ts_module}
                />
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"Male Attendance"}
                  paragraph={details.total_males || "N/A"}
                />
              </div>
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Training Group"}
                  paragraph={details.ts_group}
                />{" "}
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"Female Attendance"}
                  paragraph={details.total_females || "N/A"}
                />
              </div>{" "}
              <div className="ts__details-container1">
                <Detailscontent
                  heading={"Business Advisor"}
                  paragraph={"Peace Ishimwe"}
                />{" "}
                <div style={{ paddingBottom: "20px" }}></div>
                <Detailscontent
                  heading={"TNS ID"}
                  paragraph={details.tns_id || "N/A"}
                />
              </div>
              <Detailscontent
                heading={"Farmer Trainer"}
                paragraph={details.farmer_trainer || "N/A"}
              />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <StyledButton
              onClick={handleClick}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disabled={session_image ? false : true}
              style={{
                backgroundColor: `${
                  session_image
                    ? "rgba(244, 103, 0, 1)"
                    : "rgba(244, 103, 0, 0.5)"
                }`,
                color: "#fff",
                cursor: `${session_image ? "pointer" : "not-allowed"}`,
              }}
            >
              {loading ? (
                <BeatLoader
                  color={"rgba(244, 103, 0, 1)"}
                  loading={loading}
                  size={10}
                />
              ) : (
                "View Session Image"
              )}
            </StyledButton>
            {open && (
              <Imagecontainer
                open={open}
                handleClose={handleClose}
                sessionImageUrl={session_image}
              />
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Tstabdetail;
