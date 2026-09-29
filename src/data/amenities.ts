import { WifiIcon, CoffeeIcon, CarIcon, WavesIcon, UsersIcon, UtensilsIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Amenity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const amenities: Amenity[] = [
{ icon: WifiIcon, title: "Free Wi-Fi", description: "Complimentary wireless internet for every guest, throughout your stay." },
{ icon: CoffeeIcon, title: "Free breakfast", description: "Breakfast is included with your room — no extra charge, no fine print." },
{ icon: CarIcon, title: "Free parking", description: "On-site parking at no additional cost for guests." },
{ icon: WavesIcon, title: "Pool", description: "A pool for guests to cool off and unwind after a Copperbelt day." },
{ icon: UsersIcon, title: "Kid-friendly", description: "Families and children are warmly welcome." },
{ icon: UtensilsIcon, title: "On-site restaurant", description: "Dining and drinks under the same roof as your room." }];