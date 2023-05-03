import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {  useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <NoteState>
        {/* <Navbar title="CRUD" aboutText="About" mode={mode} toggleMode={toggleMode} /> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About heading="About CRUD" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
            <Route path="/login" element={<Login heading="Login to continue in CRUD" mode={mode} showAlert={showAlert} />} />
            <Route path="/signUp" element={<SignUp heading="Create an account to use CRUD" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
