import dimensions from "@/data/image-dimensions.json";

const dims = dimensions as Record<string, { width: number; height: number }>;

export function imageSize(src: string): { width: number; height: number } {
  const d = dims[src];
  if (!d) {
    throw new Error(`Missing image dimensions for ${src}. Regenerate src/data/image-dimensions.json.`);
  }
  return d;
}
