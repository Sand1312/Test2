import { Form, Input } from "antd";
import type { FieldStrategy } from "./type";
import type { FieldDef } from "./type";

export class InputStrategy implements FieldStrategy {
  render(field: FieldDef) {
    return (
      <Form.Item
        key={field.name}
        name={field.name}
        label={field.label}
        rules={field.rules}
      >
        <Input />
      </Form.Item>
    );
  }
}
