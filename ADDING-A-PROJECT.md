# Add a project

1. Copy `projects/ctrlmark/` to `projects/<slug>/`.
2. Edit that folder's `index.html`: title, kicker, summary, status. Keep the shared stylesheet link as `/css/site.css`.
3. Add one object to the `projects` array in `data/projects.json`.
4. Push `main`.

No build step. Do not add a new domain per project.

## Registry fields

| Field | Required | Notes |
| --- | --- | --- |
| slug | yes | Folder name under `projects/`. Lowercase, hyphens. |
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
