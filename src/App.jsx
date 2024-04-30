import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

import {ThemeProvider} from "./providers/ThemeProvider";
function App() {


  return (
    <>
    <ThemeProvider>
      
      <Header />
      <div className="main">
        <Content />
      </div>
      <Footer />
      </ThemeProvider>
    </>

  )
}

export default App
      