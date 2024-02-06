import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import TextEditor from "./editor";
import { DropIcon } from "../_components/imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import DatePicker from "react-datepicker";

const ItemDetailsProduct = () => {
    const [menu, setMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMenu(!menu);
    };
    const [imageURL, setImageURL] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setImageURL(base64Image);
                setFormData({
                    ...formData,
                    image: base64Image,
                });
            };
            reader.readAsDataURL(file);
        }
    };
    const [discount, setDiscount] = useState([
        { id: 1, text: "5%" },
        { id: 2, text: "10%" },
        { id: 3, text: "15%" },
    ]);

    const [currencyOptions, setcurrencyOptions] = useState([
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "2" },
        { id: 4, text: "3" },
    ]);

    return (
        <>

            <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
                <Header onMenuClick={(value) => toggleMobileMenu()} />
                <Sidebar />
                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            <div className="content-page-header ">
                                <h5>View Products</h5>
                                <div className="list-btn">
                                    <ul className="filter-list">
                                        {/* adjust stock button  */}
                                        <div className="button-list">
                                            <button type="button" className="btn btn-filters waves-effect waves-light mt-1 me-1" data-bs-toggle="modal"
                                                data-bs-target="#con-close-modal">
                                                <span className="me-2">
                                                    <FeatherIcon icon="grid" />
                                                </span>
                                                Adjust Stock
                                            </button>
                                        </div>
                                        {/* adjust stock button  */}

                                        {/* adjust stock modal  */}
                                        <div id="con-close-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true" style={{
                                            display: "none"
                                        }}>
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Adjust Stock Quantity</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                    </div>
                                                    <div className="modal-body p-4 pricing-details-tab-right">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-1">
                                                                <div className="form-group manage-business-enable-tds">
                                                                    <div>
                                                                        <label>Item Name</label>
                                                                        <p className="manage-business-e-invoicing-p">new</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <label>Add Or Reduce Stock</label>
                                                                    <div className="">
                                                                        <label className="custom_radio me-3">
                                                                            <input
                                                                                type="radio"
                                                                                name="payment"
                                                                                defaultChecked="true"
                                                                            />
                                                                            <span className="checkmark" /> Add(+)
                                                                        </label>
                                                                        <label className="custom_radio">
                                                                            <input type="radio" name="payment" />
                                                                            <span className="checkmark" /> Reduce(-)
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Godown</label>
                                                                    <Select2
                                                                        className="w-100"
                                                                        data={currencyOptions}
                                                                        options={{
                                                                            placeholder: "None",
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                <div className="form-group manage-business-enable-tds">
                                                                    <div>
                                                                        <p>Current Stock Level</p>
                                                                        <p className="manage-business-e-invoicing-p">129.0 PCS</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-6 col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Adjust quantity</label>
                                                                    <div className="input-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="0"

                                                                            aria-describedby="basic-addon2"
                                                                        />
                                                                        <span className="input-group-text blue-text" id="basic-addon2">
                                                                            PCS
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                <div className="form-group manage-business-enable-tds">
                                                                    <div>
                                                                        <p>Final Stocks</p>
                                                                        <p className="manage-business-e-invoicing-p">129 PCS</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                                <div className="form-group">
                                                                    <label>Remarks <span className="manage-business-e-invoicing-p">(optional)</span></label>
                                                                    <div class="form-floating">
                                                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                                        <label for="floatingTextarea">Comments</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary waves-effect me-2" data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="button" className="btn btn-info waves-effect waves-light">
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* adjust stock modal  */}

                                        {/* edit button  */}
                                        <div className="button-list">
                                            {/* Responsive modal */}
                                            <button
                                                type="button"
                                                className="btn btn-filters mt-1 me-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#bs-example-modal-lg"
                                            >
                                                <span className="me-2">
                                                    <FeatherIcon icon="edit" />
                                                </span>
                                                Edit
                                            </button>
                                        </div>
                                        {/* edit button  */}

                                        {/* edit modal  */}
                                        <div
                                            className="modal fade"
                                            id="bs-example-modal-lg"
                                            tabIndex={-1}
                                            role="dialog"
                                            aria-labelledby="myLargeModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-lg modal-lg-width">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title" id="myLargeModalLabel">
                                                            Edit Item
                                                        </h4>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row">
                                                            <div className="col-xl-12">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        {/* <h4 className="header-title mb-4">Basic Details</h4>
                                                                        <h6 className="header-title mb-4">Advance Details</h6> */}
                                                                        <div className="row">
                                                                            <div className="col-sm-3 pricing-details-tab">
                                                                                <div
                                                                                    className="nav flex-column nav-pills nav-pills-tab"
                                                                                    id="v-pills-tab"
                                                                                    role="tablist"
                                                                                    aria-orientation="vertical"
                                                                                >
                                                                                    <a
                                                                                        className="nav-link active show mb-1"
                                                                                        id="v-pills-home-tab"
                                                                                        data-bs-toggle="pill"
                                                                                        href="#v-pills-home"
                                                                                        role="tab"
                                                                                        aria-controls="v-pills-home"
                                                                                        aria-selected="true"
                                                                                    >
                                                                                        <span className="me-2">
                                                                                            <FeatherIcon icon="file-text" />
                                                                                        </span>
                                                                                        Basic Details <span className="accountprofilesettings-start-mark">*</span>
                                                                                    </a>
                                                                                    <p className="header-title-advance-details">Advance Details</p>
                                                                                    <a
                                                                                        className="nav-link mb-1"
                                                                                        id="v-pills-profile-tab"
                                                                                        data-bs-toggle="pill"
                                                                                        href="#v-pills-profile"
                                                                                        role="tab"
                                                                                        aria-controls="v-pills-profile"
                                                                                        aria-selected="false"
                                                                                    >
                                                                                        <span className="me-2">
                                                                                            <FeatherIcon icon="layers" />
                                                                                        </span>
                                                                                        Stock Details
                                                                                    </a>
                                                                                    <a
                                                                                        className="nav-link mb-1"
                                                                                        id="v-pills-messages-tab"
                                                                                        data-bs-toggle="pill"
                                                                                        href="#v-pills-messages"
                                                                                        role="tab"
                                                                                        aria-controls="v-pills-messages"
                                                                                        aria-selected="false"
                                                                                    >
                                                                                        <span className="me-2">
                                                                                            <FeatherIcon icon="dollar-sign" />
                                                                                        </span>
                                                                                        Pricing Details
                                                                                    </a>
                                                                                    <a
                                                                                        className="nav-link mb-1"
                                                                                        id="v-pills-settings-tab"
                                                                                        data-bs-toggle="pill"
                                                                                        href="#v-pills-settings"
                                                                                        role="tab"
                                                                                        aria-controls="v-pills-settings"
                                                                                        aria-selected="false"
                                                                                    >
                                                                                        <span className="me-2">
                                                                                            <FeatherIcon icon="columns" />
                                                                                        </span>
                                                                                        Custom Fields
                                                                                    </a>
                                                                                </div>
                                                                            </div>{" "}
                                                                            {/* end col*/}
                                                                            <div className="col-sm-9 pricing-details-tab-right pricing-details-tab-padding">
                                                                                <div className="tab-content">
                                                                                    <div
                                                                                        className="tab-pane fade active show"
                                                                                        id="v-pills-home"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="v-pills-home-tab"
                                                                                    >
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Item Type <span className="accountprofilesettings-start-mark">*</span></label>
                                                                                                    <div className="">
                                                                                                        <label className="custom_radio me-3">
                                                                                                            <input
                                                                                                                type="radio"
                                                                                                                name="payment"
                                                                                                                defaultChecked="true"
                                                                                                            />
                                                                                                            <span className="checkmark" /> Product
                                                                                                        </label>
                                                                                                        <label className="custom_radio">
                                                                                                            <input type="radio" name="payment" />
                                                                                                            <span className="checkmark" /> Service
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Category</label>
                                                                                                    <Select2
                                                                                                        className="w-100"
                                                                                                        data={currencyOptions}
                                                                                                        options={{
                                                                                                            placeholder: "website",
                                                                                                        }}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Item Name <span className="accountprofilesettings-start-mark">*</span></label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"
                                                                                                        placeholder="item name"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group manage-business-enable-tds">
                                                                                                    <p>Show item in online store</p>
                                                                                                    <span>
                                                                                                        <label class="switch">
                                                                                                            <input type="checkbox" />
                                                                                                            <span class="slider round"></span>
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Sales Price</label>
                                                                                                    <div className="input-group">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"
                                                                                                            aria-label="Text input with dropdown button"
                                                                                                        />
                                                                                                        <button
                                                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                                                            type="button"
                                                                                                            data-bs-toggle="dropdown"
                                                                                                            aria-expanded="false"
                                                                                                        >
                                                                                                            Dropdown
                                                                                                        </button>
                                                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    With Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    Without Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>GST Tax Rate(%)</label>
                                                                                                    <Select2
                                                                                                        className="w-100"
                                                                                                        data={currencyOptions}
                                                                                                        options={{
                                                                                                            placeholder: "None",
                                                                                                        }}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Measuring Unit</label>
                                                                                                    <Select2
                                                                                                        className="w-100"
                                                                                                        data={currencyOptions}
                                                                                                        options={{
                                                                                                            placeholder: "None",
                                                                                                        }}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Opening Stock</label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Service Name</label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"
                                                                                                        defaultValue="new"
                                                                                                        placeholder="Enter service name"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Service Code</label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"

                                                                                                        placeholder="Enter service code"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="v-pills-profile"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="v-pills-profile-tab"
                                                                                    >
                                                                                        <div className="">
                                                                                            <div className="row">
                                                                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>Item Code</label>
                                                                                                        <div className="input-group">
                                                                                                            <input
                                                                                                                type="text"
                                                                                                                className="form-control"
                                                                                                                placeholder="Ex:118KJUY"

                                                                                                                aria-describedby="basic-addon2"
                                                                                                            />
                                                                                                            <span className="input-group-text blue-text" id="basic-addon2">
                                                                                                                Generate Barcode
                                                                                                            </span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>HSN Code</label>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"

                                                                                                            placeholder="18189"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                                                                    <div className="form-group find-hsn-code">
                                                                                                        <label className="blue-textt">Find HSN Code</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>Measuring Unit</label>
                                                                                                        <Select2
                                                                                                            className="w-100"
                                                                                                            data={currencyOptions}
                                                                                                            options={{
                                                                                                                placeholder: "GST",
                                                                                                            }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                                                                    <div className="form-group find-hsn-code">
                                                                                                        <label className="blue-textt">+ Alternative Unit</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>Opening Stock</label>
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"

                                                                                                            placeholder="120"
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>As Of Date</label>
                                                                                                        <div className="cal-icon cal-icon-info">
                                                                                                            <DatePicker
                                                                                                                className="datetimepicker form-control godown-transfer-date"
                                                                                                                dateFormat="dd-MM-yyyy"
                                                                                                                showTimeInput={false}
                                                                                                            ></DatePicker>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                    <div className="form-group find-hsn-code">
                                                                                                        <label className="blue-textt">Enable Low stock quantity warning</label>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                        <label>Description</label>
                                                                                                        {/* <textarea name="" id="" cols="60" rows="5" placeholder="Enter Description"></textarea> */}
                                                                                                        <div class="form-floating">
                                                                                                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                                                                            <label for="floatingTextarea">Comments</label>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-lg-12 col-sm-12">
                                                                                                    <div className="form-group mb-0 pb-0">
                                                                                                        <label>Image</label>
                                                                                                        <div className="form-group service-upload mb-0">
                                                                                                            <span>
                                                                                                                <img src={DropIcon} alt="upload" />
                                                                                                            </span>
                                                                                                            <h6 className="drop-browse align-center">
                                                                                                                Drop your files here or
                                                                                                                <span className="text-primary ms-1">browse</span>
                                                                                                            </h6>
                                                                                                            <p className="text-muted">Maximum size: 50MB</p>
                                                                                                            <input
                                                                                                                type="file"
                                                                                                                multiple=""
                                                                                                                id="image_sign"
                                                                                                                onChange={handleFileChange}
                                                                                                            />
                                                                                                            {imageURL && (
                                                                                                                <div>
                                                                                                                    <img
                                                                                                                        src={imageURL}
                                                                                                                        alt="Selected Image"
                                                                                                                        style={{ maxWidth: '100%' }}
                                                                                                                    />
                                                                                                                </div>
                                                                                                            )}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div
                                                                                        className="tab-pane fade"
                                                                                        id="v-pills-messages"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="v-pills-messages-tab"
                                                                                    >
                                                                                        <div className="row">
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Sales Price</label>
                                                                                                    <div className="input-group">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"
                                                                                                            aria-label="Text input with dropdown button"
                                                                                                        />
                                                                                                        <button
                                                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                                                            type="button"
                                                                                                            data-bs-toggle="dropdown"
                                                                                                            aria-expanded="false"
                                                                                                        >
                                                                                                            Dropdown
                                                                                                        </button>
                                                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    With Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    Without Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>Purchase Price</label>
                                                                                                    <div className="input-group">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            className="form-control"
                                                                                                            aria-label="Text input with dropdown button"
                                                                                                        />
                                                                                                        <button
                                                                                                            className="btn btn-outline-secondary dropdown-toggle"
                                                                                                            type="button"
                                                                                                            data-bs-toggle="dropdown"
                                                                                                            aria-expanded="false"
                                                                                                        >
                                                                                                            Dropdown
                                                                                                        </button>
                                                                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    With Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a className="dropdown-item" href="#">
                                                                                                                    Without Tax
                                                                                                                </a>
                                                                                                            </li>
                                                                                                        </ul>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                                <div className="form-group">
                                                                                                    <label>GST Tax Rate(%)</label>
                                                                                                    <Select2
                                                                                                        className="w-100"
                                                                                                        data={currencyOptions}
                                                                                                        options={{
                                                                                                            placeholder: "None",
                                                                                                        }}
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="tab-pane fade products-edit-edit"
                                                                                        id="v-pills-settings"
                                                                                        role="tabpanel"
                                                                                        aria-labelledby="v-pills-settings-tab"
                                                                                    >
                                                                                        <div className="row">
                                                                                            <div className="form-group row mb-3">
                                                                                                <label className="col-form-label col-lg-6">
                                                                                                    Stock Value Calculation
                                                                                                </label>
                                                                                                <div className="col-lg-6">
                                                                                                    <div className="input-group">
                                                                                                        <Select2
                                                                                                            className="w-100"
                                                                                                            data={currencyOptions}
                                                                                                            options={{
                                                                                                                placeholder: "website",
                                                                                                            }}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                                                <div className="form-group manage-business-enable-tds">
                                                                                                    <div>
                                                                                                        <p>Enable Item Batching & Expiry</p>
                                                                                                        <p className="manage-business-e-invoicing-p">Keep track of multiple prices, expiry and manufacturing dates</p>
                                                                                                    </div>
                                                                                                    <span>
                                                                                                        <label class="switch">
                                                                                                            <input type="checkbox" />
                                                                                                            <span class="slider round"></span>
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                                                <div className="form-group manage-business-enable-tds">
                                                                                                    <div>
                                                                                                        <p>Enable Serial Number/IMEI</p>
                                                                                                        <p className="manage-business-e-invoicing-p">Manage your items by Serial Number or IMEI and track them easily</p>
                                                                                                    </div>
                                                                                                    <span>
                                                                                                        <label class="switch">
                                                                                                            <input type="checkbox" />
                                                                                                            <span class="slider round"></span>
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                                                                <div className="form-group">
                                                                                                    <label>Field Name</label>
                                                                                                    <input
                                                                                                        type="text"
                                                                                                        className="form-control"
                                                                                                        placeholder="item name"
                                                                                                        defaultValue="IMEI/Serial No"
                                                                                                    />
                                                                                                </div>
                                                                                            </div>
                                                                                            <p className="mb-3">Choose a custom field name like IMEI Number, Model Number, Part Number etc. for adding the serial numbers.</p>
                                                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                                                <div className="form-group manage-business-enable-tds">
                                                                                                    <p>MRP</p>
                                                                                                    <span>
                                                                                                        <label class="switch">
                                                                                                            <input type="checkbox" />
                                                                                                            <span class="slider round"></span>
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                                                                <div className="form-group manage-business-enable-tds">
                                                                                                    <p>Wholesale Price</p>
                                                                                                    <span>
                                                                                                        <label class="switch">
                                                                                                            <input type="checkbox" />
                                                                                                            <span class="slider round"></span>
                                                                                                        </label>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>




                                                                                    </div>

                                                                                </div>
                                                                            </div>{" "}
                                                                            {/* end col*/}
                                                                        </div>{" "}
                                                                        {/* end row*/}
                                                                    </div>
                                                                </div>{" "}
                                                                {/* end card*/}
                                                            </div>{" "}

                                                        </div>
                                                    </div>



                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary waves-effect me-2"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info waves-effect waves-light"
                                                        >
                                                            Save changes
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* /.modal-content */}
                                            </div>
                                            {/* /.modal-dialog */}
                                        </div>
                                        {/* edit modal  */}

                                        <li className="">
                                            <div className="dropdown dropdown-action w-auto">
                                                <Link
                                                    to="#"
                                                    className="btn-filters"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <span>
                                                        {/* <i className="fe fe-download" /> */}
                                                        <FeatherIcon icon="trash-2" />
                                                    </span>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <ul className="d-block">
                                                        <li>
                                                            <Link
                                                                className="d-flex align-items-center download-item"
                                                                to="#"
                                                                download=""
                                                            >
                                                                <i className="far fa-file-pdf me-2" />
                                                                PDF
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="d-flex align-items-center download-item"
                                                                to="#"
                                                                download=""
                                                            >
                                                                <i className="far fa-file-text me-2" />
                                                                CVS
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        {/* <li>
                                            <Link className="btn btn-primary" to="/add-product">
                                                <i
                                                    className="fa fa-plus-circle me-2"
                                                    aria-hidden="true"
                                                />
                                                Add Product
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* title area end  */}
                        <div className="card invoices-tabs-card">
                            <div className="invoices-main-tabs">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="invoices-tabs">
                                            <ul>
                                                <li>
                                                    <Link to="/item-details" className="active">
                                                        Item Details
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/stock-details">Stock Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/party-wise-report">Party Wise Report</Link>
                                                </li>
                                                <li>
                                                    <Link to="/godown">Godown</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* switching tab area end  */}

                        {/* item details start  */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="item-details-parent">
                                    <div className="item-details-child">
                                        <h6>General Details</h6>
                                    </div>
                                    <div className="item-details-subparent-parent">
                                        <div className="item-details-subparent-width">
                                            <h6>Item Name</h6>
                                            <p>new</p>
                                        </div>
                                        <div className="item-details-subparent-flex">
                                            <div className="item-details-subparent-width">
                                                <h6>Item Code</h6>
                                                <p>-</p>
                                            </div>
                                            <div className="item-details-subparent-width">
                                                <h6>Category</h6>
                                                <p>website</p>
                                            </div>
                                        </div>
                                        <div className="item-details-subparent-flex">
                                            <div className="item-details-subparent-width">
                                                <h6>Current Stock</h6>
                                                <p>130 PCS</p>
                                            </div>
                                            <div className="item-details-subparent-width">
                                                <h6>Low Stock Quantity</h6>
                                                <p>-</p>
                                            </div>
                                        </div>
                                        <div className="item-details-subparent-width">
                                            <h6>Low Stock Warning</h6>
                                            <h5>Disabled</h5>
                                        </div>
                                        <div className="item-details-subparent-width">
                                            <h6>Item Description</h6>
                                            <p>-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="item-details-parent">
                                    <div className="item-details-child">
                                        <h6>Pricing Details</h6>
                                    </div>
                                    <div className="item-details-subparent-parent">
                                        <div className="item-details-subparent-flex row">
                                            <div className="item-details-subparent col-md-4">
                                                <h6>Sales Price</h6>
                                                <p>₹ 2,500 <span>With Tax</span></p>
                                            </div>
                                            <div className="item-details-subparent col-md-4">
                                                <h6>Purchase Price</h6>
                                                <p>₹ 1,000 <span>With Tax</span></p>
                                            </div>
                                        </div>
                                        <div className="item-details-subparent-flex row">
                                            <div className="item-details-subparent col-md-4">
                                                <h6>HSN Code</h6>
                                                <p>-</p>
                                            </div>
                                            <div className="item-details-subparent col-md-4">
                                                <h6>GST Tax Rate</h6>
                                                <p>None</p>
                                            </div>
                                            <div className="item-details-subparent col-md-4">
                                                <h6>Secondary Unit</h6>
                                                <p>-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-details-parent">
                                    <div className="item-details-child">
                                        <h6>Stock Details</h6>
                                    </div>
                                    <div className="item-details-subparent-parent">
                                        <div className="item-details-subparent">
                                            <h6>Serialisation</h6>
                                            <p>Disabled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* item details end  */}


                    </div>
                </div>
            </div>


        </>
    );
};

export default ItemDetailsProduct;
