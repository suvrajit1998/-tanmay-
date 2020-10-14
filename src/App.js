import React from "react";
import "./App.css";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import CommingSoonPage from "./pages/CommingSoonPage/CommingSoonPage";
import HomePage from "./pages/HomePage/HomePage";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26c6da",
    },
    secondary: green,
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={CommingSoonPage} />
            <Route exact path="/members" component={CommingSoonPage} />
            <Route exact path="/blog" component={CommingSoonPage} />
            <Route exact path="/shop" component={CommingSoonPage} />
            <Route exact path="/booking" component={CommingSoonPage} />
            <Route exact path="/more" component={CommingSoonPage} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
