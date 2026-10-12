import tollRelief from "@/assets/benefit-toll-relief.jpg";
import safety from "@/assets/benefit-safety.jpg";
import wages from "@/assets/benefit-wages.jpg";
import carbon from "@/assets/benefit-carbon.jpg";
import ev from "@/assets/benefit-ev.jpg";

export const benefits = [
  { id: "toll-relief", name: "Toll Relief", category: "Transport", image: tollRelief, description: "Quarterly toll rebates for eligible small-business vehicles.", value: "Up to $1,000" },
  { id: "safety-rebates", name: "Safety Equipment Rebates", category: "Workplace", image: safety, description: "Co-funding for approved workplace safety equipment.", value: "Up to $1,000" },
  { id: "wage-subsidies", name: "Wage Subsidies", category: "Employment", image: wages, description: "Support when hiring eligible new team members.", value: "Up to $10,000" },
  { id: "carbon-credits", name: "Carbon Credit Scheme", category: "Sustainability", image: carbon, description: "Turn verified emissions reductions into tradable credits.", value: "Market based" },
  { id: "ev-incentives", name: "Electric Vehicle Incentives", category: "Transport", image: ev, description: "Rebates and concessions for eligible electric business vehicles.", value: "Multiple savings" },
];

export const submissions = [
  {
    id: "ev-stamp-duty-waiver",
    name: "EV Stamp Duty Waiver",
    reference: "FY-28419",
    status: "Under assessment",
    progress: 68,
    submitted: "8 September 2026",
    updated: "16 September 2026",
    amount: "$2,940 estimated saving",
    next: "Eligibility review expected by 30 October",
    detail: "Your vehicle purchase invoice and business registration have been verified. The assessing team is now confirming vehicle eligibility.",
  },
  {
    id: "reservists-employee-scheme",
    name: "Reservists Employee Scheme",
    reference: "FY-27902",
    status: "Documents requested",
    progress: 42,
    submitted: "29 August 2026",
    updated: "14 September 2026",
    amount: "$1,860 estimated payment",
    next: "Upload the employee service confirmation",
    detail: "Your employer details are confirmed. One service confirmation document is required before assessment can continue.",
  },
];