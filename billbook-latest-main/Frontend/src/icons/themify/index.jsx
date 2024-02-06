import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import MaterialIcon from '@material/react-material-icon';

const Themify = () => {
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
				
					
					<div className="page-header">
						<div className="content-page-header">
							<h5>Themify Icon</h5>
						</div>	
					</div>
					
					
					<div className="row">
        {/* Chart */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Themify Icon</div>
            </div>
            <div className="card-body">
              <div className="icons-items">
                <ul className="icons-list">
                    <li><MaterialIcon icon="http" /></li>
                    <li><MaterialIcon icon="https" /></li>
                    <li><MaterialIcon icon="image" /></li>
                    <li><MaterialIcon icon="image_aspect_ratio" /></li>
                    <li><MaterialIcon icon="import_contacts" /></li>
                    <li><MaterialIcon icon="import_export" /></li>
                    <li><MaterialIcon icon="important_devices" /></li>
                    <li><MaterialIcon icon="inbox" /></li>
                    <li><MaterialIcon icon="indeterminate_check_box" /></li>
                    <li><MaterialIcon icon="info" /></li>
                    <li><MaterialIcon icon="info_outline" /></li>
                    <li><MaterialIcon icon="input" /></li>
                    <li><MaterialIcon icon="insert_chart" /></li>
                    <li><MaterialIcon icon="insert_comment" /></li>
                    <li><MaterialIcon icon="insert_drive_file" /></li>
                    <li><MaterialIcon icon="insert_emoticon" /></li>
                    <li><MaterialIcon icon="insert_invitation" /></li>
                    <li><MaterialIcon icon="insert_link" /></li>
                    <li><MaterialIcon icon="insert_photo" /></li>
                    <li><MaterialIcon icon="invert_colors" /></li>
                    <li><MaterialIcon icon="invert_colors_off" /></li>
                    <li><MaterialIcon icon="iso" /></li>
                    <li><MaterialIcon icon="keyboard" /></li>
                    <li><MaterialIcon icon="keyboard_arrow_down" /></li>
                    <li><MaterialIcon icon="keyboard_arrow_left" /></li>
                    <li><MaterialIcon icon="keyboard_arrow_right" /></li>
                    <li><MaterialIcon icon="keyboard_arrow_up" /></li>
                    <li><MaterialIcon icon="keyboard_backspace" /></li>
                    <li><MaterialIcon icon="keyboard_capslock" /></li>
                    <li><MaterialIcon icon="keyboard_hide" /></li>
                    <li><MaterialIcon icon="keyboard_return" /></li>
                    <li><MaterialIcon icon="keyboard_tab" /></li>
                    <li><MaterialIcon icon="keyboard_voice" /></li>
                    <li><MaterialIcon icon="kitchen" /></li>
                    <li><MaterialIcon icon="label" /></li>
                    <li><MaterialIcon icon="label_outline" /></li>
                    <li><MaterialIcon icon="landscape" /></li>
                    <li><MaterialIcon icon="language" /></li>
                    <li><MaterialIcon icon="laptop" /></li>
                    <li><MaterialIcon icon="laptop_chromebook" /></li>
                    <li><MaterialIcon icon="laptop_mac" /></li>
                    <li><MaterialIcon icon="laptop_windows" /></li>
                    <li><MaterialIcon icon="last_page" /></li>
                    <li><MaterialIcon icon="launch" /></li>
                    <li><MaterialIcon icon="layers" /></li>
                    <li><MaterialIcon icon="layers_clear" /></li>
                    <li><MaterialIcon icon="leak_add" /></li>
                    <li><MaterialIcon icon="leak_remove" /></li>
                    <li><MaterialIcon icon="lens" /></li>
                    <li><MaterialIcon icon="library_add" /></li>
                    <li><MaterialIcon icon="library_books" /></li>
                    <li><MaterialIcon icon="library_music" /></li>
                    <li><MaterialIcon icon="lightbulb_outline" /></li>
                    <li><MaterialIcon icon="line_style" /></li>
                    <li><MaterialIcon icon="line_weight" /></li>
                    <li><MaterialIcon icon="linear_scale" /></li>
                    <li><MaterialIcon icon="link" /></li>
                    <li><MaterialIcon icon="linked_camera" /></li>
                    <li><MaterialIcon icon="list" /></li>
                    <li><MaterialIcon icon="live_help" /></li>
                    <li><MaterialIcon icon="live_tv" /></li>
                    <li><MaterialIcon icon="local_activity" /></li>
                    <li><MaterialIcon icon="local_airport" /></li>
                    <li><MaterialIcon icon="local_atm" /></li>
                    <li><MaterialIcon icon="local_bar" /></li>
                    <li><MaterialIcon icon="local_cafe" /></li>
                    <li><MaterialIcon icon="local_car_wash" /></li>
                    <li><MaterialIcon icon="local_convenience_store" /></li>
                    <li><MaterialIcon icon="local_dining" /></li>
                    <li><MaterialIcon icon="local_drink" /></li>
                    <li><MaterialIcon icon="local_florist" /></li>
                    <li><MaterialIcon icon="local_gas_station" /></li>
                    <li><MaterialIcon icon="local_grocery_store" /></li>
                    <li><MaterialIcon icon="local_hospital" /></li>
                    <li><MaterialIcon icon="local_hotel" /></li>
                    <li><MaterialIcon icon="local_laundry_service" /></li>
                    <li><MaterialIcon icon="local_library" /></li>
                    <li><MaterialIcon icon="local_mall" /></li>
                    <li><MaterialIcon icon="local_movies" /></li>
                    <li><MaterialIcon icon="local_offer" /></li>
                    <li><MaterialIcon icon="local_parking" /></li>
                    <li><MaterialIcon icon="local_pharmacy" /></li>
                    <li><MaterialIcon icon="local_phone" /></li>
                    <li><MaterialIcon icon="local_pizza" /></li>
                    <li><MaterialIcon icon="local_play" /></li>
                    <li><MaterialIcon icon="local_post_office" /></li>
                    <li><MaterialIcon icon="local_printshop" /></li>
                    <li><MaterialIcon icon="local_see" /></li>
                    <li><MaterialIcon icon="local_shipping" /></li>
                    <li><MaterialIcon icon="local_taxi" /></li>
                    <li><MaterialIcon icon="location_city" /></li>
                    <li><MaterialIcon icon="location_disabled" /></li>
                    <li><MaterialIcon icon="location_off" /></li>
                    <li><MaterialIcon icon="location_on" /></li>
                    <li><MaterialIcon icon="location_searching" /></li>
                    <li><MaterialIcon icon="lock" /></li>
                    <li><MaterialIcon icon="lock_open" /></li>
                    <li><MaterialIcon icon="lock_outline" /></li>
                    <li><MaterialIcon icon="looks" /></li>
                    <li><MaterialIcon icon="looks_3" /></li>
                    <li><MaterialIcon icon="looks_4" /></li>
                    <li><MaterialIcon icon="looks_5" /></li>
                    <li><MaterialIcon icon="looks_6" /></li>
                    <li><MaterialIcon icon="looks_one" /></li>
                    <li><MaterialIcon icon="looks_two" /></li>
                    <li><MaterialIcon icon="loop" /></li>
                    <li><MaterialIcon icon="loupe" /></li>
                    <li><MaterialIcon icon="low_priority" /></li>
                    <li><MaterialIcon icon="loyalty" /></li>
                    <li><MaterialIcon icon="mail" /></li>
                    <li><MaterialIcon icon="mail_outline" /></li>
                    <li><MaterialIcon icon="map" /></li>
                    <li><MaterialIcon icon="markunread" /></li>
                    <li><MaterialIcon icon="markunread_mailbox" /></li>
                    <li><MaterialIcon icon="memory" /></li>
                    <li><MaterialIcon icon="menu" /></li>
                    <li><MaterialIcon icon="merge_type" /></li>
                    <li><MaterialIcon icon="message" /></li>
                    <li><MaterialIcon icon="mic" /></li>
                    <li><MaterialIcon icon="mic_none" /></li>
                    <li><MaterialIcon icon="mic_off" /></li>
                    <li><MaterialIcon icon="mms" /></li>
                    <li><MaterialIcon icon="mode_comment" /></li>
                    <li><MaterialIcon icon="mode_edit" /></li>
                    <li><MaterialIcon icon="monetization_on" /></li>
                    <li><MaterialIcon icon="money_off" /></li>
                    <li><MaterialIcon icon="monochrome_photos" /></li>
                    <li><MaterialIcon icon="mood" /></li>
                    <li><MaterialIcon icon="mood_bad" /></li>
                    <li><MaterialIcon icon="more" /></li>
                    <li><MaterialIcon icon="more_horiz" /></li>
                    <li><MaterialIcon icon="more_vert" /></li>
                    <li><MaterialIcon icon="motorcycle" /></li>
                    <li><MaterialIcon icon="mouse" /></li>
                    <li><MaterialIcon icon="move_to_inbox" /></li>
                    <li><MaterialIcon icon="movie" /></li>
                    <li><MaterialIcon icon="movie_creation" /></li>
                    <li><MaterialIcon icon="movie_filter" /></li>
                    <li><MaterialIcon icon="multiline_chart" /></li>
                    <li><MaterialIcon icon="music_note" /></li>
                    <li><MaterialIcon icon="music_video" /></li>
                    <li><MaterialIcon icon="my_location" /></li>
                    <li><MaterialIcon icon="nature" /></li>
                    <li><MaterialIcon icon="nature_people" /></li>
                    <li><MaterialIcon icon="navigate_before" /></li>
                    <li><MaterialIcon icon="navigate_next" /></li>
                    <li><MaterialIcon icon="navigation" /></li>
                    <li><MaterialIcon icon="near_me" /></li>
                    <li><MaterialIcon icon="network_cell" /></li>
                    <li><MaterialIcon icon="network_check" /></li>
                    <li><MaterialIcon icon="network_locked" /></li>
                    <li><MaterialIcon icon="network_wifi" /></li>
                    <li><MaterialIcon icon="new_releases" /></li>
                    <li><MaterialIcon icon="next_week" /></li>
                    <li><MaterialIcon icon="nfc" /></li>
                    <li><MaterialIcon icon="no_encryption" /></li>
                    <li><MaterialIcon icon="no_sim" /></li>
                    <li><MaterialIcon icon="not_interested" /></li>
                    <li><MaterialIcon icon="note" /></li>
                    <li><MaterialIcon icon="note_add" /></li>
                    <li><MaterialIcon icon="notifications" /></li>
                    <li><MaterialIcon icon="notifications_active" /></li>
                    <li><MaterialIcon icon="notifications_none" /></li>
                    <li><MaterialIcon icon="notifications_off" /></li>
                    <li><MaterialIcon icon="notifications_paused" /></li>
                    <li><MaterialIcon icon="offline_pin" /></li>
                    <li><MaterialIcon icon="ondemand_video" /></li>
                    <li><MaterialIcon icon="opacity" /></li>
                    <li><MaterialIcon icon="open_in_browser" /></li>
                    <li><MaterialIcon icon="open_in_new" /></li>
                    <li><MaterialIcon icon="open_with" /></li>
                    <li><MaterialIcon icon="pages" /></li>
                    <li><MaterialIcon icon="pageview" /></li>
                    <li><MaterialIcon icon="palette" /></li>
                    <li><MaterialIcon icon="pan_tool" /></li>
                    <li><MaterialIcon icon="panorama" /></li>
                    <li><MaterialIcon icon="panorama_fish_eye" /></li>
                    <li><MaterialIcon icon="panorama_horizontal" /></li>
                    <li><MaterialIcon icon="panorama_vertical" /></li>
                    <li><MaterialIcon icon="panorama_wide_angle" /></li>
                    <li><MaterialIcon icon="party_mode" /></li>
                    <li><MaterialIcon icon="pause" /></li>
                    <li><MaterialIcon icon="pause_circle_filled" /></li>
                    <li><MaterialIcon icon="pause_circle_outline" /></li>
                    <li><MaterialIcon icon="payment" /></li>
                    <li><MaterialIcon icon="people" /></li>
                    <li><MaterialIcon icon="people_outline" /></li>
                    <li><MaterialIcon icon="perm_camera_mic" /></li>
                    <li><MaterialIcon icon="perm_contact_calendar" /></li>
                    <li><MaterialIcon icon="perm_data_setting" /></li>
                    <li><MaterialIcon icon="perm_device_information" /></li>
                    <li><MaterialIcon icon="perm_identity" /></li>
                    <li><MaterialIcon icon="perm_media" /></li>
                    <li><MaterialIcon icon="perm_phone_msg" /></li>
                    <li><MaterialIcon icon="perm_scan_wifi" /></li>
                    <li><MaterialIcon icon="person" /></li>
                    <li><MaterialIcon icon="person_add" /></li>
                    <li><MaterialIcon icon="person_outline" /></li>
                    <li><MaterialIcon icon="person_pin" /></li>
                    <li><MaterialIcon icon="person_pin_circle" /></li>
                    <li><MaterialIcon icon="personal_video" /></li>
                    <li><MaterialIcon icon="pets" /></li>
                    <li><MaterialIcon icon="phone" /></li>
                    <li><MaterialIcon icon="phone_android" /></li>
                    <li><MaterialIcon icon="phone_bluetooth_speaker" /></li>
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

export default Themify;
