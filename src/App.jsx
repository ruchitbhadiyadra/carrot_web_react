
import Loader from './component/Loader';
import Product from './component/Product'
import Home from './component/Home'
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Route, Routes } from 'react-router'
import Category_LeftSidebar from './component/Category_LeftSidebar';
import Category_RightSidebar from './component/Category_RightSidebar';
import Category_FullWidth from './component/Category_FullWidth';
import Product_LeftSidebar from './component/Product_LeftSidebar';
import Product_RightSidebar from './component/Product_RightSidebar';
import Product_FullWidth from './component/Product_FullWidth';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Cart from './component/Cart';
import CheckOut from './component/CheckOut';
import TrackOrder from './component/TrackOrder';
import WishList from './component/WishList';
import Faq from './component/Faq';
import Login from './component/Login';
import Register from './component/Register';
import Policy from './component/Policy';
import BlogLeftSidebar from './component/BlogLeftSidebar';
import BlogRightSidebar from './component/BlogRightSidebar';
import BlogFullWidth from './component/BlogFullWidth';
import BlogDetailLeftSidebar from './component/BlogDetailLeftSidebar';
import BlogDetailRightSidebar from './component/BlogDetailRightSidebar';
import BlogDetailFullWidth from './component/BlogDetailFullWidth';
import ElementsTypography from './component/ElementsTypography';
import Buttons from './component/Buttons';
import Page404 from './component/Page404';
import Forgot from './component/Forgot';

function App() {

  return (
    <>
      <Loader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/Category_LeftSidebar' element={<Category_LeftSidebar />}></Route>
        <Route path='/Category_RightSidebar' element={<Category_RightSidebar />}></Route>
        <Route path='/Category_FullWidth' element={<Category_FullWidth />}></Route>
        <Route path='/Product_LeftSidebar' element={<Product_LeftSidebar /> }></Route>
        <Route path='/Product_RightSidebar' element={<Product_RightSidebar /> }></Route>
        <Route path='/Product_FullWidth' element={<Product_FullWidth /> }></Route>
        <Route path='/About_us' element={<About /> }></Route>
        <Route path='/contact_us' element={<ContactUs />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<CheckOut />}></Route>
        <Route path='/trackorder' element={<TrackOrder />}></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgot' element={<Forgot />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/policy' element={<Policy />}></Route>
        <Route path='/blogleftsidebar' element={<BlogLeftSidebar />}></Route>
        <Route path='/blogrightsidebar' element={<BlogRightSidebar />}></Route>
        <Route path='/blogfullwidth' element={<BlogFullWidth />}></Route>
        <Route path='/blog-detail-left-sidebar' element={<BlogDetailLeftSidebar />}></Route>
        <Route path='/blog-detail-right-sidebar' element={<BlogDetailRightSidebar />}></Route>
        <Route path='/blog-detail-full-width' element={<BlogDetailFullWidth />}></Route>
        <Route path='/typography' element={<ElementsTypography />}></Route>
        <Route path='/buttons' element={<Buttons />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
