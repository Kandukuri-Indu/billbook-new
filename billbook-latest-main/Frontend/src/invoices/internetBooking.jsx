import React from "react";
import { InvoiceLogo1 } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const InternetBooking = () => {
  return (
    <>
      <div className="main-wrapper internet-billing">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <div className="invoice-title tax-invoice">TAX INVOICE</div>
                  <div className="company-details">
                    <span className="company-name invoice-title">
                      Dreamguys Internet Pvt ltd.,
                    </span>
                    <div className="gst-details">
                      Address:
                      <span>
                        15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="inv-header-right">
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
              </div>
              <div className="invoice-address">
                <div className="invoice-to">
                  <span>Customer Info:</span>
                  <span className="invoice-title">John Williams</span>
                </div>
              </div>
              <div className="billing-info">
                <div className="billing-details">
                  <div>
                    Client ID : <span>AS2534568 </span>
                  </div>
                  <div>
                    Outstanding Balance :<span>$3600</span>
                  </div>
                  <div>
                    Invoice Date :<span>Johan Smith</span>
                  </div>
                </div>
                <div className="billing-details me-0">
                  <div>
                    Due Date : <span>Winter</span>
                  </div>
                  <div>
                    Total Curent Charges : <span>SI2534687</span>
                  </div>
                  <div>
                    Total Balance Due : <span>2022 Spring</span>
                  </div>
                </div>
              </div>
              <div className="invoice-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="table_width_1">#</th>
                        <th className="table_width_2">Item</th>
                        <th>Rate/Item</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description">
                          {" "}
                          Additional monthly usages - 125 GB
                        </td>
                        <td>01Jan 2022 To 31 Jan 2022</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description">Equpment rental</td>
                        <td> 01Jan 2022 To 31 Jan 2022</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="table-description"> Xtreme5</td>
                        <td>01Jan 2022 To 31 Jan 2022</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="table-description">
                          {" "}
                          Govement fee &amp; taxes
                        </td>
                        <td />
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className="table-description">Monthly services</td>
                        <td />
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

export default InternetBooking;
