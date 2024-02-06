import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const SlideToggle = window.ReactSlideToggle

const SalesReport = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
	const [date_range_, setdaterange] = useState( [
            { id:2, text: 'Today' },
            { id:3, text: 'This Week' },
            { id:4, text: 'This Month' },
			{ id:5, text: 'This Quarter'},
            { id:6, text: 'This Year' },
            { id:7, text: 'Previous Week' },
            { id:8, text: 'Previous Month' },
			{ id:9, text: 'Previous Quarter'},
			{ id:10, text: 'Previous Year'}
		]);

		const data = [
			{
				"id": 1,
				"Date" : "7 Jan 2021",
				"Category": "Accessories",
				"Sales": "$42",
				"Refunded": "$0",
				"Discounts": "$163",
				"Taxs": "$221",
				"Amount": "$762",							
			},
			{
				"id": 2,
				"Date" : "28 Feb 2021",
				"Category": "Books",
				"Sales": "$1249",
				"Refunded": "$36",
				"Discounts": "$3",
				"Taxs": "$80",
				"Amount": "$1238",
			},
			{
				"id": 3,
				"Date" : "10 Mar 2021",
				"Category": "Others",
				"Sales": "$76",
				"Refunded": "$0",
				"Discounts": "$0",
				"Taxs": "$4",
				"Amount": "$80",
			},
		]

		const columns = [	
	 
			{
				name: '#',
				selector: row=>row.id,
				sortable: true,	
				width:"250px",							
			},
			{
				name: 'Date',
				selector: row=>row.Date,
				sortable: true,	
				width:"250px",							
			},			
			{
				name: 'Category',
				selector: row=>row.Category,
				sortable: true,	
				width:"250px",							
			},																																			
			{
				name: 'Sales',
				selector: row=>row.Sales,			
				sortable: true,	
				width:"250px",			
			},	
			{
				name: 'Refunded',
				selector: row=>row.Refunded,
				sortable: true,	
				width:"250px",			
			},
			{
				name: 'Discounts',
				selector: row=>row.Discounts,
				sortable: true,
				width:"250px",
			},			
			{
				name: 'Taxs',
				selector: row=>row.Taxs,
				sortable: true,	
				width:"250px",			
			},
			{
				name: 'Amount',
				selector: row=>row.Amount,
				sortable: true,
				width:"250px",
			},	
			
		];
		
		const tableData = {
			columns,
			data,
		};
		
	
    return (
	
		<div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
			<Header onMenuClick={(value) => toggleMobileMenu()} />
			<Sidebar /> 
			<div className="page-wrapper">
				<div className="content container-fluid">
				
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Sales Report</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link>
									</li>
									<li className="breadcrumb-item active">Reports</li>
								</ul>
							</div>
							<div className="col-auto">
								<Link to="#" className="btn btn-primary me-1">
								<i className="fas fa-file-pdf" />
								</Link>
								<Link
								className="btn btn-primary filter-btn"
								to="/expenses-report#"
								id="filter_search"
								>
								<i className="fas fa-filter" />
								</Link>
							</div>
						</div>
					</div>
                    {/* Search Filter */}
                    <div id="filter_inputs" className="card filter-card">
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-3">
                            <div className="form-group">
                                <label>Slect Date Range</label><br/>
                                <Select2 style={{ innerWidth : "250px" }}
                                    className="w-100"
                                    data={date_range_}
                                    options={{
                                        placeholder: 'Select',
                                    }}
                                />                                
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="form-group">
                                <label>From</label>
                                <div className="">
                                <input className="form-control datetimepicker" type="date" />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="form-group">
                                <label>To</label>
                                <div className="">
                                <input className="form-control datetimepicker" type="date" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* /Search Filter */}
					
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

        );
}
export default SalesReport;