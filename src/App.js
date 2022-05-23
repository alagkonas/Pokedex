import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import './App.css';
import 'antd/dist/antd.min.css'


function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </Router>
  );
}

export default App;
