import Navbar from '../Header/Navbar';
import MainHome from '../MainPages/MainHome';
import Sofa_chair_middle from '../MainPages/Sofa_chair_middle';
import LatestPage from '../MainPages/LatestPage';
import NewDesign from '../MainPages/NewDesign';
import OurBlog from '../MainPages/OurBlog';
import MainFooter from '../Footer/MainFooter';

function App() {
  return (
    <div className="App">
    <Navbar />
    <MainHome />
    <Sofa_chair_middle />
    <LatestPage />
    <NewDesign />
    <OurBlog />
    <MainFooter />
    </div>
  );
}

export default App;