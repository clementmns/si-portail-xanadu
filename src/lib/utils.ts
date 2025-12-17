import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openERP = () => {
  window.open('https://odoo.xanadu.com', '_blank', 'noopener,noreferrer');
};