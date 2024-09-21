
import {useState, useEffect} from 'react'
import BlogList from './Blog_list';
import useFetch from './useFetch';

const  Home = () => {

  const {data:blogs, isLoading, error} = useFetch("http://localhost:4000/blogs")

 
  return ( 
    <main className="home">
      { error && <p> { error } </p>}
      { isLoading && <div>loading...</div>}
      {blogs && <BlogList
      //  blogs={blogs.filter((blog)=>blog.author === 'mario')} 
       blogs = {blogs}
      />}
    </main>
   );
}
 
export default Home;