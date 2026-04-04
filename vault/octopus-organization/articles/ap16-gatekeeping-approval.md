---
title: "Antipattern #16: Gatekeeping Approval"
tags: [organizational-change, ownership, bureaucracy, guardrails, tenets, speed-to-value]
sources: [raw/papers/05-part2-ap14-to-ap17.md]
created: 2026-04-04
confidence: high
part: 2
---

## The Antipattern

Organizations create complex, multilayered approval processes that disperse decision-making across multiple siloed functions. Miriam McLemore (former Coca-Cola corporate CIO) calls it "running the gauntlet of everyone who can say no." The results are reduced agility, slow time to market, increased overhead and costs, decreased innovation, morale erosion, and ownership destruction.

Each gatekeeper optimizes for their narrow domain -- security assesses security risks, procurement assesses contract costs, compliance assesses policy. No single approval decision is wrong in itself, but collectively they make solutions unworkable, too slow, or too expensive relative to strategic value. Worse, since it takes only one "no" to stall but everyone's "yes" to move ahead, a powerful bias toward inaction develops.

## Why It Happens

- **Siloed evaluation**: Each function evaluates decisions through its own narrow lens without considering the collective impact
- **Risk asymmetry**: It is less risky for gatekeepers to say "no" -- if they approve and something goes wrong, they may be held responsible
- **Historical overreaction**: A single past failure (like the "legendary app disaster eight years before" in the authors' insurance company example) creates permanent gatekeeping layers
- **Loss of context**: Over time, nobody can remember what the original process was for, and people are too jaded to question steps two through twenty
- **Talent drain**: Teams pad timelines, lose pride, give up owning outcomes, and top innovators leave; as Reed Hastings noted about Netflix's own experience, "by dummy-proofing all of the systems, we would have a system where only dummies would want to work there"

The authors describe an insurance company team that built a breakthrough feature letting customers file claims by photographing damage (60% reduction in processing time). But to launch, they needed approval from Legal, Marketing brand compliance, UX accessibility, the CISO's office, and even the CEO's governance meeting due to a disaster eight years prior. Each department wielded veto power. Meanwhile, competitors launched, iterated, and improved the same feature.

## The Octopus Way

**Replace gatekeepers with guardrails.** An organizational guardrail is a preestablished rule, principle, standard, or boundary built into the flow of work. It defines a "safe-to-operate" zone, with activities outside the parameters triggering review or escalation. Good guardrails:
- Speed up decisions by reducing bottlenecks
- Improve quality through clear criteria and feedback loops
- Increase efficiency through automation and streamlined workflows
- Increase ownership and enhance curiosity through freedom for experimentation

**Types of guardrails (Table 16-1):**
| Type | Example |
|---|---|
| **Financial** | Ritz-Carlton employees can spend up to $2,000 per guest to resolve problems without seeking approval |
| **Technology & data governance** | DBS Bank's "P-U-R-E" guardrails preapprove common data and AI use; only new or riskier paths require deeper checks |
| **Ethical & cultural** | Principles to guide decision-making in ambiguous situations |
| **Operational & process** | Customer service teams can issue refunds up to $100 without review |
| **Legal & compliance** | Teams can proceed with ideas that do not run afoul of regulations but must submit to review if ambiguous |

**The waterline principle** (from W.L. Gore): Decisions "above the waterline" carry low risk and are managed through guardrails. "Below-the-waterline" decisions could sink the ship and require more thorough review.

**Use tenets as guardrails.** Tenets articulate core values, explicit trade-offs, and decision-making criteria. A good tenet has a defensible opposite ("Security is important" is not a good tenet since you would never say "Security is unimportant"). Tenets are co-created with gatekeepers, transforming them from approval bottlenecks into advisers.

Example tenet: "We optimize for speed. Speed enables us to learn quickly, pivot if needed, and scale quickly." (The trade-off: cost.)

**Automate for "seductive adoption."** One company coded accessibility compliance requirements into the standard website template, eliminating an entire approval process.

**Transform from "Can I?" to "How can I?"** Miriam McLemore recalls Coca-Cola's shift from gatekeeper governance to a guardrail mindset, energized by fixed launch dates for Olympics and World Cup marketing: "The governance team was asking, 'What can we do to get to the finish line?'"

## Key Principles

1. Guardrails enable; gatekeepers control -- the distinction is whether guidance is built into the flow of work or imposed as checkpoints
2. Checks and balances are vital, but gatekeeping tends to grow arms and legs over time
3. Tenets must express explicit trade-offs to be actionable
4. Co-creation with gatekeepers transforms them into advisers
5. The occasional risk of poor judgment from using principles is worth accepting to avoid sacrificing thousands of good decisions

## Real-World Examples

| Organization | Example |
|---|---|
| **Insurance company** | Breakthrough photo-claims feature stalled by five approval layers while competitors launched the same feature |
| **Ritz-Carlton** | $2,000 per-guest spending authority without approval, guided by the credo "Ladies and Gentlemen serving Ladies and Gentlemen" |
| **DBS Bank** | "P-U-R-E" guardrails preapprove common data/AI use |
| **W.L. Gore** | Waterline principle distinguishes low-risk from high-risk decisions |
| **Coca-Cola** | Shifted governance from gatekeeper to guardrail mindset for Olympics/World Cup marketing launches |
| **Netflix** | Reed Hastings learned that over-controlling systems drive away talented people |

## Practical Takeaways

- **Introduce "If/Then" guardrails** for recurring situations: "If X condition is met, then you are empowered to do Y"
- **Transform one gatekeeper pain point** by asking: "What is the absolute worst-case scenario this gate is trying to prevent?" and "Could a simpler rule prevent 80% of that risk while letting 80% of requests flow freely?"
- **Automate routine checks** -- convert manual approval steps into automated guardrails that provide immediate feedback
- **Transform gatekeepers into coaches** -- e.g., have Legal provide weekly 30-minute clinics on compliance requirements rather than only reviewing completed work
- **Institute peer consultation networks** that replace mandatory approvals with optional expert input
- **Establish feedback loops** and blameless postmortems to refine guardrails rather than adding new gatekeepers
- **Delegate one small, low-risk decision** with clear boundaries as an experiment
- **Run time-boxed guardrail experiments** -- replace one gatekeeper process for two weeks, track outcomes, then refine

## Connections

- [[Antipattern #10: Entrenching Silos]] -- siloed functions create the fragmented approval landscape
- [[Antipattern #17: Creating Dependencies]] -- gatekeeping creates artificial dependencies between teams
- [[Antipattern #19: Fetishizing Process]] -- gatekeeping is a specific manifestation of process obsession
- [[Antipattern #21: Diluting Accountability]] -- dispersed approval dilutes who actually owns decisions
