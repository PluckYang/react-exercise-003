import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  const reaultData = calculateInvestmentResults(input);
  return <p>Result</p>;
}
