import { projects } from '../data/portfolio'

export function ProjectsOutput() {
  return (
    <div className="animate-fade-in mt-2 space-y-2">
      <p className="text-terminal-muted text-xs mb-3">
        {projects.length} projects · click to view source
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-terminal-border p-3 rounded hover:border-terminal-green/50 transition-all duration-200 group hover:bg-terminal-green/5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-terminal-green font-bold group-hover:glow-green transition-all">
                {p.name}
              </p>
              <div className="flex gap-1.5 shrink-0">
                {p.live && p.live !== '#' && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] text-terminal-cyan border border-terminal-cyan/30 px-1.5 py-0.5 rounded hover:bg-terminal-cyan/10"
                  >
                    live ↗
                  </a>
                )}
                <span className="text-[10px] text-terminal-muted border border-terminal-border px-1.5 py-0.5 rounded">
                  src ↗
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{p.desc}</p>
            <div className="flex gap-1 mt-2 flex-wrap">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-green-950/50 text-terminal-green/80 px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
