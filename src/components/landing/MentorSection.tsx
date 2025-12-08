import venettoPhoto from "@/assets/venetto-photo.jpg";
import { Check } from "lucide-react";

const MentorSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 section-light">
      <div className="w-[90%] max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-primary font-semibold text-base sm:text-lg uppercase tracking-wider">
            Conheça seu mentor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2">
            Quem será o seu Mentor?
          </h2>
        </div>

        {/* Photo - Full width on mobile */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-muted">
              <img 
                src={venettoPhoto} 
                alt="VENETTO - Mentor especialista em nutraceuticos e COD"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                width={576}
                height={768}
                decoding="async"
                fetchPriority="low"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            Quem vai te guiar é{" "}
            <span className="text-gradient">VENETTO</span>
          </h3>
        </div>

        {/* Bio */}
        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
          <p>
            <strong className="text-slate-900">VENETTO</strong>, com apenas 22 anos, é o cara por trás da operação que fatura{" "}
            <strong className="text-primary">mais de R$200k/mês</strong> vendendo nutraceuticos com COD + Afterpay no Brasil.
          </p>
          
          <p>
            Depois de trabalhar em sorveteria e estudar muito sobre ofertas, funis de venda X1, tráfego e escala, ele estruturou do zero uma operação que hoje fatura{" "}
            <strong className="text-slate-900">6 dígitos por mês</strong> — com margem real, cobrança profissional e sem aparecer.
          </p>
          
          <p>
            Já faturou{" "}
            <span className="text-xl sm:text-2xl font-bold text-primary">R$1.5 milhão nos últimos 7 meses</span>{" "}
            com esse modelo.
          </p>
          
          <p>
            Hoje, ele lidera uma operação vendendo nutraceuticos com estrutura enxuta mas altamente lucrativa — operando com COD + Afterpay que elimina objeção e aumenta conversão.
          </p>

          {/* Secret Box */}
          <div className="bg-primary/10 border border-primary/20 p-5 sm:p-6 rounded-xl mt-6">
            <p className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
              O segredo?
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Estrutura profissional de venda X1</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">
                  Processo de cobrança que converte <strong className="text-slate-900">87%</strong> dos clientes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Produto validado que não queima em 30 dias</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">COD + Afterpay que elimina objeção</span>
              </li>
            </ul>
          </div>

          <p className="bg-slate-100 p-4 sm:p-5 rounded-lg border-l-4 border-primary text-sm sm:text-base mt-6">
            Agora ele decidiu abrir as portas e acompanhar um{" "}
            <strong className="text-slate-900">grupo restrito de pessoas</strong> para aplicar o mesmo modelo do zero, com margem, escala e operação profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
