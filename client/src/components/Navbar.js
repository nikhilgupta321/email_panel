import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from "react-router"
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <div>
        <div className="fixed top-0  z-10 flex items-center justify-between w-full bg-blue-500 shadow-md h-14">
          <div className="m-3 text-xl text-slate-100"><div className="text-slate-100" to="/admin">Home</div></div>
          <div>
            <form  className="search">
              <input className="h-8 pl-4 m-6 rounded-md w-96 focus:outline-emerald-600"  placeholder="Search..." required />
              <FontAwesomeIcon icon={faSearch} className="mx-1 search-icon text-white text-2xl" />
              <button type="submit">
                <i className="m-4 text-2xl text-slate-200 fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="flex gap-2 text-xl bg-blue-500">
            <div className="m-3 text-slate-100" >Home</div>
            <div className="m-3 text-slate-100">
              <Link to="/">
              <button >Logout</button>
              </Link>
              </div>
          </div>
        </div>
        <div className=" pt-14 text-base ">
          <Outlet />
        </div>
      </div>

       
    );
}

export default MyNavbar;  
