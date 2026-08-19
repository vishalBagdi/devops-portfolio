function TerminalWindow({ lines }) {
  return (
    <div className="terminal-window">
      <div className="terminal-window__header">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-[var(--terminal-red)]" />
          <span className="terminal-dot bg-[var(--terminal-yellow)]" />
          <span className="terminal-dot bg-[var(--terminal-green)]" />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
          portfolio.init
        </span>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-orange)]">
            Terminal Preview
          </p>
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
            Technical UI primitives are ready.
          </h2>
        </div>

        <div className="space-y-3">
          {lines.map((line) => (
            <div key={line.command} className="terminal-line">
              <span className="terminal-prompt">{line.prompt}</span>
              <span className="terminal-command">{line.command}</span>
              <span className="terminal-result">{line.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TerminalWindow
