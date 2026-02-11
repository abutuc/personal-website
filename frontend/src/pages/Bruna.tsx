import { useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

type Phase = "asking" | "angryOverlay" | "angry" | "accepted";

export default function Bruna() {
  const name = useMemo(() => {
    const qp = new URLSearchParams(window.location.search);
    return qp.get("name")?.trim() || "Bruna";
  }, []);

  const [phase, setPhase] = useState<Phase>("asking");
  const [noDodges, setNoDodges] = useState(0);

  const arenaRef = useRef<HTMLDivElement | null>(null);

  // Slightly smaller "No" on phones; bigger on desktop
  const NO_W = 170;
  const NO_H = 58;

  const [noPos, setNoPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [noReady, setNoReady] = useState(false);

  const noCooldownRef = useRef(false);

  const kissGif =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXdwZ2Uxd2diangwbmkzbG5vYzI0NXZrMml0MG1ocmE5MmhlZnZwbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytu2GUYbvhz7zShGwS/giphy.gif";
  const angryGif =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczM4bmljczA0NHY2M252b3ZzeXdkNTMzejF0NXg2YmhleGc1cmcydSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OHRF8LZis06OiPDJby/giphy.gif";

  const DODGES_BEFORE_ANGRY = 5;

  // When true: show side-by-side layout (first time only)
  const isInitialSideBySide = phase === "asking" && noDodges === 0;

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function ensureInitialNoPos() {
    const arena = arenaRef.current;
    if (!arena) return;

    const rect = arena.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = Math.max(
      12,
      Math.min(rect.width - NO_W - 12, Math.floor(centerX + 80)),
    );
    const y = Math.max(
      12,
      Math.min(rect.height - NO_H - 12, Math.floor(centerY + 30)),
    );

    setNoPos({ x, y });
    setNoReady(true);
  }

  function moveNoButtonSmooth() {
    const arena = arenaRef.current;
    if (!arena) return;

    const rect = arena.getBoundingClientRect();
    const pad = 14;

    const maxX = Math.max(pad, Math.floor(rect.width - NO_W - pad));
    const maxY = Math.max(pad, Math.floor(rect.height - NO_H - pad));

    let x = noPos.x;
    let y = noPos.y;

    for (let i = 0; i < 8; i++) {
      const nx = randomInt(pad, maxX);
      const ny = randomInt(pad, maxY);

      const dx = nx - noPos.x;
      const dy = ny - noPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 120) {
        x = nx;
        y = ny;
        break;
      }
    }

    setNoPos({ x, y });
  }

  function handleNoAttempt() {
    if (phase === "accepted" || phase === "angry" || phase === "angryOverlay")
      return;
    if (noCooldownRef.current) return;

    noCooldownRef.current = true;

    // On first touch/hover on "No", guarantee it has a starting position
    if (!noReady) ensureInitialNoPos();

    setNoDodges((d) => {
      const next = d + 1;

      if (next >= DODGES_BEFORE_ANGRY) {
        setPhase("angryOverlay");
        window.setTimeout(() => setPhase("angry"), 3500);
      }

      return next;
    });

    moveNoButtonSmooth();

    window.setTimeout(() => {
      noCooldownRef.current = false;
    }, 220);
  }

  async function handleYes() {
    if (phase === "accepted") return;

    setPhase("accepted");

    try {
      await sendDecisionEmailJS({
        decision: "YES",
        fromName: name,
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-pink-100 via-rose-50 to-red-100 px-3 py-6 sm:px-6">
      <div className="relative w-full max-w-[980px] rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white p-5 sm:p-10 overflow-hidden">
        <FloatingHearts />

        <div className="relative z-10">
          <header className="text-center">
            <h1 className="mt-2 text-3xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {name}, will you be my valentine?
            </h1>
          </header>

          <div
            ref={arenaRef}
            className="relative mt-8 sm:mt-10 mx-auto w-full max-w-3xl h-[260px] xs:h-[300px] sm:h-[380px]"
            onMouseEnter={() => {
              if (!noReady) ensureInitialNoPos();
            }}
            onTouchStart={() => {
              if (!noReady) ensureInitialNoPos();
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-white/60 border border-white shadow-inner overflow-hidden" />

            {phase === "angryOverlay" && (
              <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center text-center px-6 bg-white/40 backdrop-blur-sm">
                <img
                  src={angryGif}
                  alt="Angry cat"
                  className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-2xl shadow-md"
                />
                <p className="mt-5 text-lg sm:text-2xl font-extrabold text-gray-900">
                  Ok stop joking with me 😾
                </p>
              </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center">
              {/* ASKING */}
              {phase === "asking" && (
                <>
                  {/* 1) Initial side-by-side */}
                  {isInitialSideBySide ? (
                    <div className="relative z-10 flex flex-col xs:flex-row items-center justify-center gap-4 xs:gap-6">
                      <button
                        onClick={handleYes}
                        className="px-10 py-4 rounded-full font-extrabold text-2xl sm:text-3xl shadow-lg bg-emerald-500 text-white hover:scale-[1.03] active:scale-[0.98] transition"
                      >
                        Yes 💖
                      </button>

                      <button
                        type="button"
                        onPointerEnter={handleNoAttempt}
                        onPointerDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleNoAttempt();
                        }}
                        className="px-10 py-4 rounded-full font-extrabold text-2xl sm:text-3xl shadow-lg bg-gray-200 text-gray-800 select-none hover:scale-[1.02] active:scale-[0.98] transition"
                        aria-label="No (not really)"
                        title="Nice try 😅"
                      >
                        No 🙃
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* 2) After first dodge: Yes centered */}
                      <button
                        onClick={handleYes}
                        className="relative z-10 px-10 sm:px-12 py-4 sm:py-5 rounded-full font-extrabold text-2xl sm:text-3xl shadow-lg bg-emerald-500 text-white hover:scale-[1.03] active:scale-[0.98] transition"
                      >
                        Yes 💖
                      </button>

                      {/* And No becomes absolute + dodgy */}
                      {noReady && (
                        <button
                          type="button"
                          onPointerEnter={handleNoAttempt}
                          onPointerDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleNoAttempt();
                          }}
                          style={{
                            position: "absolute",
                            left: noPos.x,
                            top: noPos.y,
                            width: NO_W,
                            height: NO_H,
                            transition:
                              "left 220ms ease, top 220ms ease, transform 220ms ease",
                            transform: "translateZ(0)",
                          }}
                          className="rounded-full font-extrabold text-2xl sm:text-3xl shadow-lg bg-gray-200 text-gray-800 select-none"
                          aria-label="No (not really)"
                          title="Nice try 😅"
                        >
                          No 🙃
                        </button>
                      )}
                    </>
                  )}
                </>
              )}

              {/* ANGRY: only Yes */}
              {phase === "angry" && (
                <button
                  onClick={handleYes}
                  className="relative z-10 px-10 sm:px-12 py-4 sm:py-5 rounded-full font-extrabold text-2xl sm:text-3xl shadow-lg bg-emerald-500 text-white hover:scale-[1.03] active:scale-[0.98] transition"
                >
                  Yes 💖
                </button>
              )}

              {/* ACCEPTED */}
              {phase === "accepted" && (
                <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <img
                    src={kissGif}
                    alt="Cat kiss"
                    className="w-44 h-44 sm:w-60 sm:h-60 object-cover rounded-2xl shadow-md"
                  />
                  <p className="mt-4 sm:mt-5 text-2xl sm:text-4xl font-extrabold text-gray-900">
                    Yay! O resto vai por dm 💌
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 14 + Math.random() * 22,
        delay: Math.random() * 2.5,
        duration: 3 + Math.random() * 3,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-[floatUp_6s_ease-in-out_infinite]"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
          }}
        >
          💗
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}

async function sendDecisionEmailJS(params: {
  decision: "YES" | "NO";
  fromName: string;
}) {
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;

  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error(
      "Missing EmailJS env vars (PUBLIC_KEY / SERVICE_ID / TEMPLATE_ID).",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      decision: params.decision,
      fromName: params.fromName,
      timestamp: new Date().toISOString(),
    },
    { publicKey: PUBLIC_KEY },
  );
}
