

import AdminLayout from "../../components/AdminLayout";
import vicePrincipalImg from "../../assets/vice-principal.jpg";

const VicePrincipal = () => {
  return (
    <AdminLayout title="Vice Principal">
      <div className="text-center">
        <img
          src={vicePrincipalImg}
          alt="Vice Principal"
          className="w-40 h-48 object-cover mx-auto rounded-full border-4 border-orange-400"
        />

        <h3 className="mt-4 text-orange-600 font-semibold">
          Md. Abdul Hamid
        </h3>
      </div>
    </AdminLayout>
  );
};

export default VicePrincipal;