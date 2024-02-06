import React from "react";
import { InvoiceLogo1 } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const MoneyExchange = () => {
  return (
    <>
      <div className="main-wrapper money-exchange">
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
                      Date: <span>5/12/2022</span>
                    </div>
                    <div className="inv-date mb-0">
                      Invoice No: <span>INV 00001</span>
                    </div>
                  </div>
                </div>
                <div className="inv-header-right">
                  <div className="invoice-title tax-invoice">TAX INVOICE</div>
                  <div className="cineplux-title">Money Exchange</div>
                  <div className="company-details">
                    <span className="company-name invoice-title">
                      Dreamguys Banking
                    </span>
                    <div className="gst-details">
                      Address:
                      <span>
                        15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchange-details">
                <h4>Exchange Confirmation</h4>
                <div className="exchange-info">
                  <div>
                    Funded <span>Apr 25, 2022</span>
                  </div>
                  <div>
                    Paid Out <span>Apr 25, 2022</span>
                  </div>
                  <div>
                    Transfer ID <span>#12345</span>
                  </div>
                  <div>
                    Membership <span>VH456512BB</span>
                  </div>
                </div>
              </div>
              <div className="exchange-details transfer-overview">
                <h4>Transfer Overview</h4>
                <div className="exchange-info transfer-rate">
                  <div>
                    Ammount paid by Johan Smith <span>$8000 USD</span>
                  </div>
                  <div>
                    Abbount converted <span>$22771.17 CAD</span>
                  </div>
                  <div>
                    Converted and send to <span>$22,753.46 CAD</span>
                  </div>
                </div>
                <div className="exchange-info exchange-rate">
                  <div>
                    Fee <span>$8000 USD</span>
                  </div>
                  <div>
                    Exchange Rate <span>$1 USD = $ 1.27 CAD</span>
                  </div>
                </div>
              </div>
              <div className="exchange-details sendto">
                <h4>Send To</h4>
                <div className="sendto-details">
                  <div className="sendto-left">
                    <div>
                      Name: <span>Vector john</span>
                    </div>
                    <div>
                      Bank Name &amp; Branch: <span>Toronto Bank</span>
                    </div>
                    <div>
                      SWIFT / BIC Code: <span>MSV24678665RT</span>
                    </div>
                    <div>
                      Account Number: <span>2465789456324</span>
                    </div>
                  </div>
                  <div className="sendto-right">
                    <div>
                      Address: <span>2 Roanoke Road, Ontario, Canada</span>
                    </div>
                    <div>
                      Account Name: <span>Johan Smith </span>
                    </div>
                    <div>
                      Reference: <span>2465789456324</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchange-details sendto">
                <h4>Paid Out From</h4>
                <div className="sendto-details">
                  <div className="sendto-left">
                    <div>
                      Name: <span>Canadian Bank</span>
                    </div>
                    <div>
                      Reference: <span>SM2455452114545</span>
                    </div>
                  </div>
                  <div className="sendto-right">
                    <div>
                      Delivered: <span>Bank Transfer</span>
                    </div>
                    <div>
                      Account Name: <span>Johan Smith </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exchange-details exchange-notes">
                <h4>Notes</h4>
                <p>
                  Your use of the Website shall be deemed to constitute your
                  understanding and approval of, and agreementto be bound by,
                  the Privacy Policy and you consent to the collection.
                </p>
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

export default MoneyExchange;
