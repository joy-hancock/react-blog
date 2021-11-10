
import './index.css';
import Navbar from './Navbar';
import Home from './Home';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/*nest home component as tag*/}
        <Home />
      </div>
    </div>
  );
}

export default App;
