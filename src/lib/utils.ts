import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAssetPath = (path: string) => {
  const base = process.env.NODE_ENV === 'production' ? '/crowguide' : '';
  return `${base}${path}`;
};