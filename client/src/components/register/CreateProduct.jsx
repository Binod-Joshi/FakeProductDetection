import React, { useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    price: "",
    expiryDate: "",
  });
  const [formDataForUpdate,setFormDataForUpdate] = useState({productHash:"",address:""})
  const [currentStatusOfForm, setCurrentStatusOfForm] = useState("");

  const handleclickedOne = (data) => {
    setCurrentStatusOfForm(data);
    console.log(data);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if(currentStatusOfForm === "update Ownership"){
      setCurrentStatusOfForm({ ...formDataForUpdate, [name]:value});
    }else{
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="registerManufacturerDiv">
      <form onSubmit={submitHandler} className="formRegister">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              padding: "15px",
              cursor: "pointer",
              color:
                currentStatusOfForm === "create product" ||
                currentStatusOfForm === ""
                  ? "aliceblue"
                  : "#ffffff94",
            }}
            onClick={() => handleclickedOne("create product")}
          >
            Create Product
          </div>
          <div
            style={{
              fontSize: "20px",
              padding: "15px",
              cursor: "pointer",
              color:
                currentStatusOfForm === "update Ownership"
                  ? "aliceblue"
                  : "#ffffff94",
            }}
            onClick={() => handleclickedOne("update Ownership")}
          >
            Update Ownership
          </div>
        </div>
        {currentStatusOfForm !== "update Ownership" && (
          <>
            <div>
              <label className="labelDiv">Product Name</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              placeholder="Television"
              required
            />
            <div>
              <label className="labelDiv">Product Model</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="text"
              name="model"
              value={formData.model}
              onChange={handleOnChange}
              placeholder="Electric"
              required
            />
            <div>
              <label className="labelDiv">Product Price</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleOnChange}
              placeholder="20000"
              required
            />

            <div>
              <label className="labelDiv">Product ExpiryDate(Optional)</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleOnChange}
              placeholder="02 march 2024"
              style={{ display: "flex", justifyContent: "flex-start" }}
            />
          </>
        )}

        {currentStatusOfForm === "update Ownership" && <>
        <div>
              <label className="labelDiv">Product Id</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="text"
              name="productHash"
              value={formDataForUpdate.productHash}
              onChange={handleOnChange}
              placeholder="productHash"
              required
            />
            <div>
              <label className="labelDiv">Buyer Address</label>
            </div>
            <input
              className="inputDivOfRegister"
              type="text"
              name="address"
              value={formDataForUpdate.address}
              onChange={handleOnChange}
              placeholder="0x00000000000000000000000000000"
              required
            />
        </>}

        <div className="registerDivButton">
          <button type="submit" style={{ backgroundColor: "rgb(12 67 142)" }}>
            {currentStatusOfForm !== "update Ownership" ? "Create Product":"Update Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
