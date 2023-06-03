import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import Middle from './components/Middle/Middle';
import Maps from './components/Maps/Maps';
function App() {
  return (
       <div className="App">
          <Header />
          <Middle />
          <Body />
          <Maps />
          <Footer/>
    </div>
  );
}

export default App;
