'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useChatStore } from '@/store/chatStore';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectionData {
  years: number;
  qqqReturn: number;   // percentage, e.g. 35.81
  soxxReturn: number;  // percentage, e.g. 140.04
}

interface ComputedProjection extends ProjectionData {
  combinedReturn: number;   // decimal, e.g. 0.9832
  finalValue: number;
  profit: number;
  gainPercentage: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const QQQ_WEIGHT  = 0.4;
const SOXX_WEIGHT = 0.6;
const MIN_INVESTMENT = 1_000;

const RAW_PROJECTIONS: ProjectionData[] = [
  { years: 1,  qqqReturn: 35.81,  soxxReturn: 140.04 },
  { years: 3,  qqqReturn: 110.20, soxxReturn: 242.80 },
  { years: 5,  qqqReturn: 120.01, soxxReturn: 283.40 },
  { years: 10, qqqReturn: 566.73, soxxReturn: 1580   },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const usd = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

const pct = (n: number) =>
  new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + '%';

function computeProjection(p: ProjectionData, amount: number): ComputedProjection {
  const combinedReturn =
    QQQ_WEIGHT  * (p.qqqReturn  / 100) +
    SOXX_WEIGHT * (p.soxxReturn / 100);
  const finalValue    = amount * (1 + combinedReturn);
  const profit        = finalValue - amount;
  const gainPercentage = combinedReturn * 100;
  return { ...p, combinedReturn, finalValue, profit, gainPercentage };
}

// ─── Animated counter hook ────────────────────────────────────────────────────

function useAnimatedValue(target: number, duration = 800) {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const start = display;
    const diff  = target - start;
    const t0    = performance.now();

    const tick = (now: number) => {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + diff * ease);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return display;
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function ChartTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm"
      style={{
        background: 'rgba(13,27,62,0.95)',
        border: '1px solid rgba(56,189,248,0.35)',
        boxShadow: '0 0 20px rgba(56,189,248,0.15)',
      }}
    >
      <p className="font-bold mb-1" style={{ color: '#38BDF8' }}>
        Year {label}
      </p>
      <p className="text-white font-semibold">{usd(payload[0].value)}</p>
    </div>
  );
}

// ─── Projection Card ──────────────────────────────────────────────────────────

function ProjectionCard({ data, index }: { data: ComputedProjection; index: number }) {
  const animatedValue  = useAnimatedValue(data.finalValue);
  const animatedProfit = useAnimatedValue(data.profit);
  const animatedGain   = useAnimatedValue(data.gainPercentage);

  return (
    <div
      className="relative rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 group"
      style={{
        background: 'linear-gradient(135deg, rgba(13,27,62,0.90) 0%, rgba(26,26,78,0.85) 100%)',
        border: '1px solid rgba(56,189,248,0.18)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.30)',
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(56,189,248,0.55)';
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 0 32px rgba(56,189,248,0.18), 0 8px 32px rgba(0,0,0,0.40)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(56,189,248,0.18)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.30)';
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Glow accent top-left */}
      <div
        className="absolute top-0 left-0 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />

      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full"
          style={{ background: 'rgba(56,189,248,0.12)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}
        >
          {data.years} {data.years === 1 ? 'Year' : 'Years'}
        </span>
        <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.40)' }}>
          QQQ 40% · SOXX 60%
        </span>
      </div>

      {/* Combined return */}
      <div>
        <p className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Combined Return
        </p>
        <p className="text-lg font-black" style={{ color: '#38BDF8' }}>
          {pct(data.gainPercentage)}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(56,189,248,0.10)' }} />

      {/* Projected value */}
      <div>
        <p className="text-xs font-semibold mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Projected Value
        </p>
        <p className="text-2xl font-black text-white">
          {usd(animatedValue)}
        </p>
      </div>

      {/* Profit + Gain row */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.12)' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Est. Profit
          </p>
          <p className="text-sm font-black" style={{ color: '#4ADE80' }}>
            +{usd(animatedProfit)}
          </p>
        </div>
        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.12)' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Portfolio Gain
          </p>
          <p className="text-sm font-black" style={{ color: '#4ADE80' }}>
            +{pct(animatedGain)}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function InvestmentProjectionSimulator() {
  const [rawInput, setRawInput]   = useState('1000');
  const [touched, setTouched]     = useState(false);
  const [chartReady, setChartReady] = useState(false);

  const investmentAmount = useMemo(() => {
    const n = parseFloat(rawInput.replace(/,/g, ''));
    return isNaN(n) ? 0 : n;
  }, [rawInput]);

  const isValid = investmentAmount >= MIN_INVESTMENT;

  const projections = useMemo<ComputedProjection[]>(
    () => RAW_PROJECTIONS.map((p) => computeProjection(p, investmentAmount)),
    [investmentAmount],
  );

  // Sync simulator state into Zustand so the chatbot can read it
  const setSimulator = useChatStore((s) => s.setSimulator);
  useEffect(() => {
    setSimulator({
      investmentAmount,
      projections: projections.map((p) => ({
        years: p.years,
        finalValue: p.finalValue,
        profit: p.profit,
        gainPercentage: p.gainPercentage,
        combinedReturn: p.combinedReturn,
      })),
    });
  }, [investmentAmount, projections, setSimulator]);

  // Chart data — interpolate intermediate years for a smooth curve
  const chartData = useMemo(() => {
    if (!isValid) return [];
    // Build a smooth curve by interpolating between known data points
    const points: { year: number; value: number }[] = [];
    const knownYears = [0, 1, 3, 5, 10];
    const knownValues = [
      investmentAmount,
      ...projections.map((p) => p.finalValue),
    ];
    // Linear interpolation between known points
    for (let i = 0; i < knownYears.length - 1; i++) {
      const y0 = knownYears[i], y1 = knownYears[i + 1];
      const v0 = knownValues[i], v1 = knownValues[i + 1];
      const steps = y1 - y0;
      for (let s = 0; s < steps; s++) {
        const t = s / steps;
        points.push({ year: y0 + s, value: Math.round(v0 + (v1 - v0) * t) });
      }
    }
    points.push({ year: 10, value: Math.round(knownValues[knownValues.length - 1]) });
    return points;
  }, [projections, isValid, investmentAmount]);

  useEffect(() => {
    const t = setTimeout(() => setChartReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setRawInput(e.target.value);
  };

  const errorMsg =
    touched && !isValid
      ? investmentAmount === 0
        ? 'Please enter a valid amount.'
        : `Minimum investment is ${usd(MIN_INVESTMENT)}.`
      : null;

  return (
    <section
      className="w-full py-16 px-4 md:px-8"
      style={{ background: 'linear-gradient(180deg, #0A0F2C 0%, #0D1B3E 50%, #0A0F2C 100%)' }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <span
          className="inline-block text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(56,189,248,0.10)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}
        >
          Investment Simulator
        </span>
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight"
        >
          Project Your Portfolio Growth
        </h2>
        <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
          See how a GoldKach-managed portfolio (SOXX 60% · QQQ 40%) could grow your investment
          based on historical performance data.
        </p>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* ── LEFT: Input panel ── */}
        <div
          className="lg:col-span-2 rounded-2xl p-6 md:p-8 flex flex-col gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(13,27,62,0.95) 0%, rgba(26,26,78,0.90) 100%)',
            border: '1px solid rgba(56,189,248,0.18)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.40)',
          }}
        >
          {/* Portfolio allocation badges */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Portfolio Allocation
            </p>
            <div className="flex gap-3">
              {[
                { label: 'SOXX', weight: '60%', color: '#38BDF8' },
                { label: 'QQQ',  weight: '40%', color: '#818CF8' },
              ].map((a) => (
                <div
                  key={a.label}
                  className="flex-1 rounded-xl p-3 text-center"
                  style={{ background: 'rgba(56,189,248,0.07)', border: `1px solid ${a.color}30` }}
                >
                  <p className="text-lg font-black" style={{ color: a.color }}>{a.weight}</p>
                  <p className="text-xs font-bold mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(56,189,248,0.10)' }} />

          {/* Amount input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Investment Amount (USD)
            </label>
            <div className="relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-black"
                style={{ color: '#38BDF8' }}
              >
                $
              </span>
              <input
                type="number"
                min={MIN_INVESTMENT}
                value={rawInput}
                onChange={handleInput}
                onBlur={() => setTouched(true)}
                placeholder="1,000"
                className="w-full rounded-xl pl-9 pr-4 py-4 text-xl font-black text-white outline-none transition-all duration-200"
                style={{
                  background: 'rgba(56,189,248,0.06)',
                  border: errorMsg
                    ? '1.5px solid rgba(248,113,113,0.70)'
                    : '1.5px solid rgba(56,189,248,0.25)',
                  caretColor: '#38BDF8',
                }}
                onFocus={(e) => {
                  if (!errorMsg)
                    (e.target as HTMLInputElement).style.border = '1.5px solid rgba(56,189,248,0.70)';
                }}
                onBlurCapture={(e) => {
                  if (!errorMsg)
                    (e.target as HTMLInputElement).style.border = '1.5px solid rgba(56,189,248,0.25)';
                }}
              />
            </div>
            {errorMsg && (
              <p className="mt-2 text-xs font-semibold" style={{ color: '#F87171' }}>
                ⚠ {errorMsg}
              </p>
            )}
          </div>

          {/* Quick-select amounts */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Quick Select
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[1_000, 5_000, 10_000, 25_000, 50_000, 100_000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setRawInput(String(amt)); setTouched(true); }}
                  className="rounded-lg py-2 text-xs font-bold transition-all duration-150"
                  style={{
                    background: investmentAmount === amt
                      ? 'linear-gradient(135deg, #1E9BF0, #38BDF8)'
                      : 'rgba(56,189,248,0.07)',
                    color: investmentAmount === amt ? '#fff' : 'rgba(255,255,255,0.60)',
                    border: investmentAmount === amt
                      ? '1px solid transparent'
                      : '1px solid rgba(56,189,248,0.15)',
                  }}
                >
                  {amt >= 1_000 ? `$${amt / 1_000}K` : `$${amt}`}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(56,189,248,0.10)' }} />

          {/* Historical returns summary */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.40)' }}>
              Historical Returns
            </p>
            <div className="space-y-2">
              {RAW_PROJECTIONS.map((p) => {
                const combined = (QQQ_WEIGHT * p.qqqReturn + SOXX_WEIGHT * p.soxxReturn);
                return (
                  <div key={p.years} className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.50)' }}>
                      {p.years}Y
                    </span>
                    <div className="flex-1 mx-3 rounded-full overflow-hidden" style={{ height: '4px', background: 'rgba(56,189,248,0.10)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min((combined / 1200) * 100, 100)}%`,
                          background: 'linear-gradient(90deg, #1E9BF0, #38BDF8)',
                          boxShadow: '0 0 8px rgba(56,189,248,0.60)',
                        }}
                      />
                    </div>
                    <span className="text-xs font-black" style={{ color: '#38BDF8' }}>
                      {pct(combined)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://goldkach.co.ug/"
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!isValid}
            onClick={(e) => { if (!isValid) e.preventDefault(); }}
            className="block text-center rounded-xl py-4 text-sm font-black tracking-wide transition-all duration-200"
            style={
              isValid
                ? {
                    background: 'linear-gradient(135deg, #1E9BF0 0%, #38BDF8 100%)',
                    color: '#fff',
                    boxShadow: '0 0 24px rgba(56,189,248,0.40)',
                    cursor: 'pointer',
                  }
                : {
                    background: 'rgba(56,189,248,0.10)',
                    color: 'rgba(255,255,255,0.30)',
                    cursor: 'not-allowed',
                    border: '1px solid rgba(56,189,248,0.12)',
                  }
            }
            onMouseEnter={(e) => {
              if (isValid) (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(56,189,248,0.65)';
            }}
            onMouseLeave={(e) => {
              if (isValid) (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(56,189,248,0.40)';
            }}
          >
            Get Started →
          </a>
        </div>

        {/* ── RIGHT: Projections + Chart ── */}
        <div className="lg:col-span-3 flex flex-col gap-6">

          {/* Projection cards */}
          {isValid ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projections.map((p, i) => (
                <ProjectionCard key={p.years} data={p} index={i} />
              ))}
            </div>
          ) : (
            <div
              className="rounded-2xl p-10 flex flex-col items-center justify-center text-center"
              style={{
                background: 'rgba(13,27,62,0.60)',
                border: '1px dashed rgba(56,189,248,0.20)',
                minHeight: '220px',
              }}
            >
              <p className="text-4xl mb-3">📊</p>
              <p className="font-bold text-white mb-1">Enter an amount to see projections</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
                Minimum investment is {usd(MIN_INVESTMENT)}
              </p>
            </div>
          )}

          {/* Chart */}
          {isValid && chartReady && (
            <div
              className="rounded-2xl p-5 md:p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(13,27,62,0.95) 0%, rgba(26,26,78,0.90) 100%)',
                border: '1px solid rgba(56,189,248,0.18)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.40)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-black text-white">Portfolio Growth</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.40)' }}>
                    Based on historical returns · {usd(investmentAmount)} initial
                  </p>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(56,189,248,0.10)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}
                >
                  10-Year View
                </span>
              </div>

              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor="#38BDF8" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#38BDF8" stopOpacity={0.01} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(56,189,248,0.07)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="year"
                    tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 600 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `Y${v}`}
                  />
                  <YAxis
                    tick={{ fill: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 600 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) =>
                      v >= 1_000_000
                        ? `$${(v / 1_000_000).toFixed(1)}M`
                        : v >= 1_000
                        ? `$${(v / 1_000).toFixed(0)}K`
                        : `$${v}`
                    }
                    width={60}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#38BDF8"
                    strokeWidth={2.5}
                    fill="url(#portfolioGradient)"
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: '#38BDF8',
                      stroke: '#0A1628',
                      strokeWidth: 2,
                    }}
                    style={{ filter: 'url(#glow)' }}
                    isAnimationActive={true}
                    animationDuration={1200}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Disclaimer */}
          {isValid && (
            <p
              className="text-xs leading-relaxed rounded-xl px-4 py-3"
              style={{
                color: 'rgba(255,255,255)',
                background: 'rgba(56,189,248,0.04)',
                border: '1px solid rgba(56,189,248,0.08)',
              }}
            >
              <span className="font-bold" style={{ color: 'rgba(255, 255, 255, 1)' }}>Disclaimer: </span>
              Projections are estimates based on historical asset performance and are not guarantees
              of future returns. Investments may go up or down and clients may receive less than the
              original amount invested.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
