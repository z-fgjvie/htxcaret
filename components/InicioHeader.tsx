import Image from "next/image";

export default function InicioHeader() {
  return (
    <header className="bg-[#e6ddd1] pt-6 pb-4 ">
      <div className="max-w-304 mx-auto">
        <Image
          src="/logo-xca.png"
          alt="logo xcaret"
          width={200}
          height={200}
          className="w-[18.8rem]"
        />
      </div>
    </header>
  );
}
