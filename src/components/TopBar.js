import {
  deleteUserDataInLocalStorage,
  useUserData,
} from "../contexts/UserDataContext";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

export default function TopBar() {
  const [{ name, image, token }, setUserData] = useUserData();
  const navigate = useNavigate();
  function logout() {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_BACK_END_URL}logout`;

    axios
      .delete(url, auth)
      .then((response) => {
        setUserData(null);
        deleteUserDataInLocalStorage();
        navigate("/");
      })
      .catch((error) => {
        alert("Ocorreu um erro");
        console.log(error.data);
      });
  }
  return (
    <Container>
      <UserWrapper>
        <img src={image} alt="Profile"></img>
        <h1>{name}</h1>
      </UserWrapper>
      <Logout>
        <FiLogOut onClick={logout} />
      </Logout>
    </Container>
  );
}
const Container = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;

  background-color: #efefef;
  ion-icon {
    font-size: 30px;
  }
  span {
    font-size: 20px;
    font-family: "Glegoo", serif;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
  }
`;
const Logout = styled.div`
  background: none;
  font-size: 25px;
  margin: 0;
  border-style: none;
`;
