import type { Metadata } from "next";
import { HomeClient } from "./HomeClient";

export const metadata: Metadata = {
  title: "Prestige Valet & Parking Services | Premium Valet Parking",
  description:
    "Premium valet parking and parking management services for events, restaurants, hotels, weddings, and corporate properties. Five-star service, every arrival.",
  openGraph: {
    title: "Prestige Valet & Parking Services",
    description:
      "Premium valet parking services. Five-star service, every arrival.",
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
