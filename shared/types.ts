export interface Decision {
  id: number;
  slug: string;
  title: string;
  category: string;
  status: "Active" | "Under Review" | "Superseded" | "Pending";
  owner: string;
  date: string;
  decision: string;
  context: string;
  rationale: string;
}
