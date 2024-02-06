import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { img2 } from "../_components/imagepath"
import SettingSidebar from '../layouts/SettingsSidebar'
import FeatherIcon from 'feather-icons-react';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import SettingsSidebar from '../layouts/SettingsSidebar';
import SettingsSideBar from './SettingsSideBar';
import { im1, im4, us5, us6 } from '../_components/imagepath'
import Select2 from 'react-select2-wrapper';


const ManageBusinessProfileSettings = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}

	const formHandler = (e) => {
		console.log(e);
	}

	const [bgOptions, setbgOptions] = useState([
		{ id: 1, text: 'Retailer' },
		{ id: 2, text: 'Wholesaler' },
		{ id: 3, text: 'Distributor' },
		{ id: 4, text: 'Manufacturer' },
		{ id: 5, text: 'Services' }
	])
	const [brtOptions, setbrtOptions] = useState([
		{ id: 1, text: 'Public limited company' },
		{ id: 2, text: 'Partnership firm' },
		{ id: 3, text: 'One Person Company' },
		{ id: 4, text: 'Business not registered' },
		{ id: 5, text: 'Services' }
	])

	return (


		<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

			<Header onMenuClick={(value) => toggleMobileMenu()} />
			<SettingsSideBar />
			{/* <Sidebar /> 	 */}
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header accountprofilesettings-page-header">
						<div className="content-page-header">
							<div className="">
								<h6>Business Settings</h6>
								<p>Edit Your Company Settings And Information</p>
							</div>
							<div className="">
								<ul className="icons-list accountprofilesettings-ul-flex-buttons">
									<li>
										<i
											className="fa fa-address-card"
											data-bs-toggle="tooltip"
											title="fa fa-address-card"
										/>
									</li>
									<button type="button" className="btn accountprofilesettings-button-top btn-info me-1">
										Chat Support
									</button>
									<button type="button" className="btn accountprofilesettings-button-top btn-secondary me-1">
										Cancel
									</button>
									<button type="button" className="btn accountprofilesettings-button-top btn-primary me-1">
										Save Changes
									</button>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-6">
									<div className="row">
										<div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
											<div className="row">
												{/* <div className="col-md-4">
													<img
														src={us5}
														alt="image"
														className="img-fluid avatar-xl rounded"
													/>
													<p>Upload Image</p>
												</div> */}
												<div className="col-lg-3 col-md-12 col-sm-12">
													<div className="form-group">
														<input type="file" name="" id="" />
														<label class="upload-image-manage-business"></label>
													<p className='upload-image-manage-business-p'>Upload Image</p>
													</div>
												</div>
												<div className="col-lg-8 col-md-6 col-sm-12">
													<div className="form-group">
														<label>Company Phone Number</label>
														<input
															type="text"
															className="form-control"
															placeholder="Enter Name"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Company Phone Number</label>
												<input
													type="text"
													className="form-control"

													placeholder="Enter company phone number"
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Company E-Mail</label>
												<input
													type="email"
													className="form-control"

													placeholder="Enter Email Address"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Billing Address</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter billing address"
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>State</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter state"
												/>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Pincode</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter pincode"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-6 col-sm-12">
											<div className="form-group">
												<label>City</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter city"
												/>
											</div>
										</div>
										<div className="form-group">
											<label>Are you GST Registered?</label>
											<div className="">
												<label className="custom_radio me-3">
													<input
														type="radio"
														name="payment"
														defaultChecked="true"
													/>
													<span className="checkmark" /> Yes
												</label>
												<label className="custom_radio">
													<input type="radio" name="payment" />
													<span className="checkmark" /> No
												</label>
											</div>
										</div>
										<div className="col-lg-12 col-md-6 col-sm-12 mb-3">
											<div className="form-group manage-business-e-invoicing">
												<p>Enable e-Invoicing</p>
												<span>
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
												</span>
											</div>
							 			</div>
										<div className="col-lg-12 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Pan Number</label>
												<input
													type="text"
													className="form-control"
													placeholder="Enter your pan number"
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-6 col-sm-12">
											<div className="form-group manage-business-enable-tds">
												<p>Enable TDS</p>
												<span>
													<label class="switch">
														<input type="checkbox" />
														<span class="slider round"></span>
													</label>
												</span>
											</div>
										</div>
										<div className="col-lg-12 col-md-6 col-sm-12">
											<div className="form-group manage-business-enable-tds">
												<p>Enable TCS</p>
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
								<div className="col-md-6">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Business Type <span className='manage-business-e-invoicing-p'>(Select multiple, if applicable)</span></label>
												<Select2 className="w-100" data={bgOptions} options={{ placeholder: 'Choose your business type', }} />
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Industry Type</label>
												<Select2 className="w-100" data={bgOptions} options={{ placeholder: 'Choose your industry type', }} />
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12">
											<div className="form-group">
												<label>Business Registration Type</label>
												<Select2 className="w-100" data={brtOptions} options={{ placeholder: 'Choose your business registration type', }} />
											</div>
										</div>

										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="manage-business-note">
												<h6>Note:</h6>
												<p>Terms & Conditions and Signature added below will be shown on your Invoices</p>
											</div>
										</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<label>Terms and Conditions</label>
												<textarea name="" id="" cols="70" rows="5">
													1. Goods once sold will not be taken back or exchanged
													2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction only
												</textarea>
											</div>
										</div>
										{/* <div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<label>Signature</label>
											</div>
												<input type="file" name="" id="" className='signature-upload'/>
										</div> */}
										<div className="col-12 col-xl mb-3">Signature</div>
										<div className="col-lg-12 col-md-12 col-sm-12">
											<div className="form-group">
												<label class="custom-file-upload">
													<input type="file" />
													+ Add Signature
												</label>
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-xl col-md-12 mb-3"><p>Company Settings</p></div>
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="manage-business-company-settings">
									<div className="">
										<ul className="icons-list">
											<li>
												<i
													className="fa fa-address-card"
													data-bs-toggle="tooltip"
													title="fa fa-address-card"
												/>
											</li>
										</ul></div>
									<div className="form-group mb-0">
										<h6>Data Export to Tally</h6>
										<p className='manage-business-e-invoicing-p'>Transfer vouchers, items and parties to Tally</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="manage-business-company-settings">
									<div className="">
										<ul className="icons-list">
											<li>
												<i
													className="fa fa-address-card"
													data-bs-toggle="tooltip"
													title="fa fa-address-card"
												/>
											</li>
										</ul></div>
									<div className="form-group mb-0">
										<h6>Delete Business</h6>
										<p className='manage-business-e-invoicing-p'>Business will be permanently deleted</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-12 col-xl col-md-12 my-3"><p>Other Businesses</p></div>
						<div className="col-lg-12 col-md-12 col-sm-12 mb-1">
							<div className="manage-business-company-settings">
								<div className="">
									<ul className="icons-list">
										<li>
											<i
												className="fa fa-address-card"
												data-bs-toggle="tooltip"
												title="fa fa-address-card"
											/>
										</li>
									</ul></div>
								<div className="form-group mb-0">
									<h6>Digital</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-12 col-md-12 col-sm-12">
							<div className="manage-business-company-settings">
								<div className="">
									<ul className="icons-list">
										<li>
											<i
												className="fa fa-address-card"
												data-bs-toggle="tooltip"
												title="fa fa-address-card"
											/>
										</li>
									</ul></div>
								<div className="form-group mb-0">
									<h6>Store</h6>
								</div>
							</div>
						</div>



					</div>


				</div>
			</div>
		</div>
	);

}
export default ManageBusinessProfileSettings;