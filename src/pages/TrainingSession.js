import React from "react";
import Table from "../components/Table/Table";
import Statstscard from "../features/statsts/Statstscard";

const TrainingSession = ({ trainingSessions }) => {
  const columns = [
    { Header: "Session Name", accessor: "ts_name" },
    { Header: "Module Name", accessor: "ts_module" },
    { Header: "Training Group", accessor: "ts_group" },
    { Header: "TNS Id", accessor: "tns_id" },
    { Header: "Farmer Trainer", accessor: "farmer_trainer" },
    { Header: "Status", accessor: "ts_status" },
    { Header: "MA", accessor: "total_males" },
    { Header: "FA", accessor: "total_females" },
    { Header: "Session Date", accessor: "session_date" },
  ];
  const tableRowItem = "trainsession";

  return (
    <div>
      <h1 className="module__heading">Training Sessions</h1>
      <Statstscard stats={trainingSessions} />

      <Table
        columns={columns}
        data={trainingSessions}
        tableRowItem={tableRowItem}
      />
    </div>
  );
};

// Rest of the code remains the same
export default TrainingSession;
