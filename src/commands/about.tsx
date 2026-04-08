import { portfolioData } from '../data/portfolio'

const ASCII_NAME = `
  █████╗ ███████╗██╗  ██╗██╗     ███████╗███████╗██╗  ██╗ █████╗
 ██╔══██╗██╔════╝██║  ██║██║     ██╔════╝██╔════╝██║  ██║██╔══██╗
 ███████║███████╗███████║██║     █████╗  ███████╗███████║███████║
 ██╔══██║╚════██║██╔══██║██║     ██╔══╝  ╚════██║██╔══██║██╔══██║
 ██║  ██║███████║██║  ██║███████╗███████╗███████║██║  ██║██║  ██║
 ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝`

export function AboutOutput() {
  return (
    <div className="animate-fade-in mt-2 space-y-4">
      <pre className="text-terminal-green text-[7px] leading-[9px] overflow-x-auto glow-green hidden md:block">
        {ASCII_NAME}
      </pre>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-terminal-green font-bold text-base">
              {portfolioData.name}
            </span>
            <span className="text-terminal-muted text-xs border border-terminal-border px-2 py-0.5 rounded">
              {portfolioData.title}
            </span>
          </div>
          <div className="text-terminal-muted text-xs space-y-1">
            <p>
              <span className="text-terminal-purple">degree</span>
              <span className="text-terminal-muted mx-2">→</span>
              <span className="text-gray-300">{portfolioData.primaryDegree}</span>
            </p>
            <p>
              <span className="text-terminal-purple">degree</span>
              <span className="text-terminal-muted mx-2">→</span>
              <span className="text-gray-300">{portfolioData.secondDegree}</span>
            </p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-gray-300 leading-relaxed">{portfolioData.bio}</p>
          <div className="flex gap-2 flex-wrap mt-2">
            {portfolioData.interests.map((interest) => (
              <span
                key={interest}
                className="text-xs bg-terminal-purple/10 text-terminal-purple border border-terminal-purple/30 px-2 py-0.5 rounded"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
