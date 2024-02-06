import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Media } from "react-bootstrap";
import Select2 from 'react-select2-wrapper';
import DatePicker from 'react-datepicker';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {img12,img5,img2,img3,img4,img11,img7,img6,img8,img9 } from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Estimates = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

    const [date, setDate] = useState(new Date());
	const [options, setOptions] = useState([
		{ id: 1, text: 'Draft' },
		{ id: 2, text: 'Sent' },
		{ id: 3, text: 'Viewed' },
		{ id: 4, text: 'Expired' },
		{ id: 5, text: 'Accepted' },
		{ id: 6, text: 'Rejected' },
	]);
	const data = [
        {
            "EstimateNumber": "EST-17ER281",
            "Customer": " Marie Canales",
            "img_url": img3,
            "EstimateDate": "16 Nov 2020",
            "ExpiryDate": "22 Nov 2020",
            "Amount": "$100",
            "status": "Accepted"
        },
        {
            "EstimateNumber": "EST-26AS699",
            "Customer": "Barbara Moore",
            "img_url": img4,
            "EstimateDate": "5 Nov 2020",
            "ExpiryDate": "10 Nov 2020",
            "Amount": "$75",
            "status": "Declined"
        },
        {
            "EstimateNumber": "EST-11KI214",
            "Customer": "Greg Lynch",
            "img_url": img5,
            "EstimateDate": "1 Nov 2020",
            "ExpiryDate": "5 Nov 2020",
            "Amount": "$175",
            "status": "Sent"
        },
        {
            "EstimateNumber": "EST-98HJ687",
            "Customer": "Karlene Chaidez",
            "img_url": img6,
            "EstimateDate": "24 Oct 2020",
            "ExpiryDate": "28 Oct 2020",
            "Amount": "$1500",
            "status": "Expired"
        },
        {
            "EstimateNumber": "EST-71DR001",
            "Customer": " John Blair",
            "img_url": img7,
            "EstimateDate": "12 Oct 2020",
            "ExpiryDate": "17 Oct 2020",
            "Amount": "$2350",
            "status": "Accepted"
        },
        {
            "EstimateNumber": "EST-68MN425",
            "Customer": "Russell Copeland",
            "img_url": img8,
            "EstimateDate": "2 Oct 2020",
            "ExpiryDate": "8 Oct 2020",
            "Amount": "$1890",
            "status": "Accepted"
        },
        {
            "EstimateNumber": "EST-86YU963",
            "Customer": " Leatha Bailey",
            "img_url": img9,
            "EstimateDate": "25 Sep 2020",
            "ExpiryDate": "30 Sep 2020",
            "Amount": "$785",
            "status": "Accepted"
        }
    ]
	const columns = [
	
		{
			name: 'EmailEstimate Number',
			selector: row=>row.EstimateNumber,
			sortable: true,
			cell: () => <Link to="/view-estimate">EST-17ER281</Link>,
			width:"250px",						
		},									
																										
		{
			name: 'Customer',			
			sortable: true,
			cell: row => <Media className="user-dt"><Link to="/profile" className="avatar avatar-sm me-2"><img src={row.img_url} className="avatar-img rounded-circle" /></Link><Media.Body>{row.Customer}</Media.Body></Media>,
			width:"250px",
		},
		{
			name: 'Estimate Date',
			selector: row=>row.EstimateDate,
			sortable: true,	
			width:"250px",			
		},
		{
			name: 'Expiry Date',
			selector: row=>row.ExpiryDate,
			sortable: true,
			width:"250px",
		},
		{
			name: 'Amount',
			selector: row=>row.Amount,
			sortable: true,
			width:"250px",
		},
		{
			name: 'Status',
			selector: row=>row.status,
			sortable: true,	
			cell: row => <Media className="user-dt"><span className={`badge badge-pill badge ${ row.status == "Accepted" ? 'bg-success-light' : row.status == "Expired" ? 'bg-warning-light' : row.status == "Sent" ? 'bg-info-light':'bg-danger-light' }`} >{row.status}</span><Media.Body></Media.Body></Media>,
			width:"250px",		
		},
		{
			name: 'Action',
			selector: row=>row.action,
			sortable: true,
			cell: () => 	
			<div className="dropdown dropdown-action">
				
			<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-h"></i></Link>
			<div className="dropdown-menu dropdown-menu-right">
				<Link className="dropdown-item" to="#"><i className="far fa-edit me-2"></i>Edit</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
				<Link className="dropdown-item" to="/view-estimate"><i className="far fa-eye me-2"></i>View</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-file-alt me-2"></i>Convert to Invoice</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-check-circle me-2"></i>Mark as sent</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-paper-plane me-2"></i>Send Estimate</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-check-circle me-2"></i>Mark as Accepted</Link>
				<Link className="dropdown-item" to="#"><i className="far fa-times-circle me-2"></i>Mark as Rejected</Link>
			</div>
		</div>,
		 width:"250px",					 
		},
		
	];
	
	const tableData = {
		columns,
		data,
	};
	

    const handleChange = (date) => {
        setDate(date)
    }
    
        return (
		
			<>
			<div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar /> 
			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Estimates</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Estimates</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="/add-estimate" className="btn btn-primary me-1">
									<i className="fas fa-plus"></i>
								</Link>
								<Link className="btn btn-primary filter-btn" to="/estimates#" id="filter_search">
									<i className="fas fa-filter"></i>
								</Link>
							</div>
						</div>
					</div>
					
					<div id="filter_inputs" className="card filter-card">
						<div className="card-body pb-0">
							<div className="row">
								<div className="col-md-3">
									<div className="form-group">
										<label>Customer:</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-2">
									<div className="form-group">
										<label>Status:</label>
                                        <Select2
                                            className="w-100"
                                            data={options}
                                            options={{
                                                placeholder: 'Select Status',
                                            }}
                                        />
									</div>
								</div>
								<div className="col-md-2">
									<div className="form-group">
										<label>From</label>
										<div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
										</div>
									</div>
								</div>
								<div className="col-md-2">
									<div className="form-group">
										<label>To</label>
										<div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="form-group">
										<label>Estimate Number</label>
										<input type="text" className="form-control" />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card card-table"> 
								<div className="card-body">
								<div className="table-responsive">
									
										
											
											<DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
											
										
										
									
							   </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
			</>
        );
}
export default Estimates;