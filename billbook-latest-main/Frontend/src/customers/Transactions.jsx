import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { itemRender, onShowSizeChange } from "../_components/paginationfunction";

const Transactions = ({id}) => {

    const [customerDetails, setCustomerDetails] = useState(null);

    const [customerInvoiceDetails, setCustomerInvoiceDetails] = useState([]);
    const [customerPaymentDetails, setCustomerPaymentDetails] = useState([]);
    console.log("customerInvoiceDetails", customerInvoiceDetails);
    console.log("customerPaymentDetails", customerPaymentDetails);
    const customerid = customerDetails?.customerId;
    console.log("customerid", customerid);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/addCustomer/customers/${id}`
        );
        // const data = await response.json();
        setCustomerDetails(response.data);
        console.log("Fetched Customer Details:", response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, [id]);

    useEffect(() => {
        const fetchCustomerInvoiceDetails = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/addInvoice/invoicesbyCustomerId/${customerid}`
            );
            // const data = await response.json();
            setCustomerInvoiceDetails(response.data);
            console.log("Fetched Customer Details:", response.data);
          } catch (error) {
            console.error("Error fetching customer details:", error);
          }
        };
    
        fetchCustomerInvoiceDetails();
      }, [customerid]);

    useEffect(() => {
        const fetchCustomerPaymentDetails = async () => {
          try {
            const response = await axios.get(
              `http://localhost:8000/api/paymentDetails/paymentbycustomerid/${customerid}`
            );
            // const data = await response.json();
            setCustomerPaymentDetails(response.data);
            console.log("Fetched Customer Details:", response.data);
          } catch (error) {
            console.error("Error fetching customer details:", error);
          }
        };
    
        fetchCustomerPaymentDetails();
      }, [customerid]);

    const columns = [
        {
          title: "Invoice ID",
          dataIndex: "invoiceNumber",
          sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
        },
        {
          title: "Created On",
          dataIndex: "invoiceDate",
          sorter: (a, b) => a.invoiceDate.length - b.invoiceDate.length,
        },
        {
          title: "Vouchers",
          dataIndex: "invoiceName",
          sorter: (a, b) => a.invoiceName.length - b.invoiceName.length,
        },
        {
          title: "Total Amount / Balance",
          dataIndex: "totalAndBalance",
          render: (_, record) => (
            <>
              <span className="pe-2">{record.grandTotal}</span>
              {record.balance && <span>Unpaid({record.balance})</span>}
            </>
          ),
        },
        {
          title: "Due Date",
          dataIndex: "dueDate",
          sorter: (a, b) => a.dueDate.length - b.dueDate.length,
        },
        {
          title: "Action",
          dataIndex: "Action",
          render: (text, record) => (
            <>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className=" btn-action-icon "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="dropdown-item"
                        onClick={() => handleDelete(record)}
                      >
                        <i className="far fa-trash-alt me-2"></i>
                        Delete
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-details-paid">
                        <i className="far fa-bell me-2"></i>
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-details-cancel">
                        <i className="far fa-bell-slash me-2"></i>
                        In Active
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
          sorter: (a, b) => a.Action.length - b.Action.length,
        },
      ];
    const paymentcolumns = [

        {
          title: "amount",
          dataIndex: "amount",
          sorter: (a, b) => a.amount.length - b.amount.length,
        },
        {
          title: "Action",
          dataIndex: "Action",
          render: (text, record) => (
            <>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className=" btn-action-icon "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="dropdown-item"
                        onClick={() => handleDelete(record)}
                      >
                        <i className="far fa-trash-alt me-2"></i>
                        Delete
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-details-paid">
                        <i className="far fa-bell me-2"></i>
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer-details-cancel">
                        <i className="far fa-bell-slash me-2"></i>
                        In Active
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ),
          sorter: (a, b) => a.Action.length - b.Action.length,
        },
      ];


  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card-table">
          <div className="card-body">
            <div className="table-responsive table-hover customer-details table-striped">
              <Table
                pagination={{
                  total: customerInvoiceDetails.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                rowSelection={rowSelection}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={customerInvoiceDetails}
                expandedRowKeys={[]}
              />
              <Table
                pagination={{
                  total: customerPaymentDetails.length,
                  showTotal: (total, range) =>
                    `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                  showSizeChanger: true,
                  onShowSizeChange: onShowSizeChange,
                  itemRender: itemRender,
                }}
                rowSelection={rowSelection}
                rowKey={(record) => record.id}
                columns={paymentcolumns}
                dataSource={customerPaymentDetails}
                expandedRowKeys={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
