import React from "react";
import { Footer } from "./components/Footer";
import { Header } from"./components/Header";
// navigation component is within header component

export default function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
