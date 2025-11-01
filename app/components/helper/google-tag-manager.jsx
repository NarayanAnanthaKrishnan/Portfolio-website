"use client";

import { GoogleTagManager } from "@next/third-parties/google";

export default function GoogleTagManagerWrapper({ gtmId }) {
  if (!gtmId) {
    return null;
  }

  return <GoogleTagManager gtmId={gtmId} />;
}

