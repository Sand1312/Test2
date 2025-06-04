import { Input, Button, Form } from "antd";
import "./App.css";
// import Password from "antd/es/input/Password";
// import { register } from "./api";

export default function Register() {
  type RegisterType = {
    username?: string;
    email?: string;
    age?: number;
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
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (
                !value ||
                getFieldValue("email")
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  )
              ) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Please enter a valid email!"));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[
          ({}) => ({
            validator(_, value) {
              if (!value || value - parseInt(value) === 0) {
                console.log("value", value);
                console.log("Int value", parseInt(value));
                console.log(value - parseInt(value));
                return Promise.resolve();
              }
              return Promise.reject(new Error("The Age is not an integer!"));
            },
          }),
        ]}
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
        dependencies={["password"]}
        // validateDebounce={1000}
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
