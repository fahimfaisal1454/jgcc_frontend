import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const OfficeOrders = () => {
  const [search, setSearch] = useState("");

  // Temporary static data (Backend-ready structure)
  const orders = [
    {
      id: 1,
      date: "10.12.2025",
      title:
        "জনাব মোঃ আব্দুল্লাহ হোসেন সহকারী অধ্যাপক - এর আন্তর্জাতিক পাসপোর্ট করার অনুমতি (NOC-1367)",
      file: "#",
    },
    {
      id: 2,
      date: "19.03.2025",
      title:
        "ড. মোঃ সেলিম মোল্লা, সহকারী অধ্যাপক, উদ্ভিদবিদ্যা বিভাগের আন্তর্জাতিক পাসপোর্ট করার অনুমতি",
      file: "#",
    },
    {
      id: 3,
      date: "17.03.2025",
      title:
        "জনাব মুহাম্মদ হুমায়ুন, সহকারী অধ্যাপক, রাষ্ট্রবিজ্ঞান বিভাগের আন্তর্জাতিক পাসপোর্ট করার অনুমতি",
      file: "#",
    },
    {
      id: 4,
      date: "03.11.2024",
      title:
        "প্রফেসর মোঃ আব্দুল আলিম, অধ্যাপক, হিসাববিজ্ঞান বিভাগের আন্তর্জাতিক পাসপোর্ট করার অনুমতি",
      file: "#",
    },
  ];

  const filteredOrders = orders.filter((order) =>
    order.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Office Orders">
      <div className="bg-white shadow-sm">

        {/* Search */}
        <div className="flex justify-end p-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-3 py-2 text-sm w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="p-3 border">SL</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border text-center">Download</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{order.date}</td>
                  <td className="p-3 border">{order.title}</td>
                  <td className="p-3 border text-center">
                    <a
                      href={order.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-semibold"
                    >
                      PDF
                    </a>
                  </td>
                </tr>
              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    No office orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout>
  );
};

export default OfficeOrders;