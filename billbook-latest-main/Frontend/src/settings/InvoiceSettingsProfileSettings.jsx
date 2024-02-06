import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { img2 } from "../_components/imagepath"
import SettingSidebar from '../layouts/SettingsSidebar'
import FeatherIcon from 'feather-icons-react';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import SettingsSidebar from '../layouts/SettingsSidebar';
import SettingsSideBar from './SettingsSideBar';

const InvoiceSettingsProfileSettings = () => {

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
								<h6>Invoice Settings</h6>
							</div>
							<div className="">
								<button type="button" className="btn accountprofilesettings-button-top btn-primary me-1">
									Save Changes
								</button>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-md-8"></div>
								<div className="col-md-4">
									<div className="">
										
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
export default InvoiceSettingsProfileSettings;