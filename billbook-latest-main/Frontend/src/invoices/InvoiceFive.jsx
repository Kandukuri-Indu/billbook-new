import React, { useEffect } from "react";
import { InvoiceLogoDark, InvoiceLogoWhite } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";


const InvoiceFive = () => {
  useEffect(() => {
    document.body.classList.add("darktheme");

    return () => document.body.classList.remove("darktheme");
  }, []);

  return (
    <>
      <div className="main-wrapper index-five">
        <div className="invoice-wrapper">
          <div className="inv-content">
            <div className="invoiceten-header">
              <div className="invoice-header">
                <div className="inv-header-left">
                  <Link to="#">
                    <img src={InvoiceLogoWhite} alt="Logo" />
                  </Link>
                </div>
                <div className="inv-header-right">
                  <div className="invoice-title">TAX INVOICE</div>
                  <span>original for recipient</span>
                </div>
              </div>
              <div className="company-details">
                <span className="company-name invoice-title ">Dreamguys</span>
                <div className="company-content">
                  <div className="company-content-left">
                    <div className="company-info">
                      <div className="gst-details">
                        GST IN: <span>22AABCU9603R1ZX</span>
                      </div>
                      <div className="gst-details me-0">
                        Mobile: <span>+ 91 98765 43210</span>
                      </div>
                    </div>
                    <div className="gst-details company-address mb-0 me-0">
                      Address:{" "}
                      <span>
                        5 Hodges Mews, High Wycombe HP12 3JL, United Kingdom
                      </span>
                    </div>
                  </div>
                  <div className="inv-header-right">
                    <div className="inv-details">
                      <div className="inv-date">
                        Invoice No: <span>00001</span>
                      </div>
                      <div className="inv-date mb-0">
                        Invoice Date: <span>5/12/2022</span>
                      </div>
                    </div>
                  </div>
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
                  walter@gmail.com <br />
                  +45 5421 4523
                </div>
              </div>
              <div className="invoice-to">
                <span>Ship To:</span>
                <div className="inv-to-address">
                  Lowell H. Dominguez
                  <br /> 84 Spilman Street, London
                  <br />
                  United Kingdom
                  <br />
                  lowell@gmail.com
                  <br />
                  +45 5421 2154
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
                      <th className="table_width_3">Tax Value</th>
                      <th className="table-qty text-center">Qty</th>
                      <th className="table-price text-end">Price</th>
                      <th className="table_width_4 text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className=""> Website Design</td>
                      <td className="table-description">
                        Four plus web pages design and two rivision
                      </td>
                      <td className="text-center">1</td>
                      <td className="table-price text-end">$350</td>
                      <td className="text-end">$350</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className=""> Web Development</td>
                      <td className="table-description">
                        Dynamic frontend design
                      </td>
                      <td className="text-center">1</td>
                      <td className="table-price text-end">$600</td>
                      <td className="text-end">$600</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="">App Development</td>
                      <td className="table-description">
                        Android and Ios App design
                      </td>
                      <td className="text-center">2</td>
                      <td className="table-price text-end">$200</td>
                      <td className="text-end">$400</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="">Digital Marketing</td>
                      <td className="table-description">
                        Facebook and instagram marketing
                      </td>
                      <td className="text-center">3</td>
                      <td className="table-price text-end">$100</td>
                      <td className="text-end">$300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="invoice-table-footer">
              <div className="table-footer-left notes">
                <span>Important Note:</span>{" "}
                <div className="delivery-notes">
                  Delivery dates are not guaranteed and Seller has no liability
                  for damages that may be incurred due to any delay.
                </div>
              </div>
              <div className="text-end table-footer-right">
                <table>
                  <tbody>
                    <tr>
                      <td>Taxable Amount</td>
                      <td>$1650.00</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>+ $0.00</td>
                    </tr>
                    <tr>
                      <td>GST 18.0% </td>
                      <td>$165.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="invoice-table-footer totalamount-footer">
              <div className="table-footer-left">
                <p className="total-info">Total Items / Qty : 4 / 4.00</p>
              </div>
              <div className="table-footer-right">
                <table className="totalamt-table">
                  <tbody>
                    <tr>
                      <td>Total</td>
                      <td>$1815</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="total-amountdetails">
              <p>
                Total amount ( in words):{" "}
                <span>INR One Thousand Eight Hundred Fifteen Rupees Only.</span>
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
              <div className="company-sign">
                <span>For Dreamguys</span>
                <img src={InvoiceLogoDark} alt="" />
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
            {/* <i className="feather-download-cloud me-1" />  */}
            <FeatherIcon icon="download-cloud" className="me-1"/>
            <span>Download</span>
          </button>
          <Link to="javascript:window.print()" className="print-link">
            {/* <i className="feather-printer" />  */}
            <FeatherIcon icon="printer" className="me-1"/>
            <span className="">Print</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceFive;
