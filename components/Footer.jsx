import { FaFacebookF,FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi"

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 z-20 p-4 w-full bg-[#0032a0] text-gray-200">
      <div className="flex flex-row p-6">
        <div className="flex flex-col items-center gap-6 basis-1/4">
          <a
            target="_blank"
            className="bg-white text-[#0032a0] pt-3 pb-3 text-m text-center w-2/3"
          >
            COMPRAS COVID-19
          </a>
          <a
            target="_blank"
            className="bg-white text-[#0032a0] pt-3 pb-3 text-m w-2/3 text-center"
          >
            DONACIONES COVID-19
          </a>
          <a
            target="_blank"
            className="bg-white text-[#0032a0] pt-3 pb-3 text-m w-2/3 text-center"
          >
            PRESTADORESY PROVEEDORES
          </a>
          <span className="text-md">Seguinos en las redes sociales</span>
          <div>
            <div className="grid grid-cols-4 place-items-center gap-4">
              <button className="bg-white p-2 rounded-full text-[#0032a0]">
                <FaFacebookF size="1.5rem" />
              </button>

              <button className="bg-white p-2 rounded-full text-[#0032a0]">
                <FaTwitter size="1.5rem" />
              </button>
              
              <button className="bg-white p-2 rounded-full text-[#0032a0]">
                <TfiYoutube size="1.5rem" />
              </button>

              <button className="bg-white p-2 rounded-full text-[#0032a0]">
                <FaInstagram size="1.5rem" />
              </button>

            </div>
          </div>
        </div>
        <div className="basis-1/4">
          <span className="text-xl">INSTITUCIONAL</span>
          <ul className="pt-6">
            <li className="mb-4">¿Qué es PAMI?</li>
            <li className="mb-4">Boletín del Instituto</li>
            <li className="mb-4">Transparencia Activa</li>
            <li className="mb-4">Novedades</li>
          </ul>
        </div>
        <div className="basis-1/4">
          <span className="text-xl">SERVICIOS</span>
          <ul className="pt-6">
            <li className="mb-4">Medicamentos Gratis</li>
            <li className="mb-4">Trámites Web </li>
            <li className="mb-4">Turno para Agencia</li>
            <li className="mb-4">Quiero Afiliarme </li>
            <li className="mb-4">Reclamos </li>
            <li className="mb-4">Estado de Trámite </li>
          </ul>
        </div>
        <div className="basis-1/4">
          <span className="text-xl">CONTACTO</span>
          <ul className="pt-6">
            <li className="mb-4">Reclamos </li>
            <li className="mb-4">UGL y Agencias </li>
            <li className="mb-4">PAMI Escucha </li>
            <li className="mb-4">Traslados Programados </li>
            <li className="mb-4">Preguntas Frecuentes </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
