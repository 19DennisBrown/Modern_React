

import './index.css'
import Navbar from './Navbar'
import Home from './Home'


const App = () => {
  return (
    <main className="App" style={{}}>
      <Navbar/>
      <section className="content">
        <Home/>
      </section>
    </main>
  )
}

export default App