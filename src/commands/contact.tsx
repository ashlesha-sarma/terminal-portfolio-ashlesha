import { contactLinks } from '../data/portfolio'

export function ContactOutput() {
  return (
    <div className="animate-fade-in mt-2 space-y-2">
      <p className="text-terminal-muted text-xs mb-3">
        I'm always open to interesting projects and conversations.
      </p>
      {contactLinks.map((link) => (
        <div key={link.label} className="flex items-center gap-4">
          <span className="text-terminal-green w-16 text-sm">{link.label}</span>
          <span className="text-terminal-muted">→</span>
          <a
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="text-terminal-blue hover:text-terminal-cyan hover:underline text-sm transition-colors"
          >
            {link.display}
          </a>
        </div>
      ))}
    </div>
  )
}
