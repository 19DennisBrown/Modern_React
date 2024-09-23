

import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <main className="navbar">
      <h1>
        blog App
      </h1>
      <section className="links">
        <Link to="/">home</Link>
        <Link to="/create">+ new blog</Link>
      </section>
    </main>
   );
}
 
export default Navbar;