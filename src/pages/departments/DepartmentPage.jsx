import { useParams } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

const DepartmentPage = () => {
  const { group, department } = useParams();

  // Structured by group → department (Backend ready structure)
  const facultyData = {
    science: {
      physics: {
        title: "Department of Physics",
        email: "jgccphysics@gmail.com",
        head: {
          name: "Dr. A. Karim",
          position: "Head of Department",
          image: "https://via.placeholder.com/150",
        },
        teachers: [
          {
            name: "Mr. Rahim",
            position: "Assistant Professor",
            image: "https://via.placeholder.com/150",
          },
          {
            name: "Ms. Fatema",
            position: "Lecturer",
            image: "https://via.placeholder.com/150",
          },
          {
            name: "Mr. Hasan",
            position: "Lecturer",
            image: "https://via.placeholder.com/150",
          },
        ],
      },
    },
  };

  const dept = facultyData[group]?.[department];

  if (!dept) {
    return (
      <AdminLayout title="Department Not Found">
        <div className="p-6 text-center text-red-600 font-semibold">
          Department data not available.
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={dept.title}>
      <div className="space-y-12">

        {/* Head of Department */}
        <div>
          <div className="bg-orange-500 text-white py-2 text-center font-semibold">
            Head of the Department
          </div>

          <div className="flex justify-center mt-8">
            <FacultyCard person={dept.head} />
          </div>
        </div>

        {/* Teachers Section */}
        <div>
          <div className="bg-orange-500 text-white py-2 text-center font-semibold">
            Teachers
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {dept.teachers.map((teacher, index) => (
              <FacultyCard key={index} person={teacher} />
            ))}
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

/* ---------------- Reusable Faculty Card ---------------- */

const FacultyCard = ({ person }) => {
  return (
    <div className="text-center border border-yellow-500 bg-white p-6 w-60 mx-auto shadow-sm hover:shadow-md transition">
      <img
        src={person.image}
        alt={person.name}
        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-300"
      />
      <h4 className="mt-4 font-semibold text-gray-800">
        {person.name}
      </h4>
      <p className="text-sm text-gray-600">
        {person.position}
      </p>
    </div>
  );
};

export default DepartmentPage;