
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import PostPage from './pages/PostPage/PostPage';
import SecondPage from './pages/SecondPage/SecondPage';


function App() {
  return (
    <div className="container">
        <Navbar/>
        <SecondPage />
        <PostPage />
        <Footer/>
      
    </div>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/photos - image apis
// https://jsonplaceholder.typicode.com/posts - text apis