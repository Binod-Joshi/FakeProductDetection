import React from "react";
import "./Home.css";
import { SiHiveBlockchain } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { SiQuicklook } from "react-icons/si";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="contentDivOfHome">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <h3>An Upgrade of Trust</h3>
          </div>
          <div>
            <h1>Fake Product Detection Site</h1>
          </div>
          <div>
            <p style={{padding:"10px 8px"}}>
              A Blockchain based application for detecting Counterfeited
              products in the B2C and B2B supply chain which will benefit
              businesses in terms of growth, reputation, trust and to customers
              in getting genuine products in hand.
            </p>
          </div>
        </div>
        <div className="contentDivOfFeatures">
          <Link to="/detectProduct" style={{marginBottom:"20px"}}>
            <div>
              <SiHiveBlockchain />
            </div>
            <h4>Detect Product</h4>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                color:"#5d4f4fc9"
              }}
            >
              Check about the current owner and history of owners of the
              product.
            </p>
            <div>
              <SiQuicklook
                style={{ color: "#007b80", fontSize: "22px", padding: "5px" }}
              />
            </div>
          </Link>
          <Link to="/detectManufacturer" style={{marginBottom:"20px"}}>
            <div>
              <FaCheckCircle />
            </div>
            <h4>Detect Manufacturer</h4>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                color:"#5d4f4fc9"
              }}
            >
              Verify the address (manufacturer) is genuine or not.
            </p>
            <div>
              <SiQuicklook
                style={{ color: "#007b80", fontSize: "22px", padding: "5px" }}
              />
            </div>
          </Link>
          <Link to="/manufacturerList" style={{marginBottom:"20px"}}>
            <div>
              <IoPeopleSharp />
            </div>
            <h4>Manufacturer List</h4>
            <p style={{ display: "flex", width: "90%", color:"#5d4f4fc9"}}>
              View all manufacturers.
            </p>
            <div>
              <SiQuicklook
                style={{ color: "#007b80", fontSize: "22px", padding: "5px" }}
              />
            </div>
          </Link>
          <Link to="/productList" style={{marginBottom:"20px"}}>
            <div>
              <FaThList />
            </div>
            <h4>Product List Of Particular Manufacturer</h4>
            <p style={{ display: "flex", width: "90%", color:"#5d4f4fc9" }}>
              View all products of a Particular manufacturer.
            </p>
            <div>
              <SiQuicklook
                style={{ color: "#007b80", fontSize: "22px", padding: "5px" }}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="imageOuterDiv">
        <div className="imageInnerDiv">
          <img
            style={{ width: "96%", height: "96%" }}
            src="https://cdn.pixabay.com/photo/2021/05/24/09/15/ethereum-logo-6278328_1280.png"
            alt="etereum logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
