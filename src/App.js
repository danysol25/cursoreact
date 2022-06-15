import './assets/css/App.css';

import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Peliculas from './components/Peliculas';

function App() {
  var buttonString = "Ver más";
  return (
    <div className="App">
      <Header></Header>
      <Slider
        title="Bienvenido al curso de React"
        btn={buttonString}

      />

      <div className='center'>
        <Peliculas/>


        <Sidebar></Sidebar>
        <div className='clearfix'></div>

      </div>

      <Footer></Footer>

    </div>
  );
}

export default App;
