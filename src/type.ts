import type { SelectProps } from "antd";

export interface FieldDef {
  type: string;
  label: string;
  name: string;
  // options?: SelectProps["options"];
  options?: any;
  rules?: any[];
  // onChange?: void;
  onChange?: any;
  value?: object;
}
export interface FieldStrategy {
  render(form: FieldDef): React.ReactNode;
}
