import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    const supportsEventListener = typeof mql.addEventListener === "function";

    if (supportsEventListener) {
      mql.addEventListener("change", onChange);
    } else if (typeof mql.addListener === "function") {
      // Safari < 14 doesn't support addEventListener on MediaQueryList
      mql.addListener(onChange);
    }

    onChange();

    return () => {
      if (supportsEventListener) {
        mql.removeEventListener("change", onChange);
      } else if (typeof mql.removeListener === "function") {
        mql.removeListener(onChange);
      }
    };
  }, []);

  return !!isMobile;
}
