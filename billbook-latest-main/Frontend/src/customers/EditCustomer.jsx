
//import ImgCrop from 'antd-img-crop';
import React, { useEffect, useState } from 'react';
//import { Upload } from 'antd';
import CoutryCodes from '../Data/Country.json';
import axios from 'axios';
import { message } from 'antd';
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { img10 } from "../_components/imagepath";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";



const AddCustomer = () => {

  const [menu, setMenu] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [currencyError, setCurrencyError] = useState('');
  const [websiteError, setWebsiteError] = useState('');
  const [notesError, setNotesError] = useState('');
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(false);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currency: '',
    website: '',
    notes: '',
    billingAddress: {
      name: '',
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      country: '',
      state: '',
      city: '',
    },
    shippingAddress: {
      name: '',
      addressLine1: '',
      addressLine2: '',
      pincode: '',
      country: '',
      state: '',
      city: '',
    },
    image: null,
  });

  const [validation, setValidation] = useState({
    name: true,
    email: true,
    phone: true,
  });


  console.log("formdata", formData)


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:8000/api/addCustomer/update-customer/${id}`,
        { formData }
      );

      console.log("DataUpdated:", response.data);

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Customer Edited successfully!',
          showConfirmButton: false,
          timer: 1500,
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to edit customer. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'An error occurred while editing the customer.',
      });

      console.error('Error:', error);
    }
  };


  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/addCustomer/customers"
  //     );
  //     const dataWithIdsAndTotalInvoices = await Promise.all(
  //       response.data.map(async (item, index) => {
  //         const imageUrl = item.image?.url;
  //         const imageData = imageUrl ? await fetchImageData(imageUrl) : null;
  //         return {
  //           ...item,
  //           id: index + 1,
  //           image: imageData,
  //         };
  //       })
  //     );
  //     setDatasource(dataWithIdsAndTotalInvoices);

  //     console.log("tabledata", dataWithIdsAndTotalInvoices);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { id } = useParams();
  useEffect(() => {
    const fetchCustomerDetails = async (id) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/addCustomer/customers/${id}`
        );
        if (response.ok) {
          const customerDetails = await response.json();
          setFormData(customerDetails);
          console.log("customerDetailsfetch", customerDetails);
        } else {
          console.error("Failed to fetch customer details");
        }
      } catch (error) {
        console.error("Error fetching invoice details", error);
      }
    };
    fetchCustomerDetails(id)
  }, [id])


  // const handleField09';Change = (e, fieldName,  subField = null) => {
  //   const value = e.target ? e.target.value : e;
  //   setFormData((prevFormData) => {
  //     const newFormData = { ...prevFormData };
  //     if (subField) {
  //       newFormData[fieldName][subField] = value;
  //     } else {
  //       newFormData[fieldName] = value;
  //     }
  //     return newFormData;
  //   });

  const handleFieldChange = (e, fieldPath, fieldName) => {
    // Split the fieldPath into an array to access nested properties
    const pathArray = fieldPath.split('.');

    // Create a copy of the current state
    const updatedFormData = { ...formData };

    // Traverse the pathArray to the nested property
    let nestedObject = updatedFormData;
    for (let i = 0; i < pathArray.length - 1; i++) {
      nestedObject = nestedObject[pathArray[i]];
    }

    // Update the nested property with the new value
    nestedObject[pathArray[pathArray.length - 1]] = e.target.value;

    // Update the state with the modified formData
    setFormData(updatedFormData);
  };










  const data = CoutryCodes;

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  // Shipping country data 
  const [billingCountries, setBillingCountries] = useState([]);
  const [selectedBillingCountry, setSelectedBillingCountry] = useState('');
  const [billingstates, setBillingStates] = useState([]);
  const [selectedBillingState, setSelectedBillingState] = useState('');
  const [billingcities, setBillingCities] = useState([]);
  const [selectedBillingCity, setSelectedBillingCity] = useState('');

  const [sameAdressischecked, setSameAdressischecked] = useState(false)

  // Shipping country data 
  useEffect(() => {
    // Fetch a list of countries from the Geonames.org API
    fetch('http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=srikanthhirola')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.geonames);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch a list of states for the selected country from Geonames.org
      fetch(`http://api.geonames.org/childrenJSON?geonameId=${selectedCountry}&username=srikanthhirola`)
        .then((response) => response.json())
        .then((data) => {
          setStates(data.geonames);
        })
        .catch((error) => {
          console.error('Error fetching states:', error);
        });
    } else {
      setStates([]);
      setSelectedState('');
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      // Fetch a list of cities for the selected state from Geonames.org
      fetch(`http://api.geonames.org/childrenJSON?geonameId=${selectedState}&username=srikanthhirola`)
        .then((response) => response.json())
        .then((data) => {
          setCities(data.geonames);
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
        });
    } else {
      setCities([]);
      setSelectedCity('');
    }
  }, [selectedState]);




  // Shipping country data 
  useEffect(() => {
    // Fetch a list of countries from the Geonames.org API
    fetch('http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&username=srikanthhirola')
      .then((response) => response.json())
      .then((data) => {
        setBillingCountries(data.geonames);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedBillingCountry) {
      // Fetch a list of states for the selected country from Geonames.org
      fetch(`http://api.geonames.org/childrenJSON?geonameId=${selectedBillingCountry}&username=srikanthhirola`)
        .then((response) => response.json())
        .then((data) => {
          setBillingStates(data.geonames);
        })
        .catch((error) => {
          console.error('Error fetching states:', error);
        });
    } else {
      setBillingStates([]);
      setSelectedBillingState('');
    }
  }, [selectedBillingCountry]);

  useEffect(() => {
    if (selectedBillingState) {
      // Fetch a list of cities for the selected state from Geonames.org
      fetch(`http://api.geonames.org/childrenJSON?geonameId=${selectedBillingState}&username=srikanthhirola`)
        .then((response) => response.json())
        .then((data) => {
          setBillingCities(data.geonames);
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
        });
    } else {
      setBillingCities([]);
      setSelectedBillingCity('');
    }
  }, [selectedBillingState]);




  // Shipping country data 

  // const handleCountryChange = (e) => {
  //   setSelectedCountry(e.target.value);

  //   setSelectedState('');
  //   setSelectedCity('');
  // };

  const handleCountryChange = (e) => {
    const newSelectedCountry = e.target.value;
    setSelectedCountry(newSelectedCountry);
    // Update the form data with the new selected country
    setFormData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        country: newSelectedCountry,
      },
    }));
    // Reset state for state and city if needed
    setSelectedState('');
    setSelectedCity('');
  };


  const handleStateChange = (e) => {
    const newSelectedState = e.target.value;
    setSelectedState(newSelectedState);

    setFormData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        state: newSelectedState,
      }
    }))
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    const newSelectedCity = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      billingAddress: {
        ...prevFormData.billingAddress,
        city: newSelectedCity,
      }
    }))
  };



  // Shipping country data 
  const handleCountryChangeTwo = (e) => {
    const newSelectedCountry = e.target.value;
    setSelectedBillingCountry(newSelectedCountry)
    setFormData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        country: newSelectedCountry
      }
    }))
    setSelectedBillingState('');
    setSelectedBillingCity('');
  };

  const handleStateChangeTwo = (e) => {
    const newSelectedState = e.target.value;
    setSelectedBillingState(newSelectedState)

    setFormData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        state: newSelectedState,
      }
    }))
    setSelectedCity('');
  };

  const handleCityChangeTwo = (e) => {

    const newSelectedCity = e.target.value;
    setSelectedBillingCity(newSelectedCity);

    setFormData((prevFormData) => ({
      ...prevFormData,
      shippingAddress: {
        ...prevFormData.shippingAddress,
        city: newSelectedCity,
      }
    }))
  };



  // Shipping country data 
  // Image upload Here 

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Img = reader.result;
        setFormData({
          ...formData,
          image: base64Img
        })
      }
      reader.readAsDataURL(file);
    }
  }



  const handleSameAsBillingChange = (e) => {
    const isChecked = e.target.checked;


    if (isChecked) {
      setFormData({
        ...formData,
        shippingAddress: { ...formData.billingAddress },
        sameAsBilling: isChecked,
      });
    } else {

      setFormData({
        ...formData,
        shippingAddress: {
          name: '',
          addressLine1: '',
          addressLine2: '',
          pincode: '',
          country: '',
          state: '',
          city: '',
        },
        sameAsBilling: isChecked,
      });
    }
  };

  console.log('formdata', formData);





  // image upload here
  return (
    <div>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Edit Customers</h5>
              </div>
            </div>
            <div className="container bg-light">
              <div className="col-md-12 mx-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="form-group-item">
                        <h5 className="form-title">Profile Picture</h5>
                        <div className="profile-picture">
                          <div className="upload-profile">
                            <div className="profile-img">
                              {formData.image ? (
                                <img id="blah" className="avatar" src={formData.image.url} alt="Profile" />
                              ) : (
                                <img id="blah" className="avatar" src={img10} alt="" />
                              )}
                            </div>
                            <div className="add-profile">
                              <h5>Upload a New Photo</h5>
                              <span>{formData.image ? 'Profile-pic.jpg' : ''}</span>
                            </div>
                          </div>
                          <div className="img-upload">
                            <label className="btn btn-primary me-2">
                              Upload
                              <input type="file" className="d-none" onChange={handleImageChange} required />
                            </label>
                            <button className="btn btn-remove" onClick={() => setFormData({ image: null })}>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <form className="row g-3" onSubmit={handleFormSubmit}>
                    <div className="col-md-4">
                      <label htmlFor="inputName4" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className={`form-control ${!validation.name ? "is-invalid" : ""}`}
                        id="inputName4"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                        }}
                      />
                      {!validation.name && (
                        <div className="invalid-feedback">Please enter a valid name.</div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputEmail4" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control ${!validation.email ? "is-invalid" : ""}`}
                        id="inputEmail4"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                      />
                      {!validation.email && (
                        <div className="invalid-feedback">Please enter a valid email.</div>
                      )}
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className={`form-control ${!validation.phone ? "is-invalid" : ""}`}
                        id="inputPhone"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });

                        }}
                      />{!validation.phone && (
                        <div className="invalid-feedback">Please enter a valid phone number.</div>
                      )}
                    </div>
                    <div class="col-md-4">
                      <label for="inputCurrency" class="form-label">Currency</label>
                      <select
                        id="inputCurrency"
                        class="form-select"
                        value={formData.currency}
                        onChange={(e) => handleFieldChange(e, 'currency')}
                      >
                        {
                          data.map((cData) => (
                            <option value={cData.code}>{cData.code}</option>
                          ))
                        }
                      </select>
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="inputWebsite" className="form-label">
                        Website
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputWebsite"
                        value={formData.website}
                        onChange={(e) => {
                          setFormData({ ...formData, website: e.target.value });

                        }}
                      />
                      {websiteError && <span className="text-danger">{websiteError}</span>}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputNotes" className="form-label">
                        Notes
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputNotes"
                        value={formData.notes}
                        onChange={(e) => {
                          setFormData({ ...formData, notes: e.target.value });

                        }}
                      />
                      {notesError && <span className="text-danger">{notesError}</span>}
                    </div>



                    <div className="row">
                      <div className="col-md-6">
                        <h2 className='mt-3 mb-3 fs-4'>Billing Address</h2>
                        <div className="row">
                          <div class="col-md-12 mb-3">
                            <label for="inputEmail4" class="form-label">Name</label>
                            <input type="name" class="form-control" id="inputEmail4" value={formData.billingAddress.name}
                              onChange={(e) => handleFieldChange(e, 'billingAddress.name', 'name')} />
                          </div>

                          <div class="col-md-12 mb-3">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={formData.billingAddress.addressLine1}
                              onChange={(e) => handleFieldChange(e, 'billingAddress.addressLine1', 'addressLine1')} />
                          </div>

                          <div class="col-md-6 mb-3">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={formData.billingAddress.addressLine2}
                              onChange={(e) => handleFieldChange(e, 'billingAddress.addressLine2', 'addressLine2')} />
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="inputAddress2" class="form-label">Pincode</label>
                            <input type="text" class="form-control" id="Pincode" placeholder="Enter Pincode" value={formData.billingAddress.pincode}
                              onChange={(e) => handleFieldChange(e, 'billingAddress.pincode', 'pincode')} />
                          </div>
                          <div className="row">
                            <div className='col-md-6'>
                              <label className='form-label' htmlFor="countryDropdownTwo">Select a Country:</label>
                              <select
                                id="countryDropdownTwo"
                                value={formData.billingAddress.country}
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
                                  <label className='form-label' htmlFor="stateDropdownOne">Select a State:</label>
                                  <select
                                    id="stateDropdownOne"
                                    value={formData.billingAddress.state}
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
                                  <label class="form-label" htmlFor="cityDropdownOne">Select a City:</label>
                                  <select
                                    id="cityDropdownOne"
                                    value={formData.billingAddress.city}
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
                        <div className="col-md-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="sameAsBilling"
                              checked={formData.sameAsBilling}
                              onChange={handleSameAsBillingChange}
                            />
                            <label className="form-check-label" htmlFor="sameAsBilling">
                              Same as Billing Address
                            </label>
                          </div>
                        </div>
                      </div>
                      {!formData.sameAsBilling && (
                        <div className="col-md-6">
                          <h2 className='mt-3 mb-3 fs-4'>Shipping Address</h2>
                          <div className="row">
                            <div class="col-md-12">
                              <label for="inputEmail4" class="form-label">Name</label>
                              <input type="name" class="form-control" id="inputEmail4" value={formData.shippingAddress.name}
                                onChange={(e) => handleFieldChange(e, 'shippingAddress.name', 'name')} />
                            </div>

                            <div class="col-md-12">
                              <label for="inputAddress" class="form-label">Address</label>
                              <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={formData.shippingAddress.addressLine1}
                                onChange={(e) => handleFieldChange(e, 'shippingAddress.addressLine1', 'addressLine1')} />
                            </div>

                            <div class="col-md-6">
                              <label for="inputAddress2" class="form-label">Address 2</label>
                              <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={formData.shippingAddress.addressLine2}
                                onChange={(e) => handleFieldChange(e, 'shippingAddress.addressLine2', 'addressLine2')} />
                            </div>
                            <div class="col-md-6">
                              <label for="inputAddress2" class="form-label">Pincode</label>
                              <input type="text" class="form-control" id="Pincode" placeholder="Enter Pincode" value={formData.shippingAddress.pincode}
                                onChange={(e) => handleFieldChange(e, 'shippingAddress.pincode', 'pincode')} />
                            </div>
                            <div className="row">
                              <div className='col-md-6'>
                                <label className='form-label' htmlFor="countryDropdownTwo">Select a Country:</label>
                                <select
                                  id="countryDropdownTwo"
                                  value={formData.shippingAddress.country}
                                  onChange={handleCountryChangeTwo}
                                  className="form-select"
                                >
                                  <option value="">Select a country</option>
                                  {billingCountries.map((country) => (
                                    <option key={country.geonameId} value={country.geonameId}>
                                      {country.countryName}
                                    </option>
                                  ))}
                                </select>
                                <br />
                              </div>
                              <div className="col-md-6">
                                {selectedBillingCountry && (
                                  <div>
                                    <label className='form-label' htmlFor="stateDropdownTwo">Select a State:</label>
                                    <select
                                      id="stateDropdownTwo"
                                      value={formData.shippingAddress.state}
                                      onChange={handleStateChangeTwo}
                                      class="form-select"
                                    >
                                      <option value="">Select a state</option>
                                      {billingstates.map((state) => (
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

                                {selectedBillingState && (
                                  <div>
                                    <label class="form-label" htmlFor="cityDropdownTwo">Select a City:</label>
                                    <select
                                      id="cityDropdownTwo"
                                      value={formData.shippingAddress.city}
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
                    {/* <div className="col-12 mt-3">
  <button className="btn btn-secondary" onClick={copyBillingToShipping}>
    Copy Billing Address to Shipping Address
  </button>
</div> */}
                    <div className="col-12">
                      <button className="btn btn-primary" onClick={handleFormSubmit}>
                        Submit
                      </button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default AddCustomer
