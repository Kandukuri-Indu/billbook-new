import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { img2 } from "../_components/imagepath"
import SettingSidebar from '../layouts/SettingsSidebar'
import FeatherIcon from 'feather-icons-react';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import SettingsSidebar from '../layouts/SettingsSidebar';
import SettingsSideBar from './SettingsSideBar';

const AccountProfileSettings = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}
	const formHandler = (e) => {
		console.log(e);
	}
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		currency: '',
		website: '',
		notes: '',
		billingAddress: {
			name: '',
			addressLine1: '',
			addressLine2: '',
			pincode: '',
			country: '',
			state: '',
			city: '',
		},
		shippingAddress: {
			name: '',
			addressLine1: '',
			addressLine2: '',
			pincode: '',
			country: '',
			state: '',
			city: '',
		},
		image: null,
	});
	const [validation, setValidation] = useState({
		name: true,
		email: true,
		phone: true,
	});
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const response = await axios.post('http://localhost:8000/api/addCustomer/customers', formData);

			if (response.status === 201) {
				Swal.fire({
					icon: 'success',
					title: 'Customer added successfully!',
					showConfirmButton: false,
					timer: 1500,
				});

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Failed to add customer. Please try again.',
				});
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'An error occurred while adding the customer.',
			});

			console.error('Error:', error);
		}
	};
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

					<div className="accountprofilesettings-pink">
						<p>Help us make myBillBook better</p>
						<button type="button" className="btn accountprofilesettings-button-top btn-danger me-1">
							Share Suggestions
						</button>
					</div>


					<div className="col-12 col-xl mb-3"><p>General Information</p></div>
					<div className="col-md-12 mb-4">
						<form className="row g-3" onSubmit={handleFormSubmit}>
							<div className="col-md-4">
								<label htmlFor="inputName4" className="form-label">
									Name <span className='accountprofilesettings-start-mark'>*</span>
								</label>
								<input
									type="text"
									className={`form-control ${!validation.name ? "is-invalid" : ""}`}
									id="inputName4"
									value={formData.name}
									onChange={(e) => {
										setFormData({ ...formData, name: e.target.value });
									}}
								/>
								{!validation.name && (
									<div className="invalid-feedback">Please enter a valid name.</div>
								)}
							</div>
							<div className="col-md-4">
								<label htmlFor="inputPhone" className="form-label">
									Phone
								</label>
								<input
									type="text"
									className={`form-control ${!validation.phone ? "is-invalid" : ""}`}
									id="inputPhone"
									value={formData.phone}
									onChange={(e) => {
										setFormData({ ...formData, phone: e.target.value });

									}}
								/>{!validation.phone && (
									<div className="invalid-feedback">Please enter a valid phone number.</div>
								)}
							</div>
							<div className="col-md-4">
								<label htmlFor="inputEmail4" className="form-label">
									Email
								</label>
								<input
									type="email"
									className={`form-control ${!validation.email ? "is-invalid" : ""}`}
									id="inputEmail4"
									value={formData.email}
									onChange={(e) => {
										setFormData({ ...formData, email: e.target.value });
									}}
								/>
								{!validation.email && (
									<div className="invalid-feedback">Please enter a valid email.</div>
								)}
							</div>
						</form>
					</div>

					<div className="col-12 col-xl mb-3">Referral code for subscription discount</div>
					<div className="col-md-12 mb-4">
						<form className="row g-3" onSubmit={handleFormSubmit}>
							<div class="col-md-3">
								<input type="text" class="form-control" id="Pincode" placeholder="Referal code" value={formData.billingAddress.pincode}
									onChange={(e) => handleFieldChange(e, 'billingAddress.pincode', 'pincode')} />
							</div>
							<div className="col-md-2">
								<button type="button" className="btn btn-primary me-1 button-full-width">
									Apply
								</button>
							</div>
						</form>
					</div>

					<div className="col-12 col-xl mb-3">Subscription Plan</div>
					<div className="col-md-12 row mb-4 accountprofilesettings-left-parent">
						<div className="col-md-4 accountprofilesettings-left-button-down">
							<p>CURRENT PLAN</p>
							<h3>Trial</h3>
							<div className="accountprofilesettings-left-button-down-parent">
								<button type="button" className="btn btn-primary me-1">
									Buy Subscription Plan
								</button>
							</div>
						</div>
						<div className="col-md-8 accountprofilesettings-left-button-down">
							<div className="accountprofilesettings-bottom-right-parent">
								<div className="accountprofilesettings-bottom-right-subparent">
									<p>Upgrade your plan today and get access to premium features:</p>

									<div className="accountprofilesettings-bottom-flex">
										<div className="accountprofilesettings-bottom-left">
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/access-desktop.svg" alt="" /></div>
												<p>Multi User and Staff Access</p>
											</div>
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/business.svg" alt="" /></div>
												<p>EWay Bill Generation</p>
											</div>
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/eway-bill.svg" alt="" /></div>
												<p>SMS Marketing</p>
											</div>
										</div>
										<div className="accountprofilesettings-bottom-right">
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/generate-barcode.svg" alt="" /></div>
												<p>Multiple Businesses</p>
											</div>
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/multiuser.svg" alt="" /></div>
												<p>Offline Desktop App</p>
											</div>
											<div className="accountprofilesettings-img-text-flex">
												<div className="accountprofilesettings-img"><img src="/imagess/sms-campaign.svg" alt="" /></div>
												<p>Scan & Print Barcode</p>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>



					<div className="col-12">
						<button className="btn btn-primary" onClick={handleFormSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);

}
export default AccountProfileSettings;