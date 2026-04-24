"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Camera,
  CheckCircle2,
  Cloud,
  Cpu,
  Globe,
  Server,
  TrendingDown,
  Zap,
} from "lucide-react";
import { useT } from "@/components/providers/i18n-provider";

type Seg = string | { b: string } | { brand: string };

type Copy = {
  metric1: { title: string; big: string; bigUnit: string; body: string };
  metric2: { title: string; big: string; body: string };
  metric3: { title: string; big: string; body: string };
  workflowTitle: string;
  togglePre: string;
  togglePost: string;
  cameraTitle: string;
  cameraSub: string;
  streamLabel: string;
  decoderPre: string;
  decoderPost: string;
  decoderPreSub: string;
  decoderPostSub: string;
  latencyPre: string;
  latencyPost: string;
  cloudTitle: string;
  cloudPre: string;
  cloudPost: string;
  highlightsTitle: string;
  highlights: { title: string; body: Seg[] }[];
};

const EN: Copy = {
  metric1: {
    title: "Latency",
    big: "90%",
    bigUnit: "improvement",
    body:
      "Real-time video-stream decoding took a leap forward, decisively breaking through the computer-vision pipeline bottleneck.",
  },
  metric2: {
    title: "AWS Cost",
    big: "Sharply Reduced",
    body:
      "Through efficient hardware acceleration, compute consumption was drastically lowered — saving the company substantial monthly spend.",
  },
  metric3: {
    title: "Scale",
    big: "Global Deployment",
    body:
      "The optimization was integrated into the main data pipeline, covering Amazon's global network of physical retail stores.",
  },
  workflowTitle: "Workflow Transformation",
  togglePre: "Before (CPU Bottleneck)",
  togglePost: "After (GPU Accelerated)",
  cameraTitle: "Smart Camera Array",
  cameraSub: "Sensor-fusion input",
  streamLabel: "Real-time stream",
  decoderPre: "PyAV (CPU)",
  decoderPost: "Decord (GPU)",
  decoderPreSub: "Legacy single-threaded decoding (bottleneck)",
  decoderPostSub: "Hardware-parallel accelerated decoding",
  latencyPre: "High latency",
  latencyPost: "Low latency (90%↓)",
  cloudTitle: "CV inference & cloud",
  cloudPre: "Costly instance usage",
  cloudPost: "AWS compute cost sharply down",
  highlightsTitle: "Technical Highlights",
  highlights: [
    {
      title: "Rebuilt the Vision Pipeline (Pipeline Integration)",
      body: [
        "As a core member of ",
        { b: "Amazon Just Walk Out (Amazon Go)" },
        "'s computer-vision team, built, benchmarked, and deployed a GPU-based high-performance video decoder. Deeply integrated the open-source library ",
        { b: "Decord" },
        " into the main production data pipeline, replacing the legacy CPU decoder — easing the compute pressure from massive parallel streaming workloads and saving substantial monthly ",
        { brand: "AWS cloud infrastructure spend" },
        ".",
      ],
    },
    {
      title: "Benchmarking & Hardware Profiling",
      body: [
        "Across multiple generations of smart store hardware (sensor-fusion cameras), independently ran detailed investigation and experimental validation. Through extreme benchmarking of the legacy CPU video decoder (",
        { b: "PyAV" },
        ") and the new GPU decoder (",
        { b: "Decord" },
        "), produced a full performance benchmark and engineering documentation — providing the critical data support for the final architectural selection.",
      ],
    },
    {
      title: "Performance Milestone",
      body: [
        "Through low-level codec optimization, achieved ",
        { b: "a 90% latency reduction" },
        " in real-time video decoding. The highly robust optimization is now deployed at scale across ",
        { b: "Amazon Physical Stores worldwide" },
        ", markedly smoothing the customer “grab-and-go” shopping experience.",
      ],
    },
  ],
};

const ZH: Copy = {
  metric1: {
    title: "延迟优化 (Latency)",
    big: "90%",
    bigUnit: "提升",
    body: "实时视频流解码性能实现飞跃，彻底突破计算机视觉管道瓶颈。",
  },
  metric2: {
    title: "云端开销 (AWS Cost)",
    big: "大幅削减",
    body: "通过高效的硬件加速，极大降低了计算资源消耗，每月为公司节省巨额开支。",
  },
  metric3: {
    title: "业务规模 (Scale)",
    big: "全球化部署",
    body: "优化方案成功集成至主数据管道，覆盖全球线下智能零售门店网络。",
  },
  workflowTitle: "架构演进演示 (Workflow Transformation)",
  togglePre: "优化前 (CPU 瓶颈)",
  togglePost: "优化后 (GPU 加速)",
  cameraTitle: "智能摄像头矩阵",
  cameraSub: "传感器融合输入",
  streamLabel: "实时视频流",
  decoderPre: "PyAV (CPU)",
  decoderPost: "Decord (GPU)",
  decoderPreSub: "传统单线程解码 (性能瓶颈)",
  decoderPostSub: "硬件级并行加速解码",
  latencyPre: "极高延迟",
  latencyPost: "低延迟 (90%↓)",
  cloudTitle: "CV 算法推断与云端",
  cloudPre: "高昂的实例占用成本",
  cloudPost: "AWS 计算开销大幅降低",
  highlightsTitle: "工作亮点与技术细节 (Technical Highlights)",
  highlights: [
    {
      title: "重构视觉处理主管道 (Pipeline Integration)",
      body: [
        "作为 ",
        { b: "Amazon Just Walk Out (Amazon Go)" },
        " 计算机视觉组的核心成员，构建、测试并部署了基于 GPU 的高效视频解码器。成功将开源库 ",
        { b: "Decord" },
        " 深度集成至主业务数据管道中，替代了传统的 CPU 解码方案，有效缓解了海量并行流媒体数据造成的计算压力，每月为公司节省了极为可观的 ",
        { brand: "AWS 云端基础设施开销" },
        "。",
      ],
    },
    {
      title: "深度基准测试与硬件适配 (Benchmarking & Hardware Profiling)",
      body: [
        "针对不同代际的智能硬件（传感器融合摄像头），独立进行了详尽的调研与实验验证。通过对传统 CPU 视频解码器 (",
        { b: "PyAV" },
        ") 和新型 GPU 视频解码器 (",
        { b: "Decord" },
        ") 的极限压测，产出了完整的性能基准分析 (Benchmark) 及开发文档，为底层架构的最终选型提供了关键的数据支撑。",
      ],
    },
    {
      title: "卓越的性能突破 (Performance Milestone)",
      body: [
        "凭借对编解码底层的优化，最终在真实的实时视频解码链路中实现了 ",
        { b: "90% 的延迟性能提升" },
        "。该优化方案具备极高的鲁棒性，现已在 ",
        { b: "全球 Amazon Physical Stores" },
        " 中大规模部署，显著增强了顾客“拿了就走”的购物体验流畅度。",
      ],
    },
  ],
};

export function AmazonInternCanvas() {
  const { lang } = useT();
  const c = lang === "zh" ? ZH : EN;
  const [optimized, setOptimized] = useState(true);

  return (
    <div className="mt-10 space-y-8">
      {/* Core metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <MetricCard
          icon={<Activity size={20} />}
          iconTone="orange"
          title={c.metric1.title}
          bigNum={c.metric1.big}
          bigUnit={c.metric1.bigUnit}
          bigColor="var(--orange-1)"
          body={c.metric1.body}
        />
        <MetricCard
          icon={<TrendingDown size={20} />}
          iconTone="ink"
          title={c.metric2.title}
          bigText={c.metric2.big}
          bigColor="var(--ink)"
          body={c.metric2.body}
        />
        <MetricCard
          icon={<Globe size={20} />}
          iconTone="panel"
          title={c.metric3.title}
          bigText={c.metric3.big}
          bigColor="var(--ink)"
          body={c.metric3.body}
        />
      </div>

      {/* Workflow transformation */}
      <div
        className="rounded-[20px] p-6 md:p-7 border border-[color:var(--veil-2)]"
        style={{ background: "var(--ivory)" }}
      >
        <h3
          className="f-display text-[18px] md:text-[20px] text-[color:var(--ink)] flex items-center gap-2 mb-6"
          style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
        >
          <Server size={20} style={{ color: "var(--ink-2)" }} />
          {c.workflowTitle}
        </h3>

        {/* Toggle */}
        <div
          className="inline-flex items-center gap-1 p-1 rounded-[12px] mb-6"
          style={{ background: "var(--panel)" }}
        >
          <button
            onClick={() => setOptimized(false)}
            className="px-4 py-2 rounded-[8px] text-[13px] transition-all duration-300"
            style={
              optimized
                ? { color: "var(--ink-3)", background: "transparent", fontWeight: 500 }
                : {
                    color: "var(--ink)",
                    background: "var(--ivory)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    fontWeight: 600,
                  }
            }
          >
            {c.togglePre}
          </button>
          <button
            onClick={() => setOptimized(true)}
            className="px-4 py-2 rounded-[8px] text-[13px] transition-all duration-300 flex items-center gap-2"
            style={
              optimized
                ? {
                    color: "var(--ivory)",
                    background: "var(--ink)",
                    boxShadow: "0 6px 20px -8px rgba(31,68,51,0.4)",
                    fontWeight: 600,
                  }
                : {
                    color: "var(--ink-3)",
                    background: "transparent",
                    fontWeight: 500,
                  }
            }
          >
            <Zap
              size={14}
              style={{
                color: optimized ? "var(--orange-1)" : "var(--ink-3)",
              }}
            />
            {c.togglePost}
          </button>
        </div>

        {/* Flowchart */}
        <div
          className="rounded-[16px] p-6 md:p-7 relative overflow-hidden"
          style={{ background: "var(--panel)" }}
        >
          {optimized && (
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,139,49,0.08) 50%, transparent 100%)",
              }}
            />
          )}

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <FlowNode
              icon={<Camera size={26} />}
              tone="ink"
              title={c.cameraTitle}
              sub={c.cameraSub}
            />
            <FlowArrow label={c.streamLabel} active={false} />

            <div className="flex flex-col items-center text-center w-40">
              <div
                className="w-20 h-20 rounded-[20px] flex items-center justify-center mb-3 border-2 transition-all duration-500"
                style={{
                  background: optimized ? "var(--orange-1)" : "var(--ink-3)",
                  borderColor: optimized ? "var(--orange-2)" : "var(--ink-3)",
                  color: "var(--ivory)",
                  transform: optimized ? "scale(1.06)" : "scale(1)",
                  boxShadow: optimized
                    ? "0 16px 36px -16px rgba(255,139,49,0.55)"
                    : "0 10px 24px -14px rgba(31,68,51,0.2)",
                }}
              >
                {optimized ? <Zap size={36} /> : <Cpu size={36} />}
              </div>
              <span
                className="f-display text-[15px]"
                style={{
                  fontWeight: 600,
                  color: optimized ? "var(--orange-1)" : "var(--ink-2)",
                }}
              >
                {optimized ? c.decoderPost : c.decoderPre}
              </span>
              <span className="text-[11px] text-[color:var(--ink-3)] mt-1 leading-[1.5]">
                {optimized ? c.decoderPostSub : c.decoderPreSub}
              </span>
            </div>

            <FlowArrow
              label={optimized ? c.latencyPost : c.latencyPre}
              active={optimized}
            />

            <FlowNode
              icon={<Cloud size={26} />}
              tone={optimized ? "orange-soft" : "ink"}
              title={c.cloudTitle}
              sub={optimized ? c.cloudPost : c.cloudPre}
              subAccent={optimized}
            />
          </div>
        </div>
      </div>

      {/* Technical highlights */}
      <div
        className="rounded-[20px] p-6 md:p-7 border border-[color:var(--veil-2)]"
        style={{ background: "var(--ivory)" }}
      >
        <h3
          className="f-display text-[18px] md:text-[20px] text-[color:var(--ink)] flex items-center gap-2 mb-6"
          style={{ letterSpacing: "-0.01em", fontWeight: 500 }}
        >
          <CheckCircle2 size={20} style={{ color: "var(--orange-1)" }} />
          {c.highlightsTitle}
        </h3>
        <ul className="space-y-5">
          {c.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckCircle2
                size={18}
                className="mt-[3px] shrink-0"
                style={{ color: "var(--orange-1)" }}
              />
              <div>
                <h4
                  className="f-display text-[15px] md:text-[16px] text-[color:var(--ink)]"
                  style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
                >
                  {h.title}
                </h4>
                <p className="text-[14px] text-[color:var(--ink-2)] mt-1.5 leading-[1.7]">
                  {h.body.map((seg, j) => {
                    if (typeof seg === "string") return seg;
                    if ("brand" in seg)
                      return (
                        <strong
                          key={j}
                          style={{ color: "var(--orange-1)", fontWeight: 600 }}
                        >
                          {seg.brand}
                        </strong>
                      );
                    return (
                      <strong
                        key={j}
                        style={{ color: "var(--ink)", fontWeight: 600 }}
                      >
                        {seg.b}
                      </strong>
                    );
                  })}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  iconTone,
  title,
  bigNum,
  bigUnit,
  bigText,
  bigColor,
  body,
}: {
  icon: ReactNode;
  iconTone: "orange" | "ink" | "panel";
  title: string;
  bigNum?: string;
  bigUnit?: string;
  bigText?: string;
  bigColor: string;
  body: string;
}) {
  const iconBg =
    iconTone === "orange"
      ? "rgba(255,139,49,0.12)"
      : iconTone === "ink"
      ? "rgba(31,68,51,0.08)"
      : "var(--panel)";
  const iconColor = iconTone === "orange" ? "var(--orange-1)" : "var(--ink)";

  return (
    <div
      className="rounded-[20px] p-6 border border-[color:var(--veil-2)] flex flex-col"
      style={{ background: "var(--ivory)" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
          style={{ background: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <h3
          className="f-display text-[15px] md:text-[16px] text-[color:var(--ink)] leading-tight"
          style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          {title}
        </h3>
      </div>
      {bigNum ? (
        <p
          className="f-display"
          style={{
            fontSize: "38px",
            color: bigColor,
            letterSpacing: "-0.03em",
            fontWeight: 600,
            lineHeight: "1.05",
          }}
        >
          {bigNum}
          {bigUnit && (
            <span
              className="ml-2"
              style={{
                fontSize: "16px",
                color: "var(--ink-3)",
                fontWeight: 500,
              }}
            >
              {bigUnit}
            </span>
          )}
        </p>
      ) : (
        <p
          className="f-display"
          style={{
            fontSize: "24px",
            color: bigColor,
            letterSpacing: "-0.02em",
            fontWeight: 600,
            lineHeight: "1.2",
          }}
        >
          {bigText}
        </p>
      )}
      <p className="text-[13px] text-[color:var(--ink-2)] mt-3 leading-[1.65]">
        {body}
      </p>
    </div>
  );
}

function FlowNode({
  icon,
  tone,
  title,
  sub,
  subAccent,
}: {
  icon: ReactNode;
  tone: "ink" | "orange-soft";
  title: string;
  sub: string;
  subAccent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center w-32">
      <div
        className="w-16 h-16 rounded-[18px] flex items-center justify-center mb-3 border transition-all duration-500"
        style={{
          background: "var(--ivory)",
          borderColor:
            tone === "orange-soft"
              ? "rgba(255,139,49,0.4)"
              : "var(--veil-2)",
          color: tone === "orange-soft" ? "var(--orange-1)" : "var(--ink-2)",
          boxShadow: "0 4px 12px -8px rgba(31,68,51,0.1)",
        }}
      >
        {icon}
      </div>
      <span
        className="text-[13px] f-display text-[color:var(--ink)]"
        style={{ fontWeight: 500 }}
      >
        {title}
      </span>
      <span
        className="text-[11px] mt-1 leading-[1.5]"
        style={{
          color: subAccent ? "var(--orange-1)" : "var(--ink-3)",
          fontWeight: subAccent ? 600 : 400,
        }}
      >
        {sub}
      </span>
    </div>
  );
}

function FlowArrow({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-[10px] mb-1 transition-colors"
        style={{
          color: active ? "var(--orange-1)" : "var(--ink-3)",
          fontWeight: active ? 600 : 500,
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </span>
      <ArrowRight
        size={20}
        className="hidden md:block transition-colors"
        style={{
          color: active ? "var(--orange-1)" : "var(--ink-3)",
          opacity: active ? 0.9 : 0.45,
        }}
      />
      <ArrowDown
        size={20}
        className="block md:hidden transition-colors"
        style={{
          color: active ? "var(--orange-1)" : "var(--ink-3)",
          opacity: active ? 0.9 : 0.45,
        }}
      />
    </div>
  );
}
