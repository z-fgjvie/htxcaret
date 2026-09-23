"use client";
import Link from "next/link";
import { useState } from "react";
import FormularioBot from "./FormularioBot";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Formulario() {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  return (
    <section className="py-6 px-4 lg:px-16 lg:py-13">
      <div className="max-w-lg mx-auto">
        <div className="text-right mb-4">
          <a
            href="https://micuenta.hotelxcaret.com/es/registro"
            target="_blank"
            className="font-semibold hover:text-[#dea035] border-b-2 border-[#dea035] lg:text-base text-sm "
          >
            CREAR CUENTA
          </a>
        </div>
        <div className="bg-white px-5 pt-6 pb-12">
          <h2 className="font-timesroman text-2xl text-center text-[#484848] mt-4 mb-7">
            INICIAR SESIÓN
          </h2>

          <FormularioBot
            mostrarPassword={mostrarPassword}
            setMostrarPassword={setMostrarPassword}
          />

          <div className="flex items-center gap-3 justify-center my-10">
            <div className="w-[32%] bg-gray-300 h-px " />
            <p className="text-gray-300 text-xs font-timesroman">
              O ingresa con:
            </p>
            <div className="w-[32%] bg-gray-300 h-px" />
          </div>

          <div className="max-w-88 mx-auto">
            <div className="bg-blue-700 text-white flex justify-center items-center text-center gap-1 p-4 rounded-md mb-4">
              <FaFacebook size={19} className="mb-0.5" />
              <p className="text-xs">FACEBOOK</p>
            </div>
            <div className="bg-red-600 text-white flex justify-center items-center text-center gap-4 p-4 rounded-md mb-4">
              <FaGoogle size={19} className="mb-0.5" />
              <p className="text-xs">GOOGLE</p>
            </div>
            <div className="bg-black text-white flex justify-center items-center text-center gap-3 p-4 rounded-md">
              <FaApple size={19} className="mb-0.5" />
              <p className="text-xs">APPLE ID</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
