import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import "../_components/antd.css";
import { Pagination, Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import InvoiceHead from "./invoiceHead";
import axios from "axios";

const InvoiceList = () => {
  const [menu, setMenu] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [datasource, setDatasource] = useState([]);

  const [paymentAmount, setPaymentAmount] = useState("");
  const [amount, setAmount] = useState("");

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // const record = {
  //   invoiceDate: "2024-01-31T09:05:08.000Z",
  //   dueDate: "2024-02-15T00:00:00.000Z",
  //   // ... other properties
  // };

  // const formattedInvoiceDate = invoiceDate.toLocaleDateString('en-GB', {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // });

  // const formattedDueDate = dueDate.toLocaleDateString('en-GB', {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // });

  const handleDeleteInvoice = async (invoiceId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/addInvoice/invoices/${invoiceId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Invoice deleted successfully");
        // Update the state to remove the deleted invoice
        setDatasource((prevData) =>
          prevData.filter((item) => item._id !== invoiceId)
        );
      } else {
        console.error("Failed to delete invoice:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting invoice:", error);
    }
  };

  const confirmDeleteInvoice = (invoiceId) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      handleDeleteInvoice(invoiceId);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/addInvoice/invoices")
      .then((response) => {
        console.log(response.data);
        setDatasource(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log("datasource", datasource);

  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceNumber",
      // render: (text, record) => (
      //   // <Link to="/invoice-details" className="invoice-link">
      //   //   {record.Invoice}
      //   // </Link>
      // ),
      sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
    },
    // {
    //   title: "Category",
    //   dataIndex: "category",
    //   sorter: (a, b) => a.category.length - b.category.length,
    // },

    {
      title: "Invoice To",
      dataIndex: "customerName",
      render: (customerName, jjh) => (
        <h2 className="table-avatar">
          <Link to="#" className="avatar avatar-sm me-2">
            <img
              className="avatar-img rounded-circle"
              src={`${customerName?.image?.url}`}
              alt="User"
            />
          </Link>
          <ul>
            <li>{customerName.name}</li>
          </ul>

          {/* <Link to="/profile">
            {record.customerName} <span>{record.email}</span>
          </Link> */}
        </h2>
      ),
      sorter: (a, b) => a.customerName.length - b.customerName.length,
    },
    // {
    //   title: "Invoice To",
    //   dataIndex: "customerName",
    //   render: (customerName) => (
    //     <>
    //     <ul>
    //         <li>{customerName.name}</li>
    //     </ul>
    //     </>

    //   ),
    //   sorter: (a, b) => a.customerName.length - b.customerName.length,
    // },
    {
      title: "Created On",
      dataIndex: "invoiceDate",
      sorter: (a, b) => a.invoiceDate.length - b.invoiceDate.length,
      render: (text, record) => {
        const formattedDate = new Date(record.invoiceDate).toLocaleDateString(
          "en-GB",
          {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }
        );
        return <span>{formattedDate}</span>;
      },
    },

    {
      title: "Total Amount",
      dataIndex: ["grandTotal"],
      sorter: (a, b) => a.grandTotal.length - b.grandTotal.length,
    },
    // {
    //   title: "due Date",
    //   dataIndex: "dueDate",
    //   sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    // },
    // {
    //   title: "discount",
    //   dataIndex: "table",
    //   render: (text, record) => (
    //     <span>
    //     {record.table.map((item) => (
    //       <div key={item._id}>
    //        {item.discount}
    //       </div>
    //     ))}
    //   </span>
    //   ),
    //   sorter: (a, b) => a.discount.length - b.discount.length,
    // },
    // {
    //   title: "Balance",
    //   dataIndex: "payments",
    //   render: (payments) => {
    //     const totalBalance = payments.reduce((acc, payment) => acc + payment.balance, 0);

    //     // Check payment status and adjust the balance
    //     const isPaid = payments.every((payment) => payment.paymentStatus === "Paid");

    //     if (isPaid) {
    //       return <span>0</span>; // If all payments are marked as "Paid", return 0 balance
    //     } else {
    //       const paymentAmount = payments[0]?.paymentAmount || 0;
    //       const amount = payments[0]?.amount || 0;
    //       const partialBalance = parseFloat(paymentAmount) - parseFloat(amount);
    //       return <span>{partialBalance}</span>; // Calculate partial balance
    //     }
    //   },
    //   sorter: (a, b) => {
    //     const totalBalanceA = a.payments.reduce((acc, payment) => acc + payment.balance, 0);
    //     const totalBalanceB = b.payments.reduce((acc, payment) => acc + payment.balance, 0);
    //     return totalBalanceA - totalBalanceB;
    //   },
    // },

    {
      title: "Balance",
      dataIndex: "payments",
      // render: (payments) => {
      //   const lastPayment = payments[payments.length - 1];
      //   const lastPaymentBalance = lastPayment ? lastPayment.balance : 0;

      //   return <span>{lastPaymentBalance}</span>;
      // },
      render: (payments, record) => {
        if (payments.length > 0) {
          const lastPayment = payments[payments.length - 1];
          const lastPaymentBalance = lastPayment ? lastPayment.balance : 0;
          return <span>{lastPaymentBalance}</span>;
        } else {
          return <span>{record.grandTotal}</span>; // Assuming "grandTotal" is the correct property name
        }
      },
      sorter: (a, b) => {
        const lastBalanceA =
          a.payments.length > 0 ? a.payments[a.payments.length - 1].balance : 0;
        const lastBalanceB =
          b.payments.length > 0 ? b.payments[b.payments.length - 1].balance : 0;

        return lastBalanceA - lastBalanceB;
      },
    },

    {
      title: "Due Date",
      dataIndex: "dueDate",
      sorter: (a, b) => a.dueDate.length - b.dueDate.length,
      render: (text, record) => {
        const formattedDate = new Date(record.dueDate).toLocaleDateString(
          "en-GB",
          {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }
        );
        return <span>{formattedDate}</span>;
      },
    },
    // {
    //   title: "Status",
    //   dataIndex: "payments",
    //   render: (payments) => (
    //     <>
    //     {payments.length > 0 ? payments.map((payment) => (
    //     <span className="badge bg-success-light">{payment?.paymentStatus ? payment?.paymentStatus : "Unpaid"}</span>
    //     )) : <span className="badge bg-success-light">{"Unpaid"}</span>}
    //     </>
    //   ),
    //   // sorter: (a, b) => a.paymentStatus.length - b.paymentStatus.length,
    // },
    // {
    //   title: "Status",
    //   dataIndex: "payments",
    //   render: (payments) => {
    //     const lastPayment =
    //       payments.length > 0 ? payments[payments.length - 1] : null;

    //     if (lastPayment) {
    //       const lastPaymentBalance = lastPayment.balance;
    //       return (
    //         <span className={`badge bg-success-light`}>
    //           {lastPaymentBalance === 0 ? "Paid" : "Partially Paid"}
    //         </span>
    //       );
    //     } else {
    //       return <span className={`badge bg-success-light`}>Unpaid</span>;
    //     }
    //   },
    // },

    {
      title: "Status",
      dataIndex: "payments",
      render: (payments, record) => {
        // Check if there are payments for the current record
        if (payments.length > 0) {
          // Get the last payment in the payments array
          const lastPayment = payments[payments.length - 1];

          // Get the invoice date and due date from the record
          // const invoiceDate = new Date(record.invoiceDate);
          // const dueDate = new Date(record.dueDate);
          const invoiceDate = new Date(record.invoiceDate);
          const dueDate = new Date(record.dueDate);

          // Check if the last payment balance is 0 (Paid)
          if (lastPayment.balance === 0) {
            return <span className={`badge bg-success-light`}>Paid</span>;
          } else if (invoiceDate > dueDate) {
            // If the balance is not 0 and invoice date is later than due date, consider it as overdue
            const overdueDays = Math.floor(
              (invoiceDate - dueDate) / (1000 * 60 * 60 * 24)
            );
            return (
              <span className={`badge bg-danger-light`}>
                Overdue by {overdueDays} days
              </span>
            );
          } else {
            // If the balance is not 0 and invoice date is not later than due date, consider it as partially paid
            return (
              <span className={`badge bg-warning-light`}>Partially Paid</span>
            );
          }
        } else {
          // If there are no payments, consider it as unpaid
          return <span className={`badge bg-success-light`}>Unpaid</span>;
        }
      },
    },

    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   render: (text, record) => (
    //     <>
    //       <div className="text-end">
    //         <div className="dropdown dropdown-action">
    //           <Link
    //             to="#"
    //             className="btn-action-icon"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             <i className="fas fa-ellipsis-v" />
    //           </Link>
    //           <div className="dropdown-menu dropdown-menu-end">
    //             <Link className="dropdown-item" to="/edit-invoice">
    //               <i className="far fa-edit me-2" />
    //               Edit
    //             </Link>
    //             <Link
    //               className="dropdown-item"
    //               to={`/invoice-details/${record._id}`}
    //             >
    //               <i className="far fa-eye me-2" />
    //               View
    //             </Link>
    //             <Link
    //               className="dropdown-item"
    //               to="#"
    //               data-bs-toggle="modal"
    //               data-bs-target="#delete_modal"
    //             >
    //               <i className="far fa-trash-alt me-2" />
    //               Delete
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ),
    //   sorter: (a, b) => a.action.length - b.action.length,
    // },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <div className="text-end">
            <div className="dropdown dropdown-action">
              <Link
                to="#"
                className="btn-action-icon"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link
                  className="dropdown-item"
                  to={`/edit-invoice/${record._id}`}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to={`/invoice-details/${record._id}`}
                >
                  <i className="far fa-eye me-2" />
                  View
                </Link>
                <button
                  className="dropdown-item"
                  onClick={() => confirmDeleteInvoice(record._id)}
                >
                  <i className="far fa-trash-alt me-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ),
      sorter: (a, b) => a.action.length - b.action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <InvoiceHead setShow={setShow} show={show} />

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/invoices" className="active">
                            All Invoice
                          </Link>
                        </li>
                        <li>
                          <Link to="/invoice-paid">Paid</Link>
                        </li>
                        <li>
                          <Link to="/invoice-overdue">Overdue</Link>
                        </li>
                        <li>
                          <Link to="/invoice-draft">Draft</Link>
                        </li>
                        <li>
                          <Link to="/invoice-recurring">Recurring</Link>
                        </li>
                        <li>
                          <Link to="/invoice-cancelled">Cancelled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body invoiceList">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={datasource}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Invoice</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="reset"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </button>
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

export default InvoiceList;
s