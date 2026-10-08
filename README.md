# AI Growth, Marketing & Sales Automation Portfolio

**B2B growth systems, AI enablement and repeatable GTM workflows**

A curated technical portfolio with **two acquisition automation prototypes** and **a broader set of AI assistant designs across marketing and sales**. Organized by the business function supported rather than by tool name.

> **How to read this:** The n8n workflows are inactive prototypes with sanitized JSON. The GPT case studies are capability descriptions drawn from an internal AI Tool Library, not live access to the tools or exported GPT configurations. No unverified deployment or ROI claims are made.

## Browse by function

| Area | What you'll find | Start here |
|---|---|---|
| **[01 — Acquisition Systems](acquisition/README.md)** | Intent signals, contact scoring, account qualification, routing and proposed outreach orchestration | [Rep Empowerment Engine](docs/rep-empowerment.md) |
| **[02 — Marketing AI Enablement](marketing/README.md)** | Paid media, conversion, SEO/GEO, product messaging, field marketing, webinars, content repurposing and advocacy | [Marketing examples](marketing/README.md) |
| **[03 — Sales AI Enablement](sales/README.md)** | Account intelligence, BDR personalization, proof retrieval, RFP responses, competitor comparisons and sales coaching | [Sales examples](sales/README.md) |

## Featured architecture

```mermaid
flowchart LR
    A["Buying signal / dormant opportunity"] --> B["Account and contact evaluation"]
    B --> C["Decision rules / segmentation"]
    C --> D["Seller action or nurture"]
```

- **[Rep Empowerment Engine](docs/rep-empowerment.md)** — 22-node synthetic n8n example: webhook, mock contact enrichment, deterministic engagement/intent scoring and three-tier routing. [View JSON](workflows/rep-empowerment-demo.json).
- **[Closed-Lost Reactivation](docs/reactivation.md)** — 42-node architecture prototype: loss reason, reactivation signals, contact resolution and proposed multichannel orchestration. [View JSON](workflows/closed-lost-reactivation-architecture.json).

## Marketing capability map

| Capability | Example |
|---|---|
| Conversion and landing pages | [Landing-page architecture](marketing/landing-page-architecture.md) |
| Paid search and creative testing | [Paid acquisition copy](marketing/paid-search-copy.md) |
| Paid social | [LinkedIn ad creative](marketing/linkedin-ad-creative.md) |
| Organic demand / GEO | [GEO and SEO content](marketing/geo-seo-content.md) |
| Field and event campaigns | [Trade show campaign kit](marketing/trade-show-campaigns.md) |
| Webinar lifecycle | [Webinar campaign drafting](enablement/webinar-lifecycle-campaigns.md) |
| Content operations | [Webinar repurposing](marketing/webinar-content-repurposing.md) |
| Employee advocacy | [Advocacy content](marketing/employee-advocacy.md) |
| Product marketing | [Knowledge-grounded product messaging](marketing/product-messaging-system.md) |

## Sales capability map

| Capability | Example |
|---|---|
| Account planning | [Account strategy copilot](enablement/account-strategy-copilot.md) |
| Signal-led prospecting | [BDR account research](enablement/signal-led-bdr-research.md) |
| Persona-led outreach | [Role-tailored email personalization](sales/role-tailored-outreach.md) |
| Source-backed proof | [Evidence-grounded messaging](enablement/evidence-grounded-messaging.md) |
| Proposal automation | [RFP response assistant](enablement/source-grounded-rfp-responses.md) |
| Competitive intelligence | [RFP vendor comparisons](sales/competitive-rfp-analysis.md) |
| Rep coaching | [Competitive objection practice](sales/objection-practice.md) |

## Technical inspection and limits

- [Synthetic JavaScript scoring example](examples/scoring-demo.js)
- [n8n import limitations](WORKFLOW-IMPORT-NOTES.md)
- [Technical notes](docs/technical-notes.md)
- [Sharing and ownership review checklist](SHARING-CHECKLIST.md)

The GPT case studies are **not functional replicas** and do not redistribute proprietary prompts or knowledge bases. The examples showcase tool design, constrained outputs and documented workflows. Review access rights before sharing outside this private repository.
