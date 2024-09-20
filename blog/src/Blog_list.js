


const BlogList = ({blogs}) => {
  // const blogs = props.blogs

  return ( 
    <main className="blog-list">
      {blogs.map((blog)=>(
        <section className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            written by {blog.author}
          </p>
        </section>
      ))}
    </main>
  );
}
 
export default BlogList;