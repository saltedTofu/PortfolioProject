import Header from './components/Header';
import SideLinks from './components/SideLinks'
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import LoadScreen from './components/LoadScreen';
import {useState} from 'react';
import './App.css';

function App() {

  const [sideLinks,setSideLinks] = useState('closed');

  return (
    <div className="App">
      <LoadScreen />
      <Header
        sideLinks={sideLinks} 
        setSideLinks={setSideLinks}
      />
      <SideLinks 
        sideLinks={sideLinks} 
        setSideLinks={setSideLinks}
      />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
