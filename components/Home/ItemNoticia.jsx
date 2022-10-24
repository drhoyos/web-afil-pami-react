import React from "react";
import BotonAzul from "../Genericos/BotonAzul";

const ItemNoticia = ({ texto, boton, imagen_src, enlace }) => {
  return (
    <div>
      <img src={imagen_src} className="w-full" />
      <div className="text-[#0032a0] bg-white text-center border-[#0032a0] border-l-[1px] border-r-[1px] border-b-[1px] h-56 lg:h-44 md:h-44">
        <p className="lg:text-3xl text-lg pt-6 h-24 lg:h-30 justify-center md:text-2xl  md:h-20 font-bold">{texto}</p>
        <div className="pt-8">
          <BotonAzul texto={`${boton}`} enlace={`${enlace}`} />
        </div>
      </div>
    </div>
  );
};

export default ItemNoticia;
