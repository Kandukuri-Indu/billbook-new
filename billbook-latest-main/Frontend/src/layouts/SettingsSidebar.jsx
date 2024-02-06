import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
import { LogoImg, LogoSmallImg } from "../_components/imagepath";

const SettingsSideBar = (props) => {
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
              <img src={LogoImg} className="img-fluid logo" alt="" />
            </Link>
            <Link to="index.html">
              <img src={LogoSmallImg} className="img-fluid logo-small" alt="" />
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
              {/* Back to dashboard */}
              <ul>
               <li
                 className={`${
                   "/index" === pathName || "/index" === pathName
                     ? "active"
                     : ""
                 }backtodashboard`}
               >
                 <Link to="/index">
                   <FeatherIcon icon="arrow-left" /> <span>Back to Dashboard</span>
                 </Link>
               </li>
             </ul>
              {/* /Back to dashboard */}
              {/* Customers */}
              <ul>
                <li
                  className={`${
                    "/profile-settings-account" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/profile-settings-account">
                    <FeatherIcon icon="users" />
                    <span>Account</span>
                  </Link>
                </li>
              </ul>

              <ul>
                <li
                  className={`${
                    "/profile-settings-manage-business" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/profile-settings-manage-business">
                    <FeatherIcon icon="file" /> <span>Manage Business</span>
                  </Link>
                </li>
              </ul>

              <ul>
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
                      <li>
                        <Link
                          to="/add-user"
                          className={`${
                            "/add-user" === pathName ? "active" : ""
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
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
 
              <ul>
               <li
                 className={`${
                   "/profile-settings-reminders" === pathName || "/profile-settings-reminders" === pathName
                     ? "active"
                     : ""
                 }`}
               >
                 <Link to="/profile-settings-reminders">
                   <FeatherIcon icon="user" /> <span>Reminders</span>
                 </Link>
               </li>
             </ul>


             
              
              {/* User Management */}
              
              {/* /User Management */}
              {/* /Customers */}
              {/* Inventory */}
             
              {/* /Inventory */}
              
              {/* /Purchases */}
              {/* Finance & Accounts */}
             
              {/* /Finance & Accounts */}
              {/* Quotations */}
              
              {/* /Quotations */}
              {/* Reports */}
             
              {/* /Reports */}
              {/* User Management */}
              
              {/* /User Management */}
              {/* Membership) */}
              
              {/* /Membership) */}
              {/* Content (CMS) */}
             
              {/* /Content (CMS) */}
              {/* Support */}
              
              {/* /Support */}
              {/* Authentication */}
              
              {/* /Authentication */}
              {/* Pages */}
              <ul>
                <li className="menu-title">
                  <span>Settings</span>
                </li>
                <li className={`${"/settings" === pathName ? "active" : ""}`}>
                  <Link to="/settings">
                    <FeatherIcon icon="settings" /> <span>Settings</span>
                  </Link>
                </li>
                <li className={`${"/login" === pathName ? "active" : ""}`}>
                  <Link to="/login">
                    <FeatherIcon icon="power" /> <span>Logout</span>
                  </Link>
                </li>
              </ul>
              {/* /Pages */}
              {/* UI Interface */}
              
              {/* /UI Interface */}
              {/* Settings */}
             
              {/* /Settings */}
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default withRouter(SettingsSideBar);
