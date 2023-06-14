import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
