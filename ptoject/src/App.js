import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import AppRoutes from "./AppRoutes";
import {Route,Routes} from 'react-router-dom'
import Page1 from './FromPages/Page1';
import Page2 from "./FromPages/Page2";
import Page3 from "./FromPages/Page3";
import Page4 from "./FromPages/Page4";
import Page5 from './FromPages/Page5'
import Page6 from './FromPages/Page6'
import Page7 from './FromPages/Page7'
import Page8 from './FromPages/Page8'
import Page9 from './FromPages/Page9'
import Page10 from './FromPages/Page10'
import Page11 from './FromPages/Page11'
import Page12 from './FromPages/Page12'
import routes from './pages/const/constants'
import Tabs1 from "./FromPages/Tabs1";
import Tabs2 from "./FromPages/Tabs2";
import Tabs3 from "./FromPages/Tabs3";
import Tabs4 from "./FromPages/Tabs4";
import Laptop from "./FromPages/Laptop";
import Laptop2 from "./FromPages/Laptop2";
import Laptop5 from "./FromPages/Laptop5";
import Laptop3 from "./FromPages/Laptop3";
import Laptop4 from './FromPages/Laptop4'
import Laptop6 from "./FromPages/Laptop6";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
  
      <Routes>
        <Route path={routes.page1} element={<Page1/>}/>
        <Route path={routes.page2} element={<Page2/>}/>
        <Route path={routes.page3} element={<Page3/>}/>
        <Route path={routes.page4} element={<Page4/>}/>
        <Route path={routes.page5} element={<Page5/>}/>
        <Route path={routes.page6} element={<Page6/>}/>
        <Route path={routes.page7} element={<Page7/>}/>
        <Route path={routes.page8} element={<Page8/>}/>
        <Route path={routes.page9} element={<Page9/>}/>
        <Route path={routes.page10} element={<Page10/>}/>
        <Route path={routes.page11} element={<Page11/>}/>
        <Route path={routes.page12} element={<Page12/>}/>
        {/*  */}
        <Route path={routes.tabs1} element={<Tabs1/>}/>
        <Route path={routes.tabs2} element={<Tabs2/>}/>
        <Route path={routes.tabs3} element={<Tabs3/>}/>
        <Route path={routes.tabs4} element={<Tabs4/>}/>
        {/*  */}
        <Route path={routes.laptop1} element={<Laptop/>}/> 
        <Route path={routes.laptop2} element={<Laptop2/>}/>
        <Route path={routes.laptop3} element={<Laptop3/>}/>
        <Route path={routes.laptop4} element={<Laptop4/>}/>
        <Route path={routes.laptop5} element={<Laptop5/>}/>
        <Route path={routes.laptop6} element={<Laptop6/>}/>

      </Routes>
    </div>
  );
}

export default App;
