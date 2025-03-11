import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
};

export const NavButton = ({
    href,
    label,
    isActive,
}: Props) => {
    // Check if the link is external
    const isExternal = href.startsWith("http");

    return (
        <Button
          asChild
          size="sm"
          variant="outline"
          className={cn(
            "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-blue-500 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-dark focus:bg-white/30 transition",
            isActive ? "bg-white/10 text-dark": "bg-transparent",
          )}
        >
            {isExternal ? (
                // Open external links in a new tab
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                </a>
            ) : (
                // Internal links stay the same
                <Link href={href}>
                    {label}
                </Link>
            )}
        </Button> 
    );
};
