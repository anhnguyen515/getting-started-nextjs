"use client";

import { useState } from "react";
import RadioInput from "../components/RadioInput";

export default function Component() {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  return (
    <div className="flex flex-col">
      <RadioInput
        name="example"
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
        variant="primary"
        level="normal"
        size="md"
      />
    </div>
  );
}
