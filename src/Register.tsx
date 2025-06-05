import { Input, Button, Form, InputNumber, DatePicker } from "antd";
import "./App.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

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
const dateFormat = "DD-MM-YYYY";

export default function Register() {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;

  const onFinish = (values: Partial<RegisterType>) => {
    console.log("Receive values", values);
  };

  return (
    <Form
      form={form}
      name="regis-form"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
    >
      <Form.Item<RegisterType>
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "The input is not valid E-mail!" },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <InputNumber min={1} max={101} style={{ width: "100%" }} />
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

      <Form.Item label="Start Date" name="startDate">
        <DatePicker format={dateFormat} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="endDate"
        dependencies={["startDate"]}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              const start = getFieldValue("startDate");
              if (!value || !start || dayjs(start).isBefore(value)) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("End Date must come after Start Date")
              );
            },
          }),
        ]}
      >
        <DatePicker
          format={dateFormat}
          style={{ width: "100%" }}
          disabledDate={(current) => {
            const start = form.getFieldValue("startDate");
            // const startDayjs = start ? dayjs(start) : null;

            if (start && current.isBefore(start, "day")) return true;
            return false;
          }}
        />
      </Form.Item>

      <Form.Item
        label="Range Date"
        name="rangeDate"
        dependencies={["startDate", "endDate"]}
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              const start = getFieldValue("startDate");
              const end = getFieldValue("endDate");
              if (
                value &&
                value[0] &&
                value[1] &&
                dayjs(value[0]).isAfter(dayjs(start)) &&
                dayjs(value[1]).isBefore(dayjs(end))
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Date range must be between Start and End Dates")
              );
            },
          }),
        ]}
      >
        <RangePicker
          style={{ width: "100%" }}
          disabledDate={(current) => {
            const start = form.getFieldValue("startDate");
            const end = form.getFieldValue("endDate");

            // const startDayjs = start ? dayjs(start, dateFormat) : null;
            // const endDayjs = end ? dayjs(end, dateFormat) : null;

            if (start && current.isBefore(start, "day")) return true;
            if (end && current.isAfter(end, "day")) return true;

            return false;
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
