import DynamicForm from "./Factory";
import type { FieldDef } from "./type";
import type { SelectProps } from "antd";
import { useState } from "react";

const cityData = {
  Hanoi: ["Hoang Mai", "Long Bien", "Tay Ho"],
  HoChiMinh: ["Thu Duc", "Quan 1", "Quan 2", "Tan Binh"],
};
type CityName = keyof typeof cityData;
const provinceData: CityName[] = ["Hanoi", "HoChiMinh"];
export default function Form() {
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [distict, setDistrict] = useState(
    cityData[provinceData[0]][0] as CityName
  );
  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setDistrict(cityData[value][0] as CityName);
    console.log(distict);
  };
  const onDistrictChange = (value: CityName) => {
    setDistrict(value);
  };

  //   const options: SelectProps["options"] = [];
  //   for (let i = 10; i < 36; i++) {
  //     options.push({
  //       value: i.toString(36) + i,
  //       label: i.toString(36) + i,
  //     });
  //   }

  //   const district = () => {
  //     cities.map((city) => ({ label: city, value: city }));
  //   };
  //   const province = () => {
  //     provinceData.map((province) => ({ label: province, value: province }));
  //   };
  const fields: FieldDef[] = [
    {
      type: "input",
      label: "Input",
      name: "input",
    },
    {
      type: "select",
      label: "City",
      //   value: { cities },
      name: "city",
      options: provinceData.map((province) => ({
        label: province,
        value: province,
      })),
      onChange: handleProvinceChange,
    },
    {
      type: "select",
      label: "Select",
      // value: { distict },
      name: "district",
      options: cities.map((city) => ({ label: city, value: city })),
      onChange: onDistrictChange,
    },
  ];
  return DynamicForm({
    fields,
    onClick: function (values: any): void {
      throw new Error("Function not implemented.");
    },
  });
}
