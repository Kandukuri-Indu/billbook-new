import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import MaterialIcon from '@material/react-material-icon';

const Pe7 = () => {
    
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Pe7 Icon</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Chart */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Pe7 Icon</div>
          </div>
          <div className="card-body">
            <div className="icons-items">
            <ul className="icons-list">
                <li><MaterialIcon icon="dashboard" /></li>
                <li><MaterialIcon icon="data_usage" /></li>
                <li><MaterialIcon icon="date_range" /></li>
                <li><MaterialIcon icon="dehaze" /></li>
                <li><MaterialIcon icon="delete" /></li>
                <li><MaterialIcon icon="delete_forever" /></li>
                <li><MaterialIcon icon="delete_sweep" /></li>
                <li><MaterialIcon icon="description" /></li>
                <li><MaterialIcon icon="desktop_mac" /></li>
                <li><MaterialIcon icon="desktop_windows" /></li>
                <li><MaterialIcon icon="details" /></li>
                <li><MaterialIcon icon="developer_board" /></li>
                <li><MaterialIcon icon="developer_mode" /></li>
                <li><MaterialIcon icon="device_hub" /></li>
                <li><MaterialIcon icon="devices" /></li>
                <li><MaterialIcon icon="devices_other" /></li>
                <li><MaterialIcon icon="dialer_sip" /></li>
                <li><MaterialIcon icon="dialpad" /></li>
                <li><MaterialIcon icon="directions" /></li>
                <li><MaterialIcon icon="directions_bike" /></li>
                <li><MaterialIcon icon="directions_boat" /></li>
                <li><MaterialIcon icon="directions_bus" /></li>
                <li><MaterialIcon icon="directions_car" /></li>
                <li><MaterialIcon icon="directions_railway" /></li>
                <li><MaterialIcon icon="directions_run" /></li>
                <li><MaterialIcon icon="directions_subway" /></li>
                <li><MaterialIcon icon="directions_transit" /></li>
                <li><MaterialIcon icon="directions_walk" /></li>
                <li><MaterialIcon icon="disc_full" /></li>
                <li><MaterialIcon icon="dns" /></li>
                <li><MaterialIcon icon="do_not_disturb" /></li>
                <li><MaterialIcon icon="do_not_disturb_alt" /></li>
                <li><MaterialIcon icon="do_not_disturb_off" /></li>
                <li><MaterialIcon icon="do_not_disturb_on" /></li>
                <li><MaterialIcon icon="dock" /></li>
                <li><MaterialIcon icon="domain" /></li>
                <li><MaterialIcon icon="done" /></li>
                <li><MaterialIcon icon="done_all" /></li>
                <li><MaterialIcon icon="donut_large" /></li>
                <li><MaterialIcon icon="donut_small" /></li>
                <li><MaterialIcon icon="drafts" /></li>
                <li><MaterialIcon icon="drag_handle" /></li>
                <li><MaterialIcon icon="drive_eta" /></li>
                <li><MaterialIcon icon="dvr" /></li>
                <li><MaterialIcon icon="edit" /></li>
                <li><MaterialIcon icon="edit_location" /></li>
                <li><MaterialIcon icon="eject" /></li>
                <li><MaterialIcon icon="email" /></li>
                <li><MaterialIcon icon="enhanced_encryption" /></li>
                <li><MaterialIcon icon="equalizer" /></li>
                <li><MaterialIcon icon="error_outline" /></li>
                <li><MaterialIcon icon="euro_symbol" /></li>
                <li><MaterialIcon icon="ev_station" /></li>
                <li><MaterialIcon icon="event" /></li>
                <li><MaterialIcon icon="event_available" /></li>
                <li><MaterialIcon icon="event_busy" /></li>
                <li><MaterialIcon icon="event_note" /></li>
                <li><MaterialIcon icon="event_seat" /></li>
                <li><MaterialIcon icon="exit_to_app" /></li>
                <li><MaterialIcon icon="expand_less" /></li>
                <li><MaterialIcon icon="expand_more" /></li>
                <li><MaterialIcon icon="explicit" /></li>
                <li><MaterialIcon icon="explore" /></li>
                <li><MaterialIcon icon="exposure" /></li>
                <li><MaterialIcon icon="exposure_neg_1" /></li>
                <li><MaterialIcon icon="exposure_neg_2" /></li>
                <li><MaterialIcon icon="exposure_plus_1" /></li>
                <li><MaterialIcon icon="exposure_plus_2" /></li>
                <li><MaterialIcon icon="exposure_zero" /></li>
                <li><MaterialIcon icon="extension" /></li>
                <li><MaterialIcon icon="face" /></li>
                <li><MaterialIcon icon="fast_forward" /></li>
                <li><MaterialIcon icon="fast_rewind" /></li>
                <li><MaterialIcon icon="favorite" /></li>
                <li><MaterialIcon icon="favorite_border" /></li>
                <li><MaterialIcon icon="featured_play_list" /></li>
                <li><MaterialIcon icon="featured_video" /></li>
                <li><MaterialIcon icon="feedback" /></li>
                <li><MaterialIcon icon="fiber_dvr" /></li>
                <li><MaterialIcon icon="fiber_manual_record" /></li>
                <li><MaterialIcon icon="fiber_new" /></li>
                <li><MaterialIcon icon="fiber_pin" /></li>
                <li><MaterialIcon icon="fiber_smart_record" /></li>
                <li><MaterialIcon icon="file_download" /></li>
                <li><MaterialIcon icon="file_upload" /></li>
                <li><MaterialIcon icon="filter" /></li>
                <li><MaterialIcon icon="filter_1" /></li>
                <li><MaterialIcon icon="filter_2" /></li>
                <li><MaterialIcon icon="filter_3" /></li>
                <li><MaterialIcon icon="filter_4" /></li>
                <li><MaterialIcon icon="filter_5" /></li>
                <li><MaterialIcon icon="filter_6" /></li>
                <li><MaterialIcon icon="filter_7" /></li>
                <li><MaterialIcon icon="filter_8" /></li>
                <li><MaterialIcon icon="filter_9" /></li>
                <li><MaterialIcon icon="filter_9_plus" /></li>
                <li><MaterialIcon icon="filter_b_and_w" /></li>
                <li><MaterialIcon icon="filter_center_focus" /></li>
                <li><MaterialIcon icon="filter_drama" /></li>
                <li><MaterialIcon icon="filter_frames" /></li>
                <li><MaterialIcon icon="filter_hdr" /></li>
                <li><MaterialIcon icon="filter_list" /></li>
                <li><MaterialIcon icon="filter_none" /></li>
                <li><MaterialIcon icon="filter_tilt_shift" /></li>
                <li><MaterialIcon icon="filter_vintage" /></li>
                <li><MaterialIcon icon="find_in_page" /></li>
                <li><MaterialIcon icon="find_replace" /></li>
                <li><MaterialIcon icon="fingerprint" /></li>
                <li><MaterialIcon icon="first_page" /></li>
                <li><MaterialIcon icon="fitness_center" /></li>
                <li><MaterialIcon icon="flag" /></li>
                <li><MaterialIcon icon="flare" /></li>
                <li><MaterialIcon icon="flash_auto" /></li>
                <li><MaterialIcon icon="flash_off" /></li>
                <li><MaterialIcon icon="flash_on" /></li>
                <li><MaterialIcon icon="flight" /></li>
                <li><MaterialIcon icon="flight_land" /></li>
                <li><MaterialIcon icon="flight_takeoff" /></li>
                <li><MaterialIcon icon="flip" /></li>
                <li><MaterialIcon icon="flip_to_back" /></li>
                <li><MaterialIcon icon="flip_to_front" /></li>
                <li><MaterialIcon icon="folder" /></li>
                <li><MaterialIcon icon="folder_open" /></li>
                <li><MaterialIcon icon="folder_shared" /></li>
                <li><MaterialIcon icon="font_download" /></li>
                <li><MaterialIcon icon="format_align_center" /></li>
                <li><MaterialIcon icon="format_align_justify" /></li>
                <li><MaterialIcon icon="format_align_left" /></li>
                <li><MaterialIcon icon="format_align_right" /></li>
                <li><MaterialIcon icon="format_bold" /></li>
                <li><MaterialIcon icon="format_clear" /></li>
                <li><MaterialIcon icon="format_color_fill" /></li>
                <li><MaterialIcon icon="format_color_reset" /></li>
                <li><MaterialIcon icon="format_color_text" /></li>
                <li><MaterialIcon icon="format_indent_decrease" /></li>
                <li><MaterialIcon icon="format_indent_increase" /></li>
                <li><MaterialIcon icon="format_italic" /></li>
                <li><MaterialIcon icon="format_line_spacing" /></li>
                <li><MaterialIcon icon="format_list_bulleted" /></li>
                <li><MaterialIcon icon="format_list_numbered" /></li>
                <li><MaterialIcon icon="format_paint" /></li>
                <li><MaterialIcon icon="format_quote" /></li>
                <li><MaterialIcon icon="format_shapes" /></li>
                <li><MaterialIcon icon="format_size" /></li>
                <li><MaterialIcon icon="format_strikethrough" /></li>
                <li><MaterialIcon icon="format_textdirection_l_to_r" /></li>
                <li><MaterialIcon icon="format_textdirection_r_to_l" /></li>
                <li><MaterialIcon icon="format_underlined" /></li>
                <li><MaterialIcon icon="forum" /></li>
                <li><MaterialIcon icon="forward" /></li>
                <li><MaterialIcon icon="forward_10" /></li>
                <li><MaterialIcon icon="forward_30" /></li>
                <li><MaterialIcon icon="forward_5" /></li>
                <li><MaterialIcon icon="free_breakfast" /></li>
                <li><MaterialIcon icon="fullscreen" /></li>
                <li><MaterialIcon icon="fullscreen_exit" /></li>
                <li><MaterialIcon icon="functions" /></li>
                <li><MaterialIcon icon="g_translate" /></li>
                <li><MaterialIcon icon="gamepad" /></li>
                <li><MaterialIcon icon="games" /></li>
                <li><MaterialIcon icon="gavel" /></li>
                <li><MaterialIcon icon="gesture" /></li>
                <li><MaterialIcon icon="get_app" /></li>
                <li><MaterialIcon icon="gif" /></li>
                <li><MaterialIcon icon="golf_course" /></li>
                <li><MaterialIcon icon="gps_fixed" /></li>
                <li><MaterialIcon icon="gps_not_fixed" /></li>
                <li><MaterialIcon icon="gps_off" /></li>
                <li><MaterialIcon icon="grade" /></li>
                <li><MaterialIcon icon="gradient" /></li>
                <li><MaterialIcon icon="grain" /></li>
                <li><MaterialIcon icon="graphic_eq" /></li>
                <li><MaterialIcon icon="grid_off" /></li>
                <li><MaterialIcon icon="grid_on" /></li>
                <li><MaterialIcon icon="group" /></li>
                <li><MaterialIcon icon="group_add" /></li>
                <li><MaterialIcon icon="group_work" /></li>
                <li><MaterialIcon icon="hd" /></li>
                <li><MaterialIcon icon="hdr_off" /></li>
                <li><MaterialIcon icon="hdr_on" /></li>
                <li><MaterialIcon icon="hdr_strong" /></li>
                <li><MaterialIcon icon="hdr_weak" /></li>
                <li><MaterialIcon icon="headset" /></li>
                <li><MaterialIcon icon="headset_mic" /></li>
                <li><MaterialIcon icon="healing" /></li>
                <li><MaterialIcon icon="hearing" /></li>
                <li><MaterialIcon icon="help" /></li>
                <li><MaterialIcon icon="help_outline" /></li>
                <li><MaterialIcon icon="high_quality" /></li>
                <li><MaterialIcon icon="highlight" /></li>
                <li><MaterialIcon icon="highlight_off" /></li>
                <li><MaterialIcon icon="history" /></li>
                <li><MaterialIcon icon="home" /></li>
                <li><MaterialIcon icon="hot_tub" /></li>
                <li><MaterialIcon icon="hotel" /></li>
                <li><MaterialIcon icon="hourglass_empty" /></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Chart */}
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Pe7;
