---
title: "Antipattern #33: Deferring to Data"
tags: [organizational-change, curiosity, data, decision-making, metrics, judgment]
sources: [raw/papers/09-part3-ap31-to-ap36.md]
created: 2026-04-04
confidence: high
part: 3
---

# Antipattern #33: Deferring to Data

## The Antipattern

Organizations crow about being "data driven," treating data as a talisman for justifying decisions and a way to end deliberation or override challenges. But data is neither objective nor above reproach -- it is highly interpretable, usually incomplete, and only one view of a complex system. Le-Brun and Werner identify multiple facets of this problem:

- **Probabilistic illiteracy**: Humans are terrible at interpreting probabilities. An 80 percent chance of success means vastly different things to different people. When a project fails despite favorable odds, data becomes a weapon for both sides.
- **False facticity**: We perceive numbers and statistics as carrying objective truth. W. Edwards Deming's mantra "In God we trust; all others must bring data" has morphed into an insidious crutch replacing critical thinking with blind faith in numbers.
- **Confirmation loops**: Organizations selectively seek and interpret data confirming their preconceptions. "The digital dashboard becomes so alluring that they forget to look out the window."
- **Easy-to-get metrics**: Companies rely on measures implemented because they're fastest and easiest, not the best representation. A salesperson's declining quarterly sales might mask their transformative mentorship and market-pioneering work.
- **Siloed data science**: Models built by data scientists isolated from the domains they model are mathematically sound but miss crucial nuances that experienced practitioners would immediately recognize.

**Tin Man results:**
- False certainty that leads to bad decisions
- Overreliance on simple metrics that miss context
- Ignoring valuable human experience and judgment

## Why It Happens

- **Desire for assurance**: Companies seek certainty from data that can only provide insight -- especially for new products where data is scarce and customers struggle to articulate what they want
- **Data as a power tool**: Data ends deliberation, overrides challenges, and kills curiosity rather than fostering it
- **Low data literacy, high data reliance**: Organizations don't understand how to use data well; data literacy is low while dependence on data has never been higher
- **Structural silos**: Data scientists are isolated from the domains they model, leading to mathematically sound but contextually hollow models
- **Cheap metrics**: Organizations gravitate toward easily quantifiable metrics rather than investing in harder-to-measure but more meaningful indicators

A retailer Le-Brun and Werner worked with had years of decline masked by pandemic-era spending data. They explained the decline away and moved on -- but failure to adapt to changing customer needs saw the decline snowball into bankruptcy.

## The Octopus Way

Octopus Organizations master the art of being **data-informed** rather than **data-driven** -- a subtle but crucial distinction. As Jeff Bezos articulated: "If you can make a decision with analysis, you should do so. But it turns out in life that your most important decisions are always made with instinct and intuition, taste, heart."

**Key Octopus behaviors:**

- **Data as insight, not answers.** Data supplements judgment, experience, and intuition -- it does not replace them.
- **Respect human experience.** Behind every data point is a human story. Creativity, empathy, innovation, and leadership resist simple quantification.
- **Be curious about data.** Look for outliers and question if they might be signals in the noise. Challenge data presented to you. An average call time of five minutes might hide a large number of twenty-minute calls.
- **Trust anecdotes.** Bezos: "When anecdotes contradict data, the anecdotes are usually right" -- not because data is wrong, but because you're measuring the wrong thing. He once called Amazon's helpline during a meeting reviewing metrics claiming wait times were under sixty seconds; ten minutes passed before his call was answered.
- **Embed analysts with domain experts.** At Spotify and Netflix, data analytics teams work side by side with creative professionals. At Stitch Fix, algorithms drive decisions but a stylist always reviews the data.
- **Develop robust data literacy.** Programs focus on critical thinking and context understanding -- teaching people not just how to interpret data but how to question it: "What's missing from this dataset? What assumptions are we making?"
- **Push decisions down.** Enable teams closest to the work to make decisions, using data as one of many tools, rather than pushing endless data and analysis up the hierarchy.

## Key Principles

1. **Data-informed, not data-driven** -- data is one voice in a larger conversation
2. **Anecdotes as signals** -- single complaints or whispered conversations should drive inquiry, not be explained away by aggregate data
3. **Data literacy means questioning data** -- understanding limitations matters more than understanding charts
4. **Human judgment is irreplaceable** -- intuition built from deep experience (like the airplane engineer who predicts engine servicing from subtle pitch changes) cannot be replaced by dashboards

## Real-World Examples

- **Amazon**: Bezos's phone call to the helpline, disproving metrics that claimed wait times under sixty seconds
- **Stitch Fix**: Algorithms drive styling decisions, but human stylists review and adjust based on knowledge the algorithm lacks
- **Netflix and Spotify**: Data analytics teams work side by side with creative professionals, not in isolation
- **Retailer bankruptcy**: Pandemic-era spending data masked years of decline; the data "explained" the decline but didn't actually explain it
- **Cathy O'Neill's *Weapons of Math Destruction***: Recidivism-prediction algorithms encoding societal biases, using zip code and family history as proxies for race and poverty

## Practical Takeaways

1. **Actively seek counternarratives** -- find one person directly affected by a data-driven decision and have a ten-minute chat to understand their perspective without data present
2. **Investigate outliers** -- implement data visualizations that draw attention to unusual data points; make it a regular agenda item
3. **Build data literacy programs** -- short foundational courses on statistics and visualization, plus hands-on manipulation of company data; create mentor partnerships between analysts and business leaders
4. **Rehumanize your data** -- pair customer churn statistics with actual customer interviews; build journey maps capturing emotional responses alongside behavioral data
5. **Embed analysts with domain experts** -- break the structural silo; make analysts part of daily stand-ups and team goals, transforming them from report-builders into thought partners

## Connections

- [[Antipattern #5: Misusing Metrics]] -- the foundational problem of measuring the wrong things
- [[Antipattern #20: Seeking Perfect Decisions]] -- data-worship stems from the same desire for certainty
- [[Antipattern #27: Using Proxies for Customers]] -- data can become a proxy that replaces direct customer understanding
- [[Antipattern #29: Falling in Love with Answers]] -- data provides false closure to questions that should remain open
- [[Antipattern #10: Entrenching Silos]] -- siloed data science teams produce decontextualized analysis
