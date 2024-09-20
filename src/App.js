import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import Landing from './components/Landing/Landing.js'
import Footer from './components/Footer/Footer.js'
import WinCalendar from './components/winCalendar/winCalendar.js'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Landing />
      <WinCalendar />
      <Footer />

    </div>
  );
}

export default App;
