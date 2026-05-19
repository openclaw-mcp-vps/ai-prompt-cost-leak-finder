export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Find Hidden Costs in<br />
          <span className="text-[#58a6ff]">AI Prompt Chains</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze multi-step AI workflows to surface expensive prompt patterns, redundant API calls, and token waste — before they drain your budget.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Saving — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for free trial. Cancel anytime.</p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🔍", title: "Token Waste Detection", desc: "Pinpoint prompts consuming excess tokens with zero added value." },
            { icon: "♻️", title: "Redundant Call Finder", desc: "Identify duplicate or near-duplicate API calls across your pipeline." },
            { icon: "📊", title: "Cost Attribution", desc: "Break down spend by workflow step, model, and team member." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm py-10" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited log uploads",
              "Full prompt chain analysis",
              "Redundant call detection",
              "Token waste reports",
              "Cost attribution dashboard",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl py-10 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "What AI providers are supported?",
              a: "We support OpenAI, Anthropic, Cohere, and any provider that exposes standard API logs. You can upload raw JSON logs or connect via API key."
            },
            {
              q: "How do I get my logs into the tool?",
              a: "Upload exported log files (JSON/CSV) directly in the dashboard, or use our lightweight SDK to stream logs in real time from your application."
            },
            {
              q: "Is my data kept private?",
              a: "Yes. Logs are encrypted at rest and in transit, never used for training, and deleted on request. We are SOC 2 compliant."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} AI Prompt Cost Leak Finder. All rights reserved.
      </footer>
    </main>
  );
}
