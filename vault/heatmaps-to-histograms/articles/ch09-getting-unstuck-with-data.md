---
title: "Chapter 9: Getting Unstuck with Data"
tags: [cyber-risk, crq, data-collection, influence-diagrams, three-source-model, data-myths]
sources: [raw/papers/ch09-getting-unstuck-with-data.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 9 serves as the gateway to Part 3 of the book, bridging the conceptual foundations of Parts 1 and 2 with the practical data work that follows. Martin-Vegue opens with a story about a risk analyst who spent over a month paralyzed by data collection for a cloud infrastructure assessment at a financial institution. The analyst kept finding data but questioning whether it applied, discovering logs but worrying they were too sparse. The solution was not more data but a systematic approach: start with what you have, create priors from external sources, and fill in blanks methodically.

The chapter's central contribution is the [[Three-Source Model]], which organizes all CRQ data into three complementary categories: external data (industry context), internal data (organizational reality), and subject matter expert input (forward-looking judgment). Martin-Vegue argues that the biggest obstacle is not actually a lack of data but rather a set of persistent myths that make quantitative risk feel impossible before analysts even begin. He systematically dismantles six of these myths, showing that you do not need massive datasets, expensive tools, actuarial tables, incident history, perfectly calibrated experts, or large teams to produce useful quantitative risk analysis.

Martin-Vegue also introduces the [[Data Type Matrix]], which classifies data along two spectrums: qualitative vs. quantitative and subjective vs. objective. He explicitly addresses AI-generated data, arguing it cannot serve as a primary data source due to lack of grounding in direct observation, untraceable origins, and the risk of circular reasoning. However, AI can accelerate each of the three real data sources. The chapter closes with the empowering message that "the data you need to get started is closer than you think."

## Key Points

- Data paralysis is the most common failure mode in CRQ. Analysts get stuck not because they lack data, but because they do not know which data matters.
- Before searching for data, work backward from your decision using an [[Influence Diagram]] to identify which uncertainties actually drive the outcome.
- The "quick test" for influence diagrams: if changing an input would not meaningfully change your decision, it is not worth chasing data for it.
- The [[Figure of Merit]] in CRQ is usually [[Annualized Loss Exposure]] (ALE), but could also be downtime hours or probability of a material event.
- Six data myths keep people stuck: needing lots of data, needing expensive tools, needing actuarial tables, needing incident history, SMEs producing garbage, and needing large teams.
- The [[Nirvana Fallacy]] tricks people into rejecting imperfect solutions while waiting for perfect ones that do not exist.
- The three data sources work together: external data provides context, internal data adds specificity, and SME judgment bridges gaps and looks forward.
- Quality over quantity: one high-quality source often beats three poor-quality sources.
- AI-generated data has three fundamental problems for risk analysis: not grounded in direct observation, untraceable origin, and risk of circular reasoning.
- All data types have value when used appropriately, including subjective expert judgment when properly structured.

## Core Principles

### The Three-Source Model
Every credible risk assessment draws from three complementary data sources: (1) [[External Data]] providing industry context and base rates, (2) [[Internal Data]] offering organizational specificity, and (3) [[Subject Matter Experts]] delivering forward-looking judgment. Together these create a "complete foundation for defensible risk estimates."

### Influence Diagrams for Data Scoping
Before collecting data, decompose the problem using an [[Influence Diagram]] showing how decisions (rectangles), uncertainties (ellipses), fixed facts (trapezoids), and objectives (diamonds/hexagons) connect via arrows of influence. This five-to-ten-minute exercise can save hours of wasted research.

### The Data Type Matrix
Data falls along two spectrums: qualitative-to-quantitative and subjective-to-objective. The four resulting quadrants (subjective-qualitative, subjective-quantitative, objective-qualitative, objective-quantitative) each have value and specific techniques for extraction and validation.

### The Six Data Myths
Martin-Vegue's myth-busting framework: (1) You need enough data to decide, not a lot of data; (2) Excel works fine to start; (3) Use proxy data and class rating instead of actuarial tables; (4) Use industry base rates when you have no incidents; (5) Structured elicitation makes SME input reliable; (6) Focus beats resources -- scope tight, start small.

## Practical Takeaways

- Before any data hunt, spend five to ten minutes sketching an influence diagram to identify which uncertainties actually drive your decision.
- Start with the three-source model: identify what external reports you have access to, what internal logs and tickets exist, and who the relevant SMEs are.
- Use the "enough data" test: can a business leader choose between options with what you have? If yes, you have enough.
- Begin with Excel or Google Sheets. Master the concepts before investing in specialized platforms.
- When you have no internal incident history, start with external base rates and adjust directionally based on your control posture.
- Ask SMEs for ranges (P5, P50, P95), never point estimates.
- Pick one well-scoped scenario and spend a few hours gathering data from the three sources to build a basic model.
- Use AI to accelerate research, pattern extraction, and interview structuring, but never as a primary data source.

## Key Terms & Concepts

- **[[Three-Source Model]]**: Framework organizing CRQ data into external data, internal data, and SME input as complementary sources.
- **[[Influence Diagram]]**: A decision map showing how decisions, uncertainties, and outcomes connect, used to identify which data to collect.
- **[[Figure of Merit]]**: The single quantity a model produces to show how well choices satisfy objectives (e.g., ALE, downtime hours).
- **[[Annualized Loss Exposure]] (ALE)**: The most common figure of merit in CRQ, representing expected annual loss from a risk scenario.
- **[[Nirvana Fallacy]]**: Cognitive bias where people reject imperfect solutions while waiting for perfect ones that do not exist.
- **[[Class Rating]]**: Actuarial technique of grouping entities with shared characteristics to estimate risk when individual history is sparse.
- **[[Base Rate]]**: Historical frequency observed across a similar population, used as a starting estimate before organizational adjustment.
- **[[Data Type Matrix]]**: Classification of data along qualitative/quantitative and subjective/objective spectrums.

## Connections

- This chapter sets up the detailed treatments in [[Chapter 10: How to Vet and Believe Your Data]], [[Chapter 11: Finding and Using External Data]], [[Chapter 12: Your Best Evidence: Finding and Using Internal Data]], and [[Chapter 13: Your Secret Weapon: Subject Matter Experts]].
- The influence diagram concept connects to the scenario-building work in Chapter 7 and the forms-of-loss framework in Chapter 8.
- The Nirvana Fallacy discussion reinforces the book's recurring theme from Part 1 that imperfect quantification is superior to qualitative color-based ratings.
- The three real-world examples (ransomware, phishing, cloud outage) demonstrate how the three sources combine in practice, previewing techniques detailed in Chapters 11-13.
- The data myths section directly responds to common objections introduced in earlier chapters about why CRQ is "impossible."
