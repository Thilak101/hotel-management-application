import React from "react";
import "./addUser.css";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    id: uuid(),
    name: "",
    email: "",
    phoneNumber: "",
    aadharNumber: "",
    address: "",
    checkInDate: "",
    stayDays: "",
  });

  const handleAddUser = () => {
    setValues({
      name: "",
      email: "",
      phoneNumber: "",
      aadharNumber: "",
      address: "",
      checkInDate: "",
      stayDays: "",
    });

    dispatch(addUser(values));

    navigate("/");
  };

  return (
    <div>
      <TextField
        label={"Name"}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Name" }}
      />
      <br />
      <TextField
        label={"Email"}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Email" }}
      />
      <br />
      <TextField
        value={values.phoneNumber}
        label={"Phone Number"}
        onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
        inputProps={{ type: "text", placeholder: "Contact Number" }}
      />
      <br />
      <TextField
        value={values.aadharNumber}
        label={"Aadhar Number"}
        onChange={(e) => setValues({ ...values, aadharNumber: e.target.value })}
        inputProps={{ type: "text", placeholder: "Aadhar Number" }}
      />
      <br />
      <TextField
        value={values.address}
        label={"Address"}
        onChange={(e) => setValues({ ...values, address: e.target.value })}
        inputProps={{ type: "text", placeholder: "Address" }}
      />
      <br />
      <TextField
        value={values.checkInDate}
        label={"CheckInDate"}
        onChange={(e) => setValues({ ...values, checkInDate: e.target.value })}
        inputProps={{ type: "text", placeholder: "Date Of Check In" }}
      />
      <br />
      <TextField
        value={values.stayDays}
        label={"Stay days"}
        onChange={(e) => setValues({ ...values, stayDays: e.target.value })}
        inputProps={{ type: "text", placeholder: "Number Of Days To Stay" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
