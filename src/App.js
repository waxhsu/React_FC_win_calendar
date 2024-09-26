import './App.css';
import Header from './components/Header/Header.js'
import Landing from './components/Landing/Landing.js'
import NextCohortStarts from './components/NextCohortStarts/NextCohortStarts.js'
import IntroStatement from './components/IntroStatement/IntroStatement.js'
import ArticlesAndPodcasts from './components/ArticlesAndPodcasts/ArticlesAndPodcasts.js'
import Footer from './components/Footer/Footer.js'
import WinCalendar from './components/winCalendar/winCalendar.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <IntroStatement />
      <ArticlesAndPodcasts />
      <WinCalendar />
      <NextCohortStarts />
      <Footer />

    </div>
  );
}

export default App;
