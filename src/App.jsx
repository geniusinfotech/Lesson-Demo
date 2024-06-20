import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import TextForm from './components/TextForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/Home',
      element: <> <Navbar heading="SIT" modeText="Enable Dark Mode" /> <TextForm heading="Enter Your Text for Editor" /> </>
    },
    {
      path: '/Aboutus',
      element: <> <Navbar heading="SIT" modeText="Enable Dark Mode" /> <Aboutus heading="About Us" /> </>
    },
  ])
  return (
    <>
        <RouterProvider router={router} />

    </>
  );
}

export default App;
