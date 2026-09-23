import { numerosContacto } from "@/data/numeros";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function InicioHeader() {
  return (
    <header className="bg-[#e6ddd1] pt-6 pb-4">
      <div className="max-w-304 mx-auto flex justify-between items-center flex-wrap gap-6 md:gap-0 relative">
        <Link href="/es/login">
          <Image
            src="/logo-xca.png"
            alt="logo xcaret"
            width={200}
            height={200}
            className="w-[18.8rem]"
          />
        </Link>

        <div className="flex items-center gap-5 text-[#88662b] px-2 lg:px-0 justify-end w-full md:w-auto ">
          <div className="text-xs group">
            <div className="flex items-center gap-2 py-1 cursor-pointer">
              <FaPhoneAlt />
              <Link href="#">CONTACTO</Link>
              <FaCaretDown />
            </div>

            <div className="bg-[#fffaf5] border border-[#b4adad] absolute lg:top-8.5 top-24 right-16 w-lg px-2 pt-6 rounded-md z-10 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-300 shadow-md ">
              <h2 className="text-center text-[#88662b] text-lg font-semibold mb-5">
                Contacto
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {numerosContacto.map((item) => (
                  <div
                    key={item.id}
                    className="text-xs flex flex-col items-center"
                  >
                    <p className="text-[#88662b]  uppercase text-center font-semibold">
                      {item.pais}:{" "}
                    </p>
                    <p className="text-black">{item.telefono}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end mt-6 text-xs gap-3 mr-3 pb-1 text-[#88662b]">
                <Link href="#" className="flex items-center gap-1 uppercase">
                  <FaWhatsapp />
                  <p>Whatsapp</p>
                </Link>
                <Link href="#" className="flex items-center gap-1 uppercase">
                  <MdEmail />
                  <p>Contáctanos</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-xs group">
            <div className="flex items-center gap-1 py-1 cursor-pointer">
              <FaGlobe />
              <Link href="#">ES</Link>
              <FaCaretDown />
            </div>

            <div className="bg-[#fffaf5] px-3 py-2 text-sm absolute lg:top-8.5 top-24 shadow-md lg:right-1 right-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 hover:bg-[#88662b] hover:text-white">
              <p>EN</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
