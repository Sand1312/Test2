import React from "react";

import { Input, Button, Form, Space } from "antd";
import "./App.css";
import Password from "antd/es/input/Password";
// import { register } from "./api";

export default function Register() {
  type RegisterType = {
    username?: string;
    password?: string;
    confirmPassword?: string;
  };

  const onFinish = (values: RegisterType) => {
    console.log("Receive values", values);
  };
  return (
    <Form
      name="regis-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item<RegisterType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<RegisterType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<RegisterType>
        label="Confirm Password"
        name="confirmPassword"
        validateDebounce={1000}
        rules={[
          { required: true, message: "Please input your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
