import { buttonVariants } from "@/registry/ui/button";
import Link from "next/link";

export default function CustomLink() {
    return (
        <Link
            href="/docs"
            className={buttonVariants({ variant: "outline", size: "lg" })}
        >
            Go to Docs
        </Link>
    );
}