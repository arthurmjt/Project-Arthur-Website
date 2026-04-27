export type Lang = "en" | "zh";

export type PhotoMeta = {
  src: string;
  alt: string;
  camera: string;
  lens: string;
  iso: number;
  shutter: string;
  aperture: string;
  focal: string;
  date: string;
  location: string;
};
export type PhotoSection = {
  id: string;
  title: string;
  intro?: string;
  outro?: string;
  photos: PhotoMeta[];
};
export type PhotoVideo = {
  title: string;
  intro: string;
  embedUrl: string;
  embedProvider: "bilibili" | "youtube";
};
export type Ring = {
  yearStart: number;
  yearEnd?: number;
  role: string;
  org: string;
  note: string | string[];
  video?: { src: string; href?: string };
  image?: { src: string; href?: string; alt?: string };
  extraVideos?: { lead: string; items: { title: string; url: string }[] };
  logo?: string;
};
export type AuthorSeg = string | { highlight: string };
export type Publication = {
  title: string;
  authors: AuthorSeg[];
  venue: string;
  leaderNote?: string;
  paperUrl?: string;
  posterUrl?: string;
  codeUrl?: string;
  image?: { src: string; alt?: string };
};
export type Honor = { title: string; detail?: string };
export type EducationEntry = {
  institution: string;
  dateRange: string;
  degree: string;
  gpa: string;
  extras?: string;
  logo?: string;
};
export type TravelPin = { name: string; coords: [number, number] };
export type BioSeg = string | { t: string; href: string } | { em: string };
export type BioPara = BioSeg[];

export type Dict = {
  logo: string;
  nameFirst: string;
  nameSecond: string;
  roleLine: string;

  tabs: [string, string, string];

  meEyebrow: string;
  bio: BioPara[];
  meQuote: string;
  mapEyebrow: string;
  mapLead: string;
  mapCurrent: string;
  mapVisited: string;
  mapFuture: string;
  visited: TravelPin[];
  future: TravelPin[];
  currentCity: { name: string; coords: [number, number] };

  photoEyebrow: string;
  photoIntro: string[];
  photoIntroEmphasis: string;
  photoSections: PhotoSection[];
  photoVideo: PhotoVideo;
  photoVideoEyebrow: string;
  photoZoomLabel: string;
  photoCloseLabel: string;

  resumeEyebrow: string;
  rings: Ring[];

  educationEyebrow: string;
  education: EducationEntry[];

  publicationsEyebrow: string;
  publications: Publication[];

  honorsEyebrow: string;
  honors: Honor[];

  aiBadge: string;
  aiTitle: string;
  aiSubtitle: string;
  aiMeta: string;
  aiPlay: string;
  aiVeoNote: string;

  contactEyebrow: string;
  contactNote: string;
  email: string;

  copyright: (year: number) => string;
};

export const DICT: Record<Lang, Dict> = {
  en: {
    logo: "PROJECT ARTHUR",
    nameFirst: "Jingtang Ma",
    nameSecond: "Arthur",
    roleLine: "Founder · Engineer · Photographer",

    tabs: ["Me", "Résumé", "Photography"],

    meEyebrow: "Me · 我",
    bio: [
      [
        "I am a Software Development Engineer at ",
        { t: "Amazon Web Services (AWS)", href: "https://aws.amazon.com/about-aws/" },
        ", where I focus on building large-scale deep learning inference and computer vision systems for ",
        { t: "Amazon’s Just Walk Out technology", href: "https://www.justwalkout.com/" },
        " and Amazon Go. Artificial general intelligence (AGI), brain-computer interfaces (BCI), and space exploration are the directions that have long fascinated me. Starting in 2026, I began channeling this passion into entrepreneurial ventures at the intersection of space commerce and AI.",
      ],
      [
        "Before joining Amazon, I earned my Master’s degree in Computer Science from the ",
        { t: "University of Illinois Urbana-Champaign (UIUC)", href: "https://illinois.edu/" },
        ". During my graduate studies, I was a Research Assistant at ",
        { t: "Prof. Kaiyu Guan’s", href: "http://faculty.nres.illinois.edu/~kaiyuguan/" },
        " lab and the ",
        { t: "National Center for Supercomputing Applications (NCSA)", href: "https://www.ncsa.illinois.edu/" },
        ", where I was fortunate to be advised by ",
        { t: "Prof. Kaiyu Guan", href: "http://faculty.nres.illinois.edu/~kaiyuguan/" },
        " and ",
        { t: "Prof. Sheng Wang", href: "https://shengwang12.github.io/" },
        ". My research focused on deep learning applications in agriculture and remote sensing, particularly geographic correction and image segmentation methods based on satellite and hyperspectral imagery. ",
        "I also worked as a Machine Learning Researcher at the ",
        { t: "Sunstella Foundation", href: "https://sites.google.com/view/sunstella-foundation/home?authuser=0" },
        ", led by ",
        { t: "Dr. Jimeng Sun", href: "https://www.sunlab.org/" },
        " and ",
        { t: "Dr. Cao (Danica) Xiao", href: "https://sites.google.com/view/danicaxiao" },
        ", where I was mentored by ",
        { t: "Zifeng Wang", href: "https://zifengwang.xyz/" },
        " and Zhen Lin. There, my work revolved around AI for healthcare, clinical trial data generation, few-shot learning, and brain-computer interfaces.",
      ],
      [
        "I earned my undergraduate degree from the ",
        { t: "University of Missouri–Kansas City (UMKC)", href: "https://www.umkc.edu/" },
        ", with a B.S. in Computer Science and a minor in Mathematics, ",
        { em: "Summa Cum Laude" },
        ".",
      ],
      [
        "I grew up in Lanzhou, Gansu, China, in what I like to call a “mixed” family — if you count having grandparents from Tianjin, Shandong, Shanghai, and Dalian as a form of diversity. That upbringing gave me a lasting love for exploration. When I’m not working, you can probably find me scuba diving, skiing, hiking, or backpacking somewhere unfamiliar. As an avid photographer, I’m especially drawn to capturing the raw beauty of natural landscapes and wildlife.",
      ],
    ],
    meQuote:
      "I hope this world is a little bit different because I was in it — even if only a little.",
    mapEyebrow: "Arthur’s Map",
    mapLead: "Still exploring…",
    mapCurrent: "Current",
    mapVisited: "Visited",
    mapFuture: "Future",
    currentCity: { name: "Seattle", coords: [-122.3321, 47.6062] },
    visited: [
      { name: "Canada",       coords: [-75.6972,  45.4215] },
      { name: "China",        coords: [116.4074,  39.9042] },
      { name: "Japan",        coords: [139.6917,  35.6895] },
      { name: "South Korea",  coords: [126.9780,  37.5665] },
      { name: "Thailand",     coords: [100.5018,  13.7563] },
      { name: "Vietnam",      coords: [105.8342,  21.0285] },
      { name: "Hong Kong",    coords: [114.1694,  22.3193] },
      { name: "Taiwan",       coords: [121.5654,  25.0330] },
      { name: "Egypt",        coords: [31.2357,   30.0444] },
      { name: "Kenya",        coords: [36.8219,   -1.2921] },
    ],
    future: [
      { name: "Namibia",      coords: [17.0832,  -22.5609] },
      { name: "Philippines",  coords: [121.7740,  12.8797] },
    ],

    photoEyebrow: "Photography · 摄影",
    photoIntro: [
      "I used to think there would always be time — that as long as I wanted to see something or do something, the chance would come.",
      "Only later did I realize: many moments are one-of-one. Miss them once, and that's the end.",
    ],
    photoIntroEmphasis: "So I picked up a camera.",
    photoZoomLabel: "View full size",
    photoCloseLabel: "Close",
    photoSections: [
      {
        id: "cheetah-tree",
        title: "Cheetah up a tree",
        intro:
          "Catching a cheetah mid-climb is a rare thing — leopards are the climbers of the family; cheetahs almost never do this. 🐆",
        photos: [
          { src: "/media/photography/cheetah-tree/20250627-DSC07173.jpg", alt: "Cheetah climbing an acacia tree",      camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07176.jpg", alt: "Cheetah up a tree, looking down",       camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07182.jpg", alt: "Cheetah balanced on acacia branches",   camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07193.jpg", alt: "Cheetah perched in acacia tree",        camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
        ],
      },
      {
        id: "fish-eagle-strike",
        title: "Fish eagle on the strike",
        intro: "African fish eagle over Lake Naivasha 🦅 — tension frozen at 1/3200s.",
        photos: [
          { src: "/media/photography/fish-eagle-strike/20250629-DSC02988.jpg", alt: "Fish eagle banking over the water",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/5.0", focal: "367mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC03457.jpg", alt: "Fish eagle on final approach",                camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 4000, shutter: "1/3200s", aperture: "f/6.9", focal: "179mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC03460.jpg", alt: "Fish eagle locking onto target",              camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 4000, shutter: "1/3200s", aperture: "f/6.9", focal: "179mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04480.jpg", alt: "Fish eagle diving low across the lake",        camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1250, shutter: "1/3200s", aperture: "f/6.3", focal: "300mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04485.jpg", alt: "Fish eagle talons extended",                   camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1250, shutter: "1/3200s", aperture: "f/6.3", focal: "300mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04544.jpg", alt: "Fish eagle skimming the surface",              camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04545.jpg", alt: "Fish eagle striking the water",                camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04546.jpg", alt: "Fish eagle wings spread at the kill",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04552.jpg", alt: "Fish eagle lifting the catch",                 camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04559.jpg", alt: "Fish eagle climbing away with fish",           camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04564.jpg", alt: "Fish eagle full frame, carrying the fish",     camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "Jun 29, 2025", location: "Lake Naivasha, Kenya" },
        ],
      },
      {
        id: "paradise-flycatcher",
        title: "Paradise flycatcher on the hunt",
        intro: "Mid-strike at 1/4000s — the flycatcher's long tail traces an arc through the air.",
        photos: [
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04452.jpg", alt: "Paradise flycatcher closing on an insect",     camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "Jun 24, 2025", location: "Kenya" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04498.jpg", alt: "Paradise flycatcher mid-dive",                  camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "Jun 24, 2025", location: "Kenya" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04500.jpg", alt: "Paradise flycatcher ribbon tail in flight",     camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "Jun 24, 2025", location: "Kenya" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04569.jpg", alt: "Paradise flycatcher pulling up with prey",      camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 5000, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "Jun 24, 2025", location: "Kenya" },
        ],
      },
      {
        id: "kenya-safari",
        title: "Kenya Safari",
        outro:
          "Hakuna Matata 🦁!\n\nEver since I first watched Animal World and The Lion King as a kid, the African savanna has been a dreamscape for me. And when the predators, the playing cubs, the herds actually appeared in front of me, those childhood images came true one after another. No cages, no filters — just the rawest, wildest life, breathing and leaping freely in front of you. Africa is not just an adventure; it feels more like a reunion with the imagination of my childhood.",
        photos: [
          { src: "/media/photography/kenya-safari/20250621-DSC04732.jpg", alt: "Safari scene at dusk",                     camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 8000, shutter: "1/1600s", aperture: "f/6.0", focal: "88mm",  date: "Jun 21, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250623-DSC02472.jpg", alt: "Wildlife on the plains",                   camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 8000, shutter: "1/500s",  aperture: "f/5.3", focal: "348mm", date: "Jun 23, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250623-DSC02785.jpg", alt: "Big cat resting in the grass",             camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/250s",  aperture: "f/5.0", focal: "400mm", date: "Jun 23, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250624-DSC04778.jpg", alt: "Wildlife portrait in sunlight",             camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 100,  shutter: "1/500s",  aperture: "f/5.0", focal: "400mm", date: "Jun 24, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250625-DSC06647.jpg", alt: "Golden hour on the savanna",                camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/2500s", aperture: "f/2.0", focal: "139mm", date: "Jun 25, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250626-DSC00544.jpg", alt: "Panoramic herd on the plains",              camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 320,  shutter: "1/500s",  aperture: "f/5.0", focal: "400mm", date: "Jun 26, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250626-DSC06946.jpg", alt: "Savanna landscape at dusk",                 camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/200s",  aperture: "f/6.3", focal: "150mm", date: "Jun 26, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250626-DSC06983.jpg", alt: "Wide-open aperture portrait",               camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/2000s", aperture: "f/2.0", focal: "150mm", date: "Jun 26, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250627-DSC01892.jpg", alt: "Safari telephoto frame",                    camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 320,  shutter: "1/1000s", aperture: "f/5.0", focal: "400mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
          { src: "/media/photography/kenya-safari/20250627-DSC02636.jpg", alt: "Evening safari scene",                      camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1000, shutter: "1/640s",  aperture: "f/5.0", focal: "309mm", date: "Jun 27, 2025", location: "Masai Mara, Kenya" },
        ],
      },
      {
        id: "luxor-dawn",
        title: "Daybreak over Luxor",
        intro: "🇪🇬 Luxor — time being born on the east bank of the Nile.",
        photos: [
          { src: "/media/photography/luxor-dawn/20250705-DSC05578.jpg", alt: "Dawn balloons rising over Luxor",            camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 200, shutter: "1/160s",  aperture: "f/5.0", focal: "91mm",  date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05585.jpg", alt: "Balloons against the first light",           camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 640, shutter: "1/160s",  aperture: "f/6.9", focal: "63mm",  date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05599.jpg", alt: "Balloon cluster above the Nile",             camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/1000s", aperture: "f/6.0", focal: "150mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05600.jpg", alt: "Hot-air balloons over the east bank",         camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/50s",   aperture: "f/6.0", focal: "150mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05608.jpg", alt: "Balloons drifting in the morning haze",      camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 320, shutter: "1/400s",  aperture: "f/6.3", focal: "150mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05619.jpg", alt: "Long exposure, dawn over Luxor",             camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/25s",   aperture: "f/8.0", focal: "100mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05626.jpg", alt: "Morning sky and balloons",                    camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/160s",  aperture: "f/8.0", focal: "150mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05634.jpg", alt: "Sun breaking over the river",                camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 500, shutter: "1/1600s", aperture: "f/5.7", focal: "139mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07482.jpg", alt: "Nile east bank at daybreak",                 camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/500s",  aperture: "f/6.0", focal: "52mm",  date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07489.jpg", alt: "Wide view over the sleeping valley",          camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/500s",  aperture: "f/6.0", focal: "34mm",  date: "Jul 5, 2025", location: "Luxor, Egypt" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07493.jpg", alt: "Sunrise light across the ruins",              camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/125s",  aperture: "f/6.0", focal: "105mm", date: "Jul 5, 2025", location: "Luxor, Egypt" },
        ],
      },
    ],
    photoVideoEyebrow: "Short film · 短片",
    photoVideo: {
      title: "Me and My Altay",
      intro: "Everyone carries their own Altay somewhere. This short film is mine.",
      embedUrl: "https://www.youtube.com/embed/87i72DZmKDw?si=TrZDCKFSfd6NvBZ3",
      embedProvider: "youtube",
    },

    resumeEyebrow: "Professional Experience",
    rings: [
      {
        yearStart: 2023,
        role: "Computer Vision Software Engineer",
        org: "Amazon Web Services (AWS) · Seattle, WA · March 2023 - Present",
        note:
          "Building large-scale deep learning inference and computer vision systems for Amazon's Just Walk Out technology and Amazon Go.",
        video: {
          src: "/media/JWO2.mov",
          href: "https://aws.amazon.com/cn/blogs/machine-learning/enhancing-just-walk-out-technology-with-multi-modal-ai/",
        },
        image: {
          src: "/media/JWO1.png",
          href: "https://www.aboutamazon.com/news/retail/amazon-just-walk-out-improves-accuracy",
          alt: "Amazon Just Walk Out multi-modal AI diagram",
        },
        extraVideos: {
          lead:
            "If you wanna read more or know more, please watch the below video.",
          items: [
            {
              title: "Reinvent Retail & Foodservice with Just Walk Out",
              url: "https://www.youtube.com/embed/iDrexrGIrp0",
            },
            {
              title: "Inside the AI Engine Behind Just Walk Out",
              url: "https://www.youtube.com/embed/qV5TSE6rxwY",
            },
            {
              title:
                "Discover Just Walk Out by Amazon: Now with RFID Lanes",
              url: "https://www.youtube.com/embed/VxfS7D0wZSI",
            },
          ],
        },
        logo: "/media/logos/AWSlogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "Machine Learning Researcher",
        org: "SunLab on AI for healthcare · Champaign, IL · May 2022 - December 2022",
        note: [
          "Advised by Professor Jimeng Sun",
          "Research focus: deep learning in healthcare, trial data generation, few-shot learning, and brain computer interface",
          "Designed and developed a comprehensive python package for AI-driven clinical trial optimization especially tabular trial records generation with GaussianCopula, CopulaGAN, MedGAN, CTGAN, etc.",
          "Proposed deep learning methods of few-shot domain transfer on EEG data to predict and classify patients’ EEG signals to LRDA, GRDA, LPD, GPD, Seizure, and others by replacing the predictor with a similarity-based classifier and using Kernel Density Estimation (KDE) based classifier with the lack of the target domain data",
        ],
        logo: "/media/logos/SunLabLogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "Research Assistant",
        org: "National Center for Supercomputing Applications · Champaign, IL · April 2022 - December 2022",
        note: [
          "Advised by Professor Kaiyu Guan and Professor Sheng Wang",
          "Research focus: deep learning in agriculture and remote sensing, geographic correction, and image segmentation",
          "Proposed feature point detection methods based on satellite images and hyperspectral images using deep learning, image segmentation, geographic information, and Scale-Invariant Feature Transform (SIFT)",
        ],
        logo: "/media/logos/NCSALogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "Software Developer Engineer",
        org: "Amazon · Seattle, WA · June 2022 - August 2022",
        note:
          "Architected, implemented, and deployed a high-performance GPU-accelerated video decoding service for the Computer Vision team at Amazon Physical Stores (Just Walk Out / Amazon Go), seamlessly integrating the Decord decoding engine into the core production pipeline and driving substantial reductions in AWS infrastructure spend at scale. Conducted end-to-end research, benchmarking, and performance profiling to quantify latency trade-offs between the legacy CPU-based PyAV decoder and the GPU-based Decord decoder across multiple generations of in-store camera hardware, delivering comprehensive technical documentation and data-driven recommendations. Spearheaded significant latency improvements in real-time video decoding throughput across Amazon's global physical store footprint, directly enhancing the responsiveness and reliability of mission-critical computer vision workloads.",
        logo: "/media/logos/amazonLogo.png",
      },
      {
        yearStart: 2019,
        yearEnd: 2019,
        role: "Cloud Architect",
        org: "Shanghai Hola Information Technology Co. · Shanghai, China · May 2019 - August 2019",
        note: [
          "Led, designed, and built a consumer system based on the biggest Chinese social media platform, WeChat",
          "Deployed 200 virtualized desktops for general office users, call center agents, and software development engineers in Shanghai FANACO Robot Co. using Hyper-Converged Infrastructure",
          "Deployed 12-node Ceph and container which developed from Redhat in Genius Auto Finance Co., Ltd.; Used these techniques to build a new generation of software-defined storage systems and to provide storage systems with distributed high availability and elastic scalability for business systems",
        ],
        logo: "/media/logos/HolaLogo.png",
      },
    ],

    educationEyebrow: "Education",
    education: [
      {
        institution: "University of Illinois Urbana-Champaign",
        dateRange: "Aug 2021 — Dec 2022",
        degree: "Master of Computer Science",
        gpa: "GPA: 4.00 / 4.00",
        extras:
          "Artificial Intelligence, Computer Vision, Brain Computer Interface, Software Engineering",
        logo: "/media/logos/uiucLogoNew.png",
      },
      {
        institution: "University of Missouri-Kansas City",
        dateRange: "Aug 2017 — May 2021",
        degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
        gpa: "GPA: 3.88 / 4.00",
        extras: "Artificial Intelligence, Mixed Reality, Software Engineering",
        logo: "/media/logos/umkcLogo.png",
      },
    ],

    publicationsEyebrow: "Publications",
    publications: [
      {
        title:
          "Approximate or Perish: Spectral MLP-KAN Diffusion with Attentive Function Learning for Unsupervised Hyperspectral Image Restoration",
        authors: [
          "Hongcheng Jiang, ",
          { highlight: "Jingtang Ma" },
          "†, Gaoyuan Du, Jingchen Sun, Gengyuan Zhang, Zejun Zhang, Kai Luo",
        ],
        venue: "CVPRW (PBVS), 2026",
        leaderNote: "† Research Project Leader",
        paperUrl: "/media/CVPRW_2026.pdf",
        posterUrl: "/media/CVPRW_2026_Poster.jpg",
        codeUrl: "https://github.com/arthurmjt/SMLP-KAN",
        image: {
          src: "/media/CVPRW_IMG.png",
          alt: "Attentive KAN — adaptive vs. redundant feature comparison",
        },
      },
      {
        title:
          "Advance Feature Point Detection Based on Satellite and Hyperspectral Images",
        authors: [{ highlight: "Jingtang Ma" }],
        venue: "Manuscript in preparation",
        paperUrl: "/media/AdvanceFeaturePointDetection_JingtangMa.pdf",
        image: {
          src: "/media/superG.png",
          alt: "SuperGlue keypoint matching across satellite and hyperspectral imagery",
        },
      },
    ],

    honorsEyebrow: "Honors & Awards",
    honors: [
      { title: "Summa Cum Laude", detail: "UMKC · 2021" },
      {
        title: "Dean's List",
        detail:
          "UMKC · Fall 2018 · Spring 2019 · Fall 2019 · Spring 2020 · Fall 2020 · Spring 2021",
      },
    ],

    aiBadge: "AI PERSONA",
    aiTitle: "A quiet second voice.",
    aiSubtitle: "Two minutes · she'll introduce me while I'm away.",
    aiMeta: "02 : 47 · model Sienna-3 · Apr 2026",
    aiPlay: "Play introduction",
    aiVeoNote: "Tim Cook-flavored Arthur",

    contactEyebrow: "Contact",
    contactNote: "Feel free to reach out me :)",
    email: "jingtang.ma@outlook.com",

    copyright: (year: number) => `Copyright © ${year} Jingtang Ma. All rights reserved.`,
  },
  zh: {
    logo: "PROJECT ARTHUR",
    nameFirst: "马敬唐",
    nameSecond: "Arthur",
    roleLine: "创业者 · 工程师 · 摄影师",

    tabs: ["我", "简历", "摄影"],

    meEyebrow: "Me · 我",
    bio: [
      [
        "我是 ",
        { t: "Amazon Web Services (AWS)", href: "https://aws.amazon.com/about-aws/" },
        " 的软件开发工程师，专注于为 ",
        { t: "Amazon Just Walk Out 技术", href: "https://www.justwalkout.com/" },
        " 和 Amazon Go 构建大规模深度学习推理与计算机视觉系统。通用人工智能 (AGI)、脑机接口 (BCI) 与太空探索是我长期着迷的方向。从 2026 年起，我开始将这份热情投入到太空商业与 AI 方向的创业尝试之中。",
      ],
      [
        "加入 Amazon 之前，我在 ",
        { t: "伊利诺伊大学香槟分校 (UIUC)", href: "https://illinois.edu/" },
        " 取得计算机科学硕士学位。硕士期间，我在 ",
        { t: "Kaiyu Guan 教授", href: "http://faculty.nres.illinois.edu/~kaiyuguan/" },
        " 实验室与 ",
        { t: "国家超级计算应用中心 (NCSA)", href: "https://www.ncsa.illinois.edu/" },
        " 担任研究助理，有幸受 ",
        { t: "Kaiyu Guan 教授", href: "http://faculty.nres.illinois.edu/~kaiyuguan/" },
        " 和 ",
        { t: "Sheng Wang 教授", href: "https://shengwang12.github.io/" },
        " 指导。我的研究方向集中于深度学习在农业与遥感上的应用，特别是基于卫星与高光谱影像的地理校正和图像分割方法。",
        "我也曾在 ",
        { t: "Jimeng Sun 博士", href: "https://www.sunlab.org/" },
        " 和 ",
        { t: "Cao (Danica) Xiao", href: "https://sites.google.com/view/danicaxiao" },
        " 领导下的 ",
        { t: "Sunstella Foundation", href: "https://sites.google.com/view/sunstella-foundation/home?authuser=0" },
        " 担任机器学习研究员，受教于 ",
        { t: "Zifeng Wang", href: "https://zifengwang.xyz/" },
        " 和 Zhen Lin 两位导师。在那里，我的工作主要围绕医疗人工智能、试验数据生成、少样本学习 (few-shot learning) 以及脑机接口展开。",
      ],
      [
        "我本科毕业于 ",
        { t: "密苏里大学堪萨斯城分校 (UMKC)", href: "https://www.umkc.edu/" },
        "，获得计算机科学理学学士学位并辅修数学，以 ",
        { em: "Summa Cum Laude" },
        " 荣誉毕业。",
      ],
      [
        "我在中国甘肃兰州长大，生在一个“混搭”家庭——如果把祖辈分别来自天津、山东、上海和大连算作一种多元的话。这样的成长让我从小就喜欢探索。不工作的时候，我可能在潜水、滑雪、徒步，或者背包去陌生的地方。作为一名摄影爱好者，我尤其喜欢记录自然景观与野生动物那种原始的美。",
      ],
    ],
    meQuote: "希望这个世界因为有我而多那么一点点不同，哪怕只有一点点。",
    mapEyebrow: "Arthur’s Map",
    mapLead: "探索世界中。。。",
    mapCurrent: "当下",
    mapVisited: "到过",
    mapFuture: "计划中",
    currentCity: { name: "西雅图", coords: [-122.3321, 47.6062] },
    visited: [
      { name: "加拿大",   coords: [-75.6972,  45.4215] },
      { name: "中国",     coords: [116.4074,  39.9042] },
      { name: "日本",     coords: [139.6917,  35.6895] },
      { name: "韩国",     coords: [126.9780,  37.5665] },
      { name: "泰国",     coords: [100.5018,  13.7563] },
      { name: "越南",     coords: [105.8342,  21.0285] },
      { name: "香港",     coords: [114.1694,  22.3193] },
      { name: "台湾",     coords: [121.5654,  25.0330] },
      { name: "埃及",     coords: [31.2357,   30.0444] },
      { name: "肯尼亚",   coords: [36.8219,   -1.2921] },
    ],
    future: [
      { name: "纳米比亚", coords: [17.0832,  -22.5609] },
      { name: "菲律宾",   coords: [121.7740,  12.8797] },
    ],

    photoEyebrow: "摄影 · Photography",
    photoIntro: [
      "我以前总觉得来日方长，只要想见、想做，就总会有机会。",
      "可后来才发现，很多瞬间其实是孤品，错过一次，就是终点。",
    ],
    photoIntroEmphasis: "于是，我开始拿起相机。",
    photoZoomLabel: "查看原图",
    photoCloseLabel: "关闭",
    photoSections: [
      {
        id: "cheetah-tree",
        title: "猎豹上树",
        intro:
          "非常难得捕捉到猎豹爬树的瞬间，通常只有花豹才擅长攀爬，像猎豹这样上树的情景实属罕见 🐆",
        photos: [
          { src: "/media/photography/cheetah-tree/20250627-DSC07173.jpg", alt: "猎豹爬上金合欢树",     camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07176.jpg", alt: "猎豹俯视树下",           camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07182.jpg", alt: "猎豹平衡于树枝之间",    camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/cheetah-tree/20250627-DSC07193.jpg", alt: "猎豹伫立于树上",        camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM", iso: 100, shutter: "1/1000s", aperture: "f/3.6", focal: "50mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
        ],
      },
      {
        id: "fish-eagle-strike",
        title: "非洲海雕的猎杀时刻",
        intro: "纳瓦沙湖上的非洲海雕 🦅 | 1/3200s 快门凝固下的张力",
        photos: [
          { src: "/media/photography/fish-eagle-strike/20250629-DSC02988.jpg", alt: "海雕掠过湖面",           camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/5.0", focal: "367mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC03457.jpg", alt: "海雕逼近猎物",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 4000, shutter: "1/3200s", aperture: "f/6.9", focal: "179mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC03460.jpg", alt: "海雕锁定目标",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 4000, shutter: "1/3200s", aperture: "f/6.9", focal: "179mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04480.jpg", alt: "海雕贴着水面滑翔",        camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1250, shutter: "1/3200s", aperture: "f/6.3", focal: "300mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04485.jpg", alt: "海雕伸出利爪",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1250, shutter: "1/3200s", aperture: "f/6.3", focal: "300mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04544.jpg", alt: "海雕擦过水面",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04545.jpg", alt: "海雕击水的瞬间",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04546.jpg", alt: "海雕翅展，捕捉成功",      camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04552.jpg", alt: "海雕叼起鱼升空",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04559.jpg", alt: "海雕携鱼攀升",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
          { src: "/media/photography/fish-eagle-strike/20250629-DSC04564.jpg", alt: "海雕衔鱼远去",            camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/3200s", aperture: "f/6.3", focal: "318mm", date: "2025 年 6 月 29 日", location: "肯尼亚 · 纳瓦沙湖" },
        ],
      },
      {
        id: "paradise-flycatcher",
        title: "非洲寿带鸟扑食昆虫",
        intro: "1/4000s 快门下的瞬间 — 寿带鸟的长尾羽在空中划出一道弧线。",
        photos: [
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04452.jpg", alt: "寿带鸟扑向猎物",        camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 24 日", location: "肯尼亚" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04498.jpg", alt: "寿带鸟俯冲瞬间",        camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 24 日", location: "肯尼亚" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04500.jpg", alt: "寿带鸟飞行中的长尾",    camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 3200, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 24 日", location: "肯尼亚" },
          { src: "/media/photography/paradise-flycatcher/20250624-DSC04569.jpg", alt: "寿带鸟叼住猎物升起",     camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 5000, shutter: "1/4000s", aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 24 日", location: "肯尼亚" },
        ],
      },
      {
        id: "kenya-safari",
        title: "肯尼亚 Safari",
        outro:
          "Hakuna Matata 🦁!\n\n从第一次看《动物世界》和《狮子王》开始，非洲草原就成了我心中的梦境。而当眼前真正出现捕猎、嬉戏、玩耍的野生动物时，那些儿时的画面竟一幕幕成真。没有笼子，没有滤镜，只有最原始、最野性的生命在你面前自由地呼吸跳跃。非洲，不只是探险，更像一场与童年幻想的重逢。",
        photos: [
          { src: "/media/photography/kenya-safari/20250621-DSC04732.jpg", alt: "黄昏时分的草原",            camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 8000, shutter: "1/1600s", aperture: "f/6.0", focal: "88mm",  date: "2025 年 6 月 21 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250623-DSC02472.jpg", alt: "平原上的野生动物",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 8000, shutter: "1/500s",  aperture: "f/5.3", focal: "348mm", date: "2025 年 6 月 23 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250623-DSC02785.jpg", alt: "草丛中休憩的大猫",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 2000, shutter: "1/250s",  aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 23 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250624-DSC04778.jpg", alt: "阳光下的野生动物肖像",      camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 100,  shutter: "1/500s",  aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 24 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250625-DSC06647.jpg", alt: "草原上的黄金时刻",          camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/2500s", aperture: "f/2.0", focal: "139mm", date: "2025 年 6 月 25 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250626-DSC00544.jpg", alt: "平原上的大型兽群",          camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 320,  shutter: "1/500s",  aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 26 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250626-DSC06946.jpg", alt: "黄昏时分的草原景色",        camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/200s",  aperture: "f/6.3", focal: "150mm", date: "2025 年 6 月 26 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250626-DSC06983.jpg", alt: "大光圈的野生动物肖像",      camera: "Sony α7 IV", lens: "FE 50-150mm F2 GM",             iso: 100,  shutter: "1/2000s", aperture: "f/2.0", focal: "150mm", date: "2025 年 6 月 26 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250627-DSC01892.jpg", alt: "长焦镜头下的草原生灵",      camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 320,  shutter: "1/1000s", aperture: "f/5.0", focal: "400mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
          { src: "/media/photography/kenya-safari/20250627-DSC02636.jpg", alt: "暮色中的 Safari",           camera: "Sony α1 II", lens: "FE 100-400mm F4.5-5.6 GM OSS", iso: 1000, shutter: "1/640s",  aperture: "f/5.0", focal: "309mm", date: "2025 年 6 月 27 日", location: "肯尼亚 · 马赛马拉" },
        ],
      },
      {
        id: "luxor-dawn",
        title: "卢克索的破晓时分",
        intro: "🇪🇬 卢克索 | 时间在尼罗河东岸的黎明诞生",
        photos: [
          { src: "/media/photography/luxor-dawn/20250705-DSC05578.jpg", alt: "破晓时分升起的热气球",       camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 200, shutter: "1/160s",  aperture: "f/5.0", focal: "91mm",  date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05585.jpg", alt: "初光下的气球群",              camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 640, shutter: "1/160s",  aperture: "f/6.9", focal: "63mm",  date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05599.jpg", alt: "尼罗河上的气球",              camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/1000s", aperture: "f/6.0", focal: "150mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05600.jpg", alt: "东岸上空的热气球",            camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/50s",   aperture: "f/6.0", focal: "150mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05608.jpg", alt: "晨雾中漂浮的气球",            camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 320, shutter: "1/400s",  aperture: "f/6.3", focal: "150mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05619.jpg", alt: "卢克索破晓长曝",              camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/25s",   aperture: "f/8.0", focal: "100mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05626.jpg", alt: "晨曦与气球",                  camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 250, shutter: "1/160s",  aperture: "f/8.0", focal: "150mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC05634.jpg", alt: "晨光跨过尼罗河",              camera: "Sony α1 II", lens: "FE 50-150mm F2 GM",             iso: 500, shutter: "1/1600s", aperture: "f/5.7", focal: "139mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07482.jpg", alt: "黎明中的尼罗河东岸",          camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/500s",  aperture: "f/6.0", focal: "52mm",  date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07489.jpg", alt: "沉睡山谷上的广角",            camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/500s",  aperture: "f/6.0", focal: "34mm",  date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
          { src: "/media/photography/luxor-dawn/20250705-DSC07493.jpg", alt: "晨光洒过遗迹",                camera: "Sony α7 IV", lens: "FE 24-105mm F4 G OSS",         iso: 400, shutter: "1/125s",  aperture: "f/6.0", focal: "105mm", date: "2025 年 7 月 5 日", location: "埃及 · 卢克索" },
        ],
      },
    ],
    photoVideoEyebrow: "短片 · Short film",
    photoVideo: {
      title: "《我与我的阿勒泰》",
      intro: "每个人心里，都有一座属于自己的阿勒泰。这段小片是我的。",
      embedUrl: "https://player.bilibili.com/player.html?isOutside=true&aid=116080886416125&bvid=BV1SxZMBSEvv&cid=36107584037&p=1",
      embedProvider: "bilibili",
    },

    resumeEyebrow: "工作经历",
    rings: [
      {
        yearStart: 2023,
        role: "计算机视觉软件工程师",
        org: "Amazon Web Services (AWS) · 西雅图, WA · 2023 年 3 月 — 至今",
        note:
          "为 Amazon Just Walk Out 技术和 Amazon Go 构建大规模深度学习推理与计算机视觉系统。",
        video: {
          src: "/media/JWO2.mov",
          href: "https://aws.amazon.com/cn/blogs/machine-learning/enhancing-just-walk-out-technology-with-multi-modal-ai/",
        },
        image: {
          src: "/media/JWO1.png",
          href: "https://www.aboutamazon.com/news/retail/amazon-just-walk-out-improves-accuracy",
          alt: "Amazon Just Walk Out 多模态 AI 示意图",
        },
        extraVideos: {
          lead: "如果想了解更多，欢迎观看下方视频。",
          items: [
            {
              title: "Reinvent Retail & Foodservice with Just Walk Out",
              url: "https://www.youtube.com/embed/iDrexrGIrp0",
            },
            {
              title: "Inside the AI Engine Behind Just Walk Out",
              url: "https://www.youtube.com/embed/qV5TSE6rxwY",
            },
            {
              title:
                "Discover Just Walk Out by Amazon: Now with RFID Lanes",
              url: "https://www.youtube.com/embed/VxfS7D0wZSI",
            },
          ],
        },
        logo: "/media/logos/AWSlogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "机器学习研究员",
        org: "SunLab on AI for healthcare · Champaign, IL · 2022 年 5 月 — 2022 年 12 月",
        note: [
          "由 Jimeng Sun 教授指导",
          "研究方向：深度学习在医疗领域、临床试验数据生成、少样本学习与脑机接口",
          "设计并开发了一套用于 AI 驱动临床试验优化的综合性 Python 包，重点使用 GaussianCopula、CopulaGAN、MedGAN、CTGAN 等生成表格型试验记录",
          "针对目标域数据匮乏的问题，提出在 EEG 数据上进行少样本域迁移的深度学习方法，将预测器替换为基于相似性的分类器，并使用基于核密度估计 (KDE) 的分类器，对患者的 EEG 信号进行预测与分类（如 LRDA、GRDA、LPD、GPD、癫痫发作等）",
        ],
        logo: "/media/logos/SunLabLogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "研究助理",
        org: "国家超级计算应用中心 (NCSA) · Champaign, IL · 2022 年 4 月 — 2022 年 12 月",
        note: [
          "由 Kaiyu Guan 教授与 Sheng Wang 教授指导",
          "研究方向：深度学习在农业与遥感、地理校正与图像分割中的应用",
          "提出基于卫星与高光谱影像的特征点检测方法，结合深度学习、图像分割、地理信息与尺度不变特征变换 (SIFT)",
        ],
        logo: "/media/logos/NCSALogo.png",
      },
      {
        yearStart: 2022,
        yearEnd: 2022,
        role: "软件开发工程师",
        org: "Amazon · 西雅图, WA · 2022 年 6 月 — 2022 年 8 月",
        note:
          "为 Amazon 实体商店（Just Walk Out / Amazon Go）的计算机视觉团队架构、实现并部署了一套高性能 GPU 加速视频解码服务，将 Decord 解码引擎无缝集成进核心生产管线，在大规模生产环境中显著降低了 AWS 基础设施开销。围绕传统 CPU 端 PyAV 解码器与 GPU 端 Decord 解码器在多代门店摄像机硬件上的延迟权衡，进行了端到端的研究、基准测试与性能剖析，输出了完整的技术文档与基于数据的推荐方案。在 Amazon 全球实体门店推动了实时视频解码吞吐的显著延迟改善，直接提升了关键计算机视觉负载的响应速度与稳定性。",
        logo: "/media/logos/amazonLogo.png",
      },
      {
        yearStart: 2019,
        yearEnd: 2019,
        role: "云架构师",
        org: "上海 Hola 信息科技公司 · 中国上海 · 2019 年 5 月 — 2019 年 8 月",
        note: [
          "基于中国最大的社交媒体平台微信，主导设计并构建了一套消费者系统",
          "在上海 FANACO 机器人公司，使用超融合基础架构 (HCI) 为办公用户、客服坐席和软件开发工程师部署了 200 台虚拟桌面",
          "在 Genius 汽车金融公司，部署了 12 节点的 Ceph 集群以及基于 Red Hat 开发的容器；以此构建新一代软件定义存储系统，为业务系统提供分布式高可用性与弹性扩展的存储能力",
        ],
        logo: "/media/logos/HolaLogo.png",
      },
    ],

    educationEyebrow: "教育经历",
    education: [
      {
        institution: "伊利诺伊大学香槟分校 (UIUC)",
        dateRange: "2021 年 8 月 — 2022 年 12 月",
        degree: "计算机科学硕士 (Master of Computer Science)",
        gpa: "GPA: 4.00 / 4.00",
        extras: "人工智能、计算机视觉、脑机接口、软件工程",
        logo: "/media/logos/uiucLogoNew.png",
      },
      {
        institution: "密苏里大学堪萨斯城分校 (UMKC)",
        dateRange: "2017 年 8 月 — 2021 年 5 月",
        degree: "计算机科学学士 (Bachelor of Science in Computer Science)，辅修数学",
        gpa: "GPA: 3.88 / 4.00",
        extras: "人工智能、混合现实、软件工程",
        logo: "/media/logos/umkcLogo.png",
      },
    ],

    publicationsEyebrow: "论文发表",
    publications: [
      {
        title:
          "Approximate or Perish: Spectral MLP-KAN Diffusion with Attentive Function Learning for Unsupervised Hyperspectral Image Restoration",
        authors: [
          "Hongcheng Jiang, ",
          { highlight: "Jingtang Ma" },
          "†, Gaoyuan Du, Jingchen Sun, Gengyuan Zhang, Zejun Zhang, Kai Luo",
        ],
        venue: "CVPRW (PBVS), 2026",
        leaderNote: "† 项目负责人 (Research Project Leader)",
        paperUrl: "/media/CVPRW_2026.pdf",
        posterUrl: "/media/CVPRW_2026_Poster.jpg",
        codeUrl: "https://github.com/arthurmjt/SMLP-KAN",
        image: {
          src: "/media/CVPRW_IMG.png",
          alt: "Attentive KAN — 自适应特征 vs. 冗余特征对比",
        },
      },
      {
        title:
          "Advance Feature Point Detection Based on Satellite and Hyperspectral Images",
        authors: [{ highlight: "Jingtang Ma" }],
        venue: "Manuscript in preparation",
        paperUrl: "/media/AdvanceFeaturePointDetection_JingtangMa.pdf",
        image: {
          src: "/media/superG.png",
          alt: "SuperGlue 跨模态卫星与高光谱影像关键点匹配",
        },
      },
    ],

    honorsEyebrow: "荣誉与奖项",
    honors: [
      { title: "Summa Cum Laude", detail: "密苏里大学堪萨斯城分校 · 2021" },
      {
        title: "Dean's List",
        detail: "密苏里大学堪萨斯城分校 · 2018 秋 · 2019 春 · 2019 秋 · 2020 春 · 2020 秋 · 2021 春",
      },
    ],

    aiBadge: "AI 分身",
    aiTitle: "一个安静的第二声音。",
    aiSubtitle: "两分钟 · 她在我不在时替我开口。",
    aiMeta: "02 : 47 · 模型 Sienna-3 · 2026 年 4 月",
    aiPlay: "播放自我介绍",
    aiVeoNote: "库克味儿十足的 Arthur",

    contactEyebrow: "联系",
    contactNote: "欢迎随时联系 :)",
    email: "jingtang.ma@outlook.com",

    copyright: (year: number) => `版权所有 © ${year} 马敬唐 · 保留所有权利。`,
  },
};
