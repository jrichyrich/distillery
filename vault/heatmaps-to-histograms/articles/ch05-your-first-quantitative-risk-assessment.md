---
title: "Chapter 5: Your First Quantitative Risk Assessment"
tags: [cyber-risk, crq, monte-carlo, frequency, magnitude, loss-exposure, fair]
sources: [raw/papers/ch05-your-first-quantitative-risk-assessment.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 5 marks the transition from conceptual foundations to hands-on quantitative risk analysis. Martin-Vegue introduces the Monte Carlo simulation as the backbone of Cyber Risk Quantification (CRQ), framing it not as an intimidating mathematical technique but as "sophisticated coin flipping applied to risk." Through a carefully scaffolded series of exercises, readers build from a literal coin-flip simulation in Excel to a complete quantitative risk assessment of mobile phone loss or damage, combining frequency and magnitude estimates into annualized loss exposure.

The chapter emphasizes that historical data informs but does not dictate future forecasts. Martin-Vegue demonstrates this with his own mobile phone incident history: despite a historical average of 0.6 incidents per year, he sets his P50 (most likely) value at zero because his threat model has fundamentally changed -- his children have their own phones, he uses better cases, and he has changed his behavior around water. This human judgment layer is something he argues AI and data alone cannot replicate, cautioning readers to "be wary of products or models that claim to run analyses completely on data and AI alone."

The chapter culminates with a full Monte Carlo simulation that combines frequency ranges (P5-P95) with magnitude ranges (cost of screen repair through full device replacement) to produce annualized loss exposure. Martin-Vegue's results show a median annual exposure of roughly $465, with bad years reaching $3,300 -- numbers that immediately inform practical decisions about phone insurance, protective cases, and cash reserves. He closes by urging readers to treat personal risk assessments as legitimate CRQ practice, noting that "the methodology you just used is identical to what Fortune 500 companies pay consultants to perform."

## Key Points

- Monte Carlo simulation uses randomness to explore potential future events through repeated sampling, generating thousands of "what if" scenarios rather than single-point predictions
- The method was developed during the Manhattan Project by John von Neumann and Stanislaw Ulam, named after the Monaco casino as a nod to Ulam's love of gambling
- In CRQ, each Monte Carlo trial simulates the next 12 months; 10,000 trials is the minimum recommended, but 50,000 is better for capturing outlier results
- The **Law of Large Numbers** explains why more trials produce results closer to the expected value -- with 10 coin flips you might see 80/20 splits, but 10,000 flips consistently approaches 50/50
- Historical data should inform but not dictate forecasts; when your risk profile has materially changed, adjust your estimates accordingly
- Frequency and magnitude must be combined to produce true risk exposure -- knowing how often incidents happen is meaningless without knowing their financial impact
- The chapter uses the **triangular distribution** for simplicity, noting it may not capture all real-world complexity but teaches distribution basics effectively
- Zero incidents does not mean zero risk unless you are completely avoiding the activity
- Martin-Vegue recommends a **decomposition strategy** for estimating upper bounds: break incidents into subtypes (theft, loss, damage) and estimate each separately

## Core Principles

- **Monte Carlo Simulation**: A method using random sampling to explore the range of possible future outcomes. In CRQ, each trial represents a simulated year, and the distribution of results reveals what is probable versus merely possible.
- **P5-P50-P95 Forecasting**: Rather than point estimates, analysts provide three values representing the lower bound, typical value, and upper bound at 90% confidence. This framework acknowledges uncertainty while providing actionable ranges.
- **Annualized Loss Exposure**: The FAIR-derived concept that replaces traditional "annualized loss expectancy." It represents your annual risk as a distribution of possible outcomes rather than a single number, using actuarial language that acknowledges uncertainty.
- **Frequency x Magnitude = Risk Exposure**: The fundamental equation of quantitative risk. Frequency estimates (how often) are combined with magnitude estimates (how much) through Monte Carlo simulation to produce a distribution of annual loss scenarios.
- **The 90% Confidence Principle**: Ranges are calibrated so that nine times out of ten, the actual result falls within the stated bounds. This gives "permission to be imperfect" and avoids absurdly wide ranges aimed at 100% confidence.

## Practical Takeaways

- Start with the coin-flip exercise in Excel to internalize how Monte Carlo works before applying it to risk scenarios
- When forecasting frequency, gather five years of historical data, verify it against records (billing statements, receipts, insurance claims), then adjust based on how your threat model has changed
- Use GenAI to accelerate mundane data gathering tasks like searching through invoices and credit card statements for incident evidence
- Set your lower bound (P5) first (often zero for rare events), then your upper bound (P95) by thinking through plausible worst-case combinations, then anchor your typical value (P50) with reasoned judgment
- Validate your confidence level: if you are 100% confident in your range, it is probably too wide; if only 50-60% confident, it is probably too narrow
- For events with no personal incident history, use external data (studies, reports, surveys) to establish the upper bound, then adjust based on your specific risk profile
- Build a portfolio of personal risk assessments (car accidents, home burglary, travel risk, identity theft) to develop genuine CRQ expertise through repeated application
- When discussing ALE, always clarify which version people mean: annualized loss expectancy (single point), annualized loss exposure (distribution), or average loss expectancy (mean value)

## Key Terms & Concepts

- **[[Monte Carlo Simulation]]**: A method using random sampling to generate thousands of possible outcomes, revealing the range of what could happen rather than predicting a single result
- **[[Law of Large Numbers]]**: The statistical principle that as trial count increases, results converge toward the expected value -- the reason Monte Carlo needs thousands of trials
- **[[Triangular Distribution]]**: A probability distribution defined by three points (minimum, most likely, maximum) used in this chapter for its simplicity and intuitive appeal
- **[[Annualized Loss Exposure]]**: FAIR's actuarial term for annual risk expressed as a distribution of possible outcomes, replacing the false-precision implied by "annualized loss expectancy"
- **[[Loss Magnitude]]**: The potential financial impact per incident, distinct from annualized exposure which factors in frequency
- **[[Subject Matter Expert (SME)]]**: A person with direct operational knowledge who provides estimates and validates data; Martin-Vegue uses himself as the SME for his phone risk
- **[[90% Confidence Interval]]**: The range within which you expect the actual outcome to fall nine times out of ten, calibrated to avoid both false precision and absurd breadth
- **[[Frequency]]**: The number of times an event occurs within a given time period, often expressed as fractional annual rates (e.g., 0.33 = once every three years)

## Connections

- Builds directly on the foundational concepts of ranges, percentiles, and uncertainty from [[Chapter 4: Thinking in Ranges]]
- The results produced here feed directly into [[Chapter 6: Interpreting and Communicating Quantitative Risk Results]], which teaches how to present Monte Carlo output to stakeholders
- The concept of scoping what you measure (frequency of what? magnitude of what?) is formalized in [[Chapter 7: From Risk Statements to Assessment Scope]]
- The magnitude side of the equation (cost of incidents) is decomposed in detail in [[Chapter 8: Understanding Loss: The Six Forms]]
- Martin-Vegue's use of FAIR terminology (loss magnitude, annualized loss exposure) connects to FAIR's broader framework used throughout the book
- The recommendation to use SMEs for judgment calls previews the data collection methods covered in Part 3 (Chapters 9-13)
