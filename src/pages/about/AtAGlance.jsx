import AdminLayout from "../../components/AdminLayout";

const AtAGlance = () => {
  return (
    <AdminLayout title="The College at a Glance">
      <div className="text-sm leading-7 text-gray-800 space-y-4">

        <p>
          Jashore Government City College, situated in the heart of Jashore town,
          is one of the oldest and leading colleges in the South Bengal region.
        </p>

        <p>
          This college has achieved a prestigious position in the history of
          education of the nation. It has reached a new height of excellence
          in promoting education and creating human resources.
        </p>

        <div>
          <h3 className="font-semibold text-blue-600 mb-2">
            HSC (Higher Secondary Certificate)
          </h3>
          <ul className="list-decimal ml-6 space-y-1">
            <li>Science</li>
            <li>Humanities</li>
            <li>Business Studies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-blue-600 mb-2">
            Degree (Pass) Courses
          </h3>
          <ul className="list-decimal ml-6 space-y-1">
            <li>B.A</li>
            <li>B.S.S</li>
            <li>B.B.S</li>
            <li>B.Sc</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-blue-600 mb-2">
            Honours Courses
          </h3>
          <ul className="list-decimal ml-6 space-y-1">
            <li>Bangla</li>
            <li>English</li>
            <li>Political Science</li>
            <li>Economics</li>
            <li>Accounting</li>
          </ul>
        </div>

      </div>
    </AdminLayout>
  );
};

export default AtAGlance;