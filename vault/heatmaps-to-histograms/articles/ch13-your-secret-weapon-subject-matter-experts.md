---
title: "Chapter 13: Your Secret Weapon: Subject Matter Experts"
tags: [cyber-risk, crq, sme-elicitation, expert-judgment, mini-delphi, calibration, forecasting]
sources: [raw/papers/ch13-your-secret-weapon-subject-matter-experts.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue opens with a story about nearly delivering a dangerously inaccurate risk assessment. External data showed low breach frequency for the sector, and internal data showed zero incidents in five years with good audit results. He was about to wrap up when a fifteen-minute conversation with a senior database administrator completely flipped the assessment: the system had terrible logging, and three unauthorized access attempts in 18 months had bypassed monitoring entirely, never making it into official incident reports. This story makes the case for SMEs as the third essential data source -- the one that provides forward-looking insight and organizational context that no external dataset or internal log can capture.

The chapter introduces a five-level classification of SME input types, from unaided guesses through aided estimation, calibrated experts, expert aggregation, to prediction markets. Martin-Vegue notes this classification is his own, informed by Tetlock's Superforecasting, Cooke's Method, and the Delphi technique. A key insight is that cyber risk analysts lack the natural feedback loops that build calibration in fields like meteorology or bookmaking. Major incidents are rare, feedback is slow, and some analysts go entire careers without experiencing a major incident they have modeled. This makes structured elicitation techniques essential rather than optional.

The practical core of the chapter is three strategies for working with uncalibrated experts: (1) ask multiple experts so individual errors cancel out, (2) structure the elicitation process using the Mini-Delphi method, and (3) prime them with a ten-minute calibration exercise using trivia questions. The Mini-Delphi method, adapted from the RAND Corporation's 1950s Delphi technique, involves five rounds: private estimation, anonymous reveal, group discussion, private revision, and consensus. Martin-Vegue also covers distributed elicitation for when you cannot get everyone in a room, three applications of SME input (when data does not exist, when data needs context, and when modeling future changes), and systematic aggregation techniques using median for calibrated experts or mean for uncalibrated groups.

## Key Points

- Risk analysis is a forecast about the next 12 months, not a report on last year. SMEs bridge past data and future risk.
- The five types of SME input: (1) Unaided Guess, (2) Aided Estimation, (3) Calibrated Expert, (4) Expert Aggregation, (5) Prediction Market. Each has distinct use cases and improvement paths.
- Cyber risk lacks natural calibration feedback loops. Meteorologists get daily feedback; cyber risk analysts may go entire careers without experiencing a major modeled incident.
- Calibration can be simulated through specially crafted trivia exercises that teach confidence interval thinking, not correct answers.
- Most people give ranges that are too narrow because they confuse "best guess plus/minus a little" with "90% confidence interval." A 90% CI should feel uncomfortably wide.
- Three strategies for uncalibrated experts: ask multiple experts (minimum viable = 2), structure the process (Mini-Delphi), and prime them quickly (ten-minute calibration).
- Relevance beats quantity: three incident responders who have handled ransomware provide better input than ten executives who have only read about it.
- Watch for the [[IKEA Effect]]: people overvalue things they helped build and may downplay failure probability of systems they designed.
- Avoid using the final decision-maker as your SME. Decision owners carry strategic or political pressures that influence their forecast.
- SMEs should not estimate from scratch. Present external and internal data first, then ask them to react, adjust, and contextualize.
- When simple aggregation does not work (experts disagree by more than 5x), model multiple scenarios and present both conservative and optimistic cases.
- Alternative techniques for SMEs who struggle with ranges: walk through extreme outcomes, curve sketching, and the chip method.

## Core Principles

### The Five-Level SME Classification
Martin-Vegue's own framework, informed by Tetlock, Cooke, and Delphi research:
1. **Unaided Guess**: Raw opinion with no evidence. Use only for early ideation.
2. **Aided Estimation**: Opinion supported by data or domain knowledge. Acceptable for low-stakes models.
3. **Calibrated Expert**: Domain expert trained in expressing uncertainty as ranges. Ideal for model inputs.
4. **Expert Aggregation**: Structured combination of multiple experts (e.g., Delphi). Best for high-importance models.
5. **Prediction Market**: Forecasting markets with real stakes. Theoretically powerful but rare in practice.

### The Mini-Delphi Method
Adapted from RAND Corporation's Delphi technique (Dalkey & Helmer, 1969) for practical CRQ workshops:
- **Round 1**: Private estimation -- everyone writes ranges silently, no discussion.
- **Round 2**: Reveal and visualize -- collect, anonymize, and display all ranges.
- **Round 3**: Group discussion -- explore disagreements, collect reasoning. Not a debate.
- **Round 4**: Revision -- invite private updates, no pressure to change.
- **Round 5**: Consensus -- record final ranges and rationale.
Solves three problems: dominant voices, anchoring bias, and social conformity pressure.

### The Ten-Minute Calibration Primer
Three trivia questions (e.g., "How tall is LeBron James?" "What year was the first iPhone released?" "How many time zones does Russia span?") where SMEs give 90% confidence ranges. Reveals overconfidence by showing most ranges are too narrow. Takes ten minutes, requires no formal training, and resets expectations about what uncertainty looks like.

### Three Applications of SME Input
1. **When Data Does Not Exist**: Elicit P5, P50, P95 ranges from scratch using structured prompts.
2. **When Data Needs Context**: Present external/internal data and ask SMEs to adjust for organizational specifics.
3. **When Modeling Future Changes**: Focus on how planned controls, emerging threats, or business changes will shift risk. Historical data cannot answer forward-looking questions.

### Aggregation Methods
- Use MEDIAN() for calibrated experts; use AVERAGE() for uncalibrated groups (biases tend to cancel out).
- Before aggregating, examine spread: tight clustering (good), bimodal distribution (investigate), wide scatter (more structure needed), outliers 3x off (investigate).
- Simpler alternative: take the lowest P5, average P50, and highest P95 to preserve full uncertainty spread.

## Practical Takeaways

- Always run the ten-minute calibration primer before any elicitation session, even informal ones.
- Minimum viable SME panel is two experts with direct experience. One expert works but needs additional quality controls.
- Select SMEs based on direct operational experience, recent exposure (within two years), willingness to express uncertainty, and business context understanding.
- Avoid SMEs who are directly incentivized by the outcome of the estimate. If unavoidable, acknowledge the incentive explicitly.
- Do not ask SMEs to estimate from scratch. Show them external base rates and internal data first, then ask "Does this make sense for us? What would you adjust?"
- Always ask for ranges (P5, P50, P95), never point estimates. If they give a point estimate, redirect: "That's helpful. What would be the range around that?"
- Capture rationale with every range. "What's your range, and what experience or evidence made you pick it?" Document it while it is fresh.
- Frame workshops as forecasting, not auditing, to reduce defensiveness and the [[IKEA Effect]].
- For distributed elicitation, prepare a standard package with context setting, estimation framework explanation, and specific questions. Use the same prompts for every SME.
- When experts disagree by more than 5x, do not force aggregation. Model both conservative and optimistic scenarios.

## Key Terms & Concepts

- **[[Expert Elicitation]]**: Formal discipline for synthesizing expert judgments when other forms of data are unreliable or insufficient. Well established in nuclear safety, structural engineering, and environmental risk.
- **[[Mini-Delphi Method]]**: Compressed version of the Delphi technique adapted for CRQ workshops. Five rounds of private estimation, anonymous reveal, discussion, revision, and consensus.
- **[[Calibration]]**: When stated probabilities match actual frequencies over time. Requires constant feedback loops that cyber risk lacks naturally.
- **[[IKEA Effect]]**: Cognitive bias where people overvalue things they helped build, leading them to downplay failure probability of systems or controls they designed.
- **[[Prediction Market]]**: Forecasting market where participants buy and sell shares based on event outcomes. Rare in cyber risk due to infrastructure needs and cultural barriers.
- **[[Overconfidence Bias]]**: The tendency to give ranges that are too narrow. Most common calibration failure, addressed by the ten-minute calibration primer.
- **[[Distributed Elicitation]]**: Gathering structured SME input through one-on-one meetings, email, Slack, or online forms when synchronous workshops are not feasible.

## Connections

- This chapter completes the [[Three-Source Model]] introduced in [[Chapter 9: Getting Unstuck with Data]], providing the third pillar after [[Chapter 11: Finding and Using External Data]] and [[Chapter 12: Your Best Evidence: Finding and Using Internal Data]].
- The opening story about the database administrator with zero reported incidents directly illustrates the [[Coverage Rate]] problem from [[Chapter 12: Your Best Evidence: Finding and Using Internal Data]].
- Quality adjustments for SME estimates reference the range widening framework from [[Chapter 10: How to Vet and Believe Your Data]].
- The P5/P50/P95 estimation format aligns with the Monte Carlo simulation inputs from earlier modeling chapters.
- The Bayesian updating pattern runs through Chapters 11-13: external data creates the prior, internal data provides evidence for updating, and SMEs produce the forward-looking posterior.
- Martin-Vegue references Hubbard's calibration work, Tetlock's Superforecasting, Cooke's structured expert judgment, and the RAND Delphi technique as the scientific foundations underpinning these practical methods.
