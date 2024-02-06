import React from "react";
import FeatherIcon from "feather-icons-react";
import { InvoiceLogo1, signature } from "../_components/imagepath";

const Ecommerce = () => {
  return (
    <>
      <div className="main-wrapper e-commerce">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <div className="invoice-title tax-invoice">TAX INVOICE</div>
                  <div className="company-details">
                    <span className="company-name invoice-title">
                      Dreamguys
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
                <div className="invoice-to">
                  <span>Billing Address:</span>
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
                  <span>Shipping Address:</span>
                  <div className="inv-to-address">
                    Lowell H. Dominguez
                    <br /> 84 Spilman Street, London
                    <br />
                    United King
                    <br />
                    domlowell@example.com
                    <br />
                    +45 5421 2154
                  </div>
                </div>
              </div>
              <div className="invoice-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr className="ecommercetable">
                        <th className="table_width_1">#</th>
                        <th className="table_width_2">Item</th>
                        <th className="text-center">Rate/Item</th>
                        <th className="text-center">Qty</th>
                        <th className="text-center">Tax Value</th>
                        <th className="text-center">Tax Amount</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Samsung Galaxy M32 Prime Edition...
                          <span>( Light Blue, 4GB RAM, 64GB )</span>
                        </td>
                        <td className="text-center">15,677.10</td>
                        <td className="text-center">1</td>
                        <td className="text-center">15,677.15</td>
                        <td className="text-center">2,821.88(18%)</td>
                        <td className="text-end">18,499.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description ">
                          {" "}
                          OPPO A74 5G...
                          <span>( Fluid Black, 6GB RAM, 128GB Storage )</span>
                        </td>
                        <td className="text-center">2,541.53</td>
                        <td className="text-center">1</td>
                        <td className="text-center">2,541.53</td>
                        <td className="text-center">457.48(18%)</td>
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
              <div className="invoice-table-footer">
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
              <div className="total-amountdetails">
                <p>
                  Total amount ( in words):{" "}
                  <span>
                    {" "}
                    Twenty-One Thousand, Four Hundred and Ninety-Eight Only.
                  </span>
                </p>
              </div>
              <div className="bank-details">
                <div className="account-info">
                  <span className="bank-title">Bank Details</span>
                  <div className="account-details">
                    Bank : <span>YES Bank</span>
                  </div>
                  <div className="account-details">
                    Account # :<span> 6677889944551 </span>
                  </div>
                  <div className="account-details">
                    IFSC : <span>YESBBIN4567</span>
                  </div>
                  <div className="account-details">
                    BRANCH : <span>RS Puram</span>
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

export default Ecommerce;
