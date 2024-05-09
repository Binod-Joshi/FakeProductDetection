import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  contractABI,
  contractAddress,
} from "../../contractDetails/ContractDetails";

const Navbar = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const handleConnect = async () => {
    console.log("hello");
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        alert("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      if (accounts?.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      }else {
        console.log("No authorized account found")
    }
    } catch (error) {}
  };

  return (
    <div className="navbar">
      <div style={{margin:"0 5px"}}>
        <Link
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          to="/"
        >
          <img
            className="logoOfFakeProductDetection"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/fake-report-share-3930721-3260842.png?f=webp&w=512"
            alt=""
          />
        </Link>
        <Link style={{ color: "white", }} to="/">
          FPDS
        </Link>
      </div>
      <div className="divLinkOfNavbar">
        <Link style={{ color: "white" }} to="/createProduct">
          Manufacturer
        </Link>
        <Link style={{ color: "white" }} to="/registerManufacturer">
          Admin
        </Link>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"5px"}}>
        <button className="connectAccountBtn" onClick={handleConnect}>{!currentAccount?"Connect Account":"Account connected"}</button>
      </div>
    </div>
  );
};

export default Navbar;
