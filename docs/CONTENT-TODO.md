# Content and launch checklist

This file is internal and must not be rendered on the public website.

## Client confirmation required

- **Office address:** the current website lists `Forststraße 9, 70174 Stuttgart`; another public profile has listed a different address. Confirm the postal address before launch and update `src/lib/site.ts`, the legal pages and structured data together.
- **Service scope:** confirm the exact planning scope and any claims about HOAI phases before publishing them on the services page. `src/data/services.ts` deliberately keeps `servicePhaseStatus: "needs-confirmation"`.
- **Unpublished projects:** `Catholic Church in Transformation`, `MS 16`, `HW 99` and `Senegal School` remain unpublished because reliable project-specific copy and/or facts are missing. The first two contained duplicated K21 Hotel+ text on the old website.
- **Project facts:** re-confirm periods, status, consultants and scope for every published project before final client approval.
- **Team:** confirm the current team list and preferred spelling of every name at launch.
- **Contact details:** confirm telephone, email, WhatsApp and Instagram links.

## Legal and privacy review

- Have the imprint and privacy notice reviewed professionally before launch.
- Review the old imprint’s reference to `§ 5 TMG` and update it to the currently applicable `§ 5 DDG` if advised.
- Confirm VAT/tax identifiers, chamber membership numbers, insurer and policy number.
- Confirm the production host and name it in the privacy notice where required.
- Confirm Resend (or the final form-delivery provider), processing location, data-processing agreement and retention policy.
- Reflect any future analytics, consent management, embedded maps, externally hosted fonts, video or social-media embeds before enabling them.
- No third-party map or media embed is currently loaded.

## Images and credits

- Confirm that studio more holds web-publication rights for every asset in `public/images`.
- Supply and verify photographer, visualisation, competition and collaborator credits where applicable.
- Do not invent missing credits. Add them to the typed data only after confirmation.
- Review alternative text and captions with the project team for technical accuracy.

## FAQ professional review

Entries flagged `needs-professional-review` in `src/data/faq.ts` discuss prices, durations, HOAI, GEG, KfW/BAFA funding, planning law or technical regulations. An architect or relevant professional must review them for accuracy and currency immediately before publication.

## Production setup

- Set `NEXT_PUBLIC_SITE_URL` to the canonical origin.
- Verify the contact-form sender domain and set all email environment variables.
- Submit and test the sitemap and robots endpoint.
- Run keyboard, screen-reader smoke, mobile, tablet and desktop checks after the final content freeze.
