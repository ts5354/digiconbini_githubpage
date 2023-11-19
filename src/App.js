import { Route, Routes } from "react-router-dom";
import './App.css';
import Opening from "./views/pages/opening"
import Stage1 from "./views/pages/Stage1.jsx"
import Stage1R2 from "./views/pages/Stage1R2.jsx";
import Stage1R3 from "./views/pages/Stage1R3.jsx";
import Gameover from "./views/pages/Gameover.jsx";


function App() {
  return (
    <div className="App">
    <Routes> 
        <Route path="/" element={<Opening />} />
        <Route path="/stage1/round1" element={<Stage1 />} />
        <Route path="/stage1/round2" element={<Stage1R2 />} />
        <Route path="/stage1/round3" element={<Stage1R3 />} />
        <Route path="/gameover" element={<Gameover angry={"レジ袋聞けよ！"} />} />
        <Route path="/gameover2" element={<Gameover angry={"袋って言ってんだろ！"} />} />
        <Route path="/gameover3" element={<Gameover angry={"ちゃんと聞けよ！"} />} />
    </Routes> 
    </div>
  );
}

export default App;
