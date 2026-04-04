---
title: "Chapter 15: Extending This to CRQ"
tags: [cyber-risk, crq, monte-carlo, rosi, what-if-analysis, risk-modeling]
sources: [raw/papers/ch15-extending-this-to-crq.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 15 is the assembly chapter -- the IKEA instruction manual, as Martin-Vegue puts it. After Chapters 7 through 14 laid out the individual pieces (scenarios, loss forms, data collection, vetting, blending), this chapter shows how they all fit together into a complete, end-to-end quantitative risk analysis. Martin-Vegue is emphatic that everything in this chapter is framework-agnostic: it works with FAIR, with Doug Hubbard's methods, or with any other quantitative approach. He positions it as the foundation that Chapter 16 will later map into FAIR's specific structure.

The chapter presents a ten-step "baby-steps map" that walks the reader from writing a single risk scenario through running a Monte Carlo simulation and interpreting the results. Beyond the core assembly process, Martin-Vegue introduces two high-value extensions: what-if analysis (running two versions of the same model to compare outcomes) and Return on Security Investment (ROSI). ROSI is presented as the metric that answers the question executives always ask: "If we spend this money, what actually changes?" He is careful to distinguish ROSI from traditional ROI, explaining that security does not generate profit -- it avoids loss.

The chapter closes with an extended reading list and a survey of adjacent disciplines (actuarial science, decision science, forecasting, behavioral economics) that share intellectual DNA with CRQ. Martin-Vegue's message is clear: CRQ is not a subfield of cybersecurity but rather age-old business forecasting applied to technology, and serious practitioners should look far beyond security literature to build their skills.

## Key Points

- The ten-step assembly process is deliberately sequential and mechanical -- Martin-Vegue says that is how every modeler starts
- Most analysts should begin with just one or two loss forms (typically productivity and response) rather than trying to cover all six
- The spreadsheet from the companion site performs Monte Carlo simulation with 10,000 trials; a GenAI prompt is also provided for vibe-coding the simulation
- What-if analysis requires only copying the model sheet and changing one variable -- frequency, magnitude, or both
- ROSI formula: (Mean Loss Before - Mean Loss After) / Cost of Control; a ratio above 1.0 means the control is cost-effective
- Always use the mean (not median or P95) for ROSI calculations because the mean captures long-term expected loss including rare but painful years
- Control success probability should be factored into ROSI -- ask SMEs "out of 10 or 100 times this control is needed, how often does it work?"
- Martin-Vegue explicitly acknowledges that the three-source model and vetting framework add cognitive load compared to earlier FAIR practice, but argues this is intentional and offset by AI-assisted workflows
- The chapter contains a Star Wars reference: learning CRQ requires looking beyond cybersecurity books, just as Anakin's power could not be learned "from a Jedi"

## Core Principles

**The Ten-Step CRQ Assembly Map:**
1. Write one crisp risk scenario using A-T-E (Asset, Threat, Effect)
2. Pick the relevant loss forms (start with one or two)
3. List the minimum data needed for frequency and magnitude
4. Grab an external base rate
5. Pull one internal signal
6. Ask 1-3 SMEs for a range (P5, P50, P95)
7. Vet and adjust data using Chapter 10 methods
8. Blend three sources into a single range (Chapter 14)
9. Drop ranges into the spreadsheet and run Monte Carlo simulation
10. Interpret results: histogram, five-number summary, loss exceedance curve

**ROSI as a Decision Support Tool:**
- ROSI > 1.0: Control reduces more loss than it costs -- usually worth considering
- ROSI ~ 1.0: Break-even -- double-check assumptions or combine with other benefits
- ROSI < 1.0: Costs more than modeled benefit -- consider alternatives or non-quantitative justification
- ROSI is not a promise; some investments with low ROSI may still be mandatory (regulatory controls), and high-ROSI investments may be hard to implement

**Three Reporting Metrics and When to Use Them:**
| Metric | What It Means | When to Use |
|--------|--------------|-------------|
| Mean | Long-term average loss | ROSI and cost-benefit decisions |
| Median (P50) | Most typical year | Communicating what is "normal" |
| P95 | A bad but plausible year | Stress tests and resilience planning |

## Practical Takeaways

- Start with Exercise 15-1: take a scenario from Chapter 7 and run the full ten-step process end to end
- For what-if analysis, model common scenarios: implementing MFA, automating failover, expanding to a new market, removing a control to free resources, or adding regulatory fines
- When presenting ROSI to finance, use this bridge sentence: "ROSI shows how much expected loss we avoid per dollar spent. If you want it in traditional ROI form, we can restate it as net benefit divided by cost."
- Translate ROSI into net form (ROSI net = (Mean Loss Avoided - Cost of Control) / Cost of Control) only when a CFO or finance leader asks for "ROI" in the traditional sense
- Do not base ROSI on P95 (overstates benefits by assuming every year is near-catastrophic) or on the median (understates by ignoring rare costly years)
- Adjust ROSI benefit by control success probability: if a control works 80% of the time, only 80% of the modeled loss reduction counts
- Explore the recommended reading list, especially Thinking in Bets (Annie Duke), Superforecasting (Tetlock), and The Flaw of Averages (Savage)

## Key Terms & Concepts

- **[[Monte Carlo Simulation]]**: A technique that generates thousands of randomized trials to model the range of possible outcomes; the core computational engine of CRQ
- **[[ROSI (Return on Security Investment)]]**: The ratio of expected annual loss avoided to the cost of a security control; the primary metric for cost-benefit decisions in CRQ
- **[[What-If Analysis]]**: Running two or more versions of the same model with one changed variable to see how risk shifts; a precursor to the Six Levers framework in Chapter 18
- **[[Loss Exceedance Curve]]**: A visualization showing the probability that annual loss will exceed various dollar thresholds; a key communication tool for stakeholders
- **[[Five-Number Summary]]**: Minimum, first quartile, median, third quartile, and maximum of simulated outcomes; provides the shape of the risk distribution
- **[[A-T-E Framework]]**: Asset, Threat, Effect -- the three-part structure for writing clear, modelable risk scenarios (from Chapter 7)
- **[[Control Success Probability]]**: The proportion of times a control actually works when needed; used to adjust ROSI and avoid overestimating control value
- **[[NPV / IRR]]**: Net Present Value and Internal Rate of Return -- financial metrics used for long-term or capital-intensive decisions; mentioned as the tools finance teams use when ROSI needs to be escalated

## Connections

- Directly assembles the pieces from [[Chapter 7: Risk Scenarios]] (A-T-E), [[Chapter 8: Loss Magnitude]] (loss forms), [[Chapter 10: Evaluating Data Quality]] (vetting), [[Chapter 11: External Data]], [[Chapter 12: Internal Data]], [[Chapter 13: Subject Matter Experts]], and [[Chapter 14: How to Blend Data]]
- References the simulation and interpretation concepts from [[Chapter 5: Monte Carlo Basics]] and [[Chapter 6: Interpreting Results]]
- Serves as the framework-agnostic foundation that [[Chapter 16: Extending to FAIR]] maps into FAIR's specific taxonomy
- What-if analysis is expanded in [[Chapter 18: The Six Levers That Move Risk]]
- The "less wrong" philosophy from [[Chapter 4: The Less Wrong Mindset]] is invoked as the reason for accepting imperfect data and moving forward
