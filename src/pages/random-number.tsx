import { useState } from "react";
import Layout from "./layout";
import Input from "@/components/Input";
import getBinomialNumber from "@/utils/getBinomialNumber";
import Checkbox from "@/components/CheckBox";
import styles from "@/styles/RandomNumber.module.css";

export default function RandomNumber() {
  const [value, setValue] = useState([0]);
  const [formValue, setFormValue] = useState({
    min: 0,
    max: 1,
    isBinomial: false,
    isWholeNumber: false,
    size: 1,
  });

  const getRandomNumber = () => {
    let value = [];
    for (let i = 0; i < formValue.size; i++) {
      if (formValue.isBinomial) {
        value.push(getBinomialNumber(formValue.min, formValue.max));
      } else {
        value.push(
          Math.random() * (formValue.max - formValue.min) + formValue.min
        );
      }
    }
    setValue(
      value.map((item) => (formValue.isWholeNumber ? Math.floor(item) : item))
    );
  };

  return (
    <Layout>
      <main style={{ padding: 8 }}>
        <h1>Random Number</h1>
        <button onClick={getRandomNumber}>Generate</button>
        <div>
          <section style={{ position: "sticky", top: 0 }}>
            <Input
              type="number"
              label="Min"
              value={formValue.min}
              setValue={(value) => {
                const min = Number(value);
                const max = formValue.max;
                setFormValue({
                  ...formValue,
                  min,
                  max: min < max ? max : min + 1,
                });
              }}
            />
            <Input
              type="number"
              label="Max"
              value={formValue.max}
              setValue={(value) => {
                const max = Number(value);
                const min = formValue.min;
                setFormValue({
                  ...formValue,
                  max,
                  min: min < max ? min : max - 1,
                });
              }}
            />
            <Input
              type="number"
              label="Size"
              value={formValue.size}
              setValue={(value) => {
                const currValue = Number(value);
                setFormValue({
                  ...formValue,
                  size: currValue < 1 ? 1 : currValue,
                });
              }}
            />
            <Checkbox
              label="Use whole number"
              checked={formValue.isWholeNumber}
              toggleCheck={() =>
                setFormValue({
                  ...formValue,
                  isWholeNumber: !formValue.isWholeNumber,
                })
              }
            />
            <Checkbox
              label="Use binomial distribution"
              checked={formValue.isBinomial}
              toggleCheck={() =>
                setFormValue({
                  ...formValue,
                  isBinomial: !formValue.isBinomial,
                })
              }
            />
          </section>
          <div className={styles.grid}>
            {value.map((item, idx) => (
              <output key={idx} style={{ textAlign: "center" }}>
                {formValue.isWholeNumber ? item : item.toFixed(2)}
              </output>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
