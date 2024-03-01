import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
