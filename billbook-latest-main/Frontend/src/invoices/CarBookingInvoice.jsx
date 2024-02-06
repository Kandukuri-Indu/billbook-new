import React from "react";
import { DestinationBg, InvoiceLogo1, InvoiceLogoWhite } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const CarBookingInvoice = () => {
  return (
    <>
      <div className="main-wrapper car-booking">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header ">
                <div className="inv-header-left">
                  <h2>Tax Invoice</h2>
                </div>
                <div className="inv-header-right">
                  <a href="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </a>
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
                        <img src={DestinationBg} alt="" />
                      </div>
                      <div className="station-details">
                        <div>
                          <span>
                            From:{" "}
                            <span className="from-add">
                              {" "}
                              Delta Hotel street,4th Ave
                            </span>
                          </span>
                        </div>
                        <div>
                          <span>
                            To:{" "}
                            <span className="from-add">
                              {" "}
                              Southgate LRT Bus Stop 2217
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="station">
                    <div className="station-info">
                      <div className="point-img">
                        <img src={DestinationBg} alt="" />
                      </div>
                      <div className="station-details">
                        <div>
                          <span>
                            Department Time :{" "}
                            <span className="from-add"> 8:30 AM</span>
                          </span>
                        </div>
                        <div>
                          <span>
                            Arrive Time :{" "}
                            <span className="from-add"> 12:30 PM</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="station me-0 days-detail">
                    <div>
                      <span>No of Days</span>
                      <span className="destination invoice-title mb-0">
                        15 Days
                      </span>
                    </div>
                    <div className="me-0">
                      <span> Upto</span>
                      <span className="destination invoice-title mb-0">
                        1500 Km
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="passenger-ticket-details">
                <div className="passenger-info">
                  <div className="passenger-details">
                    <h6 className="invoice-title">
                      <span>Hier's infomation</span>{" "}
                      <div className="ticket-title-bg" />
                    </h6>
                    <div className="passenger-details-display">
                      <div>
                        Hirer’s Name : <span>Jennifer Richards </span>
                      </div>
                      <div>
                        Passport NO : <span>JAA123456 </span>
                      </div>
                      <div>
                        Licence NO : <span>Toronto - G 28-26-23 </span>
                      </div>
                      <div>
                        {" "}
                        Date of birth : <span>05 Feb 1991</span>
                      </div>
                      <div>
                        Address :{" "}
                        <span>
                          440 Balmy Beach Road, Owen Sound, Ontario, Canada
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="passenger-details">
                    <h6 className="invoice-title">
                      <span>Car infomation</span>{" "}
                      <div className="ticket-title-bg" />
                    </h6>
                    <div className="passenger-details-display">
                      <div>
                        Car Model : <span>Lamborghini Aventador </span>
                      </div>
                      <div>
                        Type : <span>Aventador </span>
                      </div>
                      <div>
                        Licence NO : <span>LI-25345</span>
                      </div>
                      <div>
                        {" "}
                        Expire Date : <span> 05 Feb 2026</span>
                      </div>
                    </div>
                  </div>
                  <div className="passenger-details">
                    <h6 className="invoice-title">
                      <span>Driver infomation</span>{" "}
                      <div className="ticket-title-bg" />
                    </h6>
                    <div className="passenger-details-display">
                      <div>
                        Driver Name :<span>Jennifer Law </span>
                      </div>
                      <div>
                        Driving Licence : <span> LI-25345</span>
                      </div>
                      <div>
                        Expire Date : <span>05 Feb 2026 </span>
                      </div>
                      <div>
                        {" "}
                        Contact : <span>0+1-613-555-0141</span>
                      </div>
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
                        <th className="text-center">Base Fare</th>
                        <th className="text-end table_width_4">Qty</th>
                        <th className="text-end table_width_4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          Lamborghini Aventador - 15 Days - Driver Services -
                          Road Fee
                        </td>
                        <td className="text-center">$560</td>
                        <td className="text-end">1</td>
                        <td className="text-end">$560</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description">
                          Premium location fee
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
              <FeatherIcon icon="download-cloud" className="me-1"/>{" "}
              <span>Download</span>
            </button>
            <a href="javascript:window.print()" className="print-link">
              <FeatherIcon icon="printer" className="me-1"/> <span className="">Print</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarBookingInvoice;
