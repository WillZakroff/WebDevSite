// components/ui/MotionWrapper.tsx
import { ReactNode, useState, useEffect, HTMLAttributes } from "react";

type MotionWrapperProps = {
  children: ReactNode;
  trigger: any; // re-triggers the animation when this changes
} & HTMLAttributes<HTMLDivElement>; // this allows props like className, id, etc.

export default function MotionWrapper({ children, trigger, className = "", ...rest }: MotionWrapperProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <div
      className={`transform transition duration-300 ease-out ${
        animate ? "scale-110 opacity-100" : "scale-100 opacity-90"
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
