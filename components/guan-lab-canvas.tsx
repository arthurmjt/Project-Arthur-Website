"use client";

import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  GitMerge,
  Layers,
  Map,
  Network,
  Satellite,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { useT } from "@/components/providers/i18n-provider";

type AdvisorSeg = string | { t: string; href?: string };

type SectionPara = { label: string; body: string };

type Copy = {
  advisor: AdvisorSeg[];
  researchFocusLabel: string;
  focus: { dl: string; agri: string; geo: string; seg: string };
  flowEyebrow: string;
  flowSatTag: string;
  flowAirTag: string;
  flowOutHeader: string;
  projectsOne: {
    title: string;
    subtitle: string;
    sections: SectionPara[];
    techLabel: string;
    techTags: string[];
  };
  projectsTwo: {
    title: string;
    subtitle: string;
    sections: SectionPara[];
    targetLabel: string;
    targetTags: string[];
  };
  flowchart: {
    title: string;
    mod1Title: string;
    mod1Label: string;
    mod1Caption: { before: string; emph: string; after: string };
    mod2Title: string;
    mod2Label: string;
    mod2Caption: { before: string; emph: string; after: string };
    mod3Title: string;
    mod3Label: string;
    mod3Caption: { before: string; emph: string; after: string };
  };
};

const EN: Copy = {
  advisor: [
    "Advised by ",
    {
      t: "Professor Kaiyu Guan",
      href: "http://faculty.nres.illinois.edu/~kaiyuguan/",
    },
    " & ",
    { t: "Professor Sheng Wang", href: "https://shengwang12.github.io/" },
  ],
  researchFocusLabel: "Research Focus",
  focus: {
    dl: "Deep Learning",
    agri: "Agriculture & Remote Sensing",
    geo: "Geographic Correction",
    seg: "Image Segmentation",
  },
  flowEyebrow: "Cross-Modal Geospatial Alignment · Pipeline",
  flowSatTag: "Google Earth",
  flowAirTag: "Hyperspectral",
  flowOutHeader: "SEGMENTED OUTPUT",
  projectsOne: {
    title: "Pioneering Cross-Modal Geospatial Alignment",
    subtitle:
      "Fusing Satellite & Hyperspectral Intelligence for Planetary-Scale Precision",
    sections: [
      {
        label: "The Genesis",
        body:
          "For decades, precision agriculture has been crippled by the “alignment bottleneck.” While NASA's Earth Observing System and platforms like Google Earth Engine provide massive planetary-scale data, matching these satellite macro-views with micro-level airborne hyperspectral images often yields unacceptable geospatial deviations (10m+ errors). I engineered a framework to eliminate this disparity.",
      },
      {
        label: "The Breakthrough",
        body:
          "By thoughtfully coupling advanced image segmentation with deep Graph Neural Networks (SuperGlue) and rigorously gating the outputs through GDAL geospatial coordinate verification, I architected a system that effectively bridges the modality gap and forces sub-meter alignment accuracy.",
      },
      {
        label: "Core Contribution",
        body:
          "At the heart of this framework is a Novel Feature Point Detection Model that I conceptualized and developed. Recognizing that traditional algorithms like SIFT catastrophically fail on texture-less Bird's-Eye-View (BEV) remote sensing imagery, my model pioneers the use of segmentation contours and strict geographic constraints to extract high-fidelity keypoints, directly solving the industry's BEV limitation.",
      },
    ],
    techLabel: "Stack & Methods",
    techTags: [
      "Google Earth Engine",
      "SuperGlue (GNN)",
      "GDAL Calibration",
      "Hyperspectral · 356-Band Reduction",
    ],
  },
  projectsTwo: {
    title: "High-Dimensional Semantic Segmentation for Agriculture",
    subtitle: "Multi-Spectral Crop Classification via Adapted U-Net Topologies",
    sections: [
      {
        label: "The Challenge",
        body:
          "Classifying crop yields (Corn vs. Soybean) across massive geographical expanses (Champaign, IL) requires processing heavily unoptimized, multi-spectral satellite imagery. Standard loops and shallow algorithms collapse under the computational weight of 5-band (Blue, Green, Red, Red Edge, NIR) RapidEye tensors.",
      },
      {
        label: "Engineering the Solution",
        body:
          "I developed a highly vectorized deep learning pipeline using PyTorch, completely eradicating sluggish for-loops in favor of high-speed matrix multiplications. I ingested 5m-resolution RapidEye matrices, resampled USDA Crop Data Layers for ground truth, and dynamically sliced them into massive 228×228 stride tensors.",
      },
      {
        label: "Network Architecture",
        body:
          "I custom-engineered a symmetrical U-Net architecture. Unlike standard 3-channel RGB networks, this model was hardened to natively ingest 5-dimensional spectral tensors. The contracting path captures complex geographic context, while the expansive path enables highly localized crop classification — achieving a rapid convergence accuracy of 86.6% with exceptional IoU retention, proving its capability to scale to state-level geographic predictions.",
      },
    ],
    targetLabel: "Crop Classes",
    targetTags: ["Corn", "Soybean", "Other"],
  },
  flowchart: {
    title: "Pipeline at a Glance",
    mod1Title: "1. Multi-Source Ingestion",
    mod1Label: "Satellite + Hyperspectral",
    mod1Caption: {
      before: "Multi-source raster stacks ",
      emph: "(CLAHE + 356→3 PCA)",
      after: " prepared for deep learning.",
    },
    mod2Title: "2. Deep Cross-Modal Alignment",
    mod2Label: "SuperGlue GNN",
    mod2Caption: {
      before: "Contour-based keypoints, matched cross-modally by a ",
      emph: "Graph Neural Network",
      after: ".",
    },
    mod3Title: "3. Verification & Segmentation",
    mod3Label: "GDAL + 5-Band U-Net",
    mod3Caption: {
      before: "GDAL filters to ",
      emph: "sub-meter accuracy",
      after: "; the 5-band U-Net classifies the scene.",
    },
  },
};

const ZH: Copy = {
  advisor: [
    "导师 ",
    {
      t: "Kaiyu Guan 教授",
      href: "http://faculty.nres.illinois.edu/~kaiyuguan/",
    },
    " & ",
    { t: "Sheng Wang 教授", href: "https://shengwang12.github.io/" },
  ],
  researchFocusLabel: "研究方向",
  focus: {
    dl: "深度学习 (Deep Learning)",
    agri: "农业与遥感 (Agriculture & Remote Sensing)",
    geo: "地理校正 (Geographic Correction)",
    seg: "图像分割 (Image Segmentation)",
  },
  flowEyebrow: "跨模态地理空间对齐 · 流水线",
  flowSatTag: "Google Earth",
  flowAirTag: "Hyperspectral",
  flowOutHeader: "SEGMENTED OUTPUT",
  projectsOne: {
    title: "前沿性跨模态地理空间对齐",
    subtitle: "融合卫星与高光谱情报，达成行星级精度",
    sections: [
      {
        label: "起源 (The Genesis)",
        body:
          "数十年来，精准农业一直被「对齐瓶颈」所掣肘。NASA 的地球观测系统与 Google Earth Engine 等平台提供海量行星级数据，但宏观卫星视图与微观机载高光谱影像之间常常存在难以接受的地理空间偏差（10 米以上）。我设计了一个框架来消除这种差距。",
      },
      {
        label: "突破 (The Breakthrough)",
        body:
          "通过将先进的图像分割与深度图神经网络 (SuperGlue) 巧妙耦合，并以 GDAL 地理坐标校验严格门控输出，我架构出一个真正弥合模态差距、强制亚米级对齐精度的系统。",
      },
      {
        label: "核心贡献 (Core Contribution)",
        body:
          "框架的核心是我自主构思与实现的「全新特征点检测模型」。鉴于 SIFT 等传统算法在缺乏纹理的鸟瞰 (BEV) 遥感影像上灾难性失效，本模型开创性地利用分割轮廓与严格的地理约束提取高保真关键点，直接解决了行业内 BEV 影像的这一限制。",
      },
    ],
    techLabel: "技术栈与方法",
    techTags: [
      "Google Earth Engine",
      "SuperGlue (GNN)",
      "GDAL Calibration",
      "Hyperspectral · 356-Band Reduction",
    ],
  },
  projectsTwo: {
    title: "面向农业的高维语义分割",
    subtitle: "基于改进 U-Net 拓扑的多光谱作物分类",
    sections: [
      {
        label: "挑战 (The Challenge)",
        body:
          "在大尺度地理范围（如 Champaign, IL）内分类作物产量（玉米 vs. 大豆）需要处理高度未优化的多光谱卫星影像。标准循环与浅层算法在 5 波段 (Blue / Green / Red / Red Edge / NIR) RapidEye 张量的计算重压下崩溃。",
      },
      {
        label: "工程实现 (Engineering the Solution)",
        body:
          "我基于 PyTorch 构建了高度向量化的深度学习流水线，彻底消除缓慢的 for 循环，转而采用高速矩阵运算。我接入 5 米分辨率 RapidEye 矩阵，将 USDA 作物数据层重采样作为标注真值，并动态切分为 228×228 步长张量。",
      },
      {
        label: "网络架构 (Network Architecture)",
        body:
          "我自研了一个对称的 U-Net 架构。不同于标准 3 通道 RGB 网络，本模型被加固以原生接收 5 维光谱张量。收缩路径捕捉复杂地理上下文，扩张路径实现高度局部化的作物分类——快速收敛至 86.6% 精度并保持出色的 IoU 表现，证明其可扩展至州级地理预测。",
      },
    ],
    targetLabel: "分类类别 (Crop Classes)",
    targetTags: ["Corn (玉米)", "Soybean (大豆)", "Other"],
  },
  flowchart: {
    title: "流水线一览",
    mod1Title: "1. 多源数据接入",
    mod1Label: "Satellite + Hyperspectral",
    mod1Caption: {
      before: "多源栅格栈 ",
      emph: "(CLAHE + 356→3 PCA)",
      after: "，供深度学习使用。",
    },
    mod2Title: "2. 深度跨模态对齐",
    mod2Label: "SuperGlue GNN",
    mod2Caption: {
      before: "基于轮廓的关键点，由 ",
      emph: "图神经网络 (GNN)",
      after: " 跨模态匹配。",
    },
    mod3Title: "3. 校验与分割",
    mod3Label: "GDAL + 5-Band U-Net",
    mod3Caption: {
      before: "GDAL 筛至 ",
      emph: "亚米精度",
      after: "；5 波段 U-Net 完成场景分类。",
    },
  },
};

export function GuanLabCanvas() {
  const { lang } = useT();
  const c = lang === "zh" ? ZH : EN;

  return (
    <div className="space-y-8">
      {/* Advisor — second eyebrow line under the position header */}
      <p className="eyebrow text-[color:var(--ink-3)] -mt-2">
        {c.advisor.map(renderAdvisorSeg)}
      </p>

      {/* Research focus */}
      <div className="!mt-10">
        <div className="eyebrow text-[color:var(--ink-3)] mb-4">
          {c.researchFocusLabel}
        </div>
        <div className="flex flex-wrap gap-3">
          <FocusBadge icon={<Network size={14} />} text={c.focus.dl} />
          <FocusBadge icon={<Satellite size={14} />} text={c.focus.agri} />
          <FocusBadge icon={<Map size={14} />} text={c.focus.geo} />
          <FocusBadge icon={<Layers size={14} />} text={c.focus.seg} />
        </div>
      </div>

      {/* Flow scene */}
      <GeoFlow
        eyebrow={c.flowEyebrow}
        satTag={c.flowSatTag}
        airTag={c.flowAirTag}
        outHeader={c.flowOutHeader}
      />

      {/* Project cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProjectCard
          icon={<Satellite size={20} />}
          iconBg="rgba(255,139,49,0.12)"
          iconColor="var(--orange-1)"
          accent="var(--orange-1)"
          title={c.projectsOne.title}
          subtitle={c.projectsOne.subtitle}
          sections={c.projectsOne.sections}
          tagLabel={c.projectsOne.techLabel}
          tags={c.projectsOne.techTags}
        />
        <ProjectCard
          icon={<Sprout size={20} />}
          iconBg="rgba(31,68,51,0.08)"
          iconColor="var(--ink)"
          accent="var(--green-1)"
          title={c.projectsTwo.title}
          subtitle={c.projectsTwo.subtitle}
          sections={c.projectsTwo.sections}
          tagLabel={c.projectsTwo.targetLabel}
          tags={c.projectsTwo.targetTags}
        />
      </div>

      {/* Flowchart (dark panel) */}
      <div
        className="relative rounded-[20px] p-7 md:p-8 overflow-hidden"
        style={{ background: "#0E1F17", color: "var(--ivory)" }}
      >
        <div
          aria-hidden
          className="absolute -top-20 -right-20 pointer-events-none"
          style={{ color: "var(--ivory)", opacity: 0.04 }}
        >
          <Map size={280} strokeWidth={1.25} />
        </div>
        <h3
          className="relative z-10 f-display text-[18px] md:text-[20px] leading-tight flex items-center gap-3 pb-4 mb-7 border-b"
          style={{
            borderColor: "rgba(251,251,247,0.1)",
            letterSpacing: "-0.01em",
            fontWeight: 500,
          }}
        >
          <GitMerge size={20} style={{ color: "var(--orange-1)" }} />
          {c.flowchart.title}
        </h3>

        <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-4">
          <FlowModule
            icon={<Satellite size={24} style={{ color: "var(--green-2)" }} />}
            title={c.flowchart.mod1Title}
            label={c.flowchart.mod1Label}
            figure={
              <div className="flex items-center gap-2">
                <Bar h={28} color="var(--green-2)" />
                <Bar h={42} color="var(--orange-1)" />
                <Bar h={20} color="var(--green-1)" />
                <ArrowRight size={12} style={{ color: "rgba(251,251,247,0.3)" }} />
                <Bar h={36} color="var(--green-2)" />
                <Bar h={48} color="var(--orange-1)" />
              </div>
            }
            caption={c.flowchart.mod1Caption}
          />

          <DarkConnector />

          <FlowModule
            icon={<Network size={24} style={{ color: "var(--orange-1)" }} />}
            title={c.flowchart.mod2Title}
            label={c.flowchart.mod2Label}
            figure={<GnnGraph />}
            caption={c.flowchart.mod2Caption}
          />

          <DarkConnector />

          <FlowModule
            icon={<ShieldCheck size={24} style={{ color: "var(--green-2)" }} />}
            title={c.flowchart.mod3Title}
            label={c.flowchart.mod3Label}
            accent
            figure={<MiniSegMap />}
            caption={c.flowchart.mod3Caption}
          />
        </div>
      </div>

    </div>
  );
}

function ProjectCard({
  icon,
  iconBg,
  iconColor,
  accent,
  title,
  subtitle,
  sections,
  tagLabel,
  tags,
}: {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  accent: string;
  title: string;
  subtitle: string;
  sections: SectionPara[];
  tagLabel: string;
  tags: string[];
}) {
  return (
    <div
      className="rounded-[20px] p-6 border border-[color:var(--veil-2)] flex flex-col"
      style={{ background: "var(--ivory)" }}
    >
      <div
        className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <h3
        className="f-display text-[18px] md:text-[20px] leading-tight text-[color:var(--ink)]"
        style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
      >
        {title}
      </h3>
      <p
        className="mt-3 pl-3 border-l-2 text-[13px] md:text-[14px] leading-[1.55] text-[color:var(--ink-3)]"
        style={{ borderColor: accent }}
      >
        {subtitle}
      </p>

      <div className="mt-5 space-y-4 text-[14px] text-[color:var(--ink-2)]">
        {sections.map((s, i) => (
          <p key={i} className="leading-[1.7]">
            <strong className="text-[color:var(--ink)] font-semibold">
              {s.label}:
            </strong>{" "}
            {s.body}
          </p>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-[color:var(--veil-2)]">
        <div className="eyebrow text-[color:var(--ink-3)] mb-2">{tagLabel}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <TechTag key={t} text={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SAT_BEAMS = [
  "M150 110 L240 250",
  "M165 112 L255 250",
  "M180 110 L270 250",
];

const AIR_BEAMS = [
  "M610 110 L520 250",
  "M625 112 L535 250",
  "M640 110 L550 250",
];

const FLOW_TERMS: {
  text: string;
  left: string;
  top: string;
  emph?: boolean;
}[] = [
  { text: "Google Earth", left: "21%", top: "11%", emph: true },
  { text: "Hyperspectral", left: "80%", top: "11%", emph: true },
  { text: "CLAHE", left: "30%", top: "44%" },
  { text: "356→3 PCA", left: "70%", top: "44%" },
  { text: "SuperGlue", left: "50%", top: "33%" },
  { text: "GDAL", left: "50%", top: "85%" },
  { text: "RapidEye", left: "16%", top: "75%" },
  { text: "U-Net", left: "84%", top: "75%" },
];

function GeoFlow({
  eyebrow,
  satTag,
  airTag,
  outHeader,
}: {
  eyebrow: string;
  satTag: string;
  airTag: string;
  outHeader: string;
}) {
  return (
    <div
      className="relative rounded-[20px] p-6 md:p-8 border border-[color:var(--veil-2)] overflow-hidden"
      style={{ background: "var(--ivory)" }}
    >
      <div className="eyebrow text-[color:var(--ink-3)] mb-6">{eyebrow}</div>

      <div className="relative mx-auto w-full max-w-[760px] aspect-[16/9]">
        <svg
          viewBox="0 0 760 427"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <defs>
            <radialGradient id="guanlab-sat-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(76,151,109,0.22)" />
              <stop offset="60%" stopColor="rgba(76,151,109,0.05)" />
              <stop offset="100%" stopColor="rgba(76,151,109,0)" />
            </radialGradient>
            <radialGradient id="guanlab-air-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,139,49,0.18)" />
              <stop offset="60%" stopColor="rgba(255,139,49,0.04)" />
              <stop offset="100%" stopColor="rgba(255,139,49,0)" />
            </radialGradient>
          </defs>

          {/* Soft glows behind sources */}
          <circle cx="165" cy="110" r="80" fill="url(#guanlab-sat-glow)" />
          <circle cx="625" cy="110" r="80" fill="url(#guanlab-air-glow)" />

          {/* Satellite (left) */}
          <g transform="translate(165 110)">
            <g
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Body */}
              <rect x="-12" y="-10" width="24" height="20" rx="3" fill="var(--ivory)" />
              {/* Solar panels */}
              <rect x="-38" y="-7" width="22" height="14" fill="var(--ivory)" />
              <rect x="16" y="-7" width="22" height="14" fill="var(--ivory)" />
              {/* Antenna */}
              <path d="M0 -10 L0 -22" />
              <circle cx="0" cy="-25" r="2.4" fill="var(--orange-1)" stroke="none" />
            </g>
            {/* Solar cell lines */}
            <g stroke="var(--ink)" strokeWidth="0.8" opacity="0.4">
              <line x1="-31" y1="-7" x2="-31" y2="7" />
              <line x1="-24" y1="-7" x2="-24" y2="7" />
              <line x1="23" y1="-7" x2="23" y2="7" />
              <line x1="30" y1="-7" x2="30" y2="7" />
            </g>
          </g>

          {/* Plane (right) */}
          <g transform="translate(625 105)">
            <g fill="var(--ivory)" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round">
              {/* Fuselage */}
              <ellipse cx="0" cy="0" rx="28" ry="6" />
              {/* Wings */}
              <path d="M-4 -2 L-22 -16 L-12 -16 L4 -2 Z" />
              <path d="M-4 2 L-22 16 L-12 16 L4 2 Z" />
              {/* Tail */}
              <path d="M22 -2 L30 -10 L26 -10 L18 -2 Z" />
            </g>
            <circle cx="-8" cy="0" r="1.6" fill="var(--orange-1)" />
            <circle cx="2" cy="0" r="1.6" fill="var(--orange-1)" />
          </g>

          {/* Source labels */}
          <text
            x="165"
            y="155"
            textAnchor="middle"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="9"
            fill="var(--ink-3)"
            style={{ letterSpacing: "1.6px" }}
          >
            {satTag.toUpperCase()} · MACRO
          </text>
          <text
            x="625"
            y="150"
            textAnchor="middle"
            fontFamily="var(--font-mono), ui-monospace, monospace"
            fontSize="9"
            fill="var(--ink-3)"
            style={{ letterSpacing: "1.6px" }}
          >
            {airTag.toUpperCase()} · MICRO
          </text>

          {/* Beams: pipeline base + animated pulses */}
          <g fill="none" strokeLinecap="round">
            {SAT_BEAMS.map((d, i) => (
              <path
                key={`sat-base-${i}`}
                d={d}
                stroke="var(--ink-3)"
                strokeWidth={1.2}
                opacity={0.35}
              />
            ))}
            {SAT_BEAMS.map((d, i) => (
              <path
                key={`sat-pulse-${i}`}
                d={d}
                stroke="var(--green-2)"
                strokeWidth={1.8}
                opacity={0.85}
                className="bci-wire-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
            {AIR_BEAMS.map((d, i) => (
              <path
                key={`air-base-${i}`}
                d={d}
                stroke="var(--ink-3)"
                strokeWidth={1.2}
                opacity={0.35}
              />
            ))}
            {AIR_BEAMS.map((d, i) => (
              <path
                key={`air-pulse-${i}`}
                d={d}
                stroke="var(--orange-1)"
                strokeWidth={1.8}
                opacity={0.9}
                className="bci-wire-pulse"
                style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
              />
            ))}
          </g>

          {/* Cropland strip — receives both modalities */}
          <g transform="translate(220 250)">
            <rect
              x="0"
              y="0"
              width="320"
              height="48"
              rx="6"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="1.4"
            />
            {/* Field cells */}
            {Array.from({ length: 16 }).map((_, i) => {
              const colors = [
                "rgba(76,151,109,0.55)",
                "rgba(255,139,49,0.55)",
                "rgba(24,93,60,0.45)",
                "rgba(76,151,109,0.35)",
              ];
              return (
                <rect
                  key={i}
                  x={6 + i * 19.5}
                  y="6"
                  width="17"
                  height="36"
                  rx="2"
                  fill={colors[i % colors.length]}
                />
              );
            })}
          </g>

          {/* Fusion pill */}
          <g>
            <rect
              x="334"
              y="312"
              width="92"
              height="28"
              rx="14"
              fill="var(--paper)"
              stroke="var(--orange-1)"
              strokeWidth="1.4"
            />
            <text
              x="380"
              y="330"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="11"
              fontWeight="600"
              fill="var(--orange-1)"
            >
              FUSION
            </text>
          </g>

          {/* Pipeline flow line: cropland → monitor (right) */}
          <g>
            <text
              x="470"
              y="222"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              fill="var(--ink-3)"
              style={{ letterSpacing: "1.6px" }}
            >
              ALIGNED · TENSOR
            </text>
            <line
              x1="540"
              y1="274"
              x2="535"
              y2="244"
              stroke="var(--ink-3)"
              strokeWidth={1.3}
              opacity={0.35}
              strokeLinecap="round"
            />
            <line
              x1="540"
              y1="274"
              x2="535"
              y2="244"
              stroke="var(--orange-1)"
              strokeWidth={2.2}
              opacity={0.95}
              strokeLinecap="round"
              className="bci-line-pulse"
            />
            <path
              d="M535 244 L540 254 L530 254 Z"
              fill="var(--ink-3)"
              opacity={0.85}
            />
          </g>

          {/* Computer monitor: segmentation output */}
          <g>
            {/* Bezel */}
            <rect
              x="455"
              y="130"
              width="190"
              height="115"
              rx="10"
              fill="var(--ink)"
            />
            {/* Screen */}
            <rect
              x="465"
              y="140"
              width="170"
              height="95"
              rx="4"
              fill="#0E1F17"
            />

            {/* Header */}
            <text
              x="476"
              y="155"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="8"
              fill="rgba(251,251,247,0.5)"
              style={{ letterSpacing: "1.6px" }}
            >
              {outHeader}
            </text>

            {/* Segmentation pixel grid (8x4) */}
            {(() => {
              const cells: ReactNode[] = [];
              const palette = [
                "var(--orange-1)",
                "var(--green-2)",
                "var(--green-1)",
                "rgba(251,251,247,0.18)",
              ];
              const layout = [
                [0, 0, 1, 1, 1, 0, 0, 2],
                [0, 1, 1, 1, 0, 0, 2, 2],
                [1, 1, 0, 0, 0, 2, 2, 1],
                [1, 0, 0, 2, 2, 2, 1, 1],
              ];
              for (let r = 0; r < 4; r++) {
                for (let col = 0; col < 8; col++) {
                  cells.push(
                    <rect
                      key={`seg-${r}-${col}`}
                      x={476 + col * 18}
                      y={166 + r * 14}
                      width={16}
                      height={12}
                      rx={1.5}
                      fill={palette[layout[r][col]]}
                      opacity={0.92}
                    />,
                  );
                }
              }
              return cells;
            })()}

            {/* Stand */}
            <path d="M530 245 L515 270 L585 270 L570 245 Z" fill="var(--ink)" />
            <rect x="500" y="268" width="100" height="6" rx="3" fill="var(--ink)" />
          </g>

          {/* Legend chips for the monitor */}
          <g>
            <circle cx="475" cy="248" r="3" fill="var(--orange-1)" />
            <text
              x="482"
              y="251"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="8"
              fill="var(--ink-3)"
              style={{ letterSpacing: "1px" }}
            >
              CORN
            </text>
            <circle cx="525" cy="248" r="3" fill="var(--green-2)" />
            <text
              x="532"
              y="251"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="8"
              fill="var(--ink-3)"
              style={{ letterSpacing: "1px" }}
            >
              SOY
            </text>
            <circle cx="568" cy="248" r="3" fill="var(--green-1)" />
            <text
              x="575"
              y="251"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="8"
              fill="var(--ink-3)"
              style={{ letterSpacing: "1px" }}
            >
              OTHER
            </text>
          </g>
        </svg>

        {/* Floating terminology pills */}
        {FLOW_TERMS.map((t) => (
          <FlowTag key={t.text} {...t} />
        ))}
      </div>
    </div>
  );
}

function FlowTag({
  text,
  left,
  top,
  emph,
}: {
  text: string;
  left: string;
  top: string;
  emph?: boolean;
}) {
  return (
    <span
      className="absolute f-mono px-2.5 py-1 rounded-full border whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
      style={{
        left,
        top,
        fontSize: "11px",
        background: "var(--paper)",
        borderColor: emph ? "rgba(255,139,49,0.5)" : "var(--veil-2)",
        color: emph ? "var(--orange-1)" : "var(--ink-2)",
        boxShadow: "0 4px 14px -8px rgba(31,68,51,0.18)",
        fontWeight: emph ? 600 : 400,
      }}
    >
      {text}
    </span>
  );
}

function renderAdvisorSeg(seg: AdvisorSeg, i: number) {
  if (typeof seg === "string") return <span key={i}>{seg}</span>;
  if (seg.href) {
    return (
      <a
        key={i}
        href={seg.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[color:var(--ink-2)] underline decoration-[color:var(--veil)] decoration-1 underline-offset-[2px] hover:text-[color:var(--orange-1)] hover:decoration-[color:var(--orange-1)] transition-colors"
      >
        {seg.t}
      </a>
    );
  }
  return <span key={i}>{seg.t}</span>;
}

function FocusBadge({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div
      className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[color:var(--veil-2)]"
      style={{ background: "var(--ivory)" }}
    >
      <span style={{ color: "var(--orange-1)" }}>{icon}</span>
      <span className="text-[13px] text-[color:var(--ink)]">{text}</span>
    </div>
  );
}

function TechTag({ text }: { text: string }) {
  return (
    <span
      className="f-mono text-[11px] px-2.5 py-1 rounded-[6px] border border-[color:var(--veil-2)] text-[color:var(--ink-2)]"
      style={{ background: "var(--paper)" }}
    >
      {text}
    </span>
  );
}

function FlowModule({
  icon,
  title,
  label,
  figure,
  caption,
  accent,
}: {
  icon: ReactNode;
  title: string;
  label: string;
  figure: ReactNode;
  caption: { before: string; emph: string; after: string };
  accent?: boolean;
}) {
  return (
    <div
      className="flex-1 rounded-[14px] p-5 flex flex-col items-center border"
      style={{
        background: "rgba(251,251,247,0.035)",
        borderColor: accent
          ? "rgba(255,139,49,0.32)"
          : "rgba(251,251,247,0.1)",
      }}
    >
      <div className="mb-3">{icon}</div>
      <h4
        className="text-[13px] md:text-[14px] mb-3 text-center"
        style={{ color: "var(--ivory)", fontWeight: 600 }}
      >
        {title}
      </h4>
      <div
        className="w-full rounded-[10px] p-4 mb-4 flex flex-col items-center border"
        style={{
          background: "rgba(0,0,0,0.25)",
          borderColor: accent
            ? "rgba(255,139,49,0.22)"
            : "rgba(251,251,247,0.08)",
        }}
      >
        <span
          className="eyebrow mb-3"
          style={{
            color: accent ? "var(--orange-1)" : "rgba(251,251,247,0.55)",
          }}
        >
          {label}
        </span>
        {figure}
      </div>
      <p
        className="text-[12px] leading-[1.65] text-center"
        style={{ color: "rgba(251,251,247,0.6)" }}
      >
        {caption.before}
        <span style={{ color: "var(--ivory)", fontWeight: 500 }}>
          {caption.emph}
        </span>
        {caption.after}
      </p>
    </div>
  );
}

function DarkConnector() {
  return (
    <div
      className="flex items-center justify-center py-2 md:py-0"
      style={{ color: "rgba(251,251,247,0.35)" }}
    >
      <ArrowRight className="hidden md:block" size={22} />
      <ArrowDown className="block md:hidden" size={22} />
    </div>
  );
}

function Bar({ h, color }: { h: number; color: string }) {
  return (
    <span
      className="w-[10px] rounded-[3px]"
      style={{ height: h, background: color, opacity: 0.9 }}
    />
  );
}

function GnnGraph() {
  // 6 nodes connected in a small graph — visual stand-in for SuperGlue matching
  const nodes = [
    { x: 12, y: 14, c: "var(--orange-1)" },
    { x: 44, y: 8, c: "var(--green-2)" },
    { x: 78, y: 18, c: "var(--orange-1)" },
    { x: 18, y: 46, c: "var(--green-1)" },
    { x: 52, y: 38, c: "var(--orange-1)" },
    { x: 84, y: 50, c: "var(--green-2)" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
  ];
  return (
    <svg viewBox="0 0 100 60" className="w-[120px] h-[60px]" aria-hidden>
      <g stroke="rgba(251,251,247,0.35)" strokeWidth="0.6">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={3} fill={n.c} />
      ))}
    </svg>
  );
}

function MiniSegMap() {
  // Compact 8x4 segmentation grid mirroring the monitor output
  const palette = [
    "var(--orange-1)",
    "var(--green-2)",
    "var(--green-1)",
    "rgba(251,251,247,0.2)",
  ];
  const layout = [
    [0, 0, 1, 1, 1, 0, 0, 2],
    [0, 1, 1, 1, 0, 0, 2, 2],
    [1, 1, 0, 0, 0, 2, 2, 1],
    [1, 0, 0, 2, 2, 2, 1, 1],
  ];
  return (
    <div className="grid grid-cols-8 gap-[2px]">
      {layout.flatMap((row, r) =>
        row.map((v, c) => (
          <span
            key={`${r}-${c}`}
            className="w-[10px] h-[10px] rounded-[2px]"
            style={{ background: palette[v], opacity: 0.92 }}
          />
        )),
      )}
    </div>
  );
}
