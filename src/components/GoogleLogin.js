import { GoogleLogin } from "react-google-login";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useUserData,
  saveUserDataInLocalStorage,
} from "../contexts/UserDataContext";

export default function Google() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();

  //const [, setUserData] = useUserData();

  const onSuccess = (res) => {
    console.log("Success", res.profileObj);
    const url = `${process.env.REACT_APP_URL} + googleLogin`;
    const body = {
      email: res.profileObj.email,
      name: res.profileObj.givenName,
      image: res.profileObj.imageUrl,
      token: res.tokenId,
    };

    axios
      .post(url, body)
      .then((res) => {
        //setUserData(res.data);
        saveUserDataInLocalStorage(res.data);
        console.log(res.data);
        navigate("/balance");
      })
      .catch((err) => {
        alert(err.response.statusText);
      });
  };

  const onFailure = (res) => {
    console.log("Failure", res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Entrar com o Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}
