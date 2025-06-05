import { Form, Select } from "antd";
import type { FieldDef, FieldStrategy } from "./type";

// const handleChange = (value: any) => {
//   console.log(value);
// };

export class SelectStrategy implements FieldStrategy {
  render(field: FieldDef) {
    return (
      <Form.Item>
        key={field.name}
        name={field.name}
        label={field.label}
        rules={field.rules}
        <Select
          style={{ width: "100%" }}
          options={field.options}
          onChange={field.onChange}
          value={field.value}
        />
      </Form.Item>
    );
  }
}
