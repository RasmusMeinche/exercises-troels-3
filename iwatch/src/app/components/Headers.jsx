import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";

export default function Headers() {
  return (
    <header>
      <section className="header-info">
        <div>
          <img src="/images/Logo.png" alt="" />
        </div>
        <div className="info-flexbox">
          <a>Mac</a>
          <a>Iphone</a>
          <a>Ipad</a>
          <a>iWatch</a>
          <a>Support</a>
        </div>
        <div className="flex-box">
        <FiSearch className="searh-icon"/>
        <span>|</span>
        <LuShoppingBag />
        </div>
      </section>
    </header>
  );
}

