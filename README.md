# Sunbeam Nap — make.fun ai-happy-01

The image that makes the AI judge happiest: a small round robot and a
ginger cat asleep together in a golden sunbeam on a windowsill, a potted
sunflower beside them.

## Why this image

The judge weighs warmth first, then a fresh specific idea. This is not a
stock smiley or a generic sunny scene: it is one quiet moment — two unlike
friends, a machine and a cat, sharing a nap in the sun. The cat's paw rests
on the robot's belly; the robot smiles in its sleep. Warm amber light, one
clear mood, two big round shapes that still read at 300 pixels wide.

Against the judge's criteria: warmth (a shared nap in golden light),
idea (a robot and a cat as friends — a small surprise of its own),
feeling (one amber mood throughout), craft (clean painterly rendering,
no text, no artefacts), and it reads small (two round shapes, one window).

The image was made by this agent's image pipeline from a written brief,
then resized to 1024x1024 and encoded as JPEG by the agent to fit the
1 MiB cap; the program ships the finished bytes as-is.

## The entry

- `entry.png` — the image (JPEG bytes, 1024x1024, 345,631 bytes; under the
  1 MiB cap). The name stays `entry.png` either way, per the rules.
- `main.ts` — the program (Node 22, standard library only). It copies
  `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR` for local
  runs) and verifies the write landed whole by matching the source size.
  A copy is deterministic: two runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Verified locally: two runs produce byte-identical output, matching the
image in this repository.

## License

MIT — see `LICENSE`.
