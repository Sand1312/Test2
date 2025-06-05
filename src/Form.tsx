// import DynamicForm from "./Factory";
// import { useEffect, useState } from "react";
// import type { FieldDef } from "./type";
// import { PROVINCE } from "./constants/province";
// import { DISTRICT } from "./constants/district";

// type District = {
//   province_id: number;
//   id: string;
//   name: string;
//   name_vn: string;
// };

// export default function Form() {
//   const [provinceId, setProvinceId] = useState<number | null>(null);
//   const [districts, setDistricts] = useState<District[]>([]);

//   useEffect(() => {
//     if (provinceId === null) {
//       setDistricts([]);
//       return;
//     }
//     const filtered = DISTRICT.filter((d) => d.province_id === provinceId);
//     setDistricts(filtered);
//   }, [provinceId]);

//   const handleProvinceChange = (value: number) => {
//     setProvinceId(value);
//     // setDistricts([]);
//   };

//   const fields: FieldDef[] = [
//     {
//       type: "input",
//       label: "Input",
//       name: "input",
//     },
//     {
//       type: "select",
//       label: "City",
//       name: "city",
//       options: PROVINCE.map((province) => ({
//         label: province.name_vn,
//         value: province.id,
//       })),
//       onChange: handleProvinceChange,
//     },
//     {
//       type: "select",
//       label: "District",
//       name: "district",
//       options: districts.map((district) => ({
//         label: district.name_vn,
//         value: district.name,
//       })),
//     },
//   ];

//   return (
//     <DynamicForm fields={fields} onClick={() => console.log("we bare bear")} />
//   );
// }

import { Form, Select, type SelectProps } from "antd";
import React from "react";
import { PROVINCE } from "./constants/province";
import { DISTRICT } from "./constants/district";
import { STREET } from "./constants/street";

type AddressType = {};

type District = {
  province_id: number;
  id: string;
  name: string;
  name_vn: string;
};

type Street = {
  province_id: number;
  district_id: string;
  id: string;
  name: string;
};

const AddressForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: Partial<AddressType>) => {
    console.log("Receive Values", values);
  };
  const [districts, setDistricts] = React.useState<District[]>([]);
  const [streets, setStreets] = React.useState<Street[]>([]);

  const handleProvinceChange = (provinceId: number) => {
    form.setFieldsValue({ district: undefined, street: undefined });
    const filteredDistricts = DISTRICT.filter(
      (d) => d.province_id === provinceId
    );
    setDistricts(filteredDistricts);
  };
  const handleDistrictChange = (districtId: string) => {
    form.setFieldsValue({ street: undefined });
    const filteredStreets = STREET.filter((s) => s.district_id === districtId);
    setStreets(filteredStreets);
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 800 }}
      onFinish={onFinish}
    >
      <Form.Item<AddressType> name="province" label="province:">
        <Select
          options={PROVINCE.map((province) => ({
            label: province.name_vn,
            value: province.id,
          }))}
          onChange={handleProvinceChange}
        />
      </Form.Item>

      <Form.Item<AddressType> name="district" label="District:" rules={[]}>
        <Select
          options={districts.map((district) => ({
            label: district.name_vn,
            value: district.id,
          }))}
          onChange={handleDistrictChange}
        />
      </Form.Item>

      <Form.Item<AddressType> name="street" label="Street Number:">
        <Select
          options={streets.map((street) => ({
            label: street.name,
            value: street.id,
          }))}
        />
      </Form.Item>
    </Form>
  );
};

export default AddressForm;
