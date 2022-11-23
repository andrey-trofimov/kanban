import User from "./User";

function Header(props) {
  return (
    <header className="header">
      <div className="header__layout">
        <h1 className="header__title">Awesome Kanban Board</h1>
        <User userMenuData={props.userMenuData} />
      </div>
    </header>
  );
}

export default Header;
