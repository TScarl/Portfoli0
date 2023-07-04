import React from "react";
import { Footer } from "./components/Footer";
import { Header } from"./components/Header";
import { Navigation } from "./components/Navigation";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        <Navigation />
        {children}
        <Footer />
      </>
    );
  }
