import React, { useState, useEffect } from 'react';
import { Modal, Select, Input, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;

const MyComponent = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [currencyValue, setCurrencyValue] = useState(0);
  const [totalAmount, setTotalAmount] = useState(2000); // Set your initial total amount
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchCurrencyData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/AddCurrency/currency");
      setCurrencyData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCurrencyData();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);

    // Find the corresponding currency data for the selected city
    const selectedCityData = currencyData.find(city => city.cityName === value);

    // Update state with currency value for the selected city
    if (selectedCityData) {
      setSelectedCurrency(selectedCityData.currency);
      setCurrencyValue(selectedCityData.currencyValue);

      // Convert the total amount to the selected currency
      let convertedAmount = totalAmount * (1 / selectedCityData.currencyValue); // Use the accurate currency value

      // If Dubai is selected, convert to Dirhams
      if (value === 'Dubai') {
        convertedAmount = totalAmount * selectedCityData.currencyValue; // Use the accurate currency value
      }

      setTotalAmount(convertedAmount);
    }
  };

  const handleEditableCurrencyChange = (event) => {
    setCurrencyValue(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Total Amount:</label>
        <Input value={totalAmount} readOnly />
      </div>

      <Button type="primary" onClick={showModal}>
        Select Currency
      </Button>

      <Modal
        title="Select Currency"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Select a city:</label>
        <Select style={{ width: '100%' }} value={selectedCity} onChange={handleCityChange}>
          {currencyData.map(city => (
            <Option key={city._id} value={city.cityName}>
              {city.cityName}
            </Option>
          ))}
        </Select>

        <div>
          <label>Currency:</label>
          <Input value={selectedCurrency} readOnly />
        </div>

        <div>
          <label>Currency Value:</label>
          <Input.TextArea
            value={currencyValue}
            onChange={handleEditableCurrencyChange}
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MyComponent;