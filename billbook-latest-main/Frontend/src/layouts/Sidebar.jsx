import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
import { LogoImg, LogoSmallImg, logo, logo1, logoblack } from "../_components/imagepath";

const Sidebar = (props) => {
  const [isSideMenu, setSideMenu] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };

  useEffect(() => {
    function handleMouseOver(e) {
      e.stopPropagation();
      if (
        document.body.classList.contains("mini-sidebar") &&
        document.querySelector("#toggle_btn").offsetParent !== null
      ) {
        var targ = e.target.closest(".sidebar");
        if (targ) {
          document.body.classList.add("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "block"));
        } else {
          document.body.classList.remove("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "none"));
        }
        return false;
      }
    }

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    $(document).on("change", ".sidebar-type-four input", function () {
      if ($(this).is(":checked")) {
        $(".sidebar").addClass("sidebar-eight");
        $(".sidebar-menu").addClass("sidebar-menu-eight");
        $(".menu-title").addClass("menu-title-eight");
        $(".header").addClass("header-eight");
        $(".header-left-two").addClass("header-left-eight");
        $(".user-menu").addClass("user-menu-eight");
        $(".dropdown-toggle").addClass("dropdown-toggle-eight");
        $(".white-logo").addClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).addClass("hide-logo");
        $(".header-two .header-left-two .logo:not(.logo-small)").removeClass(
          "hide-logo"
        );
        $(".header-two .header-left-two .dark-logo").removeClass("show-logo");
      } else {
        $(".sidebar").removeClass("sidebar-eight");
        $(".sidebar-menu").removeClass("sidebar-menu-eight");
        $(".menu-title").removeClass("menu-title-eight");
        $(".header").removeClass("header-eight");
        $(".header-left-two").removeClass("header-left-eight");
        $(".user-menu").removeClass("user-menu-eight");
        $(".dropdown-toggle").removeClass("dropdown-toggle-eight");
        $(".white-logo").removeClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).removeClass("hide-logo");
      }
    });
  }, []);

  let pathName = props.location.pathname;

  console.log("Working", pathName);

  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Link to="/index">
              <img src={logoblack} className="img-fluid logo" alt="" />
            </Link>
            <Link to="index.html">
              <img src={logo} className="img-fluid logo-small" alt="" />
            </Link>
          </div>
        </div>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              {/* Main */}
              <ul>
                <li className="menu-title">
                  <span>General</span>
                </li>
                <li
                  className={`${"/index" === pathName ? "active submenu" : "submenu"
                    }`}
                >
                  <Link
                    to="/index"
                    className={isSideMenu == "index" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "index" ? "" : "index")
                    }
                  >
                    <FeatherIcon icon="home" /> <span>Dashboard</span>{" "}

                  </Link>

                </li>

              </ul>
              {/* /Main */}
              {/* Customers */}
              <ul>
                {/* <li className="menu-title">
                  <span>Customers</span>
                </li> */}
                <li
                  className={`${"/customers" === pathName ||
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
                  className={`${"/vendors" === pathName || "/add-ledger" === pathName
                      ? "active"
                      : ""
                    }`}
                >
                  <Link to="/vendors">
                    <FeatherIcon icon="user" /> <span>Vendors</span>
                  </Link>
                </li>
              </ul>
              {/* /Customers */}
              {/* Inventory */}
              <ul>
                {/* <li className="menu-title">
                  <span>Products</span>
                </li> */}
                <li
                  className={`${"/product-list" === pathName ||
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
                      <li>
                        <Link
                          to="/product-list"
                          className={`${"/product-list" === pathName ? "active" : ""
                            }`}
                        >
                          Product List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/category"
                          className={`${"/category" === pathName ? "active" : ""
                            }`}
                        >
                          Category
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/units"
                          className={`${"/units" === pathName ? "active" : ""}`}
                        >
                          Units
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                {/* <li
                  className={`${
                    "/inventory" === pathName || "/inventory" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/inventory">
                    <FeatherIcon icon="user" /> <span>Inventory</span>
                  </Link>
                </li> */}
              </ul>

              {/* sales  */}
              <ul>
                {/* <li className="menu-title">
                  <span>Sales</span>
                </li> */}
                <li
                  className={`${("/invoice-list" === pathName ||
                      "/invoice-details" === pathName ||
                      "/invoice-paid" === pathName ||
                      "/invoice-overdue" === pathName ||
                      "/invoice-template" === pathName ||
                      "/invoice-draft" === pathName ||
                      "/invoice-recurring" === pathName ||
                      "/invoice-cancelled" === pathName ||
                      "/invoice-grid" === pathName ||
                      "/add-invoice" === pathName ||
                      "/edit-invoice" === pathName) &&
                      isSideMenu !== "payment" // Ensure "Payment" is not active
                      ? "active submenu"
                      : "submenu"
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "sales" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu === "sales" ? "" : "sales"
                      )
                    }
                  >
                    <FeatherIcon icon="file" /> <span> Sales</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu === "sales" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu === "sales" ? "block" : "none",
                      }}
                    >
                      {/* <li>
                        <Link
                          to="/invoice-list"
                          className={`${
                            "/invoice-list" === pathName ? "active" : ""
                          }`}
                        >
                          Sales
                        </Link>
                      </li> */}
                       <li>
                        <Link
                          to="/invoices"
                          className={`${"/invoices" === pathName ? "active" : ""
                            }`}
                        >
                          Invoices
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/invoice-template"
                          className={`${"/invoice-template" === pathName ? "active" : ""
                            }`}
                        >
                          Invoices Template
                        </Link>
                      </li>
                      <li>
                      <Link to="/recurring-invoices">
                    {/* <FeatherIcon icon="clipboard" />{" "} */}
                    Recurring Invoice
                  </Link>
                      </li>
                      <li>
                        <Link to="/credit-notes">
                          {/* <FeatherIcon icon="edit" /> */}
                          Credit Notes
                        </Link>
                      </li>

                      {/* Add Payment Component Link */}
                      <li>
                        <Link
                          to="/Payment" // Path for your Payment component
                          className={`${"/Payment" === pathName ? "active" : ""
                            }`}
                        >
                          Payment In
                        </Link>
                      </li>
                      {/* End of Payment Component Link */}
                      <li
                        className={`${"/quotations" === pathName ||
                            "/add-quotations" === pathName ||
                            "/edit-quotations" === pathName
                            ? "active"
                            : ""
                          }`}
                      >
                        <Link to="/quotations">
                          {/* <FeatherIcon icon="clipboard" />  */}
                          Quotations
                        </Link>
                      </li>
                      <li
                        className={`${"/delivery-challans" === pathName ||
                            "/add-delivery-challans" === pathName ||
                            "/edit-delivery-challans" === pathName
                            ? "active"
                            : ""
                          }`}
                      >
                        <Link to="/delivery-challans">
                          {/* <FeatherIcon icon="file-text" />{" "} */}
                          Delivery Challans
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${"/vendors" === pathName || "/add-ledger" === pathName
                      ? "active"
                      : ""
                    }`}
                >
                  <Link to="/purchases">
                    <FeatherIcon icon="user" /> <span>Purchases</span>
                  </Link>
                </li>
                {/* <li className="menu-title">
                  <span>Inventory</span>
                </li> */}
                 <li
                  className={`${"/inventory" === pathName
                      // "/create-godown" === pathName ||
                      // "/edit-godown" === pathName
                      ? "active submenu"
                      : "submenu"
                    }`}
                >
                  <Link
                    to="/inventory"
                    className={isSideMenu == "inventory" ? "inventory" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "inventory" ? "" : "inventory"
                      )
                    }
                  >
                    <FeatherIcon icon="package" />{" "}
                    <span> Inventory</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "inventory" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "inventory" ? "block" : "none",
                      }}
                    >
                       <li>
                        <Link
                          to="/godown"
                          className={`${"/godown" === pathName ? "active" : ""
                            }`}
                        >
                          Godown
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/godown-list"
                          className={`${"/godown-list" === pathName ? "active" : ""
                            }`}
                        >
                          Godown List
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/create-godown"
                          className={`${
                            "/create-godown" === pathName ? "active" : ""
                          }`}
                        >
                          Create Godown
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          to="/edit-godown"
                          className={`${"/edit-godown" === pathName ? "active" : ""}`}
                        >
                          Edit Godown
                        </Link>
                      </li> */}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                {/* <li
                  className={`${"/inventory" === pathName || "/inventory" === pathName
                      ? "active"
                      : ""
                    }`}
                >
                  <Link to="/inventory">
                    <FeatherIcon icon="user" /> <span>Inventory</span>
                  </Link>
                </li> */}
                <li
                  className={`${"/reports" === pathName
                      // "/create-godown" === pathName ||
                      // "/edit-godown" === pathName
                      ? "active submenu"
                      : "submenu"
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "reports" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "reports" ? "" : "reports"
                      )
                    }
                    
                  >
                    <FeatherIcon icon="package" />{" "}
                    <span> Reports</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "reports" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "reports" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/sales-report"
                          className={`${"/sales-report" === pathName ? "active" : ""
                            }`}
                        >
                          Sales Reports
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/purchase-orders"
                          className={`${"/purchase-orders" === pathName ? "active" : ""
                            }`}
                        >
                          Purchase Reports
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/create-godown"
                          className={`${
                            "/create-godown" === pathName ? "active" : ""
                          }`}
                        >
                          Create Godown
                        </Link>
                      </li> */}
                      {/* <li>
                        <Link
                          to="/edit-godown"
                          className={`${"/edit-godown" === pathName ? "active" : ""}`}
                        >
                          Edit Godown
                        </Link>
                      </li> */}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${"/recurring-invoices" === pathName ||
                      "/recurring-paid" === pathName ||
                      "/recurring-pending" === pathName ||
                      "/recurring-overdue" === pathName ||
                      "/recurring-draft" === pathName ||
                      "/recurring" === pathName ||
                      "/recurring-cancelled" === pathName
                      ? "active submenu"
                      : "submenu"
                    }`}
                >
                </li>
                <li
                  className={`${"/credit-notes" === pathName ||
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
                  {/* <Link to="/credit-notes">
                    <FeatherIcon icon="edit" /> <span>Credit Notes</span>
                  </Link> */}
                </li>
              </ul>
              <ul>
                {/* <li
                  className={`${ 
                    "/stock-list" === pathName ||
                    "/available-stock" === pathName ||
                    "/out-of-stock" === pathName
                      ? "active submenu"
                      : "submenu"
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "stocks" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "stocks" ? "" : "stocks"
                      )
                    }
                  >
                    <FeatherIcon icon="package" />{" "}
                    <span> Stocks </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "stocks" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "stocks" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/stock-list"
                          className={`${
                            "/stock-list" === pathName ? "active" : ""
                          }`}
                        >
                          Stock List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/available-stock"
                          className={`${
                            "/available-stock" === pathName ? "active" : ""
                          }`}
                        >
                          Available Stocks
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/out-of-stock"
                          className={`${"/out-of-stock" === pathName ? "active" : ""}`}
                        >
                          Out of stocks
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li> */}
              </ul>
              {/* Finance & Accounts */}
              <ul>
                <li className="menu-title">
                  <span>Finance &amp; Accounts</span>
                </li>
                <li
                  className={`${"/finance-accounts" === pathName
                      // "/create-godown" === pathName ||
                      // "/edit-godown" === pathName
                      ? "active submenu"
                      : "submenu"
                    }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu == "finance-accounts" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "finance-accounts" ? "" : "finance-accounts"
                      )
                    }
                  >
                    <FeatherIcon icon="package" />{" "}
                    <span>Finance &amp; Accounts</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "finance-accounts" ? (
                    <ul
                      style={{
                        display:
                          isSideMenu == "finance-accounts" ? "block" : "none",
                      }}
                    >
                      <li className={`${"/expenses" === pathName ? "active" : ""}`}>
                        <Link to="/expenses">
                          {/* <FeatherIcon icon="file-plus" /> */}
                          <span>Expenses</span>
                        </Link>
                      </li>
                      <li className={`${"/payments" === pathName ? "active" : ""}`}>
                        <Link to="/payments">
                          {/* <FeatherIcon icon="credit-card" /> */}
                          <span>Payment</span>
                        </Link>
                      </li>
                      <li className={`${"/gst-list" === pathName ? "active" : ""}`}>
                        <Link to="/gst-list">
                          {/* <FeatherIcon icon="credit-card" /> */}
                          <span>GST</span>
                        </Link>
                      </li>
                      <li className={`${"/currency-list" === pathName ? "active" : ""}`}>
                        <Link to="currency-list">
                          {/* <FeatherIcon icon="credit-card" />  */}
                          <span>Currency</span>
                        </Link>
                      </li>
                      <li className={`${"/cash-bank" === pathName ? "active" : ""}`}>
                        <Link to="cash-bank">
                          {/* <FeatherIcon icon="credit-card" /> */}
                          <span>Cash & Bank </span>
                        </Link>
                      </li>
                      <li
                  className={`${"/payment-summary" === pathName ? "active" : ""
                    }`}
                >
                  <Link to="/payment-summary">
                    {/* <FeatherIcon icon="credit-card" />{" "} */}
                    <span>Payment Summary</span>
                  </Link>
                </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
              {/* /Finance & Accounts */}
              {/* Quotations */}
              {/* <ul>
                <li className="menu-title">
                  <span>Quotations</span>
                </li>
                
              </ul> */}
              {/* /Quotations */}
              {/* Reports */}
              <ul>
                {/* <li className="menu-title">
                  <span>Reports</span>
                </li> */}
                {/* <li>
                  <Link to="/quotations">
                    <FeatherIcon icon="clipboard" /> <span>Quotations</span>
                  </Link>
                </li> */}
              </ul>
              {/* /Reports */}
              {/* User Management */}
              <ul>
                <li className="menu-title">
                  <span>User Management</span>
                </li>
                <li
                  className={`${"/manage-user" === pathName ||
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
                    <FeatherIcon icon="user" /> <span>Manage User</span>
                    <span className="menu-arrow"></span>
                  </Link>
                  
                  {isSideMenu == "manage-user" ? (
                    <ul
                      style={{
                        display: isSideMenu == "manage-user" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/add-user"
                          className={`${"/add-user" === pathName ? "active" : ""
                            }`}
                        >
                          Add User
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/users"
                          className={`${"/users" === pathName ? "active" : ""}`}
                        >
                          Users
                        </Link>
                      </li>
                      <li
                  className={`${"/roles-permission" === pathName ||
                      "/permission" === pathName
                      ? "active"
                      : ""
                    }`}
                >
                  <Link to="/roles-permission">
                    {/* <FeatherIcon icon="clipboard" />{" "} */}
                    <span>Roles &amp; Permission</span>
                  </Link>
                </li>
                <li
                  className={`${"/delete-account-request" === pathName ? "active" : ""
                    }`}
                >
                  <Link to="/delete-account-request">
                    {/* <FeatherIcon icon="trash-2" />{" "} */}
                    <span>Delete Account Request</span>
                  </Link>
                </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              
              </ul>
              {/* /User Management */}


              {/* Settings */}
              <ul>
                <li className="menu-title">
                  <span>Settings</span>
                </li>
                <li className={`${"/settings" === pathName ? "active" : ""}`}>
                  <Link to="/settings">
                    <FeatherIcon icon="settings" /> <span>Settings</span>
                  </Link>
                </li>

              </ul>
              {/* /Settings */}
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default withRouter(Sidebar);
