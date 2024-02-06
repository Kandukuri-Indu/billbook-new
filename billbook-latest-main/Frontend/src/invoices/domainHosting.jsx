import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { InvoiceLogo1, signature } from "../_components/imagepath";

const DomainHosting = () => {
  return (
    <>
      <div className="main-wrapper domain-hosting">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <h2>Dreams Domain</h2>
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
                    Customer ID: <span>#326725</span>
                  </div>
                  <div>
                    Invoice Date: <span>05/01/2023</span>
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
              </div>
              <div className="service-details">
                <h4>Domain Details:</h4>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="services">DESCRIPTION</th>
                        <th className="charged-amount">PRICE</th>
                        <th className="discount">DISCOUNT</th>
                        <th className="total">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          1 Domain - (.com Domain Registration with SSL) 2
                          Yearsdomainname.com
                        </td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>50</span>
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
                          <td className=""> DISCOUNT 25%</td>
                          <td className="">
                            <div>
                              $ <span>50.00</span>
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
                              $ <span>150.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <h4>Hosting Details:</h4>
                <div className="table-responsive room-detail-table">
                  <table>
                    <thead>
                      <tr>
                        <th className="description">DESCRIPTION</th>
                        <th className="charged-amount">AMOUNT</th>
                        <th className="discount">DISCOUNT</th>
                        <th className="total">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          25 GB Hosting - (Business Package #SHP2564874) 2 Years
                        </td>
                        <td>
                          <div>
                            $<span>200</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            $<span>50</span>
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
                          <td className=""> DISCOUNT 25%</td>
                          <td className="">
                            <div>
                              $ <span>50.00</span>
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
                          <td className="">SUBTOTAL</td>
                          <td className="">
                            <div>
                              $ <span>150.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className=" invoice-table-footer totalamount-footer">
                <div className="table-footer-left">
                  <table>
                    <tbody>
                      <tr>
                        <td className="">SALES TAX 10%</td>
                        <td className="">
                          <div>
                            $ <span>90</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="">TOTAL AMOUNT</td>
                        <td className="">
                          <div>
                            $ <span>690</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer payable-table">
                <div className="table-footer-left notes">
                  Total amount ( in words):{" "}
                  <span>USD Six Hundred Ninety Dollars Only.</span>
                </div>
                <div className="text-end table-footer-right amount-payable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Amount Payable</td>
                        <td className="invoice-title">$690.00</td>
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
            <FeatherIcon icon="download-cloud" className="me-1"/>{" "}
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

export default DomainHosting;
