---
title: "Chapter 18: CRQ in the Org"
tags: [cyber-risk, crq, organizational-change, program-management, maturity, six-levers]
sources: [raw/papers/ch18-crq-in-the-org.md]
created: 2026-04-04
confidence: high
---

## Summary

Chapter 18 bridges the gap between risk analysis (the book's focus) and risk management (the broader organizational discipline). Martin-Vegue opens with a tale of two CRQ programs drawn from his own career. The first failed because he returned from FAIR training as a zealot and tried to convert the entire program overnight -- "conviction alone doesn't build programs. Culture, pacing, and relationships do." The second succeeded at a large technology company because he started by doing nothing to the existing qualitative register, instead finding a single team with a real problem (hundreds of millions in exposure, no funding), running a baseline-plus-hypothetical analysis that showed 70% risk reduction for $2M, and letting that win create organic demand. One analysis became 2, then 15, and eventually the whole program flipped to FAIR without anyone calling it a "transition."

The chapter then dissects why CRQ programs fail at three levels -- individual (substituting conviction for influence), team (building models without credibility or over-engineering infrastructure before solving a single problem), and organizational (misaligned incentives, unclear ownership, replacing qualitative systems overnight). Martin-Vegue provides a six-step playbook for making CRQ stick: start with a single decision, speak the language of the business, build allies before infrastructure, integrate gently with existing processes, normalize uncertainty, and show progress not perfection.

The second half introduces the "Six Levers That Quietly Change Your Risk" -- forces beyond controls that move risk estimates over time: internal security posture, business and operating model changes, the external threat and regulatory landscape, incident and near-miss learnings, improved visibility, and risk appetite/governance shifts. Martin-Vegue illustrates this with a story from 2011 at a regional bank where Operation Payback (DDoS attacks on the US financial system) exposed the fallacy that controls are the only lever. He closes by contrasting early-stage programs (reporting to auditors, color dashboards, static snapshots) with mature ones (supporting business decisions, probabilistic narratives, continuous feedback), and argues AI is the tool that makes ongoing monitoring of the Six Levers finally practical.

## Key Points

- The difference between Martin-Vegue's failed and successful CRQ programs was not math -- it was empathy, pacing, and timing
- CRQ is "a conversation you sustain," not "a revolution you declare"
- Programs fail at three predictable levels: individual (zealotry without influence), team (models without credibility), and organizational (misaligned incentives and unclear ownership)
- At the team level, the opposite failure is also common: over-engineering taxonomy and tooling for months before solving a single business problem
- "A spreadsheet that drives one funded decision is worth more than a polished platform nobody uses"
- When green dashboards are rewarded more than honest uncertainty, anything that reveals more risk gets treated as a problem
- CRQ reframes incentives around efficiency: most loss reduction per dollar, not stacking controls to show activity
- Before building models, make decision rights explicit: who decides, who implements, who monitors, who pays
- Risk is moved by six levers, and controls are only the first -- and often not the biggest one
- The Operation Payback story illustrates that heatmaps have no way to reflect real-world spikes in threat activity
- AI removes "the last practical excuse not to use CRQ" by automating monitoring of the Six Levers

## Core Principles

- **The Two CRQ Programs Framework**: Failed programs are built on conviction and speed; successful ones on relationships, patience, and curiosity
- **Three Levels of Failure**: Individual (conviction without influence), Team (models without credibility or over-engineering), Organizational (misaligned incentives, unclear ownership, immune response to sudden change)
- **Six-Step Adoption Playbook**: (1) Start with a single decision, (2) Speak the language of the business, (3) Build allies before infrastructure, (4) Integrate gently with existing processes, (5) Normalize uncertainty, (6) Show progress not perfection
- **The Six Levers That Quietly Change Your Risk**: (1) Internal security posture and control effectiveness, (2) Business and operating model changes, (3) External threat and regulatory landscape, (4) Incident and near-miss learnings, (5) Improved visibility, (6) Risk appetite, governance, and insurance terms
- **Early-Stage vs. Mature Programs**: A maturity model distinguishing purpose (auditors vs. decisions), communication (colors vs. probability), data use (static vs. continuous), and leadership view (experimental vs. integral)
- **Six Reassessment Questions**: Have controls aged? Did the business morph? Have attackers leveled up? What did the last incident teach us? Do we see the system more clearly? Did the definition of "too much risk" change?

## Practical Takeaways

- Do not replace a qualitative program overnight; coexist with it and let success make the case for broader adoption
- Find a team with a real problem and a stuck decision -- that is your first CRQ engagement
- Run a baseline analysis (risk today) plus a hypothetical analysis (risk after investment) to demonstrate clear ROI
- Package results into short reports executives can act on; let early wins create demand for more analyses
- Build allies in Finance, Operations, and Legal first -- they already understand trade-offs and the power of numbers
- Don't call it a "CRQ program" at first; call it a "decision support capability" or "forecasting service"
- When reassessing risk, run through the Six Levers checklist -- if even one answer is "yes," the math moved
- Use AI to automate monitoring of threat data, financial exposure, and business context changes
- Track early-stage vs. mature characteristics and use them to benchmark your program's evolution

## Key Terms & Concepts

- **[[Cyber Risk Quantification]]** (CRQ): The practice of measuring cyber risk in financial and probabilistic terms rather than qualitative categories
- **[[FAIR]]** (Factor Analysis of Information Risk): The quantitative risk framework Martin-Vegue ultimately adopted for his most successful program
- **[[Six Levers of Risk Change]]**: The six forces that move risk estimates over time: controls, business changes, external threats, incidents, visibility, and governance
- **[[Control Decay]]**: The gradual degradation of security controls through configuration drift, obsolescence, or staffing changes
- **[[Risk Appetite]]**: The amount of risk an organization is willing to accept; can shift due to board directives, regulatory pressure, or insurance changes
- **[[Monte Carlo Simulation]]**: Referenced as a measure of maturity -- "the real measure of success isn't how many Monte Carlo simulations you've run"
- **[[Heatmap]]**: The qualitative red/yellow/green system that CRQ aims to replace, shown to be unable to reflect real-world threat spikes

## Connections

- Builds directly on [[Chapter 17: How to Run a Complete CRQ Assessment]] by showing how to embed assessment practices into organizational life
- Connects forward to [[Chapter 19: Making Better Decisions with CRQ]] which focuses on the decision-making that CRQ programs exist to support
- The Six Levers framework extends the scenario and data concepts from [[Chapter 7: From Risk Statements to Assessment Scope]], [[Chapter 11: Finding and Using External Data]], and [[Chapter 12: Your Best Evidence - Finding and Using Internal Data]]
- The tale of two programs echoes [[Chapter 4: Foundations]] on being "less wrong" -- the first program demanded perfection, the second embraced iteration
- The call to normalize uncertainty connects to [[Chapter 6: Interpreting and Communicating Quantitative Risk Results]]
- AI recommendations connect back to [[Chapter 3: GenAI Needs Adult Supervision]] on responsible AI use in risk work
