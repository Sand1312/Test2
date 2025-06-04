import React from "react";

import { Input, Button } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import "./App.css";
import { register } from "./api";

const Register: React.FC = () => {
  const handleSubmit = async (values: API.RegisterParms) => {
    if (values.password !== values.confirmPassword) {
      console.log("New password and confirm password do not match.");
      try {
        await register({ ...values });
        const msg = await register({ ...values });
        if (msg.status === "OK") {
          const token = msg.result.token;
        }
        console.log(msg);
      } catch (e) {
        console.log("error", e);
      }
    }
  };
  return (
    <form>
      <Input
        required
        size="large"
        placeholder="large size"
        prefix={<UserOutlined />}
      />
      <Input.Password required placeholder="input password" />
      <label>Password</label>
      <Input.Password
        placeholder="password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <Input.Password
        placeholder="confirm password"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
      <Button type="primary" onclick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default Register;
