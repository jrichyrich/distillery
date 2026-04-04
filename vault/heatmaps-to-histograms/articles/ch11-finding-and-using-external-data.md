---
title: "Chapter 11: Finding and Using External Data"
tags: [cyber-risk, crq, external-data, base-rates, bayesian-reasoning, data-transformation, benchmarking]
sources: [raw/papers/ch11-finding-and-using-external-data.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue argues that external data -- any information originating outside your organization -- is the most complicated part of the [[Three-Source Model]] but also the place where he starts nearly every risk assessment. The chapter opens with the analogy of fire insurance: even if you have never had a fire, your premium is priced using demographic and contextual data about similar homes. This is [[Class Rating]] in actuarial science, and it applies directly to cyber risk. Your internal incident history might nudge estimates, but the foundation must be built on a broad, population-level picture. External data provides the [[Base Rate]] -- your prior in Bayesian terms -- which is then updated with internal data and SME input to produce a posterior estimate expressed as P5-P50-P95.

The chapter organizes external data into a five-type taxonomy: (1) Event-Based Data tracking actual incidents and losses, (2) Measurement and Exposure Data quantifying vulnerabilities and attack surfaces, (3) Opinion, Perception, and Benchmark Data reflecting surveys and self-reported findings, (4) Research and Analysis Data from deep-dive studies, and (5) Legal and Enforcement Data tracking regulatory fines, lawsuits, and consequences. Martin-Vegue explicitly warns against using LinkedIn or Twitter polls as data sources due to lack of sampling control, massive selection bias, no demographic metadata, no margin of error, and vulnerability to bad-faith responses.

The practical heart of the chapter is five methods for using external data: building risk scenarios from evidence (Method 1), creating quantitative model inputs with base rates (Method 2), validating and stress-testing results against industry norms (Method 3), transforming raw statistics into usable formats (Method 4), and extracting magnitude data organized by the six forms of loss (Method 5). The chapter also includes a historical analogy to Harold Godwinson in 1066 ignoring external threats while focused inward, which led to the Norman conquest -- a memorable illustration of why internal data alone creates dangerous blind spots.

## Key Points

- External data should be your starting point, not an afterthought. It grounds analysis in reality, builds credibility with executives, and provides baseline estimates when internal data is sparse.
- The fire insurance analogy: you do not need personal incident history to estimate risk. Insurers use class rating based on shared characteristics, and CRQ should do the same.
- External data creates a [[Base Rate]] (Bayesian prior) that gets updated with internal data and SME input to produce a posterior.
- Three types of base rates: frequency estimates, magnitude estimates, and control failure rates.
- The five-type taxonomy provides a research road map: Event-Based, Measurement/Exposure, Opinion/Benchmark, Research/Analysis, and Legal/Enforcement.
- LinkedIn and Twitter polls fail as data sources on five counts: no sampling control, selection bias, no demographic metadata, no margin of error, and vulnerability to trolling.
- AI can reduce a 30-40 hour external research effort to under an hour, but always verify citations (AI creates plausible but nonexistent sources), check calculations, and validate quality assessments.
- AI triangulation: run multi-model checks where one LLM produces a summary and a different LLM critiques it. Disagreement signals where human review is needed.
- Common pitfalls: overreacting to headline events, using stale data, assuming peer consequences apply universally.
- When results are 2-3x higher or lower than industry averages, investigate whether this reflects genuine organizational differences or analytical errors.

## Core Principles

### The Five-Type External Data Taxonomy
1. **Event-Based**: Incident databases, insurance claims, SEC 8-K filings, GDPR notifications, VERIS, Privacy Rights Clearinghouse. Answers "what happened?"
2. **Measurement and Exposure**: CVE/NVD, Shodan, Censys, external risk ratings, threat intel feeds. Answers "how exposed are we?"
3. **Opinion and Benchmark**: Ponemon, SANS surveys, Gartner reports, ISAC publications. Answers "what do people say?" (perception, not reality).
4. **Research and Analysis**: Academic papers, Mandiant/CrowdStrike reports, law firm incident digests, think tanks (RAND, ENISA). Answers "what do deep dives reveal?"
5. **Legal and Enforcement**: SEC/FTC enforcement, GDPR fines, PACER/Westlaw, consent decrees. Answers "what are the consequences?"

### Five Methods for Using External Data
- **Method 1**: Build evidence-based risk scenarios using Asset + Threat + Effect + Method structure from Chapter 7.
- **Method 2**: Create quantitative model inputs by extracting statistics, applying quality adjustments from Chapter 10, and documenting inputs.
- **Method 3**: Validate and stress-test results by comparing against industry norms, benchmarking frequency, and investigating outliers.
- **Method 4**: Transform raw statistics -- convert percentages to frequencies, normalize time periods, adjust currencies/inflation, find missing denominators, create uncertainty ranges from point estimates.
- **Method 5**: Extract magnitude data organized by the six forms of loss from Chapter 8 (response costs, business disruption, asset replacement, regulatory fines, competitive advantage loss, reputation damage).

### Base Rates and Bayesian Updating
External data provides the prior estimate. Internal data and SME input update it to a posterior. The prior is expressed as P5-P50-P95. This transforms the analyst's role from "person making up numbers" to "analyst applying industry context to organizational reality."

## Practical Takeaways

- Start every risk assessment with external data, even before the scenario statement is fully drafted. It turns vague concerns into evidence-based scenarios.
- Use the five-type taxonomy as a research road map rather than hunting randomly.
- When transforming statistics, watch for: currency timing errors (using current exchange rates for historical data), double-counting adjustments, scope mismatches, and unit confusion (per-incident vs. annual).
- Always look for the denominator. "42 companies experienced breaches" means very different things depending on whether those 42 came from 100 companies or 10,000.
- For advanced frequency estimation with uncertain denominators, consider [[Beta Distribution Modeling]], but the core methods (Method 2 + Chapter 10 quality adjustments + Chapter 13 SME elicitation) cover the majority of real-world situations.
- After completing your risk model, use Method 3 to validate results against external benchmarks before presenting to stakeholders.
- Reference competitor SEC filings, insurance loss studies, and regulatory enforcement data to build executive credibility.

## Key Terms & Concepts

- **[[Base Rate]]**: Historical frequency observed across a similar population, serving as the Bayesian prior before organizational adjustment.
- **[[Class Rating]]**: Actuarial technique of grouping entities with shared characteristics to estimate risk, applied to cyber risk by analogy.
- **[[Prior and Posterior]]**: Bayesian terms. The prior is the initial belief based on external data; the posterior is the updated estimate after incorporating internal data and SME input.
- **[[Beta Distribution Modeling]]**: Advanced technique for estimating frequencies when you have incident counts but unknown or highly uncertain denominators.
- **[[AI Triangulation]]**: Running multi-model checks where one LLM produces output and a different LLM critiques it to surface hidden assumptions and reduce hallucinations.
- **[[VERIS Community Database]]**: Open database for recording and sharing security incident data in a structured format.

## Connections

- This chapter operationalizes the [[Three-Source Model]] introduced in [[Chapter 9: Getting Unstuck with Data]], providing the detailed "how-to" for the external data pillar.
- All external data must pass through the evaluation framework from [[Chapter 10: How to Vet and Believe Your Data]] before use, including the x2/x3 range adjustments.
- The five methods reference scenario-building from Chapter 7 (Method 1), forms of loss from Chapter 8 (Method 5), and quality assessment from Chapter 10 (Methods 2, 4, 5).
- External data provides the base rates that SMEs in [[Chapter 13: Your Secret Weapon: Subject Matter Experts]] will react to, adjust, and contextualize.
- The Bayesian prior/posterior framing connects to the broader decision-analysis foundation of the book and the influence diagram concepts from [[Chapter 9: Getting Unstuck with Data]].
- The 1066 Harold Godwinson analogy reinforces the danger of relying solely on [[Chapter 12: Your Best Evidence: Finding and Using Internal Data]] without external context.
