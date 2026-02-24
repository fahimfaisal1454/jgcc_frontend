import AdminLayout from "../../components/AdminLayout";

const Masters = () => {
  return (
    <AdminLayout title="Master’s">
      <div className="text-sm leading-7 text-gray-800 space-y-4">

        <p>
          The college offers Master’s programs under National University.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Bangla</li>
          <li>English</li>
          <li>Political Science</li>
          <li>Social Work</li>
        </ul>

      </div>
    </AdminLayout>
  );
};

export default Masters;