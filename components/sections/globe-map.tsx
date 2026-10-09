"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { mesh } from "topojson-client";
import countriesTopology from "world-atlas/countries-50m.json";
import { TelegramIcon } from "@/components/ui/icons";
import { WavingFlag } from "@/components/ui/waving-flag";
import { trackContactClick } from "@/lib/analytics";

type GlobeMarker = {
  country: string;
  note: string;
  capital: string;
  lat: number;
  lon: number;
  telegram: string;
};

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
    telegram: "https://t.me/melbetmongolia3",
    labelOffset: { x: 14, y: -10 },
    mobileLabelOffset: { x: 14, y: -18 },
    align: "right",
  },
  {
    capital: "Dushanbe",
    lat: 38.5598,
    lon: 68.787,
    telegram: "https://t.me/TeamCash_Manager_11",
    labelOffset: { x: -14, y: 3 },
    mobileLabelOffset: { x: -8, y: 3 },
    align: "right",
  },
  {
    capital: "Tashkent",
    lat: 41.2995,
    lon: 69.2401,
    telegram: "https://t.me/Manager_TeamCash",
    labelOffset: { x: 14, y: -1 },
    mobileLabelOffset: { x: 14, y: -3 },
  },
  {
    capital: "Baku",
    lat: 40.4093,
    lon: 49.8671,
    telegram: "https://t.me/Teamcash_azerbaijan01",
    labelOffset: { x: -16, y: -12 },
    mobileLabelOffset: { x: 2, y: -12 },
    align: "right",
  },
  {
    capital: "Ashgabat",
    lat: 37.9601,
    lon: 58.3261,
    telegram: "https://t.me/MelBetmell",
    labelOffset: { x: -18, y: 18 },
    mobileLabelOffset: { x: 0, y: 18 },
    align: "right",
  },
  { capital: "Bishkek", lat: 42.8746, lon: 74.5698, telegram: "https://t.me/Manager_TeamCash", labelOffset: { x: 15, y: 9 } },
  { capital: "Kabul", lat: 34.5553, lon: 69.2075, telegram: "https://t.me/Teamcash_HR", labelOffset: { x: 12, y: 20 } },
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

function createGlobeGrid(radius = 1.125) {
  const positions: number[] = [];

  function addStrip(points: THREE.Vector3[], close = false) {
    const length = close ? points.length : points.length - 1;
    for (let index = 0; index < length; index += 1) {
      const current = points[index];
      const next = points[(index + 1) % points.length];
      positions.push(current.x, current.y, current.z, next.x, next.y, next.z);
    }
  }

  for (let lat = -60; lat <= 60; lat += 20) {
    const points: THREE.Vector3[] = [];
    for (let lon = -180; lon < 180; lon += 4) {
      points.push(latLonToVector(lat, lon, radius));
    }
    addStrip(points, true);
  }

  for (let lon = -180; lon < 180; lon += 20) {
    const points: THREE.Vector3[] = [];
    for (let lat = -80; lat <= 80; lat += 4) {
      points.push(latLonToVector(lat, lon, radius));
    }
    addStrip(points);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({ color: 0xffd200, transparent: true, opacity: 0.11 }),
  );
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
  const regularPositions: number[] = [];
  const targetPositions: number[] = [];

  countryMesh.coordinates.forEach((line) => {
    if (line.length < 2) return;
    const isTargetRegion = line.some(([lon, lat]) => lon >= 44 && lon <= 121 && lat >= 30 && lat <= 53);
    const positions = isTargetRegion ? targetPositions : regularPositions;
    for (let index = 0; index < line.length - 1; index += 1) {
      const [lonA, latA] = line[index];
      const [lonB, latB] = line[index + 1];
      const pointA = latLonToVector(latA, lonA, radius);
      const pointB = latLonToVector(latB, lonB, radius);
      positions.push(pointA.x, pointA.y, pointA.z, pointB.x, pointB.y, pointB.z);
    }
  });

  function addLines(positions: number[], color: number, opacity: number) {
    if (positions.length === 0) return;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity,
    });
    geometry.computeBoundingSphere();
    group.add(new THREE.LineSegments(geometry, material));
  }

  addLines(regularPositions, 0xd4a900, 0.28);
  addLines(targetPositions, 0xfff1a8, 0.82);

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
  const frameRef = useRef<number | undefined>(undefined);
  const interactiveRef = useRef(false);
  const mobileControlsRef = useRef(false);
  const markerPointRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const markerLabelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerLineRefs = useRef<(SVGLineElement | null)[]>([]);
  const markerButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const zoomGlobeRef = useRef<(direction: "in" | "out") => void>(() => undefined);
  const [isInteractive, setIsInteractive] = useState(false);
  const [mobileControlsEnabled, setMobileControlsEnabled] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState<number | null>(null);

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
    mobileControlsRef.current = mobileControlsEnabled;
  }, [mobileControlsEnabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas?.parentElement) return;
    const container = canvas.parentElement;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    frameRef.current = undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0, 4.25);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const basePixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);
    const interactionPixelRatio = isMobile ? Math.min(basePixelRatio, 1.25) : basePixelRatio;
    let currentPixelRatio = basePixelRatio;
    renderer.setPixelRatio(currentPixelRatio);

    const globe = new THREE.Group();
    scene.add(globe);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, isMobile ? 64 : 72, isMobile ? 64 : 72),
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
    const markerGeometry = new THREE.SphereGeometry(0.018, isMobile ? 12 : 16, isMobile ? 12 : 16);
    const markerPoints = new THREE.InstancedMesh(markerGeometry, markerMaterial, markers.length);
    const ringGeometry = new THREE.RingGeometry(0.045, 0.065, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd200,
      transparent: true,
      opacity: 0.78,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const markerRings = new THREE.InstancedMesh(ringGeometry, ringMaterial, markers.length);
    const instanceTransform = new THREE.Object3D();
    const surfaceNormal = new THREE.Vector3(0, 0, 1);
    markers.forEach((marker, index) => {
      instanceTransform.position.copy(latLonToVector(marker.lat, marker.lon, 1.19));
      instanceTransform.quaternion.identity();
      instanceTransform.updateMatrix();
      markerPoints.setMatrixAt(index, instanceTransform.matrix);

      const ringCenter = latLonToVector(marker.lat, marker.lon, 1.215);
      instanceTransform.position.copy(ringCenter);
      instanceTransform.quaternion.setFromUnitVectors(surfaceNormal, ringCenter.normalize());
      instanceTransform.updateMatrix();
      markerRings.setMatrixAt(index, instanceTransform.matrix);
    });
    markerPoints.instanceMatrix.needsUpdate = true;
    markerRings.instanceMatrix.needsUpdate = true;
    globe.add(markerPoints, markerRings);

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

    let width = 1;
    let height = 1;
    let needsRender = true;
    let inertiaActive = false;
    let isVisible = true;
    let lastFrameTime = 0;
    let restoreQualityTimer = 0;
    let disposed = false;
    let diagnosticStart = 0;
    let diagnosticFrames = 0;
    let diagnosticMaxFrame = 0;

    function resize() {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      needsRender = true;
      requestFrame();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const rotation = {
      ...initialRotation,
    };
    const targetRotation = {
      ...initialRotation,
    };
    const velocity = {
      x: 0,
      y: 0,
    };
    const drag = {
      active: false,
      moved: false,
      pointerId: -1,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      time: 0,
    };
    const activePointers = new Map<number, { x: number; y: number }>();
    const pinch = {
      active: false,
      distance: 0,
      cameraZ: camera.position.z,
    };
    const vectorCache = markers.map((marker) => latLonToVector(marker.lat, marker.lon, 1.19));
    const rotatedVectorCache = markers.map(() => new THREE.Vector3());
    const projectedVectorCache = markers.map(() => new THREE.Vector3());
    const yAxis = new THREE.Vector3(0, 1, 0);
    const xAxis = new THREE.Vector3(1, 0, 0);
    const markerOffsets = capitalMarkers.map((marker) =>
      isMobile ? marker.mobileLabelOffset ?? marker.labelOffset : marker.labelOffset,
    );
    function setPixelRatio(nextPixelRatio: number) {
      if (Math.abs(currentPixelRatio - nextPixelRatio) < 0.01) return;
      currentPixelRatio = nextPixelRatio;
      renderer.setPixelRatio(currentPixelRatio);
      renderer.setSize(width, height, false);
      needsRender = true;
    }

    function requestFrame() {
      if (disposed || !isVisible || frameRef.current !== undefined) return;
      frameRef.current = window.requestAnimationFrame(animate);
    }

    zoomGlobeRef.current = (direction) => {
      const delta = direction === "in" ? -0.34 : 0.34;
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + delta, 3.35, 5.15);
      camera.updateProjectionMatrix();
      needsRender = true;
      requestFrame();
    };

    function updateMarkers() {
      globe.rotation.y = rotation.y;
      globe.rotation.x = rotation.x;
      camera.updateMatrixWorld();

      vectorCache.forEach((vector, index) => {
        const rotated = rotatedVectorCache[index].copy(vector).applyAxisAngle(yAxis, rotation.y);
        rotated.applyAxisAngle(xAxis, rotation.x);
        const projected = projectedVectorCache[index].copy(rotated).project(camera);
        const marker = capitalMarkers[index];
        const pointElement = markerPointRefs.current[index];
        const labelElement = markerLabelRefs.current[index];
        const lineElement = markerLineRefs.current[index];
        const buttonElement = markerButtonRefs.current[index];
        if (!pointElement || !labelElement || !lineElement || !buttonElement) return;

        if (!Number.isFinite(projected.x) || !Number.isFinite(projected.y)) {
          pointElement.style.opacity = "0";
          pointElement.style.pointerEvents = "none";
          labelElement.style.opacity = "0";
          labelElement.style.pointerEvents = "none";
          buttonElement.tabIndex = -1;
          lineElement.style.opacity = "0";
          return;
        }

        const visible = rotated.z > -0.18;
        const pointX = ((projected.x + 1) / 2) * 100;
        const pointY = ((-projected.y + 1) / 2) * 100;
        const offset = markerOffsets[index];
        const labelX = pointX + offset.x;
        const labelY = pointY + offset.y;
        const scale = visible ? Math.max(0.72, Math.min(1.08, 1 + rotated.z * 0.08)) : 0.72;
        const opacity = visible ? "1" : "0";
        const pointerEvents = visible ? "auto" : "none";

        pointElement.style.left = `${pointX}%`;
        pointElement.style.top = `${pointY}%`;
        pointElement.style.opacity = opacity;
        pointElement.style.pointerEvents = pointerEvents;
        pointElement.style.transform = `translate(-50%, -50%) scale(${scale})`;

        labelElement.style.left = `${labelX}%`;
        labelElement.style.top = `${labelY}%`;
        labelElement.style.opacity = opacity;
        labelElement.style.pointerEvents = pointerEvents;
        buttonElement.tabIndex = visible ? 0 : -1;
        labelElement.style.transform = `translate(${marker.align === "right" ? "-100%" : "0"}, -50%) scale(${scale})`;

        lineElement.setAttribute("x1", String(pointX));
        lineElement.setAttribute("y1", String(pointY));
        lineElement.setAttribute("x2", String(labelX));
        lineElement.setAttribute("y2", String(labelY));
        lineElement.style.opacity = opacity;
      });
    }

    function animate(time: number) {
      frameRef.current = undefined;
      const deltaSeconds = lastFrameTime === 0 ? 1 / 60 : Math.min((time - lastFrameTime) / 1000, 0.05);
      lastFrameTime = time;

      if (drag.active) {
        rotation.x = targetRotation.x;
        rotation.y = targetRotation.y;
        needsRender = true;
      } else if (inertiaActive) {
        targetRotation.x = THREE.MathUtils.clamp(targetRotation.x + velocity.x * deltaSeconds, -0.9, 0.72);
        targetRotation.y += velocity.y * deltaSeconds;
        rotation.x = targetRotation.x;
        rotation.y = targetRotation.y;
        const decay = Math.exp(-5.6 * deltaSeconds);
        velocity.x *= decay;
        velocity.y *= decay;
        needsRender = true;

        if (Math.abs(velocity.x) + Math.abs(velocity.y) < 0.012) {
          inertiaActive = false;
          velocity.x = 0;
          velocity.y = 0;
          if (isMobile && currentPixelRatio !== basePixelRatio) {
            window.clearTimeout(restoreQualityTimer);
            restoreQualityTimer = window.setTimeout(() => {
              setPixelRatio(basePixelRatio);
              requestFrame();
            }, 120);
          }
        }
      }

      if (needsRender) {
        updateMarkers();
        renderer.render(scene, camera);
        needsRender = false;

        if (process.env.NODE_ENV !== "production") {
          if (diagnosticStart === 0) diagnosticStart = time;
          diagnosticFrames += 1;
          diagnosticMaxFrame = Math.max(diagnosticMaxFrame, deltaSeconds * 1000);
          const diagnosticDuration = time - diagnosticStart;
          if (diagnosticDuration >= 600) {
            container.dataset.globeFps = String(Math.round((diagnosticFrames * 1000) / diagnosticDuration));
            container.dataset.globeMaxFrame = diagnosticMaxFrame.toFixed(1);
            container.dataset.globeDrawCalls = String(renderer.info.render.calls);
            diagnosticStart = time;
            diagnosticFrames = 0;
            diagnosticMaxFrame = 0;
          }
        }
      }

      if (drag.active || inertiaActive) requestFrame();
    }

    function handlePointerDown(event: PointerEvent) {
      const isMobile3D = isMobile && mobileControlsRef.current;
      const isInteractiveTarget = Boolean((event.target as Element).closest("a, button"));
      if (isInteractiveTarget) return;
      if (isMobile && !mobileControlsRef.current) return;
      if (!isMobile3D && (!event.isPrimary || drag.active)) return;

      if (isMobile && !isInteractiveTarget) event.preventDefault();

      if (isMobile3D) {
        activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        container.setPointerCapture(event.pointerId);
        if (activePointers.size === 2) {
          const [first, second] = Array.from(activePointers.values());
          pinch.active = true;
          pinch.distance = Math.hypot(second.x - first.x, second.y - first.y);
          pinch.cameraZ = camera.position.z;
          drag.active = false;
          inertiaActive = false;
          velocity.x = 0;
          velocity.y = 0;
          if (isMobile) setPixelRatio(interactionPixelRatio);
          needsRender = true;
          requestFrame();
          return;
        }
      }

      if (!interactiveRef.current) {
        interactiveRef.current = true;
        setIsInteractive(true);
      }

      drag.active = true;
      drag.moved = false;
      drag.pointerId = event.pointerId;
      drag.startX = event.clientX;
      drag.startY = event.clientY;
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.time = event.timeStamp;
      velocity.x = 0;
      velocity.y = 0;
      inertiaActive = false;
      window.clearTimeout(restoreQualityTimer);
      if (!container.hasPointerCapture(event.pointerId)) container.setPointerCapture(event.pointerId);
      container.style.cursor = "grabbing";
      needsRender = true;
      requestFrame();
    }

    function handlePointerMove(event: PointerEvent) {
      if (isMobile && mobileControlsRef.current && activePointers.has(event.pointerId)) {
        activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
        if (pinch.active && activePointers.size >= 2) {
          event.preventDefault();
          const [first, second] = Array.from(activePointers.values());
          const distance = Math.max(1, Math.hypot(second.x - first.x, second.y - first.y));
          camera.position.z = THREE.MathUtils.clamp(pinch.cameraZ * (pinch.distance / distance), 3.35, 5.15);
          camera.updateProjectionMatrix();
          needsRender = true;
          requestFrame();
          return;
        }
      }

      if (!drag.active || event.pointerId !== drag.pointerId) return;
      const coalescedEvents = event.getCoalescedEvents?.();
      const sample = coalescedEvents?.length ? coalescedEvents[coalescedEvents.length - 1] : event;
      const deltaX = sample.clientX - drag.x;
      const deltaY = sample.clientY - drag.y;
      const deltaTime = Math.max(4, sample.timeStamp - drag.time) / 1000;

      if (isMobile && !drag.moved) {
        const movement = Math.hypot(sample.clientX - drag.startX, sample.clientY - drag.startY);
        if (movement < 4) return;
        drag.moved = true;
        event.preventDefault();
        setPixelRatio(interactionPixelRatio);
      }

      if (isMobile) event.preventDefault();

      drag.x = sample.clientX;
      drag.y = sample.clientY;
      drag.time = sample.timeStamp;

      const rotationDeltaY = deltaX * 0.006;
      const previousTargetX = targetRotation.x;
      targetRotation.y += rotationDeltaY;
      targetRotation.x = THREE.MathUtils.clamp(targetRotation.x + deltaY * 0.004, -0.9, 0.72);

      const sampleVelocityX = (targetRotation.x - previousTargetX) / deltaTime;
      const sampleVelocityY = rotationDeltaY / deltaTime;
      velocity.x = velocity.x * 0.35 + sampleVelocityX * 0.65;
      velocity.y = velocity.y * 0.35 + sampleVelocityY * 0.65;
      needsRender = true;
      requestFrame();
    }

    function handlePointerUp(event: PointerEvent) {
      const wasTrackedPointer = activePointers.delete(event.pointerId);
      if (container.hasPointerCapture(event.pointerId)) container.releasePointerCapture(event.pointerId);
      if (pinch.active) {
        if (activePointers.size < 2) pinch.active = false;
        drag.active = false;
        drag.pointerId = -1;
        needsRender = true;
        requestFrame();
        return;
      }

      if (!drag.active || event.pointerId !== drag.pointerId) return;
      drag.active = false;
      drag.pointerId = -1;
      container.style.cursor = "grab";
      inertiaActive = drag.moved && Math.abs(velocity.x) + Math.abs(velocity.y) >= 0.012;
      if (wasTrackedPointer) activePointers.clear();
      lastFrameTime = event.timeStamp;
      needsRender = true;
      if (!inertiaActive && isMobile && currentPixelRatio !== basePixelRatio) {
        window.clearTimeout(restoreQualityTimer);
        restoreQualityTimer = window.setTimeout(() => {
          setPixelRatio(basePixelRatio);
          requestFrame();
        }, 120);
      }
      requestFrame();
    }

    function preventMobileViewportGesture(event: Event) {
      if (!isMobile || !mobileControlsRef.current) return;
      if (event.type === "touchstart" && (event.target as Element | null)?.closest?.("a, button")) return;
      event.preventDefault();
    }

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && document.visibilityState === "visible";
        if (isVisible) {
          lastFrameTime = 0;
          needsRender = true;
          requestFrame();
        } else if (frameRef.current !== undefined) {
          window.cancelAnimationFrame(frameRef.current);
          frameRef.current = undefined;
        }
      },
      { rootMargin: "120px" },
    );

    function handleDocumentVisibility() {
      isVisible = !document.hidden && container.getBoundingClientRect().bottom >= -120 && container.getBoundingClientRect().top <= window.innerHeight + 120;
      if (isVisible) {
        lastFrameTime = 0;
        needsRender = true;
        requestFrame();
      }
    }

    container.style.cursor = interactiveRef.current ? "grab" : "pointer";
    visibilityObserver.observe(container);
    document.addEventListener("visibilitychange", handleDocumentVisibility);
    container.addEventListener("pointerdown", handlePointerDown, true);
    container.addEventListener("pointermove", handlePointerMove, true);
    container.addEventListener("pointerup", handlePointerUp, true);
    container.addEventListener("pointercancel", handlePointerUp, true);
    container.addEventListener("touchstart", preventMobileViewportGesture, { passive: false });
    container.addEventListener("touchmove", preventMobileViewportGesture, { passive: false });
    container.addEventListener("gesturestart", preventMobileViewportGesture, { passive: false });
    container.addEventListener("gesturechange", preventMobileViewportGesture, { passive: false });
    requestFrame();

    return () => {
      disposed = true;
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleDocumentVisibility);
      container.removeEventListener("pointerdown", handlePointerDown, true);
      container.removeEventListener("pointermove", handlePointerMove, true);
      container.removeEventListener("pointerup", handlePointerUp, true);
      container.removeEventListener("pointercancel", handlePointerUp, true);
      container.removeEventListener("touchstart", preventMobileViewportGesture);
      container.removeEventListener("touchmove", preventMobileViewportGesture);
      container.removeEventListener("gesturestart", preventMobileViewportGesture);
      container.removeEventListener("gesturechange", preventMobileViewportGesture);
      window.clearTimeout(restoreQualityTimer);
      if (frameRef.current !== undefined) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
      zoomGlobeRef.current = () => undefined;
      renderer.dispose();
      const geometries = new Set<THREE.BufferGeometry>();
      const materials = new Set<THREE.Material>();
      scene.traverse((object) => {
        const renderable = object as THREE.Mesh | THREE.Line | THREE.Points;
        if (renderable.geometry) geometries.add(renderable.geometry);
        const objectMaterial = renderable.material;
        if (Array.isArray(objectMaterial)) objectMaterial.forEach((material) => materials.add(material));
        else if (objectMaterial) materials.add(objectMaterial);
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
    };
  }, [markers]);

  return (
    <div
      className={`relative aspect-square min-h-[340px] overflow-visible bg-transparent sm:aspect-[1.58] sm:min-h-[360px] sm:touch-pan-y ${
        mobileControlsEnabled ? "touch-none" : "touch-pan-y"
      }`}
      style={mobileControlsEnabled ? { touchAction: "none", overscrollBehavior: "none", WebkitUserSelect: "none" } : undefined}
      data-interactive={isInteractive}
      data-mobile-controls={mobileControlsEnabled ? "active" : "inactive"}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {!mobileControlsEnabled ? (
        <button
          type="button"
          className="absolute inset-0 z-40 flex touch-pan-y items-center justify-center sm:hidden"
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => {
            mobileControlsRef.current = true;
            setMobileControlsEnabled(true);
          }}
          aria-label="Включить управление 3D-глобусом"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-black/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-md">
            <span className="text-base leading-none">↻</span>
            Нажмите для 3D
          </span>
        </button>
      ) : (
        <>
          <div className="absolute left-3 top-3 z-50 flex overflow-hidden rounded-full border border-primary/40 bg-black/85 shadow-[0_10px_28px_rgba(0,0,0,0.5)] backdrop-blur-md sm:hidden">
            <button
              type="button"
              className="flex h-9 w-10 items-center justify-center border-r border-primary/25 text-xl leading-none text-primary"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => zoomGlobeRef.current("out")}
              aria-label="Отдалить глобус"
            >
              −
            </button>
            <button
              type="button"
              className="flex h-9 w-10 items-center justify-center text-xl leading-none text-primary"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => zoomGlobeRef.current("in")}
              aria-label="Приблизить глобус"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="absolute right-3 top-3 z-50 rounded-full border border-primary/40 bg-black/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_10px_28px_rgba(0,0,0,0.5)] backdrop-blur-md sm:hidden"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => {
              mobileControlsRef.current = false;
              setMobileControlsEnabled(false);
            }}
          >
            Готово
          </button>
        </>
      )}

      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {markers.map((marker, index) => (
          <line
            key={`marker-line-${marker.capital}`}
            ref={(element) => {
              markerLineRefs.current[index] = element;
            }}
            x1="50"
            y1="50"
            x2="50"
            y2="50"
            stroke="rgba(255, 210, 0, 0.16)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity="0"
          />
        ))}
      </svg>

      {markers.map((marker, index) => {
        const isExpanded = expandedCountry === index;

        return (
          <div key={`${marker.country}-${marker.capital}`}>
            <a
              ref={(element) => {
                markerPointRefs.current[index] = element;
              }}
              href={marker.telegram}
              onClick={() => trackContactClick("telegram", "geography_map", marker.country)}
              target="_blank"
              rel="noreferrer"
              onPointerDown={(event) => event.stopPropagation()}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
              style={{
                left: "50%",
                top: "50%",
                opacity: 0,
                pointerEvents: "none",
                transform: "translate(-50%, -50%) scale(0.72)",
              }}
              aria-label={`${telegramLabel} ${marker.country}`}
            >
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#229ED9]/35 bg-[#229ED9]/15" />
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#229ED9] shadow-[0_0_16px_rgba(34,158,217,0.85)] ring-2 ring-black/45">
                <TelegramIcon className="h-2.5 w-2.5 text-white" />
              </span>
            </a>

            <div
              ref={(element) => {
                markerLabelRefs.current[index] = element;
              }}
              className={`group absolute block min-w-max -translate-y-1/2 transition-opacity duration-200 hover:z-50 focus-within:z-50 ${
                isExpanded ? "z-50" : "z-30"
              }`}
              style={{
                left: "50%",
                top: "50%",
                opacity: 0,
                pointerEvents: "none",
                transform: `translate(${capitalMarkers[index].align === "right" ? "-100%" : "0"}, -50%) scale(0.72)`,
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
                  ref={(element) => {
                    markerButtonRefs.current[index] = element;
                  }}
                  type="button"
                  onClick={() => setExpandedCountry((current) => (current === index ? null : index))}
                  className="max-w-[78px] truncate text-[10px] font-semibold text-copy sm:max-w-none sm:text-[11px]"
                  aria-expanded={isExpanded}
                  tabIndex={-1}
                >
                  {marker.country}
                </button>
              </div>

              <div
                className={`pointer-events-none absolute top-full z-40 mt-1 w-36 transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:w-56 ${
                  capitalMarkers[index].align === "right" || index === 0 ? "right-0" : "left-0"
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
