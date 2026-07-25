"use client";

import React, { useState } from "react";
import {
  ComposableMap as ComposableMapOrig,
  Geographies as GeographiesOrig,
  Geography as GeographyOrig,
  Marker as MarkerOrig
} from "react-simple-maps";

const ComposableMap = ComposableMapOrig as any;
const Geographies = GeographiesOrig as any;
const Geography = GeographyOrig as any;
const Marker = MarkerOrig as any;
import { MapPin, Navigation, Building2, Users } from "lucide-react";

// Standard reliable world topojson
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface HubMarker {
  id: string;
  countryId: string;
  name: string;
  type: "hq" | "hub" | "node";
  coordinates: [number, number]; // [longitude, latitude]
  details: string;
  enumerators?: string;
}

const HUBS: HubMarker[] = [
  // Kenya
  {
    id: "nairobi",
    countryId: "kenya",
    name: "Nairobi",
    type: "hq",
    coordinates: [36.8219, -1.2921],
    details: "IARA Regional HQ & Operations Center",
    enumerators: "150+ Field Enumerators"
  },
  {
    id: "mombasa",
    countryId: "kenya",
    name: "Mombasa",
    type: "node",
    coordinates: [39.6682, -4.0435],
    details: "Coastal Field Operations Node",
  },
  {
    id: "kisumu",
    countryId: "kenya",
    name: "Kisumu",
    type: "node",
    coordinates: [34.7680, -0.0917],
    details: "Western Kenya Lake Region Hub",
  },
  {
    id: "lodwar",
    countryId: "kenya",
    name: "Lodwar / Turkana",
    type: "node",
    coordinates: [35.5973, 3.1191],
    details: "Northern ASAL Survey Station",
  },

  // Uganda
  {
    id: "kampala",
    countryId: "uganda",
    name: "Kampala",
    type: "hub",
    coordinates: [32.5825, 0.3476],
    details: "Uganda Primary Operational Hub",
    enumerators: "90+ Field Enumerators"
  },
  {
    id: "gulu",
    countryId: "uganda",
    name: "Gulu",
    type: "node",
    coordinates: [32.2990, 2.7747],
    details: "Northern Uganda & Post-Conflict Evaluation Node",
  },
  {
    id: "arua",
    countryId: "uganda",
    name: "Arua / Bidi Bidi",
    type: "node",
    coordinates: [30.9111, 3.0303],
    details: "West Nile Refugee Settlement M&E Base",
  },

  // Tanzania
  {
    id: "dar",
    countryId: "tanzania",
    name: "Dar es Salaam",
    type: "hub",
    coordinates: [39.2083, -6.7924],
    details: "Tanzania Primary Country Hub",
    enumerators: "110+ Field Enumerators"
  },
  {
    id: "arusha",
    countryId: "tanzania",
    name: "Arusha",
    type: "node",
    coordinates: [36.6830, -3.3869],
    details: "Northern Circuit Trade & Agriculture Node",
  },
  {
    id: "zanzibar",
    countryId: "tanzania",
    name: "Zanzibar",
    type: "node",
    coordinates: [39.1980, -6.1659],
    details: "Marine & Blue Economy Evaluation Station",
  },

  // Rwanda
  {
    id: "kigali",
    countryId: "rwanda",
    name: "Kigali",
    type: "hub",
    coordinates: [30.0619, -1.9441],
    details: "Rwanda Governance & Digital Hub",
    enumerators: "70+ Field Enumerators"
  },
  {
    id: "musanze",
    countryId: "rwanda",
    name: "Musanze",
    type: "node",
    coordinates: [29.6340, -1.5000],
    details: "Green Growth Field Node",
  }
];

interface EastAfricaMapProps {
  activeCountry: string;
  onSelectCountry: (countryId: string) => void;
}

export default function EastAfricaMap({ activeCountry, onSelectCountry }: EastAfricaMapProps) {
  const [hoveredHub, setHoveredHub] = useState<HubMarker | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const getCountryIdFromName = (name: string): string | null => {
    const lower = name.toLowerCase();
    if (lower.includes("kenya")) return "kenya";
    if (lower.includes("uganda")) return "uganda";
    if (lower.includes("tanzania")) return "tanzania";
    if (lower.includes("rwanda")) return "rwanda";
    return null;
  };

  return (
    <div className="relative w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
      {/* Map Control Overlay Header */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800 text-xs">
        <span className="flex items-center gap-1.5 font-bold text-white">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          Interactive Hubs
        </span>
        <span className="text-slate-500">|</span>
        <span className="text-slate-400 font-medium">Click country or marker to filter</span>
      </div>

      {/* Map Tooltip Banner */}
      {hoveredHub && (
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 bg-slate-950/95 backdrop-blur-md p-3.5 rounded-xl border border-blue-500/40 text-white shadow-2xl max-w-sm animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                  hoveredHub.type === 'hq' ? 'bg-amber-500 text-slate-950' :
                  hoveredHub.type === 'hub' ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-200'
                }`}>
                  {hoveredHub.type === 'hq' ? 'Regional HQ' : hoveredHub.type === 'hub' ? 'Country Hub' : 'Field Node'}
                </span>
                <span className="text-sm font-extrabold text-white">{hoveredHub.name}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">{hoveredHub.details}</p>
              {hoveredHub.enumerators && (
                <p className="text-[11px] text-blue-300 font-bold flex items-center gap-1 mt-1.5">
                  <Users className="w-3 h-3 text-blue-400" />
                  {hoveredHub.enumerators}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Map Canvas */}
      <div className="w-full h-[380px] sm:h-[460px] cursor-grab active:cursor-grabbing">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [35.5, -2.5], // Center on East Africa
            scale: 2300,
          }}
          className="w-full h-full"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name || "";
                const matchedId = getCountryIdFromName(countryName);
                const isIARACountry = Boolean(matchedId);
                const isSelected = activeCountry === matchedId;
                const isHovered = hoveredCountry === matchedId;

                let fillColor = "#1e293b"; // Non-IARA countries (slate-800)
                let strokeColor = "#334155"; // Border (slate-700)

                if (isIARACountry) {
                  if (isSelected) {
                    fillColor = "#1e3a8a"; // Active (blue-900)
                    strokeColor = "#60a5fa"; // Bright blue border
                  } else if (isHovered) {
                    fillColor = "#2563eb"; // Hovered (blue-600)
                    strokeColor = "#93c5fd";
                  } else {
                    fillColor = "#0f172a"; // Inactive IARA (slate-900)
                    strokeColor = "#3b82f6"; // Blue outline highlight
                  }
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      if (matchedId) {
                        onSelectCountry(matchedId);
                      }
                    }}
                    onMouseEnter={() => {
                      if (matchedId) setHoveredCountry(matchedId);
                    }}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{
                      default: {
                        fill: fillColor,
                        stroke: strokeColor,
                        strokeWidth: isSelected ? 1.5 : isIARACountry ? 1.2 : 0.5,
                        outline: "none",
                        transition: "all 250ms",
                        cursor: isIARACountry ? "pointer" : "default",
                      },
                      hover: {
                        fill: isIARACountry ? (isSelected ? "#1d4ed8" : "#2563eb") : "#334155",
                        stroke: isIARACountry ? "#93c5fd" : "#475569",
                        strokeWidth: isIARACountry ? 1.8 : 0.5,
                        outline: "none",
                        cursor: isIARACountry ? "pointer" : "default",
                      },
                      pressed: {
                        fill: "#1e40af",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Hub Markers */}
          {HUBS.map((hub) => {
            const isCountryActive = activeCountry === hub.countryId;
            const isHQ = hub.type === "hq";
            const isHub = hub.type === "hub";

            return (
              <Marker
                key={hub.id}
                coordinates={hub.coordinates}
                onMouseEnter={() => setHoveredHub(hub)}
                onMouseLeave={() => setHoveredHub(null)}
                onClick={() => onSelectCountry(hub.countryId)}
                style={{
                  default: { cursor: "pointer", outline: "none" },
                  hover: { cursor: "pointer", outline: "none" },
                  pressed: { cursor: "pointer", outline: "none" },
                }}
              >
                {/* Pulse Ring for HQ / Primary Hubs */}
                {(isHQ || isHub) && (
                  <circle
                    r={isHQ ? 12 : 9}
                    fill={isHQ ? "#f59e0b" : "#3b82f6"}
                    opacity={isCountryActive ? 0.4 : 0.2}
                    className="animate-ping"
                  />
                )}

                {/* Marker Outer Pin */}
                <circle
                  r={isHQ ? 7 : isHub ? 5.5 : 3.5}
                  fill={
                    isHQ
                      ? "#f59e0b"
                      : isHub
                      ? "#3b82f6"
                      : isCountryActive
                      ? "#93c5fd"
                      : "#cbd5e1"
                  }
                  stroke="#0f172a"
                  strokeWidth={1.5}
                />

                {/* Inner Core Accent */}
                <circle
                  r={isHQ ? 3 : isHub ? 2.5 : 1.5}
                  fill="#ffffff"
                />

                {/* Map Marker Label */}
                <text
                  textAnchor="middle"
                  y={isHQ ? -12 : -9}
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: isHQ ? "10px" : "8.5px",
                    fontWeight: isHQ || isHub ? 800 : 600,
                    fill: isCountryActive ? "#ffffff" : "#94a3b8",
                    pointerEvents: "none",
                    textShadow: "0px 1px 3px rgba(0,0,0,0.9)",
                  }}
                >
                  {hub.name}
                </text>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Map Legend */}
      <div className="p-3 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-300 inline-block" />
            <span className="font-bold text-white">Regional HQ (Nairobi)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-blue-300 inline-block" />
            <span className="font-semibold">Country Hubs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-300 inline-block" />
            <span className="text-slate-400">Field Operations Nodes</span>
          </div>
        </div>
        <span className="text-[11px] text-blue-400 font-bold">
          EAC Operational Footprint: 420+ Certified Enumerators
        </span>
      </div>
    </div>
  );
}
