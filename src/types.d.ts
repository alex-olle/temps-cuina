export type Link = {
  url: string;
  text: string;
  icon: any;
};

export type Element = {
  name: string;
  time: number;
};

export interface IntensityElement extends Element {
  intensity: "Alta" | "Mitja" | "Baixa";
}

export interface TemperatureElement extends Element {
  temperature: number;
}
