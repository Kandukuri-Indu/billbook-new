import React from 'react'


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

const AddCustomers = () => {
  return (
    <div>

      <div className="col-12">
        <button
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </div>

    </div>
  )
}

export default AddCustomers