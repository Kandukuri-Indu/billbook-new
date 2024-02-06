import React from "react";
import { InvoiceLogo, InvoiceLogo1, signature } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const BusTicket = () => {
  return (
    <>
      <div className="main-wrapper bus-ticket">
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
                  <h2>Dreams Bus</h2>
                </div>
              </div>
              <div className="flight-invoice-details">
                <div className="bus-booking-address">
                  <div className="booked-add">
                    Dreams Bus Line Pvt Ltd.
                    <span>
                      299 Star Trek Drive, Panama City, Florida, 32405, USA
                    </span>
                  </div>
                  <h3>Tax Invoice</h3>
                </div>
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
              <div className="passenger-ticket-details">
                <h5 className="invoice-title">
                  Passenger &amp; Ticket infomation
                </h5>
                <div className="passenger-info">
                  <div className="passenger-details">
                    <div>
                      Passenger Name <span>Jennifer Richards </span>
                    </div>
                    <div>
                      Seat Number<span>SBA1, SBA2, A30</span>
                    </div>
                  </div>
                  <div className="payment-info me-0">
                    <div>
                      Journey Date <span>05 Feb 2022 </span>
                    </div>
                    <div>
                      Ticket Number<span>#SM75692</span>
                    </div>
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
                        <th className="table_width_2">Bus Details</th>
                        <th className="text-center">Bus Fare</th>
                        <th className="text-end table_width_4">Qty</th>
                        <th className="text-end table_width_4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Dreams Bus Line Pvt Ltd., - Business Seat
                          <span>Date: 25 Dec 2022, Sat 8:30AM</span>
                        </td>
                        <td className="text-center">$560</td>
                        <td className="text-end">1</td>
                        <td className="text-end">$560</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description ">
                          {" "}
                          Dreams Bus Line Pvt Ltd., - Economy Seat
                          <span>Date: 25 Dec 2022, Sat 8:30AM</span>
                        </td>
                        <td className="text-center">$240</td>
                        <td className="text-end">1</td>
                        <td className="text-end">$240</td>
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
                        <td>₹800</td>
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
                        <td>$144</td>
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
                        <td className="invoice-title">$944</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer payable-table">
                <div className="table-footer-left notes">
                  Total amount ( in words):{" "}
                  <span>USD Nine Hundred Forty-Four Dollars Only.</span>
                </div>
                <div className="text-end table-footer-right amount-payable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Amount Payable</td>
                        <td className="invoice-title">$944</td>
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
            <FeatherIcon icon="download-cloud" className="me-1"/>
              {" "}
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

export default BusTicket;
