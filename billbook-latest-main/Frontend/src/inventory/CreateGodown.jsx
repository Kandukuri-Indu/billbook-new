import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { img10 } from "../_components/imagepath";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import InventorySideBar from "../layouts/InventorySideBar";

const CreateGodown = () => {
    const [menu, setMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMenu(!menu);
    };

    const [currencyOptions, setcurrencyOptions] = useState([
        { id: 1, text: "₹" },
        { id: 2, text: "$" },
        { id: 3, text: "£" },
        { id: 4, text: "€" },
    ]);

    return (
        <>
            <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
                <Header onMenuClick={(value) => toggleMobileMenu()} />
                {/* <InventorySideBar /> */}
                <Sidebar />

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="content-page-header">
                                <h5>Create Godown</h5>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-md-12">
                                <form action="#">
                                    <div className="card-body">
                                        <div className="form-group-item">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Godown Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="John Smith"
                                                            placeholder="Enter Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="john@example.com"
                                                            placeholder="Enter Email Address"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <IntlTelInput
                                                            containerClassName="intl-tel-input"
                                                            inputClassName="form-control mail-icon2"
                                                            placeholder="989-438-3131"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Currency</label>
                                                        <Select2
                                                            className="w-100"
                                                            data={currencyOptions}
                                                            options={{
                                                                placeholder: "Currency",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Website</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="www.example.com"
                                                            placeholder="Enter Website Address"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Notes</label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            defaultValue="Lorem Ipsum is simply dummy"
                                                            placeholder="Enter Your Notes"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group-item">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address Line 1</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="4581 Sunny Glen Lane"
                                                            placeholder="Enter Address 1"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Address Line 2</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="Cleveland, OH 44106"
                                                            placeholder="Enter Address 1"
                                                        />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12">
                                                            <div className="form-group">
                                                                <label>Country</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="Australia"
                                                                    placeholder="Country"
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>City</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="Melbourne"
                                                                    placeholder="City"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-12">
                                                            <div className="form-group">
                                                                <label>State</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="Victoria"
                                                                    placeholder="State"
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Pincode</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={3000}
                                                                    placeholder="Pincode"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="add-customer-btns text-end">
                                            <Link
                                                to="#"
                                                type="reset"
                                                className="btn customer-btn-cancel"
                                            >
                                                Cancel
                                            </Link>
                                            <Link
                                                to="/customers"
                                                type="submit"
                                                className="btn customer-btn-save"
                                            >
                                                Save Changes
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreateGodown;
