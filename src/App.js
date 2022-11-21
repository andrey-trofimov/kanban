import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
export default App;
