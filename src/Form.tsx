import { Form, Select, Input, Card } from "antd";
import React from "react";
import { PROVINCE } from "./constants/province";
import { DISTRICT } from "./constants/district";
import { STREET } from "./constants/street";

const AddressForm: React.FC = () => {
  const [form] = Form.useForm();

  const provinceId = Form.useWatch("province", form);
  const districtId = Form.useWatch("district", form);
  const nameValue = Form.useWatch("name", form);

  const onFinish = (values: any) => {
    console.log("Receive Values", values);
  };

  const districtOptions = DISTRICT.filter(
    (d) => d.province_id === provinceId
  ).map((district) => ({
    label: district.name_vn,
    value: district.id,
  }));

  const streetOptions = STREET.filter((s) => s.district_id === districtId).map(
    (street) => ({
      label: street.name,
      value: street.id,
    })
  );

  return (
    <Card title={nameValue} variant="borderless" style={{ width: 900 }}>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>

        <Form.Item name="province" label="Province:">
          <Select
            options={PROVINCE.map((province) => ({
              label: province.name_vn,
              value: province.id,
            }))}
            onChange={() => {
              form.setFieldsValue({ district: undefined, street: undefined });
            }}
          />
        </Form.Item>

        <Form.Item name="district" label="District:">
          <Select
            options={districtOptions}
            onChange={() => {
              form.setFieldsValue({ street: undefined });
            }}
            disabled={!provinceId}
          />
        </Form.Item>

        <Form.Item name="street" label="Street Number:">
          <Select options={streetOptions} disabled={!districtId} />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddressForm;
