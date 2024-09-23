import { Link } from "react-router-dom";


const NotFound = () => {
  return ( 
    <main className="not-found">
      <h2>Not Found</h2>
      <Link to="/">..back home</Link>
    </main>
   );
}
 
export default NotFound;