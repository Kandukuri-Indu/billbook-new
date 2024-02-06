import React, { useState, useEffect, useRef } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import { DetailsLogo, signature } from "../_components/imagepath";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { Dropdown, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaShare } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const InvoicedetailsTemplate = ({invoiceDetails}) => {
  const { id } = useParams();
  console.log(id, "id");
  const [menu, setMenu] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  console.log("ivoice by id", invoiceDetails);

  const [paymentAmount, setPaymentAmount] = useState("");
  console.log("payment amount", paymentAmount);
  const [paymentDate, setPaymentDate] = useState(new Date());
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [LastPaymentBalance, setLastPaymentBalance] = useState(0);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const openDatePicker = () => {
    datepickerRef.setOpen(true);
  };
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  // useEffect(() => {
  //   setBalance(invoiceDetails.payments)
  // })

  // const handleWhatsAppShare = () => {
  //   const phoneNumber = '7993852051';
  //   const message = 'Hello, check out this invoice: [link-to-your-invoice]';

  //   const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  //   window.open(whatsappUrl);

  //   console.log('Share via WhatsApp');
  // };

  const handleWhatsAppShare = () => {
    const phoneNumber = "7993852051";
    const invoiceDownloadLink = `http://localhost:8000/invoices/invoice_${id}.pdf`; // Replace with the actual local URL to your invoice file
    const message = `Hello, check out this invoice: ${invoiceDownloadLink}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl);

    console.log("Share via WhatsApp");
  };

  // const handleEmailShare = () => {
  //   const email = "chandinip859@gmail.com";
  //   const subject = "Check out this invoice";
  //   const body = "Hello, check out this invoice: [link-to-your-invoice]";
  //   const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;
  //   window.location.href = emailUrl;

  //   console.log("Share via Email");
  // };

  
  // const invoiceData = /* your invoice data here */;

  

  const addressLine1 =
    invoiceDetails?.customerName?.billingAddress?.addressLine1;
  const addressLine2 =
    invoiceDetails?.customerName?.billingAddress?.addressLine2;
  const city = invoiceDetails?.customerName?.billingAddress?.city;
  const country = invoiceDetails?.customerName?.billingAddress?.country;
  const name = invoiceDetails?.customerName?.billingAddress?.name;
  const pincode = invoiceDetails?.customerName?.billingAddress?.pincode;
  const state = invoiceDetails?.customerName?.billingAddress?.state;
  const email = invoiceDetails?.customerName?.email;

  useEffect(() => {
    const fetchInvoiceDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/addInvoice/invoices/${id}`
        );
        setInvoiceDetails(response.data);
        const lastPaymentBalance =
          response.data.payments.length > 0
            ? response.data.payments[response.data.payments.length - 1].balance
            : response.data.grandTotal;

        // Set the balance to a separate variable
        setLastPaymentBalance(lastPaymentBalance);
        setPaymentAmount(response.data.grandTotal);
        console.log("Fetched Invoice Details:", response.data);
      } catch (error) {
        console.error("Error fetching invoice details:", error);
      }
    };

    fetchInvoiceDetails();
  }, [id]);

  console.log("invoiceDetails:", invoiceDetails);

  const [customerEmail, setCustomerEmail] = useState(email);
   const invoiceData = invoiceDetails;


  const handleSendInvoice = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/addInvoice/sendInvoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customerEmail, invoiceData }),
      });

      if (response.ok) {
        console.log('Invoice sent successfully');
      } else {
        console.error('Failed to send invoice');
      }
    } catch (error) {
      console.error('Error sending invoice', error);
    }
  };

  useEffect(() => {
    setIsSaveDisabled(parseFloat(balance) === 0);
  }, [balance]);

  const openPaymentInModal = () => {
    $("#paymentInModal").modal("show");
  };

  const handlePaymentInLinkClick = (e) => {
    e.preventDefault();
    openPaymentInModal();
  };

  //
  const handleSavePayment = async () => {
    const paymentData = {
      invoiceId: id,
      paymentAmount: paymentAmount,
      paymentDate: paymentDate,
      paymentType: paymentMethod,
      notes: notes,
      paymentStatus: "Paid",
      amount: amount,
      balance: balance,
    };
  
    try {
      const initialResponse = await fetch(
        "http://localhost:8000/api/paymentDetails/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );
  
      const paymentStatus = balance === 0 ? "Paid" : "Partially Paid";
  
      const updatedPaymentData = {
        ...paymentData,
        paymentStatus: paymentStatus,
      };
  
      try {
        const updatedResponse = await fetch(
          "http://localhost:8000/api/paymentDetails/payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPaymentData),
          }
        );
  
        if (updatedResponse.ok) {
          console.log("Payment successfully saved:", updatedPaymentData);
        } else {
          console.error("Failed to save payment:", updatedResponse.statusText);
        }
      } catch (error) {
        console.error("Error saving payment:", error);
      }
    } catch (error) {
      console.error("Error saving payment:", error);
    }
  };
  
  useEffect(() => {
    setIsSaveDisabled(false); 
  }, [amount]); 
  


  const handleAmountChange = (e) => {
    const enteredAmount = e.target.value;
    setAmount(enteredAmount);

    const newBalance =
      parseFloat(LastPaymentBalance) - parseFloat(enteredAmount);

    setBalance(isNaN(newBalance) ? 0 : newBalance.toFixed(2));
  };

  const [invoiceDownloadLink, setInvoiceDownloadLink] = useState("");

  const invoiceContentRef = useRef(null);
  const handleDownloadPDF = () => {
    const content = invoiceContentRef.current;

    console.log(content, "hhhhhhhhhhhhhhhhhh");

    if (content) {
      const pdfOptions = {
        margin: 5,
        filename: `invoice_${id}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          putOnlyUsedFonts: true,
        },
      };

      html2pdf().from(content).set(pdfOptions).save();
    }
  };

  console.log(
    "Signature Image URL:",
    invoiceDetails?.bankDetails?.signatureImage?.url
  );
  const [signatureImageData, setSignatureImageData] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      const imageData = await fetchSignatureImage();
      setSignatureImageData(imageData);
    };

    fetchImageData();
  }, []);
  const fetchSignatureImage = async () => {
    try {
      const response = await fetch(
        invoiceDetails?.bankDetails?.signatureImage?.url
      );
      const imageData = await response.blob();
      console.log("signature", response);
    } catch (error) {
      console.error("Error fetching signature image:", error);
    }
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}

            <div className="page-header">
              <div className="content-invoice-header">
                <h5>Invoice Details</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      {/* Update the Payment In link */}
                      <Link
                        to="#"
                        className="btn btn-payment-in me-2"
                        onClick={handlePaymentInLinkClick}
                      >
                        <FeatherIcon icon="dollar-sign" className="me-2" />
                        Payment In
                      </Link>
                    </li>
                    <li>
                      <a
                        href="javascript:window.print()"
                        className="print-link btn btn-primary"
                      >
                        <FeatherIcon icon="printer" className="me-2" />
                        <span>Print</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="download-link btn btn-primary"
                        download=""
                        onClick={handleDownloadPDF}
                      >
                        <i className="fa fa-download me-2" aria-hidden="true" />
                        <span>Download</span>
                      </Link>
                    </li>

                    <li>
                      <Dropdown>
                        <Dropdown.Toggle variant="primary" id="shareDropdown">
                          <FaShare className="me-2" /> Share
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleWhatsAppShare}>
                            <FaWhatsapp className="me-2" /> WhatsApp
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleSendInvoice}>
                            <FaEnvelope className="me-2" /> Email
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Add the Payment In modal */}
            <div
              className="modal fade"
              id="paymentInModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="paymentInModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="paymentInModalLabel">
                      Record Payment for this Invoice
                    </h5>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="paymentAmount" className="form-label">
                        Payment Amount
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="paymentAmount"
                        placeholder="Enter payment amount"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        value={paymentAmount}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="amount"
                        placeholder="Enter amount"
                        onChange={handleAmountChange}
                        value={amount}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="balance" className="form-label">
                        Balance
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="balance"
                        placeholder="Balance"
                        // defaultValue={amount}
                        readOnly
                        value={LastPaymentBalance}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="paymentDate" className="form-label">
                        Payment Date
                      </label>
                      <div className="input-group">
                        <DatePicker
                          selected={paymentDate}
                          onChange={(date) => setPaymentDate(date)}
                          className="form-control"
                          placeholderText="Select payment date"
                        />
                        <span className="input-group-text">
                          <MdOutlineDateRange />
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="paymentMethod" className="form-label">
                        Payment Method
                      </label>
                      <select
                        id="paymentMethod"
                        className="form-select"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        value={paymentMethod}
                      >
                        <option value="">Select payment method</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank">Bank</option>
                        <option value="Cheque">Cheque</option>
                        {/* <option value="Partial Payment">Partial payment</option> */}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="notes" className="form-label">
                        Notes
                      </label>
                      <textarea
                        id="notes"
                        className="form-control"
                        rows="4"
                        placeholder="Enter notes"
                        onChange={(e) => setNotes(e.target.value)}
                        value={notes}
                      ></textarea>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <button
                      type="button"
                      className={`btn btn-primary ${
                        isSaveDisabled ? "disabled" : ""
                      }`}
                      onClick={handleSavePayment}
                      disabled={isSaveDisabled}
                    >
                      Save Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`print-only-section ${menu ? "slide-nav" : ""}`}
              ref={invoiceContentRef}
            >
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-table">
                        <div className="card-body">
                          {/* Invoice Logo */}
                          <div className="invoice-item invoice-item-one">
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <div className="invoice-logo">
                                  <img src="/logo1.svg" alt="logo" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="invoice-info">
                                  <h1>Invoice</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Invoice Logo */}
                          {/* Invoice Date */}
                          <div className="invoice-item invoice-item-date">
                            <div className="row">
                              <div className="col-md-6">
                                {invoiceDetails && (
                                  <p className="text-start invoice-details">
                                    Date<span>: </span>
                                    {/* {invoiceDetails.invoiceDate} */}
                                    {/* Assuming invoiceDetails.invoiceDate is in ISO format */}
                                    {/* {invoiceDetails.invoiceDate && ( */}
                                    <>
                                      {/* {" "} */}
                                      {/* (Formatted:{" "} */}
                                      {new Date(
                                        invoiceDetails.invoiceDate
                                      ).toLocaleDateString("en-GB", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                      })}
                                      {/* ) */}
                                    </>
                                  </p>
                                )}
                              </div>
                              <div className="col-md-6">
                                {invoiceDetails && (
                                  <p className="invoice-details">
                                    Invoice No<span>: </span>
                                    {invoiceDetails.invoiceNumber}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                          {/* /Invoice Date */}
                          {/* Invoice To */}
                          <div className="invoice-item invoice-item-two">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="invoice-info">
                                  <strong className="customer-text-one">
                                    Invoiced To<span>:</span>
                                  </strong>
                                  {invoiceDetails && (
                                    <p className="invoice-details-two">
                                      {`${name}`}, <br /> {`${addressLine1}`},{" "}
                                      {`${addressLine2}`}, {`${city}`}, <br />{" "}
                                      {`${state} ${pincode}`}, <br />{" "}
                                      {`${country}`}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="invoice-info">
                                  <strong className="customer-text-one">
                                    Bank Details<span>:</span>
                                  </strong>
                                  {
                                    invoiceDetails?.bankDetails?.selectBank
                                      ?.bankName
                                  }
                                  , <br />
                                  {
                                    invoiceDetails?.bankDetails?.selectBank
                                      ?.accountNumber
                                  }
                                  , <br />
                                  {
                                    invoiceDetails?.bankDetails?.selectBank
                                      ?.branchName
                                  }
                                  , <br />
                                  {
                                    invoiceDetails?.bankDetails?.selectBank
                                      ?.IFSCCode
                                  }
                                  {/* {invoiceDetails && (
                                  <p className="invoice-details-two">
                                    {`${name}`}, <br /> {`${addressLine1}`},{" "}
                                    {`${addressLine2}`}, {`${city}`}, <br />{" "}
                                    {`${state} ${pincode}`}, <br />{" "}
                                    {`${country}`}
                                  </p>
                                )} */}
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="invoice-info invoice-info2">
                                  <strong className="customer-text-one">
                                    Pay To<span>:</span>
                                  </strong>
                                  <p className="invoice-details-two text-end">
                                    Walter Roberson
                                    <br />
                                    299 Star Trek Drive, Panama City,
                                    <br />
                                    Florida, 32405,
                                    <br />
                                    USA
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /Invoice To */}
                          {/* Invoice Item */}
                          <div className="invoice-item invoice-table-wrap">
                            <div className="invoice-table-head">
                              <h6>Items:</h6>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                {invoiceDetails && invoiceDetails.table ? (
                                  <div className="table-responsive">
                                    <table className="table table-center table-hover mb-0">
                                      <thead className="thead-light">
                                        <tr>
                                          {/* <th>Product ID</th> */}
                                          <th>Product Name</th>
                                          <th>Price</th>
                                          <th>Quantity</th>
                                          <th>Discount</th>
                                          <th>Tax</th>
                                          <th>Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {invoiceDetails.table.map(
                                          (item, index) => (
                                            <tr key={index}>
                                              {/* <td>{item.productId}</td> */}
                                              <td>{item.productName}</td>

                                              <td>{item.price}</td>
                                              <td>{item.quantity}</td>
                                              <td>{item.discount}</td>
                                              <td>{item.gstRate}</td>
                                              <td>
                                                {item.totalAmount.toFixed(2)}
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                ) : (
                                  <p>No items available</p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* /Invoice Item */}
                          {/* Terms & Conditions */}
                          <div className="terms-conditions credit-details">
                            <div className="row align-items-center justify-content-between">
                              <div className="col-lg-6 col-md-6">
                                <div className="invoice-terms align-center">
                                  <span className="invoice-terms-icon bg-white-smoke me-3">
                                    <i className="fe fe-file-text">
                                      <FeatherIcon icon="file-text" />
                                    </i>
                                  </span>
                                  <div className="invocie-note">
                                    <h6>Terms &amp; Conditions</h6>
                                    <p className="mb-0">
                                      {
                                        invoiceDetails?.bankDetails
                                          ?.termsAndConditions
                                      }
                                    </p>
                                  </div>
                                </div>
                                <div className="invoice-terms align-center">
                                  <span className="invoice-terms-icon bg-white-smoke me-3">
                                    <i className="fe fe-file-minus">
                                      <FeatherIcon icon="file-minus" />
                                    </i>
                                  </span>
                                  <div className="invocie-note">
                                    <h6>Note</h6>
                                    <p className="mb-0">
                                      {invoiceDetails?.bankDetails?.notes}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-5 col-md-6">
                                <div className="invoice-total-card">
                                  <div className="invoice-total-box">
                                    <div className="invoice-total-inner">
                                      <p>
                                        Taxable Amount
                                        <span>
                                          {invoiceDetails?.taxableAmount}
                                        </span>
                                      </p>
                                      <p>
                                        Total Discount (
                                        {
                                          invoiceDetails?.totalDiscountPercentage
                                        }
                                        %)
                                        <span>
                                          {invoiceDetails?.totalDiscount}
                                        </span>
                                      </p>
                                      <p>
                                        Total Tax (
                                        {invoiceDetails?.totalTaxPercentage}%)
                                        <span>{invoiceDetails?.totalTax}</span>
                                      </p>
                                      <p>
                                        CGST Amount (
                                        {invoiceDetails?.cgstTaxPercentage}%)
                                        <span>
                                          {invoiceDetails?.cgstTaxAmount}
                                        </span>
                                      </p>
                                      <p>
                                        SGST Amount (
                                        {invoiceDetails?.sgstTaxPercentage}%)
                                        <span>
                                          {invoiceDetails?.sgstTaxAmount}
                                        </span>
                                      </p>

                                      {/* <p>
                                      Vat <span>$0.00</span>
                                    </p> */}
                                    </div>
                                    <div className="invoice-total-footer">
                                      <h4>
                                        Grand Total(INR){" "}
                                        <span>
                                          {invoiceDetails?.grandTotal}
                                        </span>
                                      </h4>
                                      <h4>
                                        Currency{" "}
                                        <span>{invoiceDetails?.currency}</span>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-sign text-end">
                            <span className="d-block">
                              {invoiceDetails?.bankDetails?.signatureName}
                            </span>
                            <img
                              className="img-fluid d-inline-block"
                              src={
                                invoiceDetails?.bankDetails?.signatureImage?.url
                              }
                              alt="sign"
                            />
                          </div>

                          {/* /Terms & Conditions */}
                        </div>
                      </div>
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

export default InvoicedetailsTemplate;
