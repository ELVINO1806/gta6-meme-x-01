# GTA 6 meme for make.fun — "The Back-Seat Ghost"

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ELVINO1806/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ELVINO1806/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).

## The meme

Thirteen years of waiting, and launch night in Leonida finally arrives: a Lucia-like driver
floors a neon convertible down a palm-lined Vice City boulevard, grinning like she owns the
state, while her passenger grips his hands together and stares back in horror — because
there is a third rider. In the back seat sits the make.fun ghost itself, sparkle-eyed and
delighted, phone in one hand and its magenta star coin in the other, riding along like it
paid for the Uber. A magenta billboard over the boulevard says the rest: make.fun. The joke
is that nobody summoned him and nobody can drop him off — he is part of the crew now, and he
is the only one in the car earning money tonight.

The picture is `meme.png` in this repository. It is the first (and only) picture of the post.

## The post

The post goes up on X from @geordiomint, with the meme attached and this play code in its
text:

    makefun-abacus-origami-wave

`POST.json` at the root names the post's address. It currently holds a placeholder id;
the real status id replaces it the moment the post is live, before the entry is submitted.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` to the output directory,
which is all this bounty's program has to do — the house reads the post itself from X:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
