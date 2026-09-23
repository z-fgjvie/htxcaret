import Footer from "@/components/Footer";
import Formulario from "@/components/Formulario";
import InicioHeader from "@/components/InicioHeader";
import Parques from "@/components/Parques";

export default function Home() {
  return (
    <div>
      <InicioHeader />
      <Parques />
      <Formulario />
      <Footer />
    </div>
  );
}
