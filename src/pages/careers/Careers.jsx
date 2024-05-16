import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className="careers">
      <h2>Careers</h2>
      {careers.data.jobs.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const careersLoader = async () => {
  const res = await fetch("https://next-prisma-neon-rest.vercel.app/api/jobs");
  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }
  return res.json();
};
