import "./App.css";

// import { Container, ThemeContextProvider } from "@apf/core";
import React from "react";
import { ProjectProvider } from "@apf/playground";
// import Card from "./components/UserTestimonialCard.jsx";
import BrikLayout from "./components/BrikLayout.jsx";
import jsondata from "./data/schema.json";

function App() {
  return (
    <ProjectProvider data={jsondata}>
      <BrikLayout data={jsondata} />
    </ProjectProvider>
    // <ThemeContextProvider>
    //   <Container>
    //     <Card data={{ ...data }} />
    //   </Container>
    // </ThemeContextProvider>
  );
}

export default App;
