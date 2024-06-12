import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={shanto}/>
      
    </>
  )
}

export default App
