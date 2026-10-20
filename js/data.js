/*
 * 3300 사이트 콘텐츠
 * ---------------------------------------------
 * 이 파일의 글만 바꾸면 사이트 내용이 바뀝니다.
 * image 값에 "assets/images/파일이름.jpg"를 넣으면 임시 이미지 대신 실제 이미지가 나옵니다.
 * image를 비워 두면("") 임시 이미지 상자가 표시됩니다.
 */
window.SITE_DATA = {
  meta: {
    title: "3300",
    subtitle: "AI SF FANTASY LIVE-ACTION FILM",
    tagline: "3300년, 인간과 AI의 경계가\n무너진 세계",
    intro:
      "작품 한 줄 소개를 여기에 적어 주세요. 세계관의 핵심 갈등과 주인공의 목표가 한눈에 보이도록 두세 문장이면 충분합니다.",
    heroCharacters: ["c1", "c2", "c3", "c4", "c5"],
  },

  // 주요 사건 / 대진표
  conflict: {
    label: "MAIN EVENT",
    title: "핵심 사건 이름",
    description:
      "영화의 중심이 되는 사건(전쟁, 대회, 작전 등)을 소개해 주세요. 누가 누구와 맞서는지 아래 대진표에 정리됩니다.",
    image: "",
    rounds: [
      {
        name: "1라운드",
        matches: [
          ["c1", "c6"],
          ["c2", "c7"],
          ["c3", "c8"],
          ["c4", "c5"],
        ],
      },
      { name: "준결승", matches: [["c1", "c2"], ["c3", "c4"]] },
      { name: "결승", matches: [["c1", "c3"]] },
    ],
  },

  // 등급 체계 (AI 등급, 계급, 능력 레벨 등)
  tiers: {
    label: "CLASS SYSTEM",
    title: "등급 체계",
    description: "세계관 속 등급이나 계급 체계를 설명해 주세요.",
    list: [
      { name: "S 등급", desc: "최상위 등급 설명", members: ["c1"] },
      { name: "A 등급", desc: "상위 등급 설명", members: ["c2", "c3"] },
      { name: "B 등급", desc: "일반 등급 설명", members: [] },
    ],
  },

  // 기획 의도 (밝은 섹션)
  concept: {
    label: "DIRECTOR'S NOTE",
    title: "기획 의도를 담은\n한 문장을 적어 주세요",
    description:
      "이 작품을 왜 만들었는지, 관객이 무엇을 느끼기를 바라는지 짧게 소개해 주세요.",
    points: [
      { title: "포인트 1", desc: "작품의 첫 번째 매력을 설명해 주세요." },
      { title: "포인트 2", desc: "작품의 두 번째 매력을 설명해 주세요." },
      { title: "포인트 3", desc: "작품의 세 번째 매력을 설명해 주세요." },
    ],
  },

  regions: [
    {
      id: "r1",
      name: "지역 이름 1",
      en: "REGION 01",
      image: "",
      desc: "이 지역의 분위기, 역사, 지배 세력을 소개해 주세요.",
      facts: ["인구 / 규모", "지배 세력", "주요 시설"],
    },
    {
      id: "r2",
      name: "지역 이름 2",
      en: "REGION 02",
      image: "",
      desc: "이 지역의 분위기, 역사, 지배 세력을 소개해 주세요.",
      facts: ["인구 / 규모", "지배 세력", "주요 시설"],
    },
    {
      id: "r3",
      name: "지역 이름 3",
      en: "REGION 03",
      image: "",
      desc: "이 지역의 분위기, 역사, 지배 세력을 소개해 주세요.",
      facts: ["인구 / 규모", "지배 세력", "주요 시설"],
    },
  ],

  factions: [
    {
      id: "f1",
      name: "진영 이름 1",
      en: "FACTION 01",
      image: "",
      desc: "이 진영의 목표와 신념, 다른 진영과의 관계를 소개해 주세요.",
      members: ["c1", "c2"],
    },
    {
      id: "f2",
      name: "진영 이름 2",
      en: "FACTION 02",
      image: "",
      desc: "이 진영의 목표와 신념, 다른 진영과의 관계를 소개해 주세요.",
      members: ["c3", "c4"],
    },
    {
      id: "f3",
      name: "진영 이름 3",
      en: "FACTION 03",
      image: "",
      desc: "이 진영의 목표와 신념, 다른 진영과의 관계를 소개해 주세요.",
      members: ["c5", "c6"],
    },
  ],

  characters: [
    {
      id: "c1",
      name: "주인공 1",
      en: "PROTAGONIST",
      role: "주인공",
      faction: "f1",
      tier: "S 등급",
      image: "",
      quote: "캐릭터를 대표하는 대사 한 줄",
      desc: "인물의 배경, 성격, 목표를 소개해 주세요.",
      stats: { 전투: 80, 지능: 70, 기술: 90, 의지: 95 },
      abilities: ["능력 1", "능력 2", "능력 3"],
    },
    { id: "c2", name: "주인공 2", en: "HEROINE", role: "주요 인물", faction: "f1", tier: "A 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 70, 지능: 85, 기술: 75, 의지: 80 }, abilities: ["능력 1", "능력 2"] },
    { id: "c3", name: "인물 3", en: "RIVAL", role: "라이벌", faction: "f2", tier: "A 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 90, 지능: 60, 기술: 70, 의지: 75 }, abilities: ["능력 1", "능력 2"] },
    { id: "c4", name: "인물 4", en: "ANTAGONIST", role: "적대자", faction: "f2", tier: "S 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 85, 지능: 95, 기술: 80, 의지: 70 }, abilities: ["능력 1", "능력 2"] },
    { id: "c5", name: "인물 5", en: "AI COMPANION", role: "AI 동료", faction: "f3", tier: "B 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 50, 지능: 99, 기술: 95, 의지: 60 }, abilities: ["능력 1", "능력 2"] },
    { id: "c6", name: "인물 6", en: "SUPPORT", role: "조연", faction: "f3", tier: "B 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 60, 지능: 60, 기술: 60, 의지: 60 }, abilities: ["능력 1"] },
    { id: "c7", name: "인물 7", en: "SUPPORT", role: "조연", faction: "f1", tier: "B 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 60, 지능: 60, 기술: 60, 의지: 60 }, abilities: ["능력 1"] },
    { id: "c8", name: "인물 8", en: "SUPPORT", role: "조연", faction: "f2", tier: "B 등급", image: "", quote: "대표 대사", desc: "인물 소개를 적어 주세요.", stats: { 전투: 60, 지능: 60, 기술: 60, 의지: 60 }, abilities: ["능력 1"] },
  ],

  // 적 개체 / 기계 생명체 도감
  bestiary: [
    { name: "개체 이름 1", en: "ENTITY 01", level: "위험도 ★★★", image: "", desc: "개체의 특징과 약점을 적어 주세요." },
    { name: "개체 이름 2", en: "ENTITY 02", level: "위험도 ★★★★", image: "", desc: "개체의 특징과 약점을 적어 주세요." },
    { name: "개체 이름 3", en: "ENTITY 03", level: "위험도 ★★", image: "", desc: "개체의 특징과 약점을 적어 주세요." },
    { name: "개체 이름 4", en: "ENTITY 04", level: "위험도 ★★★★★", image: "", desc: "개체의 특징과 약점을 적어 주세요." },
  ],

  // 기술 / 능력 등급 (위가 가장 높은 등급)
  skills: [
    { rank: "LEGEND", name: "전설 기술 이름", desc: "기술 설명", owner: "c4" },
    { rank: "EPIC", name: "영웅 기술 이름", desc: "기술 설명", owner: "c1" },
    { rank: "RARE", name: "희귀 기술 이름", desc: "기술 설명", owner: "c3" },
    { rank: "UNCOMMON", name: "고급 기술 이름", desc: "기술 설명", owner: "c2" },
    { rank: "COMMON", name: "일반 기술 이름", desc: "기술 설명", owner: "c5" },
  ],
};
