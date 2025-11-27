// lib/companyDocs.ts

// Very simple in-memory store for uploaded company docs.
// (It resets when the server restarts/redeploys – OK for demo.)

let docs: string[] = [];

export function addCompanyDoc(text: string) {
  if (!text) return;
  docs.push(text);
}

export function clearCompanyDocs() {
  docs = [];
}

export function getCompanyDocs(): string[] {
  return docs;
}
