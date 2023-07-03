import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Footer from './components/Footer/Footer';
import AppWorking from './components/AppWorking/AppWorking';
import DownloadApp from './components/DownloadApp/DownloadApp';

function App() {
  const center={textAlign:"center"}
  return (
    <>
    <Navbar/>
    <About/>
    <h1 style={center}>How The App Works</h1>
    <AppWorking
    img="img\Screenshot 2023-07-03 094146.png"
    heading="Create an account"
    subheading="Create/Login to an existing account to get started"
    description="An account is created with your email and a desired password"
    />

<AppWorking
img="img\Screenshot 2023-07-03 094155.png"
heading="Explore  varieties"
    subheading="Shop for your favorites meanl as e dey hot."
    description="Shop for your favorite meals or drinks and enjoy while doing it."
    />
<AppWorking
img="img\Screenshot 2023-07-03 094205.png"
heading="Checkout"
    subheading="When you done check out and get it delivered."
    description="When you done check out and get it deliverd with ease."
    />

    <DownloadApp></DownloadApp>

    <Footer></Footer>

    
    </>
    
    
  );
}

export default App;
