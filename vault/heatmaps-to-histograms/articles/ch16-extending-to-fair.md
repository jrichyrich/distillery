---
title: "Chapter 16: Extending to FAIR"
tags: [cyber-risk, crq, fair, risk-taxonomy, jack-jones, loss-event-frequency, loss-magnitude]
sources: [raw/papers/ch16-extending-to-fair.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 16 maps everything the reader has learned so far into the FAIR (Factor Analysis of Information Risk) framework. Martin-Vegue opens with an anecdote about a GRC colleague who dismissed FAIR because the numbers "felt too high" -- without having run any other quantitative model to compare against. This sets the tone: FAIR is the most widely recognized CRQ framework and also the most misunderstood. The chapter aims to demystify it by showing that a reader who has followed Chapters 7-15 has already been doing FAIR-compatible analysis; the only remaining step is connecting the labels.

Martin-Vegue traces FAIR's origin to Jack Jones at Nationwide Insurance in the early 2000s, when two executive questions -- "How much risk do we have?" and "How much less risk will we have if we approve the spend?" -- exposed that no structured method existed to answer them. He credits Jones with three big contributions: precise definitions that cleaned up the profession's language, a framework for critical thinking that made risk a reasoning problem rather than a "Pick-A-Color" exercise, and the introduction of metrology and actuarial logic into information risk management. The chapter then explains how the original FAIR model has expanded into a family of standards and frameworks (FAIR-CAM, FAIR-MAM, FAIR-TAM, FAIR-CRMP, FAIR-AIR) maintained across both The Open Group and the FAIR Institute.

The most practical section of the chapter presents three "choose your own adventure" depth levels for using FAIR, depending on available data and the decision at hand. Martin-Vegue strongly advocates using only as much FAIR as needed -- every decomposition layer adds two parts that both require estimation, and unnecessary depth adds cost without value. He closes with a warning against three common missteps: confusing taxonomy with analysis, treating FAIR as religion, and wasting time debating definitions instead of supporting decisions.

## Key Points

- FAIR expresses risk as the combination of Loss Event Frequency (LEF) and Loss Magnitude (LM) -- the same "frequency" and "magnitude" used throughout the book, measured the same way
- FAIR's decomposition is its biggest practical contribution: it provides multiple entry points for quantification so analysts can start wherever their evidence lives
- The Open Group maintains the formal Open FAIR standards (O-RT and O-RA); the FAIR Institute builds applied frameworks (FAIR-CAM, FAIR-MAM, FAIR-TAM) on top of that foundation
- Jack Jones' spacecraft analogy: would you ride a space mission if the engineers could not agree on the definitions of mass, weight, and velocity? That is what the security profession does daily with terms like "risk"
- Risk definitions vary wildly across standards: NIST (function of likelihood and impact), ISO 31000 (effect of uncertainty on objectives), COSO (possibility of events affecting strategy), GDPR (likelihood and severity of harm), PCI DSS (never defines it at all). FAIR defines risk as "the probable frequency and probable magnitude of future loss"
- At a dinner, an enterprise risk expert heard the FAIR explanation and said: "So it's just actuarial techniques applied to information risk?" Martin-Vegue's response: "Exactly."
- Contact Frequency and Probability of Action are useful for teaching but rarely practical in live analyses -- most real-world models stop at LEF or TEF/Susceptibility
- Martin-Vegue confesses that early in his career he wasted time arguing about definitional purity ("ransomware isn't a risk, it's a method") and stopped doing so years ago

## Core Principles

**FAIR Model Decomposition:**
- **Risk** = Loss Event Frequency x Loss Magnitude
- **Loss Event Frequency** = Threat Event Frequency x Susceptibility
  - TEF can further decompose into Contact Frequency x Probability of Action
  - Susceptibility can decompose into Threat Capability vs. Resistance Strength
- **Loss Magnitude** = Primary Loss + Secondary Loss
  - Primary Loss: direct, immediate costs
  - Secondary Loss: regulatory fines, customer churn, reputation damage, legal costs

**Three Depth Levels (Choose Your Own Adventure):**

1. **Top-level only** (LEF + LM): Use when you have high-quality data at those levels and the decision does not require further decomposition. Example: using Cyentia IRIS data directly.
2. **Fully decomposed magnitude**: Keep frequency at top level but break magnitude into primary and secondary losses. Common for data breach scenarios where magnitude data is increasingly detailed.
3. **Decomposed threat frequency using control data**: When you have detailed threat activity data (e.g., phishing attempts) but limited insight into success rates. Use FAIR-CAM to derive Susceptibility from control strength.

**The FAIR Ecosystem (Table 16-1):**
| Name | Type | Description |
|------|------|-------------|
| Open FAIR Risk Taxonomy (O-RT) | Standard | Defines the model |
| Open FAIR Risk Analysis (O-RA) | Standard | Defines the analysis process |
| FAIR Model | Standard | FAIR Institute's version |
| FAIR-CAM | Standard | Maps controls into FAIR factors |
| FAIR-MAM | Framework | Adds materiality/financial/regulatory terms |
| FAIR-TAM | Framework | Extends FAIR into third-party and supply chain risk |
| FAIR-CRMP | Standard | Integrates FAIR within ongoing risk governance (emerging) |
| FAIR-AIR | Playbook | Applies FAIR logic to AI/model risk |

## Practical Takeaways

- If you have followed Chapters 7-15, you are already doing FAIR-compatible analysis; just relabel "frequency" as Loss Event Frequency and "magnitude" as Loss Magnitude
- Let data guide depth: if you already have solid LEF data, do not decompose further just to "do FAIR properly"
- Remember that every decomposition layer adds two parts -- go deeper only if you can meaningfully inform both sides
- Always ask: "Will this extra layer help us make a better decision?" If not, stop where data and purpose align
- Use the GenAI prompts provided to map your existing data to FAIR factors and to determine the simplest appropriate FAIR depth
- Use AI tools to scan news stories, public databases, 8-K and 10-K filings for magnitude data (especially secondary losses)
- Avoid the three common missteps: (1) thinking you must measure all 12 factors, (2) treating FAIR as the only correct approach or rejecting it entirely, (3) debating definitions instead of supporting decisions
- Your long-term aspiration should be to become a modeler, not a "FAIR person" -- FAIR is the starting line, not the finish

## Key Terms & Concepts

- **[[FAIR (Factor Analysis of Information Risk)]]**: A quantitative risk framework developed by Jack Jones that decomposes risk into measurable components of frequency and magnitude
- **[[Loss Event Frequency (LEF)]]**: How often loss events are expected to occur; the top-level frequency factor in FAIR
- **[[Loss Magnitude (LM)]]**: How large losses are likely to be; the top-level magnitude factor in FAIR
- **[[Threat Event Frequency (TEF)]]**: How often a threat actor acts against an asset, whether or not the attempt succeeds
- **[[Susceptibility]]**: The probability that an asset experiences loss given a threat's capability and the strength of resisting controls; synonym for Vulnerability in the Open FAIR standard
- **[[Primary Loss]]**: Direct, immediate costs of a loss event (IR labor, forensics, downtime)
- **[[Secondary Loss]]**: Indirect or long-tail fallout -- regulatory fines, customer churn, reputation damage, legal costs
- **[[FAIR-CAM (Controls Analytics Model)]]**: A framework that maps controls into FAIR factors to model how controls affect risk
- **[[FAIR-MAM (Materiality Assessment Model)]]**: Adds materiality, financial, and regulatory terms to FAIR; can optionally replace the six forms of loss
- **[[FAIR-TAM (Third-Party Assessment Model)]]**: Extends FAIR into third-party and supply chain risk
- **[[The Open Group]]**: The standards body that maintains the formal Open FAIR Risk Taxonomy and Risk Analysis standards
- **[[FAIR Institute]]**: The research-driven nonprofit co-founded by Jack Jones that develops applied FAIR frameworks and community resources

## Connections

- Maps directly onto everything built in [[Chapter 15: Extending This to CRQ]] -- Martin-Vegue says "you've built the engine; now we install it in the FAIR chassis"
- The six forms of loss from [[Chapter 8: Loss Magnitude]] align directly with FAIR's magnitude side (Primary Loss and Secondary Loss)
- The A-T-E scenario structure from [[Chapter 7: Risk Scenarios]] borrows FAIR's logic for defining assets, threats, and loss events
- Data vetting from [[Chapter 10: Evaluating Data Quality]] supports every level of the FAIR ontology
- Data blending from [[Chapter 14: How to Blend Data]] complements FAIR's reasoning process
- The complete walkthrough in [[Chapter 17: How to Run a Complete CRQ Assessment]] applies FAIR's structure to a real ransomware scenario
- Jack Jones' origin story connects to the book's recurring theme that risk management was "broken because of thinking, not because of math"
