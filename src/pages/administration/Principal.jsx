import AdminLayout from "../../components/AdminLayout";
import principalImg from "../../assets/principal.jpg";

const Principal = () => {
  return (
    <AdminLayout title="Principal">
      <div className="text-center">
        <img
          src={principalImg}
          alt="Principal"
          className="w-40 h-48 object-cover mx-auto rounded-full border-4 border-orange-400"
        />

        <h3 className="mt-4 text-orange-600 font-semibold">
          অধ্যক্ষ মোঃ গোলাম মোস্তফা হোসেন মোল্লা
        </h3>
      </div>
    </AdminLayout>
  );
};

export default Principal;