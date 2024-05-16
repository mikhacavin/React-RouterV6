import React from "react";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div>
      <h2>Careers</h2>
      <p>Fetch API from my Backend</p>{" "}
      <a href="https://next-prisma-neon-rest.vercel.app/api/jobs">
        https://next-prisma-neon-rest.vercel.app/api/jobs
      </a>
      <br />
      <Outlet />
    </div>
  );
}
