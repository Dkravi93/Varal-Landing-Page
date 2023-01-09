import './App.css';
import DrawerAppBar from './components/Navbar';
import LandingPage from './components/LandingPage';
// import "./utils/Boxes.module.css"
function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <LandingPage />
    </div>
  );
}

export default App;
