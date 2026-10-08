# Makers Shack

Public site for [makers-shack.com](https://makers-shack.com).

Programming, 3D printing, hobby electronics, and small tools. Each public thing is a project. ctrlmark is the first one.

This repo is public on purpose. The Lutz family vault stays in the private `lutz-command-center` repo and on `house.lwtec.com`. Do not put health, money, or house notes here.

## Shape

```
data/projects.json          registry. the home page and /projects/ read this
projects/<slug>/index.html  one folder per project
css/site.css                shared look
js/site.js                  draws the project list from the registry
```

A project shows up on the site only if it is in `data/projects.json`. The folder is the page. The JSON is the card.

## Add a project

See [ADDING-A-PROJECT.md](ADDING-A-PROJECT.md).

## Publish

Cloudflare Pages, same account as `lwtec.com`, separate zone and separate project.

- Build command: none
- Output directory: `/` (repo root)
- Production branch: `main`
- Custom domain: `makers-shack.com` (and `www` if you want it)

Hover stays the registrar. Point nameservers at the new Cloudflare zone, then attach the domain in Pages. Recreate any Hover email forwards in Cloudflare Email Routing after the nameserver cutover.

`/ctrlmark/` redirects to `/projects/ctrlmark/` so the first URL still works.
