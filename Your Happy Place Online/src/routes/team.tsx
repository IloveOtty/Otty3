import { createFileRoute, Link } from "@tanstack/react-router";
import teamPhoto from "@/assets/otty-team.jpeg";
import logo from "@/assets/otty-logo.png";

const RED = "#E8192C";
const TURQ = "#00B4D8";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The team behind Otty" },
      {
        name: "description",
        content:
          "Meet the four students from Antwerp Management School building Otty after two years of research with families and dentists.",
      },
      { property: "og:title", content: "The team behind Otty" },
      {
        property: "og:description",
        content: "Four students. Two years of research. One mission: end the nightly brushing battle.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Otty" className="h-9 w-9 object-contain" />
            <span className="font-display text-2xl font-bold" style={{ color: RED }}>Otty</span>
          </Link>
          <Link to="/" className="text-sm font-semibold hover:opacity-70">← Back to home</Link>
        </div>
      </nav>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
            Founding team
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold">
            The team behind Otty
          </h1>
          <p className="mt-6 text-lg text-[#1A1A1A]/75 max-w-2xl mx-auto leading-relaxed">
            We are four founders from Antwerp Management School. Before building anything, we
            spent two years interviewing grandparents, parents, children, and dentists across
            Belgium and the Netherlands. Otty exists because of what we heard, not what we assumed.
          </p>
          <p className="mt-5 text-lg text-[#1A1A1A]/75 max-w-2xl mx-auto leading-relaxed">
            Our goal is to bring Otty to market and make a positive impact on oral hygiene across
            the entire world with our product. We come from different backgrounds and different
            countries, united by a single question: how can we improve oral hygiene worldwide?
          </p>
          <img
            src={teamPhoto}
            alt="The Otty founding team"
            className="mx-auto mt-12 rounded-3xl shadow-xl w-full h-auto"
          />
          <div className="mt-10 inline-flex flex-wrap justify-center gap-3">
            {[
              "Wout Verschueren",
              "Baptiste Depauw",
              "Amanda Schlytter-Henrichsen",
              "Cis Dheedene",
            ].map((n) => (
              <span
                key={n}
                className="px-5 py-2 rounded-full bg-[#F4FBFD] font-display font-bold"
                style={{ color: TURQ }}
              >
                {n}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#1A1A1A]/60">Based in Antwerp, Belgium</p>
        </div>
      </section>
    </div>
  );
}
