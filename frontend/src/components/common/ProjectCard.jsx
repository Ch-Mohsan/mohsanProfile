import Button from './Button'

function ProjectCard({ project, className = '', imageClassName = 'aspect-[16/10]' }) {
  return (
    <article className={`group transition duration-500 ${className}`}>
      <div className={`relative overflow-hidden border border-[#25334a] bg-[#0c1422] ${imageClassName}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050c18]/80 to-transparent" />
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif-display text-lg text-[#f2f6ff] md:text-xl">{project.title}</h3>
            <p className="mt-1 text-sm text-[#b8c0d3]">{project.description}</p>
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#be9e61]">
              {project.year}
            </span>
            {project.status ? (
              <span className="mt-1 block text-[9px] uppercase tracking-[0.22em] text-[#93a2bd]">
                {project.status}
              </span>
            ) : null}
          </div>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={`${project.title}-${tech}`} className="text-[10px] uppercase tracking-[0.2em] text-[#9ba8c1]">
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <Button href={project.liveLink} target="_blank" rel="noreferrer noopener" className="text-[10px]">
            Live Demo
          </Button>
          <Button href={project.githubLink} target="_blank" rel="noreferrer noopener" variant="ghost" className="text-[10px]">
            GitHub
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
