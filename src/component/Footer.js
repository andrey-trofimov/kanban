import React from "react";

function Footer(props) {
  const user = "coder";
  const date = new Date();

  let statusList = Object.keys(props.task);
  let activeTasks = props.task[statusList[0]].length;
  let finishedTasks = props.task[statusList[3]].length;

  return (
    <footer className="footer">
      <div className="footer__layout">
        <div className="footer_column">
          <span className="footer__score_active">
            Active tasks: {activeTasks}
          </span>
          <span className="footer__score_finished">
            Finished tasks: {finishedTasks}
          </span>
        </div>
        <span className="footer__user">
          Kanban board by {user}, {date.getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
