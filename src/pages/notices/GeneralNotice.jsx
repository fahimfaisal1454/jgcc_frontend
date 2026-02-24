import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const GeneralNotice = () => {
  const [search, setSearch] = useState("");

  // Temporary static data (Backend ready structure)
  const notices = [
    {
      id: 1,
      date: "16.02.2025",
      title: "Recommendation Letter",
      file: "#",
    },
    {
      id: 2,
      date: "13.02.2025",
      title: "Recommendation Letter",
      file: "#",
    },
    {
      id: 3,
      date: "27.01.2025",
      title: "2024-25 শিক্ষাবর্ষে অনার্স ভর্তি ৭০০ টাকা জমা দেওয়ার বিজ্ঞপ্তি",
      file: "#",
    },
    {
      id: 4,
      date: "21.01.2025",
      title: "2024-25 শিক্ষাবর্ষে অনার্স ভর্তি বিজ্ঞপ্তি",
      file: "#",
    },
    {
      id: 5,
      date: "20.01.2025",
      title: "একাদশ শ্রেণির ক্লাস রুটিন",
      file: "#",
    },
  ];

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="General Notice">
      <div className="bg-white shadow-sm">

        {/* Search Bar */}
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
              {filteredNotices.map((notice, index) => (
                <tr key={notice.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{index + 1}</td>
                  <td className="p-3 border">{notice.date}</td>
                  <td className="p-3 border">{notice.title}</td>
                  <td className="p-3 border text-center">
                    <a
                      href={notice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-semibold"
                    >
                      PDF
                    </a>
                  </td>
                </tr>
              ))}

              {filteredNotices.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-6 text-center text-gray-500">
                    No notices found.
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

export default GeneralNotice;