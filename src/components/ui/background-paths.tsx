import { useMemo } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Scroll velocity (px/s) that adds +1x to the line speed.
const VELOCITY_PER_SPEED_STEP = 400;
// Upper bound for the speed multiplier while scrolling.
const MAX_SPEED = 8;

type PathData = {
  id: number;
  d: string;
  width: number;
  duration: number;
};

function FloatingPath({ path, time }: { path: PathData; time: MotionValue<number> }) {
  // Progress through this path's loop, 0 -> 1. Mirrors the original keyframes:
  // pathLength 0.3 -> 1, pathOffset [0, 1, 0], opacity [0.3, 0.6, 0.3].
  const phase = useTransform(time, (t) => (t / path.duration) % 1);
  const pathLength = useTransform(phase, (p) => 0.3 + 0.7 * p);
  const pathOffset = useTransform(phase, (p) => (p < 0.5 ? p * 2 : 2 - p * 2));
  const opacity = useTransform(pathOffset, (o) => 0.3 + 0.3 * o);

  return (
    <motion.path
      d={path.d}
      stroke="currentColor"
      strokeWidth={path.width}
      strokeOpacity={0.1 + path.id * 0.03}
      style={{ pathLength, pathOffset, opacity }}
    />
  );
}

function FloatingPaths({
  position,
  time,
}: {
  position: number;
  time: MotionValue<number>;
}) {
  // Memoized so the random durations stay stable across re-renders.
  const paths = useMemo<PathData[]>(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
        duration: 20 + Math.random() * 10,
      })),
    [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="h-full w-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <FloatingPath key={path.id} path={path} time={time} />
        ))}
      </svg>
    </div>
  );
}

/**
 * Animated flowing-paths backdrop. Renders as a fixed, full-viewport layer
 * behind the page content and never intercepts pointer events. The lines
 * speed up while the page is scrolled down and ease back afterwards.
 */
export function BackgroundPaths({ className }: { className?: string }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const scrollBoost = useTransform(scrollVelocity, (v) =>
    Math.min(Math.max(v, 0) / VELOCITY_PER_SPEED_STEP, MAX_SPEED - 1)
  );
  const smoothBoost = useSpring(scrollBoost, { damping: 40, stiffness: 120 });

  // Shared animation clock in seconds, advanced faster while scrolling.
  const time = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    const speed = 1 + Math.max(smoothBoost.get(), 0);
    time.set(time.get() + (delta / 1000) * speed);
  });

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-50 dark:opacity-35",
        className
      )}
    >
      <FloatingPaths position={1} time={time} />
      <FloatingPaths position={-1} time={time} />
    </div>
  );
}
