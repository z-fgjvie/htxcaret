import Image from "next/image";

interface IconosSeccionProps {
  imagen: string;
  texto: string;
  clase: string;
}
export default function IconosSeccion({
  imagen,
  texto,
  clase = "",
}: IconosSeccionProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] lg:block items-center lg:items-start">
      <div className="bg-[#f9efdd] flex items-center justify-center w-14 h-14  md:w-16 md:h-16 rounded-full lg:mb-4 lg:mx-auto">
        <Image
          src={imagen}
          alt="iconos"
          width={37}
          height={37}
          className={`icono-dorado ${clase}`}
        />
      </div>
      <p className="leading-4.5 text-xs md:text-sm text-pretty font-normal pl-3 items-center align-center">
        {texto}
      </p>
    </div>
  );
}
