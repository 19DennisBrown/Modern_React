import { Link } from "react-router-dom";



const BlogList = ({blogs}) => {
  // const blogs = props.blogs

  return ( 
    <main className="blog-list">
      {blogs.map((blog)=>(
        <section className='blog-preview' key={blog.id}>
          <Link to={`blog/${blog.id}`} >
            <h2>{blog.title}</h2>
            <p>
              written by {blog.author}
            </p>
          </Link>
        </section>
      ))}
    </main>
  );
}
 
export default BlogList;