import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { gsap } from 'gsap';
import "./styles/Animation.css"
interface CircleProps {
  size: string;
  delay: number;
}

type CircleRef = {
  moveTo: (x: number, y: number) => void;
};

const Circle = forwardRef<CircleRef, CircleProps>(({ size, delay }, ref) => {
  const el = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      moveTo(x: number, y: number) {
        gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);

  return <div className={`circle ${size}`} ref={el}></div>;
});

function Animation() {
  const circleRefs = useRef<Array<CircleRef>>([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight / 2));

    const onMove = ({ clientX, clientY }: MouseEvent) => {
      circleRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref: CircleRef | null) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <div className="app">
      <p>Move your mouse around</p>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
}

export default Animation;
