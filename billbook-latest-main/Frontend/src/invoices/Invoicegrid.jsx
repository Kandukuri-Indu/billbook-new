import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import {img4,img3,img11,img12,img6,img8,img10,img9,icon5,icon1,icon2,icon3,icon4 } from "../_components/imagepath"
import FeatherIcon from 'feather-icons-react';

const Invoicegird = () => {

	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [menu, setMenu] = useState(false)
	const [date, setDate] = useState(new Date());

	const toggleSetShow = (value) => {
		setShow(value)
		setShow1(false)
		setShow2(false)
		setShow3(false)
	  }
	  const toggleSetShowone = (value) => {
		setShow(false)
		setShow1(value)
		setShow2(false)
		setShow3(false)
	  }
	  const toggleSetShowtwo = (value) => {
		setShow(false)
		setShow1(false)
		setShow2(value)
		setShow3(false)
	  }
	  const toggleSetShowthree = (value) => {
		setShow(false)
		setShow1(false)
		setShow2(false)
		setShow3(value)
	  }
	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
  
	const [options, setOptions] = useState([
        { id: 1, text: 'Select Customer' },
        { id: 2, text: 'Brian Johnson' },
        { id: 3, text: 'Marie Canales' },
        { id: 4, text: 'Barbara Moore' },
        { id: 5, text: 'Greg Lynch' },
        { id: 6, text: 'Karlene Chaidez' }
	]);
	useEffect(() => {
        let elements = Array.from(document.getElementsByClassName('react-datepicker-wrapper'));
        elements.map(element => element.classList.add("width-100"))
	},[]);
  
    const handleChange = (date) => {
        setDate(date);
    }

        return (

            <>
            <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar /> 
		  <div className="page-wrapper">
				<div className="content container-fluid">
			
					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Invoice Grid</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Invoice Grid</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/invoices" className="invoices-links active">
									<FeatherIcon icon="list" />
								</Link >
								<Link to="/invoice-grid" className="invoices-links">
									<FeatherIcon icon="grid" />
								</Link >
							</div>
						</div>
					</div>
					{/* <!-- /Page Header -->
			   
					
					{/* <!-- Report Filter --> */}
					<div className="card report-card">
						<div className="card-body pb-0">
							<div className="row">
								<div className="col-md-12">
								<ul className="app-listing">
										<li>
											<div className="multipleSelection">
												<div  className="selectBox" onClick={() => toggleSetShow(!show) } >
													<p className="mb-0"><FeatherIcon icon="user-plus" className="me-1 select-icon"/> Select User</p>
													<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
												</div>						  
												<div id="checkBoxes" style={{ display: show ? "block" : "none" }}>
													<form action="#">
														<p className="checkbox-title">Customer Search</p>
														<div className="form-custom">
															<input type="text" className="form-control bg-grey" placeholder="Enter Customer Name"/>
														</div>
														<div className="selectBox-cont">
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span>  Brian Johnson
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span>  Russell Copeland
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span>  Greg Lynch
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span> John Blair
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span> Barbara Moore
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span> Hendry Evan
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="username"/>
																<span className="checkmark"></span> Richard Miles
															</label>
														</div>
														<button type="submit" className="btn w-100 btn-primary">Apply</button>
														<button type="reset" className="btn w-100 btn-grey">Reset</button>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div className="multipleSelection">
												<div className="selectBox" onClick={() => toggleSetShowone(!show1) }>
													<p className="mb-0"><FeatherIcon icon="calendar" className="me-1 select-icon"/> Select Date</p>
													<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
												</div>						  
												<div id="checkBoxes" style={{ display: show1 ? "block" : "none" }}>
													<form action="#">
														<p className="checkbox-title">Date Filter</p>
														<div className="selectBox-cont selectBox-cont-one h-auto">
															<div className="date-picker">
																<div className="form-custom cal-icon">																	
																	<DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker"  />
																</div>
															</div>
															<div className="date-picker pe-0">
																<div className="form-custom cal-icon">																
																	<DatePicker selected={date} onChange={handleChange} className="form-control datetimepicker"/>
																</div>
															</div>
															<div className="date-list">
																<ul>
																	<li><Link to="#" className="btn date-btn">Today</Link ></li>
																	<li><Link to="#" className="btn date-btn">Yesterday</Link ></li>
																	<li><Link to="#" className="btn date-btn">Last 7 days</Link ></li>
																	<li><Link to="#" className="btn date-btn">This month</Link ></li>
																	<li><Link to="#" className="btn date-btn">Last month</Link ></li>
																</ul>
															</div>
														</div>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div className="multipleSelection">
												<div className="selectBox" onClick={() => toggleSetShowtwo(!show2) }>
													<p className="mb-0"><FeatherIcon icon="book-open" className="me-1 select-icon"/> Select Status</p>
													<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
												</div>						  
												<div id="checkBoxes" style={{ display: show2 ? "block" : "none" }}>
													<form action="#">
														<p className="checkbox-title">By Status</p>
														<div className="selectBox-cont">
															<label className="custom_check w-100">
																<input type="checkbox" name="name" defaultChecked />
																<span className="checkmark"></span> All Invoices
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="name" />
																<span className="checkmark"></span> Paid
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="name"/>
																<span className="checkmark"></span> Overdue
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="name"/>
																<span className="checkmark"></span> Draft
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="name"/>
																<span className="checkmark"></span> Recurring
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="name"/>
																<span className="checkmark"></span> Cancelled
															</label>
														</div>
														<button type="submit" className="btn w-100 btn-primary">Apply</button>
														<button type="reset" className="btn w-100 btn-grey">Reset</button>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div className="multipleSelection">
												<div className="selectBox" onClick={() => toggleSetShowthree(!show3) }>
													<p className="mb-0"><FeatherIcon icon="bookmark" className="me-1 select-icon"/> By Category</p>
													<span className="down-icon"><FeatherIcon icon="chevron-down" /></span>
												</div>						  
												<div id="checkBoxes" style={{ display: show3 ? "block" : "none" }}>
													<form action="#">
														<p className="checkbox-title">Category</p>
														<div className="form-custom">
															<input type="text" className="form-control bg-grey" placeholder="Enter Category Name"/>
														</div>
														<div className="selectBox-cont">
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Advertising
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Food
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Marketing
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Repairs
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Software
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Stationary
															</label>
															<label className="custom_check w-100">
																<input type="checkbox" name="category"/>
																<span className="checkmark"></span> Travel
															</label>
														</div>
														<button type="submit" className="btn w-100 btn-primary">Apply</button>
														<button type="reset" className="btn w-100 btn-grey">Reset</button>
													</form>
												</div>
											</div>
										</li>
										<li>
											<div className="report-btn">
												<Link to="#" className="btn">
													<img src={icon5} alt="" className="me-2"/> Generate report
												</Link >
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /Report Filter --> */}

					<div className="card invoices-tabs-card">
						<div className="card-body card-body pt-0 pb-0">
							<div className="invoices-main-tabs border-0 pb-0">
								<div className="row align-items-center">
									<div className="col-lg-12 col-md-12">
										<div className="invoices-settings-btn invoices-settings-btn-one">
											<Link to="/invoices-settings" className="invoices-settings-icon">
												<i data-feather="settings"></i>
											</Link>
											<Link to="/add-invoice" className="btn">
												<FeatherIcon icon="plus-circle" /> New Invoice
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@09</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img4} alt="User Image"/> Barbara Moore</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$1,54,220</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">23 Mar, 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-success-dark">Paid</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@10</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img6} alt="User Image"/> Karlene Chaidez</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$1,222</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">18 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-danger-dark">Overdue</span>
										</div>
										<div className="col text-end">
											<span className="text-danger text-sm">Overdue 14 days</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@11</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img8} alt="User Image"/> Russell Copeland</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$3,470</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">10 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-secondary-dark">Cancelled</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@12</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img10} alt="User Image"/> Joseph Collins</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$8,265</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">30 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-primary-dark">Sent</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@13</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img11} alt="User Image"/> Jennifer Floyd</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$5,200</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">20 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-secondary-dark">Cancelled</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@14</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img9} alt="User Image"/> Leatha Bailey</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$480</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">15 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-primary-dark">Sent</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@15</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img12} alt="User Image"/> Alex Campbell</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$1,999</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">08 Mar 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-danger-dark">Overdue</span>
										</div>
										<div className="col text-end">
											<span className="text-danger text-sm">Overdue 10 days</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4 col-xl-3 d-flex">
							<div className="card invoices-grid-card w-100">
								<div className="card-header d-flex justify-content-between align-items-center">
									<Link to="/invoice-details" className="invoice-grid-link">IN093439#@016</Link>
									<div className="dropdown dropdown-action">
										<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></Link>
										<div className="dropdown-menu dropdown-menu-end">
											<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
											<Link className="dropdown-item" to="/invoice-details"><i className="far fa-eye me-2"></i>View</Link>
											<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
										</div>
									</div>
								</div>
								<div className="card-middle">
									<h2 className="card-middle-avatar">
										<Link to="/profile"><img className="avatar avatar-sm me-2 avatar-img rounded-circle" src={img3} alt="User Image"/> Marie Canales</Link>
									</h2>
								</div>
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											<span><i className="far fa-money-bill-alt"></i> Amount</span>
											<h6 className="mb-0">$2,700</h6>
										</div>
										<div className="col-auto">
											<span><i className="far fa-calendar-alt"></i> Due Date</span>
											<h6 className="mb-0">18 Mar, 2022</h6>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<div className="row align-items-center">
										<div className="col-auto">
											<span className="badge bg-success-dark">Paid</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-12">
							<div className="invoice-load-btn">
								<Link to="#" className="btn">
									<span className="spinner-border text-primary"></span> Load more
								</Link>
							</div>
						</div>
					</div>

				</div>
			</div>
			{/* <!-- /Page Wrapper --> */}
             </div>
                </>
        );
    }
    export default Invoicegird