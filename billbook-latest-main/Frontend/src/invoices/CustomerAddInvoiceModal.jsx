import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CustomerAddInvoiceModal = ({ onClose }) => {
  const [showAddresses, setShowAddresses] = useState(false);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [billingCountries, setBillingCountries] = useState([]);
  const [selectedBillingCountry, setSelectedBillingCountry] = useState("");
  const [billingstates, setBillingStates] = useState([]);
  const [selectedBillingState, setSelectedBillingState] = useState("");
  const [billingcities, setBillingCities] = useState([]);
  const [selectedBillingCity, setSelectedBillingCity] = useState("");

  useEffect(() => {
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

  useEffect(() => {
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

  const handleCountryChange = (e) => {
    const newSelectedCountry = e.target.value;
    setSelectedCountry(newSelectedCountry);

    setCusformData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        country: newSelectedCountry,
      },
    }));

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

    if (isChecked) {
      setCusformData({
        ...cusformData,
        shippingAddress: { ...cusformData.billingAddress },
        sameAsBilling: isChecked,
      });
    } else {
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

  const handleShowAddresses = () => {
    setShowAddresses(!showAddresses);
  };

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

      console.log("response data", response)

      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Customer added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        onClose();
        window.location.reload();
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

  return (
    <>
      <div className="col-md-12">
        <form className="row g-3" onSubmit={handleFormSubmit}>
          <div className="col-md-12">
            <label htmlFor="inputName4" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-control ${!validation.name ? "is-invalid" : ""}`}
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
              <div className="invalid-feedback">Please enter a valid name.</div>
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
      <Link to="#" className="text-danger" onClick={handleShowAddresses}>
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
                    handleFieldChange(e, "billingAddress.name", "name")
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
                    handleFieldChange(e, "billingAddress.pincode", "pincode")
                  }
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="countryDropdownTwo">
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
                      <option key={country.geonameId} value={country.geonameId}>
                        {country.countryName}
                      </option>
                    ))}
                  </select>
                  <br />
                </div>
                <div className="col-md-6">
                  {selectedCountry && (
                    <div>
                      <label className="form-label" htmlFor="stateDropdownOne">
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
                          <option key={state.geonameId} value={state.geonameId}>
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
                      <label class="form-label" htmlFor="cityDropdownOne">
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
                          <option key={city.geonameId} value={city.geonameId}>
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
                      handleFieldChange(e, "shippingAddress.name", "name")
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
                      handleFieldChange(e, "shippingAddress.pincode", "pincode")
                    }
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="countryDropdownTwo">
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
                        <label class="form-label" htmlFor="cityDropdownTwo">
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
                            <option key={city.geonameId} value={city.geonameId}>
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

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-primary mt-2" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerAddInvoiceModal;
