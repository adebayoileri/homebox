import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>

        <Router>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={Home}/>

        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
