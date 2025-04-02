import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; subject?: string; address?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!name.trim() || name.length < 3) {
      newErrors.name = "O nome deve ter pelo menos 3 caracteres.";
    }

    if (!subject) {
      newErrors.subject = "Escolha um assunto.";
    }

    if (!address.trim() || address.length < 5) {
      newErrors.address = "O endereço deve ter pelo menos 5 caracteres.";
    }

    if (!message.trim() || message.length < 10) {
      newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendWhatsAppMessage = (e: any) => {
    e.preventDefault();
    if (!validateForm()) return;

    const phoneNumber = "5544998835272";
    const text = `Olá, meu nome é ${name}.\nAssunto: ${subject}\nEndereço: ${address}\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Contato</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Entre em Contato Conosco
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Estamos à disposição para atender você da melhor forma possível.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Informações de Contato</h3>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telefone</span>
                    <Phone className="h-5 w-5 text-primary-600" />
                  </dt>
                  <dd>
                    <a href="tel:+554435621134" className="text-sm font-medium text-gray-900 hover:text-primary-600">
                      (44) 3562-1134
                    </a>
                  </dd>
                </div>
                <div className="flex items-center gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">WhatsApp</span>
                    <Phone className="h-5 w-5 text-primary-600" />
                  </dt>
                  <dd>
                    <a href="https://wa.me/5544998771134" className="text-sm font-medium text-gray-900 hover:text-primary-600">
                      (44) 99877-1134
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Endereço</span>
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </dt>
                  <dd className="text-sm text-gray-900">Matriz localizada em Araruna - PR</dd>
                </div>
                <div className="flex items-start gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Horário</span>
                    <Clock className="h-5 w-5 text-primary-600" />
                  </dt>
                  <dd className="text-sm text-gray-900">
                    Segunda a sexta-feira: 06:30 às 18:00
                    <br />
                    Sábados: 07:00 às 12:00
                  </dd>
                </div>
              </dl>
            </div>

            <form className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Envie sua Mensagem</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Assunto
                  </label>
                  <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    id="subject"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Consulta">Consulta</option>
                    <option value="Agendamento">Agendamento</option>
                    <option value="Dúvida">Dúvida</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                    Endereço
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  onClick={sendWhatsAppMessage}
                  disabled={!name || !subject || !address || !message}
                  type="submit"
                  className="rounded-md bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
