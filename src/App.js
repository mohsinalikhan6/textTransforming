import './App.css';
// import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import TextForm from './components/textform/TextForm';
import { useState } from 'react';
import Alert from './components/alert/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses()
    // document.body.classList.add('bg-' + cls)
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert('Dark Mode has been Enabled', 'success');
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert('Light Mode has been Enabled', 'success');

    }
  }
  return (
    <>
      <Navbar title='React-Navbar' aboutText='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter Your Text Here" showAlert={showAlert} mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
