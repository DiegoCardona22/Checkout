// @packages
import { useState, useEffect } from 'react';

// @types
import {
  Breakpoint,
  SIZE_LG,
  SIZE_MD,
  SIZE_SM,
  SIZE_XL,
  SIZE_XS,
  SIZE_XXL
} from 'src/types/breakpoint';

const debounce = (callback: () => void, wait: number) => {
  let timerId: any;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback();
    }, wait);
  };
};

const resolveBreakpoint = (width: number): Breakpoint => {
  if (width < 576) return SIZE_XS;
  if (width >= 576 && width < 768) return SIZE_SM;
  if (width >= 768 && width < 992) return SIZE_MD;
  if (width >= 992 && width < 1200) return SIZE_LG;
  if (width >= 1200 && width < 1440) return SIZE_XL;
  if (width >= 1440) return SIZE_XXL;

  return SIZE_XXL;
};

const useBreakpoint = (): Breakpoint => {
  const [size, setSize] = useState(null);

  useEffect(() => {
    if (!size) {
      setSize(resolveBreakpoint(window.innerWidth) as any);
    }
    const calcInnerWidth = debounce(() => {
      setSize(resolveBreakpoint(window.innerWidth) as any);
    }, 400);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return size || SIZE_XXL;
};

export default useBreakpoint;
