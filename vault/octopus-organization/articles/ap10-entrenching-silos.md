---
title: "Antipattern #10: Entrenching Silos"
tags: [organizational-change, silos, value-streams, flow, cross-functional-teams, bottlenecks]
sources: [raw/papers/04-part1-ap09-to-ap13.md]
created: 2026-04-04
confidence: high
part: 1
---

## The Antipattern

Le-Brun and Werner describe organizations that address local inefficiencies in their vertical silos instead of global ones, failing to improve the overarching delivery of customer value. The results are slow time-to-market despite busy individual departments, unpredictable delivery timelines that frustrate customers, and market opportunities missed due to slow organizational responsiveness.

The central concept is "value stream" -- the path from idea to the point where customers get value -- and "flow," the relative pace of traversal. Tin Man value streams are rarely free-flowing: each department might appear highly efficient, but the overall journey of value is "an often-tortuous path, riddled with delays, detours, and dead ends." The relay race analogy: each runner might be incredibly fast, but they're running on different tracks and dropping the baton.

## Why It Happens

Jana (co-author Werner) shares a firsthand example: a company prided itself on agile delivery with two-week sprints, but the actual value stream told a different story. After the two-week dev sprint came eight weeks for system integration, three months for testing, four weeks waiting for deployment, four weeks of leadership priority-setting, twelve weeks building proof of concepts, eight weeks for CFO funding approval, and four weeks for architecture validation. The entire value stream from idea to production took twelve to eighteen months across more than thirty-two teams. The greatest bottleneck was not development speed -- it was everything else.

In siloed organizations, flow efficiency (actual work time versus waiting time) can plummet as low as 10%, meaning 90% of the time, valuable initiatives sit in a queue.

The automotive industry example: traditional automakers had immense expertise in individual components, but siloed structures optimized for internal combustion engines made it incredibly difficult to pivot to electric vehicles. The value stream for a software-defined EV was entirely different, but organizational structure remained optimized for gasoline-powered vehicles.

Le-Brun and Werner identify four types of ineffective optimization:

1. **Optimizing without rethinking**: A hospital digitized paper records but didn't rethink workflow, creating new bottlenecks harder to work around than the original paper process.
2. **Optimizing the wrong thing**: Improving help desk resolution time when faulty manufacturing creates the complaints.
3. **Overoptimization**: Highly optimized call handling times force representatives to rush, leading to unresolved problems and repeat calls.
4. **Optimizing what shouldn't exist**: Spending months perfecting sales proposal templates when AI-powered generators plus human review could do the same in one hour.

## The Octopus Way

Octopus Organizations optimize for the entire value stream, not departmental performance.

- **Make the value stream visible**: Value stream mapping starts with nothing more than a white wall and sticky notes. At Tesco Bank, Jana's team placed a map outside the boardroom, creating conversations as executives walked past. Walk-throughs shifted from "How does it work?" to "What can change?"
- **"Stop starting, start finishing"**: Limiting work in progress creates a "pull system" where new work starts only when capacity is available. Research consistently shows that limiting WIP accelerates delivery -- less context switching (estimated at 20% time loss), less waiting, faster throughput.
- **Work backward from outcomes**: John Seddon (*Freedom from Command and Control*) describes a call center discovering that 60% of repeat calls happen because customers receive incomplete information on first contact. Tracing upstream reveals agents lack complete customer context -- the solution is not faster call handling but better information access.
- **Rethink flows entirely**: Start with "What needs to be true?" For instance, what needs to be true to double McDonald's drive-thru capacity? This leads away from "take orders faster" to "avoid backups that discourage customers."
- **Build internal flow improvement skills**: Amazon has teams specifically focused on entering underperforming fulfillment centers to understand and unblock flow.
- **Organize around value streams**: Instead of separate marketing, product, engineering, and operations teams that hand work off, form stable, cross-functional "product teams" or "value stream teams" of six to nine people with all skills needed to deliver value from idea to customer.
- **One oncology team at Bayer** followed its value stream to cut through eight hundred internally dictated processes and gates. They accelerated 3D-printing a 6-euro holder solving a patient injection problem. "Years-to-value literally turned into days-to-value because they owned the whole value stream."

## Key Principles

1. Optimizing individual silos does not optimize the whole -- the baton drop between runners matters more than individual speed
2. Flow efficiency (work time vs. wait time) is often below 10% in siloed organizations
3. Value stream mapping is a continuous practice, not a one-time exercise
4. Limiting work in progress accelerates delivery
5. Working backward from customer outcomes reveals the right optimization targets
6. Sometimes making your part slower makes the whole thing faster

## Real-World Examples

- **Jana's former company**: Two-week agile sprints masked a twelve-to-eighteen-month end-to-end value stream across thirty-two teams.
- **Traditional automakers vs. Tesla**: Siloed structures optimized for internal combustion engines could not pivot quickly to software-defined EVs.
- **Tesco Bank**: Value stream map placed outside the boardroom sparked executive conversations and exposed previously unseen bottlenecks.
- **Bayer oncology team**: Cut through 800 internal processes to 3D-print a 6-euro patient solution, turning years-to-value into days-to-value.
- **Amazon fulfillment**: Dedicated teams enter underperforming centers to understand and unblock flow.
- **McDonald's drive-thru**: "What needs to be true?" reframes optimization from "take orders faster" to "avoid backups that discourage customers."

## Practical Takeaways

- **Map a sliver of value**: Pick a high-visibility product, use cross-functional teams to visually map the complete value stream. Quantify delays and track lead time and cycle time. Start narrow, then expand.
- **Attack root causes, not symptoms**: Regularly ask "What needs to be true?" Look upstream for bottleneck causes. Spot physical pileups, growing digital queues, frequent waiting for inputs, and workarounds.
- **Identify and challenge one major handoff**: Pick one handoff between silos causing significant delay, bring representatives from both teams together to redesign the interaction.
- **Dedicate flow improvement time**: Have a cross-functional pilot team dedicate 10-20% of their time specifically to identifying and implementing process improvements.
- **Redesign incentives and metrics**: Replace utilization-based metrics with flow metrics (lead time, throughput, flow efficiency). Create shared objectives requiring cross-functional cooperation.

## Connections

- [[Antipattern #5: Misusing Metrics]] -- utilization metrics optimize silos while flow metrics optimize value streams
- [[Antipattern #16: Gatekeeping Approval]] -- approval gates are common bottlenecks in value streams
- [[Antipattern #17: Creating Dependencies]] -- dependencies between silos create handoff delays
- [[Antipattern #6: Working Together but Not as a Team]] -- executive misalignment perpetuates siloed structures
- [[Antipattern #9: Customizing Commodities]] -- siloed ownership drives fragmented customization
