import { Input, Button, Form, InputNumber, DatePicker } from "antd";
import "./App.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";
// import Password from "antd/es/input/Password";
// import { register } from "./api";

export default function Register() {
  type RegisterType = {
    username: string;
    email: string;
    age: number;
    password: string;
    confirmPassword: string;
    startDate: Date;
    endDate: Date;
    rangeDate: Date[];
  };

  const onFinish = (values: Partial<RegisterType>) => {
    console.log("Receive values", values);
  };

  const { RangePicker } = DatePicker;
  return (
    <Form
      name="regis-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
    >
      <Form.Item<RegisterType> label="Email" name="email">
        <Input type="email" />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <InputNumber min={1} max={101} />
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

      <Form.Item label="start date" name="startDate">
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="end date"
        name="endDate"
        dependencies={["startDate"]}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (getFieldValue("startDate") <= value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("End Date must be come after start Date")
              );
            },
          }),
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Range Date"
        name="rangeDate"
        dependencies={["startDate", "endDate"]}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (
                value[1] < getFieldValue("endDate") &&
                value[0] > getFieldValue("startDate")
              ) {
                return Promise.resolve();
              }
              console.log("start", value[0]);
              console.log("end", value[1]);
              return Promise.reject(new Error("Date range is not valid"));
            },
          }),
        ]}
      >
        <RangePicker
        //   minDate={dayjs({getFieldValue(startDate)}, dateFormat)}
        // maxDate={dayjs({getFieldValue(endDate)}, dateFormat)}
        />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
