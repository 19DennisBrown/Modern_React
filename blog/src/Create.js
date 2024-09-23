

import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const CreateBlog = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Jane Smith')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const blog = {title, body, author}

    setIsLoading(true)
    fetch("http://localhost:4000/blogs",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blog)
    }).then(()=>{
      // alert('new blog posted')
      setIsLoading(false)
    })
    navigate('/f')
  }


  return ( 
    <main className="create">
      <h2>Add New Blog</h2>
      <form action="" onSubmit={handleSubmit} >
        <label htmlFor="">Blog title</label>
        <input
         type="text" 
         required
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
        />
        <label htmlFor="">Blog content</label>
        <textarea 
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          >
        </textarea>
        <label htmlFor="">Blog author</label>
        <select
         name=""
         id=""
         value={author}
         onChange={(e)=>setAuthor(e.target.value)}
        >
          <option value="Jane Smith">Jane Smith</option>
          <option value="John Doe">John Doe</option>
          <option value="David Brown">David Brown </option>
          <option value="Emily Johnson">Emily Johnson </option>
          <option value="Michael Lee">Emily Johnson </option>
        </select>
        { !isLoading && <button>Add blog</button>}
        { isLoading && <button disabled >...uploading...</button>}
      </form>
    </main>
   );
}
 
export default CreateBlog;