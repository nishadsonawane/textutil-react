import Navbar from './components/Navbar';
import TextFormat from './components/Textformat';
import Alert from './components/Alert';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#001d3d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const changeTheme = (theme) => {
    setMode(theme);
    if (theme === "success") {
      document.body.style.backgroundColor = "green";
    } else if (theme === "danger") {
      document.body.style.backgroundColor = "red";
    } else if (theme === "warning") {
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "gray";
    }
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} changeTheme={changeTheme} title="TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextFormat showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;