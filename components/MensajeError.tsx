export default function MensajeError() {
  return (
    <div className="fixed google-regular inset-0 z-50 flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-[450px] text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fce8e6]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 7V13"
                stroke="#d93025"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="17" r="1" fill="#d93025" />
            </svg>
          </div>
        </div>

        <h1 className="text-[24px] google-regular text-[#202124]">
          No se pudo iniciar sesión
        </h1>

        <p className="mt-3 text-[15px] leading-6 text-[#5f6368]">
          Se produjo un error al intentar iniciar sesión.
          <br />
          Vuelve a intentarlo más tarde.
        </p>

        <button
          className="mt-7 rounded-md px-5 py-2.5 text-[14px] google-regular
          text-[#0b57d0] hover:bg-[#f1f3f4]"
        >
          Autenticación fallida
        </button>
      </div>
    </div>
  );
}
