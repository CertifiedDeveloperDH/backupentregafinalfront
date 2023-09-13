import './App.css'
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import ApiContextProvider from "./context/ApiContextProvider.jsx"
import LocalstorageContextProvider from "./context/LocalstorageContextProvider"
import ThemeContextProvider from "./context/ThemeContextProvider"
function App() {

  return (
    <>
    <ThemeContextProvider>
      <ApiContextProvider>
        <LocalstorageContextProvider>
          <div className={`App`}>
            <Navbar/>
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </LocalstorageContextProvider>
      </ApiContextProvider>
    </ThemeContextProvider>
        
    </>
  )
}

export default App
