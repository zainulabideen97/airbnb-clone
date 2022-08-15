import './App.css';
import CardList from './components/card-list';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CardList />
    </div>
  );
}

export default App;
