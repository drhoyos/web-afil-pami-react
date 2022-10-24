import Link from "next/link";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="pl-20 pr-20 pt-5 pb-5 fixed left-0 top-0 w-full z-10 border-b-[6.5px] border-[#00a3e0] bg-white">
      <div className="fixed w-full left-0 top-0 z-1 flex-col lg:invisible">
        <div className="pb-1 pt-2  bg-[#ed145a] uppercase font-bold text-white text-xl grid v-screen place-items-center">
          <span href="#" class="flex p-3">
            <BsFillTelephoneFill />
            <span class="ml-3">Emergencias</span>
          </span>
        </div>
        <div className="pb-1 pt-2  bg-[#0032a0] uppercase font-bold text-white text-xl grid v-screen place-items-center">
         <span href="#" class="flex p-3">
            <BsFillTelephoneFill />
            <span class="ml-3">138 opción 9</span>
          </span>
        </div>
      </div>
      <div className="max-w-[1240] m-auto flex items-center lg:p-6 h-auto lg:flex-row flex-col lg:pt-6 p-2 pt-[130px]">
        <div className="lg:w-1/5 pb-5">
          <Link href="/">
            <img
              src="https://www.pami.org.ar/imagenes/logo_pami.svg"
              alt="logo"
              className="lg:w-full md:w-full "
            />
          </Link>
        </div>
        <div className="lg:w-3/5 lg:pt-0 pt-5 text-center lg:pl-10 lg:pr-10 md:pl-10 md:pr-10">
          <ul className="grid grid-cols-3  text-[#0032a0] uppercase lg:text-2xl md:text-lg text-xs">
            <li className="hover:text-[#00a5e1] font-bold">
              <Link href="/">INSTITUCIONAL</Link>
            </li>
            <li className="hover:text-[#00a5e1] font-bold">
              <Link href="/">SERVICIOS</Link>
            </li>
            <li className="hover:text-[#00a5e1] font-bold">
              <Link href="/">CONTACTO</Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/5 flex flex-col items-center lg:block hidden">
          <div className="w-100">
            <img
              src="https://www.pami.org.ar/imagenes/tel_emergencias.svg"
              className="bg-[#ed145a]"
              width="200px"
              alt=""
            />
          </div>
          <img
            src="https://www.pami.org.ar/imagenes/tel_coronavirus.svg"
            alt=""
            width="200px"
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
