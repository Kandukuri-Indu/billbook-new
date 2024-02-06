import React, { useState, useEffect, useCallback,uSe } from "react";
import { Link ,useHistory} from "react-router-dom";
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
import CustomerAddInvoiceModal from "./CustomerAddInvoiceModal";

const AddInvoice = () => {
  const history = useHistory();

  const [isGstEnabled, setIsGstEnabled] = useState(false);
  const [isCustomerDetailsModalOpen, setisCustomerDetailsModalOpen] =
    useState(false);

  const [productsAdded, setProductsAdded] = useState(false);

  const handleAddProducts = () => {
    setProductsAdded(true);
  };

  const handleGstToggle = () => {
    setIsGstEnabled((prevState) => !prevState);
  };

  const [currencyData, setCurrencyData] = useState([]);
  const [selectedCitys, setSelectedCitys] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyValue, setCurrencyValue] = useState(0);

  const [totalAmounts, setTotalAmounts] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [grandTotalInSelectedCurrency, setGrandTotalInSelectedCurrency] =
    useState(0);
  console.log("grandTotalInSelectedCurrency", grandTotalInSelectedCurrency);
  const [datasource, setDatasource] = useState([]);

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

  const openCustomerDetailsModal = () => {
    setisCustomerDetailsModalOpen(true);
  };

  const closeCustomerDetailsModal = () => {
    setisCustomerDetailsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/addInvoice/invoices")
      .then((response) => {
        console.log(response.data);
        setDatasource(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("datasource", datasource);

  // useEffect(() => {
  //   console.log("totalAmounts:", totalAmounts);
  //   console.log("selectedCitys.currencyValue:", selectedCitys?.currencyValue);

  //   if (
  //     selectedCitys &&
  //     selectedCitys.currencyValue !== undefined &&
  //     !isNaN(totalAmounts)
  //   ) {
  //     const exchangeRate = selectedCitys.currencyValue || 1;
  //     const grandTotalInSelected = totalAmounts * exchangeRate;
  //     const roundedGrandTotal = isNaN(grandTotalInSelected)
  //       ? 0
  //       : Number(grandTotalInSelected);
  //     setGrandTotalInSelectedCurrency(roundedGrandTotal);

  //     const convertedAmount = totalAmounts / exchangeRate;
  //     setConvertedTotalInSelectedCurrency(
  //       isNaN(convertedAmount) ? 0 : Number(convertedAmount)
  //     );
  //   }
  // }, [selectedCitys, totalAmounts]);

  // useEffect(() => {
  //   console.log("totalAmounts:", totalAmounts);
  //   console.log("selectedCitys.currencyValue:", selectedCitys?.currencyValue);

  //   if (
  //     selectedCitys &&
  //     selectedCitys.currencyValue !== undefined &&
  //     !isNaN(totalAmounts)
  //   ) {
  //     const exchangeRate = selectedCitys.currencyValue || 1;
  //     const grandTotalInSelected = totalAmounts * exchangeRate;
  //     const roundedGrandTotal = isNaN(grandTotalInSelected)
  //       ? 0
  //       : Number(grandTotalInSelected);
  //     setGrandTotalInSelectedCurrency(roundedGrandTotal);

  //     // Divide newTotalAmount by currencyValue
  //     const convertedAmount = totalAmounts / exchangeRate;
  //     setConvertedTotalInSelectedCurrency(
  //       isNaN(convertedAmount) ? 0 : Number(convertedAmount)
  //     );
  //   }
  // }, [selectedCitys, totalAmounts]);

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

  const [bankData, setBankData] = useState([]);

  const [selectedAccount, setSelectedAccount] = useState([]);

  console.log("selectedAccount", selectedAccount);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/BankDeatils/bank-details"
      );
      console.log("databank:", response.data);
      setBankData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("detailsinvoice", bankData);

  const bankoptions = bankData.map((cus) => ({
    id: cus._id,
    text: cus.branchName,
  }));

  // const handleAccountChange = (event) => {
  //   setSelectedAccount(event.target.value);
  // };

  const handleAccountChange = (event) => {
    const selectedBranchName = event.target.value;
    const account = bankData.find(
      (account) => account._id === selectedBranchName
    );
    setSelectedAccount(account);
    setFormData((prevFormData) => ({
      ...prevFormData,
      bankDetails: {
        ...prevFormData.bankDetails,
        selectBank: selectedBranchName,
      },
    }));
  };

  const [menu, setMenu] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleAddChargesClick = () => {
    setShowInput(true);
  };

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

  const calculateGst = (inputAmount, newGstRate, currentIndex) => {
    let calculatedGst = (inputAmount * newGstRate) / 100;
    let newCessAmount = 0;
    const cgst = calculatedGst / 2;
    const sgst = calculatedGst / 2;
    const updatedProducts = [...products];
    updatedProducts[currentIndex].cgstAmount = cgst;
    updatedProducts[currentIndex].sgstAmount = sgst;
    updatedProducts[currentIndex].cessAmount = newCessAmount;
    updatedProducts[currentIndex].totalGstAmount = calculatedGst;
    updatedProducts[currentIndex].totalAmount =
      inputAmount + calculatedGst + newCessAmount;

    setProducts(updatedProducts);
    recalculateTotalAmount();
  };

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

  useEffect(() => {
    if (datasource.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        invoiceNumber: getNextInvoiceNumber(),
      }));
    }
  }, [datasource]);

  const [customer, setCustomer] = useState([]);
  const [customerUniqueid, setCustomerUniqueid] = useState([]);
  console.log("customer", customer);
  console.log("customerUniqueid", customerUniqueid[0]?.customerId);

  const CustomerUID = customerUniqueid[0]?.customerId;
  console.log("CustomerUID", CustomerUID);

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
        setCustomer(
          // { id: 1, text: "Select Item Category" },
          response.data
        );
        setCustomerUniqueid(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  const [formData, setFormData] = useState({
    invoiceName: "Sales Invoice",
    // customerId: CustomerUID,
    invoiceNumber: 1,
    customerName: "",
    invoiceDate: new Date(),
    dueDate: new Date(),
    referenceNo: "",
    products: "",
    paymentTerms: 0,
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
    balance: 0,
    table: [],
    bankDetails: {
      selectBank: "",
      notes: "",
      termsAndConditions: "",
      additionalCharges: "",
      signatureName: "",
      signatureImage: null,
      grandTotal: "",
      totalDiscount: 0,
      totalGst: 0,
    },
  });

  console.log("formdata", formData);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    console.log("Component updated:", formData);
  }, [formData]);

  const handleShowAddresses = () => {
    setShowAddresses(!showAddresses);
  };

  // const handleDateChange = (fieldName, date) => {
  //   if (
  //     date &&
  //     Object.prototype.toString.call(date) === "[object Date]" &&
  //     !isNaN(date)
  //   ) {
  //     date.setHours(0, 0, 0, 0);

  //     // Calculate the difference in days between invoiceDate and dueDate
  //     const timeDiff = Math.abs(
  //       date.getTime() - formData.invoiceDate.getTime()
  //     );
  //     const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  //     // Update paymentTerms based on the difference in days
  //     // If invoiceDate and dueDate are the same, set paymentTerms to 0
  //     const paymentTerms =
  //       formData.invoiceDate.getTime() === date.getTime() ? 0 : diffDays;

  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [fieldName]: date,
  //       paymentTerms: paymentTerms.toString(),
  //     }));

  //     // Update Due Date based on Payment Terms
  //     if (fieldName === "paymentTerms" && formData.invoiceDate) {
  //       const dueDate = new Date(formData.invoiceDate);
  //       dueDate.setDate(dueDate.getDate() + parseInt(date, 10));
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         dueDate,
  //       }));
  //     }

  //     // Update Payment Terms based on Due Date
  //     if (fieldName === "dueDate" && formData.invoiceDate) {
  //       const differenceInDays = Math.floor(
  //         (date - formData.invoiceDate) / (24 * 60 * 60 * 1000)
  //       );
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         paymentTerms: differenceInDays.toString(),
  //       }));
  //     }
  //   }
  // };

  const handlePaymentTermsChange = (terms) => {
    // Parse the input value to ensure it's a number
    const days = parseInt(terms);

    // Calculate the total number of days between invoice date and due date, including both dates
    const totalDays = Math.ceil(
      (formData.dueDate.getTime() - formData.invoiceDate.getTime()) /
        (24 * 60 * 60 * 1000) +
        1
    );

    // Update formData with the new payment terms and dueDate
    setFormData((prevData) => ({
      ...prevData,
      paymentTerms: totalDays.toString(),
      dueDate:
        formData.invoiceDate.getTime() + (totalDays - 1) * 24 * 60 * 60 * 1000, // Calculate dueDate based on totalDays
    }));
  };

  const handleDateChange = (fieldName, date) => {
    if (
      date &&
      Object.prototype.toString.call(date) === "[object Date]" &&
      !isNaN(date)
    ) {
      date.setHours(0, 0, 0, 0);

      // Calculate the difference in days between invoiceDate and dueDate
      const timeDiff = Math.abs(
        date.getTime() - formData.invoiceDate.getTime()
      );
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      // Update paymentTerms based on the difference in days
      const paymentTerms = diffDays;

      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: date,
        paymentTerms: paymentTerms.toString(),
      }));

      // Update Due Date based on Payment Terms
      if (fieldName === "paymentTerms" && formData.invoiceDate) {
        const dueDate = new Date(formData.invoiceDate);
        dueDate.setDate(dueDate.getDate() + parseInt(date, 10));
        setFormData((prevData) => ({
          ...prevData,
          dueDate,
        }));
      }

      // Update Payment Terms based on Due Date
      if (fieldName === "dueDate" && formData.invoiceDate) {
        const differenceInDays = Math.floor(
          (date - formData.invoiceDate) / (24 * 60 * 60 * 1000)
        );
        setFormData((prevData) => ({
          ...prevData,
          paymentTerms: differenceInDays.toString(),
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/addInvoice/invoices",
        { formData }
      );

      console.log("Data submitted successfully:", response.data);

      // Swal.fire({
      //   icon: "success",
      //   title: "Invoice Submitted Successfully",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
      toast.success("Invoice Added Succesfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/invoice-list");
      setFormData({
        invoiceNumber: "",
        customerName: "",
        invoiceDate: new Date(),
        dueDate: new Date(),
        referenceNo: "",
        products: "",
        paymentTerms: "",
        currency: "",
        website: "",
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
          grandTotal: "",
          totalDiscount: 0,
          // totalGst: 0,
        },
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

  const handleCustomerChange = (fieldName, value, index) => {
    setFormData({ ...formData, [fieldName]: value });
  };


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

      console.log("Old values:", {
        oldQuantity,
        oldDiscount,
        oldGstAmount,
      });
      console.log("New values:", {
        newQuantity,
        newDiscount,
        newGstAmount,
        newPrice,
      });

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
    calculateTotalAmountForAllProducts();

    calculateTotalAmountForAllProducts(selectedCitys?.currencyValue);
  };

  const calculateTotalAmountForAllProducts = (currencyValue) => {
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

      console.log("Converted amount:", roundedGrandTotal);
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
    calculateTotaltaxForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    calculateTotaltaxableForAllProducts();
  }, [formData.table]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      grandTotal: totalAmount,
      balance: totalAmount,
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
      console.log("field in total amount", updatedItem[field]);

      const newTotalAmount = updatedItem.totalAmount || 0;
      console.log("newTotalAmount", newTotalAmount);
      const previousTotalGstAmount =
        parseFloat(updatedItem.totalGstAmount) || 0;
      const previousDiscountAmount = parseFloat(updatedItem.discount) || 0;
      const previousQuantity = parseFloat(updatedItem.quantity) || 0;
      const gstrate = parseFloat(updatedItem.gstRate) || 0;

      if (field === "totalAmount" && !isNaN(newTotalAmount)) {
        const newprice = newTotalAmount / (1 + gstrate / 100);
        console.log("newprice", newprice.toFixed(2))

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

  const getNextInvoiceNumber = () => {
    if (datasource.length === 0) {
      return 1;
    } else {
      const maxInvoiceNumber = Math.max(
        ...datasource.map((invoice) => invoice.invoiceNumber)
      );
      return maxInvoiceNumber + 1; // Increment the maximum invoice number by 1
    }
  };

  console.log("latestinvoicenumber", datasource.length + 1);
  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5>Add Invoice</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="form-group-item border-0 mb-0">
                      <div className="row align-item-center">
                        <div className="col-lg-12 col-md-6 col-sm-12">
                          <div className="form-group manage-business-enable-tds">
                            <label htmlFor="gst_toggle">With GST</label>
                            <span>
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  id="gst_toggle"
                                  checked={isGstEnabled}
                                  onChange={handleGstToggle}
                                />
                                <span className="slider round"></span>
                              </label>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Invoice Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                              value={
                                formData.invoiceNumber || getNextInvoiceNumber()
                              }
                              // onChange={(e) =>
                              //   handleInputChange(
                              //     "invoiceNumber",
                              //     e.target.value
                              //   )
                              // }
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Customer Name</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select2
                                  data={customeroptions}
                                  options={{
                                    placeholder: "Choose Customer",
                                  }}
                                  value={formData?.customerName}
                                  onChange={(e) =>
                                    handleCustomerChange(
                                      "customerName",
                                      e.target.value
                                    )
                                  }
                                />
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="btn btn-primary form-plus-btn"
                                  onClick={openCustomerDetailsModal}
                                >
                                  <FeatherIcon icon="plus-circle" />
                                </Link>
                                <Modal
                                  title="Add Customer"
                                  open={isCustomerDetailsModalOpen}
                                  onCancel={closeCustomerDetailsModal}
                                  footer={[
                                    // <Button
                                    //   key="close"
                                    //   onClick={closeCustomerDetailsModal}
                                    // >
                                    //   Close
                                    // </Button>,
                                  ]}
                                >
                                  <CustomerAddInvoiceModal
                                    onClose={closeCustomerDetailsModal}
                                  />
                                </Modal>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Invoice Date</label>
                            <div className="cal-icon cal-icon-info">
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={formData.invoiceDate}
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
                              <DatePicker
                                className="datetimepicker form-control"
                                selected={formData.dueDate}
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
                                  handlePaymentTermsChange(e.target.value)
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
                                  {isGstEnabled && <th>Tax</th>}
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
                                      {isGstEnabled && (
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
                                      )}
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
                                  // onClick={handleProductSelection}
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
                              {/* <label>Select Bank</label> */}
                              <div className="bank-3">
                                <Link
                                  className="text-danger-light"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#bank_details"
                                >
                                  <i className="fas fa-bank me-2" />
                                  Select Bank
                                </Link>
                              </div>
                              {selectedAccount && (
                                <div className="add-bank-details" >
                                  <h6>Account Details</h6>
                                  {/* <p>
                                    Opening Balance:{" "}
                                    {selectedAccount.openingBalance}
                                  </p> */}
                                  {/* <p>Date: {selectedAccount.date}</p> */}
                                  <p>
                                    Bank Account Number:{" "}
                                    {selectedAccount.bankAccountNumber}
                                  </p>
                                  <p>IFSC Code: {selectedAccount.IFSCCode}</p>
                                  <p>
                                    Branch Name: {selectedAccount.branchName}
                                  </p>
                                  <p>
                                    Account Holder's Name:{" "}
                                    {selectedAccount.accountHoldersName}
                                  </p>
                                  <p>UPI ID: {selectedAccount.UPIID}</p>
                                </div>
                              )}
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
                            <div className="row">
                              <div className="col-lg-4 col-md-12">
                                <div>
                                  {/* <h8
                                    className="mb-0"
                                    style={{ color: "blue" }}
                                    onClick={handleAddChargesClick}
                                  >
                                    + Add Additional Charges
                                  </h8> */}

                                  {showInput && (
                                    <input
                                      type="text"
                                      placeholder=""
                                      value={
                                        formData.bankDetails.additionalCharges
                                      }
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          bankDetails: {
                                            ...formData.bankDetails,
                                            additionalCharges: e.target.value,
                                          },
                                        })
                                      }
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="invoice-total-box">
                              <div className="invoice-total-inner">
                                {/* <p>
                                  Discount{" "}
                                  <span>
                                    {formData.bankDetails.totalDiscount.toFixed(
                                      2
                                    )}
                                  </span>
                                </p>
                                <p>
                                  Tax{" "}
                                  <span>{formData.bankDetails.totalGst}</span>
                                </p> */}
                                {/* <p>
                                  SGST Amount{" "}
                                  <span>{sgstAmount.toFixed(3)}</span>
                                </p>
                                <p>
                                  Discount{" "}
                                  <span>{totalGstAmount.toFixed(3)}</span>
                                </p>
                                <p>
                                  Total GST Amount{" "}
                                  <span>{totalGstAmount.toFixed(3)}</span>
                                </p> */}
                                {/* <p>
                                  Vat <span>$0.00</span>
                                </p> */}
                                <div className="status-toggle justify-content-between">
                                  {/* <div className="d-flex align-center">
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
                                  </div> */}
                                  {/* <span>$0.00</span> */}
                                </div>
                              </div>
                              {productsAdded && (
                             <div className="invoice-total-footer">
                             <h4>
                               Taxable Amount <span>{taxableAmount.toFixed(3)}</span>
                             </h4>
                             <h4>
                               Total Discount ({totalDiscountPercentage}%){" "}
                               <span>{totalDiscount.toFixed(3)}</span>
                             </h4>
                             {isGstEnabled && (
                              <>
                             <h4>
                               Total Tax ({totalTaxPercentage}%){" "}
                               <span>
                                 {isGstEnabled ? totalTax.toFixed(3) : "Exemption"}
                               </span>
                             </h4>
                         
                               
                                 <h4>
                                   CGST ({cgstTaxPercentage}%){" "}
                                   <span>{cgstTaxAmount.toFixed(3)}</span>
                                 </h4>
                                 <h4>
                                   SGST ({sgstTaxPercentage}%){" "}
                                   <span>{sgstTaxAmount.toFixed(3)}</span>
                                 </h4>
                               </>
                             )}
                             <h4>
                               Grand Total(INR) <span>{totalAmount.toFixed(3)}</span>
                             </h4>
                             {selectedCitys && (
                               <div>
                                 <h4>
                                   Currency ({selectedCurrency}) <span>{grandTotalInSelectedCurrency}</span>
                                 </h4>
                               </div>
                             )}
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
                               <Select
                                 style={{ width: "100%" }}
                                 value={selectedCitys}
                                 onChange={handleCitysChange}
                               >
                                 {currencyData.map((city) => (
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
                              )}
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
                                  src={formData.bankDetails.signatureImage}
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
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Tax & Discount Modal */}
        <div
          className="modal custom-modal fade"
          id="add_discount"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0 align-center">
                  <h4 className="mb-0">Add Tax &amp; Discount</h4>
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
                      <label>Rate</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder={120}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer add-tax-btns">
                <button
                  type="reset"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Tax & Discount Modal */}

        {/* Delete Items Modal */}
        <div
          className="modal custom-modal fade"
          id="delete_discount"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 justify-content-center pb-0">
                <div className="form-header modal-header-title text-center mb-0">
                  <h4 className="mb-2">Delete Product / Services</h4>
                  <p>Are you sure want to delete?</p>
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Items Modal */}

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
                  <h4 className="mb-0">Add Bank Details </h4>
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
                    <div>
                      {/* <li>
                        <Select2
                          className="w-100"
                          data={customeroptions}
                          options={{
                            placeholder: "Choose Customer",
                          }}
                          value={formData?.customerName}
                          onChange={(e) =>
                            handleInputChange("customerName", e.target.value)
                          }
                        />
                      </li> */}
                      <div>
                        <label htmlFor="accountSelect">Choose Account:</label>
                        {/* <select
                          id="accountSelect"
                          value={
                            selectedAccount ? selectedAccount.branchName : ""
                          }
                          onChange={handleAccountChange}
                        >
                          <option value="">Select Account</option>
                          {bankData.map((account) => (
                            <option
                              key={account._id}
                              value={account.branchName}
                            >
                              {account.branchName}
                            </option>
                          ))}
                        </select> */}
                        <Select2
                          data={bankoptions}
                          options={{
                            placeholder: "Choose Bank",
                          }}
                          value={formData?.bankDetails?.selectBank}
                          onChange={handleAccountChange}
                        />
                      </div>
                    </div>

                    {/* {selectedAccount && (
                      <div>
                        <h2>Account Details</h2>
                        <p>Opening Balance: {selectedAccount.openingBalance}</p>
                        <p>Date: {selectedAccount.date}</p>
                        <p>
                          Bank Account Number:{" "}
                          {selectedAccount.bankAccountNumber}
                        </p>
                        <p>IFSC Code: {selectedAccount.IFSCCode}</p>
                        <p>Branch Name: {selectedAccount.branchName}</p>
                        <p>
                          Account Holder's Name:{" "}
                          {selectedAccount.accountHoldersName}
                        </p>
                        <p>UPI ID: {selectedAccount.UPIID}</p>
                      </div>
                    )} */}

                    {/* <div className="form-group">
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
                    </div> */}
                  </div>
                  {/* <div className="col-lg-12 col-md-12">
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
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
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
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
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
                  </div> */}
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
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product &&
                        product.map((prod) => (
                          <tr key={prod._id}>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.quality}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-primary me-2"
                                  onClick={() => {
                                    handleproductchange(prod._id);
                                    notify();
                                    handleAddProducts();
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

export default AddInvoice;
