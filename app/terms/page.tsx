import { OWNER_NAME } from "@/config";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold">Terms of Use</h1>

      <p className="text-sm text-muted-foreground">
        This application is an experimental AI assistant created by {OWNER_NAME}.
        It is intended for learning and prototyping only.
      </p>

      <p className="text-sm text-muted-foreground">
        The assistant may help draft HR policy text and explain Indian labour
        concepts in simple language. However, it does{" "}
        <strong>not provide legal advice</strong>, does not create a
        lawyer–client relationship, and does not guarantee compliance with any
        central or state law or regulator requirements.
      </p>

      <p className="text-sm text-muted-foreground">
        All outputs are draft suggestions only and must be reviewed, customised,
        and formally approved by a qualified HR professional and/or licensed
        labour lawyer before implementation in any organisation.
      </p>

      <p className="text-sm text-muted-foreground">
        By using this application you agree that you are solely responsible for
        any decisions and actions taken on the basis of its responses, and that
        the creators, contributors, and hosting providers of this project are
        not liable for any loss, damage, penalties, or disputes arising from its
        use.
      </p>
    </main>
  );
}

