export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For QA Engineers &amp; Automation Developers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Your Browser Automation
          <span className="text-[#58a6ff]"> Snippet Library</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop rewriting the same Puppeteer and Playwright code. Save, tag, search, and reuse your best automation snippets in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start for $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
        {/* Code preview */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">login-flow.ts</span>
            <span className="ml-auto text-xs bg-[#0d1117] border border-[#30363d] rounded px-2 py-0.5 text-[#58a6ff]">#auth</span>
            <span className="text-xs bg-[#0d1117] border border-[#30363d] rounded px-2 py-0.5 text-[#58a6ff]">#playwright</span>
          </div>
          <pre className="text-sm text-[#c9d1d9] overflow-x-auto">
            <code>{
`await page.goto('https://example.com/login');
await page.fill('#email', user.email);
await page.fill('#password', user.password);
await page.click('button[type="submit"]');
await page.waitForURL('/dashboard');`
            }</code>
          </pre>
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">&#128269;</div>
            <h3 className="font-semibold text-white mb-1">Instant Search</h3>
            <p className="text-sm text-[#8b949e]">Find any snippet by keyword, tag, or framework in milliseconds.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">&#127991;</div>
            <h3 className="font-semibold text-white mb-1">Smart Tagging</h3>
            <p className="text-sm text-[#8b949e]">Organize by framework, use-case, or custom tags you define.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">&#128257;</div>
            <h3 className="font-semibold text-white mb-1">Team Sharing</h3>
            <p className="text-sm text-[#8b949e]">Share collections with your QA team or keep them private.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited snippets",
              "Full-text search",
              "Custom tags & collections",
              "Puppeteer + Playwright support",
              "Team sharing (up to 5 members)",
              "Export to Gist / clipboard"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-center"
          >
            Get Started — $9/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secure checkout via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it support both Puppeteer and Playwright?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can tag snippets by framework and filter your library to show only Puppeteer, only Playwright, or both at once.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I import snippets I already have?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Paste code directly, import from a GitHub Gist URL, or bulk-upload a JSON file of your existing snippet collection.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens if I cancel my subscription?</h3>
            <p className="text-[#8b949e] text-sm">You keep read-only access to your snippets until the end of your billing period. You can export everything before cancelling — no data lock-in.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} SnippetBot. Built for automation engineers.</p>
      </footer>
    </main>
  );
}
