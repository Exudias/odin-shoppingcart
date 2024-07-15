export function capitaliseWord(string) 
{
  if (!string) return string;

  // Special case since API has a weird name for this
  if (string === "jewelery") return "Jewellery";

  return string.charAt(0).toUpperCase() + string.slice(1);
}