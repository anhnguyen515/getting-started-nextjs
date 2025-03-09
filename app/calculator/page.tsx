"use client";

import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function CalculatorPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=" || value === "Enter") {
      try {
        try {
          const fn = new Function("", "return " + input);
          const result = fn();
          if (typeof result !== "number") {
            throw new Error("Result is not a number");
          }
          setResult(result.toString());
        } catch {
          setResult("Error");
        }
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleButtonClick("Enter");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Calculator</h1>
      <form
        className="grid grid-cols-4 gap-2 max-w-xs"
        onKeyDown={handleKeyPress}
      >
        <div className="col-span-4 flex flex-col bg-gray-700 p-2 rounded-md">
          <Input
            variant="secondary"
            level="text"
            size="md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            variant="secondary"
            level="text"
            size="lg"
            className="text-right"
            value={result}
            readOnly
          />
        </div>
        <Button size="md" onClick={() => handleButtonClick("1")}>
          1
        </Button>
        <Button size="md" onClick={() => handleButtonClick("2")}>
          2
        </Button>
        <Button size="md" onClick={() => handleButtonClick("3")}>
          3
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => handleButtonClick("/")}
        >
          /
        </Button>

        <Button size="md" onClick={() => handleButtonClick("4")}>
          4
        </Button>
        <Button size="md" onClick={() => handleButtonClick("5")}>
          5
        </Button>
        <Button size="md" onClick={() => handleButtonClick("6")}>
          6
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => handleButtonClick("*")}
        >
          *
        </Button>

        <Button size="md" onClick={() => handleButtonClick("7")}>
          7
        </Button>
        <Button size="md" onClick={() => handleButtonClick("8")}>
          8
        </Button>
        <Button size="md" onClick={() => handleButtonClick("9")}>
          9
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => handleButtonClick("-")}
        >
          -
        </Button>

        <Button
          size="md"
          variant="primary"
          className="col-span-2"
          onClick={() => handleButtonClick("0")}
        >
          0
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => handleButtonClick(".")}
        >
          .
        </Button>
        <Button
          size="md"
          variant="secondary"
          onClick={() => handleButtonClick("+")}
        >
          +
        </Button>

        <Button
          size="md"
          variant="danger"
          onClick={() => handleButtonClick("C")}
        >
          C
        </Button>
        <Button
          size="md"
          variant="warning"
          className="col-span-3"
          onClick={() => handleButtonClick("=")}
        >
          =
        </Button>
      </form>
    </main>
  );
}
