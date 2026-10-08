# Segmented Webinar Lifecycle Campaign Assistant

**Function:** Webinar demand generation, campaign operations and nurture strategy  

## Problem

A webinar is a multi-stage lifecycle program. The message that wins a registration is different from what an attendee, no-show or non-registrant should receive afterward. Rebuilding every message individually increases handoff overhead and can create inconsistent offers.

## Designed workflow

```mermaid
flowchart TD
 A["Webinar brief / source assets / registration URL"] --> B["Extract facts, speakers and takeaways"]
 B --> C["Apply approved tone, CTA and email structure"]
 C --> D["Pre-event message arc"]
 D --> E["3 pre-event drafts: announce / value / last chance"]
 C --> F["Post-event audience split"]
 F --> G["Attendee: next step"]
 F --> H["No-show: on-demand recap"]
 F --> I["Non-registrant: new hook"]
 E --> J["Six-email campaign package + review"]
 G --> J
 H --> J
 I --> J
```

## What it actually delivers

A **six-email package** from a single webinar brief, URL or supporting document, with three coordinated pre-event messages and three post-event audience-specific messages. Each uses an exact output structure with subject line, preview text, body, three bullets, CTA and a standard module. The sequence follows a narrative arc with audience-specific CTAs, including on-demand links.

## Operational value

The benefit is **standardized lifecycle coverage and cleaner campaign production**: field/content teams supply a common brief, demand generation gets a consistent sequence, and the post-event variations have a clear rationale based on recipient behavior. This creates reusable campaign logic rather than six isolated pieces of writing.

This creates a consistent campaign handoff, with messaging logic tailored to each post-event audience segment.

**Performance measures:** Time from webinar brief to approved lifecycle package, changes required before launch, audience-specific conversion rate and influenced pipeline measured downstream.

[← Marketing portfolio](../marketing/README.md)
