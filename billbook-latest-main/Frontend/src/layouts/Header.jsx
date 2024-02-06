import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  De,
  Es,
  Fr,
  img2,
  img3,
  img4,
  img7,
  search,
  Us,
  Us1,
} from "../_components/imagepath";

const Header = (props) => {


  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };

  const onMenuClik = () => {
  	props.onMenuClick()
  }

  useEffect(() => {
    const handleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }

    const maximizeBtn = document.querySelector('.win-maximize');
    maximizeBtn.addEventListener('click', handleClick);

    return () => {
      maximizeBtn.removeEventListener('click', handleClick);
    };
    
  }, []);

  useEffect(() => {
    $(document).on('change', '.sidebar-type-five input', function() {
	    if($(this).is(':checked')) {
	        $('.sidebar').addClass('sidebar-nine');
	        $('.sidebar-menu').addClass('sidebar-menu-nine');
	        $('.menu-title').addClass('menu-title-nine');
	        $('.header').addClass('header-nine');
	        $('.header-left-two').addClass('header-left-nine');
	        $('.user-menu').addClass('user-menu-nine');
	        $('.dropdown-toggle').addClass('dropdown-toggle-nine');
	        $('#toggle_btn').addClass('darktoggle_btn');
	        $('.white-logo').addClass('show-logo');
	        $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').addClass('hide-logo');
	    } else {
	        $('.sidebar').removeClass('sidebar-nine');
	        $('.sidebar-menu').removeClass('sidebar-menu-nine');
	        $('.menu-title').removeClass('menu-title-nine');
	        $('.header').removeClass('header-nine');
	        $('.header-left-two').removeClass('header-left-nine');
	        $('.user-menu').removeClass('user-menu-nine');
	        $('.dropdown-toggle').removeClass('dropdown-toggle-nine');
	        $('#toggle_btn').removeClass('darktoggle_btn');
	        $('.white-logo').removeClass('show-logo');
	        $('.header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)').removeClass('hide-logo');
	    }
	});
  }, [])

  useEffect(() => {
    $(document).on('change', '.sidebar-type-three input', function() {
	    if($(this).is(':checked')) {
	        $('.sidebar').addClass('sidebar-seven');
	        $('.sidebar-menu').addClass('sidebar-menu-seven');
	        $('.menu-title').addClass('menu-title-seven');
	        $('.header').addClass('header-seven');
	        $('.header-left-two').addClass('header-left-seven');
	        $('.user-menu').addClass('user-menu-seven');
	        $('.dropdown-toggle').addClass('dropdown-toggle-seven');
	        $('.header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)').addClass('hide-logo');
	        $('.header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo').addClass('show-logo');
	    } else {
	        $('.sidebar').removeClass('sidebar-seven');
	        $('.sidebar-menu').removeClass('sidebar-menu-seven');
	        $('.menu-title').removeClass('menu-title-seven');
	        $('.header').removeClass('header-seven');
	        $('.header-left-two').removeClass('header-left-seven');
	        $('.user-menu').removeClass('user-menu-seven');
	        $('.dropdown-toggle').removeClass('dropdown-toggle-seven');
	        $('.header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)').removeClass('hide-logo');
	        $('.header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo').removeClass('show-logo');
	    }
	});
  }, [])

  useEffect(() => {
    $(document).on('change', '.sidebar-type-two input', function() {
	    if($(this).is(':checked')) {
	        $('.sidebar').addClass('sidebar-six');
	        $('.sidebar-menu').addClass('sidebar-menu-six');
	        $('.sidebar-menu-three').addClass('sidebar-menu-six');
	        $('.menu-title').addClass('menu-title-six');
	        $('.menu-title-three').addClass('menu-title-six');
	        $('.header').addClass('header-six');
	        $('.header-left-two').addClass('header-left-six');
	        $('.user-menu').addClass('user-menu-six');
	        $('.dropdown-toggle').addClass('dropdown-toggle-six');
	        $('.header-two .header-left-two .logo:not(.logo-small), .header-four .header-left-four .logo:not(.logo-small)').addClass('hide-logo');
	        $('.header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo').addClass('show-logo');
	    } else {
	        $('.sidebar').removeClass('sidebar-six');
	        $('.sidebar-menu').removeClass('sidebar-menu-six');
	        $('.sidebar-menu-three').removeClass('sidebar-menu-six');
	        $('.menu-title').removeClass('menu-title-six');
	        $('.menu-title-three').removeClass('menu-title-six');
	        $('.header').removeClass('header-six');
	        $('.header-left-two').removeClass('header-left-six');
	        $('.user-menu').removeClass('user-menu-six');
	        $('.dropdown-toggle').removeClass('dropdown-toggle-six');
	        $('.header-two .header-left-two .logo, .header-four .header-left-four .logo:not(.logo-small)').removeClass('hide-logo');
	        $('.header-two .header-left-two .dark-logo, .header-four .header-left-four .dark-logo').removeClass('show-logo');
	    }
	});
  }, [])
  
  
  


  return (
    <div className="header header-one">
      {/* Sidebar Toggle */}
      <Link to="#" id="toggle_btn" onClick={handlesidebar} >
        <span className="toggle-bars">
          <span className="bar-icons" />
          <span className="bar-icons" />
          <span className="bar-icons" />
          <span className="bar-icons" />
        </span>
      </Link>
      {/* /Sidebar Toggle */}
      {/* Search */}
      <Link to="#" className="mobile_btn" id="mobile_btn" >
        <i className="fas fa-bars" />
      </Link>
      <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <img src={search} alt="img" />
          </button>
        </form>
      </div>
      {/* /Search */}
      {/* Mobile Menu Toggle */}
      <Link to="#" className="mobile_btn" id="mobile_btn" onClick={() => onMenuClik()}>
        <i className="fas fa-bars" />
      </Link>
      {/* /Mobile Menu Toggle */}
      {/* Header Menu */}
      <ul className="nav nav-tabs user-menu ">
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav d-none">
          <Link
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
          >
            <img src={Us1} alt="" height={20} />
            <span>English</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="#" className="dropdown-item">
              <img src={Us} alt="" height={16} />
              <span>English</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={Fr} alt="" height={16} />
              <span>French</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={Es} alt="" height={16} />
              <span>Spanish</span>
            </Link>
            <Link to="#" className="dropdown-item">
              <img src={De} alt="" height={16} />
              <span>German</span>
            </Link>
          </div>
        </li>
        {/* /Flag */}
        <li className="nav-item  has-arrow dropdown-heads ">
          <Link to="#" className="toggle-switch moon-switch">
            {/* <i className="fe fe-moon" /> */}
            <FeatherIcon icon="moon" />
          </Link>
        </li>
        <li className="nav-item dropdown  flag-nav dropdown-heads">
          <Link
            className="nav-link bell-icon"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
          >
            {/* <i className="fe fe-bell" /> */}
            <FeatherIcon icon="bell" />
            <span className="badge rounded-pill" />
          </Link>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <Link to="#" className="clear-noti">
                {" "}
                Clear All
              </Link>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src={img2}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Brian Johnson</span> paid
                          the invoice{" "}
                          <span className="noti-title">#DF65485</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src={img3}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Marie Canales</span> has
                          accepted your estimate{" "}
                          <span className="noti-title">#GTR458789</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="media d-flex">
                      <div className="avatar avatar-sm">
                        <span className="avatar-title rounded-circle bg-primary-light">
                          <i className="far fa-user" />
                        </span>
                      </div>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">
                            New user registered
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="media d-flex">
                      <span className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          alt=""
                          src={img4}
                        />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Barbara Moore</span>{" "}
                          declined the invoice{" "}
                          <span className="noti-title">#RDW026896</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="notification-message">
                  <Link to="/profile">
                    <div className="media d-flex">
                      <div className="avatar avatar-sm">
                        <span className="avatar-title rounded-circle bg-info-light">
                          <i className="far fa-comment" />
                        </span>
                      </div>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">
                            You have received a new message
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="/notifications">View all Notifications</Link>
            </div>
          </div>
        </li>
        <li className="nav-item  has-arrow dropdown-heads ">
          <Link to="#" className="win-maximize maximize-icon">
            <FeatherIcon icon="maximize" />
          </Link>
        </li>
        {/* User Menu */}
        <li className="nav-item dropdown">
          <Link
            to="#"
            className="user-link  nav-link"
            data-bs-toggle="dropdown"
          >
            <span className="user-img">
              <img src={img7} alt="img" className="profilesidebar" />
              <span className="animate-circle" />
            </span>
            <span className="user-content">
              <span className="user-details">Admin</span>
              <span className="user-name">John Smith</span>
            </span>
          </Link>
          <div className="dropdown-menu menu-drop-user">
            <div className="profilemenu">
              <div className="subscription-menu">
                <ul>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="subscription-logout">
                <ul>
                  <li className="pb-0">
                    <Link className="dropdown-item" to="/login">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* /User Menu */}
      </ul>
      {/* /Header Menu */}
    </div>

  );
};
export default Header;
