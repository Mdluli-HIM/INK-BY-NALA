"use client";

import { useEffect, useRef } from "react";

type InkPoint = {
  x: number;
  y: number;
  time: number;
  color: string;
  speed: number;
};

const TRAIL_LIFE = 1250;
const MAX_POINTS = 96;

export function InkCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasNode = canvasRef.current;

    if (!canvasNode) {
      return;
    }

    const contextNode =
      canvasNode.getContext("2d");

    if (!contextNode) {
      return;
    }

    const canvas: HTMLCanvasElement =
      canvasNode;

    const ctx: CanvasRenderingContext2D =
      contextNode;

    const finePointer =
      window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      );

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    if (
      !finePointer.matches ||
      reducedMotion.matches
    ) {
      return;
    }

    let viewportWidth =
      window.innerWidth;

    let viewportHeight =
      window.innerHeight;

    let pixelRatio = Math.min(
      window.devicePixelRatio || 1,
      1.75,
    );

    let frame = 0;

    let pointerActive = false;
    let initialized = false;

    let targetX = 0;
    let targetY = 0;

    let brushX = 0;
    let brushY = 0;

    let lastBrushX = 0;
    let lastBrushY = 0;

    let cursorColor = "#0b0b0b";
    let cursorMode = "ink";

    const points: InkPoint[] = [];

    function resizeCanvas() {
      viewportWidth =
        window.innerWidth;

      viewportHeight =
        window.innerHeight;

      pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        1.75,
      );

      canvas.width = Math.round(
        viewportWidth * pixelRatio,
      );

      canvas.height = Math.round(
        viewportHeight * pixelRatio,
      );

      canvas.style.width =
        `${viewportWidth}px`;

      canvas.style.height =
        `${viewportHeight}px`;

      ctx.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );
    }

    function getCursorSettings(
      target: EventTarget | null,
    ) {
      if (!(target instanceof Element)) {
        return {
          color: "#0b0b0b",
          mode: "ink",
        };
      }

      const owner =
        target.closest<HTMLElement>(
          "[data-cursor-tone], [data-cursor-mode]",
        );

      const tone =
        owner?.dataset.cursorTone ??
        "dark";

      const mode =
        owner?.dataset.cursorMode ??
        "ink";

      return {
        color:
          tone === "light"
            ? "#ffffff"
            : "#0b0b0b",
        mode,
      };
    }

    function onPointerMove(
      event: PointerEvent,
    ) {
      if (
        event.pointerType === "touch"
      ) {
        return;
      }

      const settings =
        getCursorSettings(
          event.target,
        );

      cursorColor =
        settings.color;

      cursorMode =
        settings.mode;

      targetX =
        event.clientX;

      targetY =
        event.clientY;

      pointerActive = true;

      if (!initialized) {
        brushX = targetX;
        brushY = targetY;

        lastBrushX =
          brushX;

        lastBrushY =
          brushY;

        initialized = true;
      }
    }

    function onPointerLeave() {
      pointerActive = false;
    }

    function onPointerEnter() {
      pointerActive = true;
    }

    function addBrushPoint(
      now: number,
    ) {
      const dx =
        brushX -
        lastBrushX;

      const dy =
        brushY -
        lastBrushY;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy,
        );

      if (distance < 0.75) {
        return;
      }

      const speed =
        Math.min(
          distance,
          30,
        );

      points.push({
        x: brushX,
        y: brushY,
        time: now,
        color:
          cursorColor,
        speed,
      });

      lastBrushX =
        brushX;

      lastBrushY =
        brushY;

      if (
        points.length >
        MAX_POINTS
      ) {
        points.splice(
          0,
          points.length -
            MAX_POINTS,
        );
      }
    }

    function drawTrail(
      now: number,
    ) {
      while (
        points.length > 0 &&
        now -
          points[0].time >
          TRAIL_LIFE
      ) {
        points.shift();
      }

      ctx.clearRect(
        0,
        0,
        viewportWidth,
        viewportHeight,
      );

      if (
        points.length < 2
      ) {
        return;
      }

      const count =
        points.length;

      for (
        let index = 1;
        index < count;
        index++
      ) {
        const previous =
          points[
            index - 1
          ];

        const current =
          points[index];

        const age =
          now -
          current.time;

        const life =
          Math.max(
            0,
            1 -
              age /
                TRAIL_LIFE,
          );

        if (
          life <= 0
        ) {
          continue;
        }

        const progress =
          index /
          Math.max(
            count - 1,
            1,
          );

        const midX =
          (
            previous.x +
            current.x
          ) / 2;

        const midY =
          (
            previous.y +
            current.y
          ) / 2;

        const speedFactor =
          Math.min(
            current.speed /
              30,
            1,
          );

        const taperedWidth =
          0.65 +
          Math.pow(
            progress,
            1.75,
          ) *
            4.8;

        const speedThin =
          1 -
          speedFactor *
            0.22;

        const width =
          taperedWidth *
          speedThin;

        const tailOpacity =
          Math.min(
            1,
            0.22 +
              progress *
                1.15,
          );

        ctx.beginPath();

        ctx.moveTo(
          previous.x,
          previous.y,
        );

        ctx.quadraticCurveTo(
          previous.x,
          previous.y,
          midX,
          midY,
        );

        ctx.strokeStyle =
          current.color;

        ctx.lineWidth =
          Math.max(
            0.45,
            width,
          );

        ctx.globalAlpha =
          Math.min(
            1,
            life * 1.35,
          ) *
          tailOpacity;

        ctx.lineCap =
          "round";

        ctx.lineJoin =
          "round";

        ctx.stroke();
      }

      const last =
        points[
          count - 1
        ];

      const previous =
        points[
          count - 2
        ];

      if (
        cursorMode !==
        "play"
      ) {
        const dx =
          last.x -
          previous.x;

        const dy =
          last.y -
          previous.y;

        const angle =
          Math.atan2(
            dy,
            dx,
          );

        const headSpeed =
          Math.min(
            last.speed /
              30,
            1,
          );

        const headWidth =
          5.5 +
          headSpeed *
            2.5;

        const headHeight =
          3.2 +
          headSpeed *
            1.2;

        ctx.save();

        ctx.translate(
          last.x,
          last.y,
        );

        ctx.rotate(
          angle,
        );

        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          headWidth,
          headHeight,
          0,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle =
          last.color;

        ctx.globalAlpha =
          pointerActive
            ? 1
            : 0;

        ctx.fill();

        ctx.restore();
      }

      ctx.globalAlpha = 1;
    }

    function animateCursor(
      now: number,
    ) {
      if (initialized) {
        const easing =
          cursorMode === "play"
            ? 0.42
            : 0.34;

        brushX +=
          (
            targetX -
            brushX
          ) * easing;

        brushY +=
          (
            targetY -
            brushY
          ) * easing;

        addBrushPoint(
          now,
        );
      }

      drawTrail(now);

      frame =
        requestAnimationFrame(
          animateCursor,
        );
    }

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas,
    );

    window.addEventListener(
      "pointermove",
      onPointerMove,
      {
        passive: true,
      },
    );

    document.documentElement.addEventListener(
      "pointerleave",
      onPointerLeave,
    );

    document.documentElement.addEventListener(
      "pointerenter",
      onPointerEnter,
    );

    document.documentElement.classList.add(
      "hype-custom-cursor",
    );

    frame =
      requestAnimationFrame(
        animateCursor,
      );

    return () => {
      cancelAnimationFrame(
        frame,
      );

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      window.removeEventListener(
        "pointermove",
        onPointerMove,
      );

      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );

      document.documentElement.removeEventListener(
        "pointerenter",
        onPointerEnter,
      );

      document.documentElement.classList.remove(
        "hype-custom-cursor",
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hype-ink-cursor"
    />
  );
}
