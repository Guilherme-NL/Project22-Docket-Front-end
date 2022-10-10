import styled from "styled-components";

export default function AddFolder({ onAddFolder, folderName, setFolderName }) {
  return (
    <Container>
      <input
        type="text"
        required
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Folder Name"
      />
      <p onClick={onAddFolder}>Add</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 15px;
    font-weight: bold;
    color: darkblue;
  }

  input {
    width: 100%;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding: 5px;
    font-size: 15px;
    font-family: "Raleway", sans-serif;
    ::placeholder {
      color: #dbdbdb;
      font-size: 15px;
    }
    margin: 5px 20px 5px 0;
  }

  @media (max-width: 600px) {
    p {
      font-size: 12px;
    }
    input {
      font-size: 12px;
      ::placeholder {
        font-size: 12px;
      }
    }
  }
`;
