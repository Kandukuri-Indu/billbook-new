import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import recentinvoices from '../json/recentinvoices';
import recentestimates from '../json/recentestimates';
import ApexCharts from 'apexcharts';
import Headerfour from '../layouts/Headerfour'
import Sidebarfour from '../layouts/Sidebarfour'
import FeatherIcon from 'feather-icons-react';

const Indexfour = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }

	const salesOptions= {
			colors: ['#7638ff', '#fda600'],
			chart: {
				type: 'bar',
				fontFamily: 'Poppins, sans-serif',
				height: 350,
				toolbar: {
					show: false
				}
			},
			series : [
				{
				name: "Received",
				type: "column",
				data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50]
				},
				{
				name: "Pending",
				type: "column",
				data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80]
				}
			],  
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '60%',
					endingShape: 'rounded'
				},
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
			},
			yaxis: {
				title: {
					text: '$ (thousands)'
				}
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return "$ " + val + " thousands"
					}
				}
			},
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		},
		invoiceOptions = {
            colors: ['#7638ff', '#ff737b', '#fda600', '#1ec1b0'],
            chart: {
                fontFamily: 'Poppins, sans-serif',
                height: 350,
                type: 'donut',
			},
			series: [55, 40, 20, 10],
            labels: ['Paid', 'Unpaid', 'Overdue', 'Draft'],
            legend: {show: false},
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
		recentestimates_= recentestimates,
		recentinvoices_ =  recentinvoices;
		useEffect(() => {
			let salesColumn =  document.getElementById("sales_chart");
			let salesChart = new ApexCharts(salesColumn, salesOptions);
			salesChart.render();
			
			let invoiceColumn =  document.getElementById("invoice_chart");
			let invoiceChart = new ApexCharts(invoiceColumn, invoiceOptions);
			invoiceChart.render();
		  },[]);
		  
		
        return (
	
			<div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          {/* Header */}
		  <Headerfour onMenuClick={(value) => toggleMobileMenu()} />

			{/* Sidebar */}
			<Sidebarfour/>
			{/* /Sidebar */}
			<div className="page-wrapper-three">
				<div className="content container-fluid">

					<div className="row">
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon bg-1">
											<i className="fas fa-dollar-sign"></i>
										</span>
										<div className="dash-count">
											<div className="dash-title">Amount Due</div>
											<div className="dash-counts">
												<p>1,642</p>
											</div>
										</div>
									</div>
									<div className="progress progress-sm mt-3">
										<div className="progress-bar bg-5" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p className="text-muted mt-3 mb-0"><span className="text-danger me-1"><i className="fas fa-arrow-down me-1"></i>1.15%</span> since last week</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon bg-2">
											<i className="fas fa-users"></i>
										</span>
										<div className="dash-count">
											<div className="dash-title">Customers</div>
											<div className="dash-counts">
												<p>3,642</p>
											</div>
										</div>
									</div>
									<div className="progress progress-sm mt-3">
										<div className="progress-bar bg-6" role="progressbar" style={{width: '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p className="text-muted mt-3 mb-0"><span className="text-success me-1"><i className="fas fa-arrow-up me-1"></i>2.37%</span> since last week</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon bg-3">
											<i className="fas fa-file-alt"></i>
										</span>
										<div className="dash-count">
											<div className="dash-title">Invoices</div>
											<div className="dash-counts">
												<p>1,041</p>
											</div>
										</div>
									</div>
									<div className="progress progress-sm mt-3">
										<div className="progress-bar bg-7" role="progressbar" style={{width: '85%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p className="text-muted mt-3 mb-0"><span className="text-success me-1"><i className="fas fa-arrow-up me-1"></i>3.77%</span> since last week</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card">
								<div className="card-body">
									<div className="dash-widget-header">
										<span className="dash-widget-icon bg-4">
											<i className="far fa-file"></i>
										</span> 
										<div className="dash-count">
											<div className="dash-title">Estimates</div>
											<div className="dash-counts">
												<p>2,150</p>
											</div>
										</div>
									</div>
									<div className="progress progress-sm mt-3">
										<div className="progress-bar bg-8" role="progressbar" style={{width: '45%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
									</div>
									<p className="text-muted mt-3 mb-0"><span className="text-danger me-1"><i className="fas fa-arrow-down me-1"></i>8.68%</span> since last week</p>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-xl-7 d-flex">
							<div className="card flex-fill">
								<div className="card-header">
									<div className="d-flex justify-content-between align-items-center">
										<h5 className="card-title">Sales Analytics</h5> 
										<div className="dropdown" data-bs-toggle="dropdown">
											<Link to="#" className="btn btn-white btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown">
												Monthly
											</Link>
											<div className="dropdown-menu dropdown-menu-right">
												<Link to="#" className="dropdown-item">Weekly</Link>
												<Link to="#" className="dropdown-item">Monthly</Link>
												<Link to="#" className="dropdown-item">Yearly</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div className="d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap">
										<div className="w-md-100 d-flex align-items-center mb-3 flex-wrap">
											<div>
												<span>Total Sales</span>
												<p className="h3 text-primary me-5">$1000</p>
											</div>
											<div>
												<span>Receipts</span>
												<p className="h3 text-success me-5">$1000</p>
											</div>
											<div>
												<span>Expenses</span>
												<p className="h3 text-danger me-5">$300</p>
											</div>
											<div>
												<span>Earnings</span>
												<p className="h3 text-dark me-5">$700</p>
											</div>
										</div>
									</div>
									
									<div id="sales_chart">
									
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 d-flex">
							<div className="card flex-fill">
								<div className="card-header">
									<div className="d-flex justify-content-between align-items-center">
										<h5 className="card-title">Invoice Analytics</h5> 
										<div className="dropdown" data-bs-toggle="dropdown">
											<Link to="#" className="btn btn-white btn-sm dropdown-toggle" role="button" data-bs-toggle="dropdown">
												Monthly
											</Link>
											<div className="dropdown-menu dropdown-menu-right">
												<Link to="#" className="dropdown-item">Weekly</Link>
												<Link to="#" className="dropdown-item">Monthly</Link>
												<Link to="#" className="dropdown-item">Yearly</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div id="invoice_chart">
					
									</div>
									<div className="text-center text-muted">
										<div className="row">
											<div className="col-4">
												<div className="mt-4">
													<p className="mb-2 text-truncate"><i className="fas fa-circle text-primary me-1"></i> Invoiced</p>
													<h5>$ 2,132</h5>
												</div>
											</div>
											<div className="col-4">
												<div className="mt-4">
													<p className="mb-2 text-truncate"><i className="fas fa-circle text-success me-1"></i> Received</p>
													<h5>$ 1,763</h5>
												</div>
											</div>
											<div className="col-4">
												<div className="mt-4">
													<p className="mb-2 text-truncate"><i className="fas fa-circle text-danger me-1"></i> Pending</p>
													<h5>$ 973</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="row">
										<div className="col">
											<h5 className="card-title">Recent Invoices</h5>
										</div>
										<div className="col-auto">
											<Link to="/invoices" className="btn-right btn btn-sm btn-outline-primary">
												View All 
											</Link>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div className="mb-3">
										<div className="progress progress-md rounded-pill mb-3">
											<div className="progress-bar bg-success" role="progressbar" style={{width: '47%'}} aria-valuenow="47" aria-valuemin="0" aria-valuemax="100"></div>
											<div className="progress-bar bg-warning" role="progressbar" style={{width: '28%'}} aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
											<div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
											<div className="progress-bar bg-info" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="row">
											<div className="col-auto">
												<i className="fas fa-circle text-success me-1"></i> Paid
											</div>
											<div className="col-auto">
												<i className="fas fa-circle text-warning me-1"></i> Unpaid
											</div>
											<div className="col-auto">
												<i className="fas fa-circle text-danger me-1"></i> Overdue
											</div>
											<div className="col-auto">
												<i className="fas fa-circle text-info me-1"></i> Draft
											</div>
										</div>
									</div>
				
									<div className="table-responsive">
									
										<table className="table table-stripped table-hover">
											<thead className="thead-light">
												<tr>
												   <th>Customer</th>
												   <th>Amount</th>
												   <th>Due Date</th>
												   <th>Status</th>
												   <th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
											{recentinvoices_.map((item, index) => {
												let status;
												if (item.status === 'Paid') {
													status = <span className="badge bg-success-light">{item.status}</span>
													
												} else if (item.status === 'Sent') {
													status = <span className="badge bg-info-light">{item.status}</span>

												} else if(item.status === 'Partially Paid') {
													status = <span className="badge bg-warning-light">{item.status}</span>
													
												} else if (item.status === 'Overdue') {
													status = <span className="badge bg-danger-light">{item.status}</span>
												}

                                                return (
												<tr key={index}>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile"><img className="aavatar avatar-sm me-2 avatar-img rounded-circle" src={item.image} alt="User Image" />{item.customer_name}</Link>
														</h2>
													</td>
													<td>{item.amount}</td>
													<td>{item.due_date}</td>
													<td>
														{status}
													</td>
													<td className="text-end">
														<div className="dropdown dropdown-action">
															<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="fas fa-ellipsis-h" />
															</Link>
															<div className="dropdown-menu dropdown-menu-right">
																<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
																<Link className="dropdown-item" to="/view-invoice"><i className="far fa-eye me-2"></i>View</Link>
																<Link className="dropdown-item" to=""><i className="far fa-trash-alt me-2"></i>Delete</Link>
																<Link className="dropdown-item" to=""><i className="far fa-check-circle me-2"></i>Mark as sent</Link>
																<Link className="dropdown-item" to=""><i className="far fa-paper-plane me-2"></i>Send Invoice</Link>
																<Link className="dropdown-item" to=""><i className="far fa-copy me-2"></i>Clone Invoice</Link>
															</div>
														</div>
													</td>
												</tr>
												 );  })}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="card">
								<div className="card-header">
									<div className="row">
										<div className="col">
											<h5 className="card-title">Recent Estimates</h5>
										</div>
										<div className="col-auto">
											<Link to="/estimates" className="btn-right btn btn-sm btn-outline-primary">
												View All 
											</Link>
										</div>
									</div>
								</div>
								<div className="card-body">
									<div className="mb-3">
										<div className="progress progress-md rounded-pill mb-3">
											<div className="progress-bar bg-success" role="progressbar" style={{width: '39%'}} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
											<div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
											<div className="progress-bar bg-warning" role="progressbar" style={{width: '26%'}} aria-valuenow="26" aria-valuemin="0" aria-valuemax="100"></div>
										</div>
										<div className="row">
											<div className="col-auto">
												<i className="fas fa-circle text-success me-1"></i> Sent
											</div>
											<div className="col-auto">
												<i className="fas fa-circle text-warning me-1"></i> Draft
											</div>
											<div className="col-auto">
												<i className="fas fa-circle text-danger me-1"></i> Expired
											</div>
										</div>
									</div>
									<div className="table-responsive">
										<table className="table table-hover">
											<thead className="thead-light">
												<tr>
													<th>Customer</th>
													<th>Expiry Date</th>
													<th>Amount</th>
													<th>Status</th>
													<th className="text-end">Action</th>
												</tr>
											</thead>
											<tbody>
											{recentestimates_.map((item, index) => {
												let status;
												if (item.status === 'Sent') {
													status = <span className="badge bg-info-light">{item.status}</span>
													
												} else if (item.status === 'Expired') {
													status = <span className="badge bg-warning-light">{item.status}</span>

												} else {
													status = <span className="badge bg-success-light">{item.status}</span>
													
												} 
												return (
												<tr key={index}>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile"><img className="aavatar avatar-sm me-2 avatar-img rounded-circle" src={item.image} alt="User Image" />{item.customer_name}</Link>
														</h2>
													</td>
													<td>{item.expiry_date}</td>
													<td>{item.amount}</td>
													<td>{status}</td>
													<td className="text-end">
														<div className="dropdown dropdown-action">
															<Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
																<i className="fas fa-ellipsis-h" />
															</Link>
															<div className="dropdown-menu dropdown-menu-right">
																<Link className="dropdown-item" to="/edit-invoice"><i className="far fa-edit me-2"></i>Edit</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-trash-alt me-2"></i>Delete</Link>
																<Link className="dropdown-item" to="/view-estimate"><i className="far fa-eye me-2"></i>View</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-file-alt me-2"></i>Convert to Invoice</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-check-circle me-2"></i>Mark as sent</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-paper-plane me-2"></i>Send Estimate</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-check-circle me-2"></i>Mark as Accepted</Link>
																<Link className="dropdown-item" to="#"><i className="far fa-times-circle me-2"></i>Mark as Rejected</Link>
															</div>
														</div>
													</td>
												</tr>
												 );  })}
											</tbody>
										</table>
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
export default Indexfour;