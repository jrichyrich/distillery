---
title: "Antipattern #9: Customizing Commodities"
tags: [organizational-change, differentiation, commodities, build-vs-buy, undifferentiated-work]
sources: [raw/papers/04-part1-ap09-to-ap13.md]
created: 2026-04-04
confidence: high
part: 1
---

## The Antipattern

Le-Brun and Werner describe organizations that invest resources into creating products, features, or services that provide no competitive advantage, then customize them unnecessarily. The results are diminished ability to adapt and innovate as critical resources are wasted on commodities, plus increased operational complexity and technical debt from maintaining them.

The authors call this "undifferentiated heavy lifting" -- by some estimates, 50 to 85 percent of IT budgets go into non-differentiated investments, and this pattern extends well beyond technology.

## Why It Happens

The book identifies several drivers:

- **"More is better" fixation**: Promoting output (number of features or systems) over outcomes (value).
- **Individual egos and misaligned incentives**: Rewards for building a thing rather than the impact it brings.
- **Silo fragmentation**: Teams can request features without bearing the cost.
- **Risk aversion**: Overengineering to account for every possibility.
- **Exceptionalism**: Companies think they are special and demand special systems. The BBC and GE both built things that played into their differentiators (video production and industrial management), but made the error of assuming unique value required unique systems. Le-Brun and Werner's key insight: "What you do can be unique even if how you do it isn't."

The book identifies five forms of "gold plating":

1. **Hedging**: Adding elements based on hunches rather than evidence -- a software team built export options for obscure formats nobody used.
2. **Future-proofing**: Implementing trendy technologies (like blockchain) without understanding relevance.
3. **Legacy baggage**: Mirroring old functionality because people won't let go (fax machines in modern communication apps).
4. **Cherry topping**: Impressive-looking elements with little functional value (elaborate dashboard animations).
5. **Overengineering**: Juicero designed a Wi-Fi-connected cold-press juicer exerting the force of two cars to squeeze juice packs that customers could squeeze by hand. $120 million in investment lost.

Statistics: Only 6% of product features see regular use; only about 25% of SaaS features are used by customers. Around 70% of ERP projects fail to meet objectives, with 25% failing catastrophically, and excessive customization is a major contributor.

## The Octopus Way

Octopus Organizations practice "intelligent restraint," prioritizing investments guided by customer value rather than technical sophistication.

- **Achieve clarity on differentiators**: McDonald's spent years debating whether they were a franchise operator, restaurant company, or real estate company. Candid discussions between founder Ray Kroc and the CFO determined it was real estate. Different answers would have required different investments.
- **Immerse in customers' worlds**: Early Airbnb founders literally lived with their first hosts to understand core needs, helping them avoid investing in non-differentiating features.
- **Amplify unique superpowers**: Pixar's Braintrust -- a group that meets to discuss work and surface ideas -- isn't just a competency but a storytelling and creative problem-solving force that is "incredibly hard to imitate."
- **"Configure, don't customize"**: Ruthlessly eliminate undifferentiated work. Change processes to use systems out of the box rather than changing systems to match processes. Scrutinize customization requests.
- **Treat differentiation as ongoing experiment**: What was once innovative may have become commodity. Lyft's pivot toward "nice" service and features like Women+ Connect responded to observed customer needs, continuously tested and iterated.
- **Value impact over complexity**: Requirements are hypotheses to be tested. Instead of automatically adding advanced filtering to search, define the problem ("users struggle to find what they need") and explore solutions.
- **Use MLPs (minimum lovable products)**: Bring back maximum validated learning about customers with least effort. MLPs can be as simple as paper prototypes.
- **Create environments where teams challenge requirements**: Teams given ownership for outcomes naturally resist unnecessary complexity. They demand to know why a feature is needed and how it supports business outcomes.

## Key Principles

1. What you do can be unique even if how you do it is not
2. Buy or outsource anything that does not provide competitive advantage
3. Configure, do not customize -- change processes to fit systems, not vice versa
4. Requirements are hypotheses to be tested, not orders to be fulfilled
5. Differentiation is not static; it requires ongoing reassessment
6. Only 6% of features see regular use -- build less, but build the right things

## Real-World Examples

- **BBC Digital Media Initiative**: Spent nearly 100 million GBP building custom digital asset management and workflow automation tools that could have been bought off the shelf. Scrapped in 2013.
- **GE Predix Platform**: Invested billions building an industrial IoT platform to be the "operating system for industry" that competed poorly with AWS and Microsoft.
- **Juicero**: $120M invested in a Wi-Fi-connected juicer whose packs could be squeezed by hand. Ceased operations in 2017.
- **McDonald's**: Candid discussions about whether they were a franchise operator, restaurant company, or real estate company determined investment focus.
- **Airbnb**: Founders lived with first hosts to understand differentiating needs versus non-differentiating features.
- **Pixar**: The Braintrust as a unique superpower -- a storytelling force incredibly hard to imitate.
- **Lyft**: Pivot toward "nice" service (Women+ Connect) as continuously tested differentiation.
- **ERP projects**: 70% fail to meet objectives; 25% fail catastrophically, with excessive customization as a major contributor.

## Practical Takeaways

- **Map your competitive advantage**: With a cross-functional team, map all components needed to deliver a critical business function. Debate where true differentiation lies. Consider using Wardley Maps to guide investment decisions.
- **Champion outcome-based thinking**: Start every initiative with a measurable need (the why), not a feature list (the what). Measure if users found relevant results, not just clicks on a filter.
- **Demand customer data before committing**: Treat requirements as hypotheses: "We believe that [element] will lead to [measurable outcome] for [user type] because [reason]."
- **Quantify the cost of undifferentiated work**: Holistically assess investments in noncompetitive systems or overly complex features, including customization, upgrade delays, workarounds, and inability to adopt best practices.
- **Audit service and process differentiation**: Challenge every "we do it ourselves because we're special" assumption.
- **Invest in "complexity culls"**: Quarterly review internal systems to see if they are still differentiating. Make concrete decisions to "stop," "sunset," or "simplify."
- **Hold learning days with vendors and customers**: Discover vendor capabilities not being used and where customers actually value differentiation.

## Connections

- [[Antipattern #27: Using Proxies for Customers]] -- building features based on assumptions rather than genuine customer understanding
- [[Antipattern #29: Falling in Love with Answers]] -- attachment to custom solutions prevents adopting simpler alternatives
- [[Antipattern #34: Segregating Technology]] -- treating technology as separate from business drives undifferentiated tech investments
- [[Antipattern #10: Entrenching Silos]] -- siloed ownership fragments customization requests
