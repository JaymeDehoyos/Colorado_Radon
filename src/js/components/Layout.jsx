
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Banner from './Navbar/Banner';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Outlet/>
    </div>
  );
};

export default Layout;
