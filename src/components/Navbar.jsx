import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState(null);

  const menu = [
    { name: "Home" },
    {
      name: "Administration",
      dropdown: [
        "Principal",
        "Vice Principal",
        "Former Principals",
        "Teacher’s Council",
        "Academic Council",
      ],
    },
    {
      name: "About Us",
      dropdown: [
        "History of the College",
        "The College at a Glance",
        "Citizen Charter",
      ],
    },
    {
      name: "Academic",
      dropdown: ["HSC", "Degree (Pass)", "Honours", "Master’s"],
    },
    {
      name: "Departments",
      dropdown: [
        {
          name: "Science",
          sub: [
            "Department of Physics",
            "Department of Chemistry",
            "Department of Mathematics",
            "Department of Botany",
            "Department of Zoology",
          ],
        },
        {
          name: "Business Studies",
          sub: ["Department of Accounting", "Department of Management"],
        },
        {
          name: "Arts",
          sub: ["Department of Bangla", "Department of English"],
        },
        {
          name: "Social Science",
          sub: ["Department of Economics", "Department of Sociology"],
        },
        { name: "ICT" },
      ],
    },
    { name: "XI Admission" },
    {
      name: "Notices",
      dropdown: ["General Notice", "Office Orders"],
    },
    { name: "Writer’s Corner" },
    { name: "Contact Us" },
    {
      name: "Online Fees",
      dropdown: ["HSC Online Fees", "University Fees"],
    },
  ];

  return (
    <div className="bg-white border-t border-gray-200 relative">
      <div className="max-w-[1000px] mx-auto">
        <ul className="flex justify-center gap-8 py-3 text-[11px] font-bold">

          {menu.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => {
                setActive(null);
                setSubActive(null);
              }}
            >
              <div className="cursor-pointer hover:text-yellow-600 transition">
                {item.name}
                {item.dropdown && <span className="ml-1 text-xs">▼</span>}
              </div>

              {/* LEVEL 1 DROPDOWN */}
              {item.dropdown && (
                <div
                  className={`absolute left-0 top-full mt-0 w-56 bg-[#d8c7a3] shadow-xl
                  transition-all duration-200
                  ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.dropdown.map((subItem, i) => {
                    // Simple string dropdown
                    if (typeof subItem === "string") {
                      return (
                        <div
                          key={i}
                          className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] transition"
                        >
                          {subItem}
                        </div>
                      );
                    }

                    // Object with submenu
                    return (
                      <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setSubActive(i)}
                      >
                        <div className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] flex justify-between items-center transition">
                          {subItem.name}
                          {subItem.sub && <span>›</span>}
                        </div>

                        {/* LEVEL 2 DROPDOWN */}
                        {subItem.sub && (
                          <div
                            className={`absolute top-0 left-full w-60 bg-[#d8c7a3] shadow-xl
                            transition-all duration-200
                            ${
                              subActive === i
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-2 pointer-events-none"
                            }`}
                          >
                            {subItem.sub.map((child, j) => (
                              <div
                                key={j}
                                className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] transition"
                              >
                                {child}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          ))}

        </ul>
      </div>

      {/* Golden Bottom Line */}
      <div className="h-[3px] bg-yellow-600"></div>
    </div>
  );
};

export default Navbar;