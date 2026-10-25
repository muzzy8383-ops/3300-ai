(function () {
  const D = window.SITE_DATA;
  const charById = Object.fromEntries(D.characters.map((c) => [c.id, c]));
  const factionById = Object.fromEntries(D.factions.map((f) => [f.id, f]));

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const nl = (s) => esc(s).replace(/\n/g, "<br />");

  // 이미지가 있으면 <img>, 없으면 임시 상자
  function media(src, label, cls = "") {
    if (src) return `<div class="media ${cls}"><img src="${esc(src)}" alt="${esc(label)}" loading="lazy" /></div>`;
    return `<div class="media ph ${cls}"><span>${esc(label)}</span></div>`;
  }

  function miniChar(id) {
    const c = charById[id];
    if (!c) return "";
    return `<button class="mini-char" data-goto-char="${esc(c.id)}">
      ${media(c.image, c.name, "avatar")}
      <span class="mini-name">${esc(c.name)}</span>
      <span class="mini-role">${esc(c.role)}</span>
    </button>`;
  }

  // data-bind 텍스트 채우기
  document.querySelectorAll("[data-bind]").forEach((el) => {
    const val = el.dataset.bind.split(".").reduce((o, k) => (o ? o[k] : ""), D);
    el.innerHTML = nl(val);
  });

  // 메인 카드
  document.getElementById("hero-cards").innerHTML = D.meta.heroCharacters
    .map((id, i, arr) => {
      const c = charById[id];
      if (!c) return "";
      const mid = (arr.length - 1) / 2;
      const off = i - mid;
      return `<button class="hero-card" style="--off:${off}" data-goto-char="${esc(c.id)}">
        ${media(c.image, c.name)}
        <span class="hero-card-info"><b>${esc(c.name)}</b><small>${esc(c.en)}</small></span>
      </button>`;
    })
    .join("");

  // 연표
  document.getElementById("timeline").innerHTML = D.conflict.events
    .map(
      (e, i) => `<article class="tl-item reveal" style="--i:${i}">
        <div class="tl-when">${esc(e.when)}</div>
        <div class="tl-card">
          ${e.image ? media(e.image, e.title, "tl-img") : ""}
          <div class="tl-body"><h3>${esc(e.title)}</h3><p>${esc(e.desc)}</p></div>
        </div>
      </article>`
    )
    .join("");

  // 등급
  document.getElementById("tier-list").innerHTML = D.tiers.list
    .map(
      (t, i) => `<div class="tier reveal" style="--i:${i}">
        <div class="tier-head"><span class="tier-name">${esc(t.name)}</span><span class="tier-desc">${esc(t.desc)}</span></div>
        ${t.members.length ? `<div class="tier-members">${
          t.members.map(miniChar).join("")
        }</div>` : ""}
      </div>`
    )
    .join("");

  // 기획 의도
  document.getElementById("concept-points").innerHTML = D.concept.points
    .map((p, i) => `<div class="point"><span class="point-no">0${i + 1}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p></div>`)
    .join("");

  // 탭 공통
  function setupTabs(tabsEl, items, renderPanel, panelEl) {
    tabsEl.innerHTML = items
      .map((it, i) => `<button role="tab" aria-selected="${i === 0}" data-i="${i}"><small>${esc(it.en)}</small>${esc(it.name)}</button>`)
      .join("");
    const select = (i) => {
      tabsEl.querySelectorAll("button").forEach((b, j) => b.setAttribute("aria-selected", String(i === j)));
      panelEl.innerHTML = renderPanel(items[i]);
      panelEl.classList.remove("swap");
      void panelEl.offsetWidth;
      panelEl.classList.add("swap");
    };
    tabsEl.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-i]");
      if (b) select(Number(b.dataset.i));
    });
    select(0);
    return select;
  }

  setupTabs(
    document.getElementById("faction-tabs"),
    D.factions,
    (f) => `<div class="feature">
      ${media(f.image, f.name + " 이미지", "feature-img")}
      <div class="feature-body">
        <p class="eyebrow">${esc(f.en)}</p>
        <h3>${esc(f.name)}</h3>
        <p>${nl(f.desc)}</p>
        <p class="sub-label">소속 인물</p>
        <div class="mini-row">${f.members.map(miniChar).join("")}</div>
      </div>
    </div>`,
    document.getElementById("faction-panel")
  );

  // 인물
  const selectChar = setupTabs(
    document.getElementById("char-tabs"),
    D.characters,
    (c) => {
      const f = factionById[c.faction];
      return `<div class="char-detail">
        ${media(c.image, c.name + " 초상", "portrait")}
        <div class="char-body">
          <p class="eyebrow">${esc(c.en)}</p>
          <h3 class="char-name">${esc(c.name)}</h3>
          <div class="tags">
            <span class="tag">${esc(c.role)}</span>
            ${f ? `<span class="tag">${esc(f.name)}</span>` : ""}
            ${c.tier ? `<span class="tag tag-accent">${esc(c.tier)}</span>` : ""}
          </div>
          ${c.quote ? `<blockquote>“${esc(c.quote)}”</blockquote>` : ""}
          <p>${nl(c.desc)}</p>
          ${c.abilities && c.abilities.length ? `<p class="sub-label">능력 · 소지품</p>
          <div class="tags">${c.abilities.map((x) => `<span class="tag tag-line">${esc(x)}</span>`).join("")}</div>` : ""}
        </div>
      </div>`;
    },
    document.getElementById("char-panel")
  );

  // 도감
  document.getElementById("beast-grid").innerHTML = D.bestiary
    .map(
      (b, i) => `<article class="beast reveal" style="--i:${i}">
        ${media(b.image, b.name, "beast-img")}
        <div class="beast-body">
          <p class="eyebrow">${esc(b.en)}</p>
          <h3>${esc(b.name)}</h3>
          <p class="danger">${esc(b.level)}</p>
          <p>${esc(b.desc)}</p>
        </div>
      </article>`
    )
    .join("");

  // 에피소드
  document.getElementById("episode-stack").innerHTML = D.episodes
    .map(
      (ep, i) => `<div class="skill reveal" style="--i:${i}; --w:${100 - i * 3}%">
        <span class="skill-rank">${esc(ep.rank)}</span>
        <div class="skill-body"><h3>${esc(ep.name)}</h3><p>${esc(ep.desc)}</p></div>
      </div>`
    )
    .join("");

  // 인물 이름을 누르면 인물 섹션으로 이동
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-goto-char]");
    if (!b) return;
    const idx = D.characters.findIndex((c) => c.id === b.dataset.gotoChar);
    if (idx < 0) return;
    selectChar(idx);
    document.getElementById("characters").scrollIntoView({ behavior: "smooth" });
  });

  // 모바일 메뉴
  const menuBtn = document.querySelector(".menu-btn");
  const topnav = document.querySelector(".topnav");
  menuBtn.addEventListener("click", () => {
    const open = topnav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  topnav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      topnav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // 스크롤 등장 효과
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // 현재 섹션 표시
  const links = document.querySelectorAll(".sidenav a, .topnav a");
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("main section").forEach((s) => spy.observe(s));
})();
