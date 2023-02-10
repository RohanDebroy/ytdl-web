declare module "simple-duration" {
  export function parse(duration: string): number;
  export function stringify(duration: number): string;
}
