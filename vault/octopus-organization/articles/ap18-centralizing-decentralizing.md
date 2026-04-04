---
title: "Antipattern #18: Centralizing-Decentralizing"
tags: [organizational-change, ownership, centralization, decentralization, glocalization, operating-model]
sources: [raw/papers/06-part2-ap18-to-ap21.md]
created: 2026-04-04
confidence: high
part: 2
---

## The Antipattern

Organizations oscillate between centralized and decentralized models of operation as overreactions to perceived weaknesses of the current model. This produces periodic massive, costly projects to shift models; slow adaptation and lack of innovation when centralized; and complexity and inability to scale when decentralized. Le-Brun and Werner argue that both extremes are self-fulfilling: over-centralized systems become brittle monoliths that cannot adapt, while over-decentralized systems create integration nightmares that prevent scaling. The decision to go all-in on one model creates the problems that virtually ensure an overcorrection to the other.

## Why It Happens

- **Binary thinking**: Organizations treat centralization as the solution to chaos and decentralization as the solution to rigidity, rather than viewing them as tools for specific outcomes
- **Pendulum reactions**: The swing is based on the most recent pain point rather than strategic design
- **Noble intent**: Centralization often starts with reasonable goals like creating efficiencies or standardizing across geographies
- **Misaligned incentives**: When procurement focuses solely on cost savings without considering total cost of ownership (including service-quality impacts), it creates expensive downstream problems
- **Top-down mandates**: Organizations often do not honor the tension, mandating a single approach instead

McDonald's experienced this firsthand in the early 2000s. Operating in 100 countries with decentralized decision-making and different regional technologies, it struggled to scale innovations like self-order kiosks (country-by-country integration work). The CEO launched initiatives to standardize everything globally. Social, political, fiscal, and cultural differences created complexity, internal resistance, and declining customer service. By 2004, the initiatives were shut down, nearly $200 million was written off, and the CEO departed.

Coca-Cola's former corporate CIO Miriam McLemore captured the tension: "There is often a desire from the center for consistency and control, while local markets are interested in driving unique value for their local business."

## The Octopus Way

**Optimize for speed to value, not for a model.** Former Qantas and Airbus CIO Luc Hennekens: "It's not a pendulum. It's a question of how we can optimize value." Mark Schwartz (former CIO of US Citizenship and Immigration Services) assumes decentralization as the default and only centralizes when doing so accelerates value. Centralization adds value for anything truly common (processes, digital platforms) that enables business units to operate faster, plus regulatory, safety, or compliance needs.

**Embrace "glocalization."** Tanuja Randery CBE (former Schneider Electric President): "Building an effective 'glocal' operation isn't accidental; it's born from a deliberate architecture where global strategic clarity and robust performance frameworks empower local P&L ownership. Autonomy is then earned and exercised within well-understood, shared boundaries."

Luc Hennekens: "I would refuse to see centralization and decentralization as opposites in eternal conflict for supremacy. It's more useful to see them as various tactics to manage decision-making and execution, in the same way as vanilla and strawberry ice cream aren't opposites but different flavors that can be combined."

**McDonald's "glocal" recovery:** After the costly over-centralization, McDonald's adopted a glocal model. A global POS solution was created with sufficient flexibility to support local fiscal needs and allow innovative local marketing campaigns. The balance required cross-function, cross-business-unit trust built over time and honest discussion about trade-offs.

**Think hub-and-spoke:** Centralized capabilities with decentralized execution. The hub provides core services, platforms, and standards; business units (spokes) retain autonomy over local operations and customer engagement. Think "centers of enablement" or "platform teams" rather than "headquarters dictates."

**Use an internal customer-obsession mindset:** Central teams do not dictate but support the needs of decentralized units.

**Adjust performance incentives:** Former PepsiCo CEO Indra Nooyi advises rewarding individuals for overall business performance, their business unit performance, and for sharing and adopting ideas. eBay under Meg Whitman demonstrates the power of balanced incentives: country managers had significant autonomy and were rewarded for deeply understanding local markets. The German team identified an unmet cultural preference for fixed-price transactions (impatience with auctions) and developed a rudimentary alternative. The local innovation scaled globally to become the "Buy It Now" button, revolutionizing e-commerce.

**Centralize inclusively:** Avoid headquarters bias -- the tendency for the home office to make decisions based on what they see, missing complex front-line knowledge.

## Key Principles

1. Centralization and decentralization are complementary tools, not competing philosophies
2. Default to decentralization; centralize only when it accelerates value delivery
3. "Glocalization" combines global strategic clarity with local operational autonomy
4. Incentives must reward both local innovation and sharing ideas for global scaling
5. If eBay had been only decentralized, Buy It Now never would have scaled; if only centralized, it never would have been created

## Real-World Examples

| Organization | Example |
|---|---|
| **McDonald's** | $200M write-off from over-centralization in early 2000s; recovered through "glocal" POS platform with local flexibility |
| **eBay** | Buy It Now button originated from German team's local innovation under balanced incentives that enabled global scaling |
| **Coca-Cola** | Miriam McLemore emphasizes thoughtfulness about global standards and trade-offs in risk tolerance and delivery speed |
| **European retailer** | Allowed each tech team to choose their own development language, making code and talent sharing nearly impossible |
| **PepsiCo** | Indra Nooyi's incentive model rewarded overall performance plus sharing and adopting ideas |

## Practical Takeaways

- **Push work to the edges** -- even where centralized approaches are required, have business units drive or actively participate in development
- **Agree on decision-making tenets** that distinguish what should be standardized (safety, security) versus locally determined (market-specific elements)
- **Use capability maps** to analyze what should be done centrally versus locally, debating assumptions about commonality
- **Make tech "glocal"** -- design unified digital platforms with APIs and configurable modules enabling global scale with local relevance
- **Use Minimum Viable Centralization (MVC) charters** -- define the absolute minimum scope to centralize while still realizing value; review annually to prevent overcentralization
- **Create transparency and share credit** -- Phil Le-Brun sent a one-page update every week for seven years as McDonald's found its balance
- **Run local innovation demo days** where local teams showcase innovations, sparking ideas in other business units
- **Offer solution bounties** -- release centralized resources/funds to decentralized teams developing promising grassroots solutions; temporarily embed a central team member to help build the solution to scale

## Connections

- [[Antipattern #10: Entrenching Silos]] -- silos are reinforced by both over-centralization (central vs. local) and over-decentralization (fragmentation)
- [[Antipattern #16: Gatekeeping Approval]] -- centralized approval processes are a common driver of the centralization-decentralization tension
- [[Antipattern #34: Segregating Technology]] -- technology decisions are often the focal point of the centralization debate
