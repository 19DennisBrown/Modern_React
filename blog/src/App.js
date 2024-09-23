

import './index.css'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateBlog from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

const App = () => {
  return (
    <Router>
      <main className="App" style={{}}>
        <Navbar/>
        <section className="content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </section>
      </main>
    </Router>
  )
}

export default App