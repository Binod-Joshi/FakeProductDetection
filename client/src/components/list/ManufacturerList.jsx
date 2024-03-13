import React, { useState } from 'react'

const ManufacturerList = () => {
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(address);
  };

  const manufacturers = [
    {productsHash: "09uuuuu"},
    {productsHash: "09uuuuu"},
    {productsHash: "09uuuuu"}
  ]

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
      List Of Manufacturers
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
      <p className="availableHeader">Manufacturer List</p>
    </div>
    <div className="showManufacturerData1">
        {manufacturers?.map((productHash,index) => {
        return(
        <div key={index}>
          <p className="contentOfAvailableHeader">
            Manufacturer address: {productHash?.productsHash}
          </p>
        </div>)})}
      </div>
  </div>
  )
}

export default ManufacturerList
