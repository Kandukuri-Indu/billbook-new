import React,{useState} from 'react';
import Chatlist from '../application/Chatlist'
import {img,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img1} from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';


const Chat = (props) => {

  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
        return (
                          
                        
      <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}>           
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar />
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="chat-window">
                      <div className="chat-cont-left">
                        <div className="chat-header">
                          <span>Chats</span>
                          <Link className="chat-compose">
                            <i className="material-icons">control_point</i>
                          </Link>
                        </div>
                        <form className="chat-search">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <i className="fas fa-search" />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                          </div>
                        </form>
                          <Chatlist/>

                      </div>
                      <div className="chat-cont-right">
                        <div className="chat-header">
                          <Link
                            id="back_user_list"
                            
                            className="back-user-list"
                          >
                            <i className="material-icons">chevron_left</i>
                          </Link>
                          <div className="media d-flex">
                            <div className="media-img-wrap">
                              <div className="avatar avatar-online">
                                <img
                                  src={img2}
                                  alt="User Image"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="media-body">
                              <div className="user-name">Brian Johnson</div>
                              <div className="user-status">online</div>
                            </div>
                          </div>
                          <div className="chat-options">
                            <Link>
                              <FeatherIcon icon="phone"/>
                            </Link>
                            <Link >
                              <FeatherIcon icon="video"/>
                            </Link>
                            <Link >
                              <FeatherIcon icon="more-vertical"/>
                            </Link>
                          </div>
                        </div>
                        <div className="chat-body">
                          <div className="chat-scroll">
                            <ul className="list-unstyled">
                              <li className="media sent">
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>Hello. What can I do for you?</p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:30 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media d-flex received">
                                <div className="avatar">
                                  <img
                                    src={img2}
                                    alt="User Image"
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>I'm just looking around.</p>
                                      <p>Will you tell me something about yourself?</p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:35 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="msg-box">
                                    <div>
                                      <p>Are you there? That time!</p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:40 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="msg-box">
                                    <div>
                                      <div className="chat-msg-attachments">
                                        <div className="chat-attachment">
                                          <img src={img} alt="User Image"/>
                                          <div className="chat-attach-caption">
                                            placeholder.jpg
                                          </div>
                                          <Link  className="chat-attach-download">
                                            <i className="fas fa-download" />
                                          </Link>
                                        </div>
                                        <div className="chat-attachment">
                                          <img src={img} alt="User Image" />
                                          <div className="chat-attach-caption">
                                            placeholder.jpg
                                          </div>
                                          <Link  className="chat-attach-download">
                                            <i className="fas fa-download" />
                                          </Link>
                                        </div>
                                      </div>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:41 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media sent">
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>Where?</p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:42 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="msg-box">
                                    <div>
                                      <p>
                                        OK, my name is Limingqiang. I like singing,
                                        playing basketballand so on.
                                      </p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:42 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="msg-box">
                                    <div>
                                      <div className="chat-msg-attachments">
                                        <div className="chat-attachment">
                                          <img src={img} alt="User Image"/>
                                          <div className="chat-attach-caption">
                                            placeholder.jpg
                                          </div>
                                          <Link  className="chat-attach-download">
                                            <i className="fas fa-download" />
                                          </Link>
                                        </div>
                                      </div>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:50 AM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media d-flex received">
                                <div className="avatar">
                                  <img
                                    src={img2}
                                    alt="User Image"
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>You wait for notice.</p>
                                      <p>Consectetuorem ipsum dolor sit?</p>
                                      <p>Ok?</p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>8:55 PM</span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-date">Today</li>
                              <li className="media d-flex received">
                                <div className="avatar">
                                  <img
                                    src={img2}
                                    alt="User Image"
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit,
                                      </p>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>10:17 AM</span>
                                          </div>
                                        </li>
                                        <li>
                                          <Link>Edit</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media sent">
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <p>Lorem ipsum dollar sit</p>
                                      <div className="chat-msg-actions dropdown">
                                        <Link
                                        
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i className="fe fe-elipsis-v" />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right">
                                          <Link className="dropdown-item">
                                            Delete
                                          </Link>
                                        </div>
                                      </div>
                                      <ul className="chat-msg-info">
                                        <li>
                                          <div className="chat-time">
                                            <span>10:19 AM</span>
                                          </div>
                                        </li>
                                        <li>
                                          <Link >Edit</Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="media d-flex received">
                                <div className="avatar">
                                  <img
                                    src={img2}
                                    alt="User Image"
                                    className="avatar-img rounded-circle"
                                  />
                                </div>
                                <div className="media-body">
                                  <div className="msg-box">
                                    <div>
                                      <div className="msg-typing">
                                        <span />
                                        <span />
                                        <span />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="chat-footer">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <div className="btn-file btn">
                                <i className="fas fa-paperclip" />
                                <input type="file" />
                              </div>
                            </div>
                            <input
                              type="text"
                              className="input-msg-send form-control"
                              placeholder="Type something"
                            />
                            <div className="input-group-append">
                              <button type="button" className="btn msg-send-btn">
                                <i className="fas fa-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Row */}
              </div>
            </div>
            {/* /Page Wrapper */}
          </div>

            
      
        );
}
export default  Chat;
