import React, { useState } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import HorizontalTimeline from "react-horizontal-timeline";

const Horizontaltimeline = () => {

  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);



  const VALUES = ["2022-01-16", "2022-02-28", "2022-03-20", "2022-05-20", "2022-07-09", "2021-08-30", "2022-11-01", "2022-12-21"];

 

  const description = [
    "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",
    "Title02:Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
    "Title03: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
    "Title04: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney illege in Virginia, looked up one of the more obscure Latin words",
    "Title05: Dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus.",
    "Title01:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam tempora pariatur repellendus in sed laborum officiis ullam esse maxime temporibus ipsa earum facere, voluptates at ut qui tenetur iusto soluta perspiciatis ipsam illo sint doloremque? Sequi inventore beatae, praesentium pariatur mollitia, illo ex recusandae illum possimus tempora necessitatibus. ",

  ];


  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={(value) => toggleMobileMenu()} />

      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Horizontal Timeline</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="root-div card">
            <div style={{
              width: "60%",
              height: "200px",
              margin: "0 auto"
            }}>
              <HorizontalTimeline
                styles={{ outline: "#c8c1d4", foreground: "#621aff" }}
                index={value}
                indexClick={(index) => {
                  setValue(index);
                  setPrevious(value);
                }}
                values={VALUES}
              />
            </div>
            <div className="mx-auto" style={{maxWidth:400, wordSpacing:5, fontSize:20}}>{description[value]}</div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Horizontaltimeline;