---
title: "Chapter 8: Understanding Loss: The Six Forms"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 8
pages: 152-171
ingested: 2026-04-04
---

# Chapter 8: Understanding Loss: The Six Forms

127
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_8CHAPTER 8
Understanding Loss: 
The Six Forms
The whole is greater than the sum of its parts, but you still need to under -
stand the parts.
—Often attributed to Aristotle
A few years back, I was working with a company that wanted to assess the risk of data 
compromise across its AWS infrastructure. When we started discussing magnitude, or 
how much an incident would cost, the initial approach seemed straightforward: find 
some industry data on breach costs, adjust and validate it with SMEs, and then move on 
to the modeling.
The first pass took about ten minutes. I compiled a generalized dollar amount based 
on publicly disclosed incidents from similar companies, adjusted it with a group of 
experts at the company, and presented a range that reflected our best estimate. I was 
careful to note what was included and what wasn’t, and the number gave executives a 
solid directional sense of the financial risk they were facing.
That initial estimate proved to be quite accurate, falling within our 90% confidence 
interval. For many risk assessments, that’s exactly where I would have stopped. One magnitude number, properly scoped and defensible, often provides all the decision- 
making insight you need.
However, some executives wanted to delve further. They wanted to understand the 
breakdown: How much of that cost would be attributed to legal fees, lost customers, 
or incident response? After explaining the time and effort involved, which was about a 
month of additional data collection, we collectively decided it was worth the investment.

128That decomposition effort paid off in ways we hadn’t anticipated. It revealed gaps in 
our cyber insurance coverage, since policies only cover certain types of losses. It helped 
us design better controls by pinpointing specific areas for cost reduction. Perhaps most 
importantly, it created a library of reusable magnitude components, which significantly 
accelerated future assessments.
The next similar risk assessment took three weeks instead of a month. The next one 
took two weeks. By the fourth assessment, we had reduced the timeframe to one week, 
as we could reuse a significant portion of the foundational data collection.
The decomposition framework I used originates from FAIR (Factor Analysis of 
Information Risk), which is why I recommend that all readers examine FAIR’s six forms 
of loss, even if you don’t intend to adopt the full FAIR model.
This chapter explores the concept of breaking down magnitude, the “how much it 
hurts” aspect of risk, into its component parts. You’ll learn about the six forms of loss that 
organizations experience when things go wrong and when it makes sense to decompose 
magnitude rather than measure it directly.
 When to Decompose (and When Not To)
The six forms framework is powerful, but you don’t always need it. For almost any risk 
scenario, you can derive defensible total loss costs using publicly available data, internal 
organizational data, and SME estimates. If that aggregate number answers the business 
question, stop there. Many risk assessments work perfectly well with a single total 
magnitude estimate.
Decompose  when you need to understand
• Where  losses materialize (identifying insurance gaps, since policies 
cover specific loss types)
• When  costs hit (immediate invoices vs. long-term strategic impacts 
affect cash flow and decision timing differently)
• What  to control (discovering that 80% of loss is productivity helps you 
prioritize availability controls over incident response investments)
• How  losses unfold (understanding the mechanism helps design 
targeted mitigations)Chapter 8  Understanding Loss: the six Forms

129Skip decomposition when
• The business decision only needs total magnitude (“Is this risk worth 
$100K to mitigate?”).
• Timeline is tight, and directional accuracy is sufficient.
• The breakdown wouldn’t change the decision or control strategy.
The opening AWS story shows both approaches: the ten-minute aggregate estimate 
was accurate and sufficient for initial decisions. We only decomposed when executives 
needed to understand the breakdown for insurance coverage and control design.
 Why Breaking Down Loss Matters
Here’s the thing about cyber incidents: they’re not just IT problems that stay contained 
within one team. They’re business events that impact every part of an organization, 
from the call center to the C-suite, encompassing customer relationships and regulatory 
compliance. Different stakeholders are concerned about various types of losses, and 
each type of loss necessitates distinct response strategies.
Let’s examine this with a simple example of how the same innocent can be viewed 
through different lenses.
Imagine a ransomware attack that encrypts your customer database for 48 hours. 
Here’s how different people in your organization would think about the impact, 
illustrated in Figure  8-1.Chapter 8  Understanding Loss: the six Forms

130
Figure 8-1. One ransomware incident creates five different types of perceived loss, 
each mattering to different stakeholders
The  CFO  focuses on the immediate financial hit: “How much will this cost us in lost 
revenue, incident response fees, and regulatory fines?”
The  CISO  thinks about the operational disruption: “How long until we’re back 
online, and what will it take to contain this and prevent it from spreading?”
The  Chief Marketing Officer  worries about long-term reputation: “How many 
customers will lose confidence in us? What’s this going to do to our brand?”
The  Chief Legal Officer  considers regulatory exposure: “ Are we looking at GDPR 
fines? What about our contractual obligations to customers?”
The  Chief Operations Officer  calculates productivity loss: “If our sales team can’t 
access customer data, how many deals are we going to miss this quarter?”
Each perspective represents a distinct type of loss, and different stakeholders are 
concerned with different aspects. The six forms framework helps you answer specific 
questions about where, when, and how losses occur, questions that a single aggregate 
number can’t address.
Use decomposition strategically: when stakeholders need to understand the 
breakdown, when you’re designing targeted controls, or when you’re matching losses to 
insurance coverage. Otherwise, the total magnitude is enough.Chapter 8  Understanding Loss: the six Forms

131 The Six Forms of Loss
Now that you understand why breaking down loss matters, let’s explore the framework 
that makes it practical. The FAIR (Factor Analysis of Information Risk) methodology 
identifies six primary forms of loss that organizations experience when cyber incidents 
occur (Jones & Freund, 2014 ). Think of these as different channels through which a 
single event can hurt your business.
Developed by Jack Jones, the six forms, as shown in Figure  8-2, of loss provide a 
practical way to break down the complex and multifaceted nature of cyber incident 
impact. Each form has its own characteristics, timing, and measurement challenges. A 
ransomware attack, for instance, might trigger losses in all six categories. Still, the costs 
would unfold differently: some would be immediate and trackable through invoices, 
while others would materialize over quarters or years through strategic impacts.
Figure 8-2. The six forms of lossChapter 8  Understanding Loss: the six Forms

132 Understanding Measurement Approaches
Some loss forms generate direct costs that appear immediately in accounting systems, 
including invoices, expenses, and line items that finance teams can track in real time. 
Others represent long-term impacts that unfold over extended time horizons and require 
different measurement approaches, such as customer behavior analysis, market studies, 
or strategic assessments. Both types are measurable; they just require different analytical 
methods and timeframes.
 YOU DON’T NEED TO MEASURE EVERY LOSS FORM
remember from Chapter 7 that you scope things in and out of your risk assessment based on 
business needs and feasibility. some loss forms are straightforward to estimate; others require 
significant effort that may not be worth the investment.
i’ve conducted many risk assessments where Competitive a dvantage Loss was clearly a 
possibility following an event, but i scoped it out due to the complexity of measurement. 
the key is being transparent: for example, stating upfront what’s included ( response, 
replacement, productivity, Fines) and what’s excluded (Competitive a dvantage).
Managing Pushback on Exclusions
When stakeholders question why something is out of scope, i describe exactly what including 
it would require:
“To properly measure Competitive Advantage Loss, we’d need:
• Half-day workshop with executive leadership
• Purchase competitive intelligence data (~$15K)
• Hire a consulting firm for competitive landscape analysis (~$50K)
• Add 4-6 weeks to the timeline”
i’ve never had an executive take me up on that offer. once they see the effort required, the 
response is usually: “ never mind, the direct costs are fine.”
Remember:  Focus your effort where it drives the business decision. it’s better to have three 
well-estimated loss forms than six poorly estimated ones.Chapter 8  Understanding Loss: t he six Forms

133 1. Productivity Loss
What it is:  The economic impact when employees can’t perform their normal duties 
due to an incident. This includes both direct downtime (people sitting idle) and reduced 
efficiency from working around problems.
Plain language:  This is what happens when your people can’t do their jobs because 
systems are down, data is unavailable, or they’re stuck using slow manual workarounds 
instead of their normal tools.
Examples
• Sales team unable to access CRM during ransomware attack, missing 
follow-ups and new deals.
• Manufacturing line workers are idle, while control systems are 
restored after a malware infection.
• Employees manually process orders when the ecommerce platform 
is compromised.
Measurement approach:  Moderate complexity. External downtime cost 
benchmarks exist, but you need internal operational data (employee counts, processes 
affected, revenue dependencies). SMEs must estimate the duration and scope of the 
disruption. Historical outages reveal which teams were affected and for how long, 
providing crucial calibration for future estimates.
 2. Response Cost
What it is:  The direct expenses incurred to detect, investigate, contain, and recover from 
an incident. This covers everything from emergency consultant fees to the time your own 
teams spend managing the crisis.
Plain language:  This is the money you spend cleaning up the mess: forensics 
experts, legal counsel, crisis communications, overtime pay for your incident response 
team, and all the coordination work needed to get back to normal.
Examples
• External forensics firm fees
• Legal counsel for breach notification and regulatory guidance
• Crisis communications and public relations supportChapter 8  Understanding Loss: the six Forms

134• Incident response team time and emergency contractor costs
• Credit monitoring services for affected customers
• Executive time spent in crisis management meetings
• Travel expenses for on-site incident response
Measurement approach:  Easiest to estimate. Abundant external data on forensics 
hourly rates, legal fees, and IR costs. SMEs can readily estimate team size and response 
duration. If your organization has experienced similar incidents, use actual invoices and 
time logs to calibrate estimates.
 3. Replacement Cost
What it is:  The expense of rebuilding, restoring, or replacing assets that were damaged, 
corrupted, or compromised during an incident. This includes both physical and 
digital assets.
Plain language:  This is what it costs to rebuild or replace what was broken: whether 
that’s reformatting infected servers, recreating lost data, or buying new equipment that 
can’t be safely restored.
Examples
• Rebuilding servers from clean backups after ransomware encryption
• Recreating corrupted databases from partial backups and 
manual entry
• Replacing hardware that can’t be safely cleaned of malware
• Re-licensing software that was compromised or needs reinstallation
• Cloud resource costs for emergency restoration and additional 
compute power
Measurement approach:  Straightforward estimation. Hardware/software pricing 
is publicly available. Internal asset inventory tells you what’s at risk. SMEs can assess 
rebuild complexity and timeline. Past restoration projects provide concrete rebuild 
timelines and cost baselines.Chapter 8  Understanding Loss: the six Forms

135 DON’T DOUBLE-COUNT RESPONSE AND REPLACEMENT COSTS
When an incident occurs, the same technical staff often performs both investigation activities 
(response) and rebuilding work ( replacement). it’s easy to accidentally count their hours 
twice—once under “incident response costs” and again under “system restoration costs,” 
inflating the total magnitude estimate by measuring the same labor in two different categories.
For example, if you estimate 40 hours of security engineer time as response Cost, then also 
count those same 40 hours rebuilding servers as replacement Cost, you’ve just counted the 
same $8,000 twice. Your final loss estimate will be artificially inflated.
The key distinction:
Response Cost(Understand and 
Coordinate)Replacement Cost(Rebuild and Restore)
Forensic investigation
rebuilding servers
incident coordination recreating databases
Crisis communications replacing hardware
executive meetings re-licensing software
documentation and reporting restoring from backups
Response = Investigation and containmentReplacement = When assets must be rebuilt/replaced
 4. Fines and Judgments
What it is: Legal and regulatory penalties imposed due to the incident, including government fines, lawsuit settlements, and contractual damages from failing to meet 
obligations.
Plain language: This is what you pay when regulators, customers, or business 
partners decide you didn’t protect their interests adequately and seek financial 
compensation through legal or regulatory channels.Chapter 8  Understanding Loss: t he six Forms

136Examples
• GDPR fines for inadequate data protection.
• HIPAA penalties range from thousands to millions, depending on the 
breach scope.
• SEC enforcement actions for inadequate cybersecurity disclosure.
• Class action lawsuit settlements from affected customers.
• Contractual penalties for SLA violations during outages.
• State attorney general fines for breach notification failures.
Measurement approach:  Moderate complexity. External data on regulatory penalty 
ranges and settlement amounts is available. Typically, one would need an internal 
compliance posture and legal exposure assessment from SMEs. There can be a high variance 
in outcomes, and previous regulatory actions or contract penalties at your organization or 
similar peer orgs can establish enforcement patterns and penalty magnitudes.
 5. Reputation Damage
What it is:  The long-term impact on stakeholder trust, brand value, and customer 
relationships resulting from how the incident and your response are perceived by 
the market.
Plain language:  This is a hit to your organization’s reputation, and the business 
consequences that follow include customers leaving, prospects choosing competitors, 
and partners reconsidering their relationships with you.
Examples
• Customer churn following breach disclosure
• Difficulty attracting new customers who cite security concerns
• Lost sales opportunities where security becomes a competitive factor
• Reduced employee morale and increased turnover as talent 
questions company stability
• Stock price decline reflecting a loss of investor confidence
• Partners requiring additional security assurances or contract 
modificationsChapter 8  Understanding Loss: the six Forms

137Measurement Approach:  Higher complexity. Limited external data that matches 
your specific customer base and market position. Requires sophisticated SME elicitation 
about customer behavior, churn sensitivity, and recovery timeline. If you’ve had 
past incidents, analyze actual customer churn rates, retention impacts, and recovery 
timelines to establish organization-specific patterns.
 6. Competitive Advantage Loss
What it is:  The erosion of your organization’s strategic market position due to 
compromised intellectual property, strategic information, or confidential business plans 
falling into competitors’ hands.
Plain language:  This is what happens when confidential information that gives 
you an edge (like product designs, customer lists, or strategic plans) gets stolen and 
potentially used against you by competitors.
Examples
• Trade secrets or proprietary algorithms exposed and reverse-  
engineered by rivals.
• Product road maps leaked, allowing competitors to rush competing 
features to market.
• Customer lists are stolen and used for targeted competitive sales 
campaigns.
• Merger and acquisition plans disclosed, affecting negotiation 
positions.
• Pricing strategies revealed, undermining competitive positioning.
• Research and development investments were compromised before 
the product’s launch.
Measurement Approach:  Highest complexity. Very company-specific with limited 
external comparables. Requires deep strategic assessment from SMEs about IP value, 
competitive dynamics, and market impact. Past IP compromises or strategic leaks 
provide case studies for estimating market impact, duration, and competitive positioning 
effects.Chapter 8  Understanding Loss: the six Forms

138 SIDEBAR: WHAT ARE “PENANCE PROJECTS?”
after major incidents, organizations often make reactive investments to appease leadership, 
boards, or regulators—what risk experts doug hubbard and richard seiersen call “penance 
projects” ( hubbard & seiersen, 2023). These aren’t formal loss forms to include in your 
magnitude estimate, but they’re worth understanding because they represent real money 
spent to manage perception rather than reduce actual risk.”
Example:  after target’ s massive 2013 data breach that compromised 40 million credit card 
accounts and 70 million customer records ( reed, 2023), the company invested heavily in 
cybersecurity infrastructure, including building a state-of-the-art “Cyber Fusion Center” (Chain 
store age s taff, 2015).
While some of these investments likely provided genuine risk reduction, the scale and speed 
of target’ s response had elements of organizational “penance” beyond what a purely risk-  
based analysis might have recommended.
track these post-incident expenses separa tely from your six forms of loss. t hey’re real costs 
organizations incur after breaches, but they’re driven by organizational psychology and 
external pressure rather than the incident itself.
See Appendix B in the back of this book for a detailed measurement guide for the 
six forms of loss.
 Addressing Executive Questions About Opportunity Cost
Executives often ask: “What strategic work gets delayed when we respond to this incident?” They’re not asking for a seventh loss form; they want context about resource 
trade-offs and strategic impact.
Don’t quantify opportunity cost in your magnitude estimate. Instead, present it as 
supplementary context after showing your six-form results.
Example Framing“Our quantified loss estimate is $500K–$1.2M across the six forms. Additionally, an 
incident of this scale would likely require pulling four to six engineers off projects for two to three weeks, potentially delaying product launches. ”
Key PrinciplesChapter 8  Understanding Loss: t he six Forms

139• Keep the six forms pure. Opportunity cost stays outside formal 
calculations.
• Frame by consequence (delayed launches, paused initiatives) rather than monetizing hypothetical revenue.
• Acknowledge the speculation; you’re describing likely organizational responses based on past incidents, not calculating measurable losses.
This gives executives the strategic context they need without compromising the 
integrity of your risk model.
Now that you understand the six forms conceptually, here’s how to apply them to 
your risk scenario.
 Applying the Six Forms to Your Risk Scenario
After you’ve completed your risk scope in Chapter 7 and identified which loss categories might apply to your scenario, it’s time to quantify them. This section shows you how 
to move from I know reputation damage could occur to Here’s my estimated range for 
reputation costs.
 Step 1: Triage Which Loss Forms Apply
For your scoped scenario, identify the relevant loss forms in Table 8-1. Include each item that applies to your scenario.
Table 8-1.  Triage applicable loss forms
☐ Response cost →  investigation/containment needed?
☐ Replacement cost →  systems/data need rebuilding?
☐ Productivity loss →  normal work disrupted?
☐ Fines and judgments →  regulatory/contractual exposure?
☐ Reputation damage → Will stakeholders know?
☐ Competitive loss →  strategic info at risk?Chapter 8  Understanding Loss: t he six Forms

140Response cost applies to almost every scenario. The others depend on your specific 
risk statement and scope.
 Step 2: Prioritize Your Effort
Not all loss forms deserve equal analysis time. Just because it can be measured doesn’t 
mean it has to be measured. It’s perfectly fine to skip difficult or expensive-to-measure 
loss forms if you disclose this clearly in the risk report. Plot each applicable form on the 
grid in Figure  8-3 to decide where to invest your effort.
Figure 8-3.  Prioritize your effort
Example:  Ransomware affecting the customer database
• Response cost  → Do first (high impact, easy to measure)
• Productivity loss  → Include (high impact, moderate effort)
• Reputation  damage  → Include (medium impact, harder to measure, 
accept wider ranges)
• Competitive advantage  → Skip (low impact, hard to measure, 
acknowledge but don’t quantify)Chapter 8  Understanding Loss: the six Forms

141 Step 3: Define What Each Loss Form Means 
for Your Scenario
For each loss form you’ve prioritized, we need to be specific about what would happen 
in your organizational context.
Use this scoping framework:
Loss Form Key Scoping Questions
Response Cost • Who responds? (internal teams, external consultants)• What activities? (forensics, legal, communications, coordination)
• how long? (hours, days, weeks)
Replacement Cost • What needs rebuilding? (servers, databases, credentials)• What can’t be recovered? (requires fresh deployment)
• What’s the rebuild approach? (from backups, from scratch)
Productivity Loss • Which employee groups are affected? (sales, operations, support)
• What work stops or slows? (specific processes, transactions)
• For how long? (outage duration + recovery lag)
Fines and Judgments
• Which regulations apply? ( gdpr , hipaa , pCi, sox)
• What contracts have penalties? ( sLas, customer agreements)
• What’s the violation severity? (minor breach vs. systemic failure)
Reputation Damage • Who learns about this? (customers, investors, media)
• What’s their likely reaction? (churn, hesitation, concern)
• how long to recover trust? (weeks, quarters, years)
Competitive Advantage • What strategic info is at risk? ( ip,  road maps, customer lists)
• Who could exploit it? (direct competitors, new entrants)• What’s the competitive window? (before we can respond)
Example: For a SQL injection scenario, scoping Productivity Loss means asking the 
following:
• Customer service team can’t access order history → Which processes stop?
• Sales team can’t process new orders → For how many hours?
• Finance can’t run reports → Which decisions get delayed?Chapter 8  Understanding Loss: t he six Forms

142This specificity directly informs the magnitude estimates you’ll develop in Step 4.
 Step 4: Estimate and Aggregate
For each loss form you’re quantifying, develop three estimates (lower bound, typical, 
upper bound) that reflect your uncertainty. Wide ranges are honest; narrow ranges you 
can’t defend are useless.
Combining your estimates:
Lower bound (P5) Typical (P50) Upper bound (P95)
response Cost $10K $25K $50K
replacement Cost $5K $15K $30K
productivity Loss $20K $60K $100K
Total Magnitude $35K $100K $180K
 Step 5: Validate Your Work
Before finalizing your magnitude estimates, verify:
Completeness
• All applicable loss forms are identified based on your scenario.
• Data sources documented for each estimate.
• Key assumptions stated explicitly.
• Exclusions noted and justified.
Consistency
• Time periods align across all estimates (usually 12 months from 
your scope).
• No double-counting between categories.
• Ranges reflect appropriate uncertainty levels.
• SME input validates the overall magnitude.Chapter 8  Understanding Loss: t he six Forms

143Usability
• Results address the original business question from your scope.
• Presentation format suits your audience’s needs.
• Action implications are clear.
 GENAI PROMPT: BUILD SIX FORMS OF LOSS
[Insert a scenario: e.g., “a ransomware attack that encrypts our customer database for 
48 hours”]
Using the F air ’s s ix Forms of Loss framework ( r esponse Cost, r eplacement Cost, p roductivity 
Loss, Fines & Judgments, reputation damage, Competitive a dvantage Loss):
 1. i dentify which loss forms apply to this scenario and which don’t
 2. F or each applicable form, explain what would happen
 3. d etermine which forms are worth measuring vs. which to exclude
 4. i dentify what data sources you’d need for each form you plan to measure
Focus on what would happen and where to find data, not specific dollar amounts.
 You’re Done with Magnitude!
Once you complete this process, you have finished the magnitude portion of your risk assessment. Your aggregated ranges (minimum, most likely, maximum) represent the 
total financial impact if this risk scenario were to occur.
Hold onto this data. When you’re ready to build your complete risk model using 
Monte Carlo simulation, these magnitude estimates will be one of your key inputs. The 
other key input (frequency) will be covered in the subsequent data collection chapters.Chapter 8  Understanding Loss: t he six Forms

144 Chapter Summary
The Big Idea: Breaking down magnitude into the six forms of loss provides a structured 
way to understand where, when, and how cyber incidents impact your business, but 
decomposition is optional. Use it when understanding the breakdown drives better 
decisions.
Key Takeaways
• Decompose strategically, not automatically. A single aggregate magnitude estimate often suffices; decompose only when 
stakeholders need to understand where losses materialize, when 
costs hit, or what to control.
• Master the six forms framework. Response cost, replacement cost, productivity loss, fines and judgments, reputation damage, and 
competitive advantage loss capture how incidents create financial 
impact through different channels.
• Match the measurement approach to the loss type. Direct costs (response, replacement, fines) rely on invoices and historical data; 
long-term impacts (reputation, competitive advantage) require 
strategic analysis and trend evaluation.
• Provide context without breaking your model. Address executive questions about opportunity cost and penance projects as 
supplementary context, not formal loss categories to quantify.
Bottom Line: You now have a framework for thinking about impact that goes far 
beyond “high, medium, low. ” Use it when decomposition adds value; skip it when aggregate magnitude is enough.
 What’s Coming Next
You’ve completed Part 2. You’ve built the foundations of quantitative thinking (Chapter 4),  
run your first Monte Carlo simulation (Chapter 5), learned to communicate results with 
powerful visualizations (Chapter 6 ), mastered the art of scoping assessments (Chapter 7), 
and decomposed magnitude into the six forms of loss (Chapter 8). You can now think in 
ranges, run simulations, and present results that drive decisions.Chapter 8  Understanding Loss: t he six Forms

145Now you’re entering Part 3, and this is where most people get stuck: data 
collection.
It’s the number one obstacle analysts face. You know what to measure and how 
to communicate it, but finding and trusting the data feels overwhelming. Should you 
use that industry report? Can you trust your incomplete incident logs? How do you get 
reliable estimates from busy experts?
Chapter  9 breaks the myths keeping you paralyzed and introduces the three-source 
model for systematic data gathering. You’ll discover that the data you need is closer than 
you think.
Chapters  10–14 then show you exactly how to find, evaluate, and combine that data:
• Chapter 10: How to vet and trust your sources
• Chapter 11: Mining external research and industry data
• Chapter 12: Extracting insights from internal systems
• Chapter 13: Working effectively with subject matter experts
• Chapter 14: Blending all three sources into defensible estimates
You’ve learned the methodology. Now you’ll learn to feed it with real data that 
transforms abstract frameworks into defensible dollar ranges.
Part 3 will unstick you.  Let’s begin.
References
Chain Store Age Staff. (2015,. September 2). Target opens cyber fusion security center. 
Chain Store Age.  https://chainstoreage.com/news/target-opens-cyber-fusion-
security-center
Hubbard, D. W., & Seiersen, R. (2023). How to Measure Anything in Cybersecurity 
Risk  (2nd ed.). Wiley.
Jones, J., & Freund, J. (2014). Measuring and Managing Information Risk: A FAIR 
Approach . Butterworth-Heinemann.
Reed, C. (2023,. October 5). Target data breach: Full timeline through 2023 . Firewall 
Times. https://firewalltimes.com/target-data-breaches/Chapter 8  Understanding Loss: the six Forms

PART III
Solving the Data Problem

