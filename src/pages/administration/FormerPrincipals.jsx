import AdminLayout from "../../components/AdminLayout";

const FormerPrincipals = () => {
  return (
    <AdminLayout title="Former Principals">
      <table className="w-full border text-sm text-center">
        <thead className="bg-[#f39c12] text-white">
          <tr>
            <th className="border p-2">SL</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">BCS Batch</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">From</th>
            <th className="border p-2">To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">01</td>
            <td className="border p-2">Prof. Example</td>
            <td className="border p-2">14th</td>
            <td className="border p-2">Physics</td>
            <td className="border p-2">2001</td>
            <td className="border p-2">2005</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default FormerPrincipals;