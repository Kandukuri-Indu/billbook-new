import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/imagepath";

const TrainTicketBooking = () => {
    
  return (
    <>
      <div className="main-wrapper train-ticket">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <h2>Tax Invoice</h2>
                </div>
                <div className="inv-header-right">
                  <Link href="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="flight-invoice-details">
                <div className="bus-booking-address">
                  <div className="booked-add">
                    Dreams Railways
                    <span>
                      299 Star Trek Drive, Panama City, Florida, 32405, USA
                    </span>
                  </div>
                  <div className="booked-add info">
                    Info:
                    <p>
                      Seating is on a first come, first served basis unless you
                      have purchased ticket for a Reserved Seating performance.
                      Please arrive early for best seat section.
                    </p>
                  </div>
                </div>
                <div className="invoice-infomation">
                  <div>
                    Date: <span>05/12/2022</span>
                  </div>
                  <div>
                    Journey Date: <span>05/01/2023</span>
                  </div>
                  <div className="me-0">
                    Invoice No: <span>#00001</span>
                  </div>
                </div>
                <div className="invoice-infomation mb-0">
                  <div className="station">
                    <div className="station-info">
                      <div className="point-img">
                        <img src="assets/img/destination-bg.png" alt="" />
                      </div>
                      <div className="station-details">
                        <span>From Station:</span>
                        <span className="destination mb-0">
                          Acton GTR 3:00PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="station">
                    <div className="station-info">
                      <div className="point-img">
                        <img src="assets/img/destination-bg.png" alt="" />
                      </div>
                      <div className="station-details">
                        <span>To Station:</span>
                        <span className="destination mb-0">
                          Acton GWR 4:30PM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="station me-0 seat-details">
                    <div>
                      <span>Seat No</span>
                      <span className="destination invoice-title mb-0">
                        SBA1, SBA2, A30
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="passenger-ticket-details">
                <h5 className="invoice-title">
                  <span>Passenger &amp; Ticket infomation</span>{" "}
                  <div className="ticket-title-bg" />
                </h5>
                <div className="passenger-info">
                  <div className="passenger-details">
                    <div>
                      Passenger Name: <span>Jennifer Richards </span>
                    </div>
                    <div>
                      Email:<span>Jenni@example.com </span>
                    </div>
                    <div>
                      Ticket Number: <span>#SM98765 </span>
                    </div>
                    <div>
                      Adult: <span>03</span>
                    </div>
                    <div>
                      Child: <span>01</span>
                    </div>
                  </div>
                  <div className="payment-info me-0">
                    <div>
                      Phone: <span>+91 79845 61324</span>
                    </div>
                    <div>
                      Address :{" "}
                      <span>15 Hodges Mews, High Wycombe HP12 3JL United </span>
                    </div>
                    <div>
                      PNR Code : <span>Kingdom</span>
                    </div>
                    <div>
                      Train Name : <span>M6DZT</span>
                    </div>
                    <div>
                      Issued Date : <span>Dreams Railway</span>
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
                        <th className="table_width_2">Train Details</th>
                        <th className="text-center">Base Fare</th>
                        <th className="text-end table_width_4">Qty</th>
                        <th className="text-end table_width_4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Dreams Railways., - Business Seat
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
                          Dreams Railways., - Economy Seat
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
              <FeatherIcon icon="download-cloud" className="me-1" />{" "}
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

export default TrainTicketBooking;
