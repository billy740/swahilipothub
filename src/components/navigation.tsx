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
    href: "/#",
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
    href: "/#",
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
    href: "/#",
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
      <div className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-md">
        {/* LOGO - Takes most of the space */}
        <img src="/sphlogo.png" alt="Logo" className="h-10 flex-grow max-w-[60%]" />
  
        {/* MENU ICON */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Button
              variant="outline"
              size="sm"
              className="font-normal bg-white/10 hover:bg-white/20 hover:text-blue-500 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-dark focus:bg-white/30 transition"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
  
          <SheetContent side="left" className="px-2">
            {/* LOGO INSIDE SIDEBAR */}
            <div className="flex items-center justify-between py-4 px-4 border-b">
              <img src="/sphlogo.png" alt="Logo" className="h-8" />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-500"
              />
            </div>
  
            {/* NAVIGATION */}
            <nav className="flex flex-col gap-y-2 pt-4">
              {routes.map((route) => (
                <div key={route.href}>
                  <Button
                    variant={route.href === pathname ? "secondary" : "ghost"}
                    onClick={() => {
                      if (route.subRoutes) {
                        setDropdownOpen(dropdownOpen === route.label ? null : route.label);
                      } else {
                        onClick(route.href);
                      }
                    }}
                    className="w-full justify-between"
                  >
                    {route.label}
                    {route.subRoutes && (
                      <ChevronDown
                        className={`ml-2 transition-transform ${
                          dropdownOpen === route.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Button>
                  {route.subRoutes && dropdownOpen === route.label && (
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
      </div>
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
            <div className="absolute bg-white text-gray-500 rounded-md shadow-lg py-2 w-auto min-w-[200px] z-10">
              {route.subRoutes.map((subRoute) => (
                <Button
                  key={subRoute.href}
                  variant="ghost"
                  onClick={() => onClick(subRoute.href)}
                  className="w-full justify-start text-left text-sm px-4 py-2 hover:bg-gray-200 whitespace-nowrap"
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

