"use client";
import { inter } from "@/app/lib/fonts";

import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <div className={`${inter.className} nav-container `}>
        <Link
          className={`navbar-link 
             ${pathname.includes("/works") && "active"}  
          `}
          href="/works"
        >
          Works
        </Link>
        <Link
          className={`navbar-link 
            ${pathname.includes("/blog") && "active"}  
         `}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={`navbar-link 
            ${pathname.includes("/contact") && "active"}  
         `}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
