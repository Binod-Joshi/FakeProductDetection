import React, { useState } from "react";
import "./DetectManufacturer.css";

const DetectManufacturer = () => {
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(address);
  };
  return (
    <div className="detectManufacturer">
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px 0",
          fontSize: "25px",
          fontWeight: "bolder",
        }}
      >
        Check the Manufacturer
      </p>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={submitHandler}
      >
        <input
          className="input"
          type="text"
          placeholder="0x0000000000000000000000000000000000000000"
          onChange={(e) => setAddress(e.target.value)}
        />
      </form>
      <div className="showManufacturerData">
        <p className="availableHeader">Manufacturer Available</p>
      </div>
      <div className="showManufacturerData1">
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer address: 0x00000000000000000000000
            </p>
          </div>
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer Name: 
            </p>
          </div>
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer Website: 
            </p>
          </div>
        </div>
    </div>
  );
};

export default DetectManufacturer;
