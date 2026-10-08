# Makers Shack

Public site for [makers-shack.com](https://makers-shack.com).

Programming, 3D printing, hobby electronics, and small tools. Each public thing is a project. ctrlmark is the first one.

This repo is public on purpose. The Lutz family vault stays in the private `lutz-command-center` repo and on `house.lwtec.com`. Do not put health, money, or house notes here.

## Shape

```
public/                     what Cloudflare serves
public/data/projects.json   registry. the home page and /projects/ read this
public/projects/<slug>/     one folder per project
wrangler.jsonc              tells Wrangler to serve public/
```

A project shows up on the site only if it is in `public/data/projects.json`. The folder is the page. The JSON is the card.

## Add a project

See [ADDING-A-PROJECT.md](ADDING-A-PROJECT.md).

## Publish

Cloudflare Worker deploy from this repo, same account as `lwtec.com`, separate project. Do not attach the house Worker. Do not turn on Cloudflare Access.

- Build command: empty
- Deploy command: `npx wrangler deploy`
- Assets directory: `public/`

Hover stays the registrar. Nameservers are already on Cloudflare. Attach `makers-shack.com` only after the zone is Active.
