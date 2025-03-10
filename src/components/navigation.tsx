"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "@/components/nav-button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

const routes = [
  {
    href: "/programs",
    label: "Programs",
    subRoutes: [
      { href: "/programs/case-management", label: "Case Management" },
      { href: "/programs/mtourism-lab", label: "Mombasa Tourism Innovation Lab" },
      { href: "/programs/events", label: "Events" },
      { href: "/programs/campus-ambassador", label: "Campus Ambassador Program" },
      { href: "/programs/tech-women", label: "Swahili Tech Women" },
    ],
  },
  {
    href: "/adverts",
    label: "Adverts",
  },
  {
    href: "/sphfm",
    label: "SwahilipotFM",
  },
  {
    href: "/departments",
    label: "Departments",
    subRoutes: [
      { href: "/departments/communications", label: "Communications" },
      { href: "/departments/technology", label: "Technology" },
      { href: "/departments/engineering", label: "Engineering Team" },
      { href: "/departments/creatives", label: "Creatives" },
      { href: "/departments/community", label: "Community Experiences" },
    ],
  },
  {
    href: "/aboutsph",
    label: "About Us",
    subRoutes: [
      { href: "/about/aboutus", label: "About Swahilipot hub" },
      { href: "/about/origin", label: "Our Origin Story" },
      { href: "/about/contact", label: "Contact Us" },
    ],
  },
  {
    href: "/youth",
    label: "Join Youth Database",
  },
  {
    href: "/blogs",
    label: "Blogs and News",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <div key={route.href}>
                <Button
                  variant={route.href === pathname ? "secondary" : "ghost"}
                  onClick={() => onClick(route.href)}
                  className="w-full justify-start"
                >
                  {route.label}
                  {route.subRoutes && <ChevronDown className="ml-2" />}
                </Button>
                {route.subRoutes && (
                  <div className="pl-4 space-y-1">
                    {route.subRoutes.map((subRoute) => (
                      <Button
                        key={subRoute.href}
                        variant="ghost"
                        onClick={() => onClick(subRoute.href)}
                        className="w-full justify-start text-sm"
                      >
                        {subRoute.label}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-4">
      {routes.map((route) => (
        <div
          key={route.href}
          className="relative group"
          onMouseEnter={() => setDropdownOpen(route.label)}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <NavButton
            href={route.href}
            label={route.label}
            isActive={pathname === route.href}
          />
          {route.subRoutes && dropdownOpen === route.label && (
            <div className="absolute bg-black text-white rounded-md shadow-lg py-2 w-auto min-w-[200px] z-10">
              {route.subRoutes.map((subRoute) => (
                <Button
                  key={subRoute.href}
                  variant="ghost"
                  onClick={() => onClick(subRoute.href)}
                  className="w-full justify-start text-left text-sm px-4 py-2 hover:bg-white/10 whitespace-nowrap"
                >
                  {subRoute.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

