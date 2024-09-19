
import {useState} from 'react'
const  Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  return ( 
    <main className="home">
       {blogs.map((blog)=>(
        <section className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            {blog.body}
          </p>
        </section>
       ))}
    </main>
   );
}
 
export default Home;