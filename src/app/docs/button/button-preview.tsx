import Button from "@/components/core/button";

const ButtonPreview = () => {
  return (
    <div className="flex gap-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
};

export default ButtonPreview;