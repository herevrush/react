import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainSite from "./containers/MainSite/MainSite";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <MainSite></MainSite>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
