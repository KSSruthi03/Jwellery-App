import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { myContext } from './components/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carouseljwel from './components/Carouseljwel';
import { list } from './components/Pdtlist';
import { useState } from 'react';
import Footer from './components/Footer';
import { Carousel } from 'react-bootstrap';
import Carouselitems from './components/Carouselitems';
import Login from './components/Login';
import Admin from './components/Admin';
import Jwelcat from './components/Jwelcat';
import Registration from './components/Registration';
import Userpage from './components/Userpage';
import { jwels } from './components/Userpdtlist';
import Cartjwel from './components/Cartjwel';
import Wishlist from './components/Wishlist';
import Detailspage from './components/Detailspage';
import Buy from './components/Buy';
import Addadmin from './components/Addadmin';
import Delete from './components/Delete';


function App() {


const [product, setProduct] = useState(list)
const [userlist, setUserlist] = useState(jwels)
 const[cart,setCart]=useState([])
  const[user,setUser]=useState([])
   const[like,setLike]=useState([])


  return (
    <div className='App'>
      <myContext.Provider value={{ product, setProduct,userlist, setUserlist,cart,setCart,user,setUser,like,setLike }}>


        <BrowserRouter>
          <Routes>

            <Route path='home' element={< Home />}></Route>
            <Route path='home/:category' element={< Home />}></Route>
            <Route path='carjwel' element={< Carouseljwel />}></Route>
            <Route path='carousel' element={< Carouselitems/>}></Route>
            <Route path='login' element={< Login/>}></Route>
            <Route path='admin' element={< Admin/>}></Route>
            <Route path='home/:cat' element={< Jwelcat/>}></Route>
            <Route path='reg' element={< Registration/>}></Route>
            <Route path='user' element={< Userpage/>}></Route>
            <Route path='cart' element={< Cartjwel/>}></Route>
            <Route path='wishlist' element={<Wishlist />}></Route>
            <Route path='details/:id' element={< Detailspage/>}></Route>
            <Route path='buy/:id' element={<Buy />}></Route>
            <Route path='add' element={<Addadmin />}></Route>
             <Route path='del' element={<Delete />}></Route>






          </Routes>
        </BrowserRouter>
      </myContext.Provider>

 {/* <Footer/> */}
 
    </div>
  );
}

export default App;
