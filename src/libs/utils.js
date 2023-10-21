import { toast } from "sonner";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast("Copied to clipboard");
};
