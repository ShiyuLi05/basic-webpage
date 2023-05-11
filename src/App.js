import './style/index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  let title = 'Mr. Coal';
  return (
    <main>
      <>
        <Header title={title} />
        <Banner />
        <Gallery />
        <Footer />
      </>
    </main>
  );
}

export default App;
