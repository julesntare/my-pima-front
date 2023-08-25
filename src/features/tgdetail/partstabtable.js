import React from "react";
import { Chip } from "@mui/material";
import Table from "../../components/Table/Table";

const PartsTabTable = ({ participants }) => {
  const columns = [
    { id: "num", name: "No.", selector: (row) => row.num, sortable: true },
    {
      id: "full_name",
      name: "Full Name",
      selector: (row) => row.full_name,
      sortable: true,
    },
    {
      id: "gender",
      name: "Gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      id: "location",
      name: "Location",
      selector: (row) => row.location,
      sortable: true,
    },
    {
      id: "tns_id",
      name: "TNS Id",
      selector: (row) => row.tns_id,
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
    {
      id: "farmer_trainer",
      name: "Farmer Trainer",
      selector: (row) => row.farmer_trainer,
      sortable: true,
    },
    {
      id: "business_advisor",
      name: "Business Advisor",
      selector: (row) => row.business_advisor,
      sortable: true,
    },
  ];
  const tableRowItem = "participants";

  const rows = participants
    ? participants.map((participant, index) => ({
        num: index + 1,
        p_id: participant.p_id,
        full_name: participant.full_name,
        gender: participant.gender,
        location: participant.location,
        tns_id: participant.tns_id,
        status: participant.status,
        farmer_trainer: participant.farmer_trainer,
        business_advisor: participant.business_advisor,
      }))
    : [];

  return (
    <div>
      <Table columns={columns} data={rows} tableRowItem={tableRowItem} />
    </div>
  );
};

export default PartsTabTable;
