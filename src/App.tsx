import Header from './components/Header/Header';
import SideLinks from './components/SideLinks/SideLinks'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import LoadScreen from './components/LoadScreen/LoadScreen';
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
