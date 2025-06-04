import { Input, Button, Form, Space } from "antd";
import React from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

const Login = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    // try {
    //   await login({ ...values });
    //   const msg = await login({ ...values });
    //   if (msg.status === "OK") {
    //     const token = msg.result.token;
    //     localStorage.setItem("token", token);
    //     // await fetchUserInfo();
    //   }
    //   console.log(msg);
    // } catch (e) {
    //   console.log("error", e);
  };
  return (
    <Form
      name="login-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Username">
        <Space>
          <Form.Item
            name="username"
            noStyle
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
        </Space>
      </Form.Item>

      <Form.Item label="Password">
        <Input.Password
          placeholder="input password"
          required
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
