// pages/administration/AcademicCouncil.jsx
import AdminLayout from "../../components/AdminLayout";

const AcademicCouncil = () => {
  return (
    <AdminLayout title="Academic Council">
      <table className="w-full border text-sm text-center">
        <thead className="bg-[#f39c12] text-white">
          <tr>
            <th className="border p-2">ক্রম নং</th>
            <th className="border p-2">শিক্ষকের নাম</th>
            <th className="border p-2">পদবি</th>
            <th className="border p-2">পদ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">০১</td>
            <td className="border p-2">প্রফেসর অমুক কুমার দত্ত</td>
            <td className="border p-2">অধ্যক্ষ</td>
            <td className="border p-2">সভাপতি</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border p-2">০২</td>
            <td className="border p-2">প্রফেসর তমুক রহমান</td>
            <td className="border p-2">উপাধ্যক্ষ</td>
            <td className="border p-2">সহ সভাপতি</td>
          </tr>
          <tr>
            <td className="border p-2">০৩</td>
            <td className="border p-2">জনাব অমুক ইসলাম</td>
            <td className="border p-2">সহকারী অধ্যাপক</td>
            <td className="border p-2">সদস্য</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default AcademicCouncil;