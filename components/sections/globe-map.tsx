"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { mesh } from "topojson-client";
import countriesTopology from "world-atlas/countries-50m.json";
import { TelegramIcon } from "@/components/ui/icons";
import { WavingFlag } from "@/components/ui/waving-flag";

type GlobeMarker = {
  country: string;
  note: string;
  capital: string;
  lat: number;
  lon: number;
  telegram: string;
};

type MarkerView = {
  x: number;
  y: number;
  visible: boolean;
  scale: number;
  labelX: number;
  labelY: number;
  align: "left" | "right";
};

const fallbackTelegram = "https://t.me/teamcash_partnerships";
const initialRotation = {
  x: -0.22,
  y: -THREE.MathUtils.degToRad(78),
};

const countryFlags = ["🇲🇳", "🇹🇯", "🇺🇿", "🇦🇿", "🇹🇲", "🇰🇬", "🇦🇫"];

type CapitalMarker = Omit<GlobeMarker, "country" | "note"> & {
  labelOffset: { x: number; y: number };
  mobileLabelOffset?: { x: number; y: number };
  align?: "left" | "right";
};

const capitalMarkers: CapitalMarker[] = [
  {
    capital: "Ulaanbaatar",
    lat: 47.9184,
    lon: 106.9177,
    telegram: fallbackTelegram,
    labelOffset: { x: 14, y: -10 },
    mobileLabelOffset: { x: 14, y: -18 },
    align: "right",
  },
  {
    capital: "Dushanbe",
    lat: 38.5598,
    lon: 68.787,
    telegram: fallbackTelegram,
    labelOffset: { x: -14, y: 3 },
    mobileLabelOffset: { x: -8, y: 3 },
    align: "right",
  },
  {
    capital: "Tashkent",
    lat: 41.2995,
    lon: 69.2401,
    telegram: fallbackTelegram,
    labelOffset: { x: 14, y: -1 },
    mobileLabelOffset: { x: 14, y: -3 },
  },
  {
    capital: "Baku",
    lat: 40.4093,
    lon: 49.8671,
    telegram: fallbackTelegram,
    labelOffset: { x: -16, y: -12 },
    mobileLabelOffset: { x: 2, y: -12 },
    align: "right",
  },
  {
    capital: "Ashgabat",
    lat: 37.9601,
    lon: 58.3261,
    telegram: fallbackTelegram,
    labelOffset: { x: -18, y: 18 },
    mobileLabelOffset: { x: 0, y: 18 },
    align: "right",
  },
  { capital: "Bishkek", lat: 42.8746, lon: 74.5698, telegram: fallbackTelegram, labelOffset: { x: 15, y: 9 } },
  { capital: "Kabul", lat: 34.5553, lon: 69.2075, telegram: fallbackTelegram, labelOffset: { x: 12, y: 20 } },
];

type WorldLineString = number[][];
type WorldMesh = {
  type: "MultiLineString";
  coordinates: WorldLineString[];
};

type WorldTopology = {
  objects: {
    countries: unknown;
  };
};

const topology = countriesTopology as WorldTopology;
const countryObject = topology.objects.countries;
const createCountryMesh = mesh as unknown as (topology: WorldTopology, object: unknown) => WorldMesh;
const countryMesh = createCountryMesh(topology, countryObject);

function latLonToVector(lat: number, lon: number, radius = 1.18) {
  const latRad = THREE.MathUtils.degToRad(lat);
  const lonRad = THREE.MathUtils.degToRad(lon);

  return new THREE.Vector3(
    radius * Math.cos(latRad) * Math.sin(lonRad),
    radius * Math.sin(latRad),
    radius * Math.cos(latRad) * Math.cos(lonRad),
  );
}

function makeCircle(points: THREE.Vector3[]) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: 0xffd200,
    transparent: true,
    opacity: 0.12,
  });

  return new THREE.LineLoop(geometry, material);
}

function createGlobeGrid(radius = 1.125) {
  const group = new THREE.Group();

  for (let lat = -60; lat <= 60; lat += 20) {
    const points: THREE.Vector3[] = [];
    for (let lon = -180; lon < 180; lon += 4) {
      points.push(latLonToVector(lat, lon, radius));
    }
    group.add(makeCircle(points));
  }

  for (let lon = -180; lon < 180; lon += 20) {
    const points: THREE.Vector3[] = [];
    for (let lat = -80; lat <= 80; lat += 4) {
      points.push(latLonToVector(lat, lon, radius));
    }
    const line = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color: 0xf5b000, transparent: true, opacity: 0.1 }),
    );
    group.add(line);
  }

  return group;
}

function createLandMass(radius = 1.128) {
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];
  const colors: number[] = [];
  const base = new THREE.Color(0x8f7b25);
  const bright = new THREE.Color(0xffdb65);

  countryMesh.coordinates.forEach((line) => {
    line.forEach(([lon, lat], index) => {
      if (index % 2 !== 0) return;
      const vector = latLonToVector(lat, lon, radius);
      const isTargetRegion = lon >= 44 && lon <= 121 && lat >= 30 && lat <= 53;
      const color = base.clone().lerp(bright, isTargetRegion ? 0.92 : 0.45);
      positions.push(vector.x, vector.y, vector.z);
      colors.push(color.r, color.g, color.b);
    });
  });

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.017,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    depthWrite: false,
  });

  return new THREE.Points(geometry, material);
}

function createBoundaryLines(radius = 1.136) {
  const group = new THREE.Group();

  countryMesh.coordinates.forEach((line) => {
    if (line.length < 2) return;
    const isTargetRegion = line.some(([lon, lat]) => lon >= 44 && lon <= 121 && lat >= 30 && lat <= 53);
    const points = line.map(([lon, lat]) => latLonToVector(lat, lon, radius));
    const material = new THREE.LineBasicMaterial({
      color: isTargetRegion ? 0xfff1a8 : 0xd4a900,
      transparent: true,
      opacity: isTargetRegion ? 0.82 : 0.28,
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometry.computeBoundingSphere();
    group.add(new THREE.Line(geometry, material));
  });

  return group;
}

function createSurfaceRing(lat: number, lon: number, radius = 1.215) {
  const group = new THREE.Group();
  const center = latLonToVector(lat, lon, radius);
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.045, 0.065, 32),
    new THREE.MeshBasicMaterial({
      color: 0xffd200,
      transparent: true,
      opacity: 0.78,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  ring.position.copy(center);
  ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), center.clone().normalize());
  group.add(ring);
  return group;
}

export function GlobeMap({
  countries,
  telegramLabel,
}: {
  countries: { name: string; note: string }[];
  telegramLabel: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();
  const interactiveRef = useRef(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState<number | null>(null);
  const [markerViews, setMarkerViews] = useState<MarkerView[]>(() =>
    capitalMarkers.map((marker) => ({
      x: 50,
      y: 50,
      labelX: 50 + marker.labelOffset.x,
      labelY: 50 + marker.labelOffset.y,
      visible: false,
      scale: 1,
      align: marker.align ?? "left",
    })),
  );

  const markers = useMemo<GlobeMarker[]>(
    () =>
      capitalMarkers.map((marker, index) => ({
        ...marker,
        country: countries[index]?.name ?? marker.capital,
        note: countries[index]?.note ?? "",
      })),
    [countries],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 4.25);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const globe = new THREE.Group();
    scene.add(globe);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 72, 72),
      new THREE.MeshStandardMaterial({
        color: 0x171106,
        emissive: 0x2b2100,
        emissiveIntensity: 0.18,
        roughness: 0.7,
        metalness: 0.04,
      }),
    );
    globe.add(sphere);
    const landMass = createLandMass();
    globe.add(landMass);
    const boundaries = createBoundaryLines();
    globe.add(boundaries);
    globe.add(createGlobeGrid());

    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffd200 });
    markers.forEach((marker) => {
      const point = new THREE.Mesh(new THREE.SphereGeometry(0.018, 16, 16), markerMaterial);
      point.position.copy(latLonToVector(marker.lat, marker.lon, 1.19));
      globe.add(point);
      globe.add(createSurfaceRing(marker.lat, marker.lon));
    });

    const keyRegion = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        latLonToVector(40.4, 49.8, 1.21),
        latLonToVector(37.9, 58.3, 1.21),
        latLonToVector(41.2, 69.2, 1.21),
        latLonToVector(42.8, 74.5, 1.21),
        latLonToVector(47.9, 106.9, 1.21),
      ]),
      new THREE.LineBasicMaterial({ color: 0xffd200, transparent: true, opacity: 0.45 }),
    );
    globe.add(keyRegion);

    scene.add(new THREE.AmbientLight(0xfff3c4, 0.78));
    const light = new THREE.DirectionalLight(0xffd56a, 2.9);
    light.position.set(-1.4, 2.1, 3.2);
    scene.add(light);

    const rim = new THREE.DirectionalLight(0xffffff, 0.42);
    rim.position.set(3, -1.5, 2.6);
    scene.add(rim);

    function resize() {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const rotation = {
      ...initialRotation,
    };
    const drag = {
      active: false,
      x: 0,
      y: 0,
    };
    const vectorCache = markers.map((marker) => latLonToVector(marker.lat, marker.lon, 1.19));
    const yAxis = new THREE.Vector3(0, 1, 0);
    const xAxis = new THREE.Vector3(1, 0, 0);

    function updateMarkers() {
      globe.rotation.y = rotation.y;
      globe.rotation.x = rotation.x;

      const views = vectorCache.map((vector, index) => {
        const rotated = vector.clone().applyAxisAngle(yAxis, rotation.y);
        rotated.applyAxisAngle(xAxis, rotation.x);
        const projected = rotated.clone().project(camera);
        const marker = capitalMarkers[index];

        if (!Number.isFinite(projected.x) || !Number.isFinite(projected.y)) {
          return {
            x: 50,
            y: 50,
            labelX: 50,
            labelY: 50,
            align: marker.align ?? "left",
            visible: false,
            scale: 0.72,
          };
        }

        const visible = rotated.z > -0.18;
        const pointX = ((projected.x + 1) / 2) * 100;
        const pointY = ((-projected.y + 1) / 2) * 100;
        const offset = container.clientWidth < 640 ? marker.mobileLabelOffset ?? marker.labelOffset : marker.labelOffset;

        return {
          x: pointX,
          y: pointY,
          labelX: pointX + offset.x,
          labelY: pointY + offset.y,
          align: marker.align ?? "left",
          visible,
          scale: visible ? Math.max(0.72, Math.min(1.08, 1 + rotated.z * 0.08)) : 0.72,
        };
      });

      setMarkerViews(views);
    }

    function animate() {
      updateMarkers();
      renderer.render(scene, camera);
      frameRef.current = window.requestAnimationFrame(animate);
    }

    function handlePointerDown(event: PointerEvent) {
      if ((event.target as Element).closest("a, button")) return;

      if (!interactiveRef.current) {
        interactiveRef.current = true;
        setIsInteractive(true);
      }

      drag.active = true;
      drag.x = event.clientX;
      drag.y = event.clientY;
      container.setPointerCapture(event.pointerId);
      container.style.cursor = "grabbing";
    }

    function handlePointerMove(event: PointerEvent) {
      if (!drag.active) return;
      const deltaX = event.clientX - drag.x;
      const deltaY = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;
      rotation.y += deltaX * 0.006;
      rotation.x = THREE.MathUtils.clamp(rotation.x + deltaY * 0.004, -0.9, 0.72);
    }

    function handlePointerUp(event: PointerEvent) {
      drag.active = false;
      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
      container.style.cursor = "grab";
    }

    container.style.cursor = interactiveRef.current ? "grab" : "pointer";
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerUp);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerUp);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      sphere.geometry.dispose();
      sphere.material.dispose();
      landMass.geometry.dispose();
      landMass.material.dispose();
      boundaries.children.forEach((child) => {
        const line = child as THREE.Line;
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      markerMaterial.dispose();
    };
  }, [markers]);

  return (
    <div
      className="relative aspect-square min-h-[340px] touch-pan-y overflow-visible bg-transparent sm:aspect-[1.58] sm:min-h-[360px]"
      data-interactive={isInteractive}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {markerViews.map((view, index) => (
          <line
            key={`marker-line-${markers[index].capital}`}
            x1={view.x}
            y1={view.y}
            x2={view.labelX}
            y2={view.labelY}
            stroke="rgba(255, 210, 0, 0.16)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity={view.visible ? 1 : 0}
          />
        ))}
      </svg>

      {markers.map((marker, index) => {
        const view = markerViews[index];
        const isExpanded = expandedCountry === index;

        return (
          <div key={`${marker.country}-${marker.capital}`}>
            <a
              href={marker.telegram}
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => event.stopPropagation()}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
              style={{
                left: `${view.x}%`,
                top: `${view.y}%`,
                opacity: view.visible ? 1 : 0,
                pointerEvents: view.visible ? "auto" : "none",
                transform: `translate(-50%, -50%) scale(${view.scale})`,
              }}
              aria-label={`${telegramLabel} ${marker.country}`}
            >
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#229ED9]/35 bg-[#229ED9]/15" />
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#229ED9] shadow-[0_0_16px_rgba(34,158,217,0.85)] ring-2 ring-black/45">
                <TelegramIcon className="h-2.5 w-2.5 text-white" />
              </span>
            </a>

            <div
              className={`group absolute block min-w-max -translate-y-1/2 transition-opacity duration-200 hover:z-50 focus-within:z-50 ${
                isExpanded ? "z-50" : "z-30"
              }`}
              style={{
                left: `${view.labelX}%`,
                top: `${view.labelY}%`,
                opacity: view.visible ? 1 : 0,
                pointerEvents: view.visible ? "auto" : "none",
                transform: `translate(${view.align === "right" ? "-100%" : "0"}, -50%) scale(${view.scale})`,
              }}
              onPointerDown={(event) => event.stopPropagation()}
              dir="ltr"
            >
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/75 px-2 py-1 shadow-card backdrop-blur sm:px-2.5">
                <WavingFlag
                  flag={countryFlags[index]}
                  className="text-xs sm:text-base"
                  delay={index * -0.14}
                />
                <button
                  type="button"
                  onClick={() => setExpandedCountry((current) => (current === index ? null : index))}
                  className="max-w-[78px] truncate text-[10px] font-semibold text-copy sm:max-w-none sm:text-[11px]"
                  aria-expanded={isExpanded}
                  tabIndex={view.visible ? 0 : -1}
                >
                  {marker.country}
                </button>
              </div>

              <div
                className={`pointer-events-none absolute top-full z-40 mt-1 w-36 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:w-56 ${
                  view.align === "right" || index === 0 ? "right-0" : "left-0"
                } ${
                  isExpanded ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                }`}
              >
                <p className="bg-black/85 px-2 py-1.5 text-left text-[10px] font-normal leading-4 text-copy-muted sm:px-2.5 sm:py-2" dir="auto">
                  {marker.note}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
