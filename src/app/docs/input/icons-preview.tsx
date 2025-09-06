"use client";
import { useState } from "react";
import { Input } from "@/components/core/input";
import {
  Search,
  CheckCircle,
  User,
  Info,
  Mail,
  Lock,
  CreditCard,
} from "lucide-react";

const IconsPreview = () => {
  const [values, setValues] = useState({
    leftIcon: "",
    rightIcon: "",
    bothIcons: "",
    examples: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Input with Left Icon"
        leftIcon={<Search size={18} />}
        value={values.leftIcon}
        onChange={(e) => setValues({ ...values, leftIcon: e.target.value })}
        placeholder="Search..."
      />
      <Input
        label="Input with Right Icon"
        rightIcon={<CheckCircle size={18} />}
        value={values.rightIcon}
        onChange={(e) => setValues({ ...values, rightIcon: e.target.value })}
        placeholder="Verified input"
      />
      <Input
        label="Input with Both Icons"
        leftIcon={<User size={18} />}
        rightIcon={<Info size={18} />}
        value={values.bothIcons}
        onChange={(e) => setValues({ ...values, bothIcons: e.target.value })}
        placeholder="Enter username"
      />
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email Input"
          leftIcon={<Mail size={18} />}
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password Input"
          leftIcon={<Lock size={18} />}
          placeholder="Enter password"
          type="password"
          showPasswordToggle
        />
        <Input
          label="Payment Input"
          leftIcon={<CreditCard size={18} />}
          placeholder="1234 5678 9012 3456"
        />
      </div>
    </div>
  );
};

export default IconsPreview;
