import React from "react";
import Table from "../components/Table/Table";
import Statsframe from "../features/statstg/Statsframe";
import { Chip } from "@mui/material";

const TrainingGroup = ({
  trainingGroups,
  orgTrainingGroups,
  filter,
  setFilter,
  setFilteredGroups,
  projectStats,
  participants,
}) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "tg_name",
      name: "Training Group Name",
      selector: (row) => row.tg_name,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS ID",
      selector: (row) => row.tns_id,
      sortable: true,
    },
    {
      id: "total_participants",
      name: "No of Participants",
      selector: (row) => row.total_participants,
      sortable: true,
    },
    {
      id: "business_advisor",
      name: "Business Advisor",
      selector: (row) => row.business_advisor,
      sortable: true,
    },
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "status",
      name: "Status",
      selector: (row) => (
        <div>
          {row.status === "Active" ? (
            <Chip label={"Active"} color="success" variant="outlined" />
          ) : (
            <Chip label={"Inactive"} color="error" variant="outlined" />
          )}
        </div>
      ),
      sortable: true,
    },
  ];

  const rows = trainingGroups
    ? trainingGroups.map((trainingGroup, index) => ({
        num: index + 1,
        tg_id: trainingGroup.tg_id,
        tg_name: trainingGroup.tg_name,
        tns_id: trainingGroup.tns_id || "N/A",
        total_participants: trainingGroup.total_participants,
        business_advisor: trainingGroup.business_advisor,
        farmer_trainer: trainingGroup.farmer_trainer,
        status: trainingGroup.status,
      }))
    : [];

  const tableRowItem = "traingroup";

  return (
    <div>
      <h1 className="module__heading">Training Groups</h1>
      {trainingGroups.length > 0 ? (
        <div>
          <Statsframe
            statistics={projectStats}
            totalParticipants={participants.length}
            trainingGroups={trainingGroups}
          />
          <Table
            columns={columns}
            data={rows}
            filter={filter}
            setFilter={setFilter}
            setFilteredGroups={setFilteredGroups}
            tableRowItem={tableRowItem}
          />
        </div>
      ) : (
        <div className="no__data">
          <em>No Active Group Found</em>
        </div>
      )}
    </div>
  );
};

export default TrainingGroup;
