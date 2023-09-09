import React from "react";
import "./editUser.css";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../features/userSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const users = useSelector((state) => state.usersInfo.users);

  const existingUser = users.filter((user) => user.id === params.id);
  const {
    name,
    email,
    phoneNumber,
    aadharNumber,
    address,
    checkInDate,
    stayDays,
  } = existingUser[0];

  const [values, setValues] = useState({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    aadharNumber: aadharNumber,
    address: address,
    checkInDate: checkInDate,
    stayDays: stayDays,
  });

  const handleEditUser = () => {
    setValues({
      name: "",
      email: "",
      phoneNumber: "",
      aadharNumber: "",
      address: "",
      checkInDate: "",
      stayDays: "",
    });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        aadharNumber: values.aadharNumber,
        address: values.address,
        checkInDate: values.checkInDate,
        stayDays: values.stayDays,
      })
    );
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
