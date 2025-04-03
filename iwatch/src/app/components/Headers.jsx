"use client"

import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Headers() {

const activePath = usePathname();

  return (
   
    <header className="bg-[#B6CCDA] text-white grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)] pt-2 pb-2">
      <section className="col-2 flex justify-between items-center">
        <div>
          <img src="/images/Logo.png" alt="" />
        </div>
        <div className="flex gap-6 items-center">
          <Link className={`${activePath === "/imac" ? "bg-white text-[#B6CCDA] rounded-full px-4 py-1" : ""}`} href="/imac">iMac</Link>
          <Link className={`${activePath === "/iphone" ? "bg-white text-[#B6CCDA] rounded-full px-4 py-1" : ""}`} href="/iphone">iPhone</Link>
          <Link className={`${activePath === "/ipad" ? "bg-white text-[#B6CCDA] rounded-full px-4 py-1" : ""}`} href="/ipad">iPad</Link>
          <Link className={`${activePath === "/iwatch" ? "bg-white text-[#B6CCDA] rounded-full px-4 py-1" : ""}`} href="/iwatch">iWatch</Link>
          <Link href="/support">iSupport</Link>
        </div>
        <div className="flex items-center gap-3">
        <FiSearch className="searh-icon"/>
        <span>|</span>
        <LuShoppingBag />
        </div>
      </section>
    </header>
  );
}

