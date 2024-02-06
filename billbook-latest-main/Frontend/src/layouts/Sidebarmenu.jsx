import React, { useEffect,useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebarmenu = (props) => {


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
    setLevel3Menu("")
    setLevel4Menu("")
  }
  const toggleLevelThree = (value) => {
	setLevel2Menu("")
    setLevel3Menu(value)
    setLevel4Menu("")
  }	
  const toggleLevelfour = (value) => {
	setLevel2Menu("")
    setLevel3Menu("")
    setLevel4Menu(value)
  }	
    console.log("Working", isSideMenu)
	
    console.log("Working", isSideMenu)

			
		let pathName = props.location.pathname;
        return(
            <>
        {/* Header Menu List */}
        <div className="sidebar sidebar-five">
        <div id="sidebar-menu" className="sidebar-menu sidebar-menu-five">
        <ul className="nav">
            <li className="submenu submenu-five nav-item dropdown">
            
            <Link to="#" className={ `dropdown-toggle d-flex align-items-center ${level2Menu == "main" ? "subdrop" : "" }`} onClick={()=> toggleLvelTwo(level2Menu =="main" ? "": "main")}><FeatherIcon icon="home" /> <span className='dropdown-toggle'>Main </span><span className="menu-arrow"></span>
                
            </Link>
            { level2Menu == "main" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level2Menu ? "block" : "none" }}>
            
            <li className="submenu">
                  <Link
                    to="#"
                    className={
                      isSideMenu == "dashboard" ? "active subdrop" : "active"
                    }
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "dashboard" ? "" : "dashboard"
                      )
                    }
                  >
                    <FeatherIcon icon="home" /> <span> Dashboard</span>{" "}
                    <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "dashboard" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "dashboard" || pathName == "/index"
                            ? "block"
                            : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/index"
                          className={pathName == "/index" ? "active" : ""}
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/chat" === pathName ||
                    "/calendar" === pathName ||
                    "/inbox" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "application" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "application" ? "" : "application"
                      )
                    }
                  >
                    <FeatherIcon icon="grid" /> <span> Application</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "application" ? (
                    <ul
                      style={{
                        display: isSideMenu == "application" ? "block" : "none",
                      }}
                    >
                      <li className={`${"/chat" === pathName ? "active" : ""}`}>
                        <Link to="/chat">Chat</Link>
                      </li>
                      <li
                        className={`${
                          "/calendar" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/calendar">Calendar</Link>
                      </li>
                      <li
                        className={`${"/inbox" === pathName ? "active" : ""}`}
                      >
                        <Link to="/inbox">Email</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                <li
                  className={`${
                    "/customers" === pathName ||
                    "/active-customers" === pathName ||
                    "/deactive-customers" === pathName ||
                    "/edit-customer" === pathName ||
                    "/add-customer" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/customers">
                    <FeatherIcon icon="users" />
                    <span>Customers</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/customer-details" === pathName ||
                    "/customer-details-paid" === pathName ||
                    "/customer-details-cancel" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/customer-details">
                    <FeatherIcon icon="file" /> <span>Customers Details</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/vendors" === pathName || "/add-ledger" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/vendors">
                    <FeatherIcon icon="user" /> <span>Vendors</span>
                  </Link>
                </li>

                {/* /Customers */}
                {/* Inventory */}

                <li
                  className={`${
                    "/product-list" === pathName ||
                    "/add-product" === pathName ||
                    "/edit-product" === pathName ||
                    "/category" === pathName ||
                    "/add-category" === pathName ||
                    "/units" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "product-service" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "product-service" ? "" : "product-service"
                      )
                    }
                  >
                    <FeatherIcon icon="package" />{" "}
                    <span> Product / Services</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "product-service" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "product-service" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/product-list" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/product-list">Product List</Link>
                      </li>
                      <li
                        className={`${
                          "/category" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/category">Category</Link>
                      </li>
                      <li
                        className={`${"/units" === pathName ? "active" : ""}`}
                      >
                        <Link to="/units">Units</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/inventory" === pathName || "/inventory" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/inventory">
                    <FeatherIcon icon="user" /> <span>Inventory</span>
                  </Link>
                </li>

                {/* /Inventory */}
                {/* Sales */}

                <li
                  className={`${
                    "/invoice-list" === pathName ||
                    "/invoice-details" === pathName ||
                    "/invoice-paid" === pathName ||
                    "/invoice-overdue" === pathName ||
                    "/invoice-draft" === pathName ||
                    "/invoice-recurring" === pathName ||
                    "/invoice-cancelled" === pathName ||
                    "/invoice-grid" === pathName ||
                    "/add-invoice" === pathName ||
                    "/edit-invoice" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "invoice-list" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "invoice-list" ? "" : "invoice-list"
                      )
                    }
                  >
                    <FeatherIcon icon="file" /> <span> Invoice</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "invoice-list" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "invoice-list" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/invoice-list" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/invoice-list">Invoice List</Link>
                      </li>
                      <li
                        className={`${
                          "/invoice-template" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/invoice-template">Invoices Template</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/recurring-invoices" === pathName ||
                    "/recurring-paid" === pathName ||
                    "/recurring-pending" === pathName ||
                    "/recurring-overdue" === pathName ||
                    "/recurring-draft" === pathName ||
                    "/recurring-recurring" === pathName ||
                    "/recurring-cancelled" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/recurring-invoices">
                    <FeatherIcon icon="clipboard" />{" "}
                    <span>Recurring Invoice</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/credit-notes" === pathName ||
                    "/add-credit-notes" === pathName ||
                    "/credit-notes-pending" === pathName ||
                    "/credit-notes-overdue" === pathName ||
                    "/credit-notes-draft" === pathName ||
                    "/credit-notes-recurring" === pathName ||
                    "/credit-notes-cancelled" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/credit-notes">
                    <FeatherIcon icon="edit" /> <span>Credit Notes</span>
                  </Link>
                </li>

                <li
                  className={`${
                    "/purchases" === pathName ||
                    "/edit-purchases" === pathName ||
                    "/edit-purchases" === pathName ||
                    "/purchases-details" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/purchases">
                    <FeatherIcon icon="shopping-cart" /> <span>Purchases</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/purchase-orders" === pathName ? "active" : ""
                  }`}
                >
                  <Link to="/purchase-orders">
                    <FeatherIcon icon="shopping-bag" />{" "}
                    <span>Purchase Orders</span>
                  </Link>
                </li>
                <li
                  className={`${"/debit-notes" === pathName ? "active" : ""}`}
                >
                  <Link to="/debit-notes">
                    <FeatherIcon icon="file-text" /> <span>Debit Notes</span>
                  </Link>
                </li>

                {/* /Purchases */}
                {/* Finance & Accounts */}

                <li className={`${"/expenses" === pathName ? "active" : ""}`}>
                  <Link to="/expenses">
                    <FeatherIcon icon="file-plus" /> <span>Expenses</span>
                  </Link>
                </li>
                <li className={`${"/payments" === pathName ? "active" : ""}`}>
                  <Link to="/payments">
                    <FeatherIcon icon="credit-card" /> <span>Payment</span>
                  </Link>
                </li>

                {/* /Finance & Accounts */}
                {/* Quotations */}

                <li className="menu-title">
                  <span>Quotations</span>
                </li>
                <li
                  className={`${
                    "/quotations" === pathName ||
                    "/add-quotations" === pathName ||
                    "/edit-quotations" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/quotations">
                    <FeatherIcon icon="clipboard" /> <span>Quotations</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/delivery-challans" === pathName ||
                    "/add-delivery-challans" === pathName ||
                    "/edit-delivery-challans" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/delivery-challans">
                    <FeatherIcon icon="file-text" />{" "}
                    <span>Delivery Challans</span>
                  </Link>
                </li>

                {/* /Quotations */}
                {/* Reports */}

                <li>
                  <Link to="/quotations">
                    <FeatherIcon icon="clipboard" /> <span>Quotations</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/payment-summary" === pathName ? "active" : ""
                  }`}
                >
                  <Link to="/payment-summary">
                    <FeatherIcon icon="credit-card" />{" "}
                    <span>Payment Summary</span>
                  </Link>
                </li>

                {/* /Reports */}
                {/* User Management */}
                <li
                  className={`${
                    "/manage-user" === pathName ||
                    "/add-user" === pathName ||
                    "/users" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "manage-user" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "manage-user" ? "" : "manage-user"
                      )
                    }
                  >
                    <FeatherIcon icon="user" /> <span>Manage Users </span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "manage-user" ? (
                    <ul
                      style={{
                        display: isSideMenu == "manage-user" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/add-user" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/add-user">Add User</Link>
                      </li>
                      <li
                        className={`${"/users" === pathName ? "active" : ""}`}
                      >
                        <Link to="/users">Users</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/roles-permission" === pathName ||
                    "/permission" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/roles-permission">
                    <FeatherIcon icon="clipboard" />{" "}
                    <span>Roles &amp; Permission</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/delete-account-request" === pathName ? "active" : ""
                  }`}
                >
                  <Link to="/delete-account-request">
                    <FeatherIcon icon="trash-2" />{" "}
                    <span>Delete Account Request</span>
                  </Link>
                </li>

                {/* /User Management */}
                {/* Membership) */}

                <li
                  className={`${
                    "/membership-plans" === pathName ||
                    "/membership-addons" === pathName ||
                    "/transaction" === pathName ||
                    "/subscribers" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={
                      isSideMenu == "membership-plans" ? "subdrop" : ""
                    }
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "membership-plans"
                          ? ""
                          : "membership-plans"
                      )
                    }
                  >
                    <FeatherIcon icon="book" /> <span>Membership </span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "membership-plans" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "membership-plans" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/membership-plans" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/membership-plans">Membership Plan</Link>
                      </li>
                      <li
                        className={`${
                          "/membership-addons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/membership-addons">Membership Addons</Link>
                      </li>
                      <li
                        className={`${
                          "/subscribers" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/subscribers">Subscribers</Link>
                      </li>
                      <li
                        className={`${
                          "/transactions" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/transactions">Transactions</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>

                {/* /Membership) */}
                {/* Content (CMS) */}

                <li
                  className={`${
                    "/add-page" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "add-page" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "add-page" ? "" : "add-page")
                    }
                  >
                    <FeatherIcon icon="folder" /> <span>Pages </span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "add-page" ? (
                    <ul
                      style={{
                        display: isSideMenu == "add-page" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/add-page" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/add-page">Add Page</Link>
                      </li>
                      <li
                        className={`${"/pages" === pathName ? "active" : ""}`}
                      >
                        <Link to="/pages">Page</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/all-blogs" === pathName ||
                    "/inactive-blog" === pathName ||
                    "/add-blog" === pathName ||
                    "/categories" === pathName ||
                    "/add-categories" === pathName ||
                    "/blog-comments" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "all-blogs" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "all-blogs" ? "" : "all-blogs"
                      )
                    }
                  >
                    <FeatherIcon icon="book" /> <span>Blog </span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "all-blogs" ? (
                    <ul
                      style={{
                        display: isSideMenu == "all-blogs" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/all-blogs" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/all-blogs">All Blogs</Link>
                      </li>
                      <li
                        className={`${
                          "/add-blog" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/add-blog">Add Blog</Link>
                      </li>
                      <li
                        className={`${
                          "/categories" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/categories">Categories</Link>
                      </li>
                      <li
                        className={`${
                          "/blog-comments" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/blog-comments">Blog Comments</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/countries" === pathName ||
                    "/states" === pathName ||
                    "/cities" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "countries" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "countries" ? "" : "countries"
                      )
                    }
                  >
                    <FeatherIcon icon="map-pin" /> <span>Location</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "countries" ? (
                    <ul
                      style={{
                        display: isSideMenu == "countries" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/countries" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/countries">Countries</Link>
                      </li>
                      <li
                        className={`${"/states" === pathName ? "active" : ""}`}
                      >
                        <Link to="/states">States</Link>
                      </li>
                      <li
                        className={`${"/cities" === pathName ? "active" : ""}`}
                      >
                        <Link to="/cities">Cities</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/testimonials" === pathName ||
                    "/add-testimonials" === pathName ||
                    "/edit-testimonials" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/testimonials">
                    <FeatherIcon icon="message-square" />{" "}
                    <span>Testimonials</span>
                  </Link>
                </li>
                <li className={`${"/faq" === pathName ? "active" : ""}`}>
                  <Link to="/faq">
                    <FeatherIcon icon="alert-circle" /> <span>FAQ</span>
                  </Link>
                </li>

                {/* /Content (CMS) */}
                {/* Support */}

                <li
                  className={`${
                    "/contact-messages" === pathName ? "active" : ""
                  }`}
                >
                  <Link to="/contact-messages">
                    <FeatherIcon icon="printer" /> <span>Contact Messages</span>
                  </Link>
                </li>
                <li
                  className={`${
                    "/tickets" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "tickets" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "tickets" ? "" : "tickets")
                    }
                  >
                    <FeatherIcon icon="save" /> <span>Tickets</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "tickets" ? (
                    <ul
                      style={{
                        display: isSideMenu == "tickets" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${"/tickets" === pathName ? "active" : ""}`}
                      >
                        <Link to="/tickets">Tickets</Link>
                      </li>
                      <li
                        className={`${
                          "/tickets-list" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/tickets-list">Tickets List</Link>
                      </li>
                      <li
                        className={`${
                          "/tickets-kanban" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/tickets-kanban">Tickets Kanban</Link>
                      </li>
                      <li
                        className={`${
                          "/tickets-overview" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/tickets-overview">Tickets Overview</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
            </ul>
                :"" 
            }
            </li>
            <li className="submenu submenu-five nav-item dropdown">
            <Link to="#" className={ `dropdown-toggle d-flex align-items-center ${level3Menu == "pages" ? "subdrop" : "" }`} onClick={()=> toggleLevelThree(level3Menu =="pages" ? "": "pages")}><FeatherIcon icon="file" />  <span>Pages </span><span className="menu-arrow"></span>
                
                </Link>
                { level3Menu == "pages" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level3Menu ? "block" : "none" }}>
            <li
                className={`${
                  "/profile" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/profile">
                  <FeatherIcon icon="user" /> <span>Profile</span>
                </Link>
            </li>
            <li
                className={`${
                  "/error-400" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/error-400">
                  <FeatherIcon icon="x-square" /> <span>Error 400</span>
                </Link>
            </li>
            <li
                className={`${
                  "/blank-page" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/blank-page">
                  <FeatherIcon icon="file" /> <span>Blank Page</span>
                </Link>
            </li>
            <li
                className={`${
                  "/vector-map" === pathName
                    ? "active"
                    : ""
                }`}
              >
                <Link to="/vector-map">
                  <FeatherIcon icon="image" /> <span>Vector Map</span>
                </Link>
            </li>
            </ul>
                :"" 
            }
            </li>
            <li className="submenu submenu-five nav-item dropdown">
            <Link to="#" className={ `dropdown-toggle d-flex align-items-center ${level4Menu == "Interface" ? "subdrop" : "" }`} onClick={()=> toggleLevelfour(level4Menu =="Interface" ? "": "Interface")}><FeatherIcon icon="layers" />  <span>UI Interface </span><span className="menu-arrow"></span>						
            </Link>
            { level4Menu == "Interface" ? 
            <ul className="header-four dropdown-menu dropdown-menu-five dropdown-menu-right" style={{ display: level4Menu ? "block" : "none" }}>
            
            <li
                  className={`${
                    "/alerts" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "alerts" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "alerts" ? "" : "alerts")
                    }
                  >
                    <FeatherIcon icon="pocket" /> <span>Base UI</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "alerts" ? (
                    <ul
                      style={{
                        display: isSideMenu == "alerts" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${"/alerts" === pathName ? "active" : ""}`}
                      >
                        <Link to="/alerts">Alerts</Link>
                      </li>
                      <li
                        className={`${
                          "/accordions" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/accordions">Accordions</Link>
                      </li>
                      <li
                        className={`${"/avatar" === pathName ? "active" : ""}`}
                      >
                        <Link to="/avatar">Avatar</Link>
                      </li>
                      <li
                        className={`${"/badges" === pathName ? "active" : ""}`}
                      >
                        <Link to="/badges">Badges</Link>
                      </li>
                      <li
                        className={`${"/buttons" === pathName ? "active" : ""}`}
                      >
                        <Link to="/buttons">Buttons</Link>
                      </li>
                      <li
                        className={`${
                          "/button-group" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/button-group">Button Group</Link>
                      </li>
                      <li
                        className={`${
                          "/breadcrumb" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/breadcrumb">Breadcrumb</Link>
                      </li>
                      <li
                        className={`${"/cards" === pathName ? "active" : ""}`}
                      >
                        <Link to="/cards">Cards</Link>
                      </li>
                      <li
                        className={`${
                          "/carousel" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/carousel">Carousel</Link>
                      </li>
                      <li
                        className={`${
                          "/dropdowns" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/dropdowns">Dropdowns</Link>
                      </li>
                      <li className={`${"/grid" === pathName ? "active" : ""}`}>
                        <Link to="/grid">Grid</Link>
                      </li>
                      <li
                        className={`${"/images" === pathName ? "active" : ""}`}
                      >
                        <Link to="/images">Images</Link>
                      </li>
                      <li
                        className={`${
                          "/lightbox" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/lightbox">Lightbox</Link>
                      </li>
                      <li
                        className={`${"/media" === pathName ? "active" : ""}`}
                      >
                        <Link to="/media">Media</Link>
                      </li>
                      <li
                        className={`${"/modals" === pathName ? "active" : ""}`}
                      >
                        <Link to="/modals">Modals</Link>
                      </li>
                      <li
                        className={`${
                          "/offcanvas" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/offcanvas">Offcanvas</Link>
                      </li>
                      <li
                        className={`${
                          "/pagination" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/pagination">Pagination</Link>
                      </li>
                      <li
                        className={`${"/popover" === pathName ? "active" : ""}`}
                      >
                        <Link to="/popover">Popover</Link>
                      </li>
                      <li
                        className={`${
                          "/progress-bars" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/progress-bars">Progress Bars</Link>
                      </li>
                      <li
                        className={`${
                          "/placeholders" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/placeholders">Placeholders</Link>
                      </li>
                      <li
                        className={`${
                          "/range-slider" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/range-slider">Range Slider</Link>
                      </li>
                      <li
                        className={`${"/spinner" === pathName ? "active" : ""}`}
                      >
                        <Link to="/spinner">Spinner</Link>
                      </li>
                      <li
                        className={`${
                          "/sweet-alerts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/sweet-alerts">Sweet Alerts</Link>
                      </li>
                      <li className={`${"/tabs" === pathName ? "active" : ""}`}>
                        <Link to="/tabs">Tabs</Link>
                      </li>
                      <li
                        className={`${"/toasts" === pathName ? "active" : ""}`}
                      >
                        <Link to="/toasts">Toasts</Link>
                      </li>
                      <li
                        className={`${"/tooltip" === pathName ? "active" : ""}`}
                      >
                        <Link to="/tooltip">Tooltip</Link>
                      </li>
                      <li
                        className={`${
                          "/typography" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/typography">Typography</Link>
                      </li>
                      <li
                        className={`${"/video" === pathName ? "active" : ""}`}
                      >
                        <Link to="/video">Video</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/ribbon" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "ribbon" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "ribbon" ? "" : "ribbon")
                    }
                  >
                    <FeatherIcon icon="box" /> <span>Elements</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "ribbon" ? (
                    <ul
                      style={{
                        display: isSideMenu == "ribbon" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${"/ribbon" === pathName ? "active" : ""}`}
                      >
                        <Link to="/ribbon">Ribbon</Link>
                      </li>
                      <li
                        className={`${
                          "/clipboard" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/clipboard">Clipboard</Link>
                      </li>
                      <li
                        className={`${
                          "/drag-drop" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/drag-drop">Drag & Drop</Link>
                      </li>
                      <li
                        className={`${"/rating" === pathName ? "active" : ""}`}
                      >
                        <Link to="/rating">Rating</Link>
                      </li>
                      <li
                        className={`${
                          "/text-editor" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/text-editor">Text Editor</Link>
                      </li>
                      <li
                        className={`${"/counter" === pathName ? "active" : ""}`}
                      >
                        <Link to="/counter">Counter</Link>
                      </li>
                      <li
                        className={`${
                          "/scrollbar" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/scrollbar">Scrollbar</Link>
                      </li>
                      <li
                        className={`${
                          "/notification" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/notification">Notification</Link>
                      </li>
                      <li
                        className={`${
                          "/sticky-note" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/sticky-note">Sticky Note</Link>
                      </li>
                      <li
                        className={`${
                          "/timeline" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/timeline">Timeline</Link>
                      </li>
                      <li
                        className={`${
                          "/horizontal-timeline" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/horizontal-timeline">
                          Horizontal Timeline
                        </Link>
                      </li>
                      <li
                        className={`${
                          "/form-wizard" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/form-wizard">Form Wizard</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/apex-charts" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "apex-charts" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "apex-charts" ? "" : "apex-charts"
                      )
                    }
                  >
                    <FeatherIcon icon="bar-chart" /> <span>Charts</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "apex-charts" ? (
                    <ul
                      style={{
                        display: isSideMenu == "apex-charts" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/apex-charts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/apex-charts">Apex Charts</Link>
                      </li>
                      <li
                        className={`${
                          "/chart-js" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/chart-js">Chart Js</Link>
                      </li>
                      <li
                        className={`${
                          "/morris-charts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/morris-charts">Morris Charts</Link>
                      </li>
                      <li
                        className={`${
                          "/float-charts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/float-charts">Float Charts</Link>
                      </li>
                      <li
                        className={`${
                          "/peity-charts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/peity-charts">Piety Charts</Link>
                      </li>
                      <li
                        className={`${
                          "/c3-charts" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/c3-charts">C3 Charts</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/fontawesome-icons" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={
                      isSideMenu == "fontawesome-icons" ? "subdrop" : ""
                    }
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "fontawesome-icons"
                          ? ""
                          : "fontawesome-icons"
                      )
                    }
                  >
                    <FeatherIcon icon="award" /> <span>Icons</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "fontawesome-icons" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "fontawesome-icons" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/fontawesome-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/fontawesome-icons">Fontawesome Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/feather-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/feather-icons">Feather Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/ionic-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/ionic-icons">Ionic Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/material-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/material-icons">Material Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/pe7-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/pe7-icons">Pe7 Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/simpleline-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/simpleline-icons">Simpleline Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/themify-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/themify-icons">Themify Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/weather-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/weather-icons">Weather Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/typicon-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/typicon-icons">Typicon Icons</Link>
                      </li>
                      <li
                        className={`${
                          "/flag-icons" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/flag-icons">Flag Icons</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/basic-inputs" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "basic-inputs" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "basic-inputs" ? "" : "basic-inputs"
                      )
                    }
                  >
                    <FeatherIcon icon="sidebar" /> <span>Forms</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "basic-inputs" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "basic-inputs" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/basic-inputs" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/basic-inputs">Basic Inputs</Link>
                      </li>
                      <li
                        className={`${
                          "/input-groups" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/input-groups">Input Groups</Link>
                      </li>
                      <li
                        className={`${
                          "/horizontal-form" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/horizontal-form">Horizontal Form</Link>
                      </li>
                      <li
                        className={`${
                          "/vertical-form" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/vertical-form">Vertical Form</Link>
                      </li>
                      <li
                        className={`${
                          "/form-mask" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/form-mask">Form Mask</Link>
                      </li>
                      <li
                        className={`${
                          "/form-validation" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/form-validation">Form Validation</Link>
                      </li>
                      <li
                        className={`${
                          "/form-select2" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/form-select2">Form Select2</Link>
                      </li>
                      <li
                        className={`${
                          "/File-upload" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/File-upload">File Upload</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${
                    "/basic-table" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "basic-table" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "basic-table" ? "" : "basic-table"
                      )
                    }
                  >
                    <FeatherIcon icon="layout" /> <span>Tables</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "basic-table" ? (
                    <ul
                      style={{
                        display: isSideMenu == "basic-table" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`${
                          "/basic-table" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/basic-table">Basic Tables</Link>
                      </li>
                      <li
                        className={`${
                          "/data-table" === pathName ? "active" : ""
                        }`}
                      >
                        <Link to="/data-table">Data Table</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                
            </ul>
            :"" 
        }
            </li>
        </ul>
        </div>
        </div>
        {/* /Header Menu List */}	

        </>
            
       
        );
    
}
export default withRouter(Sidebarmenu);