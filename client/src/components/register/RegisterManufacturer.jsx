import React, { useState } from "react";
import "./RegisterManufacturer.css";

const RegisterManufacturer = () => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    address: "",
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
          <h2 style={{ fontSize: "35px", padding: "15px" }}>
            Register Manufacturer
          </h2>
        </div>
        <div>
          <label className="labelDiv">Manufacturer Name</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Manufacturer Name"
          required
        />
        <div>
          <label className="labelDiv">Manufacturer Website</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="website"
          value={formData.website}
          onChange={handleOnChange}
          placeholder="https://companyname.com"
          required
        />
        <div>
          <label className="labelDiv">Manufacturer Address</label>
        </div>
        <input
          className="inputDivOfRegister"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleOnChange}
          placeholder="0x0000000000000000000000000000000000000000"
          required
        />

        <div className="registerDivButton">
          <button type="submit" style={{ backgroundColor: "rgb(12 67 142)" }}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterManufacturer;
