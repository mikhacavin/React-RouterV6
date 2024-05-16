import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Help</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
        possimus totam, velit esse exercitationem ad voluptatibus nisi
        architecto saepe corrupti.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      {/* menampilkan component sub path dari help/faq atau help/contact */}
      <Outlet />
    </div>
  );
}
