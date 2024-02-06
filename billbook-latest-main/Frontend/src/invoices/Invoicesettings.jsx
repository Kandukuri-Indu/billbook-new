import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import {Logo,signature,circle1,circle2} from "../_components/imagepath"
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Invoicesettings = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
	  
	const [date, setDate] = useState(new Date());
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
        elements.map(element => element.classNameNameList.add("width-100"))
	},[]);

    const handleChange = (date) => {
        setDate(date)
    }

	return (

		<>
	<div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(defaultValue) => toggleMobileMenu()} />
          <Sidebar /> 
		  {/* <!-- Page Wrapper --> */}
			<div className="page-wrapper">
				<div className="content container-fluid">

					{/* <!-- Page Header --> */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-6">
								<h3 className="page-title">Invoice settings</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">General Settings</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <!-- /Page Header --> */}
				
					<div className="row">
						<div className="col-xl-3 col-md-4">
							<div className="widget settings-menu">
								<ul>
									<li className="nav-item">
										<Link to="settings" className="nav-link active">
									 <FeatherIcon icon="git-commit"/> <span>General Settings</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/tax-settings" className="nav-link">
										<FeatherIcon icon="bookmark"/> <span>Tax Settings</span>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/bank-settings" className="nav-link">
											<i className="fas fa-university"></i> <span>Bank Settings</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						
						<div className="col-xl-9 col-md-8">
							<div className="card invoices-settings-card">
								<div className="card-header">
									<h5 className="card-title">General Settings</h5>
								</div>
								<div className="card-body">
								
									{/* <!-- Form --> */}
									<form action="#" className="invoices-settings-form">
										<div className="row align-items-center form-group">
											<label htmlFor="name" className="col-sm-3 col-form-label input-label">Invoice Status</label>
											<div className="col-sm-9">
												<label className="custom_check">
													<input type="checkbox" name="invoice"/>
													<span className="checkmark"></span>  Change invoice status to paid after an order is complete
												</label>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="email" className="col-sm-3 col-form-label input-label">Invoice Amount</label>
											<div className="col-sm-9">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="phone" className="col-sm-3 col-form-label input-label">Invoice number starts with</label>
											<div className="col-sm-9">
												<input type="text" className="form-control" placeholder="$" defaultValue="$"/>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="addressline1" className="col-sm-3 col-form-label input-label">Prefix</label>
											<div className="col-sm-9">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="addressline2" className="col-sm-3 col-form-label input-label">Number Reset</label>
											<div className="col-sm-9">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="zipcode" className="col-sm-3 col-form-label input-label">Default Due Time</label>
											<div className="col-sm-9">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="row align-items-center form-group ">
											<label htmlFor="zipcode" className="col-sm-3 col-form-label input-label">Default Digital Signatory</label>
											<div className="col-sm-9">
												<div className="invoices-upload-btn">
													<input type="file" accept="image/*" name="image" id="file" onChange="loadFile(event)" className="hide-input"/>
													<label htmlFor="file" className="upload">
														upload File
													</label>
												</div>
											</div>
										</div>
										<div className="row align-items-center form-group">
											<label htmlFor="zipcode" className="col-sm-3 col-form-label input-label">Default Digital Name</label>
											<div className="col-sm-9">
												<input type="text" className="form-control"/>
											</div>
										</div>
										<div className="invoice-setting-btn text-end">
											<button type="submit" className="btn cancel-btn me-2">Cancel</button>
											<button type="submit" className="btn btn-primary">Save Changes</button>
										</div>
									</form>
									{/* <!-- /Form --> */}
									
								</div>
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
export default Invoicesettings;