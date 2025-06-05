import React from "react";
import { InputStrategy } from "./InputStrategy";
import { SelectStrategy } from "./SelectStrategy";
import type { FieldDef } from "./type";
import { Form, Button } from "antd";

const map: Record<
  string,
  { render: (field: FieldDef, formValues: any) => React.ReactNode }
> = {
  input: new InputStrategy(),
  select: new SelectStrategy(),
};

interface Props {
  fields: FieldDef[];
  onClick: (values: any) => void;
}

const DynamicForm: React.FC<Props> = ({ fields, onClick }) => {
  const [form] = Form.useForm();

  const renderField = (field: FieldDef, formValues: any) => {
    const strategy = map[field.type];
    if (!strategy) return null;
    return strategy.render(field, formValues);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onClick}
      onValuesChange={() => {}}
    >
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          name={field.name}
          label={field.label}
          rules={field.rules}
        >
          {renderField(field, form.getFieldsValue())}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DynamicForm;
