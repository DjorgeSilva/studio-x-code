import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle.js"
import ScrollToTop from "./Components/ScrollToTop/Index"
import {Home} from "./Routes/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const theme = {
    primary_color: "#fff",
    secundary_color: "#7AB531",
    ternary_color: "#F5C32E",
    font_color: "#333",
    font_padrao: "Roboto, sans-serif",
    font_secundaria: "Abel, sans-serif",

  };

  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={Home}/>
      </Router >
    )
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <ScrollToTop>

            <Switch>
               <Route path="/" exact component={Home}/>
               <Route component={AuthenticatedRoutes} />
            </Switch>

          </ScrollToTop>
        </Router>

      </ThemeProvider>


    </>
  );
}

export default App;
