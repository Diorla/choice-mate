import { useId } from "react";

export default function Checkbox({
  label,
  checked,
  toggleCheck,
}: {
  label: string;
  checked: boolean;
  toggleCheck: () => void;
}) {
  const formId = useId();
  return (
    <div onClick={toggleCheck}>
      <input
        type="checkbox"
        id={formId}
        checked={checked}
        onChange={toggleCheck}
      />
      <label htmlFor={formId}>{label}</label>
    </div>
  );
}
