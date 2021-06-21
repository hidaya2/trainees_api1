import { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { Button, Form } from "react-bootstrap";

const LoginScreen = ({history, location}) => {
  //const history = useHistory()
  const { loginUser,userInfo } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  //const user = localStorage.getItem("userInfo")

  const redirect = location.search ? location.search.split("=")[1]:"/trainees";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  },[history, userInfo, redirect])

  function handleSubmit(e) {
    e.preventDefault();

    const loginuser = {
      email,
      password,
    };
    loginUser(loginuser);
  }
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "20px",
          padding: "20px",
          border: "1px solid white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-center">LOG IN</h1>
        <Form.Control
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        <Form.Control
          placeholder="enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button type="submit">LOGIN</Button>
      </Form>
    </div>
  );
};

export default LoginScreen;
