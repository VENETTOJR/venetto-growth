const MentorSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 section-light">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-semibold text-base sm:text-lg uppercase tracking-wider">
            Conheça seu mentor
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-2">
            Quem será o seu Mentor?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Photo */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] max-w-sm mx-auto md:max-w-none bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-28 sm:w-40 h-28 sm:h-40 mx-auto bg-slate-400 rounded-full mb-4 sm:mb-6" />
                  <span className="text-xl sm:text-2xl font-bold text-slate-500">VENETTO</span>
                  <p className="text-slate-400 mt-2 text-sm sm:text-base">23 anos | Empresário Digital</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 bg-accent/20 rounded-xl -z-10" />
          </div>

          {/* Bio */}
          <div className="order-1 md:order-2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Quem vai te guiar é{" "}
              <span className="text-gradient">VENETTO</span>
            </h3>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600">
              <p>
                <strong className="text-slate-900">VENETTO</strong>, com apenas 23 anos, é o cara por trás da operação que fatura <strong className="text-primary">R$340k/mês</strong> vendendo nutraceuticos com COD + Afterpay no Brasil.
              </p>
              <p>
                Depois de trabalhar em sorveteria e estudar muito sobre tráfego direto, ele estruturou do zero uma operação que hoje fatura <strong className="text-slate-900">6 dígitos por mês</strong> — com margem real, cobrança profissional e sem aparecer.
              </p>
              <p>
                Já faturou mais de <strong className="text-primary">R$1.5 milhão</strong> nos últimos 8 meses com esse modelo.
              </p>
              <p>
                Hoje, ele lidera a operação <strong className="text-slate-900">VH Digital</strong> e <strong className="text-slate-900">Derma Natural</strong>, vendendo nutraceuticos com estrutura leve mas altamente lucrativa.
              </p>
              <p className="bg-slate-100 p-3 sm:p-4 rounded-lg border-l-4 border-primary text-sm sm:text-base">
                Agora ele decidiu abrir as portas e acompanhar um <strong className="text-slate-900">grupo restrito de pessoas</strong> para aplicar o mesmo modelo do zero, com margem, escala e operação profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
