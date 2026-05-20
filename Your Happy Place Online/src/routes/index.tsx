import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import banner from "@/assets/otty-banner.png";
import circle from "@/assets/otty-circle.png";
import family from "@/assets/otty-family.png";
import logo from "@/assets/otty-logo.png";
import island from "@/assets/otty-island.png";
import privacyImg from "@/assets/otty-privacy.png";
import motherPhone from "@/assets/otty-mother-phone.png";
import ottyHappy from "@/assets/otty-happy.png";
import dentist from "@/assets/otty-dentist.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Otty, brush together, grow together." },
      {
        name: "description",
        content:
          "Otty turns toothbrushing into a shared daily moment between your child, parents and grandparents. End the nightly battle.",
      },
      { property: "og:title", content: "Otty, brush together, grow together." },
      {
        property: "og:description",
        content:
          "End the nightly toothbrushing battle. Connect your child to grandparents through a shared island that grows when everyone brushes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: OttyLanding,
});

const RED = "#E8192C";
const TURQ = "#00B4D8";
const CTA_LABEL = "Join the Waitlist · Get Early Access";

function OttyLanding() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Nav />
      <Hero />
      <Bridge />
      <Problem />
      <Solution />
      <Island />
      <Experts />
      <Privacy />
      <Reassurance />
      <Connections />
      <Pricing />
      <Quotes />
      <Signup />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Otty" className="h-10 w-10 object-contain" />
          <span className="font-display text-2xl font-extrabold tracking-tight" style={{ color: RED }}>Otty</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1A1A1A]">
          <a href="#problem" className="hover:opacity-70">The Problem</a>
          <a href="#solution" className="hover:opacity-70">How it works</a>
          <a href="#pricing" className="hover:opacity-70">Pricing</a>
          <a href="#signup" className="hover:opacity-70">Waitlist</a>
          <Link to="/team" className="hover:opacity-70">The team behind Otty</Link>
        </div>
        <a
          href="#signup"
          className="rounded-full px-3 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-bold shadow-md hover:scale-105 transition whitespace-nowrap"
          style={{ backgroundColor: RED }}
        >
          <span className="md:hidden">Join Waitlist</span>
          <span className="hidden md:inline">{CTA_LABEL}</span>
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-20 pb-10 md:pb-14 text-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-[#1A1A1A]">
          The toothbrushing app that <span style={{ color: TURQ }}>connects your child</span> to the people they love.
        </h1>
        <p className="mt-4 text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
          For kids ages 6–12
        </p>
        <p className="mt-3 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#1A1A1A]/75">
          Your child brushes. Their island grows. Brush together and it grows faster.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-full px-7 py-4 text-white font-bold text-base md:text-lg shadow-xl hover:scale-105 transition"
            style={{ backgroundColor: RED }}
          >
            {CTA_LABEL}
          </a>
        </div>
        <p className="mt-4 text-sm text-[#1A1A1A]/60">
          Backed by 2 years of research with families and dental experts across Belgium
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#F4FBFD]">
          <img
            src={banner}
            alt="Your child brushing with Otty"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  const cols = [
    {
      label: "Healthy habits",
      text: "A consistent 2-min ritual, compliance that feels like a win, not a chore.",
    },
    {
      label: "Trusted connection",
      text: "Bridges distance and busy schedules. Everyone in their circle becomes a quest partner in your child's daily life.",
    },
    {
      label: "Gamification",
      text: "Shared quests, rewards, and adventures that make every session feel like progress in a bigger story.",
    },
  ];
  return (
    <section className="bg-white border-y-4" style={{ borderColor: RED }}>
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cols.map((c) => (
            <div key={c.label} className="text-center md:text-left">
              <div className="text-[10px] font-bold tracking-widest uppercase" style={{ color: RED }}>
                {c.label}
              </div>
              <p className="mt-2 text-base md:text-lg leading-relaxed text-[#1A1A1A]/80">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="py-24 bg-[#F4FBFD]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Every night, the same fight
        </h2>
        <p className="mt-6 text-xl text-[#1A1A1A]/75 max-w-2xl mx-auto">
          You're exhausted. Your child has decided brushing is not happening tonight. And somehow it becomes the battle nobody wins.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-3xl mx-auto">
          {[
            { n: "48%", t: "of children lie occasionally about brushing teeth" },
            { n: "66%", t: "of children are not supervised twice a day when brushing" },
          ].map((s) => (
            <div key={s.n} className="bg-white rounded-3xl p-8 shadow-md">
              <div className="font-display text-5xl font-bold" style={{ color: TURQ }}>{s.n}</div>
              <p className="mt-3 text-[#1A1A1A]/75">{s.t}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg md:text-xl max-w-3xl mx-auto">
          <span className="font-bold">The truth:</span> Bad brushing isn't a child problem, it's an
          engagement problem, and we set out to fix it.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  const steps = [
    {
      title: "Your child brushes, the island grows",
      body: "Every time your child brushes, a new tree appears, a house gets built, a waterfall starts flowing. The island reacts to every single brush. Your child sees it happen in real time.",
    },
    {
      title: "Grandma brushes too, and magic happens",
      body: "When grandma brushes in her house, even 200km away, something new appears in your child's island. They play the same game from different places. They need each other to make it grow.",
    },
    {
      title: "You see everything. Without asking once.",
      body: "The app uses your phone camera to detect brushing quality, on the device, nothing uploaded. You see how long your child brushed, how well your child covered every tooth, and whether grandma brushed too. No guessing. No fighting. Just peace of mind.",
    },
  ];
  return (
    <section id="solution" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            What if brushing was something your child <span style={{ color: TURQ }}>looked forward to</span>?
          </h2>
        </div>
        <div className="mt-10 mb-12">
          <img src={circle} alt="Family brushing together" className="w-full h-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col items-start">
              <div
                className="h-12 w-12 rounded-full grid place-items-center text-white font-display text-xl font-bold"
                style={{ backgroundColor: TURQ }}
              >
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[#1A1A1A]/75">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#signup"
            className="inline-flex rounded-full px-7 py-4 text-white font-bold shadow-lg hover:scale-105 transition"
            style={{ backgroundColor: RED }}
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>
    </section>
  );
}

function Island() {
  const bullets = [
    "Brush, it grows",
    "Brush together, it grows faster",
    "Spend credits, build it your way",
    "Always something new to discover",
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <img src={island} alt="The Otty island" className="w-full" />
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
            The island
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
            Built one brush <span style={{ color: TURQ }}>at a time</span>
          </h2>
          <ul className="mt-5 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 items-start text-base md:text-lg">
                <span
                  className="mt-2 shrink-0 h-2 w-2 rounded-full"
                  style={{ backgroundColor: TURQ }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl p-5 bg-[#F4FBFD] border-l-4" style={{ borderColor: RED }}>
            <p className="font-display text-base md:text-lg font-bold leading-snug">
              You decide when the fun begins.
            </p>
            <p className="mt-2 text-sm md:text-base text-[#1A1A1A]/80 leading-relaxed">
              Your child earns credits by brushing, but can only spend them when you unlock building time.
              Brushing stays a two-minute habit. Not a gateway to more screen time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reassurance() {
  return (
    <section className="py-24 bg-[#F4FBFD]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={motherPhone}
          alt="A mother smiling at the Otty app showing her child's brushing summary"
          className="w-full rounded-3xl shadow-2xl object-cover"
        />
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
            For mom
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
            No more <span style={{ color: TURQ }}>guessing</span>.
          </h2>
          <p className="mt-5 text-lg text-[#1A1A1A]/75 leading-relaxed">
            No more wondering if your child really brushed. No more arguments at the bathroom door.
            Open Otty and see exactly how your child brushed today, calmly and clearly.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "See every session, coverage and time at a glance",
              "Get a gentle nudge when a brushing session was missed",
              "You choose the moment your child can spend new credits to build",
              "Sleep knowing your child's teeth are actually being cared for",
            ].map((t) => (
              <div key={t} className="flex gap-3 items-start">
                <span className="mt-1 shrink-0 h-5 w-5 rounded-full grid place-items-center text-white text-xs font-bold" style={{ backgroundColor: TURQ }}>✓</span>
                <p className="text-[#1A1A1A]/85">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-lg font-semibold" style={{ color: RED }}>
            Peace of mind, every night.
          </p>
        </div>
      </div>
    </section>
  );
}

function Connections() {
  const items = [
    { t: "Grandparents", d: "Purpose across distance" },
    { t: "Parents", d: "No more nagging" },
    {
      t: "Friends and siblings",
      d: "Social motivation, healthy competition, shared streaks, and the joy of brushing together.",
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img src={family} alt="Three generations" className="w-full rounded-3xl shadow-xl object-cover" />
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Connect your child to <span style={{ color: TURQ }}>everyone</span> who matters
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map((i) => (
              <div key={i.t} className="bg-[#F4FBFD] rounded-2xl p-5 border border-black/5">
                <div className="font-display text-lg font-bold" style={{ color: TURQ }}>{i.t}</div>
                <div className="text-[#1A1A1A]/75">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const plans = [
    {
      name: "STARTER",
      m: "€3.99",
      y: "€39.99",
      featured: false,
      features: [
        "1 child profile, 2 parents, 1 grandparent",
        "Full island game",
        "AI brushing detection",
        "Family photo sharing",
      ],
    },
    {
      name: "ISLAND+",
      m: "€4.99",
      y: "€49.99",
      featured: true,
      features: [
        "3 child profiles, 2 parents, 2 grandparents",
        "Everything in Starter",
        "Challenges and reports",
      ],
    },
    {
      name: "ISLAND+ MAX",
      m: "€5.99",
      y: "€59.99",
      featured: false,
      features: [
        "5 child profiles, 4 parents, 3 grandparents",
        "Everything in Island+",
        "Grandparent health mode",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-24 bg-[#F4FBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center">
          Simple pricing. From €3.99/month.
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white shadow-sm border border-black/10 p-1">
            {(["monthly", "yearly"] as const).map((opt) => {
              const active = billing === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setBilling(opt)}
                  className="px-5 py-2 rounded-full text-sm font-bold transition"
                  style={{
                    backgroundColor: active ? TURQ : "transparent",
                    color: active ? "white" : "#1A1A1A",
                  }}
                >
                  {opt === "monthly" ? "Monthly" : "Yearly"}
                  {opt === "yearly" && (
                    <span className="ml-2 text-[10px] font-bold uppercase tracking-wider opacity-80">
                      Save ~16%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => {
            const price = billing === "monthly" ? p.m : p.y;
            const suffix = billing === "monthly" ? "/month" : "/year";
            return (
              <div
                key={p.name}
                className={`rounded-3xl p-8 border-2 flex flex-col bg-white ${
                  p.featured ? "shadow-2xl scale-[1.02]" : "shadow-md"
                }`}
                style={{ borderColor: p.featured ? TURQ : "rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  {p.featured && (
                    <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ backgroundColor: TURQ }}>
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="mt-5">
                  <div className="font-display text-4xl font-bold">
                    {price}
                    <span className="text-base font-normal text-[#1A1A1A]/60">{suffix}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[#1A1A1A]/80">
                      <span style={{ color: TURQ }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className="mt-8 inline-flex justify-center rounded-full px-6 py-3 font-bold text-white hover:scale-105 transition text-center"
                  style={{ backgroundColor: p.featured ? RED : "#1A1A1A" }}
                >
                  {CTA_LABEL}
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-[#1A1A1A]/75">
          <span>✓ 14-day free trial, no credit card</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}

function Quotes() {
  const qs = [
    {
      quote:
        "I like the idea that we are looking out for each other. As a grandparent living in another city, I would like to connect more with my grandchild.",
      who: "Helga, grandma (63)",
    },
    {
      quote:
        "It would be great if the daily conflict of brushing would turn into something easy and meaningful.",
      who: "Yasmin, mom (32)",
    },
    {
      quote: "My mom doesn't think I can brush my teeth well by myself, she is wrong!",
      who: "Max, age 8",
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center">
          Real voices from our research
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {qs.map((q, i) => (
            <blockquote key={i} className="bg-[#F4FBFD] rounded-3xl p-7 border-l-4" style={{ borderColor: TURQ }}>
              <p className="text-lg leading-relaxed">"{q.quote}"</p>
              <footer className="mt-4 text-sm font-bold" style={{ color: TURQ }}>{q.who}</footer>
            </blockquote>
          ))}
        </div>
        <p className="text-center mt-8 text-[#1A1A1A]/60 italic">
          From more than 100 interviews with parents and grandparents in Belgium and the Netherlands
        </p>
      </div>
    </section>
  );
}

function Experts() {
  return (
    <section className="py-20 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={dentist}
          alt="Dental expert collaborating with Otty"
          className="w-full rounded-3xl shadow-2xl object-cover"
        />
        <div>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
            Expert-backed
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
            Built with the people who know <span style={{ color: TURQ }}>oral health</span> best.
          </h2>
          <p className="mt-5 text-lg text-white/80 leading-relaxed">
            Otty is developed in close collaboration with leading academics, gerodontologists,
            dentists, and oral health researchers across Belgium, the Netherlands, and the United States.
          </p>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="py-24 bg-[#F4FBFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TURQ }}>
            Private by design
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Detected on-device. Never recorded.
          </h2>
          <p className="mt-5 text-lg text-[#1A1A1A]/75 leading-relaxed">
            The camera only sees what the AI needs to coach the brushstroke. Faces are anonymised,
            the bathroom is blurred in real time, and no raw video ever leaves the phone.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={privacyImg}
              alt="Child brushing with playful AR filter overlay"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <div className="space-y-5">
            {[
              {
                t: "On-device AI",
                d: "Brushing is detected locally. Nothing is uploaded, nothing is stored.",
              },
              {
                t: "Faces anonymised, background blurred",
                d: "The bathroom and your child's face are obscured in real time.",
              },
              {
                t: "Parent-controlled filters",
                d: "You choose what your child sees. Pick from playful AR filters (like the superhero mask) and adjust strictness, so you trust the experience 100%.",
              },
              {
                t: "GDPR safe by default",
                d: "Built in Europe, audited for compliance, designed around your family's privacy.",
              },
            ].map((f) => (
              <div key={f.t} className="bg-white rounded-2xl p-5 border border-black/5 flex gap-4">
                <div
                  className="shrink-0 h-10 w-10 rounded-full grid place-items-center text-white font-bold"
                  style={{ backgroundColor: TURQ }}
                >
                  ✓
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{f.t}</h3>
                  <p className="text-sm text-[#1A1A1A]/75 mt-1 leading-relaxed">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Signup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "957dceff-04e4-48f5-94cd-5a6246d3b4ad",
          email,
          subject: "🎉 New Otty Waitlist Signup!",
          message: `Email: ${email}\nTimestamp: ${new Date().toISOString()}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Welcome to Otty! 🦷", {
          description: "You're on the waitlist! We'll be in touch soon.",
        });
        setSubmitted(true);
        setEmail("");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          <img src={ottyHappy} alt="Otty mascot" className="mx-auto h-32 w-32 object-contain" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Ready to win the nightly battle?</h2>
          <p className="mt-4 text-lg text-[#1A1A1A]/75">Join the waitlist for early access.</p>
          <p className="mt-2 text-base font-semibold" style={{ color: RED }}>
            The first 500 sign-ups get one month free at launch.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 bg-[#F4FBFD] rounded-3xl p-10 text-center shadow-xl">
            <p className="text-xl font-bold">Welcome!</p>
            <p className="mt-2 text-[#1A1A1A]/75">We'll be in touch with next steps.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 bg-[#F4FBFD] rounded-3xl p-8 shadow-xl space-y-5">
            <div>
              <label className="block text-sm font-bold mb-1.5">Email address</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-black/10 px-4 py-3 focus:outline-none focus:border-[#00B4D8] bg-white"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full px-6 py-4 text-white text-lg font-bold shadow-lg transition hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: RED }}
            >
              {isSubmitting ? "Joining..." : CTA_LABEL}
            </button>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs font-semibold text-[#1A1A1A]/70 pt-2">
              <span>✓ 14-day free trial when we launch</span>
              <span>✓ No credit card required</span>
              <span>✓ Early access to Otty</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-[#1A1A1A]/70">
        <div className="flex items-center gap-3 flex-wrap">
          <img src={logo} alt="Otty" className="h-8 w-8" />
          <span className="font-display font-bold text-base" style={{ color: RED }}>Otty</span>
          <span>·</span>
          <a href="mailto:otty.connect@gmail.com" className="hover:underline">otty.connect@gmail.com</a>
          <span>·</span>
          <span>Antwerp, Belgium</span>
          <span>·</span>
          <Link to="/team" className="hover:underline" style={{ color: TURQ }}>The team behind Otty</Link>
        </div>
        <div className="flex gap-5">
          <span>© 2026 Otty</span>
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
}
