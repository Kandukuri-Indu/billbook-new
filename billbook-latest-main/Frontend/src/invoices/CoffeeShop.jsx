import React from "react";
import { InvoiceLogo1 } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const CoffeeShop = () => {
  return (
    <>
      <div className="main-wrapper coffee-shop">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <Link to="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </Link>
                  <div className="inv-details">
                    <div className="inv-date">
                      Date: <span>05/12/2022</span>
                    </div>
                    <div className="inv-date inv-no mb-0">
                      Invoice No: <span>INV 00001</span>
                    </div>
                  </div>
                </div>
                <div className="inv-header-right">
                  <div className="invoice-title tax-invoice">TAX INVOICE</div>
                  <div className="company-details">
                    <span className="company-name invoice-title">
                      Dreamguys Cafe
                    </span>
                    <div className="gst-details">
                      Address:{" "}
                      <span>
                        15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="invoice-address">
                <div className="invoice-to">
                  <span>Customer Info:</span>
                  <span className="invoice-title">John Williams</span>
                </div>
              </div>
              <div className="invoice-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr className="coffee-shop">
                        <th className="table_width_1">#</th>
                        <th className="table_width_2">Item</th>
                        <th className="text-center">Rate/Item</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          Colombia Dark Roast<span>22 July 2022 at 2.30pm</span>
                        </td>
                        <td className="text-center">$200</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$200</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description ">
                          Coffee Mug<span>22 July 2022 at 2.30pm</span>
                        </td>
                        <td className="text-center">$200</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$200</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="table-description ">
                          Medium Cafe Mocha<span>22 July 2022 at 2.30pm</span>
                        </td>
                        <td className="text-center">$200</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer border border-0 py-0">
                <div className="table-footer-left notes"></div>
                <div className="text-end table-footer-right ">
                  <table>
                    <tbody>
                      <tr>
                        <td>Taxable Amount</td>
                        <td>₹600.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer pt-0">
                <div className="table-footer-left notes">
                  <span />
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td>IGST 18.0%</td>
                        <td>₹6.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer table-total-item">
                <div className="table-footer-left">
                  <span className="total-item">
                    Total Items / Qty : 3 / 3.00
                  </span>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Total Amount</td>
                        <td className="invoice-title">₹606.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="total-amountdetails">
                <p>
                  Total amount ( in words):{" "}
                  <span>INR Six Hundred Six Dollers Only.</span>
                </p>
              </div>
              <div className="bank-details">
                <div className="payment-info">
                  <span className="payment-title">Payment Info:</span>
                  <div>
                    <span>Debit Card :</span> 465 *************645
                  </div>
                  <div className="mb-0">
                    <span>Amount :</span> $1,815
                  </div>
                </div>
                <div className="terms-condition">
                  <span>Terms &amp; Conditions:</span>
                  <ol>
                    <li>Goods Once sold cannot be taken back or exchanged</li>
                    <li>
                      We are not the manufactures, company will stand for
                      warrenty as per their terms and conditions.
                    </li>
                  </ol>
                </div>
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

export default CoffeeShop;
