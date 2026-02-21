import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [subActive, setSubActive] = useState(null);

  const menu = [
    { name: "Home", path: "/" },

    {
      name: "Administration",
      dropdown: [
        { name: "Principal", path: "/administration/principal" },
        { name: "Vice Principal", path: "/administration/vice-principal" },
        { name: "Former Principals", path: "/administration/former-principals" },
        { name: "Teacher’s Council", path: "/administration/teachers-council" },
        { name: "Academic Council", path: "/administration/academic-council" },
      ],
    },

    {
      name: "About Us",
      dropdown: [
        { name: "History of the College" },
        { name: "The College at a Glance" },
        { name: "Citizen Charter" },
      ],
    },

    {
      name: "Academic",
      dropdown: [
        { name: "HSC" },
        { name: "Degree (Pass)" },
        { name: "Honours" },
        { name: "Master’s" },
      ],
    },

    {
      name: "Departments",
      dropdown: [
        {
          name: "Science",
          sub: [
            { name: "Department of Physics" },
            { name: "Department of Chemistry" },
            { name: "Department of Mathematics" },
            { name: "Department of Botany" },
            { name: "Department of Zoology" },
          ],
        },
        {
          name: "Business Studies",
          sub: [
            { name: "Department of Accounting" },
            { name: "Department of Management" },
          ],
        },
        {
          name: "Arts",
          sub: [
            { name: "Department of Bangla" },
            { name: "Department of English" },
          ],
        },
        {
          name: "Social Science",
          sub: [
            { name: "Department of Economics" },
            { name: "Department of Sociology" },
          ],
        },
        { name: "ICT" },
      ],
    },

    { name: "XI Admission" },

    {
      name: "Notices",
      dropdown: [
        { name: "General Notice" },
        { name: "Office Orders" },
      ],
    },

    { name: "Writer’s Corner" },
    { name: "Contact Us" },

    {
      name: "Online Fees",
      dropdown: [
        { name: "HSC Online Fees" },
        { name: "University Fees" },
      ],
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
              {/* TOP LEVEL */}
              {item.path ? (
                <Link
                  to={item.path}
                  className="hover:text-yellow-600 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="cursor-pointer hover:text-yellow-600 transition">
                  {item.name}
                  {item.dropdown && (
                    <span className="ml-1 text-[10px]">▼</span>
                  )}
                </div>
              )}

              {/* LEVEL 1 DROPDOWN */}
              {item.dropdown && active === index && (
                <div className="absolute left-0 top-full w-56 bg-[#d8c7a3] shadow-2xl z-[9999]">
                  {item.dropdown.map((subItem, i) => {
                    // SIMPLE DROPDOWN
                    if (!subItem.sub) {
                      return subItem.path ? (
                        <Link
                          key={i}
                          to={subItem.path}
                          className="block px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f]"
                        >
                          {subItem.name}
                        </Link>
                      ) : (
                        <div
                          key={i}
                          className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] cursor-pointer"
                        >
                          {subItem.name}
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
                          <span>›</span>
                        </div>

                        {/* LEVEL 2 DROPDOWN */}
                        {subActive === i && (
                          <div className="absolute top-0 left-full w-60 bg-[#d8c7a3] shadow-2xl z-[9999]">
                            {subItem.sub.map((child, j) => (
                              <div
                                key={j}
                                className="px-4 py-3 border-b border-[#cbb98f] hover:bg-[#cbb98f] cursor-pointer"
                              >
                                {child.name}
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