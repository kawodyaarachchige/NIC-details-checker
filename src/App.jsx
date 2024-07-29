import './App.css'
import Details from './components/Details/Details'
import Home from './components/Home/Home'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
