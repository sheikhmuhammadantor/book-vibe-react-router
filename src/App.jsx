import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
// import Header from './Components/Home/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
