import { GoogleLogin } from "react-google-login";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useUserData,
  saveUserDataInLocalStorage,
} from "../contexts/UserDataContext";
import { gapi } from "gapi-script";

export default function Google() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();

  const [, setUserData] = useUserData();

  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log("Success", res.profileObj);
    const url = `${process.env.REACT_APP_BACK_END_URL}googleLogin`;
    const body = {
      token: res.tokenId,
    };

    axios
      .post(url, body)
      .then((res) => {
        setUserData(res.data);
        saveUserDataInLocalStorage(res.data);
        navigate("/home");
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
    ></GoogleLogin>
  );
}
