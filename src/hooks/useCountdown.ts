"use client";

import { useEffect, useState } from "react";

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const REFRESH_INTERVAL_MS = 60 * 60 * 1000; // recompute hourly

export interface CountdownState {
  /** Whole days remaining until `targetDate` (0 once `targetDate` has passed). */
  daysRemaining: number;
  /** True once the current time is at/after `targetDate`. */
  hasStarted: boolean;
  /** True once the current time is at/after `endDate` (always false if no `endDate` given). */
  hasEnded: boolean;
}

function computeState(targetDate: Date, endDate?: Date): CountdownState {
  const now = Date.now();
  const target = targetDate.getTime();
  const hasStarted = now >= target;
  const hasEnded = endDate ? now >= endDate.getTime() : false;
  const daysRemaining = hasStarted ? 0 : Math.ceil((target - now) / MS_PER_DAY);

  return { daysRemaining, hasStarted, hasEnded };
}

/**
 * Generic countdown hook: computes days remaining until `targetDate`, plus
 * whether the event has started/ended. Recomputes on mount and periodically
 * thereafter so long-lived tabs stay accurate.
 */
export function useCountdown(
  targetDate: string | Date,
  endDate?: string | Date
): CountdownState {
  const target = targetDate instanceof Date ? targetDate : new Date(targetDate);
  const end = endDate
    ? endDate instanceof Date
      ? endDate
      : new Date(endDate)
    : undefined;

  const [state, setState] = useState<CountdownState>(() => computeState(target, end));

  useEffect(() => {
    setState(computeState(target, end));

    const interval = setInterval(() => {
      setState(computeState(target, end));
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.getTime(), end?.getTime()]);

  return state;
}
