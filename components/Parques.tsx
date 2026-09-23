import IconosSeccion from "./IconosSeccion";

export default function Parques() {
  return (
    <section className="py-6 px-4 lg:px-16 lg:py-13">
      <div className="max-w-340 mx-auto bg-white px-3 py-5 lg:py-9 lg:px-10 rounded-lg">
        <h1 className="font-timesroman text-center text-lg md:text-2xl text-[#484848] mb-5 uppercase">
          Hoteles Xcaret es All-Fun Inclusive® + Todos Los Parques
        </h1>
        <p className="text-center text-[1.125rem] mb-4 md:mb-7 font-sistema ">
          ¡Mucho más que un todo incluido!
        </p>

        <div className="grid lg:grid-cols-5 gap-4 lg:gap-10">
          <IconosSeccion
            imagen="/ticket.png"
            texto="TODOS los parques de Grupo Xcaret las veces que quieras"
            clase=""
          />
          <IconosSeccion
            imagen="/gastronomia.png"
            texto="Experiencias gastronómicas, alimentos y bebidas"
            clase="w-7"
          />
          <IconosSeccion
            imagen="/transporte.png"
            texto="Transportación ida y vuelta desde los aeropuertos de Cancún y Tulum"
            clase=""
          />
          <IconosSeccion
            imagen="/isla.png"
            texto="Ferry a Isla Mujeres y Cozumel"
            clase=""
          />
          <IconosSeccion
            imagen="/traslado.png"
            texto="Traslados a los parques"
            clase=""
          />
        </div>
      </div>
    </section>
  );
}
