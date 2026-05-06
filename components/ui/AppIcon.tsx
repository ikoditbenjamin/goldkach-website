"use client";

import React from "react";
import {
  ChevronDown,
  X,
  Menu,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  ShieldCheck,
  Star,
  Phone,
  GraduationCap,
  Landmark,
  BarChart3,
  BarChart2,
  Lightbulb,
  FileText,
  Building2,
} from "lucide-react";

// Map Heroicons-style names → Lucide components
const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  ChevronDownIcon: ChevronDown,
  XMarkIcon: X,
  Bars3Icon: Menu,
  ArrowRightIcon: ArrowRight,
  ArrowLeftIcon: ArrowLeft,
  ArrowTrendingUpIcon: TrendingUp,
  ShieldCheckIcon: ShieldCheck,
  StarIcon: Star,
  PhoneIcon: Phone,
  AcademicCapIcon: GraduationCap,
  BanknotesIcon: Landmark,
  ChartBarSquareIcon: BarChart3,
  ChartBarIcon: BarChart2,
  LightBulbIcon: Lightbulb,
  DocumentTextIcon: FileText,
  BuildingOfficeIcon: Building2,
};

type IconVariant = "outline" | "solid";

interface AppIconProps {
  name: string;
  size?: number;
  variant?: IconVariant;
  className?: string;
}

export default function AppIcon({
  name,
  size = 24,
  variant = "outline",
  className = "",
}: AppIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback: render an empty inline element so the app doesn't crash
    return (
      <span
        className={className}
        style={{ width: size, height: size, display: "inline-block" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={className}
      strokeWidth={variant === "solid" ? 2.5 : 1.75}
    />
  );
}
