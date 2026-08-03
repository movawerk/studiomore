# studio more website

Bilingual editorial website for **studio more Architekten PartGmbB**, built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). German is served at `/`; the complete English site is under `/en`.

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment variables

Copy these values into `.env.local` as required:

```bash
# Canonical production origin, without a trailing slash
NEXT_PUBLIC_SITE_URL=https://studio-more.de

# Contact form delivery through the Resend REST API
RESEND_API_KEY=
CONTACT_TO_EMAIL=office@studio-more.de
CONTACT_FROM_EMAIL=website@studio-more.de
```

If `RESEND_API_KEY` is absent, the contact action returns a clear unavailable state and asks the visitor to email the studio. It never simulates a successful submission. The sender domain must be verified with Resend before launch.

## Project structure

- `src/app/(de)` — German routes and German root document
- `src/app/en` — English routes and English root document
- `src/components/pages` — editorial page compositions
- `src/components` — reusable navigation, filters, gallery, form and content components
- `src/data/projects.ts` — typed project content and gallery sequencing
- `src/data/news.ts` — typed news archive
- `src/data/services.ts` — typed service content
- `src/data/team.ts` — founders, team and principles
- `src/data/faq.ts` — grouped bilingual FAQ content
- `public/images` — locally stored, customer-owned project and news imagery
- `src/data/image-dimensions.json` — explicit image dimensions used by `next/image`
- `docs/CONTENT-TODO.md` — unresolved launch and content checks

## Adding a project

1. Add optimized image files below `public/images/projects/<slug>/`.
2. Add a typed `Project` entry to `src/data/projects.ts`.
3. Provide German and English alt text for every image; add factual captions where available.
4. Set `published: true` only when the copy and facts are confirmed.
5. Add dimensions for every new asset to `src/data/image-dimensions.json` using the same public URL key used by the project entry.
6. Run the full quality checks. Static project routes and the sitemap are generated from published data automatically.

Never duplicate unknown copy from another project. Use `published: false` and `contentStatus: "needs-confirmation"` until the client supplies correct content.

## Translation workflow

The URL map and language-preserving route switching live in `src/lib/i18n.ts`. Shared navigation/UI labels live in `src/lib/dictionary.ts`; longer page copy is colocated with the relevant page component. Project, news, service, team and FAQ data use `{ de, en }` values.

When adding or changing content, update both languages in the same change and verify the DE/EN switcher from the corresponding detail route.

## Forms and privacy

The contact form uses a Server Action with server-side validation, a honeypot and explicit error states. Form data is sent only after the visitor consents. If delivery infrastructure, analytics, hosting, embedded media or other third-party services change, the privacy notice must be updated before deployment.

## Deployment

The app can be deployed to any Node-compatible Next.js host. Configure the production environment variables, run `npm run build`, and serve with `npm start`. Keep image optimization enabled. Set `NEXT_PUBLIC_SITE_URL` to the final canonical domain before building.

## Launch requirements

The legal text, office address, image rights/credits, service scope and professionally sensitive FAQ answers require client or legal review. See [`docs/CONTENT-TODO.md`](docs/CONTENT-TODO.md) for the complete checklist.
