import React from 'react'
import { Link } from 'react-router-dom';
import {img,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12} from "../_components/imagepath"

const Chatlist = () => {

        return(
            <>
            
            <div className="chat-users-list">
                <div className="chat-scroll">
                  <Link  to="#" className="media d-flex">
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={img3}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Marie Canales</div>
                        <div className="user-last-chat">Hey, How are you?</div>
                      </div>
                      <div>
                        <div className="last-chat-time block">2 min</div>
                        <div className="badge badge-success badge-pill">15</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat active d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={img4}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Barbara Moore</div>
                        <div className="user-last-chat">
                          I'll call you later{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">8:01 PM</div>
                      </div>
                    </div>
                  </Link> 
                  <Link  to="#" className="media d-flex">
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={img5}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Greg Lynch</div>
                        <div className="user-last-chat">
                          Give me a full explanation about our project
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">7:30 PM</div>
                        <div className="badge badge-success badge-pill">3</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={img6}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Karlene Chaidez</div>
                        <div className="user-last-chat">
                          That's very good UI design
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">6:59 PM</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-offline">
                        <img
                          src={img7}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">John Blair</div>
                        <div className="user-last-chat">
                          Yesterday i completed the task
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">11:21 AM</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={img8}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Russell Copeland</div>
                        <div className="user-last-chat">
                          What is the major functionality?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">10:05 AM</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={img9}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Leatha Bailey</div>
                        <div className="user-last-chat">
                          This has allowed me to showcase not only my technical
                          skills
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Yesterday</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-offline">
                        <img
                          src={img10}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Joseph Collins</div>
                        <div className="user-last-chat">
                          Let's talk briefly in the evening.{" "}
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Sunday</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-online">
                        <img
                          src={img11}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Jennifer Floyd</div>
                        <div className="user-last-chat">
                          Do you have any collections? If so, what of?
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Saturday</div>
                      </div>
                    </div>
                  </Link> 
                  <Link 
                    to="#"
                    className="media read-chat d-flex"
                  >
                    <div className="media-img-wrap">
                      <div className="avatar avatar-away">
                        <img
                          src={img12}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <div>
                        <div className="user-name">Alex Campbell</div>
                        <div className="user-last-chat">
                          Connect the two modules with in 1 day.
                        </div>
                      </div>
                      <div>
                        <div className="last-chat-time block">Friday</div>
                      </div>
                    </div>
                  </Link> 
                </div>
              </div>
            </>
        );
    
}

export default Chatlist;
