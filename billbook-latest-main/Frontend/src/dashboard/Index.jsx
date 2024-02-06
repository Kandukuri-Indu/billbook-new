import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import recentinvoices from "../json/recentinvoices";
import recentestimates from "../json/recentestimates";
import ApexCharts from "apexcharts";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import DashboardBackup from "./DashboardBackup";
import axios from "axios";
import DonotChart from "./DonotChart";

const Dashboard = () => {
  const [dataSource, setDatasource] = useState([]);
  const [totalGrandTotal, setTotalGrandTotal] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/addInvoice/invoices")
      .then((response) => {
        console.log("invoices", response.data);
        setDatasource(response.data);

        // Calculate totalGrandTotal
        let totalGrandTotalValue = response.data.reduce((acc, invoice) => {
          return acc + (invoice.grandTotal || 0);
        }, 0);
        setTotalGrandTotal(totalGrandTotalValue);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", dataSource);
  console.log("total", totalGrandTotal);
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const salesOptions = {
      colors: ["#7638ff", "#fda600"],
      chart: {
        type: "bar",
        fontFamily: "Poppins, sans-serif",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Received",
          type: "column",
          data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50],
        },
        {
          name: "Pending",
          type: "column",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80],
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },

    recentestimates_ = recentestimates,
    recentinvoices_ = recentinvoices;
  useEffect(() => {
    let salesColumn = document.getElementById("sales_chart");
    let salesChart = new ApexCharts(salesColumn, salesOptions);
    salesChart.render();

    // let invoiceColumn = document.getElementById("invoice_chart");
    // let invoiceChart = new ApexCharts(invoiceColumn, invoiceOptions);
    // invoiceChart.render();
  }, []);

  // progess bar
  // Assuming dataSource is your API response
  const paidCount = dataSource.filter(
    (item) => item.invoiceStatus === "PAID"
  ).length;
  const unpaidCount = dataSource.filter(
    (item) => item.invoiceStatus === "UNPAID"
  ).length;
  const partiallyPaidCount = dataSource.filter(
    (item) => item.invoiceStatus === "PARTIALLY PAID"
  ).length;

  const totalCount = dataSource.length;

  const paidPercentage = (paidCount / totalCount) * 100;
  const unpaidPercentage = (unpaidCount / totalCount) * 100;
  const partiallyPaidPercentage = (partiallyPaidCount / totalCount) * 100;

  // progess bar


// recent or last five created invoices functtion goes here 
const sortedData = dataSource.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

const lastFiveInvoices = sortedData.slice(0, 5);
// recent or last five created invoices functtion goes here 

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <DashboardBackup total={totalGrandTotal} invoice={dataSource} />

            <div className="row">
              <div className="col-xl-7 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Sales Analytics</h5>
                      <div className="dropdown" data-bs-toggle="dropdown">
                        <Link
                          to="#"
                          className="btn btn-white btn-sm dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          Monthly
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link to="#" className="dropdown-item">
                            Weekly
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Monthly
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Yearly
                          </Link>
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

                    <div id="sales_chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Invoice Analytics</h5>
                      <div className="dropdown" data-bs-toggle="dropdown">
                        <Link
                          to="#"
                          className="btn btn-white btn-sm dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          Monthly
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link to="#" className="dropdown-item">
                            Weekly
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Monthly
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Yearly
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
				  <DonotChart/>
                  
                   
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
                        <Link
                          to="/invoice-list"
                          className="btn-right btn btn-sm btn-outline-primary"
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="progress progress-md rounded-pill mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${paidPercentage}%` }}
                          aria-valuenow={paidPercentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: `${partiallyPaidPercentage}%` }}
                          aria-valuenow={partiallyPaidPercentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: `${unpaidPercentage}%` }}
                          aria-valuenow={unpaidPercentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        {/* You can add more bars for additional statuses if needed */}
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <i className="fas fa-circle text-success me-1"></i>{" "}
                          Paid
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-warning me-1"></i>{" "}
                          Unpaid
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-danger me-1"></i>{" "}
                          Overdue
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-stripped table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>No</th>
                            <th>Customer </th>
                            <th>Amount</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataSource.slice(-5).reverse().map((item, index) => {
                            let status;
        let statusStyle;

        if (item.invoiceStatus === "PAID") {
          status = "PAID";
          statusStyle = { color: "#33B469", backgroundColor: "#E1FFED" }; // Customize colors
        } else if (item.invoiceStatus === "UNPAID") {
          status = "Unpaid";
          statusStyle = { color: "#ff0000", backgroundColor: "#ffdada7d" }; // Customize colors
        } else if (item.invoiceStatus === "PARTIALLY PAID") {
          status = "Partially Paid";
          statusStyle = { color: "#393834", backgroundColor: "#f9dc0b66" }; // Customize colors
        } else if (item.invoiceStatus === "Overdue") {
          status = "Overdue";
          statusStyle = { color: "#721c24", backgroundColor: "#f8d7da" }; // Customize colors
        }

                            return (
								
                              <tr key={index}>
                                <td>
                                  <h2 className="">
                                    {/* <Link to="/profile"><img className="aavatar avatar-sm me-2 avatar-img rounded-circle" src={item.image} alt="User Image" />{item.invoiceNumber}</Link> */}
                                    {item.invoiceNumber}
                                  </h2>
                                </td>
								<td>{item.customerName.name}</td> {/* Add this line */}
                                <td>{item.grandTotal}</td>
                                <td>{new Date(item.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                <td>
								<span style={statusStyle} className="badge">
  {status}
</span>
                                </td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <Link
                                        className="dropdown-item"
                                        to="/edit-invoice"
                                      >
                                        <i className="far fa-edit me-2"></i>Edit
                                      </Link>
                                      <Link
                                        className="dropdown-item"
                                        to="/invoice-details"
                                      >
                                        <i className="far fa-eye me-2"></i>View
                                      </Link>
                                      <Link className="dropdown-item" to="">
                                        <i className="far fa-trash-alt me-2"></i>
                                        Delete
                                      </Link>
                                      <Link className="dropdown-item" to="">
                                        <i className="far fa-check-circle me-2"></i>
                                        Mark as sent
                                      </Link>
                                      <Link className="dropdown-item" to="">
                                        <i className="far fa-paper-plane me-2"></i>
                                        Send Invoice
                                      </Link>
                                      <Link className="dropdown-item" to="">
                                        <i className="far fa-copy me-2"></i>
                                        Clone Invoice
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
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
                        <Link
                          to="/invoice-details"
                          className="btn-right btn btn-sm btn-outline-primary"
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="progress progress-md rounded-pill mb-3">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "39%" }}
                          aria-valuenow="39"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "26%" }}
                          aria-valuenow="26"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="row">
                        <div className="col-auto">
                          <i className="fas fa-circle text-success me-1"></i>{" "}
                          Sent
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-warning me-1"></i>{" "}
                          Draft
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-circle text-danger me-1"></i>{" "}
                          Expired
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
                            if (item.status === "Sent") {
                              status = (
                                <span className="badge bg-info-light text-info">
                                  {item.status}
                                </span>
                              );
                            } else if (item.status === "Expired") {
                              status = (
                                <span className="badge bg-warning-light text-warning">
                                  {item.status}
                                </span>
                              );
                            } else {
                              status = (
                                <span className="badge bg-success-light">
                                  {item.status}
                                </span>
                              );
                            }
                            return (
                              <tr key={index}>
                                <td>
                                  <h2 className="table-avatar">
                                    <Link to="/profile">
                                      <img
                                        className="aavatar avatar-sm me-2 avatar-img rounded-circle"
                                        src={item.image}
                                        alt="User Image"
                                      />
                                      {item.customer_name}
                                    </Link>
                                  </h2>
                                </td>
                                <td>{item.expiry_date}</td>
                                <td>{item.amount}</td>
                                <td>{status}</td>
                                <td className="text-end">
                                  <div className="dropdown dropdown-action">
                                    <Link
                                      to="#"
                                      className="action-icon dropdown-toggle"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i className="fas fa-ellipsis-h" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      <Link
                                        className="dropdown-item"
                                        to="/edit-invoice"
                                      >
                                        <i className="far fa-edit me-2"></i>Edit
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-trash-alt me-2"></i>
                                        Delete
                                      </Link>
                                      <Link
                                        className="dropdown-item"
                                        to="/invoice-details"
                                      >
                                        <i className="far fa-eye me-2"></i>View
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-file-alt me-2"></i>
                                        Convert to Invoice
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-check-circle me-2"></i>
                                        Mark as sent
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-paper-plane me-2"></i>
                                        Send Estimate
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-check-circle me-2"></i>
                                        Mark as Accepted
                                      </Link>
                                      <Link className="dropdown-item" to="#">
                                        <i className="far fa-times-circle me-2"></i>
                                        Mark as Rejected
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
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
    </>
  );
};
export default Dashboard;
