"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";

const PasswordPreview = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Password Input"
        type="password"
        showPasswordToggle
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
    </div>
  );
};

export default PasswordPreview;
