import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StepForward, c as Play, d as Eraser, f as Droplets, l as Pencil, n as VolumeX, o as Shuffle, r as Volume2, s as Redo, t as Zap, u as Pause } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as Area, r as ResponsiveContainer, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BO8DZCbS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,opacity,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-fg text-accent-fg hover:bg-fg/90",
			accent: "bg-accent text-accent-fg hover:bg-accent/90",
			secondary: "bg-raised text-fg hover:bg-raised/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
			ghost: "text-muted hover:bg-raised hover:text-fg",
			outline: "text-fg shadow-[0_0_0_1px_rgba(255,255,255,0.10)] hover:bg-raised"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var LOOP_META = [
	{
		id: "homeostasis",
		label: "Homeostasis"
	},
	{
		id: "ultrastability",
		label: "Ultrastability"
	},
	{
		id: "variety",
		label: "Variety"
	},
	{
		id: "metabolism",
		label: "Metabolism"
	},
	{
		id: "season",
		label: "Season"
	},
	{
		id: "autopoiesis",
		label: "Autopoiesis"
	},
	{
		id: "observer",
		label: "Observer"
	}
];
var DEFAULT_SETTINGS = {
	environment: true,
	cybernetics: true,
	climate: .45,
	seasonRate: .35,
	seasonAmp: .4,
	energyRichness: .55,
	metabolicHeat: .5,
	noise: .12,
	homeoGain: .55,
	autoSetpoint: true,
	setpoint: .16,
	ultraEnabled: true,
	varietyEnabled: true,
	autoEnabled: true,
	observerEnabled: true
};
var PRESETS = [
	{
		id: "homeostat",
		name: "Homeostat",
		blurb: "Full feedback. The field keeps itself alive.",
		settings: { ...DEFAULT_SETTINGS }
	},
	{
		id: "classic",
		name: "Classic",
		blurb: "B3/S23. No climate, no controller.",
		settings: {
			environment: false,
			cybernetics: false
		}
	},
	{
		id: "ice",
		name: "Ice line",
		blurb: "A moving temperate band. Life follows the thaw.",
		settings: {
			environment: true,
			cybernetics: true,
			climate: .85,
			seasonAmp: .7,
			seasonRate: .28,
			energyRichness: .4,
			metabolicHeat: .35
		}
	},
	{
		id: "hothouse",
		name: "Hothouse",
		blurb: "Hot, rich, fast. Negative feedback has to work.",
		settings: {
			environment: true,
			cybernetics: true,
			climate: .15,
			seasonAmp: .15,
			energyRichness: .9,
			metabolicHeat: .85,
			homeoGain: .7
		}
	},
	{
		id: "ashby",
		name: "Ashby",
		blurb: "Ultrastable. Rules flip until the field holds.",
		settings: {
			environment: true,
			cybernetics: true,
			ultraEnabled: true,
			varietyEnabled: true,
			noise: .22,
			homeoGain: .4
		}
	},
	{
		id: "garden",
		name: "Garden",
		blurb: "Energy wells and long-lived organisms.",
		settings: {
			environment: true,
			cybernetics: true,
			energyRichness: .8,
			autoEnabled: true,
			climate: .25,
			metabolicHeat: .3
		}
	},
	{
		id: "dust",
		name: "Dust",
		blurb: "Sparse. The observer has to restart life.",
		settings: {
			environment: true,
			cybernetics: true,
			energyRichness: .28,
			climate: .55,
			noise: .08,
			homeoGain: .8,
			setpoint: .08
		}
	}
];
function Row({ label, value, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-fg",
				children: label
			}), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tabular-nums text-muted",
				children: value
			}) : null]
		}), children]
	});
}
function RangeInput({ value, min, max, step, label, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "range",
		min,
		max,
		step,
		value,
		"aria-label": label,
		onChange: (e) => onChange(Number(e.target.value)),
		className: "h-9 w-full cursor-pointer appearance-none bg-transparent accent-accent"
	});
}
function ToggleRow({ label, description, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-fg",
				children: label
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs leading-relaxed text-subtle",
				title: description,
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "switch",
			"aria-checked": checked,
			"aria-label": label,
			onClick: () => onCheckedChange(!checked),
			className: cn("relative h-6 w-11 shrink-0 rounded-full transition-colors duration-150", checked ? "bg-accent" : "bg-raised shadow-[0_0_0_1px_rgba(255,255,255,0.10)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute top-0.5 size-5 rounded-full bg-fg transition-transform duration-150", checked ? "translate-x-5 bg-accent-fg" : "translate-x-0.5") })
		})]
	});
}
var TABS = [
	{
		id: "run",
		label: "Run"
	},
	{
		id: "paint",
		label: "Paint"
	},
	{
		id: "world",
		label: "World"
	},
	{
		id: "loops",
		label: "Loops"
	}
];
function ControlPanel(props) {
	const { running, speed, settings, paintMode, brush, showHeat, showEnergy, muted, preset, onToggleRun, onStep, onSpeed, onSettings, onPaintMode, onBrush, onShowHeat, onShowEnergy, onMuted, onSeed, onClear, onRefit } = props;
	const [tab, setTab] = (0, import_react.useState)("run");
	const modes = [
		{
			id: "life",
			label: "Life",
			icon: Pencil
		},
		{
			id: "erase",
			label: "Erase",
			icon: Eraser
		},
		{
			id: "regulator",
			label: "Regulator",
			icon: Zap
		},
		{
			id: "energy",
			label: "Energy",
			icon: Droplets
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col overflow-hidden bg-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2 px-5 pt-5 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "flex-1",
						onClick: onToggleRun,
						"aria-label": running ? "Pause" : "Run",
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 size-4" }), running ? "Pause" : "Run"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						onClick: onStep,
						"aria-label": "Step one generation",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepForward, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						onClick: () => onMuted(!muted),
						"aria-label": muted ? "Unmute" : "Mute",
						children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid shrink-0 grid-cols-4 gap-1 px-5 pb-4",
				children: TABS.map((t) => {
					const on = tab === t.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab(t.id),
						className: cn("h-10 rounded-md text-sm font-medium transition-colors duration-150", on ? "bg-raised text-fg" : "text-muted hover:text-fg"),
						"aria-pressed": on,
						children: t.label
					}, t.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain no-scrollbar px-5 pb-6",
				children: [
					tab === "run" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Tempo",
								value: `${speed.toFixed(0)} /s`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
									min: 1,
									max: 40,
									step: 1,
									value: speed,
									label: "Generations per second",
									onChange: onSpeed
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "secondary",
										onClick: () => onSeed(preset),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-4" }), "Reseed"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										onClick: onClear,
										children: "Clear"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										onClick: onRefit,
										"aria-label": "Fit grid to view",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo, { className: "size-4" }), "Fit"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-subtle",
								children: "Starts on the seeded pattern. Press Run to let the loops take over."
							})
						]
					}) : null,
					tab === "paint" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: modes.map((m) => {
									const Icon = m.icon;
									const on = paintMode === m.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: on ? "accent" : "secondary",
										size: "sm",
										onClick: () => onPaintMode(m.id),
										"aria-pressed": on,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), m.label]
									}, m.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Radius",
								value: String(brush),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
									min: 0,
									max: 6,
									step: 1,
									value: brush,
									label: "Brush radius",
									onChange: onBrush
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-subtle",
								children: "Drag on the field to draw. Regulators hold local order."
							})
						]
					}) : null,
					tab === "world" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: PRESETS.map((p) => {
									const on = preset === p.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										title: p.blurb,
										onClick: () => onSeed(p.id),
										className: cn("rounded-full px-3 py-1.5 text-sm transition-colors duration-150", on ? "bg-accent text-accent-fg" : "bg-raised text-muted hover:text-fg"),
										children: p.name
									}, p.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Couple climate",
								description: "Heat, energy, and season rewrite survival.",
								checked: settings.environment,
								onCheckedChange: (v) => onSettings({ environment: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-x-5 gap-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Latitude",
										value: settings.climate.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.climate,
											label: "Latitude gradient",
											onChange: (v) => onSettings({ climate: v })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Season rate",
										value: settings.seasonRate.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.seasonRate,
											label: "Season rate",
											onChange: (v) => onSettings({ seasonRate: v })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Season depth",
										value: settings.seasonAmp.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.seasonAmp,
											label: "Season depth",
											onChange: (v) => onSettings({ seasonAmp: v })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Energy",
										value: settings.energyRichness.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.energyRichness,
											label: "Energy richness",
											onChange: (v) => onSettings({ energyRichness: v })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Heat",
										value: settings.metabolicHeat.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.metabolicHeat,
											label: "Metabolic heat",
											onChange: (v) => onSettings({ metabolicHeat: v })
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Noise",
										value: settings.noise.toFixed(2),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
											min: 0,
											max: 1,
											step: .01,
											value: settings.noise,
											label: "Noise",
											onChange: (v) => onSettings({ noise: v })
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									label: "Show heat",
									checked: showHeat,
									onCheckedChange: onShowHeat
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									label: "Show energy",
									checked: showEnergy,
									onCheckedChange: onShowEnergy
								})]
							})
						]
					}) : null,
					tab === "loops" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Feedback loops",
								description: "The field observes itself and acts.",
								checked: settings.cybernetics,
								onCheckedChange: (v) => onSettings({ cybernetics: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Homeostatic gain",
								value: settings.homeoGain.toFixed(2),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
									min: 0,
									max: 1,
									step: .01,
									value: settings.homeoGain,
									label: "Homeostatic gain",
									onChange: (v) => onSettings({ homeoGain: v })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								label: "Adaptive setpoint",
								description: "Target density tracks what the field can hold.",
								checked: settings.autoSetpoint,
								onCheckedChange: (v) => onSettings({ autoSetpoint: v })
							}),
							!settings.autoSetpoint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Setpoint",
								value: `${(settings.setpoint * 100).toFixed(0)}%`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeInput, {
									min: .04,
									max: .4,
									step: .01,
									value: settings.setpoint,
									label: "Setpoint",
									onChange: (v) => onSettings({ setpoint: v })
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Ultrastability",
										description: "Frozen or dead fields mutate B/S rules.",
										checked: settings.ultraEnabled,
										onCheckedChange: (v) => onSettings({ ultraEnabled: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Requisite variety",
										description: "Low diversity injects noise.",
										checked: settings.varietyEnabled,
										onCheckedChange: (v) => onSettings({ varietyEnabled: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Autopoiesis",
										description: "Long-lived clusters are protected.",
										checked: settings.autoEnabled,
										onCheckedChange: (v) => onSettings({ autoEnabled: v })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
										label: "Observer loop",
										description: "The controller’s goal is itself a moving target.",
										checked: settings.observerEnabled,
										onCheckedChange: (v) => onSettings({ observerEnabled: v })
									})
								]
							})
						]
					}) : null
				]
			})
		]
	});
}
function hexToRgb(hex) {
	const h = hex.replace("#", "").trim();
	const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
}
function mix(a, b, t) {
	const u = Math.max(0, Math.min(1, t));
	return [
		Math.round(a[0] + (b[0] - a[0]) * u),
		Math.round(a[1] + (b[1] - a[1]) * u),
		Math.round(a[2] + (b[2] - a[2]) * u)
	];
}
function measureBox(el) {
	const rect = el.getBoundingClientRect();
	return {
		w: Math.max(el.clientWidth, rect.width, 0),
		h: Math.max(el.clientHeight, rect.height, 0)
	};
}
function fallbackBox() {
	const vw = window.visualViewport?.width ?? window.innerWidth ?? 960;
	const vh = window.visualViewport?.height ?? window.innerHeight ?? 640;
	return {
		w: Math.max(480, Math.floor(vw * .62)),
		h: Math.max(320, Math.floor(vh * .55))
	};
}
function FieldCanvas({ engine, running, speed, paintMode, brush, showHeat, showEnergy, initialPreset, onMetrics, onUnlock }) {
	const wrapRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const envRef = (0, import_react.useRef)(null);
	const runningRef = (0, import_react.useRef)(running);
	const speedRef = (0, import_react.useRef)(speed);
	const modeRef = (0, import_react.useRef)(paintMode);
	const brushRef = (0, import_react.useRef)(brush);
	const heatRef = (0, import_react.useRef)(showHeat);
	const energyRef = (0, import_react.useRef)(showEnergy);
	const painting = (0, import_react.useRef)(false);
	runningRef.current = running;
	speedRef.current = speed;
	modeRef.current = paintMode;
	brushRef.current = brush;
	heatRef.current = showHeat;
	energyRef.current = showEnergy;
	(0, import_react.useLayoutEffect)(() => {
		const canvasNode = canvasRef.current;
		const wrapNode = wrapRef.current;
		if (!canvasNode || !wrapNode) return;
		const ctxNode = canvasNode.getContext("2d", { alpha: false }) ?? canvasNode.getContext("2d");
		if (!ctxNode) return;
		const envNode = envRef.current ?? document.createElement("canvas");
		envRef.current = envNode;
		const envCtxNode = envNode.getContext("2d", { alpha: false }) ?? envNode.getContext("2d");
		if (!envCtxNode) return;
		const gfx = {
			wrap: wrapNode,
			canvas: canvasNode,
			ctx: ctxNode,
			env: envNode,
			envCtx: envCtxNode
		};
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let raf = 0;
		let bootRaf = 0;
		let last = performance.now();
		let acc = 0;
		let cssW = 1;
		let cssH = 1;
		let lastMetrics = 0;
		let fittedReal = false;
		const theme = readTheme();
		function readTheme() {
			const s = getComputedStyle(document.documentElement);
			const pick = (name, fb) => {
				return s.getPropertyValue(name).trim() || fb;
			};
			return {
				bg: hexToRgb(pick("--color-bg", "#090a0c")),
				accent: hexToRgb(pick("--color-accent", "#8aa394")),
				fg: hexToRgb(pick("--color-fg", "#e8e6dc")),
				cold: hexToRgb(pick("--color-heat-cold", "#1a2830")),
				hot: hexToRgb(pick("--color-heat-hot", "#3a2a1c"))
			};
		}
		function snapShown() {
			const { alive, shown } = engine;
			for (let i = 0; i < shown.length; i++) if (alive[i]) shown[i] = 1;
		}
		function seedAt(w, h) {
			engine.fitTo(Math.max(w, 320), Math.max(h, 240));
			engine.seed(initialPreset, 7);
			snapShown();
			onMetrics();
		}
		function applyBitmap(w, h) {
			cssW = Math.max(1, w);
			cssH = Math.max(1, h);
			const dpr = Math.min(2, window.devicePixelRatio || 1);
			gfx.canvas.width = Math.max(1, Math.floor(cssW * dpr));
			gfx.canvas.height = Math.max(1, Math.floor(cssH * dpr));
			gfx.canvas.style.width = "100%";
			gfx.canvas.style.height = "100%";
			gfx.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
		function resize() {
			const box = measureBox(gfx.wrap);
			const laidOut = box.w >= 32 && box.h >= 32;
			const size = laidOut ? box : fallbackBox();
			applyBitmap(laidOut ? box.w : size.w, laidOut ? box.h : size.h);
			if (engine.cols === 0) {
				seedAt(size.w, size.h);
				if (laidOut) fittedReal = true;
				return;
			}
			if (laidOut && !fittedReal && engine.generation === 0) {
				fittedReal = true;
				const nextCols = Math.max(48, Math.min(220, Math.floor(box.w / 6.5)));
				const nextRows = Math.max(36, Math.min(180, Math.floor(box.h / 6.5)));
				if (Math.abs(nextCols - engine.cols) > 10 || Math.abs(nextRows - engine.rows) > 10) seedAt(box.w, box.h);
			}
		}
		function cellFromEvent(ev) {
			const rect = gfx.canvas.getBoundingClientRect();
			const x = ev.clientX - rect.left;
			const y = ev.clientY - rect.top;
			const cw = cssW / Math.max(1, engine.cols);
			const ch = cssH / Math.max(1, engine.rows);
			return {
				cx: Math.floor(x / cw),
				cy: Math.floor(y / ch)
			};
		}
		function paintAt(ev) {
			const { cx, cy } = cellFromEvent(ev);
			engine.paint(cx, cy, modeRef.current, brushRef.current);
		}
		const onDown = (ev) => {
			onUnlock();
			painting.current = true;
			gfx.canvas.setPointerCapture(ev.pointerId);
			paintAt(ev);
		};
		const onMove = (ev) => {
			if (!painting.current) return;
			paintAt(ev);
		};
		const onUp = (ev) => {
			painting.current = false;
			try {
				gfx.canvas.releasePointerCapture(ev.pointerId);
			} catch {}
		};
		gfx.canvas.addEventListener("pointerdown", onDown);
		gfx.canvas.addEventListener("pointermove", onMove);
		gfx.canvas.addEventListener("pointerup", onUp);
		gfx.canvas.addEventListener("pointercancel", onUp);
		function render() {
			const { bg, accent, fg, cold, hot } = theme;
			gfx.ctx.fillStyle = `rgb(${bg[0]},${bg[1]},${bg[2]})`;
			gfx.ctx.fillRect(0, 0, cssW, cssH);
			const { cols, rows } = engine;
			if (cols === 0 || rows === 0) return;
			const cellW = cssW / cols;
			const cellH = cssH / rows;
			if (heatRef.current || energyRef.current) {
				if (gfx.env.width !== cols || gfx.env.height !== rows) {
					gfx.env.width = cols;
					gfx.env.height = rows;
				}
				const img = gfx.envCtx.createImageData(cols, rows);
				const data = img.data;
				const { heat, energy } = engine;
				for (let i = 0; i < cols * rows; i++) {
					let c = bg;
					if (heatRef.current) c = mix(cold, hot, heat[i]);
					c = mix(bg, c, heatRef.current ? .55 : 0);
					if (energyRef.current) c = mix(c, accent, energy[i] * .35);
					const o = i * 4;
					data[o] = c[0];
					data[o + 1] = c[1];
					data[o + 2] = c[2];
					data[o + 3] = 255;
				}
				gfx.envCtx.putImageData(img, 0, 0);
				gfx.ctx.imageSmoothingEnabled = true;
				gfx.ctx.drawImage(gfx.env, 0, 0, cssW, cssH);
			}
			gfx.ctx.imageSmoothingEnabled = false;
			const gap = cellW >= 7 ? .18 : cellW >= 4 ? .12 : 0;
			const shown = engine.shown;
			const kind = engine.kind;
			const tenure = engine.tenure;
			for (let y = 0; y < rows; y++) {
				const py = y * cellH;
				for (let x = 0; x < cols; x++) {
					const i = y * cols + x;
					const a = shown[i];
					if (a < .04) continue;
					const px = x * cellW;
					const isReg = kind[i] === 1;
					const age = tenure[i] / 255;
					const rgb = isReg ? mix(accent, fg, .55) : mix(accent, fg, .22 + age * .28);
					gfx.ctx.globalAlpha = Math.min(1, a);
					const insetX = cellW * gap * .5;
					const insetY = cellH * gap * .5;
					const w = Math.max(.6, cellW - insetX * 2);
					const h = Math.max(.6, cellH - insetY * 2);
					const rad = Math.min(w, h) * (cellW >= 8 ? .22 : .12);
					roundRect(gfx.ctx, px + insetX, py + insetY, w, h, rad);
					gfx.ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
					gfx.ctx.fill();
					if (isReg && cellW >= 5) {
						gfx.ctx.globalAlpha = Math.min(1, a * .9);
						gfx.ctx.strokeStyle = `rgb(${fg[0]},${fg[1]},${fg[2]})`;
						gfx.ctx.lineWidth = Math.max(.6, cellW * .08);
						roundRect(gfx.ctx, px + insetX, py + insetY, w, h, rad);
						gfx.ctx.stroke();
					}
				}
			}
			gfx.ctx.globalAlpha = 1;
			for (const p of engine.pulses) {
				const t = p.age / p.life;
				const r = Math.max(cellW, cellH) * (2 + t * 18);
				gfx.ctx.beginPath();
				gfx.ctx.arc((p.x + .5) * cellW, (p.y + .5) * cellH, r, 0, Math.PI * 2);
				gfx.ctx.strokeStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${(1 - t) * .35})`;
				gfx.ctx.lineWidth = 1.25;
				gfx.ctx.stroke();
			}
		}
		function loop(now) {
			const dt = Math.min(.1, (now - last) / 1e3);
			last = now;
			const box = measureBox(gfx.wrap);
			if (box.w >= 32 && box.h >= 32 && (Math.abs(box.w - cssW) > 1 || Math.abs(box.h - cssH) > 1)) resize();
			if (runningRef.current && engine.cols > 0) {
				acc += dt;
				const interval = 1 / Math.max(.5, speedRef.current);
				let steps = 0;
				while (acc >= interval && steps < 10) {
					engine.step();
					acc -= interval;
					steps++;
				}
				if (steps > 0 && now - lastMetrics > 80) {
					lastMetrics = now;
					onMetrics();
				}
			} else acc = 0;
			engine.advanceDisplay(dt, reduced);
			render();
			raf = requestAnimationFrame(loop);
		}
		const onWinResize = () => {
			resize();
			render();
		};
		const ro = new ResizeObserver(() => {
			resize();
			render();
		});
		ro.observe(gfx.wrap);
		window.addEventListener("resize", onWinResize);
		window.visualViewport?.addEventListener("resize", onWinResize);
		resize();
		if (engine.cols === 0) {
			const fb = fallbackBox();
			seedAt(fb.w, fb.h);
		}
		snapShown();
		render();
		const boxNow = measureBox(gfx.wrap);
		if (boxNow.w < 32 || boxNow.h < 32) {
			let tries = 0;
			const boot = () => {
				resize();
				render();
				const next = measureBox(gfx.wrap);
				if ((next.w < 32 || next.h < 32) && tries++ < 120) bootRaf = requestAnimationFrame(boot);
			};
			bootRaf = requestAnimationFrame(boot);
		}
		document.fonts?.ready?.then(() => {
			resize();
			render();
		});
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			cancelAnimationFrame(bootRaf);
			ro.disconnect();
			window.removeEventListener("resize", onWinResize);
			window.visualViewport?.removeEventListener("resize", onWinResize);
			gfx.canvas.removeEventListener("pointerdown", onDown);
			gfx.canvas.removeEventListener("pointermove", onMove);
			gfx.canvas.removeEventListener("pointerup", onUp);
			gfx.canvas.removeEventListener("pointercancel", onUp);
		};
	}, [
		engine,
		onMetrics,
		onUnlock,
		initialPreset
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "absolute inset-0 h-full min-h-0 w-full min-w-0 overflow-hidden bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "block h-full w-full max-h-full max-w-full touch-none",
			"aria-label": "Cellular field"
		})
	});
}
function roundRect(ctx, x, y, w, h, r) {
	const radius = Math.min(r, w / 2, h / 2);
	ctx.beginPath();
	if (radius < .4) {
		ctx.rect(x, y, w, h);
		return;
	}
	ctx.moveTo(x + radius, y);
	ctx.arcTo(x + w, y, x + w, y + h, radius);
	ctx.arcTo(x + w, y + h, x, y + h, radius);
	ctx.arcTo(x, y + h, x, y, radius);
	ctx.arcTo(x, y, x + w, y, radius);
	ctx.closePath();
}
function fmt(n) {
	return n.toLocaleString(void 0, { maximumFractionDigits: 0 });
}
function pct(n) {
	return `${(n * 100).toFixed(1)}%`;
}
function MetricsBar({ metrics, running }) {
	const history = metrics?.popHistory.map((pop, i) => ({
		i,
		pop
	})) ?? [];
	const cells = [
		{
			label: "Gen",
			value: metrics ? fmt(metrics.generation) : "—"
		},
		{
			label: "Pop",
			value: metrics ? fmt(metrics.population) : "—"
		},
		{
			label: "Density",
			value: metrics ? pct(metrics.density) : "—"
		},
		{
			label: "Viability",
			value: metrics ? metrics.viability.toFixed(2) : "—"
		},
		{
			label: "Setpoint",
			value: metrics ? pct(metrics.setpoint) : "—",
			hideOnSmall: true
		},
		{
			label: "Rule",
			value: metrics ? metrics.rule : "—"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 border-t border-border bg-surface px-3 py-2 sm:px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-scrollbar flex min-w-0 flex-1 items-center gap-4 overflow-x-auto",
			children: [cells.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("shrink-0", c.hideOnSmall && "hidden sm:block"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs tracking-wide text-subtle",
					children: c.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-sm tabular-nums text-fg",
					children: c.value
				})]
			}, c.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-scrollbar hidden min-w-0 flex-1 items-center gap-1.5 overflow-x-auto lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-xs text-subtle",
						children: running ? "Loops" : "Idle"
					}),
					metrics?.loops.map((loop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("shrink-0 rounded-full px-2 py-0.5 font-mono text-xs tabular-nums", loop.active ? "bg-accent/20 text-accent" : "bg-raised text-subtle"),
						title: loop.note || loop.label,
						children: loop.label
					}, loop.id)),
					metrics && metrics.adaptations > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 rounded-full bg-fg/10 px-2 py-0.5 font-mono text-xs text-fg",
						children: [metrics.adaptations, " adapted"]
					}) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden h-8 w-36 shrink-0 sm:block",
			children: history.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChart, {
					data: history,
					margin: {
						top: 2,
						right: 0,
						left: 0,
						bottom: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "pop",
						stroke: "var(--color-accent)",
						fill: "var(--color-accent)",
						fillOpacity: .16,
						strokeWidth: 1.5,
						isAnimationActive: false
					})
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-sm bg-raised" })
		})]
	});
}
/** Procedural instrument bed. Unlocks on the first gesture. */
var FieldAudio = class {
	ctx = null;
	master = null;
	sfx = null;
	drone = null;
	droneGain = null;
	droneFilter = null;
	muted = false;
	enabled = true;
	unlock() {
		if (!this.enabled) return;
		if (!this.ctx) {
			const Ctx = window.AudioContext || window.webkitAudioContext;
			this.ctx = new Ctx({ latencyHint: "interactive" });
			this.master = this.ctx.createGain();
			this.sfx = this.ctx.createGain();
			this.droneGain = this.ctx.createGain();
			this.droneFilter = this.ctx.createBiquadFilter();
			this.droneFilter.type = "lowpass";
			this.droneFilter.frequency.value = 220;
			this.droneFilter.Q.value = .7;
			this.drone = this.ctx.createOscillator();
			this.drone.type = "sine";
			this.drone.frequency.value = 55;
			this.drone.connect(this.droneFilter);
			this.droneFilter.connect(this.droneGain);
			this.droneGain.gain.value = .03;
			this.sfx.gain.value = .2;
			this.master.gain.value = this.muted ? 0 : .7;
			this.droneGain.connect(this.master);
			this.sfx.connect(this.master);
			this.master.connect(this.ctx.destination);
			this.drone.start();
		}
		if (this.ctx.state === "suspended") this.ctx.resume();
	}
	setMuted(muted) {
		this.muted = muted;
		if (this.master && this.ctx) this.master.gain.setTargetAtTime(muted ? 0 : .7, this.ctx.currentTime, .04);
	}
	tick(density, viability) {
		if (!this.ctx || !this.drone || !this.droneFilter || !this.droneGain || this.muted) return;
		const t = this.ctx.currentTime;
		const freq = 46 + density * 40 + viability * 18;
		this.drone.frequency.setTargetAtTime(freq, t, .08);
		this.droneFilter.frequency.setTargetAtTime(160 + viability * 280, t, .1);
		this.droneGain.gain.setTargetAtTime(.018 + viability * .02, t, .12);
	}
	blip(kind) {
		if (!this.ctx || !this.sfx || this.muted) return;
		const t = this.ctx.currentTime;
		const osc = this.ctx.createOscillator();
		const g = this.ctx.createGain();
		osc.type = kind === "adapt" ? "triangle" : "sine";
		const f = kind === "adapt" ? 440 : kind === "loop" ? 220 : 880;
		osc.frequency.setValueAtTime(f, t);
		osc.frequency.exponentialRampToValueAtTime(f * .5, t + .08);
		g.gain.setValueAtTime(kind === "step" ? .03 : .06, t);
		g.gain.exponentialRampToValueAtTime(1e-4, t + (kind === "adapt" ? .28 : .12));
		osc.connect(g);
		g.connect(this.sfx);
		osc.start(t);
		osc.stop(t + .3);
		osc.onended = () => {
			osc.disconnect();
			g.disconnect();
		};
	}
	resume() {
		if (this.ctx?.state === "suspended") this.ctx.resume();
	}
};
function classicGenome() {
	const birth = Array.from({ length: 9 }, () => false);
	const survive = Array.from({ length: 9 }, () => false);
	birth[3] = true;
	survive[2] = true;
	survive[3] = true;
	return {
		birth,
		survive
	};
}
function cloneGenome(g) {
	return {
		birth: g.birth.slice(),
		survive: g.survive.slice()
	};
}
function genomeToString(g) {
	let b = "";
	let s = "";
	for (let i = 0; i < 9; i++) {
		if (g.birth[i]) b += String(i);
		if (g.survive[i]) s += String(i);
	}
	return `B${b || "∅"}/S${s || "∅"}`;
}
/** Flip a bit near classic Life so mutations stay in a playable neighborhood. */
function mutateGenome(g, rand) {
	const next = cloneGenome(g);
	const lane = rand() < .5 ? next.birth : next.survive;
	const weights = [
		.02,
		.18,
		.22,
		.22,
		.18,
		.1,
		.05,
		.02,
		.01
	];
	let r = rand();
	let idx = 3;
	for (let i = 0; i < 9; i++) {
		r -= weights[i];
		if (r <= 0) {
			idx = i;
			break;
		}
	}
	lane[idx] = !lane[idx];
	const anyBirth = next.birth.some(Boolean);
	const anySurvive = next.survive.some(Boolean);
	if (!anyBirth) next.birth[3] = true;
	if (!anySurvive) next.survive[2] = true;
	return next;
}
var TEST_WINDOW = 36;
var HISTORY = 96;
var WELL_COUNT = 5;
function hash(ix, iy, seed) {
	let n = Math.imul(ix, 374761393) + Math.imul(iy, 668265263) + Math.imul(seed, 982451653);
	n = Math.imul(n ^ n >>> 13, 1274126177);
	return ((n ^ n >>> 16) >>> 0) / 4294967296;
}
function valueNoise(x, y, seed) {
	const x0 = Math.floor(x);
	const y0 = Math.floor(y);
	const fx = x - x0;
	const fy = y - y0;
	const sx = fx * fx * (3 - 2 * fx);
	const sy = fy * fy * (3 - 2 * fy);
	const a = hash(x0, y0, seed);
	const b = hash(x0 + 1, y0, seed);
	const c = hash(x0, y0 + 1, seed);
	const d = hash(x0 + 1, y0 + 1, seed);
	return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
}
function fbm(x, y, seed) {
	let v = 0;
	let a = .5;
	let f = 1;
	for (let i = 0; i < 4; i++) {
		v += a * valueNoise(x * f, y * f, seed + i * 19);
		a *= .5;
		f *= 2;
	}
	return v;
}
function wrap(v, max) {
	if (v < 0) return v + max;
	if (v >= max) return v - max;
	return v;
}
var SimEngine = class {
	cols = 0;
	rows = 0;
	alive = /* @__PURE__ */ new Uint8Array(0);
	nextAlive = /* @__PURE__ */ new Uint8Array(0);
	kind = /* @__PURE__ */ new Uint8Array(0);
	nextKind = /* @__PURE__ */ new Uint8Array(0);
	tenure = /* @__PURE__ */ new Uint8Array(0);
	heat = /* @__PURE__ */ new Float32Array(0);
	nextHeat = /* @__PURE__ */ new Float32Array(0);
	energy = /* @__PURE__ */ new Float32Array(0);
	nextEnergy = /* @__PURE__ */ new Float32Array(0);
	shown = /* @__PURE__ */ new Float32Array(0);
	genome = classicGenome();
	settings = { ...DEFAULT_SETTINGS };
	generation = 0;
	adaptations = 0;
	seedKey = 1;
	pulses = [];
	lastLoops = {
		homeostasis: {
			active: false,
			note: ""
		},
		ultrastability: {
			active: false,
			note: ""
		},
		variety: {
			active: false,
			note: ""
		},
		metabolism: {
			active: false,
			note: ""
		},
		season: {
			active: false,
			note: ""
		},
		autopoiesis: {
			active: false,
			note: ""
		},
		observer: {
			active: false,
			note: ""
		}
	};
	wells = [];
	setpoint = .16;
	integral = 0;
	freezeStreak = 0;
	collapseStreak = 0;
	probe = null;
	popHistory = [];
	viaHistory = [];
	lastPop = 0;
	lastReg = 0;
	lastEntropy = 0;
	lastHeat = .5;
	lastEnergy = .4;
	lastViability = 0;
	lastChanged = 0;
	randState = 1;
	allocate(cols, rows) {
		this.cols = cols;
		this.rows = rows;
		const n = cols * rows;
		this.alive = new Uint8Array(n);
		this.nextAlive = new Uint8Array(n);
		this.kind = new Uint8Array(n);
		this.nextKind = new Uint8Array(n);
		this.tenure = new Uint8Array(n);
		this.heat = new Float32Array(n);
		this.nextHeat = new Float32Array(n);
		this.energy = new Float32Array(n);
		this.nextEnergy = new Float32Array(n);
		this.shown = new Float32Array(n);
	}
	fitTo(cssWidth, cssHeight, cellPx = 6.5) {
		const cols = Math.max(48, Math.min(220, Math.floor(cssWidth / cellPx)));
		const rows = Math.max(36, Math.min(180, Math.floor(cssHeight / cellPx)));
		if (cols === this.cols && rows === this.rows) return;
		this.allocate(cols, rows);
	}
	rand() {
		this.randState = Math.imul(this.randState, 1664525) + 1013904223 >>> 0;
		return this.randState / 4294967296;
	}
	idx(x, y) {
		return y * this.cols + x;
	}
	neighbors(x, y) {
		const { cols, rows, alive } = this;
		let n = 0;
		for (let dy = -1; dy <= 1; dy++) {
			const row = wrap(y + dy, rows) * cols;
			for (let dx = -1; dx <= 1; dx++) {
				if (dx === 0 && dy === 0) continue;
				const xx = wrap(x + dx, cols);
				n += alive[row + xx];
			}
		}
		return n;
	}
	stampPulse(x, y, kind, life = .9) {
		this.pulses.push({
			x,
			y,
			age: 0,
			life,
			kind
		});
		if (this.pulses.length > 12) this.pulses.shift();
	}
	stampCluster(cx, cy, r) {
		let planted = 0;
		for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
			if (dx * dx + dy * dy > r * r) continue;
			if (this.rand() < .35) continue;
			const x = wrap(cx + dx, this.cols);
			const y = wrap(cy + dy, this.rows);
			const i = this.idx(x, y);
			this.energy[i] = Math.min(1, this.energy[i] + .5);
			if (this.alive[i] === 0) {
				this.alive[i] = 1;
				this.shown[i] = Math.max(this.shown[i], .7);
				planted++;
			}
		}
		return planted;
	}
	note(id, active, text) {
		this.lastLoops[id] = {
			active,
			note: text
		};
	}
	resetNotes() {
		Object.keys(this.lastLoops).forEach((id) => {
			this.lastLoops[id] = {
				active: false,
				note: ""
			};
		});
	}
	seed(preset = "homeostat", seedKey) {
		if (this.cols === 0 || this.rows === 0) return;
		this.seedKey = seedKey ?? this.seedKey + 1 | 0;
		this.randState = this.seedKey * 1103515245 + 12345 >>> 0;
		this.generation = 0;
		this.adaptations = 0;
		this.integral = 0;
		this.freezeStreak = 0;
		this.collapseStreak = 0;
		this.probe = null;
		this.genome = classicGenome();
		this.setpoint = this.settings.setpoint;
		this.popHistory = [];
		this.viaHistory = [];
		this.pulses = [];
		this.alive.fill(0);
		this.kind.fill(0);
		this.tenure.fill(0);
		this.shown.fill(0);
		const { cols, rows } = this;
		const n = cols * rows;
		this.wells = [];
		for (let i = 0; i < WELL_COUNT; i++) this.wells.push({
			x: this.rand() * cols,
			y: this.rand() * rows,
			r: 6 + this.rand() * Math.min(cols, rows) * .12,
			amp: .35 + this.rand() * .5,
			phase: this.rand() * Math.PI * 2
		});
		for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
			const i = this.idx(x, y);
			const lat = y / rows;
			this.heat[i] = .35 + (1 - lat) * .2 + (this.rand() - .5) * .04;
			let e = .15;
			for (const w of this.wells) {
				const dx = x - w.x;
				const dy = y - w.y;
				e += w.amp * Math.exp(-(dx * dx + dy * dy) / (2 * w.r * w.r));
			}
			this.energy[i] = Math.min(1, e);
		}
		if (preset === "classic") {
			this.paintNoise(.28, 1.6);
			this.stampGun(Math.floor(cols * .08), Math.floor(rows * .35));
		} else if (preset === "dust") {
			this.paintNoise(.07, 2.4);
			this.placeRegulators(2);
		} else if (preset === "garden") {
			this.paintBlobs(.42, 1.1);
			this.placeRegulators(6);
		} else if (preset === "ice") {
			this.paintBand(.38, .55, .34);
			this.placeRegulators(3);
		} else if (preset === "hothouse") {
			this.paintNoise(.36, 1.3);
			this.placeRegulators(4);
		} else if (preset === "ashby") {
			this.paintNoise(.22, 1.8);
			this.placeRegulators(5);
		} else {
			this.paintBlobs(.34, 1.4);
			this.stampGun(Math.floor(cols * .1), Math.floor(rows * .28));
			this.placeRegulators(4);
		}
		this.lastPop = 0;
		for (let i = 0; i < n; i++) this.lastPop += this.alive[i];
	}
	paintNoise(density, scale) {
		const { cols, rows, seedKey } = this;
		for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) if (fbm(x / (cols / scale), y / (rows / scale), seedKey) > 1 - density) {
			const i = this.idx(x, y);
			this.alive[i] = 1;
			this.shown[i] = 1;
		}
	}
	paintBlobs(density, scale) {
		const { cols, rows, seedKey } = this;
		for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) if (fbm(x / (cols / scale), y / (rows / scale), seedKey + 7) > 1 - density && this.rand() < .85) {
			const i = this.idx(x, y);
			this.alive[i] = 1;
			this.shown[i] = 1;
		}
	}
	paintBand(lo, hi, density) {
		const { cols, rows } = this;
		for (let y = 0; y < rows; y++) {
			const t = y / rows;
			if (t < lo || t > hi) continue;
			for (let x = 0; x < cols; x++) if (this.rand() < density) {
				const i = this.idx(x, y);
				this.alive[i] = 1;
				this.shown[i] = 1;
			}
		}
	}
	placeRegulators(count) {
		const { cols, rows } = this;
		for (let k = 0; k < count; k++) {
			const well = this.wells[k % this.wells.length];
			const x = wrap(Math.floor(well.x + (this.rand() - .5) * 6), cols);
			const y = wrap(Math.floor(well.y + (this.rand() - .5) * 6), rows);
			const i = this.idx(x, y);
			this.alive[i] = 1;
			this.kind[i] = 1;
			this.shown[i] = 1;
			this.tenure[i] = 12;
		}
	}
	stampGun(ox, oy) {
		for (const [x, y] of [
			[0, 4],
			[0, 5],
			[1, 4],
			[1, 5],
			[10, 4],
			[10, 5],
			[10, 6],
			[11, 3],
			[11, 7],
			[12, 2],
			[12, 8],
			[13, 2],
			[13, 8],
			[14, 5],
			[15, 3],
			[15, 7],
			[16, 4],
			[16, 5],
			[16, 6],
			[17, 5],
			[20, 2],
			[20, 3],
			[20, 4],
			[21, 2],
			[21, 3],
			[21, 4],
			[22, 1],
			[22, 5],
			[24, 0],
			[24, 1],
			[24, 5],
			[24, 6],
			[34, 2],
			[34, 3],
			[35, 2],
			[35, 3]
		]) {
			const xx = wrap(ox + x, this.cols);
			const yy = wrap(oy + y, this.rows);
			const i = this.idx(xx, yy);
			this.alive[i] = 1;
			this.shown[i] = 1;
		}
	}
	clear() {
		this.alive.fill(0);
		this.kind.fill(0);
		this.tenure.fill(0);
		this.shown.fill(0);
		this.generation = 0;
		this.pulses = [];
	}
	paint(cx, cy, mode, radius) {
		const r = Math.max(0, radius);
		const r2 = r * r;
		for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
			if (dx * dx + dy * dy > r2) continue;
			const x = wrap(cx + dx, this.cols);
			const y = wrap(cy + dy, this.rows);
			const i = this.idx(x, y);
			if (mode === "erase") {
				this.alive[i] = 0;
				this.kind[i] = 0;
				this.tenure[i] = 0;
			} else if (mode === "energy") this.energy[i] = Math.min(1, this.energy[i] + .35);
			else if (mode === "regulator") {
				this.alive[i] = 1;
				this.kind[i] = 1;
				this.shown[i] = Math.max(this.shown[i], .8);
			} else {
				this.alive[i] = 1;
				this.kind[i] = 0;
				this.shown[i] = Math.max(this.shown[i], .8);
			}
		}
	}
	applySettings(partial) {
		this.settings = {
			...this.settings,
			...partial
		};
		if (!this.settings.autoSetpoint) this.setpoint = this.settings.setpoint;
	}
	advanceDisplay(dt, reduced = false) {
		const k = reduced ? 1 : 1 - Math.exp(-10 * dt);
		const decay = reduced ? 1 : 1 - Math.exp(-3.2 * dt);
		const { alive, shown } = this;
		for (let i = 0; i < shown.length; i++) if (alive[i]) shown[i] += (1 - shown[i]) * k;
		else shown[i] *= 1 - decay;
		for (let p = this.pulses.length - 1; p >= 0; p--) {
			this.pulses[p].age += dt;
			if (this.pulses[p].age > this.pulses[p].life) this.pulses.splice(p, 1);
		}
	}
	step() {
		if (this.cols === 0) return;
		this.resetNotes();
		const { cols, rows, settings } = this;
		const n = cols * rows;
		const envOn = settings.environment;
		const cybOn = settings.cybernetics;
		const seasonPhase = this.generation * (.004 + settings.seasonRate * .012);
		const season = Math.sin(seasonPhase);
		const ambient = .5 + season * settings.seasonAmp * .35;
		if (envOn) this.note("season", Math.abs(season) > .65, season > 0 ? "warm season" : "cold season");
		let pop = 0;
		let regs = 0;
		let heatSum = 0;
		let energySum = 0;
		let tenureSum = 0;
		let changed = 0;
		const hist = /* @__PURE__ */ new Uint16Array(9);
		const birth = this.genome.birth;
		const survive = this.genome.survive;
		for (let y = 0; y < rows; y++) {
			const lat = y / Math.max(1, rows - 1);
			const rowAmbient = ambient - (envOn ? (lat - .5) * settings.climate * .7 : 0);
			for (let x = 0; x < cols; x++) {
				const i = y * cols + x;
				const was = this.alive[i];
				const nb = this.neighbors(x, y);
				hist[nb]++;
				let e = this.energy[i];
				let h = this.heat[i];
				if (envOn) {
					let well = 0;
					for (const w of this.wells) {
						const dx = x - w.x;
						const dy = y - w.y;
						const pulse = .75 + .25 * Math.sin(seasonPhase + w.phase);
						well += w.amp * pulse * Math.exp(-(dx * dx + dy * dy) / (2 * w.r * w.r));
					}
					const regen = (.008 + settings.energyRichness * .02) * (.35 + well);
					e = e + regen - (was ? .028 : .006);
					if (this.kind[i] && was) e += .01;
					e = e < 0 ? 0 : e > 1 ? 1 : e;
					const emit = was ? .012 * settings.metabolicHeat : 0;
					h = h + (rowAmbient - h) * .08 + emit;
					h = h < 0 ? 0 : h > 1 ? 1 : h;
				}
				let live = was;
				const energyGate = !envOn || e > .07;
				const heatShift = envOn ? Math.round((h - .5) * 2) : 0;
				const nEff = Math.max(0, Math.min(8, nb + heatShift));
				if (was) {
					live = survive[nEff] ? 1 : 0;
					if (envOn && h > .86 && this.rand() < .18) live = 0;
					if (envOn && e < .05) live = 0;
					if (this.kind[i] && nb >= 1 && nb <= 6 && e > .08) live = 1;
				} else {
					live = birth[nEff] && energyGate ? 1 : 0;
					if (envOn && h < .18 && this.rand() < .5) live = 0;
				}
				if (settings.noise > 0 && this.rand() < settings.noise * .002) live = live ? 0 : 1;
				this.nextAlive[i] = live;
				this.nextKind[i] = live && this.kind[i] ? 1 : 0;
				this.nextHeat[i] = h;
				this.nextEnergy[i] = e;
				if (live) {
					pop++;
					if (this.kind[i]) regs++;
					this.tenure[i] = this.tenure[i] < 255 ? this.tenure[i] + 1 : 255;
					tenureSum += this.tenure[i];
				} else this.tenure[i] = 0;
				if (live !== was) changed++;
				heatSum += h;
				energySum += e;
			}
		}
		if (envOn) for (let y = 0; y < rows; y++) {
			const up = wrap(y - 1, rows) * cols;
			const dn = wrap(y + 1, rows) * cols;
			const row = y * cols;
			for (let x = 0; x < cols; x++) {
				const i = row + x;
				const l = row + wrap(x - 1, cols);
				const r = row + wrap(x + 1, cols);
				const h = this.nextHeat[i] * .6 + (this.nextHeat[l] + this.nextHeat[r] + this.nextHeat[up + x] + this.nextHeat[dn + x]) * .1;
				const e = this.nextEnergy[i] * .72 + (this.nextEnergy[l] + this.nextEnergy[r] + this.nextEnergy[up + x] + this.nextEnergy[dn + x]) * .07;
				this.heat[i] = h;
				this.energy[i] = e;
			}
		}
		else {
			this.heat.set(this.nextHeat);
			this.energy.set(this.nextEnergy);
		}
		const tmpA = this.alive;
		this.alive = this.nextAlive;
		this.nextAlive = tmpA;
		const tmpK = this.kind;
		this.kind = this.nextKind;
		this.nextKind = tmpK;
		const density = pop / n;
		const meanHeat = heatSum / n;
		const meanEnergy = energySum / n;
		const meanTenure = pop > 0 ? tenureSum / pop : 0;
		let entropy = 0;
		for (let k = 0; k < 9; k++) {
			if (!hist[k]) continue;
			const p = hist[k] / n;
			entropy -= p * Math.log2(p);
		}
		entropy /= Math.log2(9);
		const freeze = changed / n;
		if (freeze < .008) this.freezeStreak++;
		else this.freezeStreak = 0;
		if (density < .01) this.collapseStreak++;
		else this.collapseStreak = 0;
		const target = this.setpoint;
		const err = target - density;
		const stab = 1 - Math.min(1, freeze / .08);
		const diversity = entropy;
		const via = .28 * (1 - Math.min(1, Math.abs(density - target) / Math.max(.08, target))) + .24 * diversity + .2 * (1 - stab) + .16 * meanEnergy + .12 * (pop > 0 ? 1 : 0);
		if (cybOn) {
			this.runHomeostasis(err, density, settings.homeoGain);
			if (settings.varietyEnabled) this.runVariety(diversity, n);
			if (settings.ultraEnabled) this.runUltrastability(stab, via);
			if (settings.autoEnabled) this.runAutopoiesis(meanTenure, pop);
			if (settings.observerEnabled) this.runObserver(density, via);
			this.runMetabolism(meanHeat, density);
		}
		if (this.probe) {
			this.probe.remaining--;
			this.probe.acc += via;
			this.probe.samples++;
			this.note("ultrastability", true, "probing new genome");
			if (this.probe.remaining <= 0) {
				if (this.probe.acc / Math.max(1, this.probe.samples) + .02 >= this.probe.baseline) {
					this.adaptations++;
					this.note("ultrastability", true, `kept ${genomeToString(this.genome)}`);
					this.stampPulse(Math.floor(cols / 2), Math.floor(rows / 2), "ultrastability", 1.2);
				} else {
					this.genome = this.probe.previous;
					this.note("ultrastability", true, "reverted genome");
				}
				this.probe = null;
			}
		}
		this.generation++;
		this.lastPop = 0;
		for (let i = 0; i < this.alive.length; i++) this.lastPop += this.alive[i];
		this.lastReg = 0;
		for (let i = 0; i < this.kind.length; i++) if (this.alive[i] && this.kind[i]) this.lastReg++;
		this.lastEntropy = entropy;
		this.lastHeat = meanHeat;
		this.lastEnergy = meanEnergy;
		this.lastViability = via;
		this.lastChanged = changed;
		this.popHistory.push(this.lastPop);
		this.viaHistory.push(via);
		if (this.popHistory.length > HISTORY) {
			this.popHistory.shift();
			this.viaHistory.shift();
		}
	}
	runHomeostasis(err, density, gain) {
		this.integral = Math.max(-.4, Math.min(.4, this.integral + err * .02));
		const u = gain * (err * 1.4 + this.integral * .6);
		if (u > .01) {
			const seeds = Math.min(28, Math.floor(u * 18) + (density < .01 ? 8 : 0));
			let planted = 0;
			for (let s = 0; s < seeds; s++) {
				const x = Math.floor(this.rand() * this.cols);
				const y = Math.floor(this.rand() * this.rows);
				planted += this.stampCluster(x, y, 1 + Math.floor(this.rand() * 2));
			}
			if (planted > 0) {
				this.note("homeostasis", true, `seeded ${planted}`);
				this.stampPulse(Math.floor(this.rand() * this.cols), Math.floor(this.rand() * this.rows), "homeostasis");
			}
		} else if (u < -.02 && density > this.setpoint * 1.35) {
			const cull = Math.min(120, Math.floor(-u * this.alive.length * .01));
			let killed = 0;
			for (let s = 0; s < cull; s++) {
				const i = Math.floor(this.rand() * this.alive.length);
				if (this.alive[i] && this.kind[i] === 0 && this.tenure[i] < 8) {
					this.alive[i] = 0;
					killed++;
				}
			}
			if (killed > 0) this.note("homeostasis", true, `culled ${killed}`);
		}
	}
	runVariety(diversity, n) {
		if (diversity >= .62) return;
		const kicks = Math.floor((.62 - diversity) * 40);
		for (let s = 0; s < kicks; s++) {
			const i = Math.floor(this.rand() * n);
			this.alive[i] = this.alive[i] ? 0 : 1;
		}
		this.note("variety", true, "requisite variety");
		this.stampPulse(Math.floor(this.cols * this.rand()), Math.floor(this.rows * this.rand()), "variety");
	}
	runUltrastability(stab, via) {
		if (this.probe) return;
		if (!(this.freezeStreak > 28 || this.collapseStreak > 18 || stab > .92)) return;
		this.probe = {
			previous: cloneGenome(this.genome),
			remaining: TEST_WINDOW,
			baseline: via,
			acc: 0,
			samples: 0
		};
		this.genome = mutateGenome(this.genome, () => this.rand());
		this.freezeStreak = 0;
		this.collapseStreak = 0;
		this.note("ultrastability", true, `probe ${genomeToString(this.genome)}`);
		this.stampPulse(Math.floor(this.cols / 2), Math.floor(this.rows / 2), "ultrastability", 1.1);
	}
	runAutopoiesis(meanTenure, pop) {
		if (meanTenure < 10 || pop === 0) return;
		const { cols } = this;
		let protectedCells = 0;
		for (let i = 0; i < this.alive.length; i++) if (this.tenure[i] > 18 && this.alive[i]) {
			this.energy[i] = Math.min(1, this.energy[i] + .02);
			protectedCells++;
		}
		if (this.generation % 24 === 0 && this.lastReg < 8) {
			let best = -1;
			let bestT = 0;
			for (let i = 0; i < this.tenure.length; i++) if (this.tenure[i] > bestT) {
				bestT = this.tenure[i];
				best = i;
			}
			if (best >= 0 && bestT > 22) {
				this.kind[best] = 1;
				this.alive[best] = 1;
				this.stampPulse(best % cols, Math.floor(best / cols), "autopoiesis");
			}
		}
		if (protectedCells > 0) this.note("autopoiesis", true, `${protectedCells} held`);
	}
	runObserver(density, via) {
		if (!this.settings.autoSetpoint) {
			this.setpoint = this.settings.setpoint;
			return;
		}
		const sustainable = .06 + via * .18;
		this.setpoint += (sustainable - this.setpoint) * .02;
		this.setpoint = Math.max(.04, Math.min(.32, this.setpoint));
		if (Math.abs(density - this.setpoint) > .04) this.note("observer", true, `setpoint ${(this.setpoint * 100).toFixed(1)}%`);
	}
	runMetabolism(meanHeat, density) {
		if (meanHeat > .72 && density > .05) this.note("metabolism", true, "thermal load");
		else if (meanHeat < .28) this.note("metabolism", true, "cold field");
	}
	snapshot() {
		const loops = LOOP_META.map((m) => ({
			id: m.id,
			label: m.label,
			active: this.lastLoops[m.id].active,
			note: this.lastLoops[m.id].note
		}));
		return {
			generation: this.generation,
			population: this.lastPop,
			regulators: this.lastReg,
			density: this.cols ? this.lastPop / (this.cols * this.rows) : 0,
			entropy: this.lastEntropy,
			meanHeat: this.lastHeat,
			meanEnergy: this.lastEnergy,
			viability: this.lastViability,
			setpoint: this.setpoint,
			rule: genomeToString(this.genome),
			adaptations: this.adaptations,
			probing: this.probe !== null,
			loops,
			popHistory: this.popHistory.slice(),
			viaHistory: this.viaHistory.slice()
		};
	}
	cellAt(x, y) {
		if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) return null;
		const i = this.idx(x, y);
		return {
			alive: this.alive[i],
			kind: this.kind[i],
			heat: this.heat[i],
			energy: this.energy[i]
		};
	}
};
var STORAGE_KEY = "homeostat.v1";
function loadPersisted() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return {};
		return JSON.parse(raw);
	} catch {
		return {};
	}
}
function AppShell() {
	const engineRef = (0, import_react.useRef)(null);
	if (!engineRef.current) engineRef.current = new SimEngine();
	const engine = engineRef.current;
	const audioRef = (0, import_react.useRef)(null);
	if (!audioRef.current) audioRef.current = new FieldAudio();
	const [running, setRunning] = (0, import_react.useState)(false);
	const [speed, setSpeed] = (0, import_react.useState)(10);
	const [settings, setSettings] = (0, import_react.useState)({ ...DEFAULT_SETTINGS });
	const [paintMode, setPaintMode] = (0, import_react.useState)("life");
	const [brush, setBrush] = (0, import_react.useState)(1);
	const [showHeat, setShowHeat] = (0, import_react.useState)(true);
	const [showEnergy, setShowEnergy] = (0, import_react.useState)(true);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [preset, setPreset] = (0, import_react.useState)("homeostat");
	const [metrics, setMetrics] = (0, import_react.useState)(null);
	const [layoutNonce, setLayoutNonce] = (0, import_react.useState)(0);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = loadPersisted();
		if (saved.speed) setSpeed(saved.speed);
		if (saved.settings) setSettings({
			...DEFAULT_SETTINGS,
			...saved.settings
		});
		if (saved.paintMode) setPaintMode(saved.paintMode);
		if (typeof saved.brush === "number") setBrush(saved.brush);
		if (typeof saved.showHeat === "boolean") setShowHeat(saved.showHeat);
		if (typeof saved.showEnergy === "boolean") setShowEnergy(saved.showEnergy);
		if (typeof saved.muted === "boolean") setMuted(saved.muted);
		if (saved.preset) setPreset(saved.preset);
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		engine.applySettings(settings);
	}, [engine, settings]);
	(0, import_react.useEffect)(() => {
		audioRef.current?.setMuted(muted);
	}, [muted]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const data = {
			speed,
			settings,
			paintMode,
			brush,
			showHeat,
			showEnergy,
			muted,
			preset
		};
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		} catch {}
	}, [
		hydrated,
		speed,
		settings,
		paintMode,
		brush,
		showHeat,
		showEnergy,
		muted,
		preset
	]);
	const lastAdapt = (0, import_react.useRef)(0);
	const lastLoop = (0, import_react.useRef)(false);
	const onMetrics = (0, import_react.useCallback)(() => {
		const snap = engine.snapshot();
		setMetrics(snap);
		const audio = audioRef.current;
		if (audio) {
			audio.tick(snap.density, snap.viability);
			if (snap.adaptations > lastAdapt.current) audio.blip("adapt");
			lastAdapt.current = snap.adaptations;
			const any = snap.loops.some((l) => l.active);
			if (any && !lastLoop.current) audio.blip("loop");
			lastLoop.current = any;
		}
	}, [engine]);
	const onUnlock = (0, import_react.useCallback)(() => {
		audioRef.current?.unlock();
	}, []);
	const toggleRun = (0, import_react.useCallback)(() => {
		audioRef.current?.unlock();
		setRunning((r) => !r);
	}, []);
	const stepOnce = (0, import_react.useCallback)(() => {
		audioRef.current?.unlock();
		setRunning(false);
		engine.step();
		engine.advanceDisplay(.08, false);
		onMetrics();
		audioRef.current?.blip("step");
	}, [engine, onMetrics]);
	const applyPreset = (0, import_react.useCallback)((id) => {
		const found = PRESETS.find((x) => x.id === id);
		const next = {
			...DEFAULT_SETTINGS,
			...found?.settings ?? {}
		};
		setPreset(id);
		setSettings(next);
		engine.applySettings(next);
		engine.seed(id);
		onMetrics();
	}, [engine, onMetrics]);
	const clear = (0, import_react.useCallback)(() => {
		engine.clear();
		onMetrics();
	}, [engine, onMetrics]);
	const refit = (0, import_react.useCallback)(() => {
		engine.cols = 0;
		setLayoutNonce((n) => n + 1);
	}, [engine]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.code === "Space") {
				e.preventDefault();
				toggleRun();
			} else if (e.code === "KeyN" || e.code === "ArrowRight") {
				e.preventDefault();
				stepOnce();
			} else if (e.code === "KeyR") applyPreset(preset);
			else if (e.code === "KeyC") clear();
			else if (e.code === "KeyM") setMuted((m) => !m);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		toggleRun,
		stepOnce,
		applyPreset,
		preset,
		clear
	]);
	(0, import_react.useEffect)(() => {
		const vis = () => {
			if (document.visibilityState === "visible") audioRef.current?.resume();
		};
		document.addEventListener("visibilitychange", vis);
		return () => document.removeEventListener("visibilitychange", vis);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container flex h-dvh max-h-dvh min-h-0 w-full flex-col overflow-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex shrink-0 items-end justify-between gap-4 border-b border-border bg-surface px-4 py-3 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-medium tracking-tight text-fg sm:text-xl",
					children: "Homeostat"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted sm:text-sm",
					children: "Cybernetic Game of Life · space to run · paint on the field"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden shrink-0 text-right sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs tabular-nums text-subtle",
					children: metrics ? `${engine.cols}×${engine.rows}` : "fitting"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-sm tabular-nums text-accent",
					children: running ? "running" : "paused"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[12rem] min-w-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-2 overflow-hidden rounded-xl bg-bg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:inset-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldCanvas, {
							engine,
							running,
							speed,
							paintMode,
							brush,
							showHeat,
							showEnergy,
							initialPreset: preset,
							onMetrics,
							onUnlock
						}, layoutNonce)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricsBar, {
					metrics,
					running
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "relative z-10 flex max-h-[46%] min-h-0 w-full shrink-0 flex-col overflow-hidden border-t border-border sm:max-h-none sm:h-full sm:w-[min(26rem,38%)] sm:border-l sm:border-t-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPanel, {
					running,
					speed,
					settings,
					paintMode,
					brush,
					showHeat,
					showEnergy,
					muted,
					preset,
					onToggleRun: toggleRun,
					onStep: stepOnce,
					onSpeed: setSpeed,
					onSettings: (partial) => setSettings((s) => ({
						...s,
						...partial
					})),
					onPaintMode: setPaintMode,
					onBrush: setBrush,
					onShowHeat: setShowHeat,
					onShowEnergy: setShowEnergy,
					onMuted: setMuted,
					onSeed: applyPreset,
					onClear: clear,
					onRefit: refit
				})
			})]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
