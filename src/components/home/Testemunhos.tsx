import { Quote } from "lucide-react";

type Testemunho = {
  nome: string;
  curso: string;
  texto: string;
  iniciais: string;
};

const testemunhos: Testemunho[] = [
  {
    nome: "Esperança Mucavele",
    curso: "Enfermagem Geral",
    iniciais: "EM",
    texto:
      "O IMPCI deu-me muito mais do que um diploma. Os professores acompanharam-me em cada estágio e hoje trabalho no Hospital Provincial de Chimoio. Recomendo de olhos fechados.",
  },
  {
    nome: "Tomás Chissano",
    curso: "Administração e Gestão",
    iniciais: "TC",
    texto:
      "Escolhi o IMPCI pelas mensalidades acessíveis e pela proximidade dos formadores. Hoje giro o meu próprio negócio em Manica graças à formação que recebi.",
  },
  {
    nome: "Felizarda Mondlane",
    curso: "Suporte Informático (TICS)",
    iniciais: "FM",
    texto:
      "A formação é prática desde o primeiro dia. O ensino nocturno permitiu-me trabalhar e estudar ao mesmo tempo — sem isso não teria conseguido.",
  },
];

export function Testemunhos() {
  return (
    <section className="bg-secondary py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-accent font-ui font-bold text-[13px] uppercase tracking-[0.15em] mb-3">
            Vozes do IMPCI
          </p>
          <h2 className="font-display font-bold text-foreground leading-tight text-[clamp(1.75rem,3vw,2.5rem)]">
            O que dizem os nossos estudantes
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            Histórias reais de quem passou pelo IMPCI e construiu o seu caminho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testemunhos.map((t) => (
            <article
              key={t.nome}
              className="bg-white rounded-xl border border-border p-7 shadow-sm hover:shadow-lg transition-all flex flex-col"
            >
              <Quote
                size={32}
                className="text-accent mb-4 opacity-80"
                strokeWidth={1.5}
              />
              <p className="text-foreground leading-[1.7] text-[15px] flex-1 italic">
                "{t.texto}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-accent font-bold flex items-center justify-center text-base">
                  {t.iniciais}
                </div>
                <div>
                  <div className="font-ui font-bold text-foreground text-sm">
                    {t.nome}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.curso}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
