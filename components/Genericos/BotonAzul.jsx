import Link from "next/link";
import React from "react";

const BotonAzul = ({ texto, enlace }) => {
  return (
    <Link href={`${enlace}`}>
      <span className="font-bold cursor-pointer p-4 text-lg text-center rounded-md bg-[#0032a0] text-white uppercase hover:text-[#0032a0] hover:bg-white hover:border-[#0032a0] hover:border-[1px]">
        {texto}
      </span>
    </Link>
  );
};

export default BotonAzul;
