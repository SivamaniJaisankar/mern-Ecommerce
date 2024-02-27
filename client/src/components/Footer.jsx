import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-cyan-800">
      <div className="text-white container mx-auto text-center py-3">
        <p className="text-md">Tech Products &copy; {currentYear}</p>
      </div>
    </footer>
  );
}
