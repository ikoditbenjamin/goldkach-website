import React from "react";
import NextImage, { ImageProps } from "next/image";

/**
 * AppImage — thin wrapper around next/image.
 * Supports both fill-mode and fixed-size usage.
 */
export default function AppImage(props: ImageProps) {
  return <NextImage {...props} />;
}
