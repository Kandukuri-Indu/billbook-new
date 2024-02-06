import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Select2 from "react-select2-wrapper";
import "regenerator-runtime/runtime";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Select, Input, Button } from "antd";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EditInvoice = () => {
  const { id } = useParams();
  console.log("id from params", id);
  const [currencyData, setCurrencyData] = useState([]);
  const [selectedCitys, setSelectedCitys] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyValue, setCurrencyValue] = useState(0);

  const [totalAmounts, setTotalAmounts] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [grandTotalInSelectedCurrency, setGrandTotalInSelectedCurrency] = useState(0);
  console.log("grandTotalInSelectedCurrency", grandTotalInSelectedCurrency);

  const fetchCurrencyData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/AddCurrency/currency"
      );
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

  useEffect(() => {
    console.log("totalAmounts:", totalAmounts);
    console.log("selectedCitys.currencyValue:", selectedCitys?.currencyValue);

    if (
      selectedCitys &&
      selectedCitys.currencyValue !== undefined &&
      !isNaN(totalAmounts)
    ) {
      const exchangeRate = selectedCitys.currencyValue || 1;
      const grandTotalInSelected = totalAmounts * exchangeRate;
      const roundedGrandTotal = isNaN(grandTotalInSelected)
        ? 0
        : Number(grandTotalInSelected);
      setGrandTotalInSelectedCurrency(roundedGrandTotal);

      // Divide newTotalAmount by currencyValue
      const convertedAmount = totalAmounts / exchangeRate;
      setConvertedTotalInSelectedCurrency(
        isNaN(convertedAmount) ? 0 : Number(convertedAmount)
      );
    }
  }, [selectedCitys, totalAmounts]);

  const handleCitysChange = (value) => {
    setSelectedCitys(value);
    const selectedCityData = currencyData.find(
      (city) => city.cityName === value
    );
    if (selectedCityData) {
      setSelectedCurrency(selectedCityData.currency);
      setCurrencyValue(selectedCityData.currencyValue);

      let convertedAmount;
      if (selectedCityData.currency) {
        convertedAmount = totalAmount / selectedCityData.currencyValue;
      } else {
        console.error("Selected city data does not have a valid currency");

        convertedAmount = Number(convertedAmount);
      }
      console.log("converted amount", convertedAmount);

      setGrandTotalInSelectedCurrency(convertedAmount);
      setFormData((prevData) => ({
        ...prevData,
        currency: convertedAmount.toFixed(3),
      }));
    }
  };

  const handleEditableCurrencyChange = (event) => {
    const newCurrencyValue = event.target.value;

    if (!isNaN(newCurrencyValue)) {
      setCurrencyValue(Number(newCurrencyValue));
      const convertedAmount = calculateConvertedAmount(newCurrencyValue);
      console.log("converted amount", convertedAmount);
      setGrandTotalInSelectedCurrency(convertedAmount);
      setFormData((prevData) => ({
        ...prevData,
        currency: convertedAmount.toFixed(3),
      }));
    } else {
      console.error("Invalid currency value entered");
    }
  };

  const calculateConvertedAmount = (newCurrencyValue) => {
    if (selectedCitys) {
      const selectedCityData = currencyData.find(
        (city) => city.cityName === selectedCitys
      );
      if (selectedCityData) {
        return totalAmount / newCurrencyValue;
      }
    }

    console.error("Selected city data not available for conversion");
    return totalAmount;
  };

  const [menu, setMenu] = useState(false);
  const [gstData, setGstData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  const [totalTaxPercentage, setTotalTaxPercentage] = useState(0);
  const [taxableAmount, setTaxableAmount] = useState(0);
  const [cgstTaxAmount, setcgstTaxAmount] = useState(0);
  const [sgstTaxAmount, setsgstTaxAmount] = useState(0);
  const [totalDiscountPercentage, setTotalDiscountPercentage] = useState(0);

  const [cgstTaxPercentage, setCgstTaxPercentage] = useState(0);
  const [sgstTaxPercentage, setSgstTaxPercentage] = useState(0);

  const handleGstRateChange = (e, index) => {
    const newGstRate = parseFloat(e.target.value);

    if (!isNaN(newGstRate)) {
      handletableFieldChange(index, "gstRate", newGstRate);
    } else {
      console.error("Invalid GST Rate:", e.target.value);
    }
    console.log("gst Slected", newGstRate);
  };

  const recalculateTotalAmount = () => {
    let newTotalAmount = 0;
    product.forEach((product) => {
      newTotalAmount +=
        product.amount + product.totalGstAmount + product.cessAmount;
    });

    setTotalAmount(newTotalAmount);
    currencyConverter(newTotalAmount);
  };

  const [formData, setFormData] = useState({
    invoiceNumber: "",
    customerName: "",
    invoiceDate: new Date(),
    dueDate: new Date(),
    referenceNo: "",
    products: "",
    paymentTerms: "",
    currency: 0,
    website: "",
    // notes: "",
    grandTotal: 0,
    totalDiscount: 0,
    totalTax: 0,
    totalTaxPercentage: 0,
    taxableAmount: 0,
    cgstTaxAmount: 0,
    sgstTaxAmount: 0,
    totalDiscountPercentage: 0,
    cgstTaxPercentage: 0,
    sgstTaxPercentage: 0,
    table: [],
    bankDetails: {
      selectBank: {
        bankName: "",
        accountNumber: "",
        branchName: "",
        IFSCCode: "",
      },
      notes: "",
      termsAndConditions: "",
      additionalCharges: "",
      signatureName: "",
      signatureImage: null,
      // grandTotal: "",  
      totalDiscount: 0,
      totalGst: 0,
    },
  });

  console.log("formdata", formData);

  useEffect(() => {
    const fetchInvoiceDetails = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/addInvoice/invoices/${id}`
        );
        if (response.ok) {
          const invoiceDetails = await response.json();
          setFormData(invoiceDetails);
          console.log("Invoicedatagetting", invoiceDetails);
          console.log("GrandTotalForAll", invoiceDetails.grandTotal);
        } else {
          console.error("Failed to fetch invoice details");
        }
      } catch (error) {
        console.error("Error fetching invoice details", error);
      }
    };

    fetchInvoiceDetails(id);
  }, [id]);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const handleDateChange = (fieldName, date) => {
    if (date instanceof Date && !isNaN(date)) {
      const isoDate = date.toISOString();
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: isoDate,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/addInvoice/update-invoice/${id}`,
        { formData }
      );

      console.log("Data Updated successfully:", response.data);

      Swal.fire({
        icon: "success",
        title: "Invoice Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        // window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  console.log("formData", formData);

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

  const handleInputChange = (fieldName, value, index) => {
    // setFormData({ ...formData, [fieldName]: value });
    setFormData((prevData) => {
      const updatedState = { ...prevData };
      const updatevar = { ...updatedState.table[index] };

      // Parse old values
      const oldQuantity = parseFloat(updatevar.quantity) || 0;
      const oldDiscount = parseFloat(updatevar.discount) || 0;
      const oldGstAmount = parseFloat(updatevar.totalGstAmount) || 0;

      // Update the field value
      updatevar[fieldName] = parseFloat(value);

      // Parse new values
      const newQuantity = parseFloat(updatevar.quantity) || 0;
      const newDiscount = parseFloat(updatevar.discount) || 0;
      const newGstAmount = parseFloat(updatevar.totalGstAmount) || 0;
      const newPrice = parseFloat(updatevar.price) || 0;

      // Calculate total amount based on the field changed
      if (fieldName === "price") {
        const totalAmountBeforeDiscount = newQuantity * newPrice;
        const discountAmount = (newDiscount / 100) * totalAmountBeforeDiscount;
        const totalAmount = totalAmountBeforeDiscount - discountAmount;

        const gstAfterEnteringPrice = (totalAmount * newGstAmount) / 100;
        updatevar.totalGstAmount = gstAfterEnteringPrice;
        updatevar.totalAmount = totalAmount + gstAfterEnteringPrice;   
      } else {
        updatevar.totalAmount =
          newQuantity * newPrice - newDiscount + newGstAmount;
      }

      // Update the state
      updatedState.table[index] = updatevar;
      return updatedState;
    });
    calculateTotaltaxableForAllProducts();
  };

  const calculateTotalAmountForAllProducts = () => {
    let total = 0;
    formData.table.forEach((item) => {
      total +=
        parseFloat(item.totalAmount - item.totalDiscount + item.totalTax) || 0;
    });
    const roundedTotal = total;
    setTotalAmount(roundedTotal);
    currencyConverter(roundedTotal);
  };

  const currencyConverter = (roundedTotal) => {
    if (selectedCitys && currencyValue !== undefined && !isNaN(roundedTotal)) {
      console.log("Converting currency. Values:", {
        selectedCitys,
        currencyValue,
        roundedTotal,
      });

      const exchangeRate = currencyValue || 1;
      const grandTotalInSelected = roundedTotal / exchangeRate;
      const roundedGrandTotal = +grandTotalInSelected ?? 0;
    }
  };

  useEffect(() => {
    calculateTotalAmountForAllProducts(selectedCitys?.currencyValue);
  }, [formData.table, selectedCitys?.currencyValue]);

  const calculateTotaldiscountForAllProducts = () => {
    let totalDiscountAmount = 0;
    let totalDiscountPercentage = 0;

    formData.table.forEach((item) => {
      const discountPercentage = parseFloat(item.discount) || 0;
      const price = parseFloat(item.price) || 0;
      const quantity = parseFloat(item.quantity) || 1;

      const discountAmount = (price * quantity * discountPercentage) / 100;
      totalDiscountAmount += discountAmount;
      totalDiscountPercentage += discountPercentage;
    });

    setTotalDiscount(totalDiscountAmount);
    setTotalDiscountPercentage(totalDiscountPercentage);
  };

  const calculateTotaltaxForAllProducts = () => {
    let totalTaxAmount = 0;
    let totalTaxPercentage = 0;
    let cgstTaxAmount = 0;
    let sgstTaxAmount = 0;
    let totalCgstPercentage = 0;
    let totalSgstPercentage = 0;

    formData.table.forEach((item) => {
      const price = parseFloat(item.price) || 0;
      const discountPercentage = parseFloat(item.discount) || 0;
      const quantity = parseFloat(item.quantity) || 1;
      const gstRate = parseFloat(item.gstRate) || 0;

      const discountAmount = (price * quantity * discountPercentage) / 100;
      const discountedPrice = price - discountAmount;

      const taxableAmount = price * quantity - discountAmount;

      if (gstRate > 0) {
        const taxAmount = (taxableAmount * gstRate) / 100;

        totalTaxAmount += taxAmount;
        totalTaxPercentage += gstRate;

        const cgstAmount = taxAmount / 2;
        const sgstAmount = taxAmount / 2;

        cgstTaxAmount += cgstAmount;
        sgstTaxAmount += sgstAmount;

        // Calculate CGST and SGST percentages
        totalCgstPercentage += gstRate / 2;
        totalSgstPercentage += gstRate / 2;
      }
    });

    setTotalTax(totalTaxAmount);
    setTotalTaxPercentage(totalTaxPercentage);
    setcgstTaxAmount(cgstTaxAmount);
    setsgstTaxAmount(sgstTaxAmount);
    setCgstTaxPercentage(totalCgstPercentage);
    setSgstTaxPercentage(totalSgstPercentage);
  };

  const calculateTotaltaxableForAllProducts = () => {
    let totalTaxableAmount = 0;

    formData.table.forEach((item) => {
      const price = parseFloat(item.price) || 0;
      const discountPercentage = parseFloat(item.discount) || 0;
      const quantity = parseFloat(item.quantity) || 1;

      const discountAmount = (price * quantity * discountPercentage) / 100;
      const discountedPrice = price - discountAmount;
      totalTaxableAmount += price * quantity - discountAmount;
    });

    setTaxableAmount(totalTaxableAmount);
  };

  useEffect(() => {
    calculateTotalAmountForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    calculateTotaldiscountForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    calculateTotaltaxForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    calculateTotaltaxableForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      grandTotal: totalAmount,
      totalDiscount: totalDiscount,
      totalTax: totalTax,
      taxableAmount: taxableAmount,
      cgstTaxAmount: cgstTaxAmount,
      sgstTaxAmount: sgstTaxAmount,
      totalTaxPercentage: totalTaxPercentage,
      totalDiscountPercentage: totalDiscountPercentage,
      cgstTaxPercentage: cgstTaxPercentage,
      sgstTaxPercentage: sgstTaxPercentage,
    }));
  }, [
    totalAmount,
    totalDiscount,
    totalTax,
    taxableAmount,
    cgstTaxAmount,
    sgstTaxAmount,
    totalTaxPercentage,
    totalDiscountPercentage,
    cgstTaxPercentage,
    sgstTaxPercentage,
  ]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          bankDetails: {
            ...prevData.bankDetails,
            signatureImage: reader.result,
          },
        }));
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleQuantityChange = (e, index, fieldName) => {
    const value = parseFloat(e.target.value) || 0;

    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      const updatedItem = { ...updatedTable[index] };

      updatedItem[fieldName] = value;
      updatedItem.totalAmount = calculateTotalAmountForItem(updatedItem);

      updatedTable[index] = updatedItem;

      return {
        ...prevData,
        table: updatedTable,
      };
    });
  };

  const calculateTotalAmountForItem = (item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseFloat(item.quantity) || 1;
    const discount = parseFloat(item.discount) || 0;
    const gstRate = parseFloat(item.gstRate) || 0;

    const totalAmountBeforeDiscount = price * quantity;
    const discountAmount = (discount / 100) * totalAmountBeforeDiscount;
    const discountedAmount = totalAmountBeforeDiscount - discountAmount;

    let totalAmount = discountedAmount;

    if (gstRate > 0) {
      const taxAmount = (discountedAmount * gstRate) / 100;
      totalAmount += taxAmount;
    }

    return totalAmount;
  };

  const handleDiscountChange = (e, index) => {
    const newDiscount = parseFloat(e.target.value);

    if (!isNaN(newDiscount)) {
      handletableFieldChange(index, "discount", newDiscount);
    } else {
      console.error("Invalid Discount:", e.target.value);
    }
  };

  const handletableFieldChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      updatedTable[index][field] = value;

      calculateTotalAmount(index);
      return {
        ...prevData,
        table: updatedTable,
      };
    });
  };

  const calculateTotalAmount = (index) => {
    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      const product = updatedTable[index];

      const quantity = Math.max(1, parseFloat(product.quantity) || 0);
      const discount = parseFloat(product.discount) || 0;
      const gstRate = parseFloat(product.gstRate) || 0;

      const totalAmountBeforeDiscount = product.price * quantity;
      const discountAmount = (discount / 100) * totalAmountBeforeDiscount;
      const totalAmount = totalAmountBeforeDiscount - discountAmount;

      let calculatedGst = 0;
      let cgst = 0;
      let sgst = 0;

      if (!isNaN(gstRate) && gstRate !== 0) {
        calculatedGst = (totalAmount * gstRate) / 100;
        cgst = calculatedGst / 2;
        sgst = calculatedGst / 2;
      }

      product.cgstAmount = cgst;
      product.sgstAmount = sgst;
      product.totalGstAmount = calculatedGst;
      product.totalAmount = totalAmount + calculatedGst;

      return {
        ...prevData,
        table: updatedTable,
      };
    });
  };

  const handleChangeTableField = (index, field, value) => {
    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      const updatedItem = { ...updatedTable[index] };

      updatedItem[field] = parseFloat(value) || 0;
      const newTotalAmount = updatedItem.totalAmount || 0;
      const previousTotalGstAmount =
        parseFloat(updatedItem.totalGstAmount) || 0;
      const previousDiscountAmount = parseFloat(updatedItem.discount) || 0;
      const previousQuantity = parseFloat(updatedItem.quantity) || 0;
      const gstrate = parseFloat(updatedItem.gstRate) || 0;

      if (field === "totalAmount" && !isNaN(newTotalAmount)) {
        const newprice = newTotalAmount / (1 + gstrate / 100);

        updatedItem.price =
          newprice / previousQuantity + previousDiscountAmount;
      } else if (field === "price") {
        updatedItem.totalAmount =
          parseFloat(value) +
          previousTotalGstAmount -
          previousDiscountAmount * previousQuantity;
      }

      updatedTable[index] = updatedItem;

      return {
        ...prevData,
        table: updatedTable,
      };
    });
  };

  const [selectedproduct, setSelectedProduct] = useState(null);
  console.log("selected product", selectedproduct);
  const [selectedProductId, setSelectedProductId] = useState([]);

  console.log("productby id", selectedProductId);

  const fetchProductsbyId = async (selectedproduct) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/addProduct/products/${selectedproduct}`
      );
      console.log(response.data);
      setSelectedProductId(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (selectedproduct) {
      fetchProductsbyId(selectedproduct);
    }
  }, [selectedproduct]);

  const [customer, setCustomer] = useState([]);
  console.log("customer", customer);

  const customeroptions = customer.map((cus) => ({
    id: cus._id,
    text: cus.name,
  }));

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/addCustomer/customers"
        );
        console.log(response.data);
        setCustomer([
          { id: 1, text: "Select Item Category" },
          ...response.data,
        ]);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const [product, setProduct] = useState([]);
  console.log("product", product);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/addProduct/products"
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleproductchange = (productId) => {
    const selectedProduct = product.find((prod) => prod._id === productId);

    const newTable = [...formData.table];

    newTable.push({
      productId: selectedProduct._id,
      productName: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1,
      discount: 0,
      tax: 0,
      totalAmount: selectedProduct.price,
      totalDiscount: "",
      totalTax: "",
      totalGstAmount: 0,
    });
    setFormData({
      ...formData,
      table: newTable,
    });
  };

  const notify = () => {
    toast.success("Product selected successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleDeleteItem = (index) => {
    const updatedTable = [...formData.table];
    updatedTable.splice(index, 1);
    setFormData({ ...formData, table: updatedTable });
  };

  console.log("GrandTotal", formData.grandTotal)

  // const grandTotal = invoiceDetails.grandTotal;

// console.log("Grand Total: ", grandTotal);/

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5>Edit Invoice</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="form-group-item border-0 mb-0">
                      <div className="row align-item-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Invoice Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                              value={formData.invoiceNumber}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Customer Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Customer Name"
                              value={formData.customerName.name}
                              onChange={(e) =>
                                handleInputChange(e, "customerName")
                              }
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Invoice Date</label>
                            <div className="cal-icon cal-icon-info">
                              {/* Ensure that formData.invoiceDate is a Date object */}
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={new Date(formData.invoiceDate)}
                                onChange={(date) =>
                                  handleDateChange("invoiceDate", date)
                                }
                                dateFormat="dd-MM-yyyy"
                                showTimeInput={false}
                              ></DatePicker>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Due Date</label>
                            <div className="cal-icon cal-icon-info">
                              {/* Ensure that formData.dueDate is a Date object */}
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={new Date(formData.dueDate)}
                                onChange={(date) =>
                                  handleDateChange("dueDate", date)
                                }
                                dateFormat="dd-MM-yyyy"
                                showTimeInput={false}
                              ></DatePicker>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Reference No</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              value={formData.referenceNo}
                              onChange={(e) =>
                                handleInputChange("referenceNo", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group position-relative">
                            <label>Payment Terms</label>
                            <div className="input-group input-group-sm mb-3">
                              <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-sm"
                                value={formData.paymentTerms}
                                onChange={(e) =>
                                  handleInputChange(
                                    "paymentTerms",
                                    e.target.value
                                  )
                                }
                              />
                              <span
                                className="input-group-text"
                                id="inputGroup-sizing-sm"
                              >
                                days
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Website</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Website Address"
                              value={formData.website}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  website: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-item">
                      <div className="card-table">
                        <div className="card-body add-invoice">
                          <div className="table-responsive">
                            <table className="table table-center table-hover datatable">
                              <thead className="thead-light">
                                <tr>
                                  <th>Product / Service</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <th>Discount</th>
                                  <th>Tax</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              {formData.table.length > 0 && (
                                <tbody>
                                  {formData.table.map((item, index) => (
                                    <tr key={index}>
                                      <td>{item.productName}</td>
                                      <td>
                                        <input
                                          type="number"
                                          name="re_invoice"
                                          value={item.price}
                                          className="form-control form-control-sm"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                          onChange={(e) =>
                                            handleInputChange(
                                              "price",
                                              e.target.value,
                                              index
                                            )
                                          }
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          name="re_invoice"
                                          value={item.quantity}
                                          className="form-control form-control-sm"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                          onChange={(e) =>
                                            handleQuantityChange(
                                              e,
                                              index,
                                              "quantity"
                                            )
                                          }
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          name="re_invoice"
                                          value={item.discount || ""}
                                          className="form-control form-control-sm"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                          onChange={(e) =>
                                            handleDiscountChange(e, index)
                                          }
                                        />
                                      </td>
                                      <td>
                                        <select
                                          value={item.gstRate}
                                          onChange={(e) =>
                                            handleGstRateChange(e, index)
                                          }
                                          className="form-control form-control-sm"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                        >
                                          {gstData.map((rate) => (
                                            <option
                                              key={rate._id}
                                              value={rate.gstPercentageValue}
                                            >
                                              {rate.gstPercentageName}
                                            </option>
                                          ))}
                                        </select>
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          name="re_invoice"
                                          value={item.totalAmount}
                                          className="form-control form-control-sm"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                          onChange={(e) =>
                                            handleChangeTableField(
                                              index,
                                              "totalAmount",
                                              e.target.value
                                            )
                                          }
                                        />
                                      </td>
                                      <td className="d-flex align-items-center">
                                        <button
                                          className="btn-action-icon"
                                          onClick={() =>
                                            handleDeleteItem(index)
                                          }
                                        >
                                          <span>
                                            <FeatherIcon icon="trash-2" />
                                          </span>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              )}
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="form-group">
                              <label>Select Products</label>
                              <div className="bank-3">
                                <Link
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#product_details"
                                  style={{
                                    display: "block",
                                    border: "2px dotted",
                                    width: "200%",
                                    padding: "10px",
                                    textDecoration: "none",
                                  }}
                                >
                                  <center>Select Products</center>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group-item border-0 p-0">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="form-group">
                              <label>Select Bank</label>
                              <div className="bank-3">
                                <Link
                                  className="text-danger-light"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#bank_details"
                                >
                                  <i className="fas fa-bank me-2" />
                                  Add Bank Details
                                </Link>
                              </div>
                            </div>
                            <div className="form-group notes-form-group-info">
                              <label>Notes</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Notes"
                                value={formData.bankDetails.notes}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    bankDetails: {
                                      ...formData.bankDetails,
                                      notes: e.target.value,
                                    },
                                  })
                                }
                              />
                            </div>
                            <div className="form-group notes-form-group-info mb-0">
                              <label>Terms and Conditions</label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Terms and Conditions"
                                value={formData.bankDetails.termsAndConditions}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    bankDetails: {
                                      ...formData.bankDetails,
                                      termsAndConditions: e.target.value,
                                    },
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="form-group-bank">
                            <div className="invoice-total-box">
                              <div className="invoice-total-inner">
                                <div className="status-toggle justify-content-between">
                                  <div className="d-flex align-center">
                                    <p>Round Off </p>
                                    <input
                                      id="rating_1"
                                      className="check"
                                      type="checkbox"
                                      defaultChecked="true"
                                    />
                                    <label
                                      htmlFor="rating_1"
                                      className="checktoggle checkbox-bg"
                                    >
                                      checkbox
                                    </label>
                                  </div>
                                  {/* <span>$0.00</span> */}
                                </div>
                              </div>
                              <div className="invoice-total-footer">
                                <h4>
                                  Taxable Amount{" "}
                                  <span> {taxableAmount.toFixed(3)}</span>
                                </h4>
                                <h4>
                                  Total Discount ({totalDiscountPercentage}%){" "}
                                  <span>{totalDiscount.toFixed(3)}</span>
                                </h4>
                                <h4>
                                  Total Tax ({totalTaxPercentage}%){" "}
                                  <span> {totalTax.toFixed(3)}</span>
                                </h4>

                                <h4>
                                  CGST ({cgstTaxPercentage}%){" "}
                                  <span>{cgstTaxAmount.toFixed(3)}</span>
                                </h4>
                                <h4>
                                  SGST ({sgstTaxPercentage}%){" "}
                                  <span>{sgstTaxAmount.toFixed(3)}</span>
                                </h4>

                                <h4>
                                  Grand Total(INR)
                                  <span> {formData.grandTotal.toFixed(3)}</span>
                                  {/* <span>{invoiceDetails.grandTotal}</span> */}
                                </h4>

                                {selectedCitys && (
                                  <div>
                                    <h4>
                                      Currency ({selectedCurrency})
                                      <span>
                                        {" "}
                                        {grandTotalInSelectedCurrency}
                                      </span>
                                    </h4>
                                  </div>
                                )}

                                <Button type="primary" onClick={showModal}>
                                  Select Currency
                                </Button>

                                <Modal
                                  title="Select Currency"
                                  open={isModalVisible}
                                  onOk={handleOk}
                                  onCancel={handleCancel}
                                >
                                  <label>Select a city:</label>
                                  <Select
                                    style={{ width: "100%" }}
                                    value={selectedCitys}
                                    onChange={handleCitysChange}
                                  >
                                    {currencyData.map((city) => (
                                      <Option
                                        key={city._id}
                                        value={city.cityName}
                                      >
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
                            </div>
                            <div className="form-group">
                              <label>Signature Name</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Signature Name"
                                value={formData.bankDetails.signatureName}
                                onChange={(e) =>
                                  setFormData((prevData) => ({
                                    ...prevData,
                                    bankDetails: {
                                      ...prevData.bankDetails,
                                      signatureName: e.target.value,
                                    },
                                  }))
                                }
                              />
                            </div>
                            <div className="form-group mb-0">
                              <label>Signature Image</label>
                              <div className="form-group service-upload service-upload-info mb-0">
                                <span>
                                  <FeatherIcon
                                    icon="upload-cloud"
                                    className="me-1"
                                  />
                                  Upload Signature
                                </span>
                                <input
                                  type="file"
                                  multiple=""
                                  id="image_sign"
                                  onChange={handleFileChange}
                                />
                                <div id="frames" />
                              </div>
                              {formData.bankDetails.signatureImage && (
                                <img
                                  src={formData.bankDetails.signatureImage.url}
                                  alt="Signature"
                                  className="uploaded-signature"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-customer-btns text-end">
                      <button
                        type="reset"
                        className="btn btn-primary cancel me-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Bank Details Modal */}
        <div
          className="modal custom-modal fade"
          id="bank_details"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Bank Details</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="align-center" aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Bank Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Bank Name"
                        value={formData.bankDetails.selectBank.bankName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bankDetails: {
                              ...formData.bankDetails,
                              selectBank: {
                                ...formData.bankDetails.selectBank,
                                bankName: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Account Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Account Number"
                        value={formData.bankDetails.selectBank.accountNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bankDetails: {
                              ...formData.bankDetails,
                              selectBank: {
                                ...formData.bankDetails.selectBank,
                                accountNumber: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Branch Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Branch Name"
                        value={formData.bankDetails.selectBank.branchName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bankDetails: {
                              ...formData.bankDetails,
                              selectBank: {
                                ...formData.bankDetails.selectBank,
                                branchName: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                      <label>
                        IFSC Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter IFSC COde"
                        value={formData.bankDetails.selectBank.IFSCCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bankDetails: {
                              ...formData.bankDetails,
                              selectBank: {
                                ...formData.bankDetails.selectBank,
                                IFSCCode: e.target.value,
                              },
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Bank Details Modal */}
      </div>
      {/* //Products Modal */}
      <div className="modal-body">
        <div
          className="modal custom-modal fade"
          id="product_details"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Product Details</h4>
                </div>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="align-center" aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <h5>Product Details</h5>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Price</th>
                        {/* <th>Quantity</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {product &&
                        product.map((prod) => (
                          <tr key={prod._id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-primary me-2"
                                  onClick={() => {
                                    handleproductchange(prod._id);
                                    notify();
                                  }}
                                >
                                  Add <FeatherIcon icon="plus-circle" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditInvoice;
