import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
       <Navbar heading="SIT" modeText="Enable Dark Mode" /> 
       <TextForm heading="Enter Your Text for Editor" />
    </>
  );
}

export default App;
