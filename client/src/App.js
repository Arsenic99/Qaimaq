import Main from "./layout/main/main";
import './assets/styles/app.scss'
import { Routes, Route } from "react-router-dom";
import { AdminContainer } from "./components/adminContainer";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/admin' element={<AdminContainer/>} />
      </Routes>

    </div>
  );
}

export default App;
