import AdminLayout from "../../components/AdminLayout";

const HSC = () => {
  return (
    <AdminLayout title="HSC">
      <div className="text-sm leading-7 text-gray-800 space-y-4">

        <p>
          The Higher Secondary Certificate (HSC) program is one of the major
          academic programs of Jashore Govt. City College.
        </p>

        <h3 className="font-semibold text-blue-600">Groups:</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Science</li>
          <li>Humanities</li>
          <li>Business Studies</li>
        </ul>

        <p>
          The college ensures quality teaching and proper academic environment
          for HSC students.
        </p>

      </div>
    </AdminLayout>
  );
};

export default HSC;