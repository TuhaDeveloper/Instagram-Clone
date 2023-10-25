import './App.css';
import HomeSection from './components/leftComponents/HomeSection';
import ResNav from './components/leftComponents/ResNav';
import FeedSection from './components/middleComponents/FeedSection';
import AccountSection from './components/rightComponents/AccountSection';

function App() {
  return (
    <div className="App">

      <ResNav />
      <HomeSection />
      <FeedSection />
      <AccountSection />
    </div>
  );
}

export default App;
