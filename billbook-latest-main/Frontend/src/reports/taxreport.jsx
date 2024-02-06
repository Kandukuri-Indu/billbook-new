import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Select2 from 'react-select2-wrapper';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const SlideToggle = window.ReactSlideToggle

const Taxreport = () => {

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
				"Amount": "$0",
				"GrossRevenue": "$108",
				"NetRevenue": "$108",
				"TaxRate": "5%",
				"Tax": "Tax Free",
				"EconomicZone": "Tax Free Customers",
			},
			{
				"id": 2,
				"Date" : "28 Feb 2021",				
				"Amount": "$238",				
				"GrossRevenue": "$608",
				"NetRevenue": "$3660",
				"TaxRate": "6%",
				"Tax": "General Sales Tax",
				"EconomicZone": "Default",
			},
			{
				"id": 3,
				"Date" : "10 Mar 2021",
				"Amount": "$375",				
				"GrossRevenue": "$508",
				"NetRevenue": "$4660",
				"TaxRate": "7%",
				"Tax": "General Sales Tax",
				"EconomicZone": "Default",
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
				name: 'Economic Zone',
				selector: row=>row.EconomicZone,
				sortable: true,	
				width:"250px",							
			},																																			
			{
				name: 'Tax',
				selector: row=>row.Tax,			
				sortable: true,
				width:"250px",				
			},	
			{
				name: 'Tax Rate',
				selector: row=>row.TaxRate,
				sortable: true,	
				width:"250px",			
			},
			{
				name: 'Net Revenue',
				selector: row=>row.NetRevenue,
				sortable: true,
				width:"250px",
			},
			{
				name: 'Gross Revenue',
				selector: row=>row.GrossRevenue,
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
								<h3 className="page-title">Taxs Report</h3>
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
export default Taxreport;