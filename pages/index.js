import AccesosRapidos from "../components/Home/AccesosRapidos";
import ItemNoticia from "../components/Home/ItemNoticia";
import BotonAzul from "../components/Genericos/BotonAzul";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout titulo="Home -INSSJ">
      <div className="pl-4 pr-4 lg:pl-[100px] lg:pr-[100px] md:pl-[100px] md:pr-[100px] mt-[330px] lg:mt-[200px] md:mt-[340px]">
        {/* Accesos Directos*/}
        <div className="w-full">
          <div className="flex items-center lg:gap-3 flex-col lg:flex-row gap-2">
            <AccesosRapidos
              texto="Trámites Web"
              boton="Iniciar"
              color="#0032a0"
              enlace="test"
            />

            <AccesosRapidos
              texto="Turno para Agencia"
              boton="Solicitar"
              color="#0032a0"
              enlace="test"
            />

            <AccesosRapidos
              texto="Quiero Afiliarme"
              boton="Comenzar"
              color="#0032a0"
              enlace="test"
            />

            <AccesosRapidos
              texto="Reclamos"
              boton="Acceder"
              color="#0032a0"
              enlace="test"
            />

            <AccesosRapidos
              texto="Estado de Trámite"
              boton="Consultar"
              color="#0032a0"
              enlace="test"
            />
          </div>
        </div>

        {/* Noticia principal */}
        <div className="w-full">
          <div className="pt-5 pb-5">
            <img
              src="https://www.pami.org.ar/imagenes/home/home_libertad_de_elegir_v2.png"
              className="w-full"
            />
            <div className="bg-[#0032a0] text-white text-center lg:p-6 p-3">
              <span className="text-2xl lg:text-4xl font-bold">
                La libertad de elegir
              </span>
              <p className="lg:text-xl lg:p-2 text-lg p-1">
                Turnos más rápido con tu médico especialista
              </p>
              <div className="p-6 grid lg:grid-cols-3 gap-2 content-center pl-[80px] pr-[80px] grid-cols-1 pt-2 pb-2">
                <span className="pl-4 pr-4 pt-2 pb-2 font-bold lg:text-lg text-center rounded-md border-white border-[1px] text-white uppercase text-base">
                  CONOCÉ MÁS
                </span>

                <span className="pl-4 pr-4 pt-2 pb-2 font-bold lg:text-lg text-center rounded-md border-white border-[1px] text-white uppercase text-base">
                  DESCARGÁ TU CARTILLA MÉDICA
                </span>

                <span className="pl-4 pr-4 pt-2 pb-2 font-bold lg:text-lg text-center rounded-md border-white border-[1px] text-white uppercase text-base">
                  CREDENCIAL PAMI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Noticias - Seccion 1 */}
        <div className="w-full">
          <div className="pt-5 pb-5 grid lg:grid-cols-2 gap-4 md:grid-cols-1">
            <ItemNoticia
              texto="Sonrisa mayor: programa nacional de atención odontológica integral"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/home_sonrisa_mayor.png"
            />

            <ItemNoticia
              texto="Plan Integral de Cuidado y Tratamiento Oncológico"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/home_plan_oncologico.png"
            />

            <ItemNoticia
              texto="Previaje PAMI Anotate, viajá y ahorrá"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/home_previaje.png"
            />

            <ItemNoticia
              texto="Medicamentos Gratis: Cumplimos"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/medicamentos.png"
            />
          </div>
        </div>

        {/* Noticias - Seccion 2 */}
        <div className="w-full">
          <div className="pt-5 pb-5 grid lg:grid-cols-2 gap-4 md:grid-cols-1">
            <ItemNoticia
              texto="Beneficios PAMI Promociones y descuentos"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/banner_beneficios-web-03.png"
            />

            <ItemNoticia
              texto="Charlá con PAMI: Ciclo de encuentros participativos"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/home_charlaconpami.png"
            />

            <ItemNoticia
              texto="Unite a Comunidad PAMI"
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/comunidad.jpg"
            />

            <ItemNoticia
              texto="Cursos y talleres UPAMI "
              boton="CONOCÉ MÁS"
              imagen_src="https://www.pami.org.ar/imagenes/home/home_cursos_upami.png"
            />
          </div>
        </div>

        {/* Banner App Mi PAMI */}
        <div className="w-full">
          <div className="p-6 bg-gradient-to-r from-[#06519b] to-[#5291c9] mt-5 mb-10 grid grid-cols-3">
            <div className="">
              <img
                src="https://www.pami.org.ar/imagenes/banner_app_01.png"
                className="w-auto float-right"
              />
            </div>
            <div className="col-span-2 p-5">
              <h1 className="text-white lg:text-4xl md:text-3xl text-lg">
                Encontrá todo lo que necesitás para tu consulta en la aplicación
                de PAMI
              </h1>
              <div className="pt-4 pb-4">
                <ul className="flex flex-row flex-wrap text-white text-2xl lg:block hidden">
                  <li class="mb-1 w-1/2">
                    <a href="#" class="w-fill flex p-3 pl-3">
                      <AiOutlineCheckCircle />
                      <span class="ml-3">Órdenes médicas</span>
                    </a>
                  </li>

                  <li class="mb-1 w-1/2">
                    <a href="#" class="w-fill flex p-3 pl-3">
                      <AiOutlineCheckCircle />
                      <span class="ml-3">Credencial digital</span>
                    </a>
                  </li>

                  <li class="mb-1 w-1/2">
                    <a href="#" class="w-fill flex p-3 pl-3">
                      <AiOutlineCheckCircle />
                      <span class="ml-3">Recetas electrónicas</span>
                    </a>
                  </li>

                  <li class="mb-1 w-1/2">
                    <a href="#" class="w-fill flex p-3 pl-3">
                      <AiOutlineCheckCircle />
                      <span class="ml-3">Consulta de turnos</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="text-white lg:text-2xl md:text-lg text-base">
                Descargala en tu celular desde la tienda móvil
              </span>
              <div className="flex flex-row lg:gap-8 pt-6 gap-2">
                <Link href="https://apps.apple.com/app/pami-inssjp/id1612864998">
                  <img
                    src="https://www.pami.org.ar/imagenes/banner_app_02.png"
                    className="lg:w-100 md:w-1/4 w-2/4 h-auto cursor-pointer"
                  />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=ar.org.pami.app">
                  <img
                    src="https://www.pami.org.ar/imagenes/banner_app_03.png"
                    className="lg:w-100 md:w-1/4 w-2/4 h-auto cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Novedades */}
        <div className="w-full">
          <div className="border-[1px] border-[#0032a0] mb-5">
            <div className="text-white bg-[#0032a0] p-2">
              <span className="lg:text-3xl uppercase text-2xl">
                Novedades
              </span>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="text-left p-8">
                <h2 className="text-[#0032a0] lg:text-3xl text-2xl font-bold">
                  PAMI JUNTO A META, WHATSAPP E INSTAGRAM LANZAN EL PROGRAMA DE
                  CAPACITACIÓN “SOY DIGITAL” EN CENTROS DE JUBILADOS
                </h2>
                <p className="pt-6 text-2xl">
                  A través de tres talleres interactivos, se capacitará a
                  personas mayores en el uso seguro y responsable de plataformas
                  digitales.
                </p>
                <div className="pt-10">
                  <BotonAzul texto="conocé más" enlace="probando" />
                </div>
              </div>
              <div>
                <img
                  src="https://www.pami.org.ar/imagenes/ver_archivo.php?id=624"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          <div className="pb-4 pt-4 mb-10">
            <BotonAzul texto="ver más novedades" enlace="probando" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
