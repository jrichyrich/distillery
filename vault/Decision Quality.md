# Decision Quality

A personal reference pulling together frameworks, principles, and resources on making better decisions — sourced from my book collection and knowledge bases.

## Core Frameworks

### The Decision Triangle (Ron Howard)

Every real decision requires three ingredients — if any is missing, you have "a meeting agenda item disguised as a risk assessment" ([[Chapter 19: Making Better Decisions with CRQ|Ch.19]]):

1. **Choice** — real alternatives exist (e.g., "Should we migrate to the cloud or stay on-premises?" is a decision; "We are migrating to the cloud; what are the risks?" is not)
2. **Preference** — what outcome matters most is articulated
3. **Information** — evidence exists to compare options

Logic evaluates all three together. Run the **Decision Check** before any analysis: identify the actual options, the preferred outcome, and available information. If any element is missing, pause and clarify before modeling.

### One-Way Doors vs. Two-Way Doors (Amazon)

From [[Antipattern #20: Seeking Perfect Decisions|AP20]]: High-stakes decisions are **one-way doors** — hard to reverse, significant negative consequences (picking a new CEO, opening a new location). Low-stakes decisions are **two-way doors** — reversible with a smaller blast radius (a temporary product discount, adding a website feature). Amazon encourages people to take two-way-door decisions with about **70% of the information** they wish they had. Even for one-way doors, Octopus Organizations maintain momentum with clear timelines, decision owners, and defined criteria.

The **waterline principle** (W.L. Gore) expresses the same idea: decisions "above the waterline" carry low risk and flow through guardrails; "below the waterline" decisions could sink the ship and require deliberation ([[Antipattern #16: Gatekeeping Approval|AP16]]).

### Thinking in Bets (Annie Duke)

From [[Antipattern #20: Seeking Perfect Decisions|AP20]] and [[thinking-in-bets|Thinking in Bets]]: Life is more like poker than chess — full of hidden information and luck. View decisions as bets and adopt a probabilistic mindset. "I'm not sure" or "I'm 70 percent certain" is not weakness but a vital step to seeing the world accurately. A Q1 sales estimate shifts from a single paralyzing number to a probable range you can manage.

Key distinction — **"resulting"**: the trap of conflating decision quality with outcome. Good decisions can lead to bad results and vice versa. When prolonged processes produce good outcomes, organizations credit the painful process as "sound" and set it as the bar, creating vicious cycles of over-analysis.

**Picking vs. Sorting**: "Picking" is the agonizing process of finding the single best option among several good ones; "sorting" is rapidly categorizing options into "good enough to try" and "not worth pursuing right now." When options are roughly equivalent and reversal cost is low, the goal is not to be perfectly right but to learn as fast as possible.

### Fermi Estimation

From [[Antipattern #20: Seeking Perfect Decisions|AP20]]: Nobel laureate Enrico Fermi's method breaks complex decisions into estimable parts based on reasonable assumptions. The classic illustration: "How many piano tuners in Chicago?" — connecting population, household, piano ownership, tuning frequency, and tuner capacity estimates to arrive at approximately 120 tuners. This approach:

- Breaks down intimidation
- Embraces uncertainty by accepting imperfect data
- Reveals hidden knowledge
- Focuses on critical variables
- Fosters probabilistic thinking
- Enables faster action

### The "Less Wrong" Mindset

From [[Chapter 4: Foundations|Ch.4]]: "All models are wrong, but some are useful" (George Box) — or, in executive-friendly language, "the map is not the territory" (Korzybski). The goal of quantification is not to be perfectly right. It is to be **less wrong** than gut instinct and color-coded matrices.

Single numbers like "$750K" pretend to know the future with certainty; ranges like "$300K–$1.2M" honestly acknowledge uncertainty while still providing useful bounds. The standard: **P5/P50/P95** — a 90% confidence interval where P50 (the median) serves as the planning figure while the full range supports decision-making.

### Optimization Over Reduction

From [[Chapter 19: Making Better Decisions with CRQ|Ch.19]]: The mature goal of risk management is not to minimize risk but to **balance protection, performance, and opportunity** for maximum organizational value per dollar. A mitigation that saves $2M in expected loss but costs $3M to deploy is "mathematically worse than doing nothing." Increasing risk is a legitimate treatment option (ISO 31000) — examples include outsourcing, relaxing controls that frustrate customers, or taking on tech debt for market speed.

### The Decision Support Package

From [[Chapter 19: Making Better Decisions with CRQ|Ch.19]]: Four questions for presenting results to executives:

1. **What decision is on the table?**
2. **What changes across options?**
3. **What is the trade-off?** (in financial terms, using ranges not points)
4. **What do you recommend and why?**

### Right-Sizing Analysis Effort

From [[Chapter 19: Making Better Decisions with CRQ|Ch.19]]: Match analytical depth to decision stakes:

| Depth | Effort | Use Case |
|---|---|---|
| **Fast** | Hours, one scenario | Quick tactical calls, gut-check |
| **Focused** | Days, blended data, sensitivity testing | Budget decisions |
| **Deep-dive** | Weeks, full decomposition, multiple analyses | M&A, cloud migration, strategic/enterprise |

Match granularity to audience: **strategic** (board/insurers), **operational** (CISO/CTO), **tactical** (engineering). These are nested, not competing.

### Good Strategy Kernel (Rumelt)

From [[good-strategy-bad-strategy|Good Strategy Bad Strategy]]: A good strategy has three elements — a **diagnosis** of the challenge, a **guiding policy** for dealing with it, and **coherent actions** designed to carry out that policy. Most organizations confuse goals, slogans, and wishful thinking with strategy.

---

## Key Principles

1. **"Risk analysis is just decision analysis by another name"** — the real purpose is to inform choices, not produce reports ([[Chapter 19: Making Better Decisions with CRQ|Ch.19]])

2. **Separate decision quality from outcome quality** — good decisions can lead to bad results and vice versa; judge the process, not the result ([[Antipattern #20: Seeking Perfect Decisions|AP20]], [[thinking-in-bets|Thinking in Bets]])

3. **Most decisions are reversible — treat them accordingly** — the cost of delay often exceeds the cost of being wrong ([[Antipattern #20: Seeking Perfect Decisions|AP20]])

4. **Data informs, it doesn't decide** — be data-informed, not data-driven; data is one voice in a larger conversation ([[Antipattern #33: Deferring to Data|AP33]])

5. **When anecdotes contradict data, the anecdotes are usually right** — not because data is wrong, but because you're measuring the wrong thing (Jeff Bezos, via [[Antipattern #33: Deferring to Data|AP33]])

6. **Fall in love with the problem, not the answer** — the why must drive the what; "People don't buy drills, they buy holes" ([[Antipattern #29: Falling in Love with Answers|AP29]])

7. **Ranges over points** — single-number estimates hide uncertainty; ranges, distributions, and probability curves reveal it ([[Chapter 4: Foundations|Ch.4]])

8. **Research more when near a decision threshold** — invest in reducing epistemic uncertainty when better information could change the choice; live with uncertainty when the decision is clear either way ([[Chapter 4: Foundations|Ch.4]])

9. **Decision-making improves through practice** — document decisions along with assumptions, process, and pertinent factors for "fielding" — analyzing how much of an outcome was due to skill vs. luck ([[Antipattern #20: Seeking Perfect Decisions|AP20]])

10. **Subtract before you add** — the first instinct should be to remove what's in the way rather than adding new layers ([[subtract|Subtract]], [[Antipattern #16: Gatekeeping Approval|AP16]])

11. **Cognitive diversity drives better decisions** — diverse teams feel harder but perform better; the discomfort of creative abrasion is the mechanism that produces superior outcomes ([[The Octopus Organization: Master Book Summary|Octopus Master Summary]])

12. **Speak the language of decisions** — executives already think in probabilities and trade-offs, just not in specialist jargon; frame uncertainty in financial terms ([[Chapter 19: Making Better Decisions with CRQ|Ch.19]])

---

## Decision Traps to Avoid

### Analysis Paralysis / Seeking Perfect Decisions
Organizations overrely on data, exhaustive analysis, and many stakeholders to remove as much uncertainty as possible before making the "right" decision. Fear of failure makes no decision feel safer than the wrong one, even when inaction itself becomes the failure. Intel's indecision on mobile and GPU markets helped AMD gain ground, costing billions. ([[Antipattern #20: Seeking Perfect Decisions|AP20]])

### Resulting
Conflating decision quality with outcome quality. When prolonged processes produce good outcomes, organizations credit the painful process and set it as the bar. When quick decisions lead to bad outcomes (due to luck), organizations add more gates. This creates vicious cycles of over-analysis. ([[Antipattern #20: Seeking Perfect Decisions|AP20]], [[thinking-in-bets|Thinking in Bets]])

### Deferring to Data
Treating data as a talisman that ends deliberation and overrides challenges. Humans are terrible at interpreting probabilities. Numbers carry a "false facticity" — W. Edwards Deming's "In God we trust; all others must bring data" has morphed into blind faith replacing critical thinking. "The digital dashboard becomes so alluring that they forget to look out the window." ([[Antipattern #33: Deferring to Data|AP33]])

### Falling in Love with Answers
Rushing to solutions before deeply understanding the problem. Solutions are seductive — spending time on them feels more productive than understanding causes. Biases reinforce this: confirmation bias, availability heuristic, anchoring, and the "neighborhood of symptom" rule (solving problems where symptoms appear rather than where causes live). General Magic built a technical marvel that sold 3,000 units because they never asked what customers wanted. ([[Antipattern #29: Falling in Love with Answers|AP29]])

### Choice Overload
The jam study: 24 options attracted more shoppers but only 3% bought; 6 options drove 30% sales — ten times the conversion from one-fourth the options. More options does not mean better decisions. ([[Antipattern #20: Seeking Perfect Decisions|AP20]])

### Diluted Accountability
Many people get a partial say without anyone having final say. The chicken-and-pig problem: everyone contributes opinions but no one commits to owning the outcome. McDonald's "smart equipment project" dragged on for seven years as a zombie project with no clear owner. ([[Antipattern #21: Diluting Accountability|AP21]])

### Gatekeeping Approval
Complex, multilayered approval processes where "it takes only one 'no' to stall but everyone's 'yes' to move ahead," creating a powerful bias toward inaction. Each gatekeeper optimizes for their narrow domain; collectively they make solutions unworkable. ([[Antipattern #16: Gatekeeping Approval|AP16]])

### False Precision
Reporting numbers with greater accuracy than the data supports. Single numbers like "$750K" imply certainty; ranges too narrow ($748K–$752K) are false precision in disguise. On the other end, ranges too wide ($10M–$500M) signal you need more research. ([[Chapter 4: Foundations|Ch.4]])

### The Four Cognitive Defaults (Shane Parrish)
From [[clear-thinking|Clear Thinking]]: Automatic patterns that hijack thinking — the **emotion default**, the **ego default**, the **social default**, and the **inertia default**. Clear thinking requires recognizing and overriding these in ordinary moments, not just big decisions.

### Confirmation Loops
Organizations selectively seek and interpret data confirming their preconceptions. A retailer had years of decline masked by pandemic-era spending data — they explained the decline away and moved on, until it snowballed into bankruptcy. ([[Antipattern #33: Deferring to Data|AP33]])

### Easy-to-Get Metrics
Companies rely on measures implemented because they're fastest and easiest, not the best representation. A salesperson's declining quarterly sales might mask their transformative mentorship and market-pioneering work. ([[Antipattern #33: Deferring to Data|AP33]])

---

## Communicating Decisions

### Lead with Loss Exceedance Statements
From [[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]]: Start executive presentations with a narrative — "There is a 20% chance that losses will exceed $2M" — then show the loss exceedance curve. The LEC answers the question executives actually care about: "What are the odds we'll lose more than $X?"

### The Five-Number Summary
Minimum, Q1, median, Q3, maximum — a rapid way to reveal the "shape of risk." Contrasting a relatively even mobile phone loss distribution (median $466, max $2,974) with a data breach scenario (median $2.2M, max $270M) instantly communicates the "fat tail" nature of cyber risk. ([[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]])

### Present Both Typical and Tail
Always present **typical losses** (median) and **outlier exposure** (90th or 95th percentile) — they drive different but equally important conversations. When the median is zero (high-frequency events where most years have no incident), use the full distribution to show tail risk could be catastrophic. ([[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]])

### Anchor to Decision Thresholds
Anchor your loss exceedance curve to meaningful thresholds: risk tolerance, cyber insurance limits, budget reserves, SEC materiality, and security project costs. This transforms a probability graph into a decision-making tool. ([[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]])

### Round for Honesty
Round dollar values to avoid the appearance of false precision: "$1.7–3.2M" becomes "$2–3M" for executive discussions. Monte Carlo results change slightly each run — focus on patterns, not precision. ([[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]])

### When Executives Demand "The Number"
Provide the P50 (median) as a planning baseline while making the full range visible: "The typical outcome is $500K, but this could reasonably range from $200K to $1.2M." ([[Chapter 4: Foundations|Ch.4]])

### The Decision Support Package Format
From [[Chapter 19: Making Better Decisions with CRQ|Ch.19]]: Structure every executive presentation around four questions — (1) What decision is on the table? (2) What changes across options? (3) What is the trade-off in financial terms? (4) What do you recommend and why?

### Communicate Like an Actuary
From [[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Ch.6]]: Look to actuaries, epidemiologists, and economists for communication models — they have already solved the challenge of presenting uncertainty to decision-makers. The "original sin" of traditional risk frameworks is not just ignoring uncertainty but training executives to expect false certainty.

### Replace Gatekeepers with Guardrails
From [[Antipattern #16: Gatekeeping Approval|AP16]]: Use **tenets** — simple, memorable principles expressing explicit trade-offs — to speed up decisions. A good tenet has a defensible opposite. Example: "We optimize for speed. Speed enables us to learn quickly, pivot if needed, and scale quickly." (The trade-off: cost.) Co-create tenets with stakeholders to transform them from approval bottlenecks into advisers.

---

## Books in My Collection

### Probabilistic Thinking & Decision Process
- [[thinking-in-bets|Thinking in Bets]] (Annie Duke) — Reframes decisions as bets under uncertainty; separating decision quality from outcome quality using poker as the lens
- [[how-to-decide|How to Decide]] (Annie Duke) — Hands-on toolkit companion to *Thinking in Bets* with exercises for overcoming bias and thinking in probabilities
- [[superforecasting|Superforecasting]] (Tetlock & Gardner) — What makes superforecasters: calibration, belief updating, and the fox vs. hedgehog distinction
- [[maxims-for-thinking-analytically|Maxims for Thinking Analytically]] (Dan Levy / Richard Zeckhauser) — Concise, memorable principles for sharper analytical thinking under uncertainty

### Mental Models & Cognitive Frameworks
- [[clear-thinking|Clear Thinking]] (Shane Parrish) — Recognizing and overriding the four cognitive defaults (emotion, ego, social, inertia) that hijack everyday decisions
- [[mental-models|Mental Models]] (Parrish & Beaubien) — Quick reference to ~100 models across general thinking, physics, biology, systems thinking, and numeracy
- [[the-great-mental-models-volume-1|The Great Mental Models, Volume 1]] (Parrish & Beaubien) — Deep dives into foundational models: map/territory, first principles, inversion, circle of competence, Occam's razor
- [[super-thinking|Super Thinking]] (Weinberg & McCann) — Comprehensive catalog of hundreds of mental models from economics, psychology, physics, and philosophy
- [[the-art-of-thinking-in-graphs|The Art of Thinking in Graphs]] (Dolev Erez) — 52 psychological principles visualized as graphs: Dunning-Kruger, loss aversion, decision fatigue, Pareto, sunk cost

### Risk Quantification & Measurement
- [[how-to-measure-anything|How to Measure Anything]] (Douglas Hubbard) — Anything can be measured, including intangibles; calibrated estimation and the value of information for prioritizing what to measure
- [[against-the-gods-the-remarkable-story-of-risk|Against the Gods]] (Peter Bernstein) — The intellectual history of probability and risk, from Pascal to modern portfolio theory to behavioral economics

### Strategic Decisions
- [[good-strategy-bad-strategy|Good Strategy Bad Strategy]] (Richard Rumelt) — The kernel of good strategy (diagnosis, guiding policy, coherent action) and the hallmarks of bad strategy (fluff, goal-setting, failure to diagnose)
- [[essentialism-the-disciplined-pursuit-of-less|Essentialism]] (Greg McKeown) — Ruthless prioritization: say no to the trivial many to say yes to the vital few

### Cognitive Biases & Reasoning Errors
- [[loserthink|Loserthink]] (Scott Adams) — Identifying unproductive mental habits by learning how psychologists, engineers, scientists, and economists think differently
- [[critical-thinking-logic-and-problem-solving|Critical Thinking, Logic & Problem Solving]] (Neuronswaves) — Systematic guide to logical fallacy identification, analytical reasoning, and problem-solving frameworks

### Behavioral & Emotional Dimensions
- [[the-psychology-of-money|The Psychology of Money]] (Morgan Housel) — How behavior matters more than knowledge in financial decisions; the role of luck, compounding, and tail events
- [[choosing-clarity|Choosing Clarity]] (Kimberly Giles) — Overcoming fear-based thinking to achieve clarity in life decisions

### Subtraction & Simplification
- [[subtract|Subtract]] (Leidy Klotz) — The cognitive bias toward addition over subtraction; the best improvements often come from removing rather than adding

---

## Deep Dive Reading List

### Probabilistic Thinking & Calibration
How to think in probabilities, calibrate confidence, and update beliefs with evidence:
- [[thinking-in-bets|Thinking in Bets]] and [[how-to-decide|How to Decide]] for the foundational decision-as-bet framework
- [[superforecasting|Superforecasting]] for calibration techniques and the superforecaster mindset
- [[Chapter 4: Foundations|Heatmaps Ch.4]] for P5/P50/P95, ranges over points, and the "less wrong" mindset
- [[how-to-measure-anything|How to Measure Anything]] for calibrated estimation and computing the value of information

### Risk Quantification & Communication
How to measure, model, and present risk to decision-makers:
- [[Chapter 6: Interpreting and Communicating Quantitative Risk Results|Heatmaps Ch.6]] for loss exceedance curves, five-number summaries, and histograms
- [[Chapter 19: Making Better Decisions with CRQ|Heatmaps Ch.19]] for the Decision Triangle, Decision Support Package, and right-sizing analysis
- [[how-to-measure-anything|How to Measure Anything]] for measuring "intangibles" and applied information economics
- [[against-the-gods-the-remarkable-story-of-risk|Against the Gods]] for the intellectual history of how humanity learned to quantify uncertainty

### Strategic Decision-Making
How to make high-stakes, irreversible decisions well:
- [[good-strategy-bad-strategy|Good Strategy Bad Strategy]] for diagnosing the challenge and crafting coherent action
- [[essentialism-the-disciplined-pursuit-of-less|Essentialism]] for ruthless prioritization
- [[Antipattern #20: Seeking Perfect Decisions|AP20]] for one-way/two-way doors, Fermi estimation, and disagree-and-commit
- [[Antipattern #21: Diluting Accountability|AP21]] for single-threaded leadership and the DRI model

### Cognitive Biases & Decision Traps
How biases distort decisions and what to do about them:
- [[clear-thinking|Clear Thinking]] for the four cognitive defaults (emotion, ego, social, inertia)
- [[the-art-of-thinking-in-graphs|The Art of Thinking in Graphs]] for visual reference to 52 cognitive phenomena
- [[loserthink|Loserthink]] for recognizing discipline-specific blind spots
- [[Antipattern #29: Falling in Love with Answers|AP29]] for confirmation bias, anchoring, and the seduction of solutions
- [[Antipattern #33: Deferring to Data|AP33]] for false facticity, confirmation loops, and probabilistic illiteracy

### Mental Models & Thinking Toolkits
Building a broad repertoire of models for reasoning across domains:
- [[the-great-mental-models-volume-1|The Great Mental Models, Vol. 1]] for deep dives into foundational models
- [[mental-models|Mental Models]] for the quick-reference catalog
- [[super-thinking|Super Thinking]] for the most comprehensive single volume
- [[maxims-for-thinking-analytically|Maxims for Thinking Analytically]] for Zeckhauser's concise analytical heuristics
- [[critical-thinking-logic-and-problem-solving|Critical Thinking, Logic & Problem Solving]] for logical fallacy identification

### Organizational Decision Dynamics
How organizational structures help or hinder good decisions:
- [[Antipattern #16: Gatekeeping Approval|AP16]] for replacing gatekeepers with guardrails and tenets
- [[Antipattern #20: Seeking Perfect Decisions|AP20]] for analysis paralysis and disagree-and-commit
- [[Antipattern #21: Diluting Accountability|AP21]] for single-threaded leaders and the chicken-vs-pig problem
- [[Antipattern #33: Deferring to Data|AP33]] for data-informed vs. data-driven cultures
- [[Antipattern #29: Falling in Love with Answers|AP29]] for problem-first culture

---

## Related Articles in This Vault

### From Heatmaps to Histograms (CRQ Knowledge Base)
- [[Chapter 4: Foundations]] — Ranges, confidence intervals, frequency/magnitude, the "less wrong" mindset, aleatory vs. epistemic uncertainty
- [[Chapter 6: Interpreting and Communicating Quantitative Risk Results]] — Loss exceedance curves, histograms, five-number summaries, communicating risk to executives
- [[Chapter 19: Making Better Decisions with CRQ]] — Ron Howard's Decision Triangle, Decision Support Package, right-sizing analysis, five risk treatment options, optimization over reduction
- [[Master Summary: From Heatmaps to Histograms]] — Top 10 principles and practical takeaways for the entire CRQ discipline

### From The Octopus Organization (Organizational Change Knowledge Base)
- [[Antipattern #16: Gatekeeping Approval]] — Replacing approval layers with guardrails, tenets, and the waterline principle
- [[Antipattern #20: Seeking Perfect Decisions]] — Analysis paralysis, one-way/two-way doors, Fermi estimation, thinking in bets, picking vs. sorting, disagree and commit
- [[Antipattern #21: Diluting Accountability]] — Single-threaded leaders, DRIs, the chicken-and-pig problem, meeting culture
- [[Antipattern #29: Falling in Love with Answers]] — Problem-first thinking, Five Whys, Working Backwards, delayed intuition
- [[Antipattern #33: Deferring to Data]] — Data-informed vs. data-driven, probabilistic illiteracy, false facticity, anecdotes as signals
- [[The Octopus Organization: Master Book Summary]] — The three pillars (Clarity, Ownership, Curiosity), all 36 antipatterns, top 10 principles

### From the Ebook Catalogue
- [[thinking-in-bets|Thinking in Bets]] — Decision quality vs. outcome quality, probabilistic thinking
- [[how-to-decide|How to Decide]] — Practical toolkit for decision improvement
- [[clear-thinking|Clear Thinking]] — Cognitive defaults, everyday decision quality
- [[superforecasting|Superforecasting]] — Calibration, prediction, belief updating
- [[good-strategy-bad-strategy|Good Strategy Bad Strategy]] — Strategy kernel, proximate objectives
- [[how-to-measure-anything|How to Measure Anything]] — Measuring intangibles, calibrated estimation
- [[mental-models|Mental Models]] — Quick reference to ~100 mental models
- [[the-great-mental-models-volume-1|The Great Mental Models, Volume 1]] — Foundational thinking concepts
- [[super-thinking|Super Thinking]] — Comprehensive mental model catalog
- [[the-art-of-thinking-in-graphs|The Art of Thinking in Graphs]] — Visual guide to cognitive biases
- [[against-the-gods-the-remarkable-story-of-risk|Against the Gods]] — History of probability and risk
- [[the-psychology-of-money|The Psychology of Money]] — Behavioral finance and decision-making
- [[essentialism-the-disciplined-pursuit-of-less|Essentialism]] — Ruthless prioritization
- [[maxims-for-thinking-analytically|Maxims for Thinking Analytically]] — Analytical heuristics from Harvard
- [[loserthink|Loserthink]] — Multi-disciplinary thinking to escape cognitive traps
- [[critical-thinking-logic-and-problem-solving|Critical Thinking, Logic & Problem Solving]] — Logical fallacies and reasoning
- [[choosing-clarity|Choosing Clarity]] — Fear-based thinking and decision clarity
- [[subtract|Subtract]] — The bias toward addition over subtraction
