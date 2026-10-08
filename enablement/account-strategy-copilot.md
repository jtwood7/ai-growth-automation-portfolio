# Account Strategy Copilot

**Portfolio adaptation of:** “Outreach Strategy Assistant” in the AI Tool Library  
**Category:** Sales enablement / account-based prospecting  
**Artifact status:** Documented design, not a working GPT export

## Business problem
Preparing a relevant first conversation requires a current account brief, plausible buying-committee coverage, role-specific strategy and outreach. Those deliverables are often built in separate steps and lose context between handoffs.

## Workflow model
```mermaid
flowchart TD
 A[Named target account] --> B[Time-bounded public research]
 B --> C[Organization brief + dated sources]
 C --> D[Suggested functional stakeholders]
 D --> E[Role-specific priorities and hypotheses]
 E --> F[Personalized outreach from a supplied template]
 F --> G[Source and placeholder review]
```

## Input contract
- Target account; optional target personas and initiatives
- Optional contact list for known recipients
- **User-supplied email template** for outreach generation

## Expected outputs
1. Organization brief: dated research bullets with sources
2. Suggested contacts: names/functions with provenance and confidence where available
3. Strategy by contact: relevant problem hypotheses and opening angles
4. Personalized email drafts preserving the user's template structure

## Design decisions / safeguards
- Separate **verified account facts** from **sales hypotheses**.
- Use current, attributable sources for research; do not fabricate initiatives, contact details or customer claims.
- Preserve unresolved placeholders in outreach rather than inserting unsupported facts.
- Maintain a stable output sequence so an AE can review the package quickly.

## What this demonstrates
Task decomposition, research grounding, data contracts and seller-in-the-loop workflow design. The catalog documents the intended behavior; it does **not** prove that contact discovery, browsing and messaging all ran successfully in a single live session.

[← AI enablement index](README.md)
