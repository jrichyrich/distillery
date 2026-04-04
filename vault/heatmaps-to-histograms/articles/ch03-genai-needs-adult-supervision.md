---
title: "Chapter 3: GenAI Needs Adult Supervision"
tags: [cyber-risk, crq, genai, ai-supervision, prompt-engineering, vibe-coding, risk-analyst-skills]
sources: [raw/papers/ch03-genai-needs-adult-supervision.md]
created: 2026-04-04
confidence: high
---

## Summary

Martin-Vegue frames generative AI's role in risk analysis through two pop culture archetypes: Data from *Star Trek* (sentient, truthful, capable of independent work) versus Jack Sparrow from *Pirates of the Caribbean* (charming, brilliant, optimized for survival rather than truth, and incapable of working independently toward a shared goal). Current GenAI is Jack Sparrow -- it needs boundaries and supervision. Unlike Jack, who at least knows when he is being deceptive, GenAI cannot detect its own hallucinations in real time and will confidently present fabricated information. Martin-Vegue learned this through his own "comically disastrous" early attempts at using GenAI for end-to-end risk assessments, where he had difficulty distinguishing accurate from fabricated results.

The chapter argues that AI is transforming risk management as fundamentally as computers did in the 1980s, but the transformation is a skill shift, not displacement. The risk analyst of the future will excel at research validation, critical thinking, prompt engineering, strategic communication, and bias detection -- while manual data collection, routine calculations, framework memorization, and boilerplate documentation become automated. Martin-Vegue distills his experience into three rules: (1) Use AI to accelerate tasks you already know how to do, not tasks you do not understand; (2) Always verify what AI tells you, working one component at a time and watching for bias; (3) Keep humans in charge of the final call on data trustworthiness, scenario realism, and recommendations.

The chapter also introduces "vibe coding" -- conversational programming where you describe what you want in natural language and let GenAI generate code. Martin-Vegue uses Excel throughout the book for accessibility, but encourages readers to experiment with Python, R, or other tools via vibe coding. He deliberately avoids naming specific GenAI platforms because the landscape is changing too rapidly.

## Key Points

- GenAI is Jack Sparrow, not Data from Star Trek: charming and brilliant but optimized for conversation completion, not truth-telling, and incapable of detecting its own hallucinations
- Hallucinations are when AI makes incorrect claims while sounding completely confident; they can be reduced through better prompts, additional quality data, human oversight, and guardrails
- The key test for AI use: "Can you tell when AI gets it wrong? If not, you shouldn't use AI for that task."
- AI excels at research acceleration, scenario brainstorming, converting messy data to structured formats, generating Monte Carlo simulation code, and drafting risk statements
- AI fails at interpreting jurisdiction-specific regulations, choosing modeling assumptions, and evaluating data quality without human verification
- Yesterday's skills (manual data collection, routine calculations, framework memorization) are being replaced by future-critical skills (research validation, prompt engineering, strategic communication, bias detection)
- Work one component at a time: scenario brainstorming, then frequency research, then magnitude research -- do not ask AI to "do the whole thing"
- Add to prompts: "Challenge my assumptions, and don't be nice, be truthful" to counter AI's tendency toward agreeableness
- Using a second AI platform to check the first can catch errors, though this is not foolproof
- Never put confidential data into public AI tools; use anonymized examples
- "Vibe coding" enables rapid prototyping of models and visualizations through conversational instructions

## Core Principles

- **Three Rules for AI in Risk Work**:
  1. Use AI to accelerate, not replace, your thinking
  2. Always verify what AI tells you (cite sources, check each source, work modularly)
  3. Keep humans in charge of the final call (data trustworthiness, scenario realism, ethical recommendations)
- **Skill shift, not displacement**: AI will not replace risk analysts, but risk analysts who use AI effectively will replace those who do not
- **Supervised research assistant model**: AI compresses weeks of work into hours when properly guided, but requires constant validation
- **AI alignment awareness**: Verify not just that information is correct, but that analysis aligns with organizational values and human-centered priorities

## Practical Takeaways

- Before using AI for a task, ask yourself: "Can I tell when it gets this wrong?" If no, do not use AI for that task
- Instruct AI to "Cite all sources and flag any claims you're uncertain about" -- then independently verify each source
- Break risk analysis into components and use AI for one piece at a time rather than end-to-end
- Ask AI to point out weaknesses and missing factors in its own output
- Start vibe coding by giving AI loose conversational instructions: "build something in Python that simulates coin flips but for ransomware frequency and make it look decent"
- Use whatever AI tools your organization has vetted; the specific platform matters less than proper data handling controls
- Protect sensitive information: use anonymized examples when working with public AI tools

## Key Terms & Concepts

- **[[Hallucinations]]**: When AI generates incorrect claims while sounding completely confident; analogous to statistical overconfidence where the model fills gaps rather than admitting uncertainty
- **[[Prompt Engineering]]**: The skill of communicating clearly with AI to extract useful results; improves with practice
- **[[Vibe Coding]]**: Conversational programming -- describing what you want in natural language and letting GenAI generate the code
- **[[AI Alignment]]**: Ensuring AI systems support rather than subtly undermine human values, preferences, and ethical standards
- **[[Large Language Model]]** (LLM): The underlying AI system that processes and generates text by predicting the next word based on training data

## Connections

- The "broken system" that AI helps escape was established in [[Chapter 1: Welcome to the Rebellion]]
- The probabilistic methods AI can accelerate were historically grounded in [[Chapter 2: Probability's Plot Twist]]
- The foundational concepts of ranges, frequency, and magnitude that AI assists with are formalized in [[Chapter 4: Foundations]]
- GenAI prompts appear throughout subsequent chapters, building on the three rules established here
- The vibe coding concept connects to the Monte Carlo simulation work starting in Chapter 5
