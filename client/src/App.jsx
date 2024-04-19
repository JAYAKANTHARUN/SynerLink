
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/landing" element={ <Landing/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
