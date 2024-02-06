import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { img2 } from "../_components/imagepath"
import SettingSidebar from '../layouts/SettingsSidebar'
import FeatherIcon from 'feather-icons-react';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import SettingsSidebar from '../layouts/SettingsSidebar';
import SettingsSideBar from './SettingsSideBar';

const RemindersProfileSettings = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}

	const formHandler = (e) => {
		console.log(e);
	}
	return (


		<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

			<Header onMenuClick={(value) => toggleMobileMenu()} />
			<SettingsSideBar />
			{/* <Sidebar /> 	 */}
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="content-page-header">
							<div className="">
								<h6>Account Settings</h6>
								<p>Manage Your Account And Subscription</p>
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
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group manage-business-e-invoicing">
										<div className="">
											<h6>Send billing SMS to Party</h6>
											<p className='manage-business-e-invoicing-p'>Send SMS to your Party on creating any transaction</p>
										</div>
										<span>
											<label class="switch">
												<input type="checkbox" />
												<span class="slider round"></span>
											</label>
										</span>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group manage-business-e-invoicing">
										<div className="">
											<h6>Get payment reminders on WhatsApp</h6>
											<p className='manage-business-e-invoicing-p'>Get WhatsApp alerts when you have to collect payment from customers</p>
										</div>
										<span>
											<label class="switch">
												<input type="checkbox" />
												<span class="slider round"></span>
											</label>
										</span>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group reminder-profile-settings-2row">
										<div className="">
											<h6>Sales Invoice</h6>
											<p className='manage-business-e-invoicing-p'>Get reminded to collect payments on time</p>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>3 days before due date</h6>
												<input type="checkbox" name="" id="" />
											</div>

											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>On due date</h6>
												<input type="checkbox" name="" id="" />
											</div>

											{/* <div className='reminder-profile-settings-checkbox-parent'>
												<div class="accordion" id="accordionExample">
													
													<div class="accordion-item">
														<h2 class="accordion-header" id="headingTwo">
															<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
																Accordion Item #2
															</button>
														</h2>
														<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
															<div class="accordion-body">
																<strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
															</div>
														</div>
													</div>
													
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group reminder-profile-settings-2row">
										<div className="">
											<h6>Sales Invoice</h6>
											<p className='manage-business-e-invoicing-p'>Get reminded to collect payments on time</p>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>3 days before due date</h6>
												<input type="checkbox" name="" id="" />
											</div>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>On due date</h6>
												<input type="checkbox" name="" id="" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group reminder-profile-settings-2row">
										<div className="">
											<h6>Low Stock</h6>
											<p className='manage-business-e-invoicing-p'>Get reminded to buy stock</p>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>When stock is below low stock level</h6>
												<input type="checkbox" name="" id="" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group reminder-profile-settings-2row">
										<div className="">
											<h6>Purchase Invoice</h6>
											<p className='manage-business-e-invoicing-p'>Get reminded to send payments on time</p>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>3 days before due date</h6>
												<input type="checkbox" name="" id="" />
											</div>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>On due date</h6>
												<input type="checkbox" name="" id="" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 mb-4">
									<div className="form-group reminder-profile-settings-2row">
										<div className="">
											<h6>Daily Summary</h6>
											<p className='manage-business-e-invoicing-p'>Get daily updates about</p>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>Outstanding Collections and Payments</h6>
												<input type="checkbox" name="" id="" />
											</div>
											<div className='reminder-profile-settings-checkbox-parent'>
												<h6>Yesterday’s Sales</h6>
												<input type="checkbox" name="" id="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}
export default RemindersProfileSettings;