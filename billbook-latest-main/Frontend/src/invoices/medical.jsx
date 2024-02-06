import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { InvoiceLogo1 } from "../_components/imagepath";

const Medical = () => {
  return (
    <>
      <div className="main-wrapper medical">
        <div className="container">
          <div className="invoice-wrapper download_section">
            <div className="inv-content">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <h4>Tax Invoice</h4>
                  <div className="company-details">
                    <div className="gst-details">
                      Address:{" "}
                      <span>
                        15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                      </span>
                    </div>
                    <div className="address-bg" />
                  </div>
                </div>
                <div className="inv-header-right">
                  <Link to="#">
                    <img src={InvoiceLogo1} alt="Logo" />
                  </Link>
                  <h3>Dreams Medical</h3>
                </div>
              </div>
              <h5>Patient Information</h5>
              <div className="patient-info">
                <div className="patient-details">
                  <div>
                    Patient Name : <span>Micle Richard </span>
                  </div>
                  <div>
                    Patient Birth Date :<span>32 Years Old - 22 July 1991</span>
                  </div>
                  <div>
                    Insurence Billed :<span>WPS</span>
                  </div>
                  <div>
                    Patient No :<span>123456789</span>
                  </div>
                </div>
                <div className="treatment-info me-0">
                  <div>
                    Service : <span>Dental Treatment</span>
                  </div>
                  <div>
                    Due Date : <span>25 Dec 2022</span>
                  </div>
                  <div>
                    Address :{" "}
                    <span>4 Balmy Beach Road, Owen Sound, Ontario, Canada</span>
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
                        <th className="text-center">Rate/Item</th>
                        <th className="text-center">Qty</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="table-description"> Dental Treatment</td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="table-description "> Bed Charge</td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="table-description ">
                          {" "}
                          Consultant Surgeon Fee
                        </td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="table-description ">
                          {" "}
                          Nursing Service Charge
                        </td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className="table-description ">
                          {" "}
                          Medical Hospital Supply
                        </td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td className="table-description ">Dental Treatment</td>
                        <td className="text-center">$100</td>
                        <td className="text-center">1</td>
                        <td className="text-end">$100</td>
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
                        <td>$600.00</td>
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
                        <td>$6.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="invoice-table-footer table-total-item">
                <div className="table-footer-left">
                  <span className="total-item">
                    Total Items / Qty : 6 / 6.00
                  </span>
                </div>
                <div className="text-end table-footer-right">
                  <table>
                    <tbody>
                      <tr>
                        <td className="invoice-title">Total Amount</td>
                        <td className="invoice-title">$606.00</td>
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
                    <li> Goods Once sold cannot be taken back or exchanged</li>
                    <li>
                      {" "}
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

export default Medical;
