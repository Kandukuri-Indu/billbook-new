import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import { Row, Col, Card, Media } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {img3,img8,img6,img4,img7,img5,img2 } from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
const SlideToggle = window.ReactSlideToggle

const ExpenseReport = () => {

    const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
	const [category_, setcategory] = useState( [
            { id: 2, text: 'Advertising' },
            { id: 3, text: 'Marketing' },
            { id: 4, text: 'Software' },
            { id: 5, text: 'Travel' }            
    	]),
		[date_range_, setdaterange] = useState( [
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
                "Category": "Advertising",
                "Customer": "Barbara Moore",
                "img_url": img4,
                "ExpenseDate" : "15 Nov 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$145",
                "Status": "Approved"
            },
            {
                "Category": "Food",
                "Customer": "Russell Copeland",
                "img_url": img8,
                "ExpenseDate" : "19 Sep 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$214",
                "Status": "Pending"
            },
            {
                "Category": "Marketing",
                "Customer": " Brian Johnson",
                "img_url": img2,
                "ExpenseDate" : "11 Nov 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$254",
                "Status": "Pending"
            },
            {
                "Category": "Repairs",
                "Customer": " Marie Canales",
                "img_url": img3,
                "ExpenseDate" : "3 Oct 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$60",
                "Status": "Pending"
            },
            {
                "Category": "Software",
                "Customer": "Greg Lynch",
                "img_url": img5,
                "ExpenseDate" : "23 Oct 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$145",
                "Status": "Approved"
            },
            {
                "Category": "Stationary",
                "Customer": "John Blair",
                "img_url": img7,
                "ExpenseDate" : "29 Sep 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$154",
                "Status": "Pending"
            },
            {
                "Category": "Travel",
                "Customer": " Karlene Chaidez",
                "img_url": img6,
                "ExpenseDate" : "9 Oct 2020",
                "Notes": "Lorem ipsum dollar...",
                "Amount": "$75",
                "Status": "Approved"
            }
        ]
        
        const columns = [	
     
            {
                name: 'Category',
                selector: row=>row.Category,
                sortable: true,	
                width:"250px",							
            },																																			
            {
                name: 'Customer',			
                sortable: true,
                cell: row => <Media className="user-dt"><Link to="/profile" className="avatar avatar-sm me-2"><img src={row.img_url} className="avatar-img rounded-circle" /></Link><Media.Body>{row.Customer}</Media.Body></Media>,
                width:"250px",
            },	
            {
                name: 'ExpenseDate',
                selector: row=>row.ExpenseDate,
                sortable: true,	
                width:"250px",			
            },
            {
                name: 'Notes',
                selector: row=>row.Notes,
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
                selector: row=>row.Status,
                sortable: true,
                cell: row => <Media className="user-dt"><span className={`badge badge-pill badge ${ row.Status == "Approved" ? 'bg-success-light' : 'bg-danger-light' }`} >{row.Status}</span><Media.Body></Media.Body></Media>,
                width:"250px",
            },
        ];
        
        const tableData = {
            columns,
            data,
        };
        
	
    return (
		
			<>
        <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}>           
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar /> 
			<div className="page-wrapper">
				<div className="content container-fluid">
				
					{/* Page Header */}
                    <div className="page-header">
                        <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Expenses Report</h3>
                            <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/index">Dashboard</Link>
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
                    {/* /Page Header */}
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
                                <label>Category:</label><br/>
                                <Select2
                                    className="w-100"
                                    data={category_}
                                    options={{
                                        placeholder: 'Select Category',
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
            </>
        );
}
export default ExpenseReport;