import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/imagepath";

const HotelBooking = () => {
  return (
    <>
      <div className="main-wrapper hotel-booking">
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
                  <div className="company-details">
                    <div className="gst-details">
                      Address:
                      <span>
                        15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                      </span>
                    </div>
                    <div className="address-bg" />
                  </div>
                </div>
              </div>
              <h2 className="hotel-name">Dreams Hotel</h2>
              <div className="hotel-info">
                <div className="hotel-booking-details">
                  <div className="booked-info">
                    <span>Arrival Date</span>
                    <span>31-08-2022</span>
                  </div>
                  <div className="booked-info">
                    <span>Rate per Day/Ro0m</span>
                    <span>175</span>
                  </div>
                  <div className="booked-info">
                    <span>No of Rooms</span>
                    <span className="right-info">3</span>
                  </div>
                  <div className="booked-info">
                    <span>Departure Date</span>
                    <span>05-09-2022</span>
                  </div>
                  <div className="booked-info">
                    <span>No of adults</span>
                    <span>2</span>
                  </div>
                  <div className="booked-info">
                    <span>Room No.s</span>
                    <span className="right-info">181A, 182A</span>
                  </div>
                  <div className="booked-info">
                    <span>Total No of Days</span>
                    <span>2</span>
                  </div>
                  <div className="booked-info">
                    <span>No of Childrens</span>
                    <span>4</span>
                  </div>
                  <div className="booked-info">
                    <span>Others</span>
                    <span className="right-info">-</span>
                  </div>
                </div>
                <div className="hotel-booking-address">
                  <div className="invoice-to">
                    <span>Billing To:</span>
                    <div className="inv-to-address">
                      <span className="billing-name">Walter Roberson</span>
                      299 Star Trek Drive, Panama City, <br />
                      Florida, 32405,
                      <br />
                      USA.
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details">
                <h4>Service Details:</h4>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="dates">DATE</th>
                        <th className="services">SERVICES</th>
                        <th className="charged-amount">CHARGED AMOUNT</th>
                        <th className="discount">DISCOUNT</th>
                        <th className="total">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>31-08-2022</td>
                        <td>Special Menu</td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>60</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>150</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1-09-2022</td>
                        <td>Special Menu</td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>60</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>150</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2-09-2022</td>
                        <td>Special Menu</td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>60</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>150</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3-09-2022</td>
                        <td>Special Menu</td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>60</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>150</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="invoice-table-footer">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">TOTAL DISCOUNT</td>
                          <td className="">
                            <div>
                              $ <span>200.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-table-footer table-total-item">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right ">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">TOTAL AMOUNT</td>
                          <td className="">
                            <div>
                              $ <span>600.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h4>Room Details:</h4>
                <div className="table-responsive room-detail-table">
                  <table>
                    <thead>
                      <tr>
                        <th className="dates">RATE/DAY</th>
                        <th className="rooms">NO OF ROOMS</th>
                        <th className="description">DESCRIPTION</th>
                        <th className="charged-amount">AMOUNT</th>
                        <th className="discount">DISCOUNT</th>
                        <th className="total">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            $<span>120</span>
                          </div>
                        </td>
                        <td className="text-center">3</td>
                        <td>Personnal</td>
                        <td>
                          <div>
                            $<span>525</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>25</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>500</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            $<span>155</span>
                          </div>
                        </td>
                        <td className="text-center">4</td>
                        <td>Trip</td>
                        <td>
                          <div>
                            $<span>600</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>45</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>89,955</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="invoice-table-footer">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">TOTAL DISCOUNT</td>
                          <td className="">
                            <div>
                              $ <span>70.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-table-footer subtotal">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">SUBTOTAL</td>
                          <td className="">
                            <div>
                              $ <span>90,455</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-table-footer">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">SERVICE CHARGES</td>
                          <td className="">
                            <div>
                              $ <span>475</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-table-footer subtotal">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">SALES TAX</td>
                          <td className="">
                            <div>
                              % <span>5</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="invoice-table-footer table-total-item">
                  <div className="table-footer-left"></div>
                  <div className="text-end table-footer-right ">
                    <table>
                      <tbody>
                        <tr>
                          <td className="">TOTAL AMOUNT</td>
                          <td className="">
                            <div>
                              $ <span>600.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="terms-condition">
                <span>Terms and Conditions:</span>
                <ol>
                  <li> Goods Once sold cannot be taken back or exchanged</li>
                  <li>
                    
                    We are not the manufactures, company will stand for warrenty
                    as per their terms and conditions.
                  </li>
                </ol>
              </div>
              <div className="thanks-msg text-center">
                Thanks for your Business
              </div>
            </div>
          </div>
          <div className="file-link">
            <button className="download_btn download-link">
            <FeatherIcon icon="download-cloud" className="me-1"/>
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

export default HotelBooking;
