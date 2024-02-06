import React from "react";
import { InvoiceLogo1, signature } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const FlightBookingInvoice = () => {
  return (
    <>
      <div className="main-wrapper flight-booking">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <h2>Dreams Flights</h2>
                </div>
                <div className="inv-header-right">
                  <Link to="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="flight-invoice-details">
                <h3>Tax Invoice</h3>
                <div className="invoice-infomation">
                  <div>
                    Date: <span>05/12/2022</span>
                  </div>
                  <div>
                    Journey Date: <span>05/01/2023</span>
                  </div>
                  <div>
                    Invoice No: <span>#00001</span>
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
                <div className="invoice-to">
                  <span>Pay To:</span>
                  <div className="inv-to-address">
                    Lowell H. Dominguez
                    <br /> 84 Spilman Street, London
                    <br />
                    United Kingdom
                    <br />
                    lowell@example.com
                    <br />
                    +45 5421 2154
                  </div>
                </div>
              </div>
              <div className="passenger-info">
                <div className="passenger-details">
                  <h5>Passenger &amp; Ticket infomation</h5>
                  <div>
                    Passenger Name <span>Jennifer Richards </span>
                  </div>
                  <div>
                    Ticket Number<span>#SM75692</span>
                  </div>
                  <div>
                    Issued By Date <span>05 Feb 2022</span>
                  </div>
                  <div>
                    Booking Reference<span>HC76SW</span>
                  </div>
                </div>
                <div className="payment-info me-0">
                  <h5>Payment Information</h5>
                  <div>
                    Payment Gatway <span>American Express</span>
                  </div>
                  <div>
                    Date<span>25 Dec 2022</span>
                  </div>
                  <div>
                    Transaction ID <span>SI2534687</span>
                  </div>
                  <div>
                    Total Amount<span> $2440</span>
                  </div>
                </div>
              </div>
              <div className="invoice-table">
                <h6 className="invoice-title">Travel Information</h6>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="table_width_1">#</th>
                        <th className="table_width_2">Flight Details</th>
                        <th className="text-center">Class</th>
                        <th className="text-center">Base Fare</th>
                        <th className="text-end table_width_4">Tax Amount</th>
                        <th className="text-end table_width_4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Air canada 1S-2539 Toronto- New York
                          <span>Date: 25 Dec 2022, Sat 8:30AM</span>
                        </td>
                        <td className="text-center">Business Seat</td>
                        <td className="text-center">15,677.15</td>
                        <td className="text-end">2,821.88(18%)</td>
                        <td className="text-end">18,499.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description ">
                          {" "}
                          Air canada 1S-2539 Toronto- New York
                          <span>Date: 25 Dec 2022, Sat 8:30AM</span>
                        </td>
                        <td className="text-center">Economy Seat</td>
                        <td className="text-center">2,541.53</td>
                        <td className="text-end">457.48(18%)</td>
                        <td className="text-end">2,999.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer">
                <div className="table-footer-left notes"></div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td>Taxable Amount</td>
                        <td>₹18,218.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer">
                <div className="table-footer-left notes">
                  <span />
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td>IGST 18.0%</td>
                        <td>₹3,279.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=" invoice-table-footer totalamount-footer">
                <div className="table-footer-left">
                  <span className="total-item">
                    Total Items / Qty : 2 / 2.00
                  </span>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Total</td>
                        <td className="invoice-title">₹21,498.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer payable-table">
                <div className="table-footer-left notes">
                  Total amount ( in words):{" "}
                  <span>
                    {" "}
                    $ Twenty-One Thousand, Four Hundred and Ninety-Eight Only.
                  </span>
                </div>
                <div className="text-end table-footer-right amount-payable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Amount Payable</td>
                        <td className="invoice-title">₹21,498.00</td>
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

export default FlightBookingInvoice;
