# AI Growth & GTM Automation Portfolio

**Two acquisition-system prototypes · Five AI enablement case studies**  
Designing repeatable ways to find, prioritize, engage and enable B2B buyers.

> **Reviewer note:** This portfolio separates **n8n workflow prototypes** from **documented enterprise GPT designs**. The former include sanitized, inactive workflow JSON; the latter are case-study descriptions, **not downloadable GPTs or working reproductions**. No production results are claimed.

## Start here — choose what you want to evaluate

| Area | Best for evaluating | Start with |
|---|---|---|
| **01 · [Acquisition Systems](acquisition/README.md)** | Intent signals, enrichment, routing, orchestration and technical decision logic | [Rep Empowerment Engine](docs/rep-empowerment.md) |
| **02 · [AI Sales & Marketing Enablement](enablement/README.md)** | Task-specific assistants, structured output, knowledge grounding and AI adoption | [Account Strategy Copilot](enablement/account-strategy-copilot.md) |
| **03 · [Implementation & Trust Boundaries](docs/technical-notes.md)** | What works, what is mocked and what would be required for production | [Workflow import notes](WORKFLOW-IMPORT-NOTES.md) |

## 01 / Acquisition systems

```mermaid
flowchart LR
 A[Account signal / closed-lost context] --> B[Contact and account evaluation]
 B --> C[Qualification and routing]
 C --> D[Rep action / nurture concept]
```

| Example | Core design | Inspect |
|---|---|---|
| **Rep Empowerment Engine** | Intent webhook, simulated contact enrichment, deterministic scoring, three-tier routing, rep prep | [Walkthrough](docs/rep-empowerment.md) · [22-node n8n JSON](workflows/rep-empowerment-demo.json) |
| **Closed-Lost Reactivation** | Eligibility, change-in-context triggers, contact verification, proposed multi-touch reactivation | [Walkthrough](docs/reactivation.md) · [42-node architecture JSON](workflows/closed-lost-reactivation-architecture.json) |

**Status:** Synthetic/inactive prototypes. CRM, enrichment and outbound integrations are partly mocked, disabled or unimplemented. The reactivation export has [known unresolved node references](WORKFLOW-IMPORT-NOTES.md).

## 02 / AI enablement library — selected case studies

From a larger internal directory, these five examples illustrate different enablement patterns without distributing proprietary system prompts, customer files or enterprise configurations.

| Tool design | User | Technical pattern | Details |
|---|---|---|---|
| **Account Strategy Copilot** | AE | Current research → stakeholder mapping → tailored outreach | [Explore](enablement/account-strategy-copilot.md) |
| **Signal-Led BDR Research** | BDR | Public triggers → pain hypotheses → supporting proof → email | [Explore](enablement/signal-led-bdr-research.md) |
| **Evidence-Grounded Messaging** | Sales + marketing | Source retrieval → verifiable claims → reusable assets | [Explore](enablement/evidence-grounded-messaging.md) |
| **Source-Grounded RFP Responses** | Solutions / proposals | Document intake → answer retrieval → citations + confidence | [Explore](enablement/source-grounded-rfp-responses.md) |
| **Webinar Lifecycle Campaigns** | Demand generation | Event facts → pre-event drafts → post-event segments | [Explore](enablement/webinar-lifecycle-campaigns.md) |

**Status:** These are descriptions derived from a tool catalog, **not deployable GPT exports**. The actual assistants were developed for an enterprise ChatGPT environment and cannot be independently executed from this repository.

## Technical evidence and review

- [Rep contact scoring — standalone JavaScript exercise](examples/scoring-demo.js)
- [Synthetic demo fixtures](examples/fixtures/synthetic-contacts.json)
- [Workflow import limitations](WORKFLOW-IMPORT-NOTES.md)
- [Implementation notes and known gaps](docs/technical-notes.md)
- [Sharing and ownership checklist](SHARING-CHECKLIST.md)

### Design principles reflected across the work

- **Inputs before outputs:** Define the audience, authorized knowledge and task before generation.
- **Rules where appropriate:** Use explicit thresholds and eligibility conditions rather than opaque judgments for spend and routing.
- **Evidence before persuasion:** Separate observed facts and sourced outcomes from inferred problems and recommendations.
- **Humans at consequential steps:** Outbound, CRM writes, RFP answers and customer claims require review and proper authorization.
- **Honest status:** Distinguish prototypes, mock integrations and documented assistant concepts from live deployments.

**Access and reuse:** Private review material. No implied permission to redistribute employer-owned assets. All examples are synthetic or generalized and should be checked for ownership and confidentiality before external sharing.
