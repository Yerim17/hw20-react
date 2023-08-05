import './App.css';
import About from './components/About';
// import BucketList from './components/BucketList';
import Header from './components/Header';
import Work from './components/Work';

function App() {
  return (
    <div className="bucket-app">
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
