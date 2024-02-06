import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "@material/react-material-icon";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

const TypiconIcons = () => {
  
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Typicon Icon</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              {/* Chart */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Typicon Icon</div>
                  </div>
                  <div className="card-body">
                    <div className="icons-items">
                      <ul className="icons-list">
                        <li>
                          <MaterialIcon icon="assignment_late" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_return" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_returned" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_turned_in" />
                        </li>
                        <li>
                          <MaterialIcon icon="assistant" />
                        </li>
                        <li>
                          <MaterialIcon icon="assistant_photo" />
                        </li>
                        <li>
                          <MaterialIcon icon="attach_file" />
                        </li>
                        <li>
                          <MaterialIcon icon="attach_money" />
                        </li>
                        <li>
                          <MaterialIcon icon="attachment" />
                        </li>
                        <li>
                          <MaterialIcon icon="audiotrack" />
                        </li>
                        <li>
                          <MaterialIcon icon="autorenew" />
                        </li>
                        <li>
                          <MaterialIcon icon="av_timer" />
                        </li>
                        <li>
                          <MaterialIcon icon="backspace" />
                        </li>
                        <li>
                          <MaterialIcon icon="backup" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_alert" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_charging_full" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_full" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_std" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_unknown" />
                        </li>
                        <li>
                          <MaterialIcon icon="beach_access" />
                        </li>
                        <li>
                          <MaterialIcon icon="beenhere" />
                        </li>
                        <li>
                          <MaterialIcon icon="block" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_audio" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_connected" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_disabled" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_searching" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_circular" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_linear" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_off" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_on" />
                        </li>
                        <li>
                          <MaterialIcon icon="book" />
                        </li>
                        <li>
                          <MaterialIcon icon="bookmark" />
                        </li>
                        <li>
                          <MaterialIcon icon="bookmark_border" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_all" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_bottom" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_clear" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_color" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_horizontal" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_inner" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_left" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_outer" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_right" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_style" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_top" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_vertical" />
                        </li>
                        <li>
                          <MaterialIcon icon="branding_watermark" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_1" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_3" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_4" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_5" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_6" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_7" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_auto" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_high" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_low" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_medium" />
                        </li>
                        <li>
                          <MaterialIcon icon="broken_image" />
                        </li>
                        <li>
                          <MaterialIcon icon="brush" />
                        </li>
                        <li>
                          <MaterialIcon icon="bubble_chart" />
                        </li>
                        <li>
                          <MaterialIcon icon="bug_report" />
                        </li>
                        <li>
                          <MaterialIcon icon="build" />
                        </li>
                        <li>
                          <MaterialIcon icon="burst_mode" />
                        </li>
                        <li>
                          <MaterialIcon icon="business" />
                        </li>
                        <li>
                          <MaterialIcon icon="business_center" />
                        </li>
                        <li>
                          <MaterialIcon icon="cached" />
                        </li>
                        <li>
                          <MaterialIcon icon="cake" />
                        </li>
                        <li>
                          <MaterialIcon icon="call" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_end" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_made" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_merge" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_missed" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_missed_outgoing" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_received" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_split" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_to_action" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_alt" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_enhance" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_front" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_rear" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_roll" />
                        </li>
                        <li>
                          <MaterialIcon icon="cancel" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_giftcard" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_membership" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_travel" />
                        </li>
                        <li>
                          <MaterialIcon icon="casino" />
                        </li>
                        <li>
                          <MaterialIcon icon="cast" />
                        </li>
                        <li>
                          <MaterialIcon icon="cast_connected" />
                        </li>
                        <li>
                          <MaterialIcon icon="center_focus_strong" />
                        </li>
                        <li>
                          <MaterialIcon icon="center_focus_weak" />
                        </li>
                        <li>
                          <MaterialIcon icon="change_history" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat_bubble" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat_bubble_outline" />
                        </li>
                        <li>
                          <MaterialIcon icon="check" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_box" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_box_outline_blank" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_circle" />
                        </li>
                        <li>
                          <MaterialIcon icon="chevron_left" />
                        </li>
                        <li>
                          <MaterialIcon icon="chevron_right" />
                        </li>
                        <li>
                          <MaterialIcon icon="child_care" />
                        </li>
                        <li>
                          <MaterialIcon icon="child_friendly" />
                        </li>
                        <li>
                          <MaterialIcon icon="chrome_reader_mode" />
                        </li>
                        <li>
                          <MaterialIcon icon="class" />
                        </li>
                        <li>
                          <MaterialIcon icon="clear" />
                        </li>
                        <li>
                          <MaterialIcon icon="clear_all" />
                        </li>
                        <li>
                          <MaterialIcon icon="close" />
                        </li>
                        <li>
                          <MaterialIcon icon="closed_caption" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_circle" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_done" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_download" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_off" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_queue" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_upload" />
                        </li>
                        <li>
                          <MaterialIcon icon="code" />
                        </li>
                        <li>
                          <MaterialIcon icon="collections" />
                        </li>
                        <li>
                          <MaterialIcon icon="collections_bookmark" />
                        </li>
                        <li>
                          <MaterialIcon icon="color_lens" />
                        </li>
                        <li>
                          <MaterialIcon icon="colorize" />
                        </li>
                        <li>
                          <MaterialIcon icon="comment" />
                        </li>
                        <li>
                          <MaterialIcon icon="compare" />
                        </li>
                        <li>
                          <MaterialIcon icon="compare_arrows" />
                        </li>
                        <li>
                          <MaterialIcon icon="confirmation_number" />
                        </li>
                        <li>
                          <MaterialIcon icon="contact_mail" />
                        </li>
                        <li>
                          <MaterialIcon icon="contact_phone" />
                        </li>
                        <li>
                          <MaterialIcon icon="contacts" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_copy" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_cut" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_paste" />
                        </li>
                        <li>
                          <MaterialIcon icon="control_point" />
                        </li>
                        <li>
                          <MaterialIcon icon="control_point_duplicate" />
                        </li>
                        <li>
                          <MaterialIcon icon="copyright" />
                        </li>
                        <li>
                          <MaterialIcon icon="create" />
                        </li>
                        <li>
                          <MaterialIcon icon="create_new_folder" />
                        </li>
                        <li>
                          <MaterialIcon icon="credit_card" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_16_9" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_3_2" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_5_4" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_7_5" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_din" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_free" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_landscape" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_original" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_portrait" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_rotate" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_square" />
                        </li>
                        <li>
                          <MaterialIcon icon="confirmation_number" />
                        </li>
                        <li>
                          <MaterialIcon icon="contact_mail" />
                        </li>
                        <li>
                          <MaterialIcon icon="contact_phone" />
                        </li>
                        <li>
                          <MaterialIcon icon="contacts" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_copy" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_cut" />
                        </li>
                        <li>
                          <MaterialIcon icon="content_paste" />
                        </li>
                        <li>
                          <MaterialIcon icon="control_point" />
                        </li>
                        <li>
                          <MaterialIcon icon="control_point_duplicate" />
                        </li>
                        <li>
                          <MaterialIcon icon="copyright" />
                        </li>
                        <li>
                          <MaterialIcon icon="create" />
                        </li>
                        <li>
                          <MaterialIcon icon="create_new_folder" />
                        </li>
                        <li>
                          <MaterialIcon icon="credit_card" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_16_9" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_3_2" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_5_4" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_7_5" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_din" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_free" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_landscape" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_original" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_portrait" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_rotate" />
                        </li>
                        <li>
                          <MaterialIcon icon="crop_square" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_3" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_4" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_5" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_6" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_7" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_auto" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_high" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_low" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_medium" />
                        </li>
                        <li>
                          <MaterialIcon icon="broken_image" />
                        </li>
                        <li>
                          <MaterialIcon icon="brush" />
                        </li>
                        <li>
                          <MaterialIcon icon="bubble_chart" />
                        </li>
                        <li>
                          <MaterialIcon icon="bug_report" />
                        </li>
                        <li>
                          <MaterialIcon icon="build" />
                        </li>
                        <li>
                          <MaterialIcon icon="burst_mode" />
                        </li>
                        <li>
                          <MaterialIcon icon="business" />
                        </li>
                        <li>
                          <MaterialIcon icon="business_center" />
                        </li>
                        <li>
                          <MaterialIcon icon="cached" />
                        </li>
                        <li>
                          <MaterialIcon icon="cake" />
                        </li>
                        <li>
                          <MaterialIcon icon="call" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_end" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_made" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_merge" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_missed" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_missed_outgoing" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_received" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_split" />
                        </li>
                        <li>
                          <MaterialIcon icon="call_to_action" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_alt" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_enhance" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_front" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_rear" />
                        </li>
                        <li>
                          <MaterialIcon icon="camera_roll" />
                        </li>
                        <li>
                          <MaterialIcon icon="cancel" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_giftcard" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_membership" />
                        </li>
                        <li>
                          <MaterialIcon icon="card_travel" />
                        </li>
                        <li>
                          <MaterialIcon icon="casino" />
                        </li>
                        <li>
                          <MaterialIcon icon="cast" />
                        </li>
                        <li>
                          <MaterialIcon icon="cast_connected" />
                        </li>
                        <li>
                          <MaterialIcon icon="center_focus_strong" />
                        </li>
                        <li>
                          <MaterialIcon icon="center_focus_weak" />
                        </li>
                        <li>
                          <MaterialIcon icon="change_history" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat_bubble" />
                        </li>
                        <li>
                          <MaterialIcon icon="chat_bubble_outline" />
                        </li>
                        <li>
                          <MaterialIcon icon="check" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_box" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_box_outline_blank" />
                        </li>
                        <li>
                          <MaterialIcon icon="check_circle" />
                        </li>
                        <li>
                          <MaterialIcon icon="chevron_left" />
                        </li>
                        <li>
                          <MaterialIcon icon="chevron_right" />
                        </li>
                        <li>
                          <MaterialIcon icon="child_care" />
                        </li>
                        <li>
                          <MaterialIcon icon="child_friendly" />
                        </li>
                        <li>
                          <MaterialIcon icon="chrome_reader_mode" />
                        </li>
                        <li>
                          <MaterialIcon icon="class" />
                        </li>
                        <li>
                          <MaterialIcon icon="clear" />
                        </li>
                        <li>
                          <MaterialIcon icon="clear_all" />
                        </li>
                        <li>
                          <MaterialIcon icon="close" />
                        </li>
                        <li>
                          <MaterialIcon icon="closed_caption" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_circle" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_done" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_download" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_off" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_queue" />
                        </li>
                        <li>
                          <MaterialIcon icon="cloud_upload" />
                        </li>
                        <li>
                          <MaterialIcon icon="code" />
                        </li>
                        <li>
                          <MaterialIcon icon="collections" />
                        </li>
                        <li>
                          <MaterialIcon icon="collections_bookmark" />
                        </li>
                        <li>
                          <MaterialIcon icon="color_lens" />
                        </li>
                        <li>
                          <MaterialIcon icon="colorize" />
                        </li>
                        <li>
                          <MaterialIcon icon="comment" />
                        </li>
                        <li>
                          <MaterialIcon icon="compare" />
                        </li>
                        <li>
                          <MaterialIcon icon="compare_arrows" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_late" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_return" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_returned" />
                        </li>
                        <li>
                          <MaterialIcon icon="assignment_turned_in" />
                        </li>
                        <li>
                          <MaterialIcon icon="assistant" />
                        </li>
                        <li>
                          <MaterialIcon icon="assistant_photo" />
                        </li>
                        <li>
                          <MaterialIcon icon="attach_file" />
                        </li>
                        <li>
                          <MaterialIcon icon="attach_money" />
                        </li>
                        <li>
                          <MaterialIcon icon="attachment" />
                        </li>
                        <li>
                          <MaterialIcon icon="audiotrack" />
                        </li>
                        <li>
                          <MaterialIcon icon="autorenew" />
                        </li>
                        <li>
                          <MaterialIcon icon="av_timer" />
                        </li>
                        <li>
                          <MaterialIcon icon="backspace" />
                        </li>
                        <li>
                          <MaterialIcon icon="backup" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_alert" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_charging_full" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_full" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_std" />
                        </li>
                        <li>
                          <MaterialIcon icon="battery_unknown" />
                        </li>
                        <li>
                          <MaterialIcon icon="beach_access" />
                        </li>
                        <li>
                          <MaterialIcon icon="beenhere" />
                        </li>
                        <li>
                          <MaterialIcon icon="block" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_audio" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_connected" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_disabled" />
                        </li>
                        <li>
                          <MaterialIcon icon="bluetooth_searching" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_circular" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_linear" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_off" />
                        </li>
                        <li>
                          <MaterialIcon icon="blur_on" />
                        </li>
                        <li>
                          <MaterialIcon icon="book" />
                        </li>
                        <li>
                          <MaterialIcon icon="bookmark" />
                        </li>
                        <li>
                          <MaterialIcon icon="bookmark_border" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_all" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_bottom" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_clear" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_color" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_horizontal" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_inner" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_left" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_outer" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_right" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_style" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_top" />
                        </li>
                        <li>
                          <MaterialIcon icon="border_vertical" />
                        </li>
                        <li>
                          <MaterialIcon icon="branding_watermark" />
                        </li>
                        <li>
                          <MaterialIcon icon="brightness_1" />
                        </li>
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
      {/* /Page Wrapper */}
    </>
  );
};
export default TypiconIcons;
