import './App.css';
import Login from "./Components/Login";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Pnf from "./Components/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Interface} from "./Components/Interface";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" Component={Login} />
        <Route path="/*" Component={Pnf}/>
        <Route path="/dashboard" Component={Interface}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
