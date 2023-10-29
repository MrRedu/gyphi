import { toast } from "sonner";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard");
};
