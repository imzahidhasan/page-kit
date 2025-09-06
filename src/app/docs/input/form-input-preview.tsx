"use client";
import { useState, FormEvent } from "react";
import { Input } from "@/components/core/input";
import Button from "@/components/core/button";

const FormInputPreview = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <Input
          label="Password"
          name="password"
          type="password"
          showPasswordToggle
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />
        <div className="mt-2">
          <Button type="submit" isLoading={isSubmitting}>
            Submit Form
          </Button>
        </div>
      </form>

      {submitted && (
        <div className="mt-2 p-3 bg-green-100 text-green-800 rounded-lg dark:bg-green-900 dark:text-green-100">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default FormInputPreview;
