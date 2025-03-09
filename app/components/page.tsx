import React from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";

const variants = ["primary", "secondary", "danger", "success", "warning"];
const levels = ["normal", "outline", "text"];
const sizes = ["sm", "md", "lg"];

const Page = () => {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-center text-3xl font-bold mb-10">
        Component Showcase
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        {variants.map((variant) => (
          <div key={variant} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            {levels.map((level) => (
              <div key={level} className="mb-2">
                <h4 className="text-lg font-medium mb-1">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </h4>
                <div className="flex gap-2 flex-wrap items-center">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={variant}
                      level={level}
                      size={size}
                    >
                      {`${variant} ${level} ${size}`}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
        {variants.map((variant) => (
          <div key={variant} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            {levels.map((level) => (
              <div key={level} className="mb-2">
                <h4 className="text-lg font-medium mb-1">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <Input
                      key={size}
                      variant={variant}
                      level={level}
                      size={size}
                      placeholder={`${variant} ${level} ${size}`}
                      value={`${variant} ${level} ${size}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">TextAreas</h2>
        {variants.map((variant) => (
          <div key={variant} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            {levels.map((level) => (
              <div key={level} className="mb-2">
                <h4 className="text-lg font-medium mb-1">
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </h4>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <TextArea
                      key={size}
                      variant={variant}
                      level={level}
                      size={size}
                      placeholder={`${variant} ${level} ${size}`}
                      value={`${variant} ${level} ${size}`}
                      maxLength={240}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
