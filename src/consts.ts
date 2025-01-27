import type { Link } from "./types";

import Pot from "./icons/Pot.astro";
import Airfryer from "./icons/Airfryer.astro";
import Oven from "./icons/Oven.astro";

export const LINKS: Link[] = [
  { url: "/olla", text: "Olla", icon: Pot },
  { url: "/airfryer", text: "Airfryer", icon: Airfryer },
  { url: "/forn", text: "Forn", icon: Oven },
];
