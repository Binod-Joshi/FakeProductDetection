import { useEffect, useState } from "react";
import "./DetectProduct.css";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
} from "../contractDetails/ContractDetails";
import { Alert } from "@mui/material";
const DetectProduct = () => {
  const [productHash, setProductHash] = useState("");
  const [productData, setProductData] = useState("");
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");



  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("handle");

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const dataOfProduct = await contract.checkProduct(
          productHash
        );
        console.log("success");
        setProductData(dataOfProduct);
      }
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

  let inc = 5;
  const itemCount = productData ? productData.length : 0;
  let extraHeight = itemCount > 0 ? itemCount * 75 : 0;

  if (itemCount > 5) {
    for (let i = 0; i < itemCount - 5; i++) {
      extraHeight += inc;
    }
  }

  const containerHeight = 50 + extraHeight;
  const mainExtraHeight = itemCount > 0 ? (itemCount - 2) * 70 : 0;
  const mainContainerHeight = 600 + mainExtraHeight;

  return (
    <>
      <div>
        <div className="main" style={{ height: mainContainerHeight + "px" }}>
          <div className="top">
            <div className="title">
              <h2 style={{ marginBottom: "8px" }}>Check the product</h2>
            </div>
            <div className="Search">
              <form onSubmit={handleOnSubmit}>
                <input
                  className="check_product"
                  type="text"
                  placeholder="Search"
                  autoFocus
                  style={{ border: "transparent", paddingLeft: "7px" }}
                  name="productHash"
                  value={productHash}
                  onChange={(e) => setProductHash(e.target.value)}
                />
              </form>
            </div>
          </div>
          {productData !== "" && (
            <>
              {" "}
              <div className="centerData">
                <h3>Product Id: {productData?.productHash}</h3>
                <h3>Product Name: {productData?.name}</h3>
                <h3>Product Model: {productData?.model}</h3>
                <h3>Product Price: Rs{parseInt(productData?.price)}</h3>
                <h3>Manufacturer: {productData?.manufacturer}</h3>
                <h3>CurrentOwner: {productData?.curOwner}</h3>
                <h3>ExpiryDate: {productData?.expiryDate}</h3>
                <h3>
                  Manufactured Time Stamp:{" "}
                  {new Date(
                    Number(productData?.manufacturedTimestamp) * 1000
                  ).toLocaleString()}
                </h3>
              </div>
              <div className="mid">
                <div className="detail">
                  <ul className="list">{/* Your list items */}</ul>
                </div>
              </div>
              <div className="end">
                <div className="endtitle">
                  <h2>Product Ownership History</h2>
                </div>
                <div
                  className="outer"
                  style={{ maxHeight:"100%" }}
                >
                  {productData?.owners?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="history"
                        style={{
                          float: (index + 1) % 2 === 0 ? "left" : "right",
                          position: "relative",
                          top: (index + 1) % 2 === 0 ? 1 : 4,
                          left: (index + 1) % 2 === 0 ? 90 : -70,
                        }}
                      >
                        <li>{data?.curOwner}</li>
                        <li>
                          {new Date(
                            Number(data?.ownerShipUpdateTimeStamp) * 1000
                          ).toLocaleString()}
                        </li>
                      </div>
                    );
                  })}
                  <div className="inner" style={{height:"max-content"}}>
                    {productData?.owners?.map((data, index) => (
                      // <>
                      <li
                        key={index}
                        className="centerli"
                        style={{ marginBottom: "25px", fontSize: "8px" }}
                      >
                        <h1>{index + 1}</h1>
                      </li>
                      // </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {status !== "" && (
        <div className="alertTop">
          <Alert severity={status}>{response}</Alert>
        </div>
      )}
    </>
  );
};

export default DetectProduct;
