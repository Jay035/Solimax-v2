export default function AppendPercentToInput(
  value: any,
  setValue: (e: any) => void
) {
  // Append '%' to the input value and update the state
  if (value.contains("%")) return;
  else {
    setValue(value + "%");
  }
}
