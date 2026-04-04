---
title: "Chapter 17: How to Run a Complete CRQ Assessment"
tags: [cyber-risk, crq, ransomware, risk-assessment, walkthrough, loss-exceedance-curve, six-forms-of-loss]
sources: [raw/papers/ch17-how-to-run-a-complete-crq-assessment.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 17 is the full dress rehearsal. Rather than offering multiple lightweight examples, Martin-Vegue walks through a single, deep, end-to-end CRQ analysis of a ransomware scenario at a mid-sized US fintech company. The analysis is triggered by a real-world catalyst: a competitor with the same industry profile, size, and technology stack gets hit by ransomware, and the CFO forwards the news story asking "Could it happen to us? What would it cost? Are we doing enough?" Every technique from the preceding chapters is applied in sequence -- A-T-E scenario framing, external base rates from Cyentia IRIS and Verizon DBIR, internal telemetry from audit reports and JIRA, SME elicitation, Chapter 10 data vetting, Chapter 14 Bayesian blending, and Chapter 15's Monte Carlo simulation.

The analysis produces concrete numbers: an expected annual loss of $332K, with most simulated years clustering between $200K and $400K, a P95 of $592K, and only 0.01% of simulations exceeding $1M. The loss exceedance curve shows ransomware behaving as a low-frequency, moderate-impact risk in this environment -- not the catastrophic budget-killer people sometimes imagine. Martin-Vegue then demonstrates exactly how to present these findings to a CFO: no Monte Carlo terminology, no distribution talk, just "most years this doesn't happen; when it does, the hit lands in the mid-six figures; million-dollar years are rare." The chapter culminates in the moment CRQ pays for itself -- when a leader walks away understanding the risk, what drives it, and what to do about it.

The chapter also introduces important practical guidance on scope discipline (the "parking lot" technique for resisting scope creep), the value of saving vetted data for reuse across future analyses, and three free tools for building a CRQ evidence library (Excel/Google Sheets, Airtable, Notion). Martin-Vegue's "First Rule of CRQ" -- do not talk about CRQ in the room where a decision is being made -- captures the chapter's philosophy: the method is for the analyst; the decision is for the leader.

## Key Points

- The scenario is framed using A-T-E: Asset (customer-facing production services in AWS), Threat (external actor deploying ransomware via compromised credentials), Effect (multi-day outage with partial encryption and potential data loss)
- The decision the analysis will inform is explicitly stated upfront: "What kinds and levels of resilience and credential-hardening improvements should we implement in FY 2026?"
- External baseline from Cyentia IRIS: organizations in the $1B-$10B revenue band have roughly 9-10% probability of a ransomware event per year
- Final blended frequency estimate: P5 = 0.04, P50 = 0.08, P95 = 0.13 -- shifted slightly below the industry base rate due to strong internal controls (95% admin MFA, 97% backup success rate, zero ransomware incidents in three years)
- Five of the six forms of loss are in scope: response, replacement, productivity, fines and judgments, and reputation; competitive advantage is excluded because a ransomware event does not materially change strategic position
- Individual loss form estimates are summed across P5/P50/P95 percentiles to create a single magnitude input ($1.1M / $2.75M / $8.5M) -- Martin-Vegue acknowledges this is an approximation, not a proper distribution convolution, but appropriate for early analyses
- The legacy access token flagged as "Moderate Issues" is a concrete example of how data quality categories translate into wider uncertainty bounds
- SME workshops naturally drift into imaginative territory; the analyst's job is to acknowledge input, redirect to the scoped A-T-E, and separate insight from noise
- Martin-Vegue's rule of thumb for data reuse: "If you spent more than five minutes finding it, collecting it, vetting it, or debating it -- save it for next time"
- The "First Rule of CRQ" (do not talk about CRQ in the decision room) came from a real experience where Martin-Vegue lost a C-suite audience by leading with FAIR, inputs, and Monte Carlo terminology

## Core Principles

**The Full Walkthrough Sequence:**
1. **Framing the Scenario** -- Use A-T-E to scope, confirm with the requesting stakeholder, and identify the decision being supported
2. **Setting the Stage** -- Extract hypothesis-shaping context from the news story without using it as model input
3. **Collecting and Vetting Data** -- External base rates (IRIS, DBIR), internal telemetry (MFA rates, backup success, restore times, incident history), and SME judgment, all tagged with quality categories from Chapter 10
4. **Building the Model** -- Enter blended frequency and combined magnitude into the Chapter 15 spreadsheet and run Monte Carlo simulation
5. **Interpreting and Presenting Results** -- Five-number summary, loss exceedance curve, plain-language narrative for executives

**Scope Discipline ("Guardrails Against Scope Creep"):**
- Only three things are allowed during scoping: (1) what the scenario is, (2) what it is not, (3) what evidence is needed
- For any proposed addition, ask: "Does this change the decision we're supporting?" If not, it goes in the parking lot

**The CFO Conversation Pattern:**
1. Lead with the picture: "Most years, this doesn't happen. When it does, mid-six figures."
2. Answer "Are we good?" honestly: "Mostly good. Three places to tighten."
3. Give the headline, not the technical detail: "They target weak access paths, help us spot trouble earlier, shorten recovery."
4. Offer the next step: "I'll work with the CISO on what those improvements look like and what they cost."

## Practical Takeaways

- Always identify the decision the analysis will inform before collecting any data -- in this case, FY 2026 resilience and credential-hardening investments
- Use GenAI to research sector-specific ransomware trends as a starting point, but narrow to sources meeting Chapter 10 High Quality criteria (transparent methods, strong sample sizes, industry relevance)
- Tag every piece of evidence with a quality category (High Quality vs. Moderate Issues) to make uncertainty adjustments systematic rather than ad hoc
- When summing loss forms into a single magnitude input, acknowledge that adding P5s or P95s across forms is an approximation that produces a wider range; this is acceptable for early analyses
- Build a reusable CRQ evidence library using one of three free approaches: (1) Excel/Google Sheets with tabs for external, internal, SME, and loss-form data, (2) Airtable with tags for industry/asset/threat/loss form, or (3) Notion for narrative-oriented analysts
- In every piece of saved data, include the source link, date collected, notes on usage, and any GenAI prompts used to gather or refine it
- Never lead with the method in executive presentations; executives want to know exposure, drivers, posture, and next steps -- not distributions, P-values, or simulation mechanics
- Specific mitigation recommendations from the walkthrough: remove legacy access paths, improve detection around credential misuse, tighten and automate recovery steps

## Key Terms & Concepts

- **[[A-T-E Framework]]**: Asset, Threat, Effect -- the scenario scoping structure that anchors the entire analysis
- **[[Loss Exceedance Curve]]**: A visualization showing the probability that annual loss exceeds various dollar thresholds; the primary communication tool in this walkthrough
- **[[Six Forms of Loss]]**: Response, replacement, productivity, fines and judgments, reputation, and competitive advantage -- the magnitude structure from Chapter 8, five of which are used here
- **[[Quality Category]]**: A tag (High Quality or Moderate Issues) applied to each piece of evidence based on Chapter 10 criteria; determines how wide the uncertainty range should be
- **[[Blended Posterior]]**: The final estimate for a parameter after incorporating external, internal, and SME data through the Chapter 14 Bayesian blending process
- **[[CRQ Evidence Library]]**: A reusable collection of vetted data points (base rates, internal baselines, SME judgments, loss-form examples) that accelerates future analyses
- **[[Scope Creep]]**: The tendency for a risk scenario to mutate during analysis; managed through explicit scoping, exclusions, and the "parking lot" technique
- **[[Tornado Diagram]]**: A visualization showing how much the model output changes when each input is adjusted one at a time; the bars are ordered from largest to smallest impact

## Connections

- Applies the A-T-E scenario structure from [[Chapter 7: Risk Scenarios]] to a real ransomware case
- Uses the six forms of loss from [[Chapter 8: Loss Magnitude]] as the magnitude structure
- Data vetting follows [[Chapter 10: Evaluating Data Quality]] criteria throughout
- External data collection follows [[Chapter 11: External Data]] with specific use of Cyentia IRIS and Verizon DBIR
- Internal data signals follow [[Chapter 12: Internal Data]] patterns
- SME elicitation follows [[Chapter 13: Subject Matter Experts]] facilitation methods
- Bayesian blending of all sources follows [[Chapter 14: How to Blend Data]]
- Model building and simulation follow [[Chapter 15: Extending This to CRQ]]
- FAIR taxonomy from [[Chapter 16: Extending to FAIR]] structures the decomposition
- What-if analysis and tornado diagrams connect forward to [[Chapter 18: The Six Levers That Move Risk]]
- The "First Rule of CRQ" embodies the communication philosophy that runs throughout the book: the method serves the decision, not the other way around
