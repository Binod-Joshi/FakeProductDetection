import React from "react";
import "./DetectProduct.css";

const DetectProduct = () => {
  const historyData = [
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x721c18547fo6541y786ac55ki892hgk78",
      timestamp: "Monday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0xd681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x721c18547fo6541y786ac55ki892hgk78",
      timestamp: "Monday, April 17, 2022, 3:36:33 PM",
    },
  ];
  return (
    <div>
      <div className="main">
        <div className="top">
          <div className="title">
            <h3>Check the product</h3>
          </div>
          <div className="Search">
            <input className="check_product" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="mid">
          <div className="detail">
            <ul className="list">
              <li>
                <h4>Product ID: 0</h4>
              </li>
              <li>
                <h4>Product Name: Asus Zenphone</h4>
              </li>
              <li>
                <h4>Product Model: M20</h4>
              </li>
              <li>
                <h4>Initial Price: 20000</h4>
              </li>
              <li>
                <h4>Manufacturer: 0x681c18547fo6541y786ac55</h4>
              </li>
              <li>
                <h4>Current Owner: 0x681c18547fo6541y786ac55</h4>
              </li>
              <li>
                <h4>
                  Manufactured Time Stemp :Sunday,April 17,2022,3:36:33 PM
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="end">
          <div className="endtitle">
            <h2>Product Ownership History</h2>
          </div>
          <div className="outer">
            {historyData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="history"
                  style={{
                    float: (index + 1) % 2 === 0 ? "left" : "right",
                    position: "relative",
                    top: (index + 1) % 2 === 0 ? 50 : 4,
                    left: (index + 1) % 2 === 0 ? 90 : -70,
                  }}
                >
                  <li>{data?.address}</li>
                  <li>{data?.timestamp}</li>
                </div>
              );
            })}
            <div className="inner">
              {historyData?.map((data, index) => {
                console.log(data);
                return (
                  <div key={index}>
                    <li className={index % 2 === 0 ? "centerli" : "centerli2"}>
                      <h1>{index + 1}</h1>
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectProduct;
