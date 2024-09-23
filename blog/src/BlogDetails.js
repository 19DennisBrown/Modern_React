import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {data:blog, isLoading, error} = useFetch(`http://localhost:4000/blogs/${id}`)

  const handleDelete=()=>{
    fetch(`http://localhost:4000/blogs/${id}`, {
      method:'DELETE',
    }).then(()=>{
      navigate('/')
    })

  }
  return ( 
    <main className="blog-details">
      {isLoading && <div>loading...</div> }
      {error && <div>{error}</div> }

      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>written by: { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleDelete} >delete</button>
        </article>
      )}
    </main>
   );
}
 
export default BlogDetails;