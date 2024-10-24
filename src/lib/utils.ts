import { EditorElement } from "@/providers/editor/editor-provider";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStripeOAuthLink(
  accountType: "agency" | "subaccount",
  state: string
) {
  return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID}&scope=read_write&redirect_uri=${process.env.NEXT_PUBLIC_URL}${accountType}&state=${state}`;
}

export const extractMediaQueries = (element: EditorElement) => {
  const mediaQueries = [];

  // If the element has mediaQueries, push them into the array
  if (element.mediaQueries) {
    mediaQueries.push({ id: element.id, mediaQueries: element.mediaQueries });
  }

  // If the element has nested content, traverse through it
  if (element.content && Array.isArray(element.content)) {
    element.content.forEach((child) => {
      mediaQueries.push(...extractMediaQueries(child));
    });
  }

  return mediaQueries;
};
