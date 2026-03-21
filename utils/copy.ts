export function copyToClipboard(text: string) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy txt: ", err);
  });
}
