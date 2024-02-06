import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import { DropIcon } from "../_components/imagepath";
import TextEditor from "./editor";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [datasource, setDatasource] = useState([]);
  const [formData, setFormData] = useState({
    itemType: "Product",
    name: "",
    itemCategory: "",
    price: "",
    quality: "",

  });


const [dataField,setDataField] = useState({
  withoutTax :"",
  withTax :"",
  // quantity :"",
  discount :"",
  stock :"",
})
const [dataValid, setdataValid] = useState({
  withoutTax: { isdataValid: true, message: '' },
  withTax: { isdataValid: true, message: '' },
  // quantity: { isdataValid: true, message: '' },
  discount:{ isdataValid: true, message: '' },
  stock:{ isdataValid: true, message: '' }
});
//tax field
const handleFormData = (fieldName,value)=>{
  const withoutTaxRegex = /^\d+(\.\d{1,2})?$/;
  let isdataValid = true;
  let message = '';
  if (fieldName === 'withTax') {
    isdataValid = withoutTaxRegex.test(value);
    message = 'Invalid value';
  } else if (fieldName === 'withoutTax') {
    isdataValid = withoutTaxRegex.test(value);
    message = 'Invalid value';
}
// else if (fieldName === 'quantity') {
//   isdataValid = withoutTaxRegex.test(value);
//   message = 'Invalid value';
// }
else if (fieldName === 'discount') {
  isdataValid = withoutTaxRegex.test(value);
  message = 'Invalid value';
}
else if (fieldName === 'stock') {
  isdataValid = withoutTaxRegex.test(value);
  message = 'Invalid value';
}
setDataField({
  ...dataField,
  [fieldName]: value,
});

setdataValid({
  ...dataValid,
  [fieldName]: { isdataValid, message },
});
}



  const [category, setCategory] = useState([]);

  const categoryoptions = category.map((cat) => ({
    id: cat._id,
    text: cat.name,
  }));

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  // const handleInputChange = (fieldName, value) => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [fieldName]: value,
  //   }));
  // };
  // form validations
  // const [formData, setFormData] = useState({
  //   name: '',
  //   itemCategory: '',
  //   price: '',
  // });

  const [validation, setValidation] = useState({
    name: { isValid: true, message: '' },
    itemCategory: { isValid: true, message: '' },
    price: { isValid: true, message: '' },
    barcode:{ isValid: true, message: '' },
    quality: { isValid: true, message: '' },
    fieldName:{ isValid: true, message: '' }
  });

  const handleInputChange = (fieldName, value) => {
    // Validation regex patterns
    // const nameRegex = /^[a-zA-Z\s]+$/;
    const withoutTaxRegex = /^\d+(\.\d{1,2})?$/;
    const nameRegex = /^[a-zA-Z\s]*$/;
    const priceRegex = /^\d+(\.\d{1,2})?$/; // Allow positive numbers with up to two decimal places
    const barcodeRegex =/^[a-zA-Z0-9\s]*$/
      // Validation logic
  let isValid = true;
  let message = '';

  if (fieldName === 'name') {
    isValid = nameRegex.test(value);
    message = 'Invalid name';
  } else if (fieldName === 'itemCategory') {
    isValid = value;
    message = 'Category is required';
  } else if (fieldName === 'price') {
    isValid = priceRegex.test(value);
    message = 'Invalid price';
  } else if (fieldName === 'quality') {
    isValid = withoutTaxRegex.test(value);
    message = 'Invalid value';
  }
  // else if(fieldName === 'itemType'){
  //   message = 'Invalid ';
  //   isValid=itemType
  // } 
  else if(fieldName == "barcode"){
    isValid = barcodeRegex.test(value);
    message = 'Invalid barcode';
  }
    // Validation logic
    // const validations = {
    //   name: { isValid: nameRegex.test(value), message: 'Invalid name' },
    //   itemCategory: { isValid: categoryRegex.test(value), message: 'Category is required' },
    //   price: { isValid: priceRegex.test(value), message: 'Invalid price' },
    // };
  
  
    if (value.trim() === '') {
      isValid = false;
      message = 'Field cannot be empty';
    }
  

    setFormData({
      ...formData,
      [fieldName]: value,
    });

    // setValidation({
    //   ...validation,
    //   [fieldName]: validations[fieldName],
    // });
    setValidation({
      ...validation,
      [fieldName]: { isValid, message },
    });
  };
  // form validations
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isFormValid = true;

    // Object.keys(formData).forEach((fieldName) => {
    //   if (formData[fieldName].trim() === '') {
    //     isFormValid = false;
    //     setValidation((prevValidation) => ({
    //       ...prevValidation,
    //       [fieldName]: { isValid: false, message: 'Field cannot be empty' },
    //     }));
    //   }
    // }
    // );

    //    if (!isFormValid) {
    //   return;
    // }

    // Your form submission logic here
    console.log('Form submitted:', formData);

    
    try {
      const response = await axios.post(
        "http://localhost:8000/api/addProduct/products",
        formData
      );
  
      console.log("Data submitted successfully:", response.data);
  
      setDatasource([...datasource, response.data]);
  
      setShow(false);
  
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Data submitted successfully.",
      }).then(() => {
        // Reload the page after showing success message
        window.location.reload();
      });
    } catch (error) {
      console.error("Error submitting data:", error);
  
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting the data. Please try again.",
      });
    }
  };
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/addCategory/categories"
        );
        console.log(response.data);
        setCategory([{ id: "", text: "Select Item Category" }, ...response.data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="content-page-header">
              <h5>Add Products / Services</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item">
                    <h5 className="form-title">Basic Details</h5>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Item Type</label>
                          <div className="align-center">
                            <div className="form-control me-3">
                              <label className="custom_radio me-3 mb-0">
                                <input
                                  type="radio"
                                  // name="itemType"
                                  value="product"
                                  checked={formData.itemType === "product"}
                                  onChange={(e) =>
                                    handleInputChange("itemType", e.target.value)
                                  }
                                />
                                <span className="checkmark" /> Product
                                </label>

                              
                            </div>
                          </div>
                        </div>
                      </div>
                    

                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Name <span className="text-danger">*</span></label>
                          <input
                            type="text"
                            className={`form-control ${!validation.name.isValid ? 'is-invalid' : ''}`}
                            placeholder="Enter Item Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                          />
                          {!validation.name.isValid && <div className="invalid-feedback">{validation.name.message}</div>}
                        </div>
                      </div>

                      {/* Item Category Select */}
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Item Category <span className="text-danger">*</span></label>
                          <Select2
                          // className={`${!validation.itemCategory.isValid ? 'is-invalid' : ''}`}
                            data={categoryoptions}
                            options={{
                              placeholder: 'Select Item Category',
                            }}
                            value={formData.itemCategory}
                            onChange={(e) => handleInputChange('itemCategory', e.target.value)}
                          />
                          {!validation.itemCategory.isValid && <div className="invalid-feedback">{validation.itemCategory.message}</div>}
                        </div>
                      </div>

                      {/* Price Input */}
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Price<span className="text-danger">*</span></label>
                          <input
                            type="number"
                            className={`form-control ${!validation.price.isValid ? 'is-invalid' : ''}`}
                            placeholder="Enter Item Price"
                            name="name"
                            value={formData.price}
                            onChange={(e) => handleInputChange('price', e.target.value)}
                          />
                          {!validation.price.isValid && <div className="invalid-feedback">{validation.price.message}</div>}
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        {/* <div className="form-group">
                          <label>Units</label>
                          <Select2
                            // className="w-100"
                            data={units}
                            options={{
                              placeholder: "Select Item Category",
                            }}
                            value={formData.units}
                            onChange={(e) =>
                              handleInputChange("units", e.target.value)
                            }
                          />
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="form-group-item">
                    <div className="form-group">
                      <h5 className="form-title">Additional Details</h5>
                    </div>
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                          <label>Generate Barcode</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="P125389"
                            placeholder="Enter Barcode Number"
                            value={formData.barcode}
                            onChange={(e) => handleInputChange('barcode', e.target.value)}
                          />

                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                          <label>Purchase Price Without Tax</label>
                          <input
                            type="text"
                            className={`form-control ${!dataValid.withoutTax.isdataValid ? 'is-invalid' : ''}`}
                            defaultValue="$00.00"
                            value={dataField.withoutTax}
                            onChange={(e) => handleFormData('withoutTax', e.target.value)}
                            placeholder="Enter Address 1"
                          />
                          {!dataValid.withoutTax.isdataValid && <div className="invalid-feedback">{dataValid.withoutTax.message}</div>}

                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                          <label>Purchase Price With Tax</label>
                          <input
                            type="text"
                            pattern="^[0-9]+$"
                            value={dataField.withTax}
                            className={`form-control ${!dataValid.withTax.isdataValid ? 'is-invalid' : ''}`}
                            defaultValue="$253.00"
                            onChange={(e) => handleFormData('withTax', e.target.value)}
                            placeholder="Enter Tax Amount"
                          />{!dataValid.withTax.isdataValid && <div className="invalid-feedback">{dataValid.withTax.message}</div>}

                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                        <div className="form-group">
                          <label>Quantity</label>
                          <input
                            
                            type="text"
                            className={`form-control ${!validation.quality.isValid ? 'is-invalid' : ''}`}
                            placeholder="Enter Quality"
                            value={formData.quality}
                            onChange={(e) => handleInputChange("quality", e.target.value)}
                            />
                            {!validation.quality.isValid && <div className="invalid-feedback">{validation.quality.isValid}</div>}

                          
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="form-group" id="summernote_container">
                          <label className="form-control-label">Details</label>
                          {/* <textarea
                            className="summernote form-control"
                            placeholder="Lorem ipsum dolor sit"
                            defaultValue={""}
                          /> */}
                          <TextEditor />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label>Image</label>
                          <div className="form-group service-upload mb-0">
                            <span>
                              <img
                                src={DropIcon}
                                alt="upload"
                              />
                            </span>
                            <h6 className="drop-browse align-center">
                              Drop your files here or
                              <span className="text-primary ms-1">browse</span>
                            </h6>
                            <p className="text-muted">Maximum size: 50MB</p>
                            <input type="file" multiple="" id="image_sign" />
                            <div id="frames" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div className="form-group-item border-0 pb-0">
                    <div className="form-group">
                      <h5 className="form-title">Discount Details</h5>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Discount (%)</label>
                          <ul className="form-group-plus css-equal-heights">
                            <li>
                              <Select2
                              // className="w-100"
                              // data={discount}
                              // options={{
                              //   placeholder: "Select Item Category",
                              // }}
                              />
                            </li>
                            <li>
                              <span className="btn btn-gray form-plus-btn">
                                %
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Discount Amount</label>
                          <input
                            type="text"
                            className={`form-control ${!dataValid.discount.isdataValid ? 'is-invalid' : ''}`}
                            value={dataField.discount}
                            placeholder="Enter Discount Amount"
                            onChange={(e) => handleFormData("discount", e.target.value)}
                          />
                {!dataValid.discount.isdataValid && <div className="invalid-feedback">{dataValid.discount.message}</div>}

                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Minimum Stock Qty</label>
                          <input
                            type="text"
                            value={dataField.stock}
                            className={`form-control ${!dataValid.stock.isdataValid ? 'is-invalid' : ''}`}
                            placeholder="eg 10"
                            onChange={(e) => handleFormData("stock", e.target.value)}
                          />
              {!dataValid.stock.isdataValid && <div className="invalid-feedback">{dataValid.stock.message}</div>}

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
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
    </>
  );
};

export default AddProduct;
