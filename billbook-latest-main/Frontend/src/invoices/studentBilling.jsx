import React from "react";
import { InvoiceLogo1, signature } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const StudentBilling = () => {
  return (
    <>
      <div className="main-wrapper student-billing">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <Link to="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </Link>
                </div>
                <div className="inv-header-right">
                  <h2>UNIVERSITY NAME</h2>
                </div>
              </div>
              <div className="flight-invoice-details">
                <h3>Tax Invoice</h3>
                <div className="invoice-infomation">
                  <div>
                    Student Name : <span>Walter Roberson</span>
                  </div>
                  <div>
                    Student ID : <span>DD465123</span>
                  </div>
                  <div>
                    Term : <span>Winter</span>
                  </div>
                </div>
                <div className="invoice-infomation mb-0">
                  <div>
                    Balance Due : <span>$1815</span>
                  </div>
                  <div>
                    Due Date <span>05/01/2023</span>
                  </div>
                  <div>
                    Statement For : <span>2023 Spring</span>
                  </div>
                </div>
              </div>
              <div className="invoice-address">
                <div className="invoice-to">
                  <span>Bill To:</span>
                  <div className="inv-to-address">
                    Walter Roberson
                    <br />
                    299 Star Trek Drive, Panama City, <br />
                    Florida, 32405, USA.
                    <br />
                    walter@example.com <br />
                    +45 5421 4523
                  </div>
                </div>
              </div>
              <div className="invoice-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="table_width_2">Details</th>
                        <th className="">Due Date</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-description"> Semester Fee</td>
                        <td className="">28 March 2022</td>
                        <td className="text-end">$350</td>
                      </tr>
                      <tr>
                        <td className="table-description"> Exam Fee</td>
                        <td className="">28 March 2022</td>
                        <td className="text-end">$600</td>
                      </tr>
                      <tr>
                        <td className="table-description"> Transport Fee</td>
                        <td className="">28 March 2022</td>
                        <td className="text-end">$400</td>
                      </tr>
                      <tr>
                        <td className="table-description"> Hostel Fee</td>
                        <td className="">28 March 2022</td>
                        <td className="text-end">$300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer discount-table">
                <div className="table-footer-left notes">
                  <span>Important Note:</span>{" "}
                  <div className="delivery-notes">
                    Delivery dates are not guaranteed and Seller has no
                    liability for damages that may be incurred due to any delay.
                  </div>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td>Taxable Amount</td>
                        <td>$1650.00</td>
                      </tr>
                      <tr>
                        <td>Discount</td>
                        <td>+ $0.00</td>
                      </tr>
                      <tr>
                        <td>GST 18.0% </td>
                        <td>$165.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer payable-table">
                <div className="table-footer-left notes">
                  <span>Total amount ( in words):</span> USD One Thousand Eight
                  Hundred Fifteen Only.
                </div>
                <div className="text-end table-footer-right amount-payable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Amount Payable</td>
                        <td className="invoice-title">$1815.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bank-details">
                <div className="payment-info">
                  <span className="payment-title">Payment Info:</span>
                  <div>
                    <span>Debit Card :</span> 465 *************645
                  </div>
                  <div>
                    <span>Amount :</span> $1,815
                  </div>
                </div>
                <div className="company-sign">
                  <span>For Dreamguys</span>
                  <img src={signature} alt="" />
                </div>
              </div>
              <div className="terms-condition">
                <span>Terms and Conditions:</span>
                <p>
                  Here we can write a additional notes for the client to get a
                  better understanding of this invoice.
                </p>
              </div>
              <div className="thanks-msg text-center">
                Thanks for your Business
              </div>
            </div>
          </div>
          <div className="file-link">
            <button className="download_btn download-link">
              <FeatherIcon icon="download-cloud" className="me-1" />
              <span>Download</span>
            </button>
            <a href="javascript:window.print()" className="print-link">
              {/* <i className="feather-printer" /> */}
              <FeatherIcon icon="printer" className="me-2"/>
               <span className="">Print</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentBilling;
