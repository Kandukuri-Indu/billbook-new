import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Logo, signature, circle1, circle2 } from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import Select2 from "react-select2-wrapper";
import "regenerator-runtime/runtime";
import axios from "axios";
import { Select, Table } from "antd";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddInvoice = () => {
  const [menu, setMenu] = useState(false);
  const [showAddresses, setShowAddresses] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const handleAddChargesClick = () => {
    setShowInput(true);
  };

  const [gstRate, setGstRate] = useState(18);
  const [gstData, setGstData] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");

  const [cgstAmount, setCgstAmount] = useState(0);
  const [sgstAmount, setSgstAmount] = useState(0);
  const [cessAmount, setCessAmount] = useState(0);
  const [totalGstAmount, setTotalGstAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [individualGstRates, setIndividualGstRates] = useState([]);

  const calculateGst = (inputAmount, newGstRate, selectedGstRate) => {
    let calculatedGst = (inputAmount * newGstRate) / 100;
    let newCessAmount = 0;
  
    if (selectedGstRate === 14 || selectedGstRate === 28 || selectedGstRate === 60) {
      const cessRate = 12; // Common Cess rate for 14%, 28%, and 60% GST
      newCessAmount = (inputAmount * cessRate) / 100;
      calculatedGst += newCessAmount;
    }
  
    const cgst = calculatedGst / 2;
    const sgst = calculatedGst / 2;
  
    return {
      cgstAmount: cgst,
      sgstAmount: sgst,
      cessAmount: newCessAmount,
      totalGstAmount: calculatedGst,
      totalAmount: inputAmount + calculatedGst + newCessAmount,
    };
  };
  
  // const handleGstRateChange = (e, index) => {
  //   const newGstRate = parseFloat(e.target.value);
  
  //   setFormData((prevData) => {
  //     const updatedTable = prevData.table.map((item, i) => {
  //       if (i === index) {
  //         // Apply the new GST rate only to the selected product
  //         const {
  //           cgstAmount,
  //           sgstAmount,
  //           cessAmount,
  //           totalGstAmount,
  //           totalAmount,
  //         } = calculateGst(item.totalAmount, newGstRate, item.selectedGstRate);
  
  //         return {
  //           ...item,
  //           selectedGstRate: newGstRate, // Set the new gstRate directly in the table item
  //           cgstAmount,
  //           sgstAmount,
  //           cessAmount,
  //           totalGstAmount,
  //           totalAmount,
  //         };
  //       }
  
  //       return item;
  //     });
  
  //     // Calculate grandTotal by summing up the totalAmount from all items in the table
  //     const grandTotal = updatedTable.reduce(
  //       (total, item) => total + item.totalAmount,
  //       0
  //     );
  
  //     // Calculate total GST for all selected products
  //     const totalGst = updatedTable.reduce(
  //       (total, item) => total + item.totalGstAmount,
  //       0
  //     );
  
  //     return {
  //       ...prevData,
  //       table: updatedTable,
  //       bankDetails: {
  //         ...prevData.bankDetails,
  //         grandTotal,
  //         totalGst,
  //       },
  //     };
  //   });
  // }; 

  const [formData, setFormData] = useState({
    invoiceNumber: "",
    customerName: "",
    invoiceDate: new Date(),
    dueDate: new Date(),
    referenceNo: "",
    products: "",
    paymentTerms: "",
    currency: "",
    website: "",
    // notes: "",
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
      totalGst: 0,
    },
  });

  console.log("formdata", formData);

  const [cusformData, setCusformData] = useState({
    name: "",
    email: "",
    phone: "",
    billingAddress: {
      name: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      country: "",
      state: "",
      city: "",
    },
    shippingAddress: {
      name: "",
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      country: "",
      state: "",
      city: "",
    },
  });

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/addCustomer/customers",
        cusformData
      );

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Customer added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to add customer. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "An error occurred while adding the customer.",
      });

      console.error("Error:", error);
    }
  };

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const nameValid = nameRegex.test(cusformData.name);
    const emailValid = emailRegex.test(cusformData.email);
    const phoneValid = phoneRegex.test(cusformData.phone);

    setValidation({
      name: nameValid,
      email: emailValid,
      phone: phoneValid,
    });

    return nameValid && emailValid && phoneValid;
  };

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [currency, setCurrency] = useState([
    { id: 1, text: "Select Currency" },
    { id: 2, text: "US dollar" },
    { id: 3, text: "Euro" },
    { id: 4, text: "Pound sterling" },
    { id: 5, text: "Swiss franc" },
  ]);

  useEffect(() => {
    console.log("Component updated:", formData);
  }, [formData]);

  const handleShowAddresses = () => {
    setShowAddresses(!showAddresses);
  };

  const handleDateChange = (fieldName, date) => {
    console.log("handleDateChange called");
    setFormData({ ...formData, [fieldName]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/addInvoice/invoices",
        { formData }
      );

      console.log("Data submitted successfully:", response.data);

      // Update the state with the new data
      // setDatasource([...datasource, response.data]);

      // Close the modal
      setShow(false);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleGstRateChange = (e, index) => {
    const newGstRate = parseFloat(e.target.value);

    setFormData((prevData) => {
      const updatedTable = prevData.table.map((item, i) => {
        if (i === index) {
          // Apply the new GST rate only to the selected product
          const {
            cgstAmount,
            sgstAmount,
            cessAmount,
            totalGstAmount,
            totalAmount,
          } = calculateGst(item.totalAmount, newGstRate);

          return {
            ...item,
            gstRate: newGstRate, 
            cgstAmount,
            sgstAmount,
            cessAmount,
            totalGstAmount,
            totalAmount,
          };
        }

        return item;
      });

      // Calculate grandTotal by summing up the totalAmount from all items in the table
      const grandTotal = updatedTable.reduce(
        (total, item) => total + item.totalAmount,
        0
      );

      // Calculate total GST for all selected products
      const totalGst = updatedTable.reduce(
        (total, item) => total + item.totalGstAmount,
        0
      );

      return {
        ...prevData,
        table: updatedTable,
        bankDetails: {
          ...prevData.bankDetails,
          grandTotal, 
          totalGst, 
        },
      };
    });
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

  const calculateTotalAmountForAllProducts = () => {
    let total = 0;
    formData.table.forEach((item) => {
      total += parseFloat(item.totalAmount) || 0;
    });
    setTotalAmount(total.toFixed(2));
  };

  useEffect(() => {
    calculateTotalAmountForAllProducts();
  }, [formData.table]);



  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Update the state with the base64 representation of the image
        setFormData((prevData) => ({
          ...prevData,
          bankDetails: {
            ...prevData.bankDetails,
            signatureImage: reader.result,
          },
        }));
      };

      // Convert the file to base64
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target.value);
  
    if (formData.table && formData.table.length > index) {
      
      handletableFieldChange(index, "quantity", newQuantity);
    }
  };

  const handleDiscountChange = (e, index) => {
    const newDiscount = parseFloat(e.target.value);

    // Check if the table array is initialized
    if (formData.table && formData.table.length > index) {
      // Update the discount in the table
      handletableFieldChange(index, "discount", newDiscount);

      // Calculate total discount
      const totalDiscount = formData.table.reduce(
        (total, item) => total + (item.discount || 0),
        0
      );

      // Update the state with the total discount
      setFormData((prevData) => ({
        ...prevData,
        bankDetails: {
          ...prevData.bankDetails,
          totalDiscount,
        },
      }));
    }
  };

  const handletableFieldChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      updatedTable[index][field] = value;

      // Check which field was updated
      if (field === "quantity") {
        // Handle quantity change
        calculateTotalAmount(
          updatedTable[index].price,
          value,
          updatedTable[index].discount,
          index
        );
      } else if (field === "discount") {
        // Handle discount change
        calculateTotalAmount(
          updatedTable[index].price,
          updatedTable[index].quantity,
          value,
          index
        );
      }

      return {
        ...prevData,
        table: updatedTable,
      };
    });
  };

  const calculateTotalAmount = (newPrice, newQuantity, newDiscount, index) => {
    const totalAmountBeforeDiscount = newPrice * newQuantity;
    const discountAmount = (newDiscount / 100) * totalAmountBeforeDiscount;
    const totalAmount = totalAmountBeforeDiscount - discountAmount;

    // Update the total amount in the table
    handleChangeTableField(index, "amount", totalAmount);
  };

  const handleChangeTableField = (index, field, value) => {
    setFormData((prevData) => {
      const updatedTable = [...prevData.table];
      updatedTable[index][field] = value;

      // Check if the field is 'amount' and recalculate GST if necessary
      if (field === "amount") {
        const newAmount = parseFloat(value);
        const {
          cgstAmount,
          sgstAmount,
          cessAmount,
          totalGstAmount,
          totalAmount: newTotalAmount,
        } = calculateGst(newAmount, gstRate);

        updatedTable[index].cgstAmount = cgstAmount;
        updatedTable[index].sgstAmount = sgstAmount;
        updatedTable[index].cessAmount = cessAmount;
        updatedTable[index].totalGstAmount = totalGstAmount;
        updatedTable[index].totalAmount = newTotalAmount;
      }

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

  const handleFieldChange = (e, fieldPath, fieldName) => {
    const pathArray = fieldPath.split(".");
    const updatedFormData = { ...cusformData };
    let nestedObject = updatedFormData;
    for (let i = 0; i < pathArray.length - 1; i++) {
      nestedObject = nestedObject[pathArray[i]];
    }
    nestedObject[pathArray[pathArray.length - 1]] = e.target.value;
    setCusformData(updatedFormData);
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // Shipping country data
  const [billingCountries, setBillingCountries] = useState([]);
  const [selectedBillingCountry, setSelectedBillingCountry] = useState("");
  const [billingstates, setBillingStates] = useState([]);
  const [selectedBillingState, setSelectedBillingState] = useState("");
  const [billingcities, setBillingCities] = useState([]);
  const [selectedBillingCity, setSelectedBillingCity] = useState("");

  // Shipping country data
  useEffect(() => {
    // Fetch a list of countries from the Geonames.org API
    fetch(
      "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=srikanthhirola"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.geonames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch a list of states for the selected country from Geonames.org
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${selectedCountry}&username=srikanthhirola`
      )
        .then((response) => response.json())
        .then((data) => {
          setStates(data.geonames);
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
        });
    } else {
      setStates([]);
      setSelectedState("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      // Fetch a list of cities for the selected state from Geonames.orga
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${selectedState}&username=srikanthhirola`
      )
        .then((response) => response.json())
        .then((data) => {
          setCities(data.geonames);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState]);

  // Shipping country data
  useEffect(() => {
    // Fetch a list of countries from the Geonames.org API
    fetch(
      "http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=srikanthhirola"
    )
      .then((response) => response.json())
      .then((data) => {
        setBillingCountries(data.geonames);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedBillingCountry) {
      // Fetch a list of states for the selected country from Geonames.org
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${selectedBillingCountry}&username=srikanthhirola`
      )
        .then((response) => response.json())
        .then((data) => {
          setBillingStates(data.geonames);
        })
        .catch((error) => {
          console.error("Error fetching states:", error);
        });
    } else {
      setBillingStates([]);
      setSelectedBillingState("");
    }
  }, [selectedBillingCountry]);

  useEffect(() => {
    if (selectedBillingState) {
      // Fetch a list of cities for the selected state from Geonames.org
      fetch(
        `http://api.geonames.org/childrenJSON?geonameId=${selectedBillingState}&username=srikanthhirola`
      )
        .then((response) => response.json())
        .then((data) => {
          setBillingCities(data.geonames);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    } else {
      setBillingCities([]);
      setSelectedBillingCity("");
    }
  }, [selectedBillingState]);

  // Shipping country data

  const handleCountryChange = (e) => {
    const newSelectedCountry = e.target.value;
    setSelectedCountry(newSelectedCountry);
    // Update the form data with the new selected country
    setCusformData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        country: newSelectedCountry,
      },
    }));
    // Reset state for state and city if needed
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    const newSelectedState = e.target.value;
    setSelectedState(newSelectedState);

    setCusformData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        state: newSelectedState,
      },
    }));
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const newSelectedCity = e.target.value;

    setCusformData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        city: newSelectedCity,
      },
    }));
  };

  // Shipping country data
  const handleCountryChangeTwo = (e) => {
    const newSelectedCountry = e.target.value;
    setSelectedBillingCountry(newSelectedCountry);
    setCusformData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        country: newSelectedCountry,
      },
    }));
    setSelectedBillingState("");
    setSelectedBillingCity("");
  };

  const handleStateChangeTwo = (e) => {
    const newSelectedState = e.target.value;
    setSelectedBillingState(newSelectedState);

    setCusformData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        state: newSelectedState,
      },
    }));
    setSelectedCity("");
  };

  const handleCityChangeTwo = (e) => {
    const newSelectedCity = e.target.value;
    setSelectedBillingCity(newSelectedCity);

    setCusformData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        city: newSelectedCity,
      },
    }));
  };

  const handleSameAsBillingChange = (e) => {
    const isChecked = e.target.checked;

    // If sameAsBilling is checked, copy billing address to shipping address
    if (isChecked) {
      setCusformData({
        ...cusformData,
        shippingAddress: { ...cusformData.billingAddress },
        sameAsBilling: isChecked,
      });
    } else {
      // If unchecked, reset shipping address fields
      setCusformData({
        ...cusformData,
        shippingAddress: {
          name: "",
          addressLine1: "",
          addressLine2: "",
          pincode: "",
          country: "",
          state: "",
          city: "",
        },
        sameAsBilling: isChecked,
      });
    }
  };

  const [productadded, setproductadded] = useState(false);

  const handleproductchange = (productId) => {
    // Assuming you have the product details available
    const selectedProduct = product.find((prod) => prod._id === productId);

    // Copy the existing table array
    const newTable = [...formData.table];

    // Add the selected product to the table
    newTable.push({
      productId: selectedProduct._id,
      productName: selectedProduct.name,
      price: selectedProduct.price,
      quantity: 1, // You can set the initial quantity as needed
      discount: "",
      tax: "",
      totalAmount: selectedProduct.price,
    });

    // Update the formData state
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

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        {/* <!-- Page Wrapper --> */}
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
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Invoice Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Name"
                              value={formData.invoiceNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "invoiceNumber",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Customer Name</label>
                            <ul className="form-group-plus css-equal-heights">
                              <li>
                                <Select2
                                  // className="w-100"
                                  data={customeroptions}
                                  options={{
                                    placeholder: "Choose Customer",
                                  }}
                                  value={formData.customerName}
                                  onChange={(e) =>
                                    handleInputChange(
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
                                  data-bs-toggle="modal"
                                  data-bs-target="#customer_details"
                                >
                                  {/* <i className="fe fe-plus-circle" /> */}
                                  <FeatherIcon icon="plus-circle" />
                                </Link>
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
                              ></DatePicker>
                              {/* <FeatherIcon icon="calendar"/> */}
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

                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-xl-6 col-lg-12">
                              <div className="form-group-bank">
                                <div className="form-group">
                                  <label>Products</label>
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

                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Currency</label>
                            <Select2
                              // className="w-100"
                              data={currency}
                              options={{
                                placeholder: "Select Currency",
                              }}
                              value={formData.currency}
                              onChange={(e) =>
                                handleInputChange("currency", e.target.value)
                              }
                            />
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
                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Notes</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Notes"
                              value={formData.notes}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  notes: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div> */}
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
                                          maxLength="30"
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
                                          maxLength="30"
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
                                          value={item.discount}
                                          onChange={(e) =>
                                            handleDiscountChange(
                                              e,
                                              index,
                                              "discount"
                                            )
                                          }
                                          className="form-control form-control-sm"
                                          maxLength="30"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                        />
                                      </td>
                                      <td key={index}>
                                        <select
                                          value={item.gstRate}
                                          onChange={(e) =>
                                            handleGstRateChange(e, index)
                                          }
                                          className="form-control form-control-sm"
                                          maxLength="30"
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
                                          readOnly
                                          className="form-control form-control-sm"
                                          maxLength="30"
                                          style={{
                                            width: "130px",
                                            borderStyle: "dotted",
                                            borderWidth: "2px",
                                          }}
                                          onChange={(e) =>
                                            handleChangeTableField(
                                              e,
                                              index,
                                              "amount"
                                            )
                                          }
                                        />
                                      </td>
                                      <td className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="btn-action-icon me-2"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_discount"
                                        >
                                          <span>
                                            <FeatherIcon icon="edit" />
                                          </span>
                                        </Link>
                                        <Link
                                          to="#"
                                          className="btn-action-icon"
                                          data-bs-toggle="modal"
                                          data-bs-target="#delete_discount"
                                        >
                                          <span>
                                            <FeatherIcon icon="trash-2" />
                                          </span>
                                        </Link>
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
                                <p>
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
                                </p>
                                {/* <p>
                                  SGST Amount{" "}
                                  <span>{sgstAmount.toFixed(2)}</span>
                                </p>
                                <p>
                                  Discount{" "}
                                  <span>{totalGstAmount.toFixed(2)}</span>
                                </p>
                                <p>
                                  Total GST Amount{" "}
                                  <span>{totalGstAmount.toFixed(2)}</span>
                                </p> */}
                                {/* <p>
                                  Vat <span>$0.00</span>
                                </p> */}
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
                                  Total Amount <span> {totalAmount}</span>
                                </h4>
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
                {/* <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                  onClick={() => handleSave()}
                >
                  Save
                </Link> */}
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

        {/* //Products Modal */}
        <div className="modal-body">
          <div
            className="modal custom-modal fade"
            id="customer_details"
            role="dialog"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              style={{ maxWidth: "40%" }}
            >
              <div className="modal-content">
                <div className="modal-header border-0 pb-0">
                  <div className="form-header modal-header-title text-start mb-0">
                    <h4 className="mb-0">Add Customer Details</h4>
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
                  <div className="col-md-12">
                    <form className="row g-3" onSubmit={handleFormSubmit}>
                      <div className="col-md-12">
                        <label htmlFor="inputName4" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            !validation.name ? "is-invalid" : ""
                          }`}
                          id="inputName4"
                          value={cusformData.name}
                          onChange={(e) => {
                            setCusformData({
                              ...cusformData,
                              name: e.target.value,
                            });
                          }}
                        />
                        {!validation.name && (
                          <div className="invalid-feedback">
                            Please enter a valid name.
                          </div>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`form-control ${
                            !validation.email ? "is-invalid" : ""
                          }`}
                          id="inputEmail4"
                          value={cusformData.email}
                          onChange={(e) => {
                            setCusformData({
                              ...cusformData,
                              email: e.target.value,
                            });
                          }}
                        />
                        {!validation.email && (
                          <div className="invalid-feedback">
                            Please enter a valid email.
                          </div>
                        )}
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="inputPhone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            !validation.phone ? "is-invalid" : ""
                          }`}
                          id="inputPhone"
                          value={cusformData.phone}
                          onChange={(e) => {
                            setCusformData({
                              ...cusformData,
                              phone: e.target.value,
                            });
                          }}
                        />
                        {!validation.phone && (
                          <div className="invalid-feedback">
                            Please enter a valid phone number.
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                  <Link
                    to="#"
                    className="text-danger"
                    onClick={handleShowAddresses}
                  >
                    <h8 className="mb-0" style={{ color: "blue" }}>
                      + Add Address (optional)
                    </h8>
                  </Link>
                  {showAddresses && (
                    <div className="row ">
                      <div className="col-md-12">
                        <h6 className="mt-3 mb-3 fs-4">Billing Details</h6>
                        <div className="row">
                          <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">
                              Name
                            </label>
                            <input
                              type="name"
                              class="form-control"
                              id="inputEmail4"
                              value={cusformData.billingAddress.name}
                              onChange={(e) =>
                                handleFieldChange(
                                  e,
                                  "billingAddress.name",
                                  "name"
                                )
                              }
                            />
                          </div>

                          <div class="col-md-12">
                            <label for="inputAddress" class="form-label">
                              Address
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAddress"
                              placeholder="1234 Main St"
                              value={cusformData.billingAddress.addressLine1}
                              onChange={(e) =>
                                handleFieldChange(
                                  e,
                                  "billingAddress.addressLine1",
                                  "addressLine1"
                                )
                              }
                            />
                          </div>

                          <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">
                              Address 2
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputAddress2"
                              placeholder="Apartment, studio, or floor"
                              value={cusformData.billingAddress.addressLine2}
                              onChange={(e) =>
                                handleFieldChange(
                                  e,
                                  "billingAddress.addressLine2",
                                  "addressLine2"
                                )
                              }
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">
                              Pincode
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="Pincode"
                              placeholder="Enter Pincode"
                              value={cusformData.billingAddress.pincode}
                              onChange={(e) =>
                                handleFieldChange(
                                  e,
                                  "billingAddress.pincode",
                                  "pincode"
                                )
                              }
                            />
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label
                                className="form-label"
                                htmlFor="countryDropdownTwo"
                              >
                                Select a Country:
                              </label>
                              <select
                                id="countryDropdownTwo"
                                value={cusformData.billingAddress.country}
                                onChange={handleCountryChange}
                                className="form-select"
                              >
                                <option value="">Select a country</option>
                                {countries.map((country) => (
                                  <option
                                    key={country.geonameId}
                                    value={country.geonameId}
                                  >
                                    {country.countryName}
                                  </option>
                                ))}
                              </select>
                              <br />
                            </div>
                            <div className="col-md-6">
                              {selectedCountry && (
                                <div>
                                  <label
                                    className="form-label"
                                    htmlFor="stateDropdownOne"
                                  >
                                    Select a State:
                                  </label>
                                  <select
                                    id="stateDropdownOne"
                                    value={cusformData.billingAddress.state}
                                    onChange={handleStateChange}
                                    class="form-select"
                                  >
                                    <option value="">Select a state</option>
                                    {states.map((state) => (
                                      <option
                                        key={state.geonameId}
                                        value={state.geonameId}
                                      >
                                        {state.name}
                                      </option>
                                    ))}
                                  </select>
                                  <br />
                                </div>
                              )}
                            </div>
                            <div className="col-md-6">
                              {selectedState && (
                                <div>
                                  <label
                                    class="form-label"
                                    htmlFor="cityDropdownOne"
                                  >
                                    Select a City:
                                  </label>
                                  <select
                                    id="cityDropdownOne"
                                    value={cusformData.billingAddress.city}
                                    onChange={handleCityChange}
                                    class="form-select"
                                  >
                                    <option value="">Select a city</option>
                                    {cities.map((city) => (
                                      <option
                                        key={city.geonameId}
                                        value={city.geonameId}
                                      >
                                        {city.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div class="col-md-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="sameAsBilling"
                              checked={cusformData.sameAsBilling}
                              onChange={handleSameAsBillingChange}
                            />
                            <label class="form-check-label" for="sameAsBilling">
                              Same as Billing Address
                            </label>
                          </div>
                        </div>
                      </div>
                      {!cusformData.sameAsBilling && (
                        <div className="col-md-12">
                          <h2 className="mt-3 mb-3 fs-4">Shipping Address</h2>
                          <div className="row">
                            <div class="col-md-12">
                              <label for="inputEmail4" class="form-label">
                                Name
                              </label>
                              <input
                                type="name"
                                class="form-control"
                                id="inputEmail4"
                                value={cusformData.shippingAddress.name}
                                onChange={(e) =>
                                  handleFieldChange(
                                    e,
                                    "shippingAddress.name",
                                    "name"
                                  )
                                }
                              />
                            </div>

                            <div class="col-md-12">
                              <label for="inputAddress" class="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                value={cusformData.shippingAddress.addressLine1}
                                onChange={(e) =>
                                  handleFieldChange(
                                    e,
                                    "shippingAddress.addressLine1",
                                    "addressLine1"
                                  )
                                }
                              />
                            </div>

                            <div class="col-md-6">
                              <label for="inputAddress2" class="form-label">
                                Address 2
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress2"
                                placeholder="Apartment, studio, or floor"
                                value={cusformData.shippingAddress.addressLine2}
                                onChange={(e) =>
                                  handleFieldChange(
                                    e,
                                    "shippingAddress.addressLine2",
                                    "addressLine2"
                                  )
                                }
                              />
                            </div>
                            <div class="col-md-6">
                              <label for="inputAddress2" class="form-label">
                                Pincode
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="Pincode"
                                placeholder="Enter Pincode"
                                value={cusformData.shippingAddress.pincode}
                                onChange={(e) =>
                                  handleFieldChange(
                                    e,
                                    "shippingAddress.pincode",
                                    "pincode"
                                  )
                                }
                              />
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <label
                                  className="form-label"
                                  htmlFor="countryDropdownTwo"
                                >
                                  Select a Country:
                                </label>
                                <select
                                  id="countryDropdownTwo"
                                  value={cusformData.shippingAddress.country}
                                  onChange={handleCountryChangeTwo}
                                  className="form-select"
                                >
                                  <option value="">Select a country</option>
                                  {billingCountries.map((country) => (
                                    <option
                                      key={country.geonameId}
                                      value={country.geonameId}
                                    >
                                      {country.countryName}
                                    </option>
                                  ))}
                                </select>
                                <br />
                              </div>
                              <div className="col-md-6">
                                {selectedBillingCountry && (
                                  <div>
                                    <label
                                      className="form-label"
                                      htmlFor="stateDropdownTwo"
                                    >
                                      Select a State:
                                    </label>
                                    <select
                                      id="stateDropdownTwo"
                                      value={cusformData.shippingAddress.state}
                                      onChange={handleStateChangeTwo}
                                      class="form-select"
                                    >
                                      <option value="">Select a state</option>
                                      {billingstates.map((state) => (
                                        <option
                                          key={state.geonameId}
                                          value={state.geonameId}
                                        >
                                          {state.name}
                                        </option>
                                      ))}
                                    </select>
                                    <br />
                                  </div>
                                )}
                              </div>
                              <div className="col-md-6">
                                {selectedBillingState && (
                                  <div>
                                    <label
                                      class="form-label"
                                      htmlFor="cityDropdownTwo"
                                    >
                                      Select a City:
                                    </label>
                                    <select
                                      id="cityDropdownTwo"
                                      value={cusformData.shippingAddress.city}
                                      onChange={handleCityChangeTwo}
                                      class="form-select"
                                    >
                                      <option value="">Select a city</option>
                                      {billingcities.map((city) => (
                                        <option
                                          key={city.geonameId}
                                          value={city.geonameId}
                                        >
                                          {city.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="modal-footer">
                    <div className="col-12">
                      <button
                        className="btn btn-primary"
                        onClick={handleFormSubmit}
                      >
                        Submit
                      </button>
                    </div>
                    <Link
                      to="#"
                      data-bs-dismiss="modal"
                      className="btn btn-secondary paid-cancel-btn me-2"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product modal ends here */}
        </div>
      </div>
    </>
  );
};
export default AddInvoice;
