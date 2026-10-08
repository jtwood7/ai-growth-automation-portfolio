# n8n export and import limitations

These files are **review artifacts**, not tested, import-ready, deployed automations.

- Both exports are set `active: false`; provider credential objects and original workflow metadata were removed.
- Rep Empowerment contains 22 nodes, with simulated CRM and enrichment nodes, template-based copy and mock handoff. It relies on historical Function node definitions that may require compatibility updates.
- Closed-Lost Reactivation contains 42 nodes, illustrative provider routes and an AI placeholder. Its original connection graph contains references to three unavailable node names: `Address confirmed? (Path A)`, `Address confirmed? (Path B)`, and `Webhook: Sendoso delivery confirmed`. These are unresolved from the source export and require repair before import/execution.
- Disabling external HTTP destinations intentionally breaks those integrations. No outreach, gifting or CRM writeback should be expected to function.
- The included Mermaid diagrams summarize business logic; they do not constitute proof of executable node connections or successful test runs.

Please do **not** import these into production n8n or configure live services without redesign, permission review and sandbox validation.

[Return to portfolio](README.md)
