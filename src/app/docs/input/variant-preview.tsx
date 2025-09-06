"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const VariantPreview = () => {
  const [values, setValues] = useState({
    default: "",
    outline: "",
    ghost: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Default Variant"
        variant="default"
        value={values.default}
        onChange={(e) => setValues({ ...values, default: e.target.value })}
        placeholder="Default variant input"
      />
      <Input
        label="Outline Variant"
        variant="outline"
        value={values.outline}
        onChange={(e) => setValues({ ...values, outline: e.target.value })}
        placeholder="Outline variant input"
      />
      <Input
        label="Ghost Variant"
        variant="ghost"
        value={values.ghost}
        onChange={(e) => setValues({ ...values, ghost: e.target.value })}
        placeholder="Ghost variant input"
      />
    </div>
  );
};

export default VariantPreview;
