import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Input, Button } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { login } from "./api";
import "./App.css";

const App: React.FC = () => {
  // const [position, setPosition] = useState<"start" | "end">("end");

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      await login({ ...values });
      const msg = await login({ ...values });
      if (msg.status === "OK") {
        const token = msg.result.token;
        localStorage.setItem("token", token);
        // await fetchUserInfo();
      }
      console.log(msg);
    } catch (e) {
      console.log("error", e);
    }
  };
  return (
    <form>
      <label htmlFor="">UserName</label>
      <Input
        required
        size="large"
        placeholder="large size"
        prefix={<UserOutlined />}
      />
      <Input.Password required placeholder="input password" />
      <label>Password</label>
      <Input.Password
        placeholder="input password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <Button type="primary" onclick={handleSubmit}>
        Submit
      </Button>
      <Button type="link">Don't have a account? Register now!</Button>
    </form>
  );
};

export default App;
