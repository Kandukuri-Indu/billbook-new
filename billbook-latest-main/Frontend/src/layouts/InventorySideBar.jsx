// import React, { useEffect, useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import FeatherIcon from "feather-icons-react";
// import { Scrollbars } from "react-custom-scrollbars";
// import { LogoImg, LogoSmallImg } from "../_components/imagepath";

// const InventorySideBar = (props) => {
//   const [isSideMenu, setSideMenu] = useState("");

//   const toggleSidebar = (value) => {
//     console.log(value);
//     setSideMenu(value);
//   };

//   useEffect(() => {
//     function handleMouseOver(e) {
//       e.stopPropagation();
//       if (
//         document.body.classList.contains("mini-sidebar") &&
//         document.querySelector("#toggle_btn").offsetParent !== null
//       ) {
//         var targ = e.target.closest(".sidebar");
//         if (targ) {
//           document.body.classList.add("expand-menu");
//           document
//             .querySelectorAll(".subdrop + ul")
//             .forEach((ul) => (ul.style.display = "block"));
//         } else {
//           document.body.classList.remove("expand-menu");
//           document
//             .querySelectorAll(".subdrop + ul")
//             .forEach((ul) => (ul.style.display = "none"));
//         }
//         return false;
//       }
//     }

//     document.addEventListener("mouseover", handleMouseOver);

//     return () => {
//       document.removeEventListener("mouseover", handleMouseOver);
//     };
//   }, []);

//   useEffect(() => {
//     $(document).on("change", ".sidebar-type-four input", function () { 
//       if ($(this).is(":checked")) {
//         $(".sidebar").addClass("sidebar-eight");
//         $(".sidebar-menu").addClass("sidebar-menu-eight");
//         $(".menu-title").addClass("menu-title-eight");
//         $(".header").addClass("header-eight");
//         $(".header-left-two").addClass("header-left-eight");
//         $(".user-menu").addClass("user-menu-eight");
//         $(".dropdown-toggle").addClass("dropdown-toggle-eight");
//         $(".white-logo").addClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).addClass("hide-logo");
//         $(".header-two .header-left-two .logo:not(.logo-small)").removeClass(
//           "hide-logo"
//         );
//         $(".header-two .header-left-two .dark-logo").removeClass("show-logo");
//       } else {
//         $(".sidebar").removeClass("sidebar-eight");
//         $(".sidebar-menu").removeClass("sidebar-menu-eight");
//         $(".menu-title").removeClass("menu-title-eight");
//         $(".header").removeClass("header-eight");
//         $(".header-left-two").removeClass("header-left-eight");
//         $(".user-menu").removeClass("user-menu-eight");
//         $(".dropdown-toggle").removeClass("dropdown-toggle-eight");
//         $(".white-logo").removeClass("show-logo");
//         $(
//           ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
//         ).removeClass("hide-logo");
//       }
//     });
//   }, []);

//   let pathName = props.location.pathname;

//   console.log("Working", pathName);

//   return (
//     <>
//       <div className="sidebar" id="sidebar">
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <Link to="/index">
//               <img src={LogoImg} className="img-fluid logo" alt="" />
//             </Link>
//             <Link to="index.html">
//               <img src={LogoSmallImg} className="img-fluid logo-small" alt="" />
//             </Link>
//           </div>
//         </div>
//         <Scrollbars
//           autoHide
//           autoHideTimeout={1000}
//           autoHideDuration={200}
//           autoHeight
//           autoHeightMin={0}
//           autoHeightMax="95vh"
//           thumbMinSize={30}
//           universal={false}
//           hideTracksWhenNotNeeded={true}
//         >
//           <div className="sidebar-inner slimscroll">
//             <div id="sidebar-menu" className="sidebar-menu">
//               {/* Main */}
//               <ul>
//                 <li className="menu-title">
//                   <span>Main</span>
//                 </li>
//                 <li
//                   className={`${
//                     "/index" === pathName ? "active submenu" : "submenu"
//                   }`}
//                 >
//                   <Link
//                     to="#"
//                     className={isSideMenu == "index" ? "subdrop" : ""}
//                     onClick={() =>
//                       toggleSidebar(isSideMenu == "index" ? "" : "index")
//                     }
//                   >
//                     <FeatherIcon icon="home" /> <span>Dashboard</span>{" "}
//                     <span className="menu-arrow"></span>
//                   </Link>
//                   {isSideMenu == "index" ? (
//                     <ul
//                       style={{
//                         display: isSideMenu == "index" ? "block" : "none",
//                       }}
//                     >
//                       <li>
//                         <Link
//                           to="/index"
//                           className={`${"/index" === pathName ? "active" : ""}`}
//                         >
//                           Admin Dashboard
//                         </Link>
//                       </li>
//                     </ul>
//                   ) : (
//                     ""
//                   )}
//                 </li>
               
//               </ul>
//               {/* /Main */}
//               {/* Customers */}
             
//               {/* /Customers */}
//               {/* Inventory */}
//               <ul>
//                 <li className="menu-title">
//                   <span>Inventory</span>
//                 </li>
//                 <li
//                   className={`${
//                     "/inventory" === pathName || "/inventory" === pathName
//                       ? "active"
//                       : ""
//                   }`}
//                 >
//                   <Link to="/inventory">
//                     <FeatherIcon icon="user" /> <span>Inventory</span>
//                   </Link>
//                 </li>
//                 <li
//                   className={`${ 
//                     "/stock-list" === pathName ||
//                     "/available-stock" === pathName ||
//                     "/out-of-stock" === pathName
//                       ? "active submenu"
//                       : "submenu"
//                   }`}
//                 >
//                   <Link
//                     to="#"
//                     className={isSideMenu == "stocks" ? "subdrop" : ""}
//                     onClick={() =>
//                       toggleSidebar(
//                         isSideMenu == "stocks" ? "" : "stocks"
//                       )
//                     }
//                   >
//                     <FeatherIcon icon="package" />{" "}
//                     <span> Stocks </span>{" "}
//                     <span className="menu-arrow"></span>
//                   </Link>
//                   {isSideMenu == "stocks" ? (
//                     <ul
//                       style={{
//                         display:
//                           isSideMenu == "stocks" ? "block" : "none",
//                       }}
//                     >
//                       <li>
//                         <Link
//                           to="/stock-list"
//                           className={`${
//                             "/stock-list" === pathName ? "active" : ""
//                           }`}
//                         >
//                           Stock List
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/available-stock"
//                           className={`${
//                             "/available-stock" === pathName ? "active" : ""
//                           }`}
//                         >
//                           Available Stocks
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/out-of-stock"
//                           className={`${"/out-of-stock" === pathName ? "active" : ""}`}
//                         >
//                           Out of stocks
//                         </Link>
//                       </li>
//                     </ul>
//                   ) : (
//                     ""
//                   )}
//                 </li>

//                 <li
//                   className={`${
//                     "/godown-list" === pathName ||
//                     "/create-godown" === pathName ||
//                     "/edit-godown" === pathName
//                       ? "active submenu"
//                       : "submenu" 
//                   }`}
//                 >
//                   <Link
//                     to="#"
//                     className={isSideMenu == "godown" ? "subdrop" : ""}
//                     onClick={() =>
//                       toggleSidebar(
//                         isSideMenu == "godown" ? "" : "godown"
//                       )
//                     }
//                   >
//                     <FeatherIcon icon="package" />{" "}
//                     <span> Godown</span>{" "}
//                     <span className="menu-arrow"></span>
//                   </Link>
//                   {isSideMenu == "godown" ? (
//                     <ul
//                       style={{
//                         display:
//                           isSideMenu == "godown" ? "block" : "none",
//                       }}
//                     >
//                       <li>
//                         <Link
//                           to="/godown-list"
//                           className={`${
//                             "/godown-list" === pathName ? "active" : ""
//                           }`}
//                         >
//                           Godown List
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/create-godown"
//                           className={`${
//                             "/create-godown" === pathName ? "active" : ""
//                           }`}
//                         >
//                           Create Godown
//                         </Link>
//                       </li>
//                       <li>
//                         <Link
//                           to="/edit-godown"
//                           className={`${"/edit-godown" === pathName ? "active" : ""}`}
//                         >
//                           Edit Godown
//                         </Link>
//                       </li>
//                     </ul>
//                   ) : (
//                     ""
//                   )}
//                 </li>
//               </ul>
//               {/* /Inventory */}
              
//               {/* /Purchases */}
//               {/* Finance & Accounts */}
             
//               {/* /Finance & Accounts */}
//               {/* Quotations */}
              
//               {/* /Quotations */}
//               {/* Reports */}
              
//               {/* /Reports */}
//               {/* User Management */}
              
//               {/* /User Management */}
//               {/* Membership) */}
              
//               {/* /Membership) */}
//               {/* Content (CMS) */}
              
//               {/* /Content (CMS) */}
//               {/* Support */}
              
//               {/* /Support */}
//               {/* Authentication */}
              
//               {/* /Authentication */}
//               {/* Pages */}
              
//               {/* /Pages */}
//               {/* UI Interface */}
              
//               {/* /UI Interface */}
//               {/* Settings */}
//               <ul>
//                 <li className="menu-title">
//                   <span>Settings</span>
//                 </li>
//                 <li className={`${"/settings" === pathName ? "active" : ""}`}>
//                   <Link to="/settings">
//                     <FeatherIcon icon="settings" /> <span>Settings</span>
//                   </Link>
//                 </li>
//                 <li className={`${"/login" === pathName ? "active" : ""}`}>
//                   <Link to="/login">
//                     <FeatherIcon icon="power" /> <span>Logout</span>
//                   </Link>
//                 </li>
//               </ul>
//               {/* /Settings */}
//             </div>
//           </div>
//         </Scrollbars>
//       </div>
//     </>
//   );
// };
// export default withRouter(InventorySideBar);
