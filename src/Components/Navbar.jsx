import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  // Static Data
  let nav_items = [
    {
      id: 0,
      item: "Home",
      href: "/",
    },
    {
      id: 1,
      item: "About",
      href: "/about",
    },
    {
      id: 2,
      item: "Portfolio",
      href: "/postfolio",
    },
    {
      id: 3,
      item: "Contact",
      href: "/contact",
    },
  ];

  const [isSticky, setSticky] = useState(false);
  const [clicked, setClicked] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (item) => {
    setClicked(item);
  };

  const handleMenu = () => {
    setActiveMenu((state) => !state);
  };

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="navbar__container container">
        <div className="logo">
          <a href="/">
            <img src="/Images/Logo.png" alt="" />
          </a>
        </div>
        <div className="menu_icon" onClick={() => handleMenu()}>
          {activeMenu ? (
            <span>
              <IoMdClose size={24} />
            </span>
          ) : (
            <span>
              <IoIosMenu size={24} />
            </span>
          )}
        </div>

        {/* Menus Dekstop */}
        <div className="menus">
          <ul className="list">
            {nav_items.map((item, i) => (
              <li className="item " key={i}>
                <a
                  href=""
                  className={clicked === i ? "active" : ""}
                  onClick={() => handleClick(item.id)}
                >
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menus Mobile */}
        <div className={`menus-mobile ${activeMenu ? "show" : ""}`}>
          <ul className="list">
            {nav_items.map((item, i) => (
              <li className="item " key={i}>
                <a
                  href=""
                  className={clicked === i ? "active-mobile" : ""}
                  onClick={() => handleClick(item.id)}
                >
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
