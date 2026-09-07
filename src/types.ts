export type FusePowerType = 'battery' | 'acc' | 'ignition' | 'unknown';
export type FuseCategory = 'power' | 'comfort' | 'lighting' | 'powertrain' | 'safety' | 'climate' | 'electronics';

export interface FuseItem {
  code: string;
  type: 'fuse' | 'relay' | 'maxi' | 'terminal';
  name: string;
  rating?: string;
  ratingValue?: number;
  color?: string;
  powerType: FusePowerType;
  category: FuseCategory;
  description?: string;
  locationDetails?: string;
  notes?: string;
}

export interface FuseBox {
  id: string;
  code: string;
  title: string;
  location: string;
  image?: string;
  items: FuseItem[];
  tips?: string[];
}

export type DtcCategory = string;

export interface DtcCodeItem {
  code: string;
  desc: string;
  category: DtcCategory;
  system: string;
  isGeneric: boolean;
}

export interface VehicleSpecItem {
  name: string;
  value: string;
  standardOrSpec?: string;
  notes?: string;
}

export interface VehicleSpecCategory {
  id: string;
  title: string;
  icon: string;
  specs: VehicleSpecItem[];
}

export interface SystemGlossaryItem {
  abbrev: string;
  desc: string;
}

export interface SchemeItem {
  id: string;
  title: string;
  category: string;
  categoryTitle: string;
  section: string;
  image: string;
  originalFile: string;
}
