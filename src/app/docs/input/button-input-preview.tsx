"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";
import Button from "@/components/core/button";
import { Search, ArrowRight } from "lucide-react";

const ButtonInputPreview = () => {
  const [values, setValues] = useState({
    left: "",
    right: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Input with Left Button"
        leftButton={
          <Button size="sm" leftIcon={<Search size={16} />}>
            Search
          </Button>
        }
        value={values.left}
        onChange={(e) => setValues({ ...values, left: e.target.value })}
        placeholder="With left button"
      />
      <Input
        label="Input with Right Button"
        rightButton={
          <Button size="sm" rightIcon={<ArrowRight size={16} />}>
            Submit
          </Button>
        }
        value={values.right}
        onChange={(e) => setValues({ ...values, right: e.target.value })}
        placeholder="With right button"
      />
    </div>
  );
};

export default ButtonInputPreview;
