---
title: "Part 3 Synthesis: Data Mastery in Cyber Risk Quantification (Chapters 9-13)"
tags: [cyber-risk, crq, data-collection, data-quality, external-data, internal-data, sme-elicitation, synthesis]
sources: [raw/papers/ch09-getting-unstuck-with-data.md, raw/papers/ch10-how-to-vet-and-believe-your-data.md, raw/papers/ch11-finding-and-using-external-data.md, raw/papers/ch12-your-best-evidence-finding-and-using-internal-data.md, raw/papers/ch13-your-secret-weapon-subject-matter-experts.md]
created: 2026-04-04
confidence: high
---

## Overview

Part 3 of *From Heatmaps to Histograms* (Chapters 9-13) tackles the question that stops most CRQ practitioners in their tracks: where does the data come from? Martin-Vegue's answer is the [[Three-Source Model]] -- a systematic framework that organizes all CRQ data into external sources, internal sources, and subject matter expert judgment. The five chapters form a deliberate progression: Chapter 9 breaks the psychological barriers and introduces the model, Chapter 10 provides the quality evaluation framework that applies to all data, and Chapters 11-13 deliver detailed how-to guides for each of the three source types.

## Unifying Themes

### The Bayesian Backbone

The deepest structural theme across Part 3 is Bayesian reasoning, even though Martin-Vegue never demands readers learn Bayes' theorem formally. The workflow is: external data provides the prior (base rate), internal data provides evidence for updating, and SME judgment produces the forward-looking posterior. This pattern appears explicitly in Chapter 11's discussion of priors and posteriors but implicitly drives the entire section. Every chapter assumes you start broad and refine.

### Imperfection Is the Starting Condition

Every chapter opens with a story about data problems: an analyst paralyzed by imperfect data (Ch 9), risk estimates inflated by $50M from a bad vendor survey (Ch 10), the danger of ignoring external signals illustrated by Harold Godwinson's defeat in 1066 (Ch 11), a financial services firm whose risk picture shifted dramatically once internal data was incorporated (Ch 12), and a "zero incident" database that actually had three unreported access attempts (Ch 13). The message is consistent: perfect data never exists, but systematic approaches to imperfect data produce decisions far superior to qualitative guesswork.

### Range Thinking as the Universal Language

Across all five chapters, Martin-Vegue insists on ranges over point estimates. Chapter 9 introduces it as a mindset shift. Chapter 10 formalizes it with x2/x3 quality multipliers. Chapter 11 applies it to external statistics through transformation methods. Chapter 12 converts timestamped records into P5/P50/P95 frequency ranges. Chapter 13 trains SMEs to think in 90% confidence intervals through the ten-minute calibration primer. The P5-P50-P95 format becomes the lingua franca of CRQ data.

### The Coverage Rate Problem

A recurring concern across chapters is that data you can see may not represent the full picture. Chapter 10 introduces Coverage as one of four screening criteria. Chapter 12 elevates it with the smoke detector analogy (10/10 pass, but the building needs 50). Chapter 13's opening story -- three unauthorized access attempts invisible to monitoring -- is fundamentally a coverage rate failure. The implication is that every data source must be interrogated for what it misses, not just what it contains.

### AI as Accelerator, Not Source

Martin-Vegue takes a consistent position across all five chapters: GenAI is a powerful accelerator for finding, extracting, transforming, and analyzing data, but it cannot be a primary data source. Chapter 9 explains why (no grounding in observation, untraceable origins, circular reasoning risk). Chapter 11 introduces AI triangulation (cross-model validation). Chapter 12 discusses using GenAI for pattern recognition in internal data. Chapter 13 warns about AI-generated rationale in SME responses. The rule is: AI augments each of the three real sources but does not constitute a fourth.

## How the Chapters Connect

The five chapters are designed to be used as a sequential workflow:

1. **[[Chapter 9: Getting Unstuck with Data]]** -- Use an influence diagram to identify which uncertainties matter. Apply the three-source model to plan data collection. Overcome the six myths that create paralysis.

2. **[[Chapter 10: How to Vet and Believe Your Data]]** -- Before using any source, screen it (Relevance, Verifiability, Applicability, Coverage), document it, and assess quality with range adjustments. This framework applies to all three source types.

3. **[[Chapter 11: Finding and Using External Data]]** -- Search using the five-type taxonomy. Build base rates as Bayesian priors. Transform raw statistics. Validate results against industry norms.

4. **[[Chapter 12: Your Best Evidence: Finding and Using Internal Data]]** -- Gather organizational data using the fifteen-category map and team-specific scripts. Transform using four methods (frequency from timestamps, magnitude from durations, scenarios from patterns, control conditions from audits). Always determine coverage rates.

5. **[[Chapter 13: Your Secret Weapon: Subject Matter Experts]]** -- Present external and internal findings to SMEs. Use the Mini-Delphi method or distributed elicitation. Prime with calibration exercises. Aggregate using median (calibrated) or mean (uncalibrated). Produce the forward-looking posterior estimate.

## Key Frameworks Introduced

| Framework | Chapter | Purpose |
|---|---|---|
| [[Three-Source Model]] | 9 | Organizes all CRQ data into external, internal, and SME sources |
| [[Influence Diagram]] | 9 | Identifies which uncertainties drive the decision before data collection |
| [[Data Type Matrix]] | 9 | Classifies data along qualitative/quantitative and subjective/objective spectrums |
| Three-Step Data Evaluation (Screen, Document, Assess) | 10 | Quality evaluation framework for all data sources |
| [[NUSAP Framework]] adaptation | 10 | Scientific foundation for data quality screening |
| [[Range Widening]] (x2/x3 multipliers) | 10 | Adjusts uncertainty ranges based on data quality |
| [[Value of Information]] | 10 | Decision rule for when to stop searching for better data |
| Five-Type External Data Taxonomy | 11 | Research road map for external sources |
| Five Methods for External Data | 11 | Scenario building, model inputs, validation, transformation, magnitude extraction |
| Fifteen-Category Internal Data Map | 12 | Comprehensive guide to internal data sources and their CRQ applications |
| Four Internal Data Transformation Methods | 12 | Frequency, magnitude, scenarios, and control conditions from internal records |
| [[Coverage Rate]] | 12 | The denominator that turns metrics into meaningful signals |
| Five-Level SME Classification | 13 | From unaided guess to prediction market |
| [[Mini-Delphi Method]] | 13 | Structured workshop format for expert elicitation |
| Ten-Minute Calibration Primer | 13 | Quick exercise to prime SMEs for range thinking |
| SME Aggregation Methods | 13 | Median for calibrated, mean for uncalibrated, widest-range for high uncertainty |

## Cross-Disciplinary Foundations

Martin-Vegue consistently borrows from mature risk disciplines to legitimize CRQ practices:

- **Actuarial science**: Class rating, base rates, proxy data (Ch 9, 11)
- **Environmental science and nuclear safety**: NUSAP framework for data quality (Ch 10)
- **Decision science**: Influence diagrams, Value of Information, figure of merit (Ch 9, 10)
- **Forecasting research**: Superforecasting calibration principles (Ch 9, 13)
- **Structured expert judgment**: Cooke's Method, Delphi technique (Ch 13)
- **Bayesian statistics**: Prior/posterior updating (Ch 11, implicit throughout)

The recurring argument is that CRQ is not inventing new science. It is applying well-established methods from fields that have worked with sparse, uncertain data for decades.

## The Practitioner's Takeaway

Part 3 provides a complete data collection and evaluation toolkit. A practitioner working through these chapters sequentially would: sketch an influence diagram to scope their data needs, apply the quality evaluation framework to every source they find, build external base rates from the five data types, enrich those base rates with internal evidence from their own systems, and produce forward-looking estimates through structured SME elicitation. The result is a defensible set of P5/P50/P95 inputs ready for the Monte Carlo modeling that follows in Part 4.

The most important message running through all five chapters is that the barrier to CRQ is not data scarcity -- it is the belief that data scarcity makes quantification impossible. Martin-Vegue's antidote is systematic methodology: "good enough to make a better decision" beats "perfect but never started."
