import { ButtonLink } from "../ui/Button";
import { VideoFacade } from "./VideoFacade";

function LiveEmbed({ url, name }) {
  return (
    <figure className="overflow-hidden rounded-md border border-hairline bg-surface">
      <div className="aspect-[16/10]">
        <iframe
          src={url}
          title={`${name}, live site`}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          className="size-full"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 border-t border-hairline px-4 py-3">
        <span className="truncate font-mono text-micro text-fg-subtle">{new URL(url).host}</span>
        <ButtonLink href={url} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">
          Open live site
        </ButtonLink>
      </figcaption>
    </figure>
  );
}

function ImageGrid({ images }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {images.map((image) => (
        <li key={image.src} className="aspect-video overflow-hidden rounded-md border border-hairline bg-surface">
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="size-full object-cover" />
        </li>
      ))}
    </ul>
  );
}

/**
 * Case-study media. Each block renders only when the project has it, so a project without media renders nothing.
 *
 * @param {object} props
 * @param {import("../../data/projects").Project} props.project
 */
export function ProjectMedia({ project }) {
  const { video, poster, images = [], liveEmbed } = project.media ?? {};
  if (!video && images.length === 0 && !liveEmbed) return null;

  return (
    <div className="flex flex-col gap-4">
      {video && <VideoFacade video={video} poster={poster} />}
      {images.length > 0 && <ImageGrid images={images} />}
      {liveEmbed && <LiveEmbed url={liveEmbed} name={project.name} />}
    </div>
  );
}
