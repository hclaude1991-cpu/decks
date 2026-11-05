/* ===== EDIT HERE: prices, packages and contact. Everything on the page reads from this block. ===== */
const CONFIG = {
  contactEmail: "ben4hand@gmail.com",
  contactSubject: "Let's talk about my Instagram plan",
  tiers: [
    {
      id: "guide", name: "Guide", role: "Ben coaches. You create.", color: "#5ac8fa",
      price: "$500", unit: "/ month", setup: "One-time setup: $750",
      bullets: ["Daily briefing in your inbox", "Your posts rated and explained", "A monthly 60-minute strategy call"],
      detail: {
        title: "Guide",
        intro: "Best if you are comfortable filming and editing on your phone and want a coach in your corner.",
        list: [
          "<b>Daily briefing.</b> What is winning in dentistry and medicine, and why.",
          "<b>Your posts, rated.</b> Up to 8 of your reels each month, with one clear thing to change next time.",
          "<b>Monthly strategy call.</b> 60 minutes to plan the month and answer questions.",
          "<b>Reply any time.</b> Answer an email to ask a question or suggest an account to follow.",
          "<b>Dental flags.</b> A quiet warning on anything that may need a second look."
        ],
        note: "You film and edit. Our editing setup is available as an add-on."
      }
    },
    {
      id: "copilot", name: "Co-Pilot", role: "Ben and you make it together.", color: "#4fe0d6",
      price: "$1,500", unit: "/ month", setup: "One-time setup: $1,000",
      bullets: ["Everything in Guide", "Weekly 30-minute check-in", "8 scripts and 6 finished reels a month"],
      detail: {
        title: "Co-Pilot",
        intro: "Best if you want real hand-holding while you build the habit.",
        list: [
          "<b>Everything in Guide.</b>",
          "<b>Weekly check-in.</b> 30 minutes, every week, to plan and review.",
          "<b>8 scripts a month.</b> Written in your voice, built from formats that work.",
          "<b>6 edited reels a month.</b> You film, we cut, caption and polish.",
          "<b>Text support.</b> Quick answers between check-ins.",
          "<b>Editing setup included.</b> A Claude-powered editing helper, so you learn to edit your own."
        ],
        note: "Extra reels and scripts are available at the add-on rates."
      }
    },
    {
      id: "dwy", name: "Done-With-You", role: "You talk. Ben handles the rest.", color: "#b18cff",
      price: "$3,000+", unit: "/ month", setup: "One-time setup: $1,500",
      bullets: ["Everything in Co-Pilot", "A monthly shoot day", "12 to 16 edited reels, posted for you"],
      detail: {
        title: "Done-With-You",
        intro: "Best if your time is the scarce thing. You show up, speak, and we turn it into a steady feed.",
        list: [
          "<b>Everything in Co-Pilot.</b>",
          "<b>Monthly shoot day.</b> One session to film a month of content.",
          "<b>12 to 16 edited reels a month.</b> Finished and ready.",
          "<b>We post for you.</b> Captions, covers and timing handled.",
          "<b>Comments and messages.</b> Sorted so only what needs you reaches you.",
          "<b>Monthly review.</b> What worked, why, and what is next."
        ],
        note: "Final pricing depends on how much video we produce each month."
      }
    }
  ],
  peers: [
    { role: "Pediatric dentist", name: "Dr. Nidhi Kotak", handle: "babytoothdentist", followers: "24.9K", best: "17.7K" },
    { role: "Dental hygienist", name: "Hadeer Scolaro", handle: "fitlittlehygienist", followers: "80K", best: "120K" },
    { role: "Dental hygienist", name: "Jerry, RDH", handle: "jerry_rdh", followers: "130K", best: "112K" },
    { role: "Orthodontist", name: "Dr. Grant Collins", handle: "thebracesguy", followers: "328K", best: "134K" }
  ],
  modals: {
    scout: {
      title: "How the daily briefing works",
      intro: "Every morning, the system checks a list of dentists, hygienists and doctors on Instagram.",
      list: [
        "<b>It looks for posts that beat that person's own average.</b> A small account that does 4x its usual is a better lesson than a huge account having a normal day.",
        "<b>It explains why.</b> Hook, topic, format and tone, in plain words.",
        "<b>It suggests an idea for you.</b> In your voice, from your expertise.",
        "<b>You can shape it.</b> Reply to any email to suggest an account to follow or tell us what missed."
      ],
      note: "Only public information is used. Nothing is posted on your behalf without your approval."
    },
    rating: {
      title: "How your posts are rated",
      intro: "Each post is checked against what research and real results say keeps people watching and sharing.",
      list: [
        "<b>Strong opening.</b> Does the first three seconds make someone stay?",
        "<b>Keeps people watching.</b> Is there a question the viewer wants answered?",
        "<b>Builds trust.</b> Does it sound like a real expert?",
        "<b>Starts a conversation.</b> Does it take a clear side or invite an opinion?",
        "<b>Invites a share.</b> Is it something a person would send to a friend?"
      ],
      note: "Early on, ratings stay gentle: what worked, plus one thing to change. Fuller scores come once you are comfortable."
    },
    setup: {
      title: "One-time setup",
      intro: "Everything that gets you ready to post, done once.",
      list: [
        "<b>A short conversation</b> about how you talk and what patients ask most.",
        "<b>Your list of accounts to learn from,</b> chosen for you.",
        "<b>Your profile tuned up:</b> bio, photo and a creator account.",
        "<b>The system calibrated</b> to your goals and your comfort level."
      ],
      note: "Setup is $750 for Guide, $1,000 for Co-Pilot and $1,500 for Done-With-You."
    },
    alacarte: {
      title: "A la carte pricing",
      intro: "Need a little extra? Add it any month.",
      rates: [
        ["Basic reel edit (cuts and captions)", "$75"],
        ["Full reel edit (hooks, b-roll, sound)", "$125 to $150"],
        ["Script", "$40"],
        ["Carousel", "$50"],
        ["Strategy consult, 30 minutes", "$100"],
        ["Strategy consult, 60 minutes", "$175"],
        ["Shoot day, half day", "$500"],
        ["Rush delivery", "+50%"],
        ["Editing setup (Claude helper), one time", "$500 to $1,000"]
      ]
    },
    need: {
      title: "What else will I need?",
      intro: "A few things sit outside the package prices.",
      list: [
        "<b>A smartphone</b> with a decent camera. The one you have is likely fine.",
        "<b>Good light and a simple microphone.</b> We will tell you what to buy and what to skip.",
        "<b>A Claude subscription</b> if you want to run the system on your own computer later.",
        "<b>A public Instagram account.</b> We will walk you through the switch."
      ],
      note: "Data costs for the daily briefing are small, and we manage them for you."
    }
  }
};
/* ===== end config ===== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* mail link */
$("#ctaMail").href = `mailto:${CONFIG.contactEmail}?subject=${encodeURIComponent(CONFIG.contactSubject)}`;

/* package cards + involvement scale */
const cards = $("#cards");
const scale = $("#scale");
const N = CONFIG.tiers.length;
scale.innerHTML = `
  <div class="scale-head"><span>Less of Ben</span><b>Ben's involvement</b><span>More of Ben</span></div>
  <div class="scale-track"><i></i>${CONFIG.tiers.map((t, i) =>
    `<button class="dot" data-dot="${t.id}" style="--c:${t.color};--s:${14 + i * 8}px;left:${(2 * i + 1) / (2 * N) * 100}%" aria-label="${t.name}"><span>${t.name}</span></button>`).join("")}</div>`;
CONFIG.tiers.forEach((t, i) => {
  const el = document.createElement("article");
  el.className = "card";
  el.id = "tier-" + t.id;
  el.style.setProperty("--c", t.color);
  el.style.transitionDelay = `${i * 0.12}s`;
  el.innerHTML = `
    <h3>${t.name}</h3><p class="role">${t.role}</p>
    <div class="price">${t.price}<small> ${t.unit}</small></div>
    <p class="setup">${t.setup}</p>
    <ul>${t.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
    <button class="link-btn" data-tier="${t.id}">See details</button>`;
  cards.appendChild(el);
});
function focusTier(id) {
  const on = cards.dataset.focus === id ? "" : id;
  cards.dataset.focus = on;
  $$(".dot").forEach(d => d.classList.toggle("on", d.dataset.dot === on));
  if (on && innerWidth < 900) $("#tier-" + on).scrollIntoView({ behavior: "smooth", block: "center" });
}
$$(".dot").forEach(d => d.addEventListener("click", () => focusTier(d.dataset.dot)));

/* peers */
const peers = $("#peers");
CONFIG.peers.forEach((p, i) => {
  const el = document.createElement("a");
  el.className = "peer"; el.href = `https://www.instagram.com/${p.handle}/`; el.target = "_blank"; el.rel = "noopener";
  el.style.transitionDelay = `${i * 0.1}s`;
  el.innerHTML = `<img src="img/${p.handle}.jpg" alt="${p.name}" width="104" height="104" loading="lazy">
    <h3>${p.name}</h3><p class="handle">${p.role}</p>
    <div class="stats"><div><b>${p.followers}</b><span>followers</span></div><div><b class="sm">${p.best}</b><span>recent Reel views</span></div></div>`;
  peers.appendChild(el);
});

/* modal */
const dlg = $("#modal");
function openModal(m) {
  $("#mTitle").textContent = m.title;
  let html = m.intro ? `<p>${m.intro}</p>` : "";
  if (m.list) html += `<ul>${m.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (m.rates) html += `<table class="rates">${m.rates.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table>`;
  if (m.note) html += `<p class="note">${m.note}</p>`;
  $("#mBody").innerHTML = html;
  dlg.showModal();
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-modal],[data-tier]");
  if (b) {
    if (b.dataset.modal) openModal(CONFIG.modals[b.dataset.modal]);
    else openModal(CONFIG.tiers.find(t => t.id === b.dataset.tier).detail);
  }
  if (e.target === dlg || e.target.closest("#mClose")) dlg.close();
});

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
}), { threshold: 0.15 });
$$(".reveal,.card,.peer").forEach(el => io.observe(el));

/* one-shot triggers */
function once(sel, cls, thr = 0.35, cb) {
  const el = $(sel); if (!el) return;
  new IntersectionObserver((es, o) => es.forEach(en => {
    if (en.isIntersecting) { el.classList.add(cls); cb && cb(el); o.disconnect(); }
  }), { threshold: thr }).observe(el);
}
once("#phone", "go");
once("#rating", "go", 0.4, el => {
  const n = $("[data-count]", el), end = +n.dataset.count; let v = 0;
  const t = setInterval(() => { n.textContent = ++v; if (v >= end) clearInterval(t); }, 160);
});

/* tabs */
$$(".tabs button").forEach(b => b.addEventListener("click", () => {
  $$(".tabs button").forEach(x => x.setAttribute("aria-selected", x === b));
  $$(".tab-panel").forEach(p => p.classList.toggle("active", p.dataset.panel === b.dataset.tab));
}));

/* scroll-linked: progress bar, nav theme, pain scene, timeline */
const bar = $("#progress"), nav = $(".nav"), scene = $("#pain");
const items = $$(".p-item"), dots = $$("#painDots i"), steps = $$("#timeline li"), tl = $("#timeline");
let lastIdx = -1;
function onScroll() {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - innerHeight) * 100) + "%";

  const el = document.elementFromPoint(innerWidth / 2, nav.offsetHeight + 6);
  const sec = el && el.closest("section,footer");
  nav.classList.toggle("on-light", !!sec && (sec.classList.contains("light") || sec.id === "pain" || sec.classList.contains("foot")));

  if (!reduce) {
    const r = scene.getBoundingClientRect();
    const total = r.height - innerHeight;
    const p = Math.min(Math.max(-r.top / total, 0), 0.9999);
    const idx = r.top > innerHeight * 0.5 ? -1 : Math.floor(p * items.length);
    if (idx !== lastIdx) {
      lastIdx = idx;
      items.forEach((it, i) => { it.classList.toggle("active", i === idx); it.classList.toggle("past", i < idx); });
      dots.forEach((d, i) => d.classList.toggle("on", i === idx));
    }
  }

  const tr = tl.getBoundingClientRect();
  const fillPx = Math.min(Math.max(innerHeight * 0.6 - tr.top, 0), tr.height);
  tl.style.setProperty("--fill", fillPx + "px");
  steps.forEach(s => s.classList.toggle("on", s.getBoundingClientRect().top < innerHeight * 0.62));
}
addEventListener("scroll", () => requestAnimationFrame(onScroll), { passive: true });
addEventListener("resize", onScroll);
onScroll();
