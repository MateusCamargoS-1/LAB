import { Award, Clock, MapPin } from "lucide-react";
import juliene from "../assets/juliene.jpg";

const About = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Sobre Nós
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Excelência em Análises Clínicas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            O Laboratório Araruna é referência em análises clínicas, com sistema
            integrado de gestão da qualidade e certificações PNCQ e SBAC.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Award className="h-5 w-5 flex-none text-primary-600" />
                Qualidade Certificada
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Nosso compromisso com a qualidade é evidenciado pelas
                  certificações PNCQ e SBAC, garantindo resultados precisos e
                  confiáveis.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Clock className="h-5 w-5 flex-none text-primary-600" />
                Horário de Atendimento
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Segunda a sexta-feira: 06:30 às 18:00
                  <br />
                  Sábados: 07:00 às 12:00
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <MapPin className="h-5 w-5 flex-none text-primary-600" />
                Localização
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Nossa matriz está localizada em Araruna - PR, oferecendo fácil
                  acesso e comodidade para nossos pacientes.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Responsável Técnica
              </h3>
              <div className="mt-6">
                <img
                  className="rounded-lg object-cover"
                  src={juliene}
                  alt="Dra. Gessi Juliene Caetano"
                  style={{ height: 325, width: 470 }}
                />
              </div>
            </div>
            <div className="mt-6 lg:col-span-7 lg:mt-0 lg:pt-12">
              <h4 className="text-lg font-semibold text-gray-900">
                Dra. Gessi Juliene Caetano
              </h4>
              <p className="mt-1 text-sm text-gray-500">CRF: 34.738</p>
              <p className="mt-4 text-base text-gray-600">
                Com vasta experiência em análises clínicas, a Dra. Gessi Juliene
                Caetano lidera nossa equipe técnica, garantindo a excelência em
                todos os processos laboratoriais. Seu compromisso com a
                qualidade e atualização constante reflete-se diretamente na
                confiabilidade dos resultados que entregamos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
