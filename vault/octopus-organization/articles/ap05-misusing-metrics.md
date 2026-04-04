---
title: "Antipattern #5: Misusing Metrics"
tags: [organizational-change, metrics, measurement, learning-culture, goodharts-law]
sources: [raw/papers/03-part1-ap05-to-ap08.md]
created: 2026-04-04
confidence: high
part: 1
---

## The Antipattern

Le-Brun and Werner call this the "Tin Man Behavior": organizations become disproportionately obsessed with quantification as a solution in itself, letting metrics dictate strategy and decision-making. The result is that focus shifts from creating value to hitting numbers, vanity metrics proliferate, gaming becomes endemic, and valuable innovation that resists easy measurement gets ignored.

The authors identify four toxic metric types:

- **Vanity metrics**: Impressive-looking numbers with little insight -- "two million registered users" sounds great until only three hundred are active.
- **Proxy metrics**: Indirect measures for hard-to-measure outcomes (patent applications for "innovation," time on website for "engagement") that become wasted work when poorly correlated.
- **Perverse metrics**: Technically correct metrics driving bad behavior -- the Cobra Effect in colonial Delhi, where bounties for dead cobras led to cobra breeding; Athens' odd-even license plate driving rules that prompted the wealthy to buy second cars.
- **Absolute target metrics**: SLAs and fixed targets that create endpoints -- once 99.9% reliability is hit, teams coast until problems emerge.

## Why It Happens

The book traces metrics obsession to Tin Man (mechanistic, industrial-era) thinking that decomposes work into standardized, measurable steps. Le-Brun and Werner cite two foundational laws:

- **Campbell's Law**: The more important a metric becomes for social decision-making, the more likely it will be manipulated.
- **Goodhart's Law**: When a measure becomes a target, it ceases to be a good measure.

The United Airlines incident of 2017 is their extreme example: aggressive efficiency targets led to overbooking, algorithm-selected bumping, and the physical dragging of Dr. David Dao from a plane. Easy metrics create "an artificial burst of dopamine" -- an upward curve on a graph feels like progress, compounded by the high sense of "facticity" that statistics possess.

Shorter-term Tin Man focus leads to chasing metrics that erode long-term value: cost-cutting that outsources advantages, cuts R&D, ignores brand building, or loses valuable institutional knowledge.

## The Octopus Way

Octopus Organizations treat metrics as tools for learning and adaptation, not rigid targets. Key behaviors:

- **Focus on intent over targets**: Amazon leader Stephen Brozovich advocates "thinking like a doctor" -- vitals are good metrics but don't replace the doctor's intent to help you live well. Netflix evolved from tracking total subscribers to metrics indicating intent to renew (total time viewed per subscriber, genre mix).
- **Prefer outcome metrics over proxies**: Rather than "cut the number of managers" as a proxy for reducing bureaucracy, measure the actual problem -- decision speed, employee autonomy, number of approvals needed for a role backfill.
- **Measure the right things, not the easy things**: Zappos tracks "WOW" experiences in customer service rather than minimizing call center calls, deliberately making its phone number easy to find.
- **Experiment with metrics**: Amazon piloted a "developer pain" metric (assigning points for emergency pages by time of day) to correlate high-pain scores with engineer attrition, leading to a 20% reduction goal that improved retention.
- **Resist premature judgment**: When Amazon starts tracking a new metric like hardware spend, leaders initially avoid judging the numbers or setting immediate targets, creating space for learning. One team the authors worked with had "watermelon reporting" -- green on the outside, red on the inside -- until a new leader spent six months building trust.
- **Favor input metrics over output metrics**: Teams cannot directly control customer acquisition (output), but they can control inputs like number of relevant ads placed. Amazon Prime connected input metrics (inventory items in-stock) to outcomes (could customers get the right things when they wanted them?).
- **Depreciate metrics**: Octopus Organizations ask when the cost of measuring is no longer sensible, shifting from weekly reviews to threshold-based notifications.

## Key Principles

1. Metrics serve purpose and strategy, not the reverse
2. Intent behind a metric matters more than hitting a target number
3. Input metrics connected to outcomes yield more actionable insight than output metrics alone
4. New metrics need a learning period before targets are set
5. Qualitative data enriches context that quantitative data alone cannot provide
6. Cocreating metrics with accountable teams builds ownership and buy-in

## Real-World Examples

- **UK National Health Service**: Under pressure to reduce measurable waiting times, hospitals cut services affecting unobserved heart-attack mortality rates, leading to substantially increased emergency heart-attack deaths.
- **United Airlines (2017)**: Efficiency targets and overbooking algorithms led to Dr. David Dao being physically dragged from a plane.
- **Amazon "developer pain" metric**: Piloted pain scoring for on-call pages to correlate with engineer attrition; led to engineering best practices, increased retention, and customer satisfaction.
- **Netflix**: Evolved from total subscriber tracking to intent-to-renew metrics like total time viewed per subscriber.
- **Zappos**: Tracks "WOW" customer experiences rather than call minimization metrics; makes its phone number easy to find.
- **Cobra Effect (Delhi)**: British bounty for dead cobras led to cobra breeding; when program ended, released cobras worsened the problem.

## Practical Takeaways

- **Trial relative metrics**: Take an absolute metric (like an SLA) and replace it with trend-and-delta tracking. Discuss what caused improvements or declines.
- **Abolish some metrics**: Ask "So what?" three times for habitual metrics. If you cannot connect the metric to a meaningful outcome by the third "So what?", discard it.
- **Conduct metric postmortems**: After project failures, examine which metrics were tracked and which could have caught blind spots.
- **Cocreate metrics with teams**: Have teams propose their own metrics rather than imposing them from above.
- **Embrace qualitative data**: Integrate customer stories, employee interviews, and observations to challenge quantitative assumptions.
- **Lead by example**: Question metrics publicly, admit when you don't understand them, and visibly use them for learning rather than blame.

## Connections

- [[Antipattern #4: Pursuing Fluffy Goals]] -- vague goals produce vague metrics
- [[Antipattern #24: Mismanaging Incentives]] -- incentive structures amplify metric gaming
- [[Antipattern #27: Using Proxies for Customers]] -- proxy metrics often substitute for genuine customer understanding
- [[Antipattern #8: Spreading Priorities Too Thinly]] -- too many priorities fragment metric focus
