import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Expand,
  Glasses,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge, CheckItem, CtaButton, SectionHeading, scrollToForm } from "@/components/orange/ui";
import heroWoman from "@/assets/hero-woman.jpg";
import storeMain from "@/assets/store-main.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";
import store4 from "@/assets/store-4.jpg";
import store5 from "@/assets/store-5.jpg";
import store6 from "@/assets/store-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seja Franqueado Óticas Orange | A partir de R$ 99 mil" },
      {
        name: "description",
        content:
          "Abra sua Ótica Orange: margem líquida de ~20%, retorno em 18 meses e suporte 360°. Receba a apresentação completa da franquia em até 24h.",
      },
      { property: "og:title", content: "Seja Franqueado Óticas Orange" },
      {
        property: "og:description",
        content:
          "Franquia de óticas com investimento a partir de R$ 99 mil, margem acima da média e suporte completo da rede.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const galleryImages = [
  { src: storeMain, alt: "Interior da loja Óticas Orange" },
  { src: store2, alt: "Vitrine com armações premium" },
  { src: store3, alt: "Fachada iluminada da loja" },
  { src: store4, alt: "Sala de exames oftalmológicos" },
  { src: store5, alt: "Armações de acetato em exposição" },
  { src: store6, alt: "Atendimento na loja" },
];

const grifes = [
  "Ray-Ban",
  "Oakley",
  "Prada",
  "Versace",
  "Burberry",
  "Tom Ford",
  "Dolce & Gabbana",
  "Emporio Armani",
  "Armani Exchange",
  "Calvin Klein",
  "Michael Kors",
  "Polo Ralph Lauren",
  "Vogue",
  "Persol",
  "Lacoste",
  "Nike",
  "Ferrari",
  "Harley Davidson",
  "Swarovski",
  "Max Mara",
  "Zegna",
  "Donna Karan",
  "Longchamp",
  "Guess",
  "Timberland",
  "Hurley",
  "Arnette",
  "Max & Co",
  "Reserva",
  "Dudalina",
  "Morena Rosa",
  "Maria Valentina",
  "Lança Perfume",
  "Iódice",
  "Vizzano",
  "Sestini",
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground">
        <Eye className="h-4 w-4" />
      </span>
      <span className="font-display text-sm font-extrabold tracking-[0.18em] text-ink-foreground">
        ÓTICAS <span className="text-primary">ORANGE</span>
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3">
        <Logo />
        <CtaButton withIcon className="px-4 py-2 text-xs sm:text-sm">
          <span className="hidden sm:inline">Receber Apresentação</span>
          <span className="sm:hidden">Apresentação</span>
        </CtaButton>
      </div>
    </header>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      id="formulario"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="w-full rounded-[20px] border border-border bg-card p-6 shadow-[var(--shadow-card)]"
    >
      <h3 className="font-display text-xl font-extrabold">Receber Detalhes</h3>
      <p className="mt-1 text-sm text-muted-foreground">Preencha e descubra nosso modelo</p>
      <div className="mt-5 space-y-3">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <Field label="Nome Completo" id="nome" placeholder="Seu nome" />
        <Field label="E-mail" id="email" type="email" placeholder="seu@email.com" />
        <Field label="WhatsApp" id="whats" placeholder="(00) 00000-0000" />
        <div>
          <label htmlFor="capital" className="mb-1 block text-xs font-semibold text-foreground">
            Capital para investimento?
          </label>
          <select
            id="capital"
            required
            defaultValue=""
            className="w-full rounded-[8px] border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
          >
            <option value="" disabled>
              Selecione
            </option>
            <option>R$ 99 mil a R$ 199 mil (Start)</option>
            <option>R$ 199 mil a R$ 299 mil (Concept)</option>
            <option>Acima de R$ 299 mil (Premium)</option>
          </select>
        </div>
        <button
          type="submit"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-[50px] bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:bg-primary-light"
        >
          <MessageCircle className="h-4 w-4" />
          {sent ? "Recebemos seus dados!" : "Receber Apresentação"}
        </button>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Ao enviar, você concorda em receber contato sobre franquias. Consulte nossa Política de
          Privacidade.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-[8px] border border-input bg-background px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-background pt-14">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[52vw] max-h-[420px] min-h-[240px] lg:h-auto lg:max-h-none lg:min-h-[760px]">
          <img
            src={heroWoman}
            alt="Mulher usando óculos de grau em retrato editorial preto e branco"
            width={1024}
            height={1536}
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-8 sm:gap-6 sm:px-12 sm:py-12 lg:pr-28">
          <Badge>Nº 1 em Crescimento</Badge>
          <h1 className="font-display text-[30px] leading-[1.15] font-extrabold tracking-tight sm:text-4xl">
            ABRA SUA <span className="text-primary">ÓTICA ORANGE</span> E LUCRE COM O MERCADO QUE
            NUNCA PARA DE CRESCER
          </h1>
          <ul className="space-y-2.5">
            <CheckItem>
              <strong>Lucro médio Mensal:</strong> 20%
            </CheckItem>
            <CheckItem>
              <strong>Prazo de Retorno:</strong> 18 meses
            </CheckItem>
            <CheckItem>
              <strong>Ponto de Equilíbrio:</strong> 6 meses
            </CheckItem>
          </ul>
          <div className="grid grid-cols-3 gap-3">
            <MiniBlock top="A partir de" mid="R$ 99 Mil" sub="Investimento Inicial" />
            <MiniBlock top="Altíssima" mid="Margem" sub="de Lucro" />
            <MiniBlock top="Suporte" mid="Completo" sub="360°" />
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-6 w-full max-w-md px-5 pb-12 lg:absolute lg:right-16 lg:bottom-10 lg:mt-0 lg:px-0 lg:pb-0">
        <LeadForm />
      </div>
    </section>
  );
}

function MiniBlock({ top, mid, sub }: { top: string; mid: string; sub: string }) {
  return (
    <div className="rounded-[16px] border border-border bg-card p-3 shadow-[var(--shadow-soft)]">
      <p className="text-[11px] text-muted-foreground">{top}</p>
      <p className="font-display text-base font-extrabold text-primary">{mid}</p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}

function Stats() {
  const items = [
    { n: "40+", l: "Lojas em Expansão" },
    { n: "95%", l: "Satisfação dos Franqueados" },
    { n: "~20%", l: "Margem Líquida Média" },
    { n: "10+", l: "Anos no Mercado" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">{i.n}</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{i.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const phrase = (
    <span className="mx-5 inline-flex items-center font-display text-2xl sm:mx-8 font-extrabold tracking-tight whitespace-nowrap text-ink-foreground sm:text-5xl lg:text-7xl">
      ENXERGUE A <span className="mx-4 text-primary">OPORTUNIDADE</span> QUE POUCOS VEEM
    </span>
  );
  return (
    <section className="relative overflow-hidden bg-ink py-8 sm:py-14">
      <div className="flex w-max animate-marquee">
        {phrase}
        {phrase}
        {phrase}
        {phrase}
      </div>
      <div
        className="animate-lens pointer-events-none absolute top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border-2 border-border-primary"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 22%, transparent) 0%, transparent 70%)",
          backdropFilter: "blur(1px) saturate(160%)",
        }}
      />
    </section>
  );
}

function Why() {
  const cards = [
    {
      icon: TrendingUp,
      t: "INVESTIMENTO A PARTIR DE",
      h: "R$ 99 Mil",
      d: "Capital inicial com retorno em até 18 meses e ponto de equilíbrio médio em 6 meses",
    },
    {
      icon: Sparkles,
      t: "LUCRO ACIMA DA MÉDIA",
      h: "~20%",
      d: "Margem líquida muito acima da média do franchising, com markup altíssimo nos produtos",
    },
    {
      icon: ShieldCheck,
      t: "SUPORTE COMPLETO 360°",
      h: "Do início",
      d: "Treinamento, escolha do ponto, layout, marketing nacional e suporte contínuo da rede",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <SectionHeading
        title={
          <>
            POR QUE ÓTICAS <span className="text-primary">ORANGE?</span>
          </>
        }
        subtitle="Vantagens exclusivas que fazem a diferença no seu negócio"
      />
      <div className="mt-8 grid sm:mt-12 gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.t}
            className="rounded-[20px] border border-border bg-card p-6 sm:p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-[16px] bg-accent text-primary">
              <c.icon className="h-5 w-5" />
            </span>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {c.t}
            </p>
            <p className="font-display text-2xl font-extrabold text-primary">{c.h}</p>
            <p className="mt-3 text-sm leading-relaxed text-body-text">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const show = (i: number) => {
    setIndex(i);
    setOpen(true);
  };
  return (
    <section className="bg-card py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title={
            <>
              ESTRUTURA DA <span className="text-primary">LOJA</span>
            </>
          }
          subtitle="Um projeto arquitetônico pensado para vender mais"
        />
        <div className="mt-8 grid sm:mt-12 gap-4 lg:grid-cols-[2fr_1fr]">
          <button
            type="button"
            onClick={() => show(0)}
            className="group relative overflow-hidden rounded-[20px] shadow-[var(--shadow-card)]"
          >
            <img
              src={galleryImages[0]?.src}
              alt={galleryImages[0]?.alt ?? ""}
              loading="lazy"
              width={1536}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-[50px] bg-primary px-4 py-2 font-display text-xs font-semibold text-primary-foreground">
              <Expand className="h-4 w-4" /> Ampliar Imagem
            </span>
          </button>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-2">
            {galleryImages.slice(1).map((g, i) => (
              <button
                key={g.alt}
                type="button"
                onClick={() => show(i + 1)}
                className="overflow-hidden rounded-[16px] border border-border"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105 lg:h-32"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="relative">
            <img
              src={galleryImages[index]?.src}
              alt={galleryImages[index]?.alt ?? ""}
              className="w-full rounded-[20px]"
            />
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => setIndex((index + galleryImages.length - 1) % galleryImages.length)}
              className="absolute top-1/2 left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próxima"
              onClick={() => setIndex((index + 1) % galleryImages.length)}
              className="absolute top-1/2 right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Segment() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl leading-tight font-extrabold sm:text-4xl">
            NOSSO SEGMENTO É UM DOS <span className="text-primary">MAIS LUCRATIVOS</span> DO
            FRANCHISING
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-body-text">
            O mercado óptico opera com uma{" "}
            <strong className="text-primary">margem líquida próxima de 20%</strong>, muito acima da
            média do franchising brasileiro, com recorrência natural de clientes.
          </p>
          <ul className="mt-6 space-y-3">
            <CheckItem>Modelo de negócio validado e previsível</CheckItem>
            <CheckItem>Treinamento completo para toda a equipe</CheckItem>
            <CheckItem>Central de compras com preços exclusivos</CheckItem>
            <CheckItem>Marketing nacional de alto impacto</CheckItem>
          </ul>
          <CtaButton className="mt-8">Falar com o Time de Expansão</CtaButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "~20%", v: "Margem líquida média" },
            { k: "6 meses", v: "Ponto de equilíbrio" },
            { k: "18 meses", v: "Retorno do investimento" },
            { k: "360°", v: "Suporte da rede" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-[20px] border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <p className="font-display text-2xl font-extrabold text-primary">{s.k}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnBrands() {
  const brands = [
    {
      name: "Orange Eyewear",
      d: "Coleção própria de armações com design contemporâneo e acabamento premium. Do estilo atual ao alta gama com acetatos refinados. Modelos exclusivos que diferenciam a sua loja da concorrência.",
      items: [
        "Design autoral e contemporâneo",
        "Acetatos refinados e acabamento premium",
        "Exclusividade total da rede Orange",
      ],
    },
    {
      name: "Orange Vision",
      d: "Linha proprietária de lentes oftálmicas com tecnologia óptica avançada e margem superior à média do mercado.",
      items: [
        "Margem até 60% superior ao mercado",
        "Tecnologia óptica proprietária",
        "Antirreflexo, fotossensíveis e multifocais",
      ],
    },
  ];
  return (
    <section className="bg-card py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Marcas exclusivas"
          title={
            <>
              NOSSAS MARCAS <span className="text-primary">PRÓPRIAS</span>
            </>
          }
          subtitle="Margem superior e diferenciação real frente a qualquer concorrente da sua região."
        />
        <div className="mt-8 grid sm:mt-12 gap-6 md:grid-cols-2">
          {brands.map((b) => (
            <div
              key={b.name}
              className="rounded-[20px] border border-border bg-background p-6 sm:p-8 shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-[16px] bg-accent text-primary">
                <Glasses className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold">{b.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-text">{b.d}</p>
              <ul className="mt-5 space-y-2.5">
                {b.items.map((i) => (
                  <CheckItem key={i}>{i}</CheckItem>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lenses() {
  const partners = [
    { n: "ZEISS", c: "Alemanha", t: "Engenharia óptica alemã", d: "Padrão de altíssima definição" },
    { n: "HOYA", c: "Japão", t: "Tecnologia japonesa", d: "Lentes leves e resistentes" },
    {
      n: "Essilor",
      c: "França",
      t: "Líder mundial · Varilux",
      d: "Referência global em multifocais",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <SectionHeading
        eyebrow="Lentes premium"
        title={
          <>
            ACESSO ÀS MAIORES MARCAS DE <span className="text-primary">LENTES DO MUNDO</span>
          </>
        }
      />
      <div className="mt-8 grid sm:mt-12 gap-6 md:grid-cols-3">
        {partners.map((p) => (
          <div
            key={p.n}
            className="rounded-[20px] border border-border bg-card p-6 text-center sm:p-8 shadow-[var(--shadow-soft)]"
          >
            <p className="font-display text-2xl font-extrabold tracking-[0.14em]">{p.n}</p>
            <p className="eyebrow mt-2">{p.c}</p>
            <p className="mt-4 text-sm font-semibold text-foreground">{p.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Grifes() {
  const [expanded, setExpanded] = useState(false);
  const list = expanded ? grifes : grifes.slice(0, 12);
  return (
    <section className="bg-card py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Portfólio completo"
          title={
            <>
              AS MAIORES <span className="text-primary">GRIFES DO MUNDO</span> NA SUA LOJA
            </>
          }
        />
        <div className="mt-8 grid sm:mt-12 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((g) => (
            <div
              key={g}
              className="grid h-20 place-items-center rounded-[16px] border border-border bg-background px-3 text-center font-display text-sm font-bold text-muted-foreground grayscale transition-all duration-300 hover:text-foreground hover:grayscale-0"
            >
              {g}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-[50px] border border-border-primary bg-accent px-6 py-3 font-display text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            {expanded ? "Ver menos" : "Ver todas as marcas"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-14 overflow-hidden rounded-[20px] bg-ink p-10 text-center">
          <h3 className="font-display text-2xl font-extrabold text-ink-foreground sm:text-3xl">
            PRONTO PARA ENTRAR NA <span className="text-primary">REDE?</span>
          </h3>
          <p className="mt-3 text-sm text-ink-foreground/80">
            Tenha todas essas marcas dentro da SUA loja Orange
          </p>
          <p className="mt-1 text-sm text-ink-foreground/60">
            Fale agora com nosso time de expansão e receba a apresentação completa em até 24h.
          </p>
          <CtaButton className="mt-7">QUERO SER FRANQUEADO ORANGE</CtaButton>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      n: "Start",
      s: "Modelo de entrada",
      p: "99 mil",
      d: "Operação enxuta e alta escalabilidade. Ideal para empreendedores que querem entrar no mercado com investimento menor.",
      f: false,
    },
    {
      n: "Concept",
      s: "Estrutura intermediária",
      p: "199 mil",
      d: "Estrutura intermediária equilibrada, com mix robusto de produtos e maior potencial de faturamento.",
      f: true,
    },
    {
      n: "Premium",
      s: "Modelo completo",
      p: "299 mil",
      d: "A experiência premium completa da marca. Arquitetura exclusiva, mix de produtos diferenciado e posicionamento superior.",
      f: false,
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <SectionHeading
        eyebrow="Escolha seu modelo"
        title={
          <>
            NÍVEIS DE <span className="text-primary">FRANQUIA</span>
          </>
        }
        subtitle="Três modelos pensados para investidores em diferentes estágios. Escolha o que combina com sua ambição."
      />
      <div className="mt-8 grid sm:mt-12 items-center gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.n}
            className={`rounded-[20px] border bg-card p-8 transition-all duration-300 ${
              p.f
                ? "border-border-primary shadow-[var(--shadow-glow)] lg:scale-105"
                : "border-border shadow-[var(--shadow-soft)]"
            }`}
          >
            {p.f && <Badge>Mais escolhido</Badge>}
            <h3 className="mt-4 font-display text-2xl font-extrabold">{p.n}</h3>
            <p className="text-xs text-muted-foreground">{p.s}</p>
            <p className="mt-5 font-display text-4xl font-extrabold text-primary">{p.p}</p>
            <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <Row k="Taxa de Franquia" v="Consulte" />
              <Row k="Capital de Giro" v="Consulte" />
              <Row k="Prazo de Retorno" v="18 meses" />
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-body-text">{p.d}</p>
            <CtaButton className="mt-6 w-full" variant={p.f ? "solid" : "outline"}>
              Quero saber mais
            </CtaButton>
          </div>
        ))}
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-semibold text-foreground">{v}</dd>
    </div>
  );
}

function Testimonials() {
  const items = [
    { n: "Marcelo A.", c: "Franqueado · Campinas/SP", i: store6 },
    { n: "Juliana R.", c: "Franqueada · Goiânia/GO", i: store2 },
    { n: "Ricardo L.", c: "Franqueado · Curitiba/PR", i: store3 },
  ];
  return (
    <section className="bg-card py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title={
            <>
              O QUE DIZEM NOSSOS <span className="text-primary">FRANQUEADOS</span>
            </>
          }
          subtitle="Experiências reais de quem transformou visão em negócio"
        />
        <div className="mt-8 grid sm:mt-12 items-center gap-6 md:grid-cols-3">
          {items.map((t, idx) => (
            <div
              key={t.n}
              className={`overflow-hidden rounded-[20px] border border-border bg-background shadow-[var(--shadow-soft)] ${
                idx === 1 ? "md:scale-105 md:shadow-[var(--shadow-card)]" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={t.i}
                  alt={`Depoimento de ${t.n}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/40 text-ink-foreground">
                  <PlayCircle className="h-12 w-12" />
                </span>
              </div>
              <div className="p-5">
                <p className="font-display font-bold">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.c}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Campaigns() {
  const pieces = [store5, store2, storeMain, store3];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <SectionHeading
        title={
          <>
            CAMPANHAS DE ALTÍSSIMO NÍVEL <br />
            <span className="text-primary">NÍVEL NACIONAL</span>
          </>
        }
      />
      <div className="mt-8 grid sm:mt-12 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pieces.map((p, i) => (
          <div key={i} className="overflow-hidden rounded-[20px] border border-border">
            <img
              src={p}
              alt={`Peça de campanha Óticas Orange ${i + 1}`}
              loading="lazy"
              width={1024}
              height={768}
              className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Urgency() {
  return (
    <section className="bg-ink py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="eyebrow">A decisão que muda tudo</p>
        <h2 className="mt-4 font-display text-2xl leading-tight font-extrabold text-ink-foreground sm:text-4xl">
          Enquanto você hesita, outro empreendedor está abrindo a Orange da sua cidade.
        </h2>
        <ul className="mt-8 space-y-4 text-left">
          {[
            <>
              O mercado óptico cresce <span className="text-primary">acima do PIB</span> todo ano. Os
              melhores pontos e bairros ficam com quem chega primeiro.
            </>,
            <>
              Cada mês que você adia é um mês de{" "}
              <span className="text-primary">margem líquida de ~20%</span> no bolso de outro dono.
            </>,
            <>
              Daqui a um ano, alguém vai estar lucrando com uma Óticas Orange na sua região.{" "}
              <span className="text-primary">Que seja você.</span>
            </>,
          ].map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-foreground/85">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-display text-lg font-extrabold text-ink-foreground">
          FALE COM O TIME DE EXPANSÃO
        </p>
        <p className="mt-1 text-sm text-ink-foreground/60">
          A conversa é gratuita. A oportunidade não vai durar para sempre.
        </p>
        <CtaButton className="mt-6">QUERO SER UM FRANQUEADO ORANGE</CtaButton>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-ink-foreground/60">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> Dados protegidos
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" /> Resposta em até 24h
          </span>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      t: "Preencha o Formulário",
      d: "Envie seus dados e nossa equipe de expansão entra em contato em até 24h para uma conversa sem compromisso.",
    },
    {
      t: "Conheça a Orange",
      d: "Apresentação completa do modelo de negócio, financeiro, suporte e visita a uma unidade em operação.",
    },
    {
      t: "Assine e Inaugure",
      d: "Definição do ponto, reforma com nosso padrão, treinamento da equipe e inauguração com suporte total.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
      <SectionHeading
        title={
          <>
            COMO <span className="text-primary">FUNCIONA</span>
          </>
        }
        subtitle="Do primeiro contato até a inauguração da sua loja"
      />
      <div className="mt-8 grid sm:mt-12 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.t}
            className="rounded-[20px] border border-border bg-card p-6 sm:p-7 shadow-[var(--shadow-soft)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display font-extrabold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-lg font-extrabold">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body-text">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Preciso ter experiência no setor ótico?",
      a: "Não. Você recebe treinamento completo, técnico e de gestão, antes mesmo da inauguração da sua loja.",
    },
    {
      q: "Quanto tempo até o retorno do investimento?",
      a: "O ponto de equilíbrio acontece em cerca de 6 meses e o retorno total do investimento em torno de 18 meses.",
    },
    {
      q: "Qual o suporte que recebo como franqueado?",
      a: "Suporte 360°: escolha do ponto comercial, layout da loja, treinamento de equipe, marketing nacional e acompanhamento contínuo.",
    },
    {
      q: "Posso ter mais de uma unidade?",
      a: "Sim. Vários franqueados da rede já operam como multi-unidade em suas regiões.",
    },
    {
      q: "Como funciona o estoque e fornecimento de produtos?",
      a: "Através da nossa central de compras, com acesso direto às marcas de grife e condições exclusivas para a rede.",
    },
  ];
  return (
    <section className="bg-card py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Tire suas dúvidas"
          title={
            <>
              Perguntas <span className="text-primary">Frequentes</span>
            </>
          }
        />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left font-display font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-body-text">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-2">
        <Logo />
        <div className="sm:text-right">
          <p className="font-display text-sm font-bold text-ink-foreground">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-foreground/60">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 px-5 text-center text-xs text-ink-foreground/40">
        © 2026 Óticas Orange. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      <button
        type="button"
        onClick={scrollToForm}
        className="w-full rounded-[50px] bg-primary py-3 font-display text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
      >
        Quero ser Franqueado
      </button>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Why />
        <Gallery />
        <Segment />
        <OwnBrands />
        <Lenses />
        <Grifes />
        <Pricing />
        <Testimonials />
        <Campaigns />
        <Urgency />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
