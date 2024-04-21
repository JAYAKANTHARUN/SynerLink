
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'
import MyProfile from './components/MyProfile'
import Editprofile from './components/EditProfile'
import Create from './components/Create'
import Find from './components/Find'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <Signup/> }/>
          <Route path="/landing" element={ <Landing/> }/>
          <Route path="/myprofile" element={ <MyProfile/> }/>
          <Route path="/editprofile" element={ <Editprofile/> }/>
          <Route path="/create" element={ <Create/> }/>
          <Route path="/find" element={ <Find/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
