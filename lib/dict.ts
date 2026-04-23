export type Lang = "en" | "zh";

export type PhotoCaption = { t: string; m: string; h: string };
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
export type Publication = { authors: string; title: string; venue: string };
export type Honor = { title: string; detail?: string };
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
  photoH: string;
  photoLead: string;
  photoCollections: [string, string, string, string];
  photoCaptions: PhotoCaption[];

  resumeEyebrow: string;
  rings: Ring[];

  educationEyebrow: string;
  education: Ring[];

  publicationsEyebrow: string;
  publications: Publication[];
  pubUnderReview: string;

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
        ". My research focused on deep learning applications in agriculture and remote sensing, particularly geographic correction and image segmentation methods based on satellite and hyperspectral imagery.",
      ],
      [
        "I also worked as a Machine Learning Researcher at the ",
        { t: "Sunstella Foundation", href: "https://sites.google.com/view/sunstella-foundation/home?authuser=0" },
        ", led by ",
        { t: "Dr. Jimeng Sun", href: "https://www.sunlab.org/" },
        " and ",
        { t: "Dr. Cao (Danica) Xiao", href: "https://sites.google.com/view/danicaxiao" },
        ", where I was mentored by ",
        { t: "Zifeng Wang", href: "https://zifengwang.xyz/" },
        " and Zhen Lin. There, my work revolved around AI for healthcare, clinical trial data generation, few-shot learning, and brain-computer interfaces. Together with my mentors, I helped design and develop a comprehensive Python package for AI-driven clinical trial optimization, with a particular focus on generating tabular trial records using GaussianCopula, CopulaGAN, MedGAN, and CTGAN. In addition, to address the scarcity of target-domain data, we proposed deep learning methods for few-shot domain transfer on EEG data, aiming to predict and classify patient signals such as LPDs, GPDs, and seizures — replacing the standard predictor with a similarity-based classifier, and leveraging a Kernel Density Estimation (KDE)-based classifier.",
      ],
      [
        "I earned my undergraduate degree from the ",
        { t: "University of Missouri–Kansas City (UMKC)", href: "https://www.umkc.edu/" },
        ", with a B.S. in Computer Science and a minor in Mathematics, ",
        { em: "Summa Cum Laude" },
        ".",
      ],
      [
        "I grew up in Lanzhou, Gansu, in what I like to call a “mixed” family — if you count having grandparents from Tianjin, Shandong, Shanghai, and Dalian as a form of diversity. That upbringing gave me a lasting love for exploration. When I’m not working, you can probably find me scuba diving, skiing, hiking, or backpacking somewhere unfamiliar. As an avid photographer, I’m especially drawn to capturing the raw beauty of natural landscapes and wildlife.",
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

    photoEyebrow: "Photography portfolio",
    photoH: "Slow pictures.",
    photoLead:
      "Film, medium format, and the occasional phone snap on a good day. 142 frames kept this year; these are nine of them.",
    photoCollections: ["Recent", "Beijing", "On the road", "Studio"],
    photoCaptions: [
      { t: "Morning, Songshan",       m: "Hasselblad · Beijing · 2025",   h: "#B9CDBF" },
      { t: "Olive grove, low sun",    m: "Medium format · Puglia · 2024", h: "#C9B685" },
      { t: "Studio on a Tuesday",     m: "Digital · Brooklyn · 2026",     h: "#A8B7A9" },
      { t: "Keel yard, dusk",         m: "35mm · Shanghai · 2024",        h: "#7F8E82" },
      { t: "Rice fields, after rain", m: "Mamiya · Guangxi · 2023",       h: "#C4D2C7" },
      { t: "Window, morning",         m: "Digital · Kyoto · 2024",        h: "#E0D8C0" },
      { t: "Hands and grain",         m: "Medium format · Tokyo · 2025",  h: "#9AAA9E" },
      { t: "Aperture, late",          m: "35mm · Brooklyn · 2025",        h: "#6B7C6F" },
      { t: "Field notebook",          m: "35mm · Kyoto · 2024",           h: "#CFC8AE" },
    ],

    resumeEyebrow: "Résumé",
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
        role: "Machine Learning Research Intern",
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
        yearStart: 2021,
        yearEnd: 2022,
        role: "Master in Computer Science",
        org: "University of Illinois Urbana–Champaign (UIUC) · Aug 2021 — Dec 2022",
        note:
          "Graduated from UIUC with a Master in Computer Science (GPA 4.00 / 4.00). Coursework focused on machine learning, computer vision, and deep-learning systems.",
        logo: "/media/logos/uiucLogoNew.png",
      },
      {
        yearStart: 2017,
        yearEnd: 2021,
        role: "Bachelor in Computer Science",
        org: "University of Missouri–Kansas City (UMKC) · Fall 2017 — May 2021",
        note:
          "Bachelor in Computer Science with a minor in Mathematics from UMKC, Summa Cum Laude (GPA 3.88 / 4.00). Six consecutive semesters on the Dean's List, from Fall 2018 through Spring 2021.",
        logo: "/media/logos/umkcLogo.png",
      },
    ],

    publicationsEyebrow: "Publications",
    publications: [
      {
        authors:
          "Hongcheng Jiang, Jingtang Ma, Gaoyuan Du, Jingchen Sun, Gengyuan Zhang",
        title:
          "Approximate or Perish: Spectral MLP-KAN Diffusion with Attentive Function Learning for Unsupervised Hyperspectral Image Restoration",
        venue: "ICCV 2025",
      },
    ],
    pubUnderReview: "Under review",

    honorsEyebrow: "Honors & Awards",
    honors: [
      {
        title: "Summa Cum Laude",
        detail: "Bachelor of Computer Science · UMKC · 2021",
      },
      {
        title: "Dean's List — six consecutive semesters",
        detail: "UMKC · Fall 2018 – Spring 2021",
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
      ],
      [
        "我也曾在 ",
        { t: "Jimeng Sun 博士", href: "https://www.sunlab.org/" },
        " 和 ",
        { t: "Cao (Danica) Xiao", href: "https://sites.google.com/view/danicaxiao" },
        " 领导下的 ",
        { t: "Sunstella Foundation", href: "https://sites.google.com/view/sunstella-foundation/home?authuser=0" },
        " 担任机器学习研究员，受教于 ",
        { t: "Zifeng Wang", href: "https://zifengwang.xyz/" },
        " 和 Zhen Lin 两位导师。在那里，我的工作主要围绕医疗人工智能、试验数据生成、少样本学习 (few-shot learning) 以及脑机接口展开。我参与设计并与导师合作开发了一个用于 AI 驱动的临床试验优化的综合性 Python 包，主要侧重于使用高斯 Copula (GaussianCopula)、Copula 生成对抗网络 (CopulaGAN)、医学生成对抗网络 (MedGAN) 和条件表格生成对抗网络 (CTGAN) 生成表格型试验记录。此外，针对目标域数据匮乏的问题，我也与导师一同提出了在脑电图 (EEG) 数据上进行少样本域转移的深度学习方法，用于预测和分类患者的信号（如局部周期性放电 (LPDs)、全脑性周期性放电 (GPDs) 和癫痫发作等）——这涉及将预测器替换为基于相似性的分类器，并利用基于核密度估计 (KDE) 的分类器。",
      ],
      [
        "我本科毕业于 ",
        { t: "密苏里大学堪萨斯城分校 (UMKC)", href: "https://www.umkc.edu/" },
        "，获得计算机科学理学学士学位并辅修数学，以 ",
        { em: "Summa Cum Laude" },
        " 荣誉毕业。",
      ],
      [
        "我在甘肃兰州长大，生在一个“混搭”家庭——如果把祖辈分别来自天津、山东、上海和大连算作一种多元的话。这样的成长让我从小就喜欢探索。不工作的时候，我可能在潜水、滑雪、徒步，或者背包去陌生的地方。作为一名摄影爱好者，我尤其喜欢记录自然景观与野生动物那种原始的美。",
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

    photoEyebrow: "摄影作品",
    photoH: "慢照片。",
    photoLead:
      "胶片、中画幅, 偶尔在好天气里的手机随拍。今年留下 142 帧, 此处是其中九帧。",
    photoCollections: ["近作", "北京", "在路上", "工作室"],
    photoCaptions: [
      { t: "嵩山, 清晨",       m: "哈苏 · 北京 · 2025",     h: "#B9CDBF" },
      { t: "橄榄林, 低阳",     m: "中画幅 · 普利亚 · 2024", h: "#C9B685" },
      { t: "工作室的星期二",   m: "数码 · 布鲁克林 · 2026", h: "#A8B7A9" },
      { t: "Keel 厂院, 黄昏",  m: "35mm · 上海 · 2024",     h: "#7F8E82" },
      { t: "稻田, 雨后",       m: "玛米亚 · 广西 · 2023",   h: "#C4D2C7" },
      { t: "窗, 清晨",         m: "数码 · 京都 · 2024",     h: "#E0D8C0" },
      { t: "手与谷物",         m: "中画幅 · 东京 · 2025",   h: "#9AAA9E" },
      { t: "光圈, 夜深",       m: "35mm · 布鲁克林 · 2025", h: "#6B7C6F" },
      { t: "田野笔记",         m: "35mm · 京都 · 2024",     h: "#CFC8AE" },
    ],

    resumeEyebrow: "简历",
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
        role: "机器学习研究实习生",
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
        yearStart: 2021,
        yearEnd: 2022,
        role: "计算机科学硕士",
        org: "伊利诺伊大学香槟分校 (UIUC) · 2021 年 8 月 — 2022 年 12 月",
        note:
          "以 4.00 / 4.00 GPA 从伊利诺伊大学香槟分校取得计算机科学硕士学位。课程集中在机器学习、计算机视觉与深度学习系统方向。",
        logo: "/media/logos/uiucLogoNew.png",
      },
      {
        yearStart: 2017,
        yearEnd: 2021,
        role: "计算机科学学士",
        org: "密苏里大学堪萨斯城分校 (UMKC) · 2017 年秋 — 2021 年 5 月",
        note:
          "以 3.88 / 4.00 GPA 从密苏里大学堪萨斯城分校取得计算机科学学士学位、辅修数学，Summa Cum Laude 荣誉毕业。从 2018 年秋季到 2021 年春季连续六个学期上 Dean's List。",
        logo: "/media/logos/umkcLogo.png",
      },
    ],

    publicationsEyebrow: "论文发表",
    publications: [
      {
        authors:
          "Hongcheng Jiang, Jingtang Ma, Gaoyuan Du, Jingchen Sun, Gengyuan Zhang",
        title:
          "Approximate or Perish: Spectral MLP-KAN Diffusion with Attentive Function Learning for Unsupervised Hyperspectral Image Restoration",
        venue: "ICCV 2025",
      },
    ],
    pubUnderReview: "审阅中",

    honorsEyebrow: "荣誉与奖项",
    honors: [
      {
        title: "Summa Cum Laude",
        detail: "计算机科学学士 · 密苏里大学堪萨斯城分校 · 2021",
      },
      {
        title: "Dean's List · 六个学期连续入选",
        detail: "UMKC · 2018 秋 – 2021 春",
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
