import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  sidebar_icon1,
  sidebar_icon2,
  sidebar_icon3,
  Logo,
  sidebar_deleteicon,
  demo_one,
  demo_three,
  demo_two,
  demo_four,
  demo_five,
  reset_icon,
  layout_one,
  layout_two,
  layout_three,
  layout_four,
  layout_five,
  Sidebar1,
  Sidebar2,
} from "../_components/imagepath";
import $ from "jquery";

const StickySidebar = (props) => {

  console.log("Harish");
  const [task, setTask] = useState(false);
  const [setting, setsetting] = useState(false);

  const ontaskClick = (type) => {
    if (type == "task") {
      setTask(true);
      setsetting(false);
    } else if (type == "settings") {
      setTask(false);
      setsetting(true);
    }
  };

  let pathName = props.location.pathname;


  return (
    <>
      <div className="right-side-views">
        <ul
          className={`sticky-sidebar siderbar-view  ${
            task || setting ? "show-sidebar" : ""
          }`}
        >
          <li className="sidebar-icons">
            <Link
              className="toggle tipinfo open-layout open-siderbar"
              to="#"
              data-toggle="tooltip"
              data-placement="left"
              data-bs-original-title="Tooltip on left"
            >
              <div className="tooltip-five" onClick={() => ontaskClick("task")}>
                <img
                  // src={layout_four}
                  src={Sidebar1}
                  className="feather-five"
                  alt=""
                />
                <span className="tooltiptext">Check Layout</span>
              </div>
            </Link>
          </li>

          <li className="sidebar-icons">
            <Link
              className="toggle tipinfo open-settings open-siderbar"
              to="#"
              data-toggle="tooltip"
              data-placement="left"
              data-bs-original-title="Tooltip on left"
            >
              <div
                className="tooltip-five  "
                onClick={() => ontaskClick("settings")}
              >
                <img src={Sidebar2} className="feather-five" alt="" />
                <span className="tooltiptext">Demo Settings</span>
              </div>
            </Link>
          </li>

          <li className="sidebar-icons">
            <Link
              className="toggle tipinfo"
              target="_blank"
              to="https://themeforest.net/item/kanakku-bootstrap-admin-html-template/29436291?s_rank=11"
              data-toggle="tooltip"
              data-placement="left"
              title="Tooltip on left"
            >
              <div className="tooltip-five">
                <img src={sidebar_icon3} className="feather-five" alt="" />
                <span className="tooltiptext">Buy Now</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className={`sidebar-layout show-layout offcanvas offcanvas-end ${ task ? "show" : ""}`} id="demo">
        <div className="sidebar-content">
          <div className="sidebar-top">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="sidebar-logo">
                    <Link to="/index" className="logo">
                      <img src={Logo} alt="Logo" className="img-flex" />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-6 col-sm-6 col-12">
                  <Link
                    className="btn-closed btn"
                    to="#"
                    type="button"
                    onClick={() => setTask(false)}
                  >
                    <img
                      className="img-fliud"
                      src={sidebar_deleteicon}
                      alt="demo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row align-items-center">
              <h5 className="sidebar-title">Choose layout</h5>
              <div className="col-xl-6 col-sm-6 col-12">
                <div className="sidebar-image align-center">
                  <img className="img-fliud" src={demo_one} alt="demo" />
                </div>

                <div className="row">
                  <div className="col-lg-6 layout">
                    <h5 className="layout-title">Demo 1</h5>
                  </div>
                  <div className="col-lg-6 layout">
                    <label className="switch">
                      <Link to="/index" className="layout-link" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-sm-6 col-12">
                <div className="sidebar-image align-center">
                  <img className="img-fliud" src={demo_two} alt="demo" />
                </div>

                <div className="row">
                  <div className="col-lg-6 layout">
                    <h5 className="layout-title">Demo 2</h5>
                  </div>

                  <div className="col-lg-6 layout">
                    <label className="switch">
                      <Link to="/Indextwo" className="layout-link" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <h5 className="sidebar-title">Choose layout</h5>
              <div className="col-xl-6 col-sm-6 col-12">
                <div className="sidebar-image align-center">
                  <img className="img-fliud" src={demo_three} alt="demo" />
                </div>

                <div className="row">
                  <div className="col-lg-6 layout">
                    <h5 className="layout-title">Demo 3</h5>
                  </div>

                  <div className="col-lg-6 layout">
                    <label className="switch">
                      <Link to="/Indexthree" className="layout-link" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-sm-6 col-12">
                <div className="sidebar-image align-center">
                  <img className="img-fliud" src={demo_four} alt="demo" />
                </div>

                <div className="row">
                  <div className="col-lg-6 layout">
                    <h5 className="layout-title">Demo 4</h5>
                  </div>

                  <div className="col-lg-6 layout">
                    <label className="switch">
                      <Link to="Indexfour" className="layout-link" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-xl-6 col-sm-6 col-12">
                <div className="sidebar-image align-center">
                  <img className="img-fliud" src={demo_five} alt="demo" />
                </div>

                <div className="row">
                  <div className="col-lg-6 layout">
                    <h5 className="layout-title">Demo 5</h5>
                  </div>

                  <div className="col-lg-6 layout">
                    <label className="switch">
                      <Link to="/Indexfive" className="layout-link" />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="reset-page text-center">
                <Link to="/index">
                  <button type="button" className="sidebar-but">
                    <img src={reset_icon} alt="reset" className="reset-icon" />
                    <span>Reset Settings</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sidebar-settings show-layout siderbar-view sidebar-layout offcanvas offcanvas-end ${
          setting ? "show" : ""
        }`}
        id="settings"
      >
        <div className="sidebar-content sticky-sidebar-one">
          <div className="sidebar-top">
            <div className="container-fluid">
              <div className="row align-items-center ">
                <div className="col-xl-6 col-sm-6 col-12">
                  <div className="sidebar-logo">
                    <Link to="/index" className="logo">
                      <img src={Logo} alt="Logo" className="img-flex" />
                    </Link>
                  </div>
                </div>

                <div className="col-xl-6 col-sm-6 col-12">
                  <Link
                    className="btn-closed btn"
                    to="#"
                    type="button"
                    onClick={() => setsetting(false)}
                  >
                    <img
                      className="img-fliud"
                      src={sidebar_deleteicon}
                      alt="demo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row align-items-center ">
              <h5 className="sidebar-title">Preview Setting</h5>
              <h5 className="sidebar-sub-title">Layout Type</h5>
              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-image-one align-center">
                  <img className="img-fliud" src={layout_one} alt="layout" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">LTR</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one">
                      <a
                        href="https://kanakku.dreamguystech.com/react/template/index"
                        className="layout-link"
                      />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-image-one align-center">
                  <img className="img-fliud" src={layout_two} alt="layout" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">RTL</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one">
                      <a
                        href="https://kanakku.dreamguystech.com/react/template-rtl/index"
                        className="layout-link"
                      />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-image-one align-center">
                  <img className="img-fliud" src={layout_three} alt="layout" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">BOX</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one">
                      <Link to="Indexthree" className="layout-link" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center ">
              <h5 className="sidebar-sub-title">Sidebar Type</h5>
              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-image-one align-center">
                  <img src={layout_four} alt="layout" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">Normal</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one">
                      <Link to="Indextwo" className="layout-link" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-image-one align-center">
                  <img src={layout_five} alt="layout" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">Compact</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one">
                      <Link to="Indexfive" className="layout-link" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <h5 className="sidebar-sub-title">Header &amp; Sidebar Style</h5>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-color align-center">
                  <span className="color-one" />
                </div>

                <div className="row">
                  <div className="col setting">
                    <h5 className="setting-title">White</h5>
                  </div>

                  <div className="col-auto setting">
                    <label className="switch switch-one sidebar-type-two">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-color align-center">
                  <span className="color-two" />
                </div>

                <div className="row">
                  <div className="col setting">
                    <h5 className="setting-title">Lite</h5>
                  </div>

                  <div className="col-auto setting">
                    <label className="switch switch-one sidebar-type-three">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-color align-center">
                  <span className="color-three" />
                </div>

                <div className="row">
                  <div className="col setting">
                    <h5 className="setting-title">Dark</h5>
                  </div>

                  <div className="col-auto setting">
                    <label className="switch switch-one sidebar-type-four">
                      <input type="checkbox"/>
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-sm-6">
                <div className="sidebar-color align-center">
                  <span className="color-eight" />
                </div>

                <div className="row">
                  <div className="col setting">
                    <h5 className="setting-title">Theme</h5>
                  </div>

                  <div className="col-auto setting">
                    <label className="switch switch-one sidebar-type-five">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <h5 className="sidebar-sub-title">Primary Skin</h5>
              <div className="col-xl-6 col-sm-6">
                <div className="sidebar-color-one align-center">
                  <span className="color-five" />
                  <span className="color-four" />
                  <span className="color-six" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">Theme</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one primary-skin-one">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-sm-6">
                <div className="sidebar-color-one align-center">
                  <span className="color-five" />
                  <span className="color-two" />
                  <span className="color-six" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">Lite</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one primary-skin-two">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-sm-6">
                <div className="sidebar-color-one align-center">
                  <span className="color-three" />
                  <span className="color-four" />
                  <span className="color-seven" />
                </div>

                <div className="row">
                  <div className="col-lg-6 setting">
                    <h5 className="setting-title">Dark</h5>
                  </div>

                  <div className="col-lg-6 setting">
                    <label className="switch switch-one primary-skin-three">
                      <input type="checkbox" />
                      <span className="slider slider-one round" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center ">
              <div className="col-xl-12 col-sm-12">
                <div className="reset-page text-center">
                  <Link to="/index">
                    <button type="button" className="sidebar-but">
                      <img
                        src={reset_icon}
                        alt="reset"
                        className="reset-icon"
                      />
                      <span>Reset Settings</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(StickySidebar);
