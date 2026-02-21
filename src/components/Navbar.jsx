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
    <div className="relative z-50 bg-white border-t border-gray-200">
      <div className="max-w-[1000px] mx-auto relative">
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
                {item.dropdown && <span className="ml-1 text-[10px]">▼</span>}
              </div>

              {/* LEVEL 1 DROPDOWN */}
              {item.dropdown && active === index && (
                <div className="absolute left-0 top-full w-56 bg-[#d8c7a3] shadow-2xl z-[9999]">

                  {item.dropdown.map((subItem, i) => {

                    // SIMPLE DROPDOWN
                    if (typeof subItem === "string") {
                      return (
                        <div
                          key={i}
                          className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] cursor-pointer"
                        >
                          {subItem}
                        </div>
                      );
                    }

                    // DROPDOWN WITH SUBMENU
                    return (
                      <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setSubActive(i)}
                        onMouseLeave={() => setSubActive(null)}
                      >
                        <div className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] flex justify-between items-center cursor-pointer">
                          {subItem.name}
                          {subItem.sub && <span>›</span>}
                        </div>

                        {/* LEVEL 2 DROPDOWN */}
                        {subItem.sub && subActive === i && (
                          <div className="absolute top-0 left-full w-60 bg-[#d8c7a3] shadow-2xl z-[9999]">
                            {subItem.sub.map((child, j) => (
                              <div
                                key={j}
                                className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] cursor-pointer"
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