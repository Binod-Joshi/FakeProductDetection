import React, { useEffect, useState } from "react";
import "./DetectManufacturer.css";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../contractDetails/ContractDetails";
import { Alert } from "@mui/material";

const DetectManufacturer = () => {
  const [address, setAddress] = useState("");
  const [manufacturedData, setManufacturedData] = useState("");
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(address);
    try {
      const {ethereum} = window;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress,contractABI,signer);
      const manufacturerData = await contract.checkManufacturer(address);
      console.log("success");
      setManufacturedData(manufacturerData);
      console.log(manufacturedData?.exists);
      if(!manufacturerData?.exists){
        setStatus("info");
        setResponse("Manufacturer Not Found!")
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setResponse(error?.reverts?.args[0] || "Failed");
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
      {manufacturedData?.exists && <><div className="showManufacturerData">
        <p className="availableHeader">Manufacturer Available</p>
      </div>
      <div className="showManufacturerData1">
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer address: {manufacturedData?.wallet_address}
            </p>
          </div>
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer Name: {manufacturedData?.name}
            </p>
          </div>
          <div>
            <p className="contentOfAvailableHeader">
              Manufacturer Website: {manufacturedData?.website}
            </p>
          </div>
        </div></>}
    </div>
    {status !== "" && <div>
    <div className="alertTop">
          <Alert severity={status}>{response}</Alert>
        </div>
      </div>}
    </>
  );
};

export default DetectManufacturer;
