import { STATUS_LIST } from "../App";

function Footer(props) {
  const user = "coder";
  const date = new Date();

  let activeTasks = 0;
  let finishedTasks = 0;

  props.task.forEach((task) => {
    if (task.status === STATUS_LIST[0]) activeTasks++;
    if (task.status === STATUS_LIST[3]) finishedTasks++;
  });

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
