export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-2xl font-bold">Terms of Use</h1>

      <p className="text-sm text-muted-foreground">
        NitiHR – HR Policy Assistant is an educational tool that generates draft
        HR policy templates and general guidance based on public information
        about Indian labour laws and HR practices.
      </p>

      <p className="text-sm text-muted-foreground">
        The assistant does <strong>not</strong> provide legal advice, does not
        create a lawyer–client relationship, and cannot guarantee compliance
        with any specific central or state law. All outputs must be reviewed,
        customised and approved by a qualified HR professional or licensed
        labour lawyer before implementation.
      </p>

      <p className="text-sm text-muted-foreground">
        By using this assistant you accept that you are solely responsible for
        any decisions and actions taken based on its responses. The creators,
        operators and hosting providers of this application are not liable for
        any loss, damages, penalties or disputes arising from its use.
      </p>
    </main>
  );
}
