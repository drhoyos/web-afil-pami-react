import React from "react";
import Link from "next/link";

const AccesosRapidos = ({ texto, boton, color, enlace }) => {
  return (
    <Link href={`/${enlace}`}>
      <div
        className={`w-full lg:w-1/5 bg-[${color}] m-auto flex flex-col items-center p-4 lg:p-6 md:p-6 h-auto cursor-pointer`}
      >
        <span className="font-bold pt-2 mb-12 text-3xl text-center w-40 lg:h-20 text-white md:h-12">
        {texto}
        </span>

        <span
          className={`font-bold pl-4 pr-4 pt-2 pb-2 text-lg text-center rounded-lg border-white border-[1px] text-white uppercase  hover:bg-white`}
        >
          {boton}
        </span>
      </div>
    </Link>
  );
};

export default AccesosRapidos;
