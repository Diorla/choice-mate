import { useId } from "react";
import styles from "@/styles/Component.module.css";

export default function Input({
  label,
  value,
  setValue,
  type,
}: {
  label: string;
  value: string | number;
  setValue: (value: string | number) => void;
  type?: "text" | "number";
}) {
  const formId = useId();
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={formId}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type || "text"}
        id={formId}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
