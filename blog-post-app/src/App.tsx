import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Provider } from "@/components/ui/provider"
import './App.css'
import { Navbar } from "./components/Navbar"
import PostList from "./components/PostList"
import PostDetails from "./components/PostDetails"

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
