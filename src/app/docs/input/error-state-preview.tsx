"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const ErrorStatePreview = () => {
  const [values, setValues] = useState({
    normal: "",
    error: "",
    errorWithHelper: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Normal Input"
        value={values.normal}
        onChange={(e) => setValues({ ...values, normal: e.target.value })}
        placeholder="Normal input"
      />
      <Input
        label="Error Input"
        error={true}
        value={values.error}
        onChange={(e) => setValues({ ...values, error: e.target.value })}
        placeholder="Input with error state"
      />
      <Input
        label="Error Input with Helper Text"
        error={true}
        helperText="This field is required"
        value={values.errorWithHelper}
        onChange={(e) =>
          setValues({ ...values, errorWithHelper: e.target.value })
        }
        placeholder="Error input with helper text"
      />
    </div>
  );
};

export default ErrorStatePreview;
