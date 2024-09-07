import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer';

function App() {

  return (
      <div className="d-flex flex-column align-items-center bg-black">
        <Header />
        <Content />
        <Footer />
      </div>
  );
}

export default App;
