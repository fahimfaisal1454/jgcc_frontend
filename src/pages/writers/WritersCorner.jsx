import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

const WritersCorner = () => {
  const [search, setSearch] = useState("");

  // Temporary blog data (Backend ready)
  const blogs = [
    {
      id: 1,
      title: "The Importance of Education in Modern Society",
      date: "12/02/2025",
      author: "Prof. Rahman",
    },
    {
      id: 2,
      title: "Digital Learning in Bangladesh",
      date: "05/01/2025",
      author: "Dr. Karim",
    },
    {
      id: 3,
      title: "Youth and Leadership Development",
      date: "20/12/2024",
      author: "Ms. Fatema",
    },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Writer’s Corner">
      <div className="bg-white shadow-sm p-6">

        {/* Search */}
        <div className="flex justify-end mb-6">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 px-3 py-2 text-sm w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-gray-600 text-white px-4">
              🔍
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="bg-orange-500 text-white py-2 text-center font-semibold mb-6">
          Recent Blogs/Articles
        </div>

        {/* Blog List */}
        <div className="space-y-4">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border border-gray-200 p-4 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-800 text-lg">
                {blog.title}
              </h3>

              <div className="text-sm text-gray-500 mt-1">
                {blog.date} | {blog.author}
              </div>
            </div>
          ))}

          {filteredBlogs.length === 0 && (
            <div className="text-center text-gray-500 py-6">
              No articles found.
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};

export default WritersCorner;