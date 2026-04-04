---
title: "Antipattern #17: Creating Dependencies"
tags: [organizational-change, ownership, dependencies, team-design, flow-efficiency, self-sufficient-teams]
sources: [raw/papers/05-part2-ap14-to-ap17.md]
created: 2026-04-04
confidence: high
part: 2
---

## The Antipattern

Organizations operate with structures and processes that force teams to rely on other teams, resources, or external knowledge to get work done. This fragments ownership of outcomes, creates bottlenecks and delays, and reduces the ability to see and react to threats or opportunities. Le-Brun and Werner present a compelling mathematical argument: dependencies cause the probability of success to decrease exponentially. With a 90% chance of success per team, adding just four sequential dependencies drops overall success to 66%.

## Why It Happens

- **Functional specialization**: Tin Man organizations prize the efficiency of dedicated expert teams (e.g., a team of database administrators kept 100% busy, a testing department fully allocated to testing tasks). This hardwires dependencies into the system.
- **Resource efficiency over flow efficiency**: The pursuit of keeping people busy actively undermines the smooth flow of work toward the customer.
- **Complexity of knowledge work**: Modern work typically requires 8 to 15 teams, internal and external. With 8 dependencies, there are 256 possible outcomes; only one is "everyone delivers on time." With 15 teams, you have one good outcome out of 32,768.
- **Doubling down on coordination**: When bad results follow from structural dependencies, organizations add more coordination, processes, and planning -- which also break down.
- **Heroics and workarounds**: Employees either "cheat" (bypassing processes, using unofficial channels) or use brute force (pulling rank, stealing resources from other teams), creating crises and drama as everyone competes for limited resources.

The authors use a sticky-note metaphor: a single team with a task has a binary outcome (complete or not). Add one dependency (rip the note in half), and there are four possible outcomes, only one productive. Add a second dependency, and you have eight outcomes with only one good one. The math is 2^n possible outcomes where n is the number of teams.

## The Octopus Way

**Audit and categorize dependencies into three types:**
1. **Knowledge dependencies** -- expertise from others is required
2. **Task dependencies** -- an activity must be completed to unblock progress
3. **Resource dependencies** -- people or things (software, tools, inventory) are needed

**Apply one of four actions to each:**

1. **Eliminate** unnecessary dependencies. Former Airbus CIO Luc Hennekens cites reducing sign-offs and approvals. For knowledge dependencies, aim for 80% to be fixed through cross-training, documentation, and education.

2. **Automate** dependencies through software, AI, and intelligent thresholds. Many organizations enable teams to provision their own technology through self-service portals rather than relying on technology teams.

3. **Weaken** dependencies that cannot be automated. Train or hire talent with cross-functional skills (e.g., a marketer with a finance background reduces budgeting dependency). Break large systems into smaller ones. Amazon weakens dependencies through service teams that proffer APIs, replacing onerous team communication and enabling up to five changes per second to Amazon.com.

4. **Systematically fix** residual dependencies. Rather than triaging individual contract approvals, build supplemental legal resources, create pre-agreed legal templates, or embed legal resources in teams.

**Set dependency thresholds:** Not every team needs their own lawyer. If you need a specialist more than 80% of the time, embed them. Below that threshold, use shared services with clear SLAs. Some organizations use "systemic swarming" -- moving specialists into teams at critical junctures and shifting them as work intensifies elsewhere. Bath & Body Works CDTO Thilina Gunasinghe advocates "war rooms" when urgency is required.

**Accept strategic duplication:** Zara uses two supply chains -- one for trend-sensitive fast fashion, one more mainstream. Procter & Gamble diversifies regional manufacturing to reduce logistics dependencies. Duplication can yield faster learnings and more creative solutions.

**Observe communication to detect dependencies:** Awkwardness in interactions and unexpected communication between teams signal misplaced boundaries. Silicon Valley Product Group's Chris Jones advises: "Look how you divide teams up because there might be some ways that cause more frustrating, pathological dependencies than others." Mike Cohn (Scrum originator) asks: "Does the structure minimize the number of communication paths between teams?"

**Create end-to-end teams:** Where possible, build teams responsible for developing and operating their own service, containing all necessary skills -- the "you build it, you run it" principle.

**Foster "pull dependencies":** The strongest collaborative relationships arise from voluntary association and mutual benefit, unlike artificial "push dependencies" imposed by organizational structure.

## Key Principles

1. Dependencies are defects that should be minimized or eliminated, not accepted as inevitable
2. Resource efficiency (keeping people busy) undermines flow efficiency (keeping work moving)
3. The probability of success decreases exponentially as dependencies increase
4. Strategic duplication is preferable to dependency-induced failure
5. Voluntary "pull dependencies" are more resilient than imposed "push dependencies"

## Real-World Examples

| Organization | Example |
|---|---|
| **Amazon** | Service teams with APIs replace cross-team coordination, enabling up to 5 changes per second to Amazon.com |
| **Zara** | Two supply chains -- one for fast trend-sensitive fashion, one mainstream -- reduce dependency on a single logistics chain |
| **Procter & Gamble** | Diversified regional manufacturing reduces long-distance logistics dependencies |
| **Airbus** | CIO Luc Hennekens advocates eliminating 80% of knowledge dependencies through cross-training |
| **Bath & Body Works** | CDTO Thilina Gunasinghe uses "war rooms" to break through dependencies when urgency is required |

## Practical Takeaways

- **Detect and track dependencies** visually using a dependency matrix, "dependency tags," or a simple spreadsheet (inspired by Dominica DeGrandis's *Making Work Visible*)
- **Encourage escalations** -- frame them as "raising visibility to unblock progress" rather than "complaining about delays"; leaders should respond with "How can we help?"
- **Invest in cross-training** through pair programming, job rotations, and explicit goals for key people to train others
- **Establish resource dedication thresholds** -- embed specialists in teams when needed more than 80% of the time; organize as shared services below that threshold
- **Break down responsibilities** -- do not grow work beyond the cognitive capacity of the team; separate activities like database development from database administration
- **Do a dependency deep dive** -- map the dependency landscape with sticky notes, identify where work stops for handoffs/approvals, and question each dependency against the four actions (eliminate, automate, weaken, fix)

## Connections

- [[Antipattern #10: Entrenching Silos]] -- silos are the structural foundation for most artificial dependencies
- [[Antipattern #16: Gatekeeping Approval]] -- approval processes are a primary source of task dependencies
- [[Antipattern #18: Centralizing-Decentralizing]] -- the centralization-decentralization tension creates structural dependencies
