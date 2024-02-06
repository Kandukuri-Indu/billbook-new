import React,  {useState} from 'react'
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
// import {img1,img2,img3,img4,LogoImg,LogoSmallImg,UsFlag,FrFlag,EsFlag,DeFlag,logowhite,Logo} from "../_components/imagepath"
import { De, Es, Fr, img2, img3, img4, img7, LogoSmallImg, search, Us, Us1 } from "../_components/imagepath";



const Headerfour = (props) => {
	
	const [show, setShow] = useState(true);
	const handlesidebar=()=>{
		document.body.classList.toggle('mini-sidebar');
	}
	const onMenuClik = () => {
		props.onMenuClick()
	}
	const [isSideMenu, setSideMenu] = useState("")
	const [level2Menu, setLevel2Menu] = useState("")
	const [level3Menu, setLevel3Menu] = useState("")
	const [level4Menu, setLevel4Menu] = useState("")
	const toggleSidebar = (value) => {
		console.log (value);
		setSideMenu(value)
		
	}
	
const toggleLvelTwo = (value) => {
	setLevel2Menu(value)
  }
  const toggleLevelThree = (value) => {
	setLevel3Menu(value)
  }	
  const toggleLevelfour = (value) => {
	setLevel4Menu(value)
  }	
    console.log("Working", isSideMenu)
		
	let pathName = props.location.pathname;
	

        return(

			<div className="header header-three">
			
			{/* Logo */}
			<div className="header-left header-left-three">
			{/* Sidebar Toggle */}
			
				<Link to="/index" className="logo">
						<img src={LogoSmallImg} alt="Logo" />
					</Link>
					<Link to="/index" className="logo logo-small">
						<img src={LogoSmallImg} alt="Logo" width="30" height="30" />
				</Link>
			</div>
				
			{/* <Link to="#" id="toggle_btn" onClick={handlesidebar}>
				<i className="fas fa-bars"></i>
			</Link>		 */}
			{/* /Logo */}	
			<div className="top-nav-search">
    <form>
      <input type="text" className="form-control" placeholder="Search here" />
      <button className="btn" type="submit">
        <img src={search} alt="img" />
      </button>
    </form>
  </div>
							<Link className="mobile_btn" id="mobile_btn"  to="#"  onClick={() => onMenuClik()}>
					<i className="fas fa-bars"></i>
				</Link>				
				<ul className="nav nav-tabs user-menu">
    {/* Flag */}
    <li className="nav-item dropdown has-arrow flag-nav">
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
      <Link to="#" className="toggle-switch moon-icon">
        {/* <i className="fe fe-moon" /> */}
		<FeatherIcon icon="moon"/>
      </Link>
    </li>
    <li className="nav-item dropdown  flag-nav dropdown-heads">
      <Link className="nav-link bell-icon" data-bs-toggle="dropdown" to="#" role="button">
        {/* <i className="fe fe-bell" /> */}
        <FeatherIcon icon="bell"/>
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
              <Link to="profile.html">
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
                      <span className="noti-title">Brian Johnson</span> paid the
                      invoice <span className="noti-title">#DF65485</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">4 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="profile.html">
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
              <Link to="profile.html">
                <div className="media d-flex">
                  <div className="avatar avatar-sm">
                    <span className="avatar-title rounded-circle bg-primary-light">
                      <i className="far fa-user" />
                    </span>
                  </div>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">New user registered</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">8 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="profile.html">
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
                      <span className="noti-title">Barbara Moore</span> declined
                      the invoice <span className="noti-title">#RDW026896</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">12 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="profile.html">
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
          <Link to="notifications.html">View all Notifications</Link>
        </div>
      </div>
    </li>
    <li className="nav-item  has-arrow dropdown-heads ">
      <Link to="#" className="win-maximize maximize-icon">
        {/* <i className="fe fe-maximize" /> */}
        <FeatherIcon icon="maximize"/>
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
          <img
            src={img7}
            alt="img"
            className="profilesidebar"
          />
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
                <Link className="dropdown-item" to="settings.html">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <div className="subscription-logout">
            <ul>
              <li className="pb-0">
                <Link className="dropdown-item" to="login.html">
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
				</div>
          
        );
    
}
export default withRouter(Headerfour);