// import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import RestaurantCreate from './Components/RestaurantCreate'
import RestaurantDetail from './Components/RestaurantDetail'
import RestaurantList from './Components/RestaurantList'
import RestaurantSearch from './Components/RestaurantSearch'
import RestaurantUpdate from './Components/RestaurantUpdate'
import Header from './Components/Header'
import Category from './Components/Category'
import TopRestaurant from './Components/TopRestaurant'
import OnlineDelivery from './Components/OnlineDelivery'
function App() {
  return (
    // <div className='App'>
    //   <Router>
    //     <ul>
    //       <li><Link to='/'>Home</Link></li>
    //       <li><Link to='/list'>List</Link></li>
    //       <li><Link to='/create'>Create</Link></li>
    //       <li><Link to='/search'>Search</Link></li>
    //       <li><Link to='/detail'>Details</Link></li>
    //       <li><Link to='/update'>Update</Link></li>
    //     </ul>

    //     <Routes>
    //       <Route exact path='/' element={<Home />} />
    //       <Route path='/list' element={<RestaurantList />} />
    //       <Route path='/create' element={<RestaurantCreate />} />
    //       <Route path='/search' element={<RestaurantSearch />} />
    //       <Route path='/detail' element={<RestaurantDetail />} />
    //       <Route path='/update' element={<RestaurantUpdate />} />
    //     </Routes>
    //   </Router>
    // </div>
    <>
      <Header />
      <Category />
      <TopRestaurant />
      <OnlineDelivery />
    </>
  )
}

export default App
