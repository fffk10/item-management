import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ItemsPage from './components/page/ItemsPage'
import AccountPage from './components/page/AccountPage'
import ConfigPage from './components/page/ConfigPage'
import LogoutPage from './components/page/LogoutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ItemsPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
