/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modalbox from "../_components/modalbox/modalbox";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const Calendar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [startDate, setDate] = useState(new Date()),
    [showCategory, setshowCategory] = useState(false),
    [showmodel, setshowmodel] = useState(false),
    [showEvents, setshowEvents] = useState(false),
    [show, setshow] = useState(false),
    [iseditdelete, setiseditdelete] = useState(false),
    [addneweventobj, setaddneweventobj] = useState(null),
    [isnewevent, setisnewevent] = useState(false),
    [event_title, setevent_title] = useState(""),
    [category_color, setcategory_color] = useState(""),
    [calenderevent, setcalenderevent] = useState(""),
    [weekendsVisible, setweekendsVisible] = useState(true),
    [currentEvents, setscurrentEvents] = useState([]),
    defaultEvents = [
      {
        title: "Event Name 4",
        start: Date.now() + 148000000,
        className: "bg-purple",
      },
      {
        title: "Test Event 1",
        start: Date.now(),
        end: Date.now(),
        className: "bg-success",
      },
      {
        title: "Test Event 2",
        start: Date.now() + 168000000,
        className: "bg-info",
      },
      {
        title: "Test Event 3",
        start: Date.now() + 338000000,
        className: "bg-primary",
      },
    ];
  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("width-100"));
  }, []);

  const handleChange = (date) => {
    setDate(date);
  };
  const addEvent = () => {
    setshowEvents(true);
  };
  const categoryHandler = () => {
    setshowCategory(true);
  };

  const handleClose = () => {
    setisnewevent(false);
    setiseditdelete(false);
    setshow(false);
    setshowCategory(false);
    setshowEvents(false);
    setshowmodel(false);
  };

  const handleEventClick = (clickInfo) => {
    setiseditdelete(false);
    setevent_title(clickInfo.event.title);
    setcalenderevent(clickInfo.event);
  };

  const handleDateSelect = (selectInfo) => {
    setisnewevent(true);
    setaddneweventobj(selectInfo);
  };
  const addnewevent = () => {
    let calendarApi = addneweventobj.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (event_title) {
      calendarApi.addEvent({
        id: 10,
        title: event_title,
        className: category_color,
        start: addneweventobj.startStr,
        end: addneweventobj.endStr,
        allDay: addneweventobj.allDay,
      });
    }
    setisnewevent(false);
  };

  const onupdateModalClose = () => {
    setiseditdelete(false);
    setevent_title("");
  };
  const oncreateeventModalClose = () => {
    setevent_title("");
    setisnewevent(false);
  };
  const removeevent = () => {
    calenderevent.remove();
    setiseditdelete(false);
  };
  const clickupdateevent = () => {
    const newArray = defaultEvents;
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === parseInt(calenderevent.id)) {
        newArray[i].title = event_title;
      }
    }
    defaultEvents = newArray;
    setiseditdelete(false);
  };

  const handleClick = () => {
    setshow(true);
  };
  console.log("showmodel", showmodel);

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5>Calendar</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        onClick={() => setshowmodel("showEvents")}
                        className="btn btn-primary"
                        // data-bs-toggle="modal"
                        // data-bs-target="#add_event"
                      >
                        Create Event
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*  /Page Header */}

            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Drag & Drop Event</h5>
                    <div id="calendar-events" className="mb-3">
                      <div className="calendar-events">
                        <i className="fas fa-circle text-info"></i> My Event One
                      </div>
                      <div className="calendar-events">
                        <i className="fas fa-circle text-success"></i> My Event
                        Two
                      </div>
                      <div className="calendar-events">
                        <i className="fas fa-circle text-danger"></i> My Event
                        Three
                      </div>
                      <div className="calendar-events">
                        <i className="fas fa-circle text-warning"></i> My Event
                        Four
                      </div>
                    </div>
                    <div className="checkbox  mb-3">
                      <input id="drop-remove" type="checkbox" />
                      <label className="ms-1">Remove after drop</label>
                    </div>
                    <Link
                      to="#"
                      onClick={() => setshowmodel("showCategory")}
                      className="btn mb-3 btn-primary btn-block w-100 w-100">
                      <i className="fas fa-plus"></i> Add Category
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="card bg-white calendarIndex">
                  <div className="card-body">
                    <div id="calendar">
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={weekendsVisible}
                        initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                        select={handleDateSelect}
                        eventClick={(clickInfo) => handleEventClick(clickInfo)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Add Event modal */}
            {/* <div
              id="add_event"
              className="modal custom-modal fade"
              role="dialog">
              <div
                className="modal-dialog modal-dialog-centered"
                role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add Event</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>
                          Event Name <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group">
                        <label>
                          Event Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}
            {/*  /Add Event modal */}

            {/*  Create Event modal */}
            <div className="modal custom-modal fade none-border" id="my_event">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Add Event</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-hidden="true">
                      &times;
                    </button>
                  </div>
                  <div className="modal-body"></div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-success save-event submit-btn">
                      Create event
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger delete-event submit-btn"
                      data-bs-dismiss="modal">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  /Create Event modal */}
            <Modalbox show={showmodel} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Calendar;
