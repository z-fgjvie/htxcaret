import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e6ddd1]">
      <div className="px-3 py-5 text-sm flex flex-col gap-2">
        <p>
          Horario de atención al cliente: Lunes a domingo de 9:00 a.m. a 10:00
          p.m. EST
        </p>
        <div className="flex gap-4">
          <a href="#" target="_blank">
            Aviso de privacidad
          </a>
          <a href="#" target="_blank">
            Términos y condiciones
          </a>
        </div>
        <p>© Copyright Experiencias Xcaret Web S.A.P.I. de C.V.</p>
      </div>
    </footer>
  );
}
