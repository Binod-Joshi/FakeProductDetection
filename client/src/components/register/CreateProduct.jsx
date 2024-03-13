import React, { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    price: "",
    expiryDate: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="registerManufacturerDiv">
      <form onSubmit={submitHandler} className="formRegister">
        <div>
          <h2 style={{ fontSize: "35px", padding: "15px" }}>Create Product</h2>
        </div>
        <div>
          <label className="labelDiv">Product Name</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Television"
          required
        />
        <div>
          <label className="labelDiv">Product Model</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="model"
          value={formData.model}
          onChange={handleOnChange}
          placeholder="Electric"
          required
        />
        <div>
          <label className="labelDiv">Product Price</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="price"
          value={formData.price}
          onChange={handleOnChange}
          placeholder="20000"
          required
        />

        <div>
          <label className="labelDiv">Product ExpiryDate(Optional)</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleOnChange}
          placeholder="02 march 2024"
          style={{display:"flex",justifyContent:"flex-start"}}
        />

        <div className="registerDivButton">
          <button type="submit" style={{ backgroundColor: "rgb(12 67 142)" }}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
