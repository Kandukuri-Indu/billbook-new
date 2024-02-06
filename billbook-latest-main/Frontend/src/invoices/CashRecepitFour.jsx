import React from "react";
import { Barcode, LogoImg, RecepitLogo } from "../_components/imagepath";

const CashRecepitFour = () => {
  
  return (
    <>
      <div className="receipt-wrap receipt-four">
        <div className="receipt-top">
          <div className="receipt-seperator" />
          <div className="receipt-seperator" />
          <div className="company-logo">
            <img src={LogoImg} alt="" />
          </div>
          <div className="receipt-seperator" />
          <div className="receipt-seperator" />
          <div className="receipt-title">Cash Receipt</div>
          <div className="company-name">Dreamguys Technologies Pvt Ltd.,</div>
          <div className="company-address">
            15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom
          </div>
          <div className="company-email">Email: demo@example.com</div>
        </div>
        <div className="receipt-seperator" />
        <div className="receipt-seperator" />
        <ul className="customer-list">
          <li>
            <div className="title">Name:</div>
            <div className="desc">John Doe</div>
          </li>
          <li className="text-right me-0">
            <div className="title">Invoice No:</div>
            <div className="desc">CS132453</div>
          </li>
          <li>
            <div className="title">Customer Id:</div>
            <div className="desc">#LL93784</div>
          </li>
          <li className="text-right me-0">
            <div className="title">Date:</div>
            <div className="desc"> 01.07.2022</div>
          </li>
        </ul>
        <div className="receipt-seperator" />
        <div className="receipt-seperator" />
        <table className="receipt-table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Sugarfree</td>
              <td>$50</td>
              <td>3</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Onion (Loose) (5kg)</td>
              <td>$50</td>
              <td>2</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Mushrooms - Button 1 pack</td>
              <td>$50</td>
              <td>3</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Tea 1kg</td>
              <td>$50</td>
              <td>3</td>
              <td>$150</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Diet Coke Soft Drink 300ml</td>
              <td>$50</td>
              <td>3</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
        <div className="receipt-seperator" />
        <div className="receipt-seperator" />
        <div className="bill-list">
          <div className="bill_list_in">
            <div className="bill_title">Sub-Total:</div>
            <div className="bill_value">$700.00</div>
          </div>
          <div className="bill_list_in">
            <div className="bill_title">Discount: </div>
            <div className="bill_value">-$50.00</div>
          </div>
          <div className="receipt-seperator" />
          <div className="bill_list_in">
            <div className="bill_title">Service-charge:</div>
            <div className="bill_value">0.00</div>
          </div>
          <div className="bill_list_in">
            <div className="bill_title">Tax(5%):</div>
            <div className="bill_value">$5.00</div>
          </div>
          <div className="receipt-seperator" />
          <div className="bill_list_in">
            <div className="bill_title bill_focus">Total Bill:</div>
            <div className="bill_value bill_focus">$655.00</div>
          </div>
          <div className="bill_list_in">
            <div className="bill_title bill_focus">Due:</div>
            <div className="bill_value bill_focus">$0.00</div>
          </div>
          <div className="bill_list_in total-payable">
            <div className="bill_title bill_focus">Total Payable:</div>
            <div className="bill_value bill_focus">$655.00</div>
          </div>
        </div>
        <div className="receipt-seperator" />
        <div className="receipt-seperator" />
        <div className="sample_text ">
          12332345698234592384
          <img src={Barcode} alt="" />
        </div>
        <div className="receipt-seperator" />
        <div className="sample_text">Thank You</div>
        <div className="receipt-seperator" />
      </div>
    </>
  );
};

export default CashRecepitFour;
