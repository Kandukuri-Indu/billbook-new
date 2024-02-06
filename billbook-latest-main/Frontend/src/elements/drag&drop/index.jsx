import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Draggable, Droppable } from "react-drag-and-drop";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";

const DragDrop = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const onDrop = (data) => {
    console.log(data);
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
                <h5>Drag & Drop</h5>
              </div>
            </div>
            {/* /Page Header */}
            <Droppable types={["fruit"]} onDrop={onDrop.bind()}>
              <div className="row" id="card-drag-area">
                {/* Drag Card */}
                <div className="col-md-4 draggable">
                  <Draggable type="fruit" data="drag1">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Draggable Card 1</h5>
                      </div>
                      <div className="card-body">
                        <p>
                          Jelly beans sugar plum cheesecake cookie oat cake
                          soufflé.Tootsie roll bonbon liquorice tiramisu pie
                          powder.Donut sweet roll marzipan pastry cookie cake
                          tootsie roll oat cake cookie.
                        </p>
                      </div>
                    </div>
                  </Draggable>
                </div>
                {/* /Drag Card */}
                {/* Drag Card */}
                <div className="col-md-4 draggable">
                  <Draggable type="fruit" data="drag2">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Draggable Card 2</h5>
                      </div>
                      <div className="card-body">
                        <p>
                          Jelly beans sugar plum cheesecake cookie oat cake
                          soufflé.Tootsie roll bonbon liquorice tiramisu pie
                          powder.Donut sweet roll marzipan pastry cookie cake
                          tootsie roll oat cake cookie.
                        </p>
                      </div>
                    </div>
                  </Draggable>
                </div>
                {/* /Drag Card */}
                {/* Drag Card */}
                <div className="col-md-4 draggable">
                  <Draggable type="fruit" data="drag3">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title">Draggable Card 3</h5>
                      </div>
                      <div className="card-body">
                        <p>
                          Jelly beans sugar plum cheesecake cookie oat cake
                          soufflé.Tootsie roll bonbon liquorice tiramisu pie
                          powder.Donut sweet roll marzipan pastry cookie cake
                          tootsie roll oat cake cookie.
                        </p>
                      </div>
                    </div>
                  </Draggable>
                </div>
                {/* /Drag Card */}
              </div>
            </Droppable>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Basic List Group Sortable</h5>
                  </div>
                  <div className="card-body">
                    {/* Drag Card */}
                    <Droppable types={["fruit"]} onDrop={onDrop.bind()}>
                      <ul className="list-group" id="basic-list-group">
                        <Draggable type="fruit" data="drag1">
                          <li className="list-group-item draggable">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0">Darren Elder</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                            </div>
                          </li>
                        </Draggable>
                        <Draggable type="fruit" data="drag1">
                          <li className="list-group-item draggable">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0">Linda Ellis</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                            </div>
                          </li>
                        </Draggable>
                        <Draggable type="fruit" data="drag1">
                          <li className="list-group-item draggable">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0">Toney Ritch</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                            </div>
                          </li>
                        </Draggable>
                        <Draggable type="fruit" data="drag1">
                          <li className="list-group-item draggable">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0">Flora Jag</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                            </div>
                          </li>
                        </Draggable>
                        <Draggable type="fruit" data="drag1">
                          <li className="list-group-item draggable">
                            <div className="media">
                              <div className="media-body">
                                <h5 className="mt-0">Linda Marris</h5>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                            </div>
                          </li>
                        </Draggable>
                      </ul>
                    </Droppable>
                    {/* /Drag Card */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Drag Card */}
              <div className="col-md-12">
                <div className="card" id="dd-handle">
                  <div className="card-header">
                    <h5 className="card-title">Drag Handler</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <h4 className="my-1">List One</h4>
                        <Droppable types={["fruit"]} onDrop={onDrop.bind()}>
                          <ul className="list-group" id="handle-list-1">
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Cras justo
                                odio
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Dapibus ac
                                facilisis in
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Morbi leo
                                risus
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Porta ac
                                consectetur ac
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Vestibulum at
                                eros
                              </li>
                            </Draggable>
                          </ul>
                        </Droppable>
                      </div>
                      <div className="col-sm-6">
                        <h4 className="my-1">List Two</h4>
                        <Droppable types={["fruit"]} onDrop={onDrop.bind()}>
                          <ul className="list-group" id="handle-list-1">
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Cras justo
                                odio
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Dapibus ac
                                facilisis in
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Morbi leo
                                risus
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Porta ac
                                consectetur ac
                              </li>
                            </Draggable>
                            <Draggable type="fruit" data="drag1">
                              <li className="list-group-item">
                                <span className="handle">+</span> Vestibulum at
                                eros
                              </li>
                            </Draggable>
                          </ul>
                        </Droppable>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Drag Card */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DragDrop;
