---
title: "Chapter 2: Probability's Plot Twist: After 300 Years, We Colored It Red"
tags: [cyber-risk, crq, probability-theory, risk-matrices, history, qualitative-vs-quantitative, FAIR]
sources: [raw/papers/ch02-probability-s-plot-twist-after-300-years-we-colored-it-red.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 2 traces the 300-year intellectual history of risk analysis to explain how cybersecurity ended up with color-coded matrices instead of probabilistic methods. Martin-Vegue first defines the two approaches precisely: qualitative risk analysis uses ordinal scales and descriptive categories (High/Medium/Low) arranged in risk matrices, while quantitative risk analysis uses numerical estimates and probabilistic models to forecast frequency and financial impact. He uses the hot sauce analogy -- "mild, medium, hot" labels vs. Scoville units measured by chromatography -- to illustrate why ordinal scales cannot support meaningful comparison or math. The chapter explicitly warns against "semi-quantitative" methods, citing David Vose's characterization of them as "absurdities" that replace colors with numbers (1, 2, 3) while remaining fundamentally ordinal.

The historical narrative begins with bottomry (maritime risk transfer dating to 4000-3000 BCE), moves through Pascal and Fermat's 1654 correspondence that founded probability theory, and tracks how Lloyd's of London, Halley's life tables, actuarial science, and decision theory all built on probabilistic foundations. The pivotal shift came in the early 20th century when Frederick Winslow Taylor's "scientific management" introduced a competing philosophy that viewed uncertainty as a problem to be eliminated through process control rather than embraced through measurement. Management consulting firms carried this Taylorist philosophy forward, and in 1978 both the US Department of Defense and David Hussey formalized risk classification and the "risk matrix" respectively. By the 1990s, colored grids had become the consulting industry's standard product.

Martin-Vegue frames this as "The Great Divergence": two completely separate disciplines now operate under the same name "risk analysis," with fundamentally different intellectual ancestries, core questions, philosophies, success criteria, and tools. He profiles the "legends" who built modern CRQ -- Douglas Hubbard (measurement accessibility), Jack Jones (FAIR framework), and the growing practitioner community (SIRA, FAIR Institute) -- as those leading cybersecurity back to its scientific roots.

## Key Points

- Qualitative risk analysis uses ordinal scales (ranked categories where differences between categories are unknown and unequal) -- these are not measurements
- The hot sauce analogy: "mild, medium, hot" vs. Scoville units illustrates why ordinal scales fail for comparison; a habanero is 20-40x hotter than a jalapeno, not "one category up"
- Quantitative risk analysis uses numerical estimates, ranges, and Monte Carlo simulation to model uncertainty; the loss exceedance curve (LEC) is a key visualization
- Semi-quantitative methods are still qualitative -- replacing colors with numbers (1-5) does not make them quantitative; David Vose calls them "absurdities"
- Probability theory originated from Pascal and Fermat's correspondence about a gambling problem in 1654
- For centuries there was only one type of "risk analysis": the probabilistic kind
- The "Great Divergence" created two disciplines under the same name: probabilistic thinking (Pascal, actuarial science, decision theory) vs. management consulting approaches (Taylorism, efficiency optimization, process control)
- The US DoD risk classification (January 1978) and Hussey's "risk matrix" (August 1978) mark the formalization of qualitative methods
- FIPS-65 (1979) was the first publication describing risk management in computer security, advocating quantitative risk but providing no practical guidance
- Douglas Hubbard's *How to Measure Anything* (2007) made measurement accessible; *How to Measure Anything in Cybersecurity Risk* (2016, with Seiersen) brought it to mainstream cybersecurity
- Jack Jones created FAIR in 2005 to provide a structured methodology for decomposing risk into measurable parts
- The academic case against risk matrices is comprehensively documented in Hubbard's *The Failure of Risk Management*

## Core Principles

- **The Great Divergence**: Two separate intellectual traditions -- probabilistic science and industrial management consulting -- now compete under the single label "risk analysis"
- **Ordinal scales are not measurements**: You cannot perform meaningful math on categories; they obscure rather than illuminate uncertainty
- **The Taylorism test**: If an implementation is designed to reduce uncertainty for future decisions, it traces to 17th-century probability theory; if it explicitly ignores uncertainty through process control, it traces to Industrial Age thinking
- **Return to scientific roots**: CRQ is not a new trend but a return to the probabilistic foundations that meteorologists, actuaries, and epidemiologists never abandoned

## Practical Takeaways

- If your organization uses semi-quantitative methods (1-5 scales), recognize these are still qualitative and ordinal -- the numbers are just adjectives
- Even if you must create heatmaps, understanding their flaws makes you a sharper analyst who asks better questions and recognizes when results "don't pass the smell test"
- Read Hubbard's *The Failure of Risk Management* for the comprehensive academic case against risk matrices
- Join practitioner communities: SIRA (Society of Information Risk Analysts) and the FAIR Institute provide conferences, training, and peer support
- When someone proposes that the existing qualitative approach is "good enough," use the hot sauce analogy to explain why ordinal comparisons fail across teams

## Key Terms & Concepts

- **[[Ordinal Scales]]**: Ranked categories where the differences between ranks are unknown and unequal; the foundation of qualitative risk analysis
- **[[Risk Matrix]]**: A grid (typically 3x3 to 5x5) plotting likelihood against impact using ordinal categories; first formalized by David Hussey in 1978
- **[[Loss Exceedance Curve]]** (LEC): A quantitative visualization showing the probability that losses will exceed different dollar amounts
- **[[Monte Carlo Simulation]]**: A method that uses randomness within defined ranges to simulate thousands of possible outcomes
- **[[The Great Divergence]]**: Martin-Vegue's term for the split between probabilistic risk analysis and management-consulting-driven qualitative methods
- **[[Taylorism]]**: Frederick Winslow Taylor's scientific management philosophy that sought to eliminate uncertainty through strict process control
- **[[Semi-Quantitative Risk]]**: A misnomer; methods that replace qualitative labels with numbers (1-5) while remaining ordinal -- still qualitative
- **[[FAIR]]**: Factor Analysis of Information Risk; created by Jack Jones in 2005 as a structured framework for quantitative risk measurement
- **[[Bottomry]]**: Ancient maritime financial instrument (4000-3000 BCE) demonstrating early risk transfer and quantified decision-making

## Connections

- Provides the historical context for the broken incentive loop described in [[Chapter 1: Welcome to the Rebellion]]
- The qualitative vs. quantitative distinction directly informs the foundational concepts of ranges, frequency, and magnitude in [[Chapter 4: Foundations]]
- The mention of Monte Carlo simulation previews its detailed treatment in Chapter 5
- The FAIR framework profiled here gets a dedicated deep dive in Chapter 16
- Sets up [[Chapter 3: GenAI Needs Adult Supervision]] by establishing that CRQ methods exist and work -- GenAI can accelerate their adoption
