export const stakeholderRoles = [
  { value: "working-professional", label: "Working Professionals" },
  { value: "student", label: "Student" },
  { value: "alumni", label: "Alumni" },
  { value: "institution", label: "Educational Institution" },
  { value: "training-provider", label: "Training Provider" },
  { value: "university-abroad", label: "University Abroad" },
  { value: "counsellor", label: "Career Counsellor" },
  { value: "employer", label: "Employer / HR" },
  { value: "staffing-firm", label: "Staffing Firm" },
  { value: "strategic-partner", label: "Strategic Partner" },
  { value: "sponsor", label: "Sponsor (CSR / Govt / NGO)" },
  { value: "bank", label: "Bank / Financial Institution" },
] as const

/** Set NEXT_PUBLIC_APP_URL (e.g. https://app.talent360x.com) once the product workspace is live. */
export const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "").replace(/\/$/, "")

/** Every "Sign In" link goes straight to the product login when the app URL is configured. */
export const loginUrl = appUrl ? `${appUrl}/login` : "/signin"
export const registerUrl = appUrl ? `${appUrl}/register` : "/signup"
