import { Beaker, Shield, Truck, Computer } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Nossos Serviços</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tecnologia e Qualidade a Serviço da Sua Saúde
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos uma ampla gama de exames laboratoriais com a mais alta tecnologia e
            profissionais especializados.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Shield className="h-5 w-5 flex-none text-primary-600" />
                Controle de Qualidade
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Todos os exames são submetidos a rigorosos processos de controle interno,
                  interlaboratorial e externo, garantindo máxima confiabilidade nos resultados.
                  Realizamos controle interno diariamente para assegurar a precisão em cada análise.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Beaker className="h-5 w-5 flex-none text-primary-600" />
                Tecnologia Avançada
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Utilizamos equipamentos de última geração e um Sistema de Gestão Laboratorial
                  que controla todos os processos, desde o atendimento até a entrega dos resultados,
                  garantindo segurança e agilidade.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Truck className="h-5 w-5 flex-none text-primary-600" />
                Coleta Domiciliar
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Oferecemos serviço de coleta domiciliar para maior comodidade dos nossos pacientes.
                  Agende pelo telefone (44) 3562-1134 ou WhatsApp (44) 99877-1134.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Computer className="h-5 w-5 flex-none text-primary-600" />
                Resultados Online
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Acesse seus resultados de forma segura através do nosso portal ou receba por
                  e-mail. Nosso sistema garante total confidencialidade dos seus dados.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Services;