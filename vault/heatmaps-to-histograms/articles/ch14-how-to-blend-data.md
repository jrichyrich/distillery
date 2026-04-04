---
title: "Chapter 14: How to Blend Data"
tags: [cyber-risk, crq, bayesian-reasoning, data-blending, risk-analysis]
sources: [raw/papers/ch14-how-to-blend-data.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 14 addresses the pivotal moment in any risk analysis when the analyst has gathered external base rates, internal telemetry, and subject matter expert input -- and now must reconcile data that may be incomplete, contradictory, or uneven in quality. Martin-Vegue frames this as the natural culmination of the data collection process covered in Chapters 10 through 13, and introduces Bayesian reasoning as the mental model and practical method for turning messy inputs into a single, defensible estimate. He is explicit that this is conceptual Bayesian thinking, not mathematical derivation -- no equations appear in the chapter.

The core argument is that analysts should stop trying to "pick a number" or average their sources. Instead, they should start with a prior belief (typically an external base rate), update that belief with internal evidence, and refine it further with SME judgment. Each update shifts the estimate rather than replacing it. Martin-Vegue walks through a detailed phishing frequency example, moving from a 23% industry survey rate through internal incident data and SME consensus to arrive at a final range of 8-22% with a P50 of 12%. The chapter also directly addresses analysis paralysis -- the trap of waiting for perfect data -- and positions Bayesian blending as the antidote, consistent with the "less wrong" philosophy introduced in Chapter 4.

Martin-Vegue closes by noting that this skill compounds over time: analysts build libraries of vetted priors, develop sharper intuition about how much each update should move their belief, and earn stakeholder trust through visible, traceable reasoning.

## Key Points

- Bayesian reasoning is presented as a mindset, not a mathematical formula -- it is about disciplined belief updating, not equations
- The analyst rarely has all three data types (external, internal, SME); the framework works with whatever is available
- The "less wrong" philosophy from Chapter 4 is the philosophical companion to Bayesian blending -- both reject the demand for perfection before action
- Two paths exist for blending: (1) SMEs do the blending live in a facilitated session, or (2) the analyst performs the blending when inputs arrive separately or conflict
- Documentation of reasoning is non-negotiable -- the audit trail is what makes the analysis defensible, not the precision of the numbers
- The weather exercise (Exercise 14-1) makes Bayesian updating tangible: wake up, form a prior, look outside, update, go outside, update again, check the forecast, update again
- Martin-Vegue warns against three cognitive biases that threaten blending: overconfidence, anchoring, and the IKEA effect (overvaluing your own work)
- "Garbage in, garbage out" becomes "transparent in, defensible out" when reasoning is visible

## Core Principles

**The Four-Step Bayesian Blending Process:**

| Stage | Evidence Source | Guiding Question | Outcome |
|-------|---------------|-------------------|---------|
| Prior | External base rate or strongest baseline | "What would I believe if I knew nothing about our environment?" | Starting belief |
| First Update | Internal data | "How does our evidence confirm or contradict that baseline?" | Adjusted belief |
| Second Update | SME input | "What do experts know that the data can't yet show?" | Refined belief with forward-looking context |
| Posterior | Combined estimate | "Given everything, what should we now believe?" | Final defensible range for modeling |

**Baseline Hierarchy (in order of preference):**
1. Large, recent, transparent external dataset
2. Adjacent or analogous external dataset
3. Well-scoped internal history relevant to the scenario
4. Clearly documented SME baseline when data is unavailable

**The Bayesian Cycle:** Prior -> Evidence -> Posterior -> (Posterior becomes next Prior) -> repeat. Martin-Vegue calls this "disciplined humility."

## Practical Takeaways

- When starting a blending exercise, always apply Chapter 10 quality adjustments to external data first -- widen the range before treating it as a prior
- If internal data is missing, say so, keep the prior, and carry the uncertainty forward rather than fabricating precision
- When SMEs give ranges, ask what conditions produce the low, typical, and high values -- this reveals causal factors and prevents double-counting
- Be explicit about overlap: if an SME references the same internal dataset you already used, note it and treat their input as a refinement, not a new data point
- If SMEs are unavailable, document the assumptions you would have tested and flag triggers for revisiting later
- Your blending note should always include: the prior and why it was chosen, how internal evidence shifted the range, how SME context refined it, the final posterior, and the assumptions/triggers that would cause a refresh
- Start practicing with the weather exercise to build Bayesian intuition before applying it to risk scenarios

## Key Terms & Concepts

- **[[Bayesian Reasoning]]**: A structured approach to updating beliefs as new evidence arrives; used here as a mental model rather than a mathematical technique
- **[[Prior]]**: The starting belief about a risk parameter, typically grounded in an external base rate or the strongest available baseline
- **[[Posterior]]**: The updated belief after incorporating new evidence; today's posterior becomes tomorrow's prior
- **[[Base Rate]]**: A population-level reference point for how often an event occurs across similar organizations; the preferred starting point for any estimate
- **[[Data Blending]]**: The process of combining external, internal, and SME data into a single coherent estimate using structured reasoning
- **[[Less Wrong Philosophy]]**: The mindset (from Chapter 4) that progress through iteration beats waiting for perfect data
- **[[Analysis Paralysis]]**: The trap of believing you cannot begin until all data is collected; the primary failure mode Bayesian blending prevents
- **[[IKEA Effect]]**: A cognitive bias where people overvalue something they built themselves; relevant to analysts who become attached to their own estimates
- **[[Audit Trail]]**: The documented reasoning showing how each evidence source moved the analyst's belief; the foundation of defensibility

## Connections

- Builds directly on [[Chapter 10: Evaluating Data Quality]] for vetting and adjusting data before it enters the blending process
- Synthesizes the three data collection chapters: [[Chapter 11: External Data]], [[Chapter 12: Internal Data]], and [[Chapter 13: Subject Matter Experts]]
- The "less wrong" philosophy originates in [[Chapter 4: The Less Wrong Mindset]]
- Feeds directly into [[Chapter 15: Extending This to CRQ]], where the blended estimates become simulation inputs
- The phishing frequency worked example uses the six forms of loss from [[Chapter 8: Loss Magnitude]]
- The weather exercise echoes calibration training concepts that appear throughout the book
