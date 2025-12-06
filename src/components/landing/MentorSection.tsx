const MentorSection = () => {
  return <section className="py-12 sm:py-16 md:py-20 section-light">
      <div className="w-[90%] max-w-6xl mx-auto">
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
            <div className="aspect-[4/5] max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/38f1ae1d-3d01-42fd-be5a-2ee6014feb13.png" 
                alt="VENETTO - Mentor"
                className="w-full h-full object-cover"
              />
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
              <p>VENETTO, com apenas 23 anos, é o cara por trás de uma operação que fatura + de  R$340k/mês vendendo nutraceuticos com COD + Afterpay no Brasil.<strong className="text-slate-900">VENETTO</strong>, com apenas 23 anos, é o cara por trás da operação que fatura <strong className="text-primary">R$340k/mês</strong> vendendo nutraceuticos com COD + Afterpay no Brasil.
              </p>
              <p>Depois de trabalhar em sorveteria e estudar muito sobre tráfego pro x1, ele estruturou do zero uma operação que hoje fatura 6 dígitos por mês — com margem real, cobrança profissional e sem aparecer.<strong className="text-slate-900">6 dígitos por mês</strong> — com margem real, cobrança profissional e sem aparecer.
              </p>
              <p>Já faturou mais de R$1.5 milhão nos últimos 7 meses com esse modelo.<strong className="text-primary">R$1.5 milhão</strong> nos últimos 8 meses com esse modelo.
              </p>
              <p>Hoje, ele lidera a operação vendendo nutraceuticos com estrutura leve mas altamente lucrativa.<strong className="text-slate-900">VH Digital</strong> e <strong className="text-slate-900">Derma Natural</strong>, vendendo nutraceuticos com estrutura leve mas altamente lucrativa.
              </p>
              <p className="bg-slate-100 p-3 sm:p-4 rounded-lg border-l-4 border-primary text-sm sm:text-base">
                Agora ele decidiu abrir as portas e acompanhar um <strong className="text-slate-900">grupo restrito de pessoas</strong> para aplicar o mesmo modelo do zero, com margem, escala e operação profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MentorSection;