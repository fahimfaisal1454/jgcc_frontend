const MainSection = () => {
  return (
    <div className="bg-[#efefef] py-6">
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">

          {/* ================= LEFT SIDEBAR ================= */}
          <div className="col-span-3 space-y-6">

            {/* National Anthem Video */}
            <div className="bg-white shadow-sm">
              <video controls className="w-full h-48 object-cover">
                <source src="/national-anthem.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Our Services */}
            <div className="bg-white shadow-sm">
              <div className="bg-[#f39c12] text-white font-semibold px-4 py-2">
                Our Services
              </div>
              <ul className="p-4 space-y-2 text-sm">
                {[
                  "Internal Exam Result",
                  "XI Admission",
                  "XI Admission Form",
                  "Online Payment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-orange-600 cursor-pointer">
                    <span className="text-green-600 text-sm">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="bg-white shadow-sm">
              <div className="bg-[#f39c12] text-white font-semibold text-center py-2">
                Important Links
              </div>
              <ul className="px-4 py-3 text-sm">
                {[
                  "Education Ministry",
                  "Directorate of Secondary and Higher Education",
                  "National Curriculum and Textbook Board",
                  "Jashore Board",
                  "Education Board Results",
                  "National University",
                  "National University Results",
                  "Jonmo Nibondhon Check",
                  "Online News Papers",
                  "Bangla Library",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 py-2 border-b border-gray-300 hover:text-orange-600 cursor-pointer"
                  >
                    <span className="text-[#f39c12]">✔</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="bg-[#f39c12] text-white font-semibold text-center py-2 mt-4">
                Find Us in Social Media
              </div>
              <ul className="px-4 py-3 text-sm">
                {["Facebook Id", "Facebook Page", "Facebook Group"].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 py-2 border-b border-gray-300 hover:text-orange-600 cursor-pointer"
                  >
                    <span className="text-[#f39c12]">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= MIDDLE CONTENT ================= */}
          <div className="col-span-6 space-y-6">

            {/* College Administration */}
            <div className="bg-white shadow-sm border p-5">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                কলেজ প্রশাসন
              </h2>

              <div className="flex gap-5">
                <img
                  src="/admin.jpg"
                  className="w-64 h-40 object-cover border"
                  alt=""
                />

                <ul className="space-y-3 text-sm">
                  {[
                    "অধ্যক্ষ",
                    "উপাধ্যক্ষ",
                    "প্রাক্তন অধ্যক্ষবৃন্দ",
                    "শিক্ষক পরিষদ",
                    "একাডেমিক কাউন্সিল",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-orange-600 cursor-pointer">
                      <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#f39c12]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white shadow-sm border p-5">
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">
                বিভাগসমূহ
              </h2>

              <div className="flex gap-5">
                <img
                  src="/classroom.jpg"
                  className="w-64 h-40 object-cover border"
                  alt=""
                />

                <ul className="space-y-3 text-sm">
                  {[
                    "বিজ্ঞান",
                    "ব্যবসায় শিক্ষা",
                    "কলা",
                    "সামাজিক বিজ্ঞান",
                    "আইসিটি",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-orange-600 cursor-pointer">
                      <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#f39c12]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Notice Section */}
            <div className="bg-white border shadow-sm p-5">
              <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h2 className="text-lg font-semibold">
                  সাম্প্রতিক নোটিশ
                </h2>
                <button className="bg-[#f39c12] text-white text-xs px-4 py-1 rounded-full hover:bg-orange-600">
                  সকল
                </button>
              </div>

              <ul className="text-sm">
                {[
                  "জুলাই শহীদ স্মৃতি শিক্ষাবৃত্তি সংক্রান্ত বিজ্ঞপ্তি",
                  "২০২৫-২০২৬ শিক্ষাবর্ষ ভর্তি বিজ্ঞপ্তি",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 py-2 border-b last:border-none hover:text-orange-600 cursor-pointer"
                  >
                    <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#f39c12]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Section */}
            <div className="bg-white border shadow-sm p-5">
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">
                একাডেমিক
              </h2>

              <div className="flex gap-5 items-center">
                <img
                  src="/graduation.png"
                  className="w-52 h-40 object-contain"
                  alt=""
                />

                <ul className="space-y-3 text-sm">
                  {[
                    "এইচ এস সি",
                    "ডিগ্রী (পাস)",
                    "সম্মান",
                    "মাস্টার্স",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 hover:text-orange-600 cursor-pointer">
                      <span className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#f39c12]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <div className="col-span-3 space-y-6">

            {/* Principal */}
            <div className="bg-white shadow-sm p-6 text-center relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#f39c12]" />
              <img
                src="/principal.jpg"
                className="w-40 h-40 mx-auto rounded-full border-4 border-blue-300 object-cover"
                alt=""
              />
              <h3 className="mt-4 font-semibold">Principal</h3>
              <p className="text-gray-600 text-sm">
                প্রফেসর মোঃ দেলোয়ার হোসেন মোল্লা
              </p>
            </div>

            {/* Vice Principal */}
            <div className="bg-white shadow-sm p-6 text-center relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#f39c12]" />
              <img
                src="/vice.jpg"
                className="w-40 h-40 mx-auto rounded-full border-4 border-blue-300 object-cover"
                alt=""
              />
              <h3 className="mt-4 font-semibold">Vice Principal</h3>
              <p className="text-gray-600 text-sm">
                Md. Abdul Hamid
              </p>
            </div>

            {/* Map */}
            <div className="bg-white shadow-sm">
              <div className="bg-[#f39c12] text-white text-center py-2 font-semibold">
                Get Direction
              </div>
              <div className="h-56 bg-gray-200 flex items-center justify-center">
                Google Map Here
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MainSection;