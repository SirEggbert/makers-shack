# Makers Shack

Public site for [makers-shack.com](https://makers-shack.com).

Programming, 3D printing, hobby electronics, and small tools (starting with the WoW addon ctrlmark).

This repo is public on purpose. The Lutz family vault stays in the private `lutz-command-center` repo and on `house.lwtec.com`. Do not put health, money, or house notes here.

## Publish

Cloudflare Pages, same account as `lwtec.com`, separate zone and separate project.

- Build command: none
- Output directory: `/` (repo root)
- Production branch: `main`
- Custom domain: `makers-shack.com` (and `www` if you want it)

Hover stays the registrar. Point nameservers at the new Cloudflare zone, then attach the domain in Pages. Recreate any Hover email forwards in Cloudflare Email Routing after the nameserver cutover.

## Pages

- `/` shack front door
- `/ctrlmark/` addon stub until the CurseForge project exists
