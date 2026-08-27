/** Procedural instrument bed. Unlocks on the first gesture. */

export class FieldAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfx: GainNode | null = null;
  private drone: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private droneFilter: BiquadFilterNode | null = null;
  muted = false;
  enabled = true;

  unlock(): void {
    if (!this.enabled) return;
    if (!this.ctx) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new Ctx({ latencyHint: "interactive" });
      this.master = this.ctx.createGain();
      this.sfx = this.ctx.createGain();
      this.droneGain = this.ctx.createGain();
      this.droneFilter = this.ctx.createBiquadFilter();
      this.droneFilter.type = "lowpass";
      this.droneFilter.frequency.value = 220;
      this.droneFilter.Q.value = 0.7;
      this.drone = this.ctx.createOscillator();
      this.drone.type = "sine";
      this.drone.frequency.value = 55;
      this.drone.connect(this.droneFilter);
      this.droneFilter.connect(this.droneGain);
      this.droneGain.gain.value = 0.03;
      this.sfx.gain.value = 0.2;
      this.master.gain.value = this.muted ? 0 : 0.7;
      this.droneGain.connect(this.master);
      this.sfx.connect(this.master);
      this.master.connect(this.ctx.destination);
      this.drone.start();
    }
    if (this.ctx.state === "suspended") void this.ctx.resume();
  }

  setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.7, this.ctx.currentTime, 0.04);
    }
  }

  tick(density: number, viability: number): void {
    if (!this.ctx || !this.drone || !this.droneFilter || !this.droneGain || this.muted) return;
    const t = this.ctx.currentTime;
    const freq = 46 + density * 40 + viability * 18;
    this.drone.frequency.setTargetAtTime(freq, t, 0.08);
    this.droneFilter.frequency.setTargetAtTime(160 + viability * 280, t, 0.1);
    this.droneGain.gain.setTargetAtTime(0.018 + viability * 0.02, t, 0.12);
  }

  blip(kind: "step" | "loop" | "adapt"): void {
    if (!this.ctx || !this.sfx || this.muted) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = kind === "adapt" ? "triangle" : "sine";
    const f = kind === "adapt" ? 440 : kind === "loop" ? 220 : 880;
    osc.frequency.setValueAtTime(f, t);
    osc.frequency.exponentialRampToValueAtTime(f * 0.5, t + 0.08);
    g.gain.setValueAtTime(kind === "step" ? 0.03 : 0.06, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === "adapt" ? 0.28 : 0.12));
    osc.connect(g);
    g.connect(this.sfx);
    osc.start(t);
    osc.stop(t + 0.3);
    osc.onended = () => {
      osc.disconnect();
      g.disconnect();
    };
  }

  resume(): void {
    if (this.ctx?.state === "suspended") void this.ctx.resume();
  }
}
