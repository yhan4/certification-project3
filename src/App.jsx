import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

/**
 * Importing other components
 */
import Home from './pages/Home'
import About from './pages/About'
import AllLists from './pages/AllLists'
import OneList from './pages/OneList'




const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-lists" element={<AllLists />} />
          <Route path="/one-list/:listId" element={<OneList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
