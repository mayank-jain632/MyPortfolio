// Small line illustrations for the two wide tiles. Decorative.

const TREE_NODES = [
  [210, 28],
  [105, 100], [315, 100],
  [52, 172], [158, 172], [262, 172], [368, 172],
  [26, 244], [78, 244], [132, 244], [184, 244], [236, 244], [288, 244], [340, 244],
];
const parentOf = (index) => Math.floor((index - 1) / 2);

function Tree() {
  return (
    <svg viewBox="0 0 394 270" fill="none" className="size-full text-fg/25" stroke="currentColor" strokeWidth="1.25">
      {TREE_NODES.slice(1).map(([x, y], index) => {
        const [px, py] = TREE_NODES[parentOf(index + 1)];
        return <path key={`${x}-${y}`} d={`M${px} ${py + 9} C${px} ${(py + y) / 2} ${x} ${(py + y) / 2} ${x} ${y - 9}`} />;
      })}
      {TREE_NODES.map(([x, y], index) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="9" className={index === 0 ? "fill-accent-fill stroke-accent-fill" : ""} />
      ))}
    </svg>
  );
}

const SHELF_FILL = [9, 3, 7, 1];

function Shelves() {
  return (
    <svg viewBox="0 0 420 262" fill="none" className="size-full text-fg/25" stroke="currentColor" strokeWidth="1.25">
      {SHELF_FILL.map((filled, row) => (
        <g key={row}>
          {Array.from({ length: 10 }, (_, column) => (
            <rect
              key={column}
              x={14 + column * 40}
              y={22 + row * 62}
              width="32"
              height="36"
              rx="5"
              className={column < filled ? "fill-fg/15" : ""}
              strokeDasharray={column < filled ? undefined : "3 3"}
            />
          ))}
          {filled < 4 && (
            <path
              d={`M8 ${18 + row * 62} L412 ${12 + row * 62} L412 ${66 + row * 62} L8 ${62 + row * 62} Z`}
              className="stroke-accent"
              strokeDasharray="5 4"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

const ART = { "aws-agentic-ai": Tree, "family-dollar-shelf-vision": Shelves };

/** @param {{ slug: string }} props */
export function TileArt({ slug }) {
  const Art = ART[slug];
  if (!Art) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute bottom-10 right-10 hidden h-[62%] w-[42%] md:block">
      <Art />
    </div>
  );
}
