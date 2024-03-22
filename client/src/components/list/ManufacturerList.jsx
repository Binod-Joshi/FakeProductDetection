import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import {
  contractABI,
  contractAddress,
} from "../../contractDetails/ContractDetails";
import { Alert } from "@mui/material";
import { BiSolidDownArrow } from "react-icons/bi";

const ManufacturerList = () => {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");
  const [manufacturersList, setManufacturersList] = useState([]);

  const onclickHandler = async () => {
    console.log(address);
    try {
      const { ethereum } = window;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      const manuList = await contract.getAllManufacturers();
      console.log("success");
      setManufacturersList(manuList);
      console.log(manuList);
    } catch (error) {
      console.log(error);
      setStatus("error");
      setResponse(error?.revert?.args[0] || "Failed");
    }
  };

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus("");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <>
      <div className="detectManufacturer">
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 10px",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop:"40px"
          }}
          onClick={onclickHandler}
        >
          List Of Manufacturers <BiSolidDownArrow style={{display:"flex",alignItems:"center",justifyContent:"center", marginLeft:"10px",paddingTop:"5px",fontSize:"14px"}}/>
        </button>
        </div>
        {manufacturersList && manufacturersList?.length > 0 && (
          <>
            {" "}
            <div className="showManufacturerData">
              <p className="availableHeader">Manufacturer List</p>
            </div>
            <div className="showManufacturerData1">
              {manufacturersList?.map((productHash, index) => {
                return (
                  <div key={index}>
                    <p className="contentOfAvailableHeader">
                      Manufacturer address: {productHash}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      {status !== "" && (
        <div className="alertTop">
          <Alert severity={status}>{response}</Alert>
        </div>
      )}
    </>
  );
};

export default ManufacturerList;
