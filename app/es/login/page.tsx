import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import InicioHeader from "@/components/InicioHeader";
import Parques from "@/components/Parques";

export default function PageLogin() {
  return (
    <div className="bg-[#fefaf6]">
      <InicioHeader />
      <Parques />
      <Formulario />
      <Footer />
    </div>
  );
}
