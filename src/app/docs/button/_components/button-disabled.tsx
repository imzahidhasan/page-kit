import { Button } from "@/registry/ui/button";

export default function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="destructive" disabled>
        Disabled
      </Button>
    </div>
  );
}
