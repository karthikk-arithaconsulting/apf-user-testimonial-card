import "./App.css";

import { Container, ThemeContextProvider } from "@apf/core";
import React from "react";
import Card from "./components/UserTestimonialCard.jsx";
// import jsondata from "./data/schema.json";

function App() {
  const data =
    // jsondata.pages[0].pageData[0].cols[0].colData[0]
    {
      title: "Technology",
      author: "John Doe",
      authorSubtitle: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cover:
        "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      reverse: false,
    };

  return (
    <ThemeContextProvider>
      <Container>
        <Card data={{ ...data }} />
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
