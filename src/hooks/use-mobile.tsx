import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Custom hook to determine if the current window width is considered mobile.
 *
 * This hook listens for changes in the window width and updates the state
 * accordingly. It uses the `MOBILE_BREAKPOINT` constant to define the maximum
 * width for mobile devices.
 *
 * @returns `true` if the window width is less than the
 * `MOBILE_BREAKPOINT`, otherwise `false`.
 */
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

export default useIsMobile;
