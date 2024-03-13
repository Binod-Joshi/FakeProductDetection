import React, { useState } from 'react'

const ProductList = () => {
  const [address, setAddress] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(address);
  };

  const products = [
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
      Lists Of Products
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
      <p className="availableHeader">Product List of Particular Manufacturer</p>
    </div>
    <div className="showManufacturerData1">
        {products?.map((productHash,index) => {
        return(
        <div key={index}>
          <p className="contentOfAvailableHeader">
            Product Hash: {productHash?.productsHash}
          </p>
        </div>)})}
      </div>
  </div>
  )
}

export default ProductList
