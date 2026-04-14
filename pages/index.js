import { useState, useEffect, useCallback } from 'react';
import { phases, totalDays } from '../data/roadmap';

const STORAGE_KEY = 'ai-roadmap-progress-v1';

function getTagClass(type) {
  if (!type) return 'tag-default';
  const t = type.toLowerCase();
  if (t.includes('arxiv')) return 'tag-arxiv';
  if (t.includes('text')) return 'tag-textbook';
  if (t.includes('blog') || t.includes('visual')) return 'tag-blog';
  if (t.includes('lecture') || t.includes('course')) return 'tag-lecture';
  return 'tag-default';
}

function CircleProgress({ value, size = 120, strokeWidth = 8, color = '#3b82f6', label }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} />
        <circle
          cx={size/2} cy={size/2} r={r}
          fill="none" stroke={color} strokeWidth={strokeWidth}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          className="progress-ring"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#e2e8f0" fontSize={size < 80 ? "13" : "18"} fontWeight="700">
          {Math.round(value)}%
        </text>
      </svg>
      {label && <span className="text-xs text-gray-500 text-center max-w-[90px] leading-tight">{label}</span>}
    </div>
  );
}

function PhaseHeader({ phase, phaseProgress, isOpen, onToggle, phaseClass }) {
  const colorMap = {
    blue: { hex: '#3b82f6', light: '#93c5fd' },
    purple: { hex: '#a855f7', light: '#d8b4fe' },
    orange: { hex: '#f97316', light: '#fdba74' },
    green: { hex: '#22c55e', light: '#86efac' },
  };
  const c = colorMap[phase.color] || colorMap.blue;

  return (
    <button
      onClick={onToggle}
      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${phaseClass}`}
      style={{ borderColor: 'var(--phase-border)', background: 'var(--phase-bg)' }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <CircleProgress value={phaseProgress} size={70} strokeWidth={6} color={c.hex} />
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-bold text-white">{phase.title}</h2>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${c.hex}22`, color: c.light, border: `1px solid ${c.hex}44` }}>
                {phase.duration}
              </span>
            </div>
            <p className="text-sm mt-0.5" style={{ color: c.light }}>{phase.subtitle}</p>
            <p className="text-xs text-gray-500 mt-1">{phase.days.length} days · {Math.round(phaseProgress)}% complete</p>
          </div>
        </div>
        <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  );
}

function DayCard({ dayData, dayKey, phaseColor, checked, onToggle }) {
  const [open, setOpen] = useState(false);
  const colorMap = {
    blue: { hex: '#3b82f6', light: '#93c5fd', faint: 'rgba(59,130,246,0.1)' },
    purple: { hex: '#a855f7', light: '#d8b4fe', faint: 'rgba(168,85,247,0.1)' },
    orange: { hex: '#f97316', light: '#fdba74', faint: 'rgba(249,115,22,0.1)' },
    green: { hex: '#22c55e', light: '#86efac', faint: 'rgba(34,197,94,0.1)' },
  };
  const c = colorMap[phaseColor] || colorMap.blue;

  return (
    <div className={`rounded-lg border transition-all duration-200 ${checked ? 'opacity-80' : ''}`}
      style={{ borderColor: open ? c.hex + '55' : '#1e293b', background: open ? c.faint : '#0f172a' }}>
      {/* Day header row */}
      <div className="flex items-center gap-3 p-4 cursor-pointer" onClick={() => setOpen(!open)}>
        {/* Checkbox */}
        <div onClick={e => { e.stopPropagation(); onToggle(); }}>
          <input
            type="checkbox"
            className="checkbox-custom"
            style={{ '--phase-color': c.hex }}
            checked={checked}
            onChange={onToggle}
          />
        </div>
        {/* Day number badge */}
        <span className="text-xs font-mono font-bold px-2 py-1 rounded flex-shrink-0"
          style={{ background: c.faint, color: c.light, border: `1px solid ${c.hex}33` }}>
          Day {dayData.day}
        </span>
        {/* Title */}
        <span className={`flex-1 text-sm font-medium leading-snug ${checked ? 'line-through text-gray-500' : 'text-gray-100'}`}>
          {dayData.title}
        </span>
        {/* Paper count */}
        <span className="text-xs text-gray-600 flex-shrink-0 hidden sm:block">{dayData.papers.length} refs</span>
        {/* Chevron */}
        <svg className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded content */}
      {open && (
        <div className="px-4 pb-4 day-card-enter border-t" style={{ borderColor: c.hex + '22' }}>
          {/* Objective */}
          <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: c.light }}>Objective</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{dayData.objective}</p>
          </div>

          {/* Targets */}
          <div className="mt-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: c.light }}>Daily Targets</h4>
            <ul className="space-y-1.5">
              {dayData.targets.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: c.faint, color: c.light }}>
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Papers */}
          <div className="mt-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: c.light }}>Reference Materials</h4>
            <div className="space-y-2">
              {dayData.papers.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-2.5 rounded-lg group hover:bg-white/5 transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">{p.title}</p>
                    <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded border font-medium ${getTagClass(p.type)}`}>{p.type}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OverallProgressBar({ percent }) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-gray-500 mb-1.5">
        <span>Overall Progress</span>
        <span className="font-mono font-bold text-white">{Math.round(percent)}%</span>
      </div>
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            background: 'linear-gradient(90deg, #3b82f6 0%, #a855f7 40%, #f97316 70%, #22c55e 100%)'
          }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [progress, setProgress] = useState({});
  const [openPhases, setOpenPhases] = useState({ phase1: true });

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved));
    } catch {}
  }, []);

  // Save to localStorage on change
  const updateProgress = useCallback((key, value) => {
    setProgress(prev => {
      const next = { ...prev, [key]: value };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleDay = useCallback((dayKey) => {
    updateProgress(dayKey, !progress[dayKey]);
  }, [progress, updateProgress]);

  const togglePhase = useCallback((phaseId) => {
    setOpenPhases(prev => ({ ...prev, [phaseId]: !prev[phaseId] }));
  }, []);

  // Compute stats
  const totalChecked = Object.values(progress).filter(Boolean).length;
  const overallPercent = totalDays > 0 ? (totalChecked / totalDays) * 100 : 0;

  const phaseStats = phases.map(phase => {
    const pChecked = phase.days.filter(d => progress[`day-${d.day}`]).length;
    return { pChecked, pTotal: phase.days.length, pPercent: phase.days.length > 0 ? (pChecked / phase.days.length) * 100 : 0 };
  });

  const colorMap = { blue: '#3b82f6', purple: '#a855f7', orange: '#f97316', green: '#22c55e' };

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: 'rgba(10,15,30,0.95)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">AI Research Roadmap</h1>
              <p className="text-xs text-gray-500 mt-0.5">39 Days · DL → RAG → GANs → Gen AI → RL → Federated Learning → Thesis</p>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-black" style={{ background: 'linear-gradient(90deg,#3b82f6,#a855f7,#22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {totalChecked}<span className="text-base font-bold text-gray-600" style={{ WebkitTextFillColor: '#4b5563' }}>/{totalDays}</span>
              </div>
              <p className="text-xs text-gray-600">days done</p>
            </div>
          </div>
          <OverallProgressBar percent={overallPercent} />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Phase Progress Circles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
          {phases.map((phase, i) => (
            <div key={phase.id} className="flex flex-col items-center gap-1">
              <CircleProgress value={phaseStats[i].pPercent} size={80} strokeWidth={7} color={colorMap[phase.color]} />
              <span className="text-xs text-gray-500 text-center leading-tight px-1">
                {phase.title.split('—')[0].replace('Phase ', 'P')}
              </span>
              <span className="text-xs font-mono" style={{ color: colorMap[phase.color] }}>
                {phaseStats[i].pChecked}/{phaseStats[i].pTotal}
              </span>
            </div>
          ))}
        </div>

        {/* Phase Sections */}
        {phases.map((phase, i) => (
          <div key={phase.id} className={`phase-${phase.color}`}>
            <PhaseHeader
              phase={phase}
              phaseProgress={phaseStats[i].pPercent}
              isOpen={!!openPhases[phase.id]}
              onToggle={() => togglePhase(phase.id)}
              phaseClass={`phase-${phase.color}`}
            />

            {openPhases[phase.id] && (
              <div className="mt-2 space-y-2 day-card-enter">
                {phase.days.map(day => {
                  const dayKey = `day-${day.day}`;
                  return (
                    <DayCard
                      key={dayKey}
                      dayData={day}
                      dayKey={dayKey}
                      phaseColor={phase.color}
                      checked={!!progress[dayKey]}
                      onToggle={() => toggleDay(dayKey)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="text-center py-8 border-t border-white/5">
          <p className="text-sm text-gray-600">Progress auto-saved to browser · {totalDays} days · ~5–6 papers/week</p>
          {totalChecked === totalDays && totalDays > 0 && (
            <p className="mt-2 text-lg font-bold" style={{ background: 'linear-gradient(90deg,#22c55e,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Research foundations complete. Thesis time.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
