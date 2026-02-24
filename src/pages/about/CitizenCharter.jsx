import AdminLayout from "../../components/AdminLayout";

const CitizenCharter = () => {
  return (
    <AdminLayout title="Citizen Charter">
      <div className="text-sm leading-7 text-gray-800 space-y-4">
        <p>
          The Citizen Charter outlines the services, commitments, and
          responsibilities of Jashore Government City College.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>Provide quality education</li>
          <li>Ensure transparent administration</li>
          <li>Support student development</li>
          <li>Maintain academic integrity</li>
        </ul>
      </div>
    </AdminLayout>
  );
};

export default CitizenCharter;