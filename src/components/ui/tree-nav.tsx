import * as React from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TreeNavItem {
  label: string;
  href: string;
  /** Small pill after the label, e.g. "Coming soon". */
  badge?: string;
  /** Not clickable or hoverable. */
  disabled?: boolean;
}

export interface TreeNavProps {
  items: TreeNavItem[];
  /** href of the clicked page; the marker and progress line rest on it. */
  activeHref?: string;
  onSelect?: (item: TreeNavItem) => void;
  className?: string;
}

export const badgeClass =
  "inline-flex h-[18px] shrink-0 items-center rounded-[6px] bg-[#2b7fff]/[0.14] px-[5px] text-xs font-medium leading-none text-blue-400";

const MARKER = 7;
const GLIDE = { type: "spring", visualDuration: 0.22, bounce: 0 } as const;
const FADE = { duration: 0.12, ease: "easeOut" } as const;
const PROGRESS = { duration: 0.6, ease: "easeInOut" } as const;

export function TreeNav({ items, activeHref, onSelect, className }: TreeNavProps) {
  const listRef = React.useRef<HTMLUListElement>(null);
  const rowRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const boxes = React.useRef<{ left: number; width: number }[]>([]);
  const hovered = React.useRef<number | null>(null);
  const reduced = useReducedMotion();
  const activeIndex = items.findIndex((item) => item.href === activeHref);
  const activeRef = React.useRef(activeIndex);
  React.useLayoutEffect(() => {
    activeRef.current = activeIndex;
  });

  const [end, setEnd] = React.useState(0);
  const x = useMotionValue(0); // marker centre
  const visibility = useMotionValue(0);
  // The hover background has its own position: it shows only under the pointer and never rests on the active link.
  const pillC = useMotionValue(0);
  const w = useMotionValue(0);
  const pillVisibility = useMotionValue(0);
  const progress = useMotionValue(0); // accent line length, driven only by clicks
  const pillX = useTransform([pillC, w], ([cx, width]: number[]) => cx - width / 2);
  const markerX = useTransform(x, (v) => v - MARKER / 2);
  const accentScale = useTransform(progress, (v) => (end > 0 ? Math.min(1, v / end) : 0));

  const center = (i: number) => boxes.current[i].left + boxes.current[i].width / 2;

  const moveTo = React.useCallback(
    (index: number | null, immediate = false) => {
      if (index === null || index < 0 || index >= boxes.current.length) {
        animate(visibility, 0, FADE);
        return;
      }
      const jump = immediate || reduced || visibility.get() < 0.05;
      const target = center(index);
      if (jump) x.jump(target);
      else animate(x, target, GLIDE);
      animate(visibility, 1, FADE);
    },
    [x, visibility, reduced],
  );

  React.useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      boxes.current = rowRefs.current
        .slice(0, items.length)
        .map((el) => ({ left: el?.offsetLeft ?? 0, width: el?.offsetWidth ?? 0 }));
      setEnd(list.offsetWidth);
      moveTo(hovered.current ?? activeRef.current, true);
      if (activeRef.current >= 0) progress.jump(center(activeRef.current));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [items.length, moveTo, progress]);

  const select = (item: TreeNavItem, index: number) => {
    // The progress line replays from the start on every click.
    progress.jump(0);
    if (reduced) progress.jump(center(index));
    else animate(progress, center(index), PROGRESS);
    if (hovered.current === null) moveTo(index);
    onSelect?.(item);
  };
  const enter = (index: number) => {
    hovered.current = index;
    moveTo(index);
    const width = boxes.current[index].width;
    if (reduced || pillVisibility.get() < 0.05) {
      pillC.jump(center(index));
      w.jump(width);
    } else {
      animate(pillC, center(index), GLIDE);
      animate(w, width, GLIDE);
    }
    animate(pillVisibility, 1, FADE);
  };
  const leave = () => {
    hovered.current = null;
    moveTo(activeRef.current);
    animate(pillVisibility, 0, FADE);
  };

  return (
    <ul
      ref={listRef}
      className={cn("relative flex h-16 items-center gap-1", className)}
      onPointerLeave={leave}
    >
      {/* Rail along the bottom edge, with the accent progress line and diamond marker. */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px origin-left bg-foreground will-change-transform"
        style={{ width: end, scaleX: accentScale, opacity: activeIndex >= 0 ? 1 : 0 }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 rounded-[1px] bg-foreground will-change-transform"
        style={{
          bottom: -MARKER / 2 + 0.5,
          width: MARKER,
          height: MARKER,
          x: markerX,
          rotate: 45,
          opacity: visibility,
        }}
      />
      {/* Hover background: follows the pointer, fades out when it leaves. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 h-8 -translate-y-1/2 rounded-lg bg-white/[0.06] will-change-transform"
        style={{ width: w, x: pillX, opacity: pillVisibility }}
      />

      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <li
            key={item.href}
            ref={(el) => {
              rowRefs.current[index] = el;
            }}
            className="relative"
            onPointerEnter={item.disabled ? undefined : () => enter(index)}
          >
            {item.disabled ? (
              <span className="flex h-8 cursor-not-allowed items-center gap-2 px-3 text-[13px] text-muted-foreground/50">
                {item.label}
                {item.badge && <span className={badgeClass}>{item.badge}</span>}
              </span>
            ) : (
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => select(item, index)}
                onFocus={() => enter(index)}
                onBlur={leave}
                className={cn(
                  "flex h-8 items-center gap-2 rounded-lg px-3 text-[13px] transition-colors duration-150",
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {item.badge && <span className={badgeClass}>{item.badge}</span>}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TreeNav;
