# AI Growth & GTM Systems Portfolio

**Building repeatable systems across B2B marketing, sales enablement and acquisition.**

This portfolio documents AI assistant designs from an internal tool library alongside two independently reviewable, synthetic n8n prototypes. It focuses on the **marketing or sales problem, the system logic, and the deliverables teams use to execute**, rather than a catalog of generated copy.

> **Scope:** The assistant case studies are documented designs, not exported GPTs. The n8n workflows are inactive technical prototypes with mock or disabled integrations. Actual production outputs, adoption and business outcomes are not claimed without supporting evidence.

## Choose a track

| Area | What it demonstrates | Start with |
|---|---|---|
| **[Marketing AI Systems](marketing/README.md)** | Search content production, conversion design, paid acquisition creative, cross-channel campaigns, product knowledge and asset distribution | [GEO + SEO Publishing Package](marketing/geo-seo-content.md) |
| **[Sales AI Enablement](sales/README.md)** | Account intelligence, evidence-grounded prospecting, persona mapping, source-backed sales proof and proposals | [Account Strategy Copilot](enablement/account-strategy-copilot.md) |
| **[Acquisition Automation](acquisition/README.md)** | Intent and engagement signals, deterministic scoring, conditional routing, contact resolution and proposed outbound handoffs | [Rep Empowerment Engine](docs/rep-empowerment.md) |

## Selected projects worth a deeper look

### 01 · Organic acquisition from brief to web-team handoff
**[GEO + SEO Content Production System](marketing/geo-seo-content.md)**

An editorial workflow with five controlled post structures, freshness and citation policy, QA checks and a complete **web publishing package**: article, SEO title, meta description, URL slug, Open Graph content, internal links and outbound references. The value is a more complete, governed content-to-web handoff, not merely a blog draft.

### 02 · Conference GTM across marketing and sales
**[Trade Show GTM Campaign Orchestration](marketing/trade-show-campaigns.md)**

A conference brief is translated into coordinated pre-/post-event emails, meeting-booking landing-page content, three-step BDR sequences, AE templates and campaign QA. The distinctive design is **cross-team messaging consistency** from a shared event and buyer strategy.

### 03 · Conversion design with bounded requirements
**[Conversion Landing-Page System](marketing/landing-page-architecture.md)**

XML-governed module selection, strategy questions, authoritative source PDFs, page wireframe and copy, missing-asset map, review loop and visual preview. Built to connect campaign goals with design and web execution.

### 04 · Signal-driven acquisition logic
**[Rep Empowerment Engine](docs/rep-empowerment.md)**

A **22-node synthetic n8n prototype** illustrating intent signals, mock enrichment, weighted scoring and three-tier contact routing, with example rep-preparation outputs. [Inspect the JSON](workflows/rep-empowerment-demo.json).

### 05 · Evidence-grounded seller assistance
**[Account Strategy Copilot](enablement/account-strategy-copilot.md)** and **[Evidence-Grounded Messaging](enablement/evidence-grounded-messaging.md)**

A set of designs connecting external company research, internal approved case studies, buyer priorities and source-traceable sales messaging.

## More work by function

- **[Marketing systems directory](marketing/README.md):** Paid media, LinkedIn creative, GEO/SEO, conversion, webinar lifecycle and repurposing, field marketing, employee advocacy and product marketing.
- **[Sales systems directory](sales/README.md):** BDR research, personalized outreach, objections, case-study proof, RFP assistance and competitive comparisons.
- **[Acquisition systems directory](acquisition/README.md):** Rep Empowerment and the proposed [Closed-Lost Reactivation Architecture](docs/reactivation.md).

## Technical evidence and boundaries

- [n8n workflow exports](workflows) · [Import and implementation limitations](WORKFLOW-IMPORT-NOTES.md)
- [Standalone synthetic scoring exercise](examples/scoring-demo.js) · [Technical notes](docs/technical-notes.md)
- [Confidentiality and sharing checklist](SHARING-CHECKLIST.md)

The documented assistants use custom knowledge and rules not distributed in this portfolio. The n8n exports are not evidence of live campaigns or tested integrations, and require additional engineering and rights review before deployment or external distribution.
