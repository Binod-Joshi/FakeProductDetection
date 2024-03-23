import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  contractABI,
  contractAddress,
} from "../../contractDetails/ContractDetails";
import { Alert } from "@mui/material";

const ProductList = () => {
  const [address, setAddress] = useState("");
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(address);

    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log("list Product");
        const provider = new ethers.BrowserProvider(ethereum);
        console.log("Ok bro!");
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );
        const listOfProducts = await contract.getAllProductsOfManufacturer(address);
        console.log(listOfProducts);
        setProducts(listOfProducts);
        if(listOfProducts.length < 1){
          setStatus("info");
          setResponse("No products are created yet.")
        }
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setResponse(error?.revert?.args[0] || "Failed!");
    }
  };

  useEffect(() => {
    if(status){
      const timeout = setTimeout(() => {
        setStatus("");
        setResponse("");
      },2000);

      return () => clearTimeout(timeout);
    }
  },[status])
  return (
    <>
    <div className="detectManufacturer">
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px 0",
          fontSize: "25px",
          fontWeight: "bolder",
          color:"#f0f0f0"
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
      {products && products?.length > 0 && (
        <div>
          <div className="showManufacturerData">
            <p className="availableHeader">
              Product List of Particular Manufacturer
            </p>
          </div>
          <div className="showManufacturerData1">
            {products?.map((productHash, index) => {
              return (
                <div key={index}>
                  <p className="contentOfAvailableHeader">
                    Product Hash: {productHash}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
    { status !== "" && (
      <div className="alertTop">
        <Alert severity={status}>{response}</Alert>
      </div>
    )
    }
    </>
  );
};

export default ProductList;
