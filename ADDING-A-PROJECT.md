# Add a project

The live site is the `public/` folder. Wrangler ignores the repo root.

1. Copy `public/projects/ctrlmark/` to `public/projects/<slug>/`.
2. Edit that folder's `index.html`: title, kicker, summary, status. Keep the shared stylesheet link as `/css/site.css`.
3. Add one object to the `projects` array in `public/data/projects.json`.
4. Push `main`. Cloudflare redeploys.

No build step. Do not add a new domain per project. Do not turn on Cloudflare Access.

## Registry fields

| Field | Required | Notes |
| --- | --- | --- |
| slug | yes | Folder name under `public/projects/`. Lowercase, hyphens. |
| title | yes | Card and page name. |
| tag | yes | Short lane: `WoW addon`, `3D print`, `Electronics`, `Code`. |
| summary | yes | One or two sentences on the card. |
| status | yes | `idea`, `building`, `written`, `published`. |
| href | yes | Usually `/projects/<slug>/`. |

Example:

```json
{
  "slug": "ctrlmark",
  "title": "ctrlmark",
  "tag": "WoW addon",
  "summary": "First addon from the shack.",
  "status": "written",
  "href": "/projects/ctrlmark/"
}
```

Leave family, health, and money out of this repo.
