import React from "react";
import List from "./List";

function Main(props) {
  const statusList = ["Backlog", "Ready", "In Progress", "Finished"];

  return (
    <main className="main">
      <div className="main__layout">
        {statusList.map((title, index) => (
          <List title={title} key={index} statusList={statusList} />
        ))}
      </div>
    </main>
  );
}

export default Main;
