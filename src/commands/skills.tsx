import { skillGroups } from '../data/portfolio'

export function SkillsOutput() {
  return (
    <div className="animate-fade-in mt-2 space-y-3">
      {skillGroups.map(({ category, items }) => (
        <div key={category} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-terminal-purple text-xs font-bold uppercase tracking-wider w-28 shrink-0">
            {category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {items.map((skill, i) => (
              <span key={skill} className="text-sm text-gray-300">
                {skill}
                {i < items.length - 1 && (
                  <span className="text-terminal-border mx-1">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
