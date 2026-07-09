"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { mesh } from "topojson-client";
import countriesTopology from "world-atlas/countries-50m.json";
import { TelegramIcon } from "@/components/ui/icons";
import type { GeometryObject, Topology } from "topojson-specification";

type GlobeMarker = {
  country: string;
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

type CapitalMarker = Omit<GlobeMarker, "country"> & {
  labelOffset: { x: number; y: number };
  align?: "left" | "right";
};

const capitalMarkers: CapitalMarker[] = [
  { capital: "Ulaanbaatar", lat: 47.9184, lon: 106.9177, telegram: fallbackTelegram, labelOffset: { x: 7, y: -3 } },
  {
    capital: "Dushanbe",
    lat: 38.5598,
    lon: 68.787,
    telegram: fallbackTelegram,
    labelOffset: { x: -8, y: 8 },
    align: "right",
  },
  { capital: "Tashkent", lat: 41.2995, lon: 69.2401, telegram: fallbackTelegram, labelOffset: { x: 8, y: -5 } },
  {
    capital: "Baku",
    lat: 40.4093,
    lon: 49.8671,
    telegram: fallbackTelegram,
    labelOffset: { x: -7, y: -3 },
    align: "right",
  },
  {
    capital: "Ashgabat",
    lat: 37.9601,
    lon: 58.3261,
    telegram: fallbackTelegram,
    labelOffset: { x: -8, y: 7 },
    align: "right",
  },
  { capital: "Bishkek", lat: 42.8746, lon: 74.5698, telegram: fallbackTelegram, labelOffset: { x: 8, y: 4 } },
  { capital: "Kabul", lat: 34.5553, lon: 69.2075, telegram: fallbackTelegram, labelOffset: { x: 7, y: 9 } },
];

type WorldLineString = number[][];
type WorldMesh = {
  type: "MultiLineString";
  coordinates: WorldLineString[];
};

const topology = countriesTopology as unknown as Topology;
const countryObject = topology.objects.countries as GeometryObject;
const countryMesh = mesh(topology, countryObject) as WorldMesh;

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
    const first = line[0];
    const isTargetRegion = line.some(([lon, lat]) => lon >= 44 && lon <= 121 && lat >= 30 && lat <= 53);
    const points = line.map(([lon, lat]) => latLonToVector(lat, lon, radius));
    const material = new THREE.LineBasicMaterial({
      color: isTargetRegion ? 0xfff1a8 : 0xd4a900,
      transparent: true,
      opacity: isTargetRegion ? 0.82 : 0.28,
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometry.computeBoundingSphere();
    group.add(new THREE.Line(first ? geometry : geometry, material));
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

export function GlobeMap({ countries, telegramLabel }: { countries: { name: string }[]; telegramLabel: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();
  const zoomRef = useRef(1);
  const [zoom, setZoom] = useState(1);
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

  const changeZoom = useCallback((next: number | ((current: number) => number)) => {
    setZoom((current) => {
      const raw = typeof next === "function" ? next(current) : next;
      const clamped = THREE.MathUtils.clamp(raw, 0.72, 2.65);
      zoomRef.current = clamped;
      return clamped;
    });
  }, []);

  const markers = useMemo<GlobeMarker[]>(
    () =>
      capitalMarkers.map((marker, index) => ({
        ...marker,
        country: countries[index]?.name ?? marker.capital,
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

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.17, 72, 72),
      new THREE.MeshBasicMaterial({
        color: 0xffd200,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      }),
    );
    globe.add(atmosphere);

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
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const rotation = {
      x: -0.22,
      y: -THREE.MathUtils.degToRad(78),
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
        const visible = rotated.z > -0.18;
        const pointX = ((projected.x + 1) / 2) * 100;
        const pointY = ((-projected.y + 1) / 2) * 100;
        const offset = capitalMarkers[index].labelOffset;

        return {
          x: pointX,
          y: pointY,
          labelX: pointX + offset.x,
          labelY: pointY + offset.y,
          align: capitalMarkers[index].align ?? "left",
          visible,
          scale: visible ? Math.max(0.72, Math.min(1.08, 1 + rotated.z * 0.08)) : 0.72,
        };
      });

      setMarkerViews(views);
    }

    function animate() {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 4.25 / zoomRef.current, 0.14);
      camera.updateProjectionMatrix();
      updateMarkers();
      renderer.render(scene, camera);
      frameRef.current = window.requestAnimationFrame(animate);
    }

    function handlePointerDown(event: PointerEvent) {
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
      container.releasePointerCapture(event.pointerId);
      container.style.cursor = "grab";
    }

    function handleWheel(event: WheelEvent) {
      event.preventDefault();
      changeZoom((current) => current + (event.deltaY > 0 ? -0.12 : 0.12));
    }

    container.style.cursor = "grab";
    container.addEventListener("pointerdown", handlePointerDown);
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerup", handlePointerUp);
    container.addEventListener("pointercancel", handlePointerUp);
    container.addEventListener("wheel", handleWheel, { passive: false });
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", handlePointerDown);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerup", handlePointerUp);
      container.removeEventListener("pointercancel", handlePointerUp);
      container.removeEventListener("wheel", handleWheel);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      sphere.geometry.dispose();
      sphere.material.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();
      landMass.geometry.dispose();
      landMass.material.dispose();
      boundaries.children.forEach((child) => {
        const line = child as THREE.Line;
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      markerMaterial.dispose();
    };
  }, [changeZoom, markers]);

  return (
    <div className="relative aspect-[1.58] min-h-[360px] touch-none overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0_48%,rgba(4,4,3,0.12)_72%,rgba(4,4,3,0.5)_100%)]" />
      <div className="absolute left-4 top-4 z-10 rounded-full border border-primary/25 bg-black/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur">
        Drag / Zoom / Telegram
      </div>
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 p-1.5 text-copy shadow-card backdrop-blur">
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => changeZoom((current) => current - 0.18)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-bold text-primary transition hover:bg-primary hover:text-black"
          aria-label="Zoom out"
        >
          -
        </button>
        <span className="min-w-14 text-center text-xs font-bold text-muted">{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => changeZoom((current) => current + 0.18)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg font-bold text-black shadow-[0_0_20px_rgba(255,210,0,0.34)] transition hover:bg-white"
          aria-label="Zoom in"
        >
          +
        </button>
      </div>

      {markers.map((marker, index) => {
        const view = markerViews[index];

        return (
          <div key={`${marker.country}-${marker.capital}`}>
          <a
            href={marker.telegram}
            target="_blank"
            rel="noreferrer"
            onPointerDown={(event) => event.stopPropagation()}
            className="group absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
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
          <span
            key={`${marker.country}-${marker.capital}-label`}
            className="pointer-events-none absolute z-10 hidden min-w-max -translate-y-1/2 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[11px] font-semibold text-copy shadow-card backdrop-blur sm:block"
            style={{
              left: `${view.labelX}%`,
              top: `${view.labelY}%`,
              opacity: view.visible ? 1 : 0,
              transform: `translate(${view.align === "right" ? "-100%" : "0"}, -50%) scale(${view.scale})`,
            }}
          >
            <span
              className="absolute top-1/2 h-px w-7 bg-primary/40"
              style={{
                left: view.align === "right" ? "100%" : "auto",
                right: view.align === "left" ? "100%" : "auto",
              }}
            />
            {marker.country} / {marker.capital}
          </span>
          </div>
        );
      })}
    </div>
  );
}
