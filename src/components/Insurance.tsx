const Insurance = () => {
  const convenios = [
    'CLINICA TRABALHO',
    'FUPS',
    'ASFA',
    'ASEMA',
    'COFAMA',
    'COPEL',
    'BRADESCO',
    'FAMEGER',
    'PARTICULAR',
    'PINDUCA',
    'SUS',
    'SINDICATO DOS METALURGICOS',
    'SANEPAR',
    'UNIMED',
    'MED PREV',
    'PAM',
    'SISPMA',
    'PAMPL',
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Convênios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Atendemos os Principais Convênios
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Trabalhamos com uma ampla rede de convênios para melhor atender nossos pacientes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {convenios.map((convenio) => (
              <div
                key={convenio}
                className="flex items-center justify-center rounded-lg bg-gray-50 p-4 text-center"
              >
                <span className="text-sm font-medium text-gray-900">{convenio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;