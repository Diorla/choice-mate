export default function getBinomialNumber(low: number, high: number): number {
  const range = high - low;
  const mean = (low + high) / 2;
  const variance = Math.pow(range / 4, 2); // Variance is a quarter of the range squared
  const standardDeviation = Math.sqrt(variance);

  // Using Box-Muller transform to generate random numbers following a normal distribution
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  // Scale the standard normal distribution to the desired range
  const scaledValue = z * standardDeviation + mean;

  // Ensure the result is within the specified range
  return Math.min(Math.max(scaledValue, low), high);
}
