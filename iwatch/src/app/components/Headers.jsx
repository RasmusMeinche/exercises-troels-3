import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";

export default function Headers() {
  return (
   
    <header className="bg-[#B6CCDA] text-white grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)] pt-2 pb-2">
      <section className="col-2 flex justify-between items-center">
        <div>
          <img src="/images/Logo.png" alt="" />
        </div>
        <div className="flex gap-6">
          <a>Mac</a>
          <a>Iphone</a>
          <a>Ipad</a>
          <a>iWatch</a>
          <a>Support</a>
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

