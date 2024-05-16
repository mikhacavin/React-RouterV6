import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et alias eaque
        doloremque voluptates non minus. Maiores corrupti cumque quia facilis
        dignissimos deserunt aliquam minus eos expedita dolorem, vel quae iure
        sequi quidem excepturi veniam officiis suscipit. Tempore, sequi totam
        numquam sint beatae maiores, quae sed perspiciatis voluptas et placeat
        iure!
      </p>
      <p>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}
