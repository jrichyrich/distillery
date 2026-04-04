---
title: "Chapter 12: Your Best Evidence: Finding and Using Internal Data"
tags: [cyber-risk, crq, internal-data, coverage-rates, frequency-estimation, magnitude-estimation, scenario-building]
sources: [raw/papers/ch12-your-best-evidence-finding-and-using-internal-data.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue positions internal data as the analyst's anchor -- the source that grounds generic industry baselines in organizational reality. He opens with a story from a financial services firm where he was tasked with building a quantified "Top 5" risk list. Starting with external base rates for data breach frequency, he then gathered internal data from telemetry, audits, incident logs, postmortems, red team exercises, bug bounty submissions, and control evaluations. The results moved his estimates substantially: incident history was better than industry average, but control gaps and the firm's specific customer base and regulatory environment meant potential breach costs were significantly higher than peers. Internal data made that adjustment possible.

The chapter maps fifteen categories of internal data sources to their CRQ applications, covering everything from security detection and intelligence (EDR alerts, SIEM logs, vulnerability scans) to customer impact data (complaints, SLA breaches, churn). Martin-Vegue provides specific starter questions and scripts for approaching different teams (SecOps, IT, Audit, Finance, Legal, Helpdesk, BC/DR, Vendor Risk, AppSec) and includes practical advice for handling pushback when people say "no," "that data is confidential," or "audit just came through."

The practical core is four transformation methods: (1) using timestamped records to estimate frequency, (2) extracting event durations for downtime and recovery estimates, (3) defining scenarios from repeating incident patterns, and (4) modeling control conditions from exceptions and audit findings. A critical concept introduced here is [[Coverage Rate]] -- the percentage of your environment reflected in the data -- illustrated with the smoke detector analogy where ten out of ten detectors pass inspection, but the building was supposed to have fifty. Without the denominator, metrics cannot tell the whole story. The chapter also addresses ethical considerations including attorney-client privilege, PII protection, GenAI data privacy, and the principle that risk assessments should "inform, not shame."

## Key Points

- Internal data is "your best evidence" because it provides organizational specificity that external data and SME input cannot replicate.
- Start with your scenario, not your data. Let the risk assessment scope guide which internal sources to prioritize.
- Fifteen categories of internal data sources are mapped to CRQ applications: Security Detection, Incident Response, Helpdesk, BC/DR, Financial/Legal, Asset/Infrastructure, Compliance/Audit, Identity/User Behavior, Awareness/Culture, Risk/Governance, Change/Project, Third-Party/Vendor, Network/Infrastructure Monitoring, Customer/External Impact, and Security Testing.
- Internal data's key limitation: it may be scattered, incomplete, biased, or have poor coverage. It should never stand alone.
- Stakeholders trust internal data because it comes from their own environment, tied to incidents they remember and systems they use.
- The smoke detector analogy: knowing that 10 out of 10 detectors work is meaningless if the building should have 50. [[Coverage Rate]] is the denominator that turns metrics into meaningful signals.
- Three ways to address poor coverage: find complementary sources, scale estimates mathematically (only if coverage rate is known and representative), or use SME input to validate coverage assumptions.
- Specific script for every team: do not ask for "data" -- ask for timelines, logs, summaries, or reports. Speak the team's language.
- When people push back, offer to do the work yourself, clarify that you need trends and counts not sensitive details, and frame risk analysis as complementary to audit, not a duplication.
- GenAI can sift through mountains of internal data including telemetry, vulnerability scans, unstructured text, and incident logs, but only with enterprise-grade tools that meet organizational security policies.

## Core Principles

### Four Transformation Methods
1. **Timestamped Records to Frequency**: Count relevant events, define the time window, divide to get annualized rate, adjust for partial coverage. Example: 12 phishing incidents over 8 months = ~18 per year.
2. **Event Durations to Magnitude**: Extract start/end times from tickets and postmortems. Break timelines into detection, containment, and resolution stages. Calculate P5, P50, P95 recovery times. Pair with cost categories (labor at hourly wage, revenue loss per hour, third-party fees, SLA penalties).
3. **Repeating Patterns to Scenarios**: Look for recurring causes, effects, threat paths, and consequences in incident data. Three cloud breaches from the same vendor misconfiguration becomes a concrete scenario.
4. **Exceptions and Audit Findings to Control Conditions**: Failing controls signal the need to adjust frequency and/or magnitude upward. Example: 80% of systems exempt from MFA raises likelihood of account compromise.

### Coverage Rate
The percentage of your environment reflected in the data. Without knowing the denominator, you cannot draw meaningful conclusions. Always ask: "Out of how many?" When coverage is partial, address it through complementary data sources, mathematical scaling (with caution), or SME validation.

### The "Start with Your Scenario" Principle
Both the "not enough data" and "too much data" problems have the same solution: start with the scenario from Chapter 7, then focus on specific sources that directly illuminate that risk. Do not try to analyze everything at once.

## Practical Takeaways

- Use the fifteen-category table as a checklist to identify which internal data sources are accessible for your specific scenario.
- Start with low-hanging fruit that gives the most uncertainty reduction for effort expended. Do not spend weeks cleaning a dataset only to find it does not illuminate the risk.
- When estimating frequency from timestamped records, always convert point estimates into ranges (P5, P50, P95) using SME input or quality adjustments from Chapter 10.
- Always determine the coverage rate of your internal data. Ask the data owner directly: "What percentage of our environment does this data cover?"
- Use the starter scripts provided for each team. Specific questions get better results than asking for "data."
- When people say "that data is confidential," ask about anonymized or aggregated versions. Often you need trends or counts, not sensitive details.
- Apply the Chapter 10 quality evaluation framework to internal data, paying special attention to coverage rates, reporting bias, and definitional drift.
- Flag anything that appears protected by attorney-client privilege or contains PII. Follow organizational data retention policies.
- Include an assumptions and disclaimers section in every assessment explaining data limitations, coverage adjustments, and modeling decisions.

## Key Terms & Concepts

- **[[Coverage Rate]]**: The percentage of an environment reflected in a dataset. The "denominator" that turns metrics into meaningful signals.
- **[[Annualized Frequency]]**: Events divided by time period, scaled to a 12-month rate. Formula: (Events / Months) x 12.
- **[[Forms of Loss]]**: The cost categories from Chapter 8 used to structure magnitude extraction: response costs, business disruption, asset replacement, regulatory fines, competitive advantage loss, reputation damage.
- **[[Definitional Drift]]**: When the meaning of categories or severity levels changes over time within an organization, making historical comparisons unreliable.
- **[[Reporting Bias]]**: Systematic underrepresentation of certain event types in internal data, often because "minor" events are not logged.

## Connections

- This chapter operationalizes the internal data pillar of the [[Three-Source Model]] from [[Chapter 9: Getting Unstuck with Data]].
- All internal data must pass through the evaluation framework from [[Chapter 10: How to Vet and Believe Your Data]], with special attention to the coverage rate concept introduced here.
- The four transformation methods produce inputs that feed directly into the Monte Carlo simulation and modeling techniques from later chapters.
- The scenario-building method (Method 3) connects back to the scenario construction framework in Chapter 7.
- The forms of loss used for magnitude extraction (Method 2) reference Chapter 8's framework.
- Coverage rate problems are precisely why [[Chapter 13: Your Secret Weapon: Subject Matter Experts]] is essential: SMEs can validate coverage assumptions and identify what goes unreported.
- The financial services firm story at the opening demonstrates the Bayesian updating workflow: start with external base rates from [[Chapter 11: Finding and Using External Data]], then adjust with internal evidence.
