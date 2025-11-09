import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="flex items-center justify-center overflow-hidden"></div>
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} Michael Shingo Crawford. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
