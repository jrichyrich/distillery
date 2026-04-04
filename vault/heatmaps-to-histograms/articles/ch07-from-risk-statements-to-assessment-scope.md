---
title: "Chapter 7: From Risk Statements to Assessment Scope"
tags: [cyber-risk, crq, risk-statements, scoping, a-t-e-framework, fair, assessment-design]
sources: [raw/papers/ch07-from-risk-statements-to-assessment-scope.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue opens with a story from a global retailer where a single risk register entry -- "Lost or Stolen Store Device" -- produced three completely different interpretations. IT saw a $1K hardware replacement. InfoSec saw a potential data breach. The store manager saw lost point-of-sale capability and stalled customer checkouts. The lesson: "Risk is in the eye of the beholder," and without precise scoping, risk assessments dissolve into arguments over definitions. He ultimately carved that one vague entry into three separate risk statements, each measurable on its own terms.

The chapter introduces the **A-T-E framework** (Asset-Threat-Effect), derived from FAIR, as the tool for transforming vague worries into precise risk statements. The progression is deliberate: first brainstorm raw concerns ("our cloud setup feels risky"), then structure them into statements using the template "[Threat] impacts the [Effect] of [Asset]," optionally adding a Method for additional specificity. Martin-Vegue calls this the "Mad Libs approach" and notes that while you think in A-T-E order (starting with the asset), you write starting with the threat for natural grammar.

The second half of the chapter expands risk statements into full assessment scopes by answering five essential questions: What decision is this informing? What exactly are we measuring? What are we NOT measuring? What is our time horizon? What specific losses could occur? Martin-Vegue frames the scope as a "project charter" and provides a complete worked example -- a SQL injection risk to a customer payment database -- showing how scope questions translate directly into a data collection road map. He emphasizes that the 30 minutes spent on scoping saves hours of collecting irrelevant data, and offers practical advice for defending scope boundaries against "what about" requests by redirecting to the business decision.

## Key Points

- A single vague risk entry can mask multiple distinct risks that different stakeholders interpret differently -- the "Lost or Stolen Store Device" example produced three separate assessments (device replacement, PII exposure, point-of-sale disruption)
- Every quantitative risk assessment follows the path: vague worry --> risk statement --> assessment scope --> data collection --> quantified assessment
- The A-T-E framework forces specificity: **Asset** (what has value), **Threat** (who or what can act against it), **Effect** (what gets damaged, starting with the CIA Triad)
- Think in A-T-E order but write in T-E-A order: "[Threat] impacts the [Effect] of [Asset]" for natural grammar
- The optional **Method** element adds specificity about how the threat acts (phishing, SQL injection, physical theft) and sharpens discussions about response strategies
- A risk statement is like a research question; the assessment scope is the detailed research plan
- Scope must answer five questions: (1) what decision, (2) what are we measuring, (3) what are we NOT measuring, (4) time horizon, (5) what specific losses could occur
- Scope creep is managed by asking two questions of every "what about" request: "Will this change the decision?" and "Could the decision-maker act confidently without this?"
- Risk statements should pass a quick quality filter: must have an asset at risk, a threat that can reasonably act, must result in some form of loss, and must be both possible and plausible
- Develop risk scenarios that align with organizational objectives -- sometimes start with effects first and work backward

## Core Principles

- **A-T-E Framework (Asset-Threat-Effect)**: FAIR's approach to structuring risk statements. Identifies the valuable thing at risk, the actor or force that could harm it, and the type of damage that would result. Optionally extended with Method for specificity.
- **The "Mad Libs" Template**: "[Threat] impacts the [Effect] of [Asset] via [Method]." A fill-in-the-blank approach that produces unambiguous, measurable risk statements from vague concerns.
- **Five Scoping Questions**: (1) What decision is this informing? (2) What exactly are we measuring? (3) What are we NOT measuring? (4) What is our time horizon? (5) What specific losses could occur? These define boundaries and create a data collection road map.
- **Scope as Project Charter**: The assessment scope defines deliverables, boundaries, and expectations -- just as a project charter does. It prevents scope creep and ensures stakeholder alignment.
- **From Scope to Data Road Map**: Each scoping question directly identifies what data to collect, from whom, and in what form. The scope is the bridge between identifying a risk and analyzing it.

## Practical Takeaways

- Before any quantitative analysis, get all stakeholders on the same page about what is being assessed by writing explicit risk statements
- Start by brainstorming raw worries without structure (findings, gaps, elevator conversations with the CTO), then progressively formalize them using A-T-E
- For each asset, enumerate multiple threat actors; for each asset-threat pair, enumerate multiple effects -- a single concern often produces several distinct risk statements
- Use the CIA Triad (confidentiality, integrity, availability) as a starting point for effects, then build from there
- Be specific in scoping: "Customer payment database containing ~50,000 active credit card records" is measurable; "customer data" is not
- Default to a 12-month time horizon unless there is a specific reason otherwise
- When stakeholders push to expand scope, respond with: "Let's capture that as a separate risk to analyze later, but for this assessment, we're focused on [original scope] because it addresses [the business decision]"
- Explicitly document exclusions (what you are NOT measuring) to prevent scope creep and manage expectations
- Use the five scoping questions to generate your data collection road map before beginning any research
- Look for risk statement inspiration in three places: organizational strategic objectives, industry security news, and cross-functional conversations with operations, legal, finance, and IT

## Key Terms & Concepts

- **[[Risk Statement]]**: A single sentence capturing the essential elements of a risk in structured format, identifying the threat source, asset at risk, and potential impact
- **[[A-T-E Framework]]**: Asset-Threat-Effect framing from FAIR used to construct unambiguous risk statements; optionally extended with Method
- **[[Assessment Scope]]**: The detailed plan defining what will and will not be measured, the time horizon, the decision being informed, and the specific loss categories to quantify
- **[[CIA Triad]]**: Confidentiality, integrity, and availability -- the foundational information security framework used as a starting point for identifying effects in risk statements
- **[[Asset]]**: Anything of value to the organization: systems, databases, intellectual property, cash, people, or intangible things like brand reputation
- **[[Threat]]**: Any actor or force of nature that can act against an asset and cause harm; includes malicious actors, untrained employees, natural disasters, and system failures
- **[[Effect]]**: The type of damage that materializes when a threat acts on an asset; mapped initially through the CIA Triad and refined based on business context
- **[[Scope Creep]]**: The tendency for risk assessments to expand beyond their original boundaries; managed by anchoring every addition request to the business decision

## Connections

- Directly sets up [[Chapter 8: Understanding Loss: The Six Forms]], which decomposes the "effect" component into specific, measurable loss categories (the fifth scoping question feeds directly into Chapter 8's framework)
- The data collection road map produced by scoping drives the work in Part 3: Chapters 9-13 on external research, internal data, and expert interviews
- The mobile phone risk example from [[Chapter 5: Your First Quantitative Risk Assessment]] was implicitly scoped; this chapter formalizes that process
- The communication approaches from [[Chapter 6: Interpreting and Communicating Quantitative Risk Results]] depend on clear scoping to produce meaningful results worth presenting
- The A-T-E framework comes from FAIR, connecting to the FAIR terminology adoption discussed in Chapter 5 (annualized loss exposure, loss magnitude)
- Risk brainstorming workshops mentioned here are covered in detail in Chapter 14
- The emphasis on aligning risk scenarios with organizational objectives echoes the broader theme of making CRQ decision-relevant rather than academically precise
