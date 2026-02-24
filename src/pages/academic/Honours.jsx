import AdminLayout from "../../components/AdminLayout";

const Honours = () => {
  return (
    <AdminLayout title="Honours">
      <div className="text-sm leading-7 text-gray-800 space-y-4">

        <p>
          Honours courses are available in different disciplines.
        </p>

        <ul className="list-disc ml-6 space-y-1">
          <li>Bangla</li>
          <li>English</li>
          <li>Political Science</li>
          <li>Economics</li>
          <li>Accounting</li>
          <li>Management</li>
        </ul>

      </div>
    </AdminLayout>
  );
};

export default Honours;