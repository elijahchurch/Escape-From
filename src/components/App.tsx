import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Game from "./Game";



const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>

    </Router>
  )
}

export default App;
