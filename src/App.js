import './App.css';
import Header from './components/Header/Header.js'
import Landing from './components/Landing/Landing.js'
import NextCohortStarts from './components/NextCohortStarts/NextCohortStarts.js'
import IntroStatement from './components/IntroStatement/IntroStatement.js'
import ArticlesAndPodcasts from './components/ArticlesAndPodcasts/ArticlesAndPodcasts.js'
import TimeToBegin from './components/TimeToBegin/TimeToBegin.js'
import EnrollNow from './components/EnrollNow/EnrollNow.js'
import EightPillars from './components/EightPillars/EightPillars.js'
import Testimonials1 from './components/Testimonials1/Testimonials1.js'
import WinCalendar from './components/winCalendar/winCalendar.js'
import Testimonials2 from './components/Testimonials2/Testimonials2.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import EnrollOptions from './components/EnrollOptions/EnrollOptions.js'
import OnTheFence from './components/OnTheFence/OnTheFence.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <IntroStatement />
      <ArticlesAndPodcasts />
      <TimeToBegin />
      {/* <NextCohortStarts /> */}
      <EnrollNow />

      <EightPillars />
      <Testimonials1 />



      <WinCalendar />


      <EnrollNow />
      <Testimonials2 />
      <AboutUs />
      <EnrollNow />

      <EnrollOptions />
      <OnTheFence />


      <Footer />

    </div>
  );
}

export default App;
