import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="relative bg-white pt-20">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Bem-vindo ao Laboratório Araruna
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Excelência em serviços laboratoriais com tecnologia de ponta e
              atendimento humanizado. Sua saúde é nossa prioridade.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="http://45.183.82.65:4448/ConcentWeb/servlet/hlab8000"
                className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 inline-flex items-center"
              >
                Agende sua coleta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="http://45.183.82.65:4448/ConcentWeb/servlet/hlab8000"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
              >
                Consulte seus resultados <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="w-full h-auto object-cover lg:object-center"
            src={banner}
            alt="Laboratório moderno com equipamentos de última geração"
            style={{marginTop: "90px", height: "70%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
