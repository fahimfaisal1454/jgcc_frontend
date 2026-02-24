import AdminLayout from "../../components/AdminLayout";

const Degree = () => {
  return (
    <AdminLayout title="Degree (Pass)">
      <div className="text-sm leading-7 text-gray-800 space-y-4">

        <p>
          Degree (Pass) courses are offered under National University.
        </p>

        <ul className="list-decimal ml-6 space-y-1">
          <li>B.A (Bachelor of Arts)</li>
          <li>B.S.S (Bachelor of Social Science)</li>
          <li>B.B.S (Bachelor of Business Studies)</li>
          <li>B.Sc (Bachelor of Science)</li>
        </ul>

      </div>
    </AdminLayout>
  );
};

export default Degree;