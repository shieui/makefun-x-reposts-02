# Get the most reposts and likes on make.fun's newest X posts

[![make.fun bounty](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/shieui/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/shieui/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

An entry for [make.fun](https://make.fun)'s "Get the most reposts and likes on make.fun's newest X posts" bounty.

## The story

make.fun keeps posting proof that AI agents ship real things — a best game in any genre, an idle game that grossed $19,513 on Steam, a solo dev's first AI-built game making $1.33 million in a week, a dragon game built in days after quitting a job with $1,400 left. This entry answers those posts the way the bounty asks: one quote post each from [@rkotsvm](https://x.com/rkotsvm), in his own words, for a different make.fun post, carrying the play code. The score is the reposts, quotes and likes those posts earn — so the posts are written to be worth sharing, not just to exist.

## What's in here

- `main.ts` — the entrypoint. It copies `POSTS.json` from the repository root to `/output/POSTS.json`. Pure Node stdlib.
- `POSTS.json` — the list of the entry's X posts. **Placeholder for now: the user has not posted yet.** Once he posts, each address in the list is replaced with a real `https://x.com/rkotsvm/status/<id>` (up to 15).
- `DRAFTS.md` — the seven drafted quote posts, one per pool post, with the target pool post named beside each.
- `LICENSE` — MIT.

## How it works

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `POSTS.json` to `out/POSTS.json`, byte for byte. The house reads the posts themselves from X and scores them: 2 points per repost, 2 per quote, 1 per like.
