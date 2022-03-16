import Header from './components/Header/Header';
import SideLinks from './components/SideLinks/SideLinks'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import LoadScreen from './components/LoadScreen/LoadScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadScreen />
      <Header />
      <SideLinks />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
