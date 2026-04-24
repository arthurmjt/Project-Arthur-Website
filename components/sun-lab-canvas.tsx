"use client";

import type { ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Code,
  Cpu,
  Database,
  GitMerge,
  Layers,
  Network,
  ShieldAlert,
} from "lucide-react";
import { useT } from "@/components/providers/i18n-provider";

type AdvisorSeg = string | { t: string; href?: string };

type Copy = {
  advisor: AdvisorSeg[];
  researchFocusLabel: string;
  focus: { dl: string; trial: string; fewShot: string; bci: string };
  bciFlowLabel: string;
  bciSignalNote: string;
  bciClassifierHeader: string;
  projectsOne: {
    title: string;
    desc: string;
    techLabel: string;
    techTags: string[];
  };
  projectsTwo: {
    title: string;
    desc: string;
    bullets: { before: string; emph: string; after: string }[];
    targetLabel: string;
    targetTags: string[];
  };
  flowchart: {
    title: string;
    baseLabel: string;
    embLabel: string;
    kdeLabel: string;
    kdeLeftChip: string;
    kdeRightChip: string;
    mod1Title: string;
    mod2Title: string;
    mod3Title: string;
    mod1Caption: { before: string; emph: string; after: string };
    mod2Caption: { before: string; emph: string; after: string };
    mod3Caption: { before: string; emph: string; after: string };
  };
  motivationTitle: string;
  motivationBody: string;
};

const EN: Copy = {
  advisor: [
    "Advised by ",
    { t: "Professor Jimeng Sun", href: "https://www.sunlab.org/" },
    " · Mentored by ",
    { t: "Dr. Zifeng Wang", href: "https://zifengwang.xyz/" },
    " & ",
    { t: "Dr. Zhen Lin" },
  ],
  researchFocusLabel: "Research Focus",
  focus: {
    dl: "Deep Learning in Healthcare",
    trial: "Trial Data Generation",
    fewShot: "Few-shot Learning",
    bci: "Brain Computer Interface",
  },
  bciFlowLabel: "Brain–Computer Interface · Signal Flow",
  bciSignalNote: "EEG",
  bciClassifierHeader: "CLASSIFIER OUTPUT",
  projectsOne: {
    title: "AI-Driven Clinical Trial Data Generation",
    desc:
      "Designed and developed a comprehensive Python package for clinical trial optimization, with a focus on generating tabular trial records — expanding research data while preserving patient privacy.",
    techLabel: "Key Models & Techniques",
    techTags: ["GaussianCopula", "CopulaGAN", "MedGAN", "CTGAN", "Python Package"],
  },
  projectsTwo: {
    title: "EEG Cross-Domain Few-Shot Learning",
    desc:
      "Treating each patient as an independent data domain, proposed a new deep-learning approach for cross-domain few-shot classification of EEG signals when target-domain data is severely limited.",
    bullets: [
      {
        before: "Uses a ",
        emph: "Similarity-based classifier",
        after: " in place of a traditional predictor.",
      },
      {
        before: "Combines ",
        emph: "Kernel Density Estimation (KDE)",
        after: " to absorb distribution shift across domains.",
      },
    ],
    targetLabel: "Prediction Targets",
    targetTags: ["LRDA", "GRDA", "LPD / GPD", "Seizure"],
  },
  flowchart: {
    title: "Methodology: KDE-Based Cross-Domain Few-Shot Transfer",
    baseLabel: "Base DNN (Feature Extraction)",
    embLabel: "Embeddings (Feature Mapping)",
    kdeLabel: "KDE Classifier",
    kdeLeftChip: "Few-shots",
    kdeRightChip: "Similarity",
    mod1Title: "1. Source-Domain Pretraining",
    mod2Title: "2. Domain-Invariant Embedding Space",
    mod3Title: "3. Target-Domain Few-Shot Classification",
    mod1Caption: {
      before: "Train a deep neural network on a large ",
      emph: "source-patient EEG training set",
      after: " to learn foundational patterns.",
    },
    mod2Caption: {
      before: "Remove the prediction head and use ",
      emph: "Log Loss",
      after: " to build a metric space that captures domain-invariant features.",
    },
    mod3Caption: {
      before: "Draw ",
      emph: "a handful of shots",
      after:
        " from the target patient and build a kernel-density-estimation classifier for precise prediction.",
    },
  },
  motivationTitle: "Research Motivation & Impact",
  motivationBody:
    "“Seizure disorder is one of the most dangerous neurological conditions. If patients could be warned before a seizure and take precautions — for instance, lying or sitting down in time — many accidental injuries could be prevented.” Our model decodes EEG signals to deliver accurate early warning and classification even when target-patient data is extremely scarce, using AI to help keep patients safe.",
};

const ZH: Copy = {
  advisor: [
    "导师 ",
    { t: "Jimeng Sun 教授", href: "https://www.sunlab.org/" },
    " · 指导 ",
    { t: "Zifeng Wang 博士", href: "https://zifengwang.xyz/" },
    " & ",
    { t: "Zhen Lin 博士" },
  ],
  researchFocusLabel: "研究方向",
  focus: {
    dl: "医疗深度学习 (Deep Learning in Healthcare)",
    trial: "临床试验数据生成 (Trial Data Generation)",
    fewShot: "少样本学习 (Few-shot Learning)",
    bci: "脑机接口 (Brain Computer Interface)",
  },
  bciFlowLabel: "脑机接口 · 信号流",
  bciSignalNote: "EEG",
  bciClassifierHeader: "CLASSIFIER OUTPUT",
  projectsOne: {
    title: "AI 驱动的临床试验数据生成",
    desc:
      "设计并开发了一套功能全面的 Python 算法包，专为临床试验优化而生。重点突破表格化临床试验记录的生成，在保护患者隐私的同时扩充研究数据。",
    techLabel: "关键模型与技术",
    techTags: ["GaussianCopula", "CopulaGAN", "MedGAN", "CTGAN", "Python Package"],
  },
  projectsTwo: {
    title: "EEG 跨域少样本学习与分类",
    desc:
      "将每位患者视为一个独立的“数据域”，针对目标域数据极度匮乏的问题，提出基于深度学习的 EEG 跨域少样本分类新方法。",
    bullets: [
      {
        before: "使用",
        emph: "基于相似度的分类器 (Similarity-based classifier)",
        after: "替代传统预测器。",
      },
      {
        before: "结合",
        emph: "核密度估计 (KDE)",
        after: " 构建分类器，应对数据分布差异。",
      },
    ],
    targetLabel: "分类目标 (Prediction Targets)",
    targetTags: ["LRDA", "GRDA", "LPD / GPD", "Seizure (癫痫)"],
  },
  flowchart: {
    title: "方法论图解：基于 KDE 的跨域少样本迁移 (Few-shot Domain Transfer)",
    baseLabel: "Base DNN (特征提取)",
    embLabel: "Embeddings (特征映射)",
    kdeLabel: "KDE Classifier",
    kdeLeftChip: "Few-shots",
    kdeRightChip: "相似度计算",
    mod1Title: "1. 源域模型预训练",
    mod2Title: "2. 域不变特征度量空间",
    mod3Title: "3. 目标域少样本与分类",
    mod1Caption: {
      before: "使用海量",
      emph: "源患者 EEG 训练集",
      after: "，训练深度神经网络，学习基础模式。",
    },
    mod2Caption: {
      before: "移除预测层，采用 ",
      emph: "Log Loss",
      after: " 构建度量空间，提取域不变特征。",
    },
    mod3Caption: {
      before: "从目标患者随机抽取",
      emph: "极少数样本 (Shots)",
      after: "，构建核密度估计分类器实现精确预测。",
    },
  },
  motivationTitle: "研究动机与影响",
  motivationBody:
    "“癫痫 (Seizure disorder) 是最危险的神经系统疾病之一。如果患者能在发作前得到预警并采取预防措施（例如及时躺下或坐下），就能极大避免意外伤害。” 我们的模型致力于通过解析 EEG 信号，在目标患者数据极其有限的情况下，依然实现精准的早期预警与分类，用人工智能守护患者安全。",
};

export function SunLabCanvas() {
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
          <FocusBadge icon={<Activity size={14} />} text={c.focus.bci} />
          <FocusBadge icon={<Network size={14} />} text={c.focus.dl} />
          <FocusBadge icon={<Database size={14} />} text={c.focus.trial} />
          <FocusBadge icon={<Cpu size={14} />} text={c.focus.fewShot} />
        </div>
      </div>

      {/* BCI flowchart: person → signal → computer */}
      <BciFlow
        eyebrow={c.bciFlowLabel}
        signalNote={c.bciSignalNote}
        classifierHeader={c.bciClassifierHeader}
      />

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Project 1 */}
        <div
          className="rounded-[20px] p-6 border border-[color:var(--veil-2)]"
          style={{ background: "var(--ivory)" }}
        >
          <div
            className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
            style={{
              background: "rgba(255,139,49,0.12)",
              color: "var(--orange-1)",
            }}
          >
            <Database size={20} />
          </div>
          <h3
            className="f-display text-[18px] md:text-[20px] leading-tight text-[color:var(--ink)]"
            style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
          >
            {c.projectsOne.title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-2)]">
            {c.projectsOne.desc}
          </p>
          <div className="mt-5">
            <div className="eyebrow text-[color:var(--ink-3)] mb-2">
              {c.projectsOne.techLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {c.projectsOne.techTags.map((t) => (
                <TechTag key={t} text={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="rounded-[20px] p-6 border border-[color:var(--veil-2)]"
          style={{ background: "var(--ivory)" }}
        >
          <div
            className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
            style={{
              background: "rgba(31,68,51,0.08)",
              color: "var(--ink)",
            }}
          >
            <Activity size={20} />
          </div>
          <h3
            className="f-display text-[18px] md:text-[20px] leading-tight text-[color:var(--ink)]"
            style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
          >
            {c.projectsTwo.title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.65] text-[color:var(--ink-2)]">
            {c.projectsTwo.desc}
          </p>
          <ul className="mt-4 space-y-3 text-[14px] text-[color:var(--ink-2)]">
            {c.projectsTwo.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <Code
                  size={14}
                  className="mt-[5px] shrink-0"
                  style={{ color: "var(--orange-1)" }}
                />
                <span className="leading-[1.65]">
                  {b.before}
                  <strong className="text-[color:var(--ink)] font-semibold">
                    {b.emph}
                  </strong>
                  {b.after}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <div className="eyebrow text-[color:var(--ink-3)] mb-2">
              {c.projectsTwo.targetLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {c.projectsTwo.targetTags.map((t) => (
                <TechTag key={t} text={t} />
              ))}
            </div>
          </div>
        </div>
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
          <Network size={280} strokeWidth={1.25} />
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
            icon={
              <Database
                size={24}
                style={{ color: "var(--green-2)" }}
              />
            }
            title={c.flowchart.mod1Title}
            label={c.flowchart.baseLabel}
            figure={
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <Dot />
                  <Dot />
                  <Dot />
                </div>
                <ArrowRight size={12} style={{ color: "rgba(251,251,247,0.3)" }} />
                <Bar h={32} color="var(--green-2)" />
                <ArrowRight size={12} style={{ color: "rgba(251,251,247,0.3)" }} />
                <Bar h={48} color="var(--orange-1)" />
                <ArrowRight size={12} style={{ color: "rgba(251,251,247,0.3)" }} />
                <Bar h={24} color="var(--green-1)" />
              </div>
            }
            caption={c.flowchart.mod1Caption}
          />

          <DarkConnector />

          <FlowModule
            icon={<Layers size={24} style={{ color: "var(--orange-1)" }} />}
            title={c.flowchart.mod2Title}
            label={c.flowchart.embLabel}
            figure={
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  "var(--orange-1)",
                  "rgba(251,251,247,0.25)",
                  "var(--green-2)",
                  "rgba(251,251,247,0.25)",
                  "rgba(251,251,247,0.25)",
                  "var(--green-1)",
                  "rgba(251,251,247,0.25)",
                  "var(--orange-1)",
                ].map((bg, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-[3px]"
                    style={{ background: bg, opacity: 0.85 }}
                  />
                ))}
              </div>
            }
            caption={c.flowchart.mod2Caption}
          />

          <DarkConnector />

          <FlowModule
            icon={<Cpu size={24} style={{ color: "var(--green-2)" }} />}
            title={c.flowchart.mod3Title}
            label={c.flowchart.kdeLabel}
            accent
            figure={
              <div className="flex items-center gap-2">
                <span
                  className="f-mono text-[10px] px-2 py-1 rounded border"
                  style={{
                    background: "rgba(251,251,247,0.04)",
                    color: "rgba(251,251,247,0.75)",
                    borderColor: "rgba(251,251,247,0.12)",
                  }}
                >
                  {c.flowchart.kdeLeftChip}
                </span>
                <span style={{ color: "var(--orange-1)" }}>+</span>
                <span
                  className="f-mono text-[10px] px-2 py-1 rounded border"
                  style={{
                    background: "rgba(255,139,49,0.12)",
                    color: "var(--orange-1)",
                    borderColor: "rgba(255,139,49,0.3)",
                  }}
                >
                  {c.flowchart.kdeRightChip}
                </span>
              </div>
            }
            caption={c.flowchart.mod3Caption}
          />
        </div>
      </div>

      {/* Motivation */}
      <div
        className="rounded-[20px] p-6 border border-[color:var(--veil-2)] flex flex-col md:flex-row items-start gap-5"
        style={{ background: "var(--panel)" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: "rgba(255,139,49,0.14)",
            color: "var(--orange-1)",
          }}
        >
          <ShieldAlert size={26} />
        </div>
        <div>
          <h3
            className="f-display text-[17px] md:text-[18px] text-[color:var(--ink)]"
            style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
          >
            {c.motivationTitle}
          </h3>
          <p className="mt-2 text-[14px] leading-[1.7] text-[color:var(--ink-2)]">
            {c.motivationBody}
          </p>
        </div>
      </div>
    </div>
  );
}

const WIRE_PATHS = [
  "M105 158 Q 135 180, 185 220 Q 205 230, 220 236",
  "M122 130 Q 155 160, 195 210 Q 210 228, 220 236",
  "M145 118 Q 170 150, 205 200 Q 215 225, 220 236",
  "M168 130 Q 185 160, 213 200 Q 220 225, 222 236",
  "M185 158 Q 195 175, 215 210 Q 222 225, 222 236",
];

const FLOW_TERMS: {
  text: string;
  left: string;
  top: string;
  emph?: boolean;
}[] = [
  // left — emphasized source signal
  { text: "EEG", left: "5%", top: "13%", emph: true },
  // top — data-generation cluster
  { text: "GaussianCopula", left: "22%", top: "5%" },
  { text: "CopulaGAN", left: "40%", top: "5%" },
  { text: "MedGAN", left: "58%", top: "5%" },
  { text: "CTGAN", left: "75%", top: "5%" },
  // upper-middle — method labels (right of person, above flow line)
  { text: "DNN", left: "37%", top: "35%" },
  { text: "Log Loss", left: "51%", top: "35%" },
  { text: "Few-shot", left: "65%", top: "35%" },
  // below flow line — supporting methods
  { text: "Similarity", left: "45%", top: "72%" },
  { text: "Embedding", left: "60%", top: "72%" },
];

function BciFlow({
  eyebrow,
  signalNote,
  classifierHeader,
}: {
  eyebrow: string;
  signalNote: string;
  classifierHeader: string;
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
            <radialGradient id="sunlab-bci-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,139,49,0.22)" />
              <stop offset="60%" stopColor="rgba(255,139,49,0.05)" />
              <stop offset="100%" stopColor="rgba(255,139,49,0)" />
            </radialGradient>
          </defs>

          {/* Soft glow behind the head */}
          <circle
            cx="145"
            cy="165"
            r="95"
            fill="url(#sunlab-bci-glow)"
          />

          {/* Person silhouette */}
          <g
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Head */}
            <ellipse cx="145" cy="175" rx="48" ry="54" fill="var(--ivory)" />
            {/* Neck */}
            <path d="M127 228 L127 246 M163 228 L163 246" />
            {/* Shoulders + torso */}
            <path d="M55 345 C 55 295, 108 250, 145 247 C 182 250, 235 295, 235 345" />
            <path d="M55 345 L45 420" />
            <path d="M235 345 L245 420" />
          </g>

          {/* EEG cap arc across top of head */}
          <path
            d="M95 150 Q 145 100, 195 150"
            stroke="var(--orange-1)"
            strokeWidth="1.6"
            fill="none"
            opacity="0.55"
          />

          {/* Electrodes on the cap */}
          {[
            { cx: 105, cy: 158 },
            { cx: 122, cy: 130 },
            { cx: 145, cy: 118 },
            { cx: 168, cy: 130 },
            { cx: 185, cy: 158 },
          ].map((e, i) => (
            <circle
              key={i}
              cx={e.cx}
              cy={e.cy}
              r={3.6}
              fill="var(--orange-1)"
              opacity={0.85}
            />
          ))}

          {/* Wire bundle: static pipeline base + animated orange signal flow */}
          <g fill="none" strokeLinecap="round">
            {WIRE_PATHS.map((d, i) => (
              <path
                key={`wire-base-${i}`}
                d={d}
                stroke="var(--ink-3)"
                strokeWidth={1.2}
                opacity={0.4}
              />
            ))}
            {WIRE_PATHS.map((d, i) => (
              <path
                key={`wire-pulse-${i}`}
                d={d}
                stroke="var(--orange-1)"
                strokeWidth={1.8}
                opacity={0.9}
                className="bci-wire-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </g>

          {/* BCI signal processor box */}
          <g>
            <rect
              x="218"
              y="230"
              width="54"
              height="26"
              rx="6"
              fill="var(--ink)"
            />
            <text
              x="245"
              y="247"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="10"
              fontWeight="600"
              fill="var(--ivory)"
              style={{ letterSpacing: "1.5px" }}
            >
              BCI
            </text>
          </g>

          {/* Signal flow BCI → Computer: pipeline base + animated stream */}
          <g>
            {/* Signal label above the line */}
            <text
              x="384"
              y="228"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="9"
              fill="var(--ink-3)"
              style={{ letterSpacing: "1.6px" }}
            >
              {signalNote.toUpperCase()} · SIGNAL
            </text>
            {/* Pipeline base */}
            <line
              x1="272"
              y1="244"
              x2="527"
              y2="244"
              stroke="var(--ink-3)"
              strokeWidth={1.3}
              opacity={0.35}
              strokeLinecap="round"
            />
            {/* Animated orange stream */}
            <line
              x1="272"
              y1="244"
              x2="527"
              y2="244"
              stroke="var(--orange-1)"
              strokeWidth={2.2}
              opacity={0.95}
              strokeLinecap="round"
              className="bci-line-pulse"
            />
            {/* Arrowhead */}
            <path
              d="M527 244 L517 239 L517 249 Z"
              fill="var(--ink-3)"
              opacity={0.85}
            />
          </g>

          {/* KDE pill centered on flow line */}
          <g>
            <rect
              x="356"
              y="257"
              width="72"
              height="28"
              rx="14"
              fill="var(--paper)"
              stroke="var(--orange-1)"
              strokeWidth="1.4"
            />
            <text
              x="392"
              y="275"
              textAnchor="middle"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="12"
              fontWeight="600"
              fill="var(--orange-1)"
            >
              KDE
            </text>
          </g>

          {/* Computer monitor */}
          <g>
            {/* Bezel */}
            <rect
              x="535"
              y="130"
              width="190"
              height="135"
              rx="10"
              fill="var(--ink)"
            />
            {/* Screen */}
            <rect
              x="545"
              y="140"
              width="170"
              height="115"
              rx="4"
              fill="#0E1F17"
            />

            {/* Header */}
            <text
              x="556"
              y="155"
              fontFamily="var(--font-mono), ui-monospace, monospace"
              fontSize="8"
              fill="rgba(251,251,247,0.5)"
              style={{ letterSpacing: "1.6px" }}
            >
              {classifierHeader}
            </text>

            {/* Waveform */}
            <path
              d="M555 178 L566 178 L573 164 L580 194 L589 152 L598 190 L608 170 L617 182 L628 178 L655 178 L705 178"
              stroke="var(--orange-1)"
              strokeWidth="1.4"
              fill="none"
              opacity="0.9"
              strokeLinecap="round"
            />

            {/* Predictions list */}
            {[
              { label: "LRDA", emph: false, y: 204 },
              { label: "GRDA", emph: false, y: 218 },
              { label: "LPD / GPD", emph: false, y: 232 },
              { label: "Seizure", emph: true, y: 246 },
            ].map((row) => (
              <g key={row.label}>
                <text
                  x="558"
                  y={row.y}
                  fontFamily="var(--font-mono), ui-monospace, monospace"
                  fontSize="10"
                  fill={row.emph ? "var(--orange-1)" : "rgba(251,251,247,0.78)"}
                  fontWeight={row.emph ? 600 : 400}
                >
                  ▸ {row.label}
                </text>
              </g>
            ))}

            {/* Stand */}
            <path
              d="M610 265 L595 295 L665 295 L650 265 Z"
              fill="var(--ink)"
            />
            {/* Base */}
            <rect
              x="578"
              y="293"
              width="104"
              height="6"
              rx="3"
              fill="var(--ink)"
            />
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

function Dot() {
  return (
    <span
      className="w-2 h-2 rounded-full"
      style={{ background: "rgba(251,251,247,0.35)" }}
    />
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
