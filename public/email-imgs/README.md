# Email design images

Drop your email-design images here, then update the `emailBrands` array in
`components/home/emails/Emails.tsx` to point at them.

Structure (a brand groups its campaign emails):

- `coverImg` — the card thumbnail for the brand (shown in the Email Design grid).
- `campaigns[]` — one entry per campaign email. Each has:
  - `imgSrc` — the campaign image (shown in the swipeable gallery modal).
  - `title` — optional heading for the campaign.
  - `description` — optional blurb shown under the campaign.

A brand can hold up to ~15 campaigns. In the modal they become a swipeable
carousel — drag/swipe, use the arrows or the arrow keys, or tap the dots to move
between campaigns (one campaign shown at a time).

Example paths used by the placeholder data:

```
/email-imgs/sephora-cover.png
/email-imgs/sephora-skincare.png
/email-imgs/sephora-summer.png
/email-imgs/sephora-fragrance.png
/email-imgs/sephora-holiday.png
/email-imgs/nike-cover.png
/email-imgs/nike-member-days.png
/email-imgs/nike-new-arrivals.png
```

Any web image format works (`.png`, `.jpg`, `.webp`). Campaign images can be
tall — each is scaled to fit the carousel (max height ~60% of the viewport).
