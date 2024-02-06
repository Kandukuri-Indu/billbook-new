import React from "react";
import FeatherIcon from "feather-icons-react";
import { InvoiceLogo1, signature } from "../_components/imagepath";

const FitnessCenter = () => {
  return (
    <>
      <div className="main-wrapper fitness-center">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <div className="invoice-title tax-invoice">TAX INVOICE</div>
                  <div className="company-details">
                    <span className="company-name invoice-title">
                      Dreamguys Fitness Center
                    </span>
                    <div className="gst-details">
                      GST IN: <span>22AABCU9603R1ZX</span>
                    </div>
                    <div className="gst-details">
                      Address:{" "}
                      <span>
                        5 Hodges Mews, High Wycombe HP12 3JL, United Kingdom
                      </span>
                    </div>
                    <div className="gst-details mb-0">
                      Mobile: <span>+ 91 98765 43210</span>
                    </div>
                  </div>
                </div>
                <div className="inv-header-right">
                  <a href="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </a>
                  <div className="inv-details">
                    <div className="inv-date">
                      Date: <span>5/12/2022</span>
                    </div>
                    <div className="inv-date mb-0">
                      Invoice No: <span>INV 00001</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice-address">
                <div className="invoice-to">
                  <span>Customer Details:</span>
                  <span className="invoice-title">John Williams</span>
                </div>
                <div className="grand-total">
                  <span>Grand Total</span>
                  <span>$270</span>
                </div>
              </div>
              <div className="invoice-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr className="fitness-center">
                        <th className="table_width_1">#</th>
                        <th className="table_width_2">Description</th>
                        <th className="text-center">Hours</th>
                        <th className="text-center">Price</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Swimming Instructor Fee
                        </td>
                        <td className="text-center">10</td>
                        <td className="text-center">$50</td>
                        <td className="text-end">$50</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description"> Morning Yoga</td>
                        <td className="text-center">6</td>
                        <td className="text-center">$50</td>
                        <td className="text-end">$50</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="table-description"> Massage Therapy</td>
                        <td className="text-center">10</td>
                        <td className="text-center">$100</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="table-description">Abs Workout</td>
                        <td className="text-center">10</td>
                        <td className="text-center">$100</td>
                        <td className="text-end">$100</td>
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
                        <td>$300.00</td>
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
                        <td>$30.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer">
                <div className="table-footer-left">
                  <span className="total-item">
                    Total Items / Qty : 4 / 4.00
                  </span>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Total</td>
                        <td className="invoice-title">$270.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer payable-table">
                <div className="table-footer-left notes">
                  Total amount ( in words):{" "}
                  <span>USD Two Hundred Seventy Dollars Only.</span>
                </div>
                <div className="text-end table-footer-right amount-payable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Amount Payable</td>
                        <td className="invoice-title">$270.00</td>
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
                <ol>
                  <li> Goods Once sold cannot be taken back or exchanged</li>
                  <li>
                    {" "}
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
              <FeatherIcon icon="download-cloud" className="me-1" />{" "}
              <span>Download</span>
            </button>
            <a href="javascript:window.print()" className="print-link">
              <FeatherIcon icon="printer" className="me-1" />
              <span className="">Print</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessCenter;
