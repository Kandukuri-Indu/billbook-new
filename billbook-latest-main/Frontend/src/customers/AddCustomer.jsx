
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
    name: { isValid: true, message: '' },
    email: { isValid: true, message: '' },
    phone: { isValid: true, message: '' },
    currency: { isValid: true, message: '' },
    website: { isValid: true, message: '' },
    billingAddress: {
      name: { isValid: true, message: '' },
      addressLine1: { isValid: true, message: '' },
      addressLine2: { isValid: true, message: '' },
      pincode: { isValid: true, message: '' },
      country: { message: '' },
      state: { message: '' },
      city: { message: '' },
    },
    shippingAddress: {
      name: true,
      addressLine1: true,
      addressLine2: true,
      pincode: true,
      country: true,
      state: true,
      city: true,
    },
  });


  console.log("formdata", formData)


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let isFormValid = true;
    // Object.keys(formData).forEach((fieldName) => {
    //   if (formData[fieldName] === '') {
    //     isFormValid = false;
    //     setValidation((prevValidation) => ({
    //       ...prevValidation,
    //       [fieldName]: { isValid: false, message: 'Field cannot be empty' },
    //     }));
    //   }

    // }
    // );
    Object.keys(formData).forEach((fieldName) => {
      if (formData[fieldName] === '') {
        isFormValid = false;
        setValidation((prevValidation) => ({
          ...prevValidation,
          [fieldName]: { isValid: false, message: 'Field cannot be empty' },
        }));
      }
    });
    //billing 
    let isBillingValid = true;
    Object.keys(formData.billingAddress).forEach((fieldPath) => {
      if (formData.billingAddress[fieldPath] === '') {
        isBillingValid = false;
        setValidation((prevValidation) => ({
          ...prevValidation,
          billingAddress: {
            ...prevValidation.billingAddress,
            [fieldPath]: { isValid: false, message: 'Field cannot be empty' },
          },
        }));
      }
    });
    //countrydcf
    // Object.keys(formData.billingAddress).forEach(() => {

    // })
   
// if (!isFormValid ) {
//   return
// }
// if(!isBillingVaild){
//   console.log("All fields are valid");
//   return
// }
if (!isFormValid || !isBillingValid) {
  return;
}
// if (!isBillingVaild) {
//   return 
// }
// if (!validateForm()) {
//   return;
// }

try {
  const response = await axios.post('http://localhost:8000/api/addCustomer/customers', formData);

  if (response.status === 201) {
    Swal.fire({
      icon: 'success',
      title: 'Customer added successfully!',
      showConfirmButton: false,
      timer: 1500,
    });

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Failed to add customer. Please try again.',
    });
  }
} catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'An error occurred while adding the customer.',
  });

  console.error('Error:', error);
}
  };

const handleInputChange = (fieldName, value) => {
  let isValid = true;
  let message = '';

  // const validateForm = () => {

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;


  if (fieldName === 'name') {
    isValid = nameRegex.test(value);
    message = 'Invalid name';
  } else if (fieldName === 'email') {
    isValid = emailRegex.test(value);
    message = 'Invalid email';
  } else if (fieldName === 'phone') {
    isValid = phoneRegex.test(value);
    message = 'Invalid number';
  } else if (fieldName === 'website') {
    isValid = value;
    message = 'Invalid website';
  } else if (fieldName === 'currency') {
    isValid = value;
    message = 'Invalid';
  }
  // } else if (fieldName === 'billingAddress.name') {
  //   isValid = billingnameRegex.test(value);
  //   message = 'Invalid Billing Name ';
  // }

  // const nameValid = nameRegex.test(formData.name);
  // const emailValid = emailRegex.test(formData.email);
  // const phoneValid = phoneRegex.test(formData.phone);
  // const websiteValid = websiteRegex.test(formData.website);
  // const billingnameValid = billingnameRegex.test(formData.billingAddress.name);
  // const pincodeValid = pincodeRegex.test(formData.billingAddress.pincode);
  // const billAddress1Valid = billAddress1Regex.test(formData.billingAddress.addressLine1);
  // const billAddress2Valid = billAddress2Regex.test(formData.billingAddress.addressLine2);
  // const billCountryValid=formData.billingAddress.country;
  // const billStateValid=formData.billingAddress.state;
  // const billCityValid=formData.billingAddress.city;
  // const shippingnameValid = billingnameRegex.test(formData.shippingAddress.name);
  // const shippincodeValid = pincodeRegex.test(formData.shippingAddress.pincode);
  // const shipAddress1Valid = billAddress1Regex.test(formData.shippingAddress.addressLine1);
  // const shipAddress2Valid = billAddress2Regex.test(formData.shippingAddress.addressLine2);
  // const shipCountryValid=formData.shippingAddress.country;
  // const shipStateValid=formData.shippingAddress.state;
  // const shipCityValid=formData.shippingAddress.city;

  if (value === '') {
    isValid = false;
    message = 'Field cannot be empty';
  }


  setFormData({
    ...formData,
    [fieldName]: value,
  });

  setValidation({
    ...validation,
    [fieldName]: { isValid, message },
    // name: nameValid,
    // email: emailValid,
    // phone: phoneValid,
    // website: websiteValid,
    // billingAddress: {
    //   name: billingnameValid,
    //   addressLine1: billAddress1Valid,
    //   addressLine2: billAddress2Valid,
    //   pincode: pincodeValid,
    //   country: billCountryValid,
    //   state: billStateValid,
    //   city: billCityValid,
    // },
    // shippingAddress: {
    //   name: shippingnameValid,
    //   addressLine1: shipAddress1Valid,
    //   addressLine2: shipAddress2Valid,
    //   pincode: shippincodeValid,
    //   country: shipCountryValid,
    //   state: shipStateValid,
    //   city: shipCityValid,
    // },
  });

  // return nameValid && emailValid && phoneValid && websiteValid && billAddress2Valid 
  // && billAddress1Valid && pincodeValid && billCityValid && billStateValid && 
  // billCountryValid && shippingnameValid && shippincodeValid && shipAddress1Valid && shipAddress2Valid
  // && shipCityValid && shipStateValid && shipCountryValid;
};


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

const handleFieldChange = (e, fieldPath, value) => {
  console.log(value)

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
  // setFormData(updatedFormData);



  let isValid = true;
  let message = '';

  const billingnameRegex = /^[a-zA-Z]+$/;
  const pincodeRegex = /^\d{6}$/;
  const billAddress1Regex = /^[a-zA-Z\d\s\.,#\-]+$/;

  if (fieldPath === 'billingAddress.name') {
    isValid = billingnameRegex.test(value);
  } else if (fieldPath === 'billingAddress.addressLine1') {
    isValid = billAddress1Regex.test(value);
  } else if (fieldPath === 'billingAddress.addressLine2') {
    isValid = billAddress1Regex.test(value);
  } else if (fieldPath === 'billingAddress.pincode') {
    isValid = pincodeRegex.test(value);
  }



  if (!isValid) {
    message = 'Invalid';
  }
  if (value === '') {
    isValid = false;
    message = 'Field cannot be empty';
  }
  setFormData({
    ...formData,
    [fieldPath]: value,
  });
  let updatedState = { ...validation };
  if (pathArray?.length > 1) {
    updatedState[pathArray[0]][pathArray[1]] = { isValid, message }
  } else {
    updatedState[fieldPath] = { isValid, message }
  }
  setValidation(updatedState);
};

useEffect(() => {
  console.log(validation)
}, [validation])


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
  console.log(e.target.value);
  let message = '';

  if (e.target.value === '') {
    message = 'Field cannot be empty';
  }

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
              <h5>Add Customers</h5>
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
                              <img id="blah" className="avatar" src={formData.image} alt="Profile" />
                            ) : (
                              <img id="blah" className="avatar" src={img10} alt="" />
                            )}
                          </div>
                          <div className="add-profile">
                            <h5>Upload a New Photo <span className="text-danger">*</span></h5>
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
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${!validation.name.isValid ? "is-invalid" : ""}`}
                      id="inputName4"
                      placeholder="Enter Item Name"
                      value={formData.name}
                      onChange={(e) => {
                        handleInputChange("name", e.target.value);
                      }}
                    />
                    {!validation.name.isValid && (
                      <div className="invalid-feedback">{validation.name.message}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className={`form-control ${!validation.email.isValid ? "is-invalid" : ""}`}
                      id="inputEmail4"
                      value={formData.email}
                      onChange={(e) => {
                        handleInputChange("email", e.target.value);
                      }}
                    />
                    {!validation.email.isValid && (
                      <div className="invalid-feedback">{validation.email.message}</div>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputPhone" className="form-label">
                      Phone <span className="text-danger ">*</span>
                    </label>
                    <input
                      type="number"
                      className={`form-control ${!validation.phone.isValid ? "is-invalid" : ""}`}
                      id="inputPhone"
                      pattern="[0-9]*"
                      value={formData.phone}
                      onChange={(e) => {
                        handleInputChange("phone", e.target.value);

                      }}
                    />{!validation.phone.isValid && (
                      <div className="invalid-feedback">{validation.phone.message}</div>
                    )}
                  </div>
                  <div class="col-md-4">
                    <label for="inputCurrency" class="form-label">Currency <span className="text-danger">*</span></label>
                    <select
                      id="inputCurrency"
                      class={`form-select ${!validation.currency.isValid ? "is-invalid" : ""}`}
                      value={formData.currency}
                      onChange={(e) => {
                        handleInputChange("currency", e.target.value);

                      }}                      >
                      {
                        data.map((cData) => (
                          <option value={cData.code}>{cData.code}</option>
                        ))
                      }
                    </select>
                    {!validation.currency.isValid && (
                      <div className="invalid-feedback">{validation.currency.message}</div>
                    )}
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="inputWebsite" className="form-label">
                      Website <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${!validation.website.isValid ? "is-invalid" : ""}`}
                      id="inputWebsite"
                      value={formData.website}
                      onChange={(e) => {
                        handleInputChange("website", e.target.value);

                      }}
                    />
                    {!validation.website.isValid && (
                      <div className="invalid-feedback">{validation.website.message}</div>
                    )} 
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
                          <label for="inputEmail4" class="form-label">Name <span className="text-danger">*</span></label>
                          <input type="text" class={`form-control ${!validation.billingAddress.name.isValid ? "is-invalid" : ""}`} id="inputEmail4" value={formData.billingAddress.name} name='billingAddress.name'
                            onChange={(e) => handleFieldChange(e, 'billingAddress.name', e.target.value)}
                          // onChange={(e) => handleInputChange("billingAddress.name",  e.target.value )}

                          />
                          {!validation.billingAddress.name.isValid && (
                            <div className="invalid-feedback">{validation.billingAddress.name.message}</div>
                          )}
                        </div>

                        <div class="col-md-12 mb-3">
                          <label for="inputAddress" class="form-label">Address<span className="text-danger">*</span></label>
                          <input type="text" class={`form-control ${!validation.billingAddress.addressLine1.isValid ? "is-invalid" : ""}`} id="inputAddress" placeholder="1234 Main St" value={formData.billingAddress.addressLine1} name='billingAddress'
                            onChange={(e) => handleFieldChange(e, 'billingAddress.addressLine1', 'addressLine1')} />
                          {!validation.billingAddress.addressLine1.isValid && (
                            <div className="invalid-feedback">{validation.billingAddress.addressLine1.message}</div>
                          )}
                        </div>

                        <div class="col-md-6 mb-3">
                          <label for="inputAddress2" class="form-label">Address 2<span className="text-danger">*</span></label>
                          <input type="text" class={`form-control ${!validation.billingAddress.addressLine2.isValid ? "is-invalid" : ""}`} id="inputAddress2" placeholder="Apartment, studio, or floor" value={formData.billingAddress.addressLine2}
                            onChange={(e) => handleFieldChange(e, 'billingAddress.addressLine2', 'addressLine2')} />
                          {!validation.billingAddress.addressLine2.isValid && (
                            <div className="invalid-feedback">{validation.billingAddress.addressLine2.message}</div>
                          )}
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="inputAddress2" class="form-label">Pincode<span className="text-danger">*</span></label>
                          <input type="number" class={`form-control ${!validation.billingAddress.pincode.isValid ? "is-invalid" : ""}`} id="Pincode" placeholder="Enter Pincode" value={formData.billingAddress.pincode}
                            onChange={(e) => handleFieldChange(e, 'billingAddress.pincode', 'pincode')} />
                          {!validation.billingAddress.pincode.isValid && (
                            <div className="invalid-feedback">{validation.billingAddress.pincode.message}</div>
                          )}
                        </div>
                        <div className="row">
                          <div className='col-md-6'>
                            <label className='form-label' htmlFor="countryDropdownTwo">Select a Country:<span className="text-danger">*</span></label>
                            <select
                              id="countryDropdownTwo"
                              value={formData.billingAddress.country}
                              onChange={handleCountryChange}
                              className={`form-select ${!validation.billingAddress.country ? "is-invalid" : ""}`}
                            >
                              <option value="billingAddress.country">Select a country<span className="text-danger">*</span></option>
                              {countries.map((country) => (
                                <option key={country.geonameId} value={country.geonameId}>
                                  {country.countryName}
                                </option>
                              ))}
                            </select>
                            {!validation.billingAddress.country && (
                              <div className="invalid-feedback">{!validation.billingAddress.country.message}</div>
                            )}
                            <br />
                          </div>
                          <div className="col-md-6">
                            {selectedCountry && (
                              <div>
                                <label className='form-label' htmlFor="stateDropdownOne">Select a State:<span className="text-danger">*</span></label>
                                <select
                                  id="stateDropdownOne"
                                  value={formData.billingAddress.state}
                                  onChange={handleStateChange}
                                  class={`form-select ${!validation.billingAddress.state.isValid ? "is-invalid" : ""}`}
                                >
                                  <option value="">Select a state</option>
                                  {states.map((state) => (
                                    <option key={state.geonameId} value={state.geonameId}>
                                      {state.name}
                                    </option>
                                  ))}
                                </select>
                                {!validation.billingAddress.state.isValid && (
                                  <div className="invalid-feedback">{!validation.billingAddress.state.message}</div>
                                )}
                                <br />
                              </div>
                            )}
                          </div>
                          <div className="col-md-6">

                            {selectedState && (
                              <div>
                                <label class="form-label" htmlFor="cityDropdownOne">Select a City:<span className="text-danger">*</span></label>
                                <select
                                  id="cityDropdownOne"
                                  value={formData.billingAddress.city}
                                  onChange={handleCityChange}
                                  class={`form-select ${!validation.billingAddress.city.isValid ? "is-invalid" : ""}`}
                                >
                                  <option value="">Select a city</option>
                                  {cities.map((city) => (
                                    <option key={city.geonameId} value={city.geonameId}>
                                      {city.name}
                                    </option>
                                  ))}
                                </select>
                                {!validation.billingAddress.city.isValid && (
                                  <div className="invalid-feedback">{!validation.billingAddress.city.message}</div>
                                )}
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
                          <div class="col-md-12 mb-3">
                            <label for="inputEmail4" class="form-label">Name <span className="text-danger">*</span></label>
                            <input type="name" class={`form-control ${!validation.shippingAddress.name ? "is-invalid" : ""}`} id="inputEmail4" value={formData.shippingAddress.name}
                              onChange={(e) => handleFieldChange(e, 'shippingAddress.name', 'name')} />
                            {!validation.shippingAddress.name && (
                              <div className="invalid-feedback">Please enter a billing name.</div>
                            )}
                          </div>

                          <div class="col-md-12 mb-3">
                            <label for="inputAddress" class="form-label">Address <span className="text-danger">*</span></label>
                            <input type="text" class={`form-control ${!validation.shippingAddress.addressLine1 ? "is-invalid" : ""}`} id="inputAddress" placeholder="1234 Main St" value={formData.shippingAddress.addressLine1}
                              onChange={(e) => handleFieldChange(e, 'shippingAddress.addressLine1', 'addressLine1')} />
                            {!validation.shippingAddress.addressLine1 && (
                              <div className="invalid-feedback">Please enter a billing name.</div>
                            )}
                          </div>

                          <div class="col-md-6 mb-3">
                            <label for="inputAddress2" class="form-label">Address 2 <span className="text-danger">*</span></label>
                            <input type="text" class={`form-control ${!validation.shippingAddress.addressLine2 ? "is-invalid" : ""}`} id="inputAddress2" placeholder="Apartment, studio, or floor" value={formData.shippingAddress.addressLine2}
                              onChange={(e) => handleFieldChange(e, 'shippingAddress.addressLine2', 'addressLine2')} />
                            {!validation.shippingAddress.addressLine2 && (
                              <div className="invalid-feedback">Please enter a billing name.</div>
                            )}
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="inputAddress2" class="form-label">Pincode <span className="text-danger">*</span></label>
                            <input type="text" class={`form-control ${!validation.shippingAddress.pincode ? "is-invalid" : ""}`} id="Pincode" placeholder="Enter Pincode" value={formData.shippingAddress.pincode}
                              onChange={(e) => handleFieldChange(e, 'shippingAddress.pincode', 'pincode')} />
                            {!validation.shippingAddress.pincode && (
                              <div className="invalid-feedback">Please enter a billing name.</div>
                            )}
                          </div>
                          <div className="row">
                            <div className='col-md-6 mb-3'>
                              <label className='form-label' htmlFor="countryDropdownTwo">Select a Country: <span className="text-danger">*</span></label>
                              <select
                                id="countryDropdownTwo"
                                value={formData.shippingAddress.country}
                                onChange={handleCountryChangeTwo}
                                className={`form-select ${!validation.shippingAddress.country ? "is-invalid" : ""}`}
                              >
                                <option value="">Select a country</option>
                                {billingCountries.map((country) => (
                                  <option key={country.geonameId} value={country.geonameId}>
                                    {country.countryName}
                                  </option>
                                ))}
                              </select>
                              {!validation.shippingAddress.country && (
                                <div className="invalid-feedback">Please select a country.</div>
                              )}
                              <br />
                            </div>
                            <div className="col-md-6 mb-3">
                              {selectedBillingCountry && (
                                <div>
                                  <label className='form-label' htmlFor="stateDropdownTwo">Select a State: <span className="text-danger">*</span></label>
                                  <select
                                    id="stateDropdownTwo"
                                    value={formData.shippingAddress.state}
                                    onChange={handleStateChangeTwo}
                                    class={`form-select ${!validation.shippingAddress.state ? "is-invalid" : ""}`}
                                  >
                                    <option value="">Select a state</option>
                                    {billingstates.map((state) => (
                                      <option key={state.geonameId} value={state.geonameId}>
                                        {state.name}
                                      </option>
                                    ))}
                                  </select>
                                  {!validation.shippingAddress.state && (
                                    <div className="invalid-feedback">Please select a state.</div>
                                  )}
                                  <br />
                                </div>
                              )}
                            </div>
                            <div className="col-md-6 mb-3">

                              {selectedBillingState && (
                                <div>
                                  <label class="form-label" htmlFor="cityDropdownTwo">Select a City: <span className="text-danger">*</span></label>
                                  <select
                                    id="cityDropdownTwo"
                                    value={formData.shippingAddress.city}
                                    onChange={handleCityChangeTwo}
                                    class={`form-select ${!validation.shippingAddress.city ? "is-invalid" : ""}`}
                                  >
                                    <option value="">Select a city</option>
                                    {billingcities.map((city) => (
                                      <option key={city.geonameId} value={city.geonameId}>
                                        {city.name}
                                      </option>
                                    ))}
                                  </select>
                                  {!validation.shippingAddress.city && (
                                    <div className="invalid-feedback">Please select a city.</div>
                                  )}
                                </div>
                              )}
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="form-group-customer customer-additional-form">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <h5 className="form-title">
                            Additional Details{" "}
                            <span className="optional">(Optional)</span>
                          </h5>
                        </div>
                        <div className="form-group">
                          <label>
                            Discount <span className="optional">(%)</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={1}
                            placeholder="Enter Discount"
                          />
                        </div>
                        <div className="form-group notes-form-group">
                          <label>Notes</label>
                          <textarea
                            className="form-control"
                            placeholder="Enter Your Description"
                            defaultValue={"Lorem Ipsum is simply dummy"}
                          />
                        </div>
                        <div className="form-group">
                          <div className="check-mark-status d-flex justify-content-between">
                            <h6 className="label-text">TDS</h6>
                            <div className="status-toggle">
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
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <h5 className="form-title">
                            Company Details{" "}
                            <span className="optional">(Optional)</span>
                          </h5>
                        </div>
                        <div className="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Kanakku"
                            placeholder="Enter Company Name"
                          />
                        </div>
                        <div className="form-group">
                          <label>GST No</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={123456}
                            placeholder="Enter GST Nuber"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="form-group">
                          <h5 className="form-title">
                            Opening Balance{" "}
                            <span className="optional">(Optional)</span>
                          </h5>
                        </div>
                        <div className="form-group">
                          <label>Opening Balance</label>
                          <div className="">
                            <label className="custom_radio me-3">
                              <input
                                type="radio"
                                name="payment"
                                defaultChecked="true"
                              />
                              <span className="checkmark" /> Debit
                            </label>
                            <label className="custom_radio">
                              <input type="radio" name="payment" />
                              <span className="checkmark" /> Credit
                            </label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Debit Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="$200"
                            placeholder="Enter Debit Amount"
                          />
                        </div>
                        <div className="form-group">
                          <label>Balance</label>
                          <input
                            type="text"
                            className="form-control bg-blue-light border-0"
                            placeholder="$ 100"
                          />
                        </div>
                      </div>
                    </div>
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
