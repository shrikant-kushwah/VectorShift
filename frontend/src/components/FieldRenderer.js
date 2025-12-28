import React from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const FieldRenderer = ({ field, value, onChange, label }) => {
  const handleInputChange = (e) => {
    onChange(field.name, e.target.value);
  };

  switch (field.type) {
    case "select":
      return (
        <Select
          placeholder="Select an option"
          defaultSelectedKeys={value ? [value] : [field.options[0]]}
          variant="bordered"
          radius="full"
          label={label}
          onChange={handleInputChange}
        >
          {field.options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
      );

    case "textarea":
      return (
        <Textarea
          label={label}
          value={value}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
          minRows={1}
          maxRows={10}
          className="w-full"
        />
      );

    case "color":
      return (
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500 ml-1">{label}</span>
          <input
            type="color"
            value={value}
            onChange={handleInputChange}
            className="w-full h-10 cursor-pointer border rounded-lg"
          />
        </div>
      );

    case "text":
      return (
        <Input
          type="text"
          label={label}
          value={value}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
        />
      );

    case "number":
      return (
        <Input
          type="number"
          label={label}
          value={value}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
        />
      );

    case "checkbox":
      return (
        <Checkbox
          checked={value}
          onChange={(e) => onChange(field.name, e.target.checked)}
        >
          Option
        </Checkbox>
      );

    default:
      return (
        <Input
          type="text"
          label={label}
          value={value}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
        />
      ); 
  }
};

export default FieldRenderer;
