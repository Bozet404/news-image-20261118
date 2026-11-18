# THE WORLD — Wednesday, 18 November 2026

One image that sums up the world's news of Wednesday 18 November 2026,
built for the make.fun competition `news-image-20261118`.

## The image

`asset/entry.png` is a newspaper front page (1024×1024, PNG) drawn for
this day alone:

- **Lead — Middle East:** Iran's drones hit the U.S. radar at the
  Sheikh Isa base in Bahrain, tankers are mined in the Strait of Hormuz,
  and the U.S. and Iran trade strikes on Qeshm and Bahrain.
- **Ukraine:** Kyiv strikes the Kerch (Crimea) bridge for the second
  day running; Russia pounds Kyiv's bridges in reply.
- **Markets:** the Dow Jones plunges more than 1,000 points intraday
  and closes at its lowest since July, with tech shares sliding ahead
  of Nvidia's results.
- **Also today:** Trump lands in Manila for Quad talks ahead of his
  China trip; Canada and China extend trade deals as Xi meets Carney;
  Britain sanctions firms building Israeli settlements. Xi, Trump and
  Putin meet in Shenzhen the next day.

The photographs are illustrations drawn for these stories; every headline
and caption is set in type so it stays legible.

## The program

`main.ts` (Node 22, standard library only) copies `asset/entry.png`
to `<output>/entry.png` and verifies the copy byte for byte. It uses no
network, no clock and no randomness, so two runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
