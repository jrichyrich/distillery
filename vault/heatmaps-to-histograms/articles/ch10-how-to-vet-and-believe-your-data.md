---
title: "Chapter 10: How to Vet and Believe Your Data"
tags: [cyber-risk, crq, data-quality, data-vetting, nusap, range-adjustment, calibration]
sources: [raw/papers/ch10-how-to-vet-and-believe-your-data.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue opens with a cautionary tale about inheriting a FAIR-based risk program where impact estimates were built on a poorly designed vendor marketing survey with a tiny sample size and no disclosed methodology. The data was irrelevant to the company's size and sector, yet someone had plugged it directly into the model. When he rebuilt the analysis with defensible data, risk estimates dropped by over $50M per scenario, leading to uncomfortable questions from leadership. The chapter's thesis is that the CRQ field has developed sophisticated modeling techniques but has "largely ignored the fundamental question of data quality."

The core framework is a three-step data evaluation process: Screen, Document, and Assess Quality. The screening step applies four quick checks (Relevance, Verifiability, Applicability, Coverage) adapted from the [[NUSAP Framework]] used in environmental science and nuclear safety for over 30 years. Data failing one criterion gets heavy uncertainty ranges; data failing two or more gets excluded. The documentation step creates an audit trail capturing data value, unit, source, and date collected. The quality assessment step uses a simplified checklist with four tiers (Fatal Flaws, Major Concerns, Moderate Issues, High Quality) that map to specific range multipliers.

Martin-Vegue introduces the concept of range widening as "honest uncertainty accounting," not punishment for poor data. When data quality is questionable, ranges widen (x2 for moderate issues, x3 for major concerns) rather than excluding potentially useful information. He grounds this in Hubbard's calibration research and the NUSAP framework, arguing that "false precision from bad data is worse than honest uncertainty." The chapter also includes eight common data vetting traps and the [[Value of Information]] concept for knowing when to stop looking for better data.

## Key Points

- The CRQ field has sophisticated modeling but has largely ignored the fundamental question of data quality. Other fields like climate science and nuclear safety solved this decades ago.
- GenAI has transformed data vetting from prohibitively expensive to practical, making rigorous evaluation standards finally feasible.
- Every dataset should carry its own "nutrition label" showing where it came from, how reliable it is, and what limitations matter.
- The four screening criteria (RAVC): Relevance, Verifiability, Applicability, Coverage.
- "Ponemon-like" cost-of-breach reports should be treated as directional input, not calibrated data, due to small self-selected samples, opaque survey designs, and marketing-oriented packaging.
- If data cannot be verified, do not discard it immediately. Note it as unverified and use it only as supporting or anecdotal evidence.
- The "don't stack penalties" rule: apply only the largest single quality adjustment needed, not cumulative multipliers.
- Range widening is grounded in calibration science: imprecise inputs require more conservative ranges to maintain calibration.
- Eight common traps include: trusting official-looking data, using averages as best estimates, echo chambers of bad data citing the same flawed original study, and assuming big sample size equals high quality.
- The [[Value of Information]] principle: information is only valuable if it could change your decision.

## Core Principles

### Three-Step Data Evaluation Process
1. **Screen**: Four quick checks -- Relevance (does it measure what I am modeling?), Verifiability (can I check the source and method?), Applicability (does it fit my organization type?), Coverage (does it miss important events?). Fails 1 = use with caution; Fails 2+ = exclude.
2. **Document**: Capture data value, unit, source (full citation), and date collected for every data point. This creates both transparency and reusability.
3. **Assess Quality**: Apply the Simplified Quality Checklist -- Fatal Flaws (exclude), Major Concerns (x3 range adjustment), Moderate Issues (x2 range adjustment), High Quality (no adjustment).

### The NUSAP Framework Adaptation
The screening approach is adapted from the [[Numeral Unit Spread Assessment Pedigree]] (NUSAP) framework (Funtowicz & Ravetz, 1990), used for over 30 years in environmental science, nuclear safety, industrial safety, and public health to evaluate data quality under uncertainty.

### Range Widening as Honest Uncertainty
Rather than excluding imperfect data, the framework preserves useful signal by widening uncertainty ranges. The multipliers (x2, x3) are guidelines; organizations should adjust based on what feels defensible when presenting to stakeholders. The key principle is consistent: lower quality data should result in wider uncertainty ranges.

### The Ten-Minute Assessment Method
For each source, spend no more than ten minutes asking: (1) Can I defend this source if challenged? (2) Does this actually measure what I need? (3) What would make me distrust this number? If you cannot answer the first two confidently, find better data. The third guides range adjustments.

## Practical Takeaways

- Apply the four screening criteria (Relevance, Verifiability, Applicability, Coverage) to every data source before using it in a model.
- Record sources immediately with full citations. Do not rely on memory. Include enough detail for someone else to find the same information.
- Always record ranges when available, not just single numbers. If a source provides only a single number, convert it to a range using SME input.
- For averages in cyber data (which is typically skewed), do not use the average as your "most likely" value. Ask SMEs to create a three-point estimate using the average as a starting point.
- Apply the "don't stack penalties" rule: use only the largest single quality adjustment, not cumulative multipliers.
- Before spending more time hunting for better data, apply the [[Value of Information]] test: will finding more information actually change your decision?
- Watch for echo chambers: multiple industry reports often cite the same original flawed study.
- Stop assessing when you have identified main quality issues, know what range adjustment to apply, and can explain limitations to stakeholders.

## Key Terms & Concepts

- **[[NUSAP Framework]]**: Numeral, Unit, Spread, Assessment, Pedigree -- a framework from Funtowicz and Ravetz (1990) for evaluating data quality under uncertainty, adapted here for CRQ.
- **[[Range Widening]]**: Technique of expanding uncertainty ranges to reflect reduced confidence in data quality, using multipliers (x2 for moderate issues, x3 for major concerns).
- **[[Value of Information]] (VOI)**: Concept from Douglas Hubbard's Applied Information Economics: information is only valuable if it could change your decision, and the value depends on how much that decision matters.
- **[[Calibration]]**: When stated probabilities match actual frequencies over time. Well-calibrated analysts produce uncertainty ranges that accurately reflect what they know vs. what they wish they knew.
- **[[Data Nutrition Label]]**: Martin-Vegue's metaphor for the documentation that should accompany every dataset: origin, reliability, and limitations visible at a glance.
- **[[Fatal Flaws]]**: Data quality category warranting immediate exclusion -- fabricated sources, fraudulent organizations, synthetic data presented as real, marketing surveys disguised as research.

## Connections

- This chapter provides the evaluation framework that must be applied to [[Chapter 11: Finding and Using External Data]], [[Chapter 12: Your Best Evidence: Finding and Using Internal Data]], and [[Chapter 13: Your Secret Weapon: Subject Matter Experts]] outputs.
- The range widening technique connects directly to the Monte Carlo simulation inputs discussed in earlier chapters and the calibration concepts revisited in [[Chapter 13: Your Secret Weapon: Subject Matter Experts]].
- The NUSAP framework brings cross-disciplinary rigor from environmental science and nuclear safety, reinforcing Martin-Vegue's recurring argument that CRQ should borrow proven methods from mature risk disciplines.
- The Value of Information concept from Hubbard connects to [[Chapter 9: Getting Unstuck with Data]]'s "enough data" principle and the decision-support focus of the entire book.
- The caution about "Ponemon-like" reports directly informs how readers should handle sources found via [[Chapter 11: Finding and Using External Data]].
