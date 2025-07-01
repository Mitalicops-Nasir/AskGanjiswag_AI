import { clsx, type ClassValue } from "clsx"
import { createHash } from "crypto";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function hashQuery(query: string): string {
  return createHash('sha256').update(query.trim().toLowerCase()).digest('hex');
}