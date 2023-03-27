import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { Create } from './pages/Create'
import { Index } from './pages/Index'
import { View } from './pages/View'
import { Store } from './store/Store'

function App() {


  return (
    <Store>
      <Router>
          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='create' element={<Create/>} />
            <Route path='view/:bookId' element={<View/>} />
          </Routes>
      </Router>
    </Store>
  )
}

export default App
