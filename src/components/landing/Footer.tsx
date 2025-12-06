const Footer = () => {
  return (
    <footer className="py-12 px-4 section-dark border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-2xl font-black text-gradient">FWA</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-lg font-semibold text-foreground">VENETTO</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 Mentoria FWA - VENETTO. Todos os direitos reservados.
          </p>

          {/* Disclaimer */}
          <p className="text-muted-foreground/60 text-xs mt-4 max-w-2xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
