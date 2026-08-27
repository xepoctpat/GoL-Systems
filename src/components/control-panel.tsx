import { useState, type ReactNode } from "react";
import {
  Droplets,
  Eraser,
  Pause,
  Pencil,
  Play,
  Redo,
  Shuffle,
  StepForward,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRESETS, type PaintMode, type PresetId, type SimSettings } from "@/sim/types";

type TabId = "run" | "paint" | "world" | "loops";

interface ControlPanelProps {
  running: boolean;
  speed: number;
  settings: SimSettings;
  paintMode: PaintMode;
  brush: number;
  showHeat: boolean;
  showEnergy: boolean;
  muted: boolean;
  preset: PresetId;
  onToggleRun: () => void;
  onStep: () => void;
  onSpeed: (v: number) => void;
  onSettings: (partial: Partial<SimSettings>) => void;
  onPaintMode: (m: PaintMode) => void;
  onBrush: (n: number) => void;
  onShowHeat: (v: boolean) => void;
  onShowEnergy: (v: boolean) => void;
  onMuted: (v: boolean) => void;
  onSeed: (preset: PresetId) => void;
  onClear: () => void;
  onRefit: () => void;
}

function Row({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm text-fg">{label}</span>
        {value ? <span className="font-mono text-xs tabular-nums text-muted">{value}</span> : null}
      </div>
      {children}
    </label>
  );
}

function RangeInput({
  value,
  min,
  max,
  step,
  label,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  label: string;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      aria-label={label}
      onChange={(e) => onChange(Number(e.target.value))}
      className="h-9 w-full cursor-pointer appearance-none bg-transparent accent-accent"
    />
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-0.5">
      <div className="min-w-0">
        <div className="text-sm text-fg">{label}</div>
        {description ? (
          <div className="text-xs leading-relaxed text-subtle" title={description}>
            {description}
          </div>
        ) : null}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onCheckedChange(!checked)}
        className={cn(
          "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150",
          checked ? "bg-accent" : "bg-raised shadow-[0_0_0_1px_rgba(255,255,255,0.10)]",
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-fg transition-transform duration-150",
            checked ? "translate-x-5 bg-accent-fg" : "translate-x-0.5",
          )}
        />
      </button>
    </div>
  );
}

const TABS: { id: TabId; label: string }[] = [
  { id: "run", label: "Run" },
  { id: "paint", label: "Paint" },
  { id: "world", label: "World" },
  { id: "loops", label: "Loops" },
];

export function ControlPanel(props: ControlPanelProps) {
  const {
    running,
    speed,
    settings,
    paintMode,
    brush,
    showHeat,
    showEnergy,
    muted,
    preset,
    onToggleRun,
    onStep,
    onSpeed,
    onSettings,
    onPaintMode,
    onBrush,
    onShowHeat,
    onShowEnergy,
    onMuted,
    onSeed,
    onClear,
    onRefit,
  } = props;

  const [tab, setTab] = useState<TabId>("run");

  const modes: { id: PaintMode; label: string; icon: typeof Pencil }[] = [
    { id: "life", label: "Life", icon: Pencil },
    { id: "erase", label: "Erase", icon: Eraser },
    { id: "regulator", label: "Regulator", icon: Zap },
    { id: "energy", label: "Energy", icon: Droplets },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-surface">
      <div className="flex shrink-0 gap-2 px-5 pt-5 pb-4">
        <Button className="flex-1" onClick={onToggleRun} aria-label={running ? "Pause" : "Run"}>
          {running ? <Pause className="size-4" /> : <Play className="ml-0.5 size-4" />}
          {running ? "Pause" : "Run"}
        </Button>
        <Button variant="secondary" size="icon" onClick={onStep} aria-label="Step one generation">
          <StepForward className="size-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => onMuted(!muted)}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
        </Button>
      </div>

      <div className="grid shrink-0 grid-cols-4 gap-1 px-5 pb-4">
        {TABS.map((t) => {
          const on = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "h-10 rounded-md text-sm font-medium transition-colors duration-150",
                on ? "bg-raised text-fg" : "text-muted hover:text-fg",
              )}
              aria-pressed={on}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain no-scrollbar px-5 pb-6">
        {tab === "run" ? (
          <div className="space-y-5">
            <Row label="Tempo" value={`${speed.toFixed(0)} /s`}>
              <RangeInput
                min={1}
                max={40}
                step={1}
                value={speed}
                label="Generations per second"
                onChange={onSpeed}
              />
            </Row>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="secondary" onClick={() => onSeed(preset)}>
                <Shuffle className="size-4" />
                Reseed
              </Button>
              <Button variant="secondary" onClick={onClear}>
                Clear
              </Button>
              <Button variant="outline" onClick={onRefit} aria-label="Fit grid to view">
                <Redo className="size-4" />
                Fit
              </Button>
            </div>
            <p className="text-xs leading-relaxed text-subtle">
              Starts on the seeded pattern. Press Run to let the loops take over.
            </p>
          </div>
        ) : null}

        {tab === "paint" ? (
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-2">
              {modes.map((m) => {
                const Icon = m.icon;
                const on = paintMode === m.id;
                return (
                  <Button
                    key={m.id}
                    variant={on ? "accent" : "secondary"}
                    size="sm"
                    onClick={() => onPaintMode(m.id)}
                    aria-pressed={on}
                  >
                    <Icon className="size-4" />
                    {m.label}
                  </Button>
                );
              })}
            </div>
            <Row label="Radius" value={String(brush)}>
              <RangeInput min={0} max={6} step={1} value={brush} label="Brush radius" onChange={onBrush} />
            </Row>
            <p className="text-xs leading-relaxed text-subtle">
              Drag on the field to draw. Regulators hold local order.
            </p>
          </div>
        ) : null}

        {tab === "world" ? (
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => {
                const on = preset === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    title={p.blurb}
                    onClick={() => onSeed(p.id)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm transition-colors duration-150",
                      on ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg",
                    )}
                  >
                    {p.name}
                  </button>
                );
              })}
            </div>
            <ToggleRow
              label="Couple climate"
              description="Heat, energy, and season rewrite survival."
              checked={settings.environment}
              onCheckedChange={(v) => onSettings({ environment: v })}
            />
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <Row label="Latitude" value={settings.climate.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.climate}
                  label="Latitude gradient"
                  onChange={(v) => onSettings({ climate: v })}
                />
              </Row>
              <Row label="Season rate" value={settings.seasonRate.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.seasonRate}
                  label="Season rate"
                  onChange={(v) => onSettings({ seasonRate: v })}
                />
              </Row>
              <Row label="Season depth" value={settings.seasonAmp.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.seasonAmp}
                  label="Season depth"
                  onChange={(v) => onSettings({ seasonAmp: v })}
                />
              </Row>
              <Row label="Energy" value={settings.energyRichness.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.energyRichness}
                  label="Energy richness"
                  onChange={(v) => onSettings({ energyRichness: v })}
                />
              </Row>
              <Row label="Heat" value={settings.metabolicHeat.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.metabolicHeat}
                  label="Metabolic heat"
                  onChange={(v) => onSettings({ metabolicHeat: v })}
                />
              </Row>
              <Row label="Noise" value={settings.noise.toFixed(2)}>
                <RangeInput
                  min={0}
                  max={1}
                  step={0.01}
                  value={settings.noise}
                  label="Noise"
                  onChange={(v) => onSettings({ noise: v })}
                />
              </Row>
            </div>
            <div className="space-y-3">
              <ToggleRow label="Show heat" checked={showHeat} onCheckedChange={onShowHeat} />
              <ToggleRow label="Show energy" checked={showEnergy} onCheckedChange={onShowEnergy} />
            </div>
          </div>
        ) : null}

        {tab === "loops" ? (
          <div className="space-y-5">
            <ToggleRow
              label="Feedback loops"
              description="The field observes itself and acts."
              checked={settings.cybernetics}
              onCheckedChange={(v) => onSettings({ cybernetics: v })}
            />
            <Row label="Homeostatic gain" value={settings.homeoGain.toFixed(2)}>
              <RangeInput
                min={0}
                max={1}
                step={0.01}
                value={settings.homeoGain}
                label="Homeostatic gain"
                onChange={(v) => onSettings({ homeoGain: v })}
              />
            </Row>
            <ToggleRow
              label="Adaptive setpoint"
              description="Target density tracks what the field can hold."
              checked={settings.autoSetpoint}
              onCheckedChange={(v) => onSettings({ autoSetpoint: v })}
            />
            {!settings.autoSetpoint ? (
              <Row label="Setpoint" value={`${(settings.setpoint * 100).toFixed(0)}%`}>
                <RangeInput
                  min={0.04}
                  max={0.4}
                  step={0.01}
                  value={settings.setpoint}
                  label="Setpoint"
                  onChange={(v) => onSettings({ setpoint: v })}
                />
              </Row>
            ) : null}
            <div className="space-y-3">
              <ToggleRow
                label="Ultrastability"
                description="Frozen or dead fields mutate B/S rules."
                checked={settings.ultraEnabled}
                onCheckedChange={(v) => onSettings({ ultraEnabled: v })}
              />
              <ToggleRow
                label="Requisite variety"
                description="Low diversity injects noise."
                checked={settings.varietyEnabled}
                onCheckedChange={(v) => onSettings({ varietyEnabled: v })}
              />
              <ToggleRow
                label="Autopoiesis"
                description="Long-lived clusters are protected."
                checked={settings.autoEnabled}
                onCheckedChange={(v) => onSettings({ autoEnabled: v })}
              />
              <ToggleRow
                label="Observer loop"
                description="The controller’s goal is itself a moving target."
                checked={settings.observerEnabled}
                onCheckedChange={(v) => onSettings({ observerEnabled: v })}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
