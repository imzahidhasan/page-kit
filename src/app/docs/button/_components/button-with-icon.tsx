import { Button } from "@/registry/ui/button";
import { Mail, ArrowRight, Loader2 } from "lucide-react";

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Mail />
        Login with Email
      </Button>
      <Button>
        Continue
        <ArrowRight />
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
