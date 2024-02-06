import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GstCalculator = () => {
  const [products, setProducts] = useState([
    { price: '', quantity: '', discount: '', amount: '', gstRate: 18 },
  ]);
  const [gstData, setGstData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);

    // Calculate total amount when price, quantity, or discount changes
    calculateTotalAmount(index);
  };

  const addProduct = () => {
    setProducts([...products, { price: '', quantity: '', discount: '', amount: '', gstRate: 18 }]);
  };

  const removeProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    calculateTotalAmount(); // Recalculate total amount when a product is removed
  };

  // Update other methods to work with multiple products
  const calculateTotalAmount = (index) => {
    const updatedProducts = [...products];
    const product = updatedProducts[index];

    const totalAmountBeforeDiscount = product.price * product.quantity;
    const discountAmount = (product.discount / 100) * totalAmountBeforeDiscount;
    const totalAmount = totalAmountBeforeDiscount - discountAmount;

    // Update the product's total amount
    product.amount = totalAmount;

    // Update the state with the new products array
    setProducts(updatedProducts);

    // Calculate GST for the updated product
    calculateGst(totalAmount, product.gstRate, index);
  };

  const calculateGst = (inputAmount, newGstRate, currentIndex) => {
    let calculatedGst = (inputAmount * newGstRate) / 100;
    let newCessAmount = 0;

    // ... (rest of the calculateGst function remains unchanged)

    const cgst = calculatedGst / 2;
    const sgst = calculatedGst / 2;

    const updatedProducts = [...products];
    updatedProducts[currentIndex].cgstAmount = cgst;
    updatedProducts[currentIndex].sgstAmount = sgst;
    updatedProducts[currentIndex].cessAmount = newCessAmount;
    updatedProducts[currentIndex].totalGstAmount = calculatedGst;
    updatedProducts[currentIndex].totalAmount = inputAmount + calculatedGst + newCessAmount;

    setProducts(updatedProducts);

    // Recalculate total amount for all products
    recalculateTotalAmount();
  };

  const handleAmountChange = (e, currentIndex) => {
    const inputAmount = parseFloat(e.target.value);

    const updatedProducts = [...products];
    updatedProducts[currentIndex].amount = inputAmount;
    setProducts(updatedProducts);

    calculateGst(inputAmount, updatedProducts[currentIndex].gstRate, currentIndex);
  };

  const handleGstRateChange = (e, currentIndex) => {
    const newGstRate = parseFloat(e.target.value);

    const updatedProducts = [...products];
    updatedProducts[currentIndex].gstRate = newGstRate;
    setProducts(updatedProducts);

    calculateGst(updatedProducts[currentIndex].amount, newGstRate, currentIndex);
  };

  const recalculateTotalAmount = () => {
    let newTotalAmount = 0;
    products.forEach((product) => {
      newTotalAmount += product.amount + product.totalGstAmount + product.cessAmount;
    });

    setTotalAmount(newTotalAmount);
  };

  const fetchGstData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/addgst/gst");
      setGstData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchGstData();
  }, []);

  return (
    <div>
      <h2>GST Calculator</h2>
      {products.map((product, index) => (
        <div key={index}>
          <div>
            <label>Enter Price:</label>
            <input
              type="number"
              value={product.price}
              onChange={(e) => handleProductChange(index, 'price', e.target.value)}
            />
          </div>
          <div>
            <label>Enter Quantity:</label>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
            />
          </div>
          <div>
            <label>Enter Discount (%):</label>
            <input
              type="number"
              value={product.discount}
              onChange={(e) => handleProductChange(index, 'discount', e.target.value)}
            />
          </div>
          {/* Additional fields for tax, total amount, etc. can be added here */}
          <div>
            <label>Calculated Amount:</label>
            <input
              type="number"
              value={product.amount}
              onChange={(e) => handleAmountChange(e, index)}
            />
          </div>
          {/* Add more fields as needed */}
          <div>
            <label>Select GST Rate (%):</label>
            <select
              value={product.gstRate}
              onChange={(e) => handleGstRateChange(e, index)}
            >
              {gstData.map((rate) => (
                <option key={rate._id} value={rate.gstPercentageValue}>
                  {rate.gstPercentageName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p>CGST Amount: {product.cgstAmount}</p>
            <p>SGST Amount: {product.sgstAmount}</p>
            {product.cessAmount !== 0 && <p>Cess Amount: {product.cessAmount}</p>}
            <p>Total GST Amount: {product.totalGstAmount}</p>
            <p>Total Amount (including GST): {product.totalAmount}</p>
          </div>
          <button onClick={() => removeProduct(index)}>Remove Product</button>
        </div>
      ))}
      <button onClick={addProduct}>Add Product</button>
      <div>
        <p>Total Amount for all products: {totalAmount}</p>
      </div>
    </div>
  );
};

export default GstCalculator;