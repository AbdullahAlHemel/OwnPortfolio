import { useInView, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  // 🔥 Fires every time element enters/leaves viewport
  const isInView = useInView(ref, { 
    once: false,
    margin: "-10% 0px -10% 0px"
  });

  const getDecimalPlaces = num => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;

      const formattedNumber = Intl.NumberFormat("en-US", {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      }).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  // Set initial value
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === "down" ? to : from);
    }
  }, [from, to, direction, formatValue]);

  // 🔥 Animate every time visible
  useEffect(() => {
    if (startWhen) {
      if (isInView) {
        // reset before starting
        motionValue.set(direction === "down" ? to : from);

        if (typeof onStart === "function") onStart();

        const animate = setTimeout(() => {
          motionValue.set(direction === "down" ? from : to);
        }, delay * 1000);

        const done = setTimeout(
          () => typeof onEnd === "function" && onEnd(),
          delay * 1000 + duration * 1000
        );

        return () => {
          clearTimeout(animate);
          clearTimeout(done);
        };
      } else {
        // When out of view, rest the number
        motionValue.set(direction === "down" ? to : from);
      }
    }
  }, [
    isInView, 
    startWhen, 
    motionValue, 
    from, 
    to, 
    delay, 
    direction, 
    duration, 
    onStart, 
    onEnd
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
