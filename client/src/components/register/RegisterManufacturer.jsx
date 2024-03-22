import React, { useEffect, useState } from "react";
import "./RegisterManufacturer.css";
import { ethers } from "ethers";
import {
  contractAddress,
  contractABI,
} from "../../contractDetails/ContractDetails";
import { Alert } from "@mui/material";

const RegisterManufacturer = () => {
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    address: "",
  });
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { ethereum } = window;
      if (ethereum) {
        console.log("helo");
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        console.log("ok bro!");
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        console.log("ok done!");
        const tx = await contract.createManufacturer(
          formData.name,
          formData.website,
          formData.address,
        );
        console.log("Manufacturer creation transaction sent:", tx.hash);
        
        console.log("Waiting for transaction confirmation...");
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt.transactionHash);
        
        // Optionally, you can parse event logs to extract relevant information
        const event = contract.interface.parseLog(receipt.logs[0]);
        console.log("Event emitted:", event);
        
        // Optionally, you can retrieve additional information from the transaction receipt
        // const { product_id, man_address } = ethers.utils.defaultAbiCoder.decode(['uint', 'address'], receipt.logs[0].data);
        // console.log("Additional information:", product_id, man_address);
        setStatus("success");
        setResponse("Sucessfully Created.")
      }
    } catch (error) {
      console.log(error?.revert?.args[0]);
      setStatus("error")
      setResponse(error?.revert?.args[0] || "Failed!");
    }
  };

  useEffect(() => {
    if(status){
      const timeout = setTimeout(() => {
        setStatus("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  },[status]);

  
  return (
    <>
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
    {status !== "" && <div className="alertTop">
    <Alert severity={status}>{response}</Alert>
    </div>}
    </>
  );
};

export default RegisterManufacturer;
