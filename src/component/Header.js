import User from "./User";

function Header() {
  return (
    <header className="header">
      <div className="header__layout">
        <h1 className="header__title">Awesome Kanban Board</h1>
        <User />
      </div>
    </header>
  );
}

export default Header;
