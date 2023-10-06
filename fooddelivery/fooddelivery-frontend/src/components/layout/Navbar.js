
import React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/userAction";


const Navbar = () => {
  const {cartItems}  = useSelector((state)=>state.cart)
  const alert = useAlert();
  const dispatch = useDispatch();
  const {user,loading} = useSelector((state)=>state.cart)
  const logoutHandler = () =>{
    dispatch(logout());
    alert.success("Logged out successfully")
  }
  
  

  return (
    <>
      <nav className="navbar row sticky-top">
        <div className="col-12 col-md-3">
          <Link to='/'>

            <img src="/images/logo.webp" alt="logo" className="logo"/>
          </Link>
        </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0 rounded">
        <div className="input-group rounded">
            <input type="text" id="search_feild" className="form-control rounded"
            placeholder="Search Your Favorite Restaurant..."/>

        <div className="input-group-append">
            <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true">

                </i>
                </button>
                </div>    
        </div>

      </div>
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center" >

        <Link to="/cart" style={{textDecoration:"none"}}>

        <span className="ml-3" id="cart">
            Cart
        </span>
        <span className="ml1" id="cart_count">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
        </Link>
        {user ?(
          <div className="ml-4 dropdown d-inline">
            <Link to='/' className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <figure className="avatar avatar-nav">
                <img src={user.avatar && user.avatar.url} alt={user && user.name} className="rounded-circle"></img>
              </figure>
              <span>{user && user.name}</span>
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
              <Link className="dropdown-item" to='/eats/orders/me/myOrders'>
                Orders
              </Link>
              <Link className="dropdown-item" to='/users/me'>
                Profile
              </Link>
              <Link className="dropdown-item text-danger" to='/' onClick={logoutHandler}>
                Logout
              </Link>
            </div>
          </div>

        ):(
          !loading && (

            <Link to='/users/login'  id="login-btn" style={{textDecoration:"none"}} >
              <span className="ml-5" id="cart">
            Login
        </span>
              </Link>
          )
        )}

      </div>

         </nav>
    </>
  )
}

export default Navbar