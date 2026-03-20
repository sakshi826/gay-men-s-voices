import { useState, useEffect, useRef } from "react";
import { stories, Story } from "@/data/stories";
import { ArrowLeft } from "lucide-react";

const RAINBOW = ["#e40303", "#ff8c00", "#ffed00", "#008026", "#004dff", "#750787"];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── HERO ─── */
function Hero({ onStart }: { onStart: () => void }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#f8f4ff" }}
    >
      {/* Rainbow bar */}
      <div className="absolute top-0 left-0 right-0 flex h-[6px]">
        {RAINBOW.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-25 blur-[100px] animate-[float_14s_ease-in-out_infinite]" style={{ background: "#7c93f0" }} />
        <div className="absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full opacity-20 blur-[90px] animate-[float_18s_ease-in-out_infinite_reverse]" style={{ background: "#6366f1" }} />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full opacity-20 blur-[80px] animate-[float_16s_ease-in-out_infinite_2s]" style={{ background: "#14b8a6" }} />
        <div className="absolute -bottom-16 right-1/3 h-[280px] w-[280px] rounded-full opacity-15 blur-[70px] animate-[float_20s_ease-in-out_infinite_4s]" style={{ background: "#8b5cf6" }} />
      </div>

      <div
        className="relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          filter: visible ? "blur(0)" : "blur(4px)",
        }}
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium tracking-wide"
          style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)", color: "#5b4a8a" }}>
          <span className="flex gap-1">
            {RAINBOW.map((c) => <span key={c} className="inline-block h-2 w-2 rounded-full" style={{ background: c }} />)}
          </span>
          Gay Men's Voices
        </div>

        {/* Title */}
        <h1
          className="mb-6 leading-[1.08] tracking-tight"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.4rem, 6vw, 4.2rem)" }}
        >
          Real Stories of{" "}
          <span className="italic" style={{ color: "#4361ee" }}>Gay Men</span>
        </h1>

        {/* Subtitle */}
        <p className="mb-2 max-w-md text-base" style={{ fontFamily: "'DM Sans', sans-serif", color: "#5b4a8a", lineHeight: 1.7 }}>
          Honest, unfiltered accounts of identity, courage, and becoming.
        </p>
        <p className="mb-10 max-w-sm text-sm italic" style={{ color: "#8a7fb0" }}>
          "The only story that matters is the one you finally tell yourself."
        </p>

        {/* CTA */}
        <button
          onClick={onStart}
          className="relative rounded-lg px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 active:scale-[0.97]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            background: "#4361ee",
            boxShadow: "4px 4px 0 #2d3a8c",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "6px 6px 0 #2d3a8c"; e.currentTarget.style.transform = "translate(-2px,-2px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "4px 4px 0 #2d3a8c"; e.currentTarget.style.transform = "translate(0,0)"; }}
        >
          Read the Stories
        </button>
      </div>
    </section>
  );
}

/* ─── STORY CARD ─── */
function StoryCard({ story, index, onClick }: { story: Story; index: number; onClick: () => void }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="group cursor-pointer rounded-xl bg-white transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        filter: visible ? "blur(0)" : "blur(3px)",
        transitionDelay: `${index * 80}ms`,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(6px)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
      }}
    >
      <div className="flex items-center gap-4 p-4">
        {/* Color stripe */}
        <div className="h-16 w-[6px] flex-shrink-0 rounded-full" style={{ background: story.color.stripe }} />

        {/* Avatar */}
        <img
          src={story.photo}
          alt={story.name}
          className="h-[42px] w-[42px] flex-shrink-0 rounded-full object-cover"
          style={{ border: `2px solid ${story.color.stripe}22` }}
        />

        {/* Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-[0.95rem]" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a2e" }}>
              {story.name}, {story.age}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[0.7rem] font-semibold"
              style={{ background: story.color.tagBg, color: story.color.tagText }}
            >
              {story.identity}
            </span>
          </div>
          <p
            className="truncate text-[0.85rem] italic"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b6b8a" }}
          >
            "{story.quote}"
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── STORIES LIST ─── */
function StoriesList({ onSelect, onBack }: { onSelect: (i: number) => void; onBack: () => void }) {
  const titleReveal = useScrollReveal();
  return (
    <section className="min-h-screen px-4 py-16" style={{ background: "#f8f4ff" }}>
      <div className="mx-auto max-w-[680px]">
        {/* Back to hero */}
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97]"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#4361ee", background: "#eaefff" }}
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div
          ref={titleReveal.ref}
          className="mb-10 text-center transition-all duration-600"
          style={{
            opacity: titleReveal.visible ? 1 : 0,
            transform: titleReveal.visible ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <h2
            className="mb-2 text-2xl tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a2e" }}
          >
            Their Stories
          </h2>
          <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "#8a7fb0" }}>
            Eight men. Eight truths. Tap to read.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {stories.map((s, i) => (
            <StoryCard key={s.name} story={s} index={i} onClick={() => onSelect(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STORY DETAIL ─── */
function StoryDetail({ story, onBack }: { story: Story; onBack: () => void }) {
  const { ref, visible } = useScrollReveal();
  return (
    <section className="min-h-screen px-4 py-8" style={{ background: "#f8f4ff" }}>
      <div ref={ref} className="mx-auto max-w-[680px]">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: story.color.stripe,
            background: story.color.tagBg,
          }}
        >
          <ArrowLeft size={16} />
          Back to all stories
        </button>

        {/* Rainbow band */}
        <div className="mb-8 h-[3px] w-full rounded-full" style={{
          background: `linear-gradient(90deg, ${RAINBOW.join(", ")})`,
        }} />

        <div
          className="transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            filter: visible ? "blur(0)" : "blur(3px)",
          }}
        >
          {/* Photo */}
          <img
            src={story.photo}
            alt={story.name}
            className="mb-8 w-full rounded-2xl object-cover"
            style={{ maxHeight: "480px" }}
          />

          {/* Name + badge */}
          <div className="mb-8 flex items-center gap-3">
            <h2
              className="text-3xl"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a2e" }}
            >
              {story.name}, {story.age}
            </h2>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: story.color.tagBg, color: story.color.tagText }}
            >
              {story.identity}
            </span>
          </div>

          {/* Body */}
          <div className="mb-10 space-y-5">
            {story.story.map((p, i) => (
              <p
                key={i}
                className="leading-[1.85]"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.97rem", color: "#2a2a3e" }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Pull quote */}
          <blockquote
            className="mb-10 rounded-xl p-6"
            style={{
              borderLeft: `4px solid ${story.color.border}`,
              background: story.color.hlBg,
            }}
          >
            <p
              className="text-lg italic leading-relaxed"
              style={{ fontFamily: "'DM Serif Display', serif", color: "#1a1a2e" }}
            >
              "{story.highlight}"
            </p>
          </blockquote>

          {/* Takeaway */}
          <div
            className="mb-10 rounded-xl p-6"
            style={{
              background: story.color.takeBg,
              border: `1px solid ${story.color.border}33`,
            }}
          >
            <h3
              className="mb-3 text-sm font-semibold uppercase tracking-wider"
              style={{ fontFamily: "'DM Sans', sans-serif", color: story.color.tagText }}
            >
              Something to sit with
            </h3>
            <p
              className="leading-[1.8]"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#3a3a4e" }}
            >
              {story.takeaway}
            </p>
          </div>

          {/* Bottom back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#fff",
              background: story.color.stripe,
              boxShadow: `3px 3px 0 ${story.color.stripe}66`,
            }}
          >
            <ArrowLeft size={16} />
            Back to all stories
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN VIEW CONTROLLER ─── */
type View = { type: "hero" } | { type: "list" } | { type: "detail"; index: number };

export default function Index() {
  const [view, setView] = useState<View>({ type: "hero" });
  const [transitioning, setTransitioning] = useState(false);

  const transition = (next: View) => {
    setTransitioning(true);
    setTimeout(() => {
      setView(next);
      window.scrollTo({ top: 0 });
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  };

  return (
    <div
      className="transition-all duration-300"
      style={{
        opacity: transitioning ? 0 : 1,
        transform: transitioning ? "translateY(8px)" : "translateY(0)",
      }}
    >
      {view.type === "hero" && <Hero onStart={() => transition({ type: "list" })} />}
      {view.type === "list" && <StoriesList onSelect={(i) => transition({ type: "detail", index: i })} />}
      {view.type === "detail" && (
        <StoryDetail
          story={stories[view.index]}
          onBack={() => transition({ type: "list" })}
        />
      )}
    </div>
  );
}
