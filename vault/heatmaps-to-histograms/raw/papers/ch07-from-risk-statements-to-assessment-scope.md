---
title: "Chapter 7: From Risk Statements to Assessment Scope"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 7
pages: 136-151
ingested: 2026-04-04
---

# Chapter 7: From Risk Statements to Assessment Scope

111
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_7CHAPTER 7
From Risk Statements 
to Assessment Scope
Make it simple, but significant.
—Don Draper, Mad Men
Mid-career, I joined a global retailer that equipped every floor associate with an  
iPhone-like device for the sales floor: a combination barcode scanner, credit card swiper, 
and inventory lookup device. Those handheld devices communicated directly with 
the corporate databases, including in-stock products, payment processing, and even 
customer profiles.
While helping a few teams clean up and quantify the security risk register, I stumbled 
on a line item that looked harmless enough: “Lost or Stolen Store Device. ” Makes perfect 
sense to whoever logged it, right?
Not quite.When it came time to present this risk to leadership for quarterly planning, I hit a 
wall. How do you analyze “Lost or Stolen Store Device”? What’s the asset at risk? What kind of loss are we talking about? The statement was so vague I couldn’t even begin to collect data or estimate impact.
I called a meeting with the risk owners to get clarity. One question got three different 
answers:
• IT’s take (they issued the phones): “The asset is the device. That’s a $1K hardware hit. Order a replacement and move on. ”
• InfoSec’s take (they secure the data paths): “The asset is the data on those phones: full inventory and maybe cardholder data. We’re 
talking about a potential data breach. ”

112• Store manager’s take  (they need uptime): “The asset is our point-  
of- sale capability. No device, no checkout. Customers stack up and 
sales stall. ”
Which view was correct? All of them . There’s an adage in risk management: “Risk 
is in the eye of the beholder. ” Each team was looking at the same event but identifying 
completely different assets at risk, resulting in distinct types of losses. I ended up carving 
that single, mushy entry into three separate risk statements: (1) device replacement cost, 
(2) potential PII exposure, and (3) diminished point-of-sale capability. Only then could 
I run meaningful risk analyses and attach sensible frequency and loss numbers to each 
scenario.
This is why scoping a risk assessment matters. Before we crunch a single number, 
we must get clear on what we’re analyzing. Do it right, and the rest of the assessment 
flows. Skip it, and you’ll burn hours (or days) chasing the wrong problem, arguing over 
definitions, and polishing an assessment no decision-maker asked for.
 Where This Fits in the CRQ Process
This chapter and the next wrap up risk fundamentals; then, we move into Part 3, which 
is all about data collection. I’d like to show you where you stand in the process. This 
chapter is crucial  for the following six chapters because it is where we identify and 
define what we will measure and the data we will collect.
• Chapter  7 (this chapter) : Scoping a risk assessment
• Chapter  8: Decomposing magnitude into measurable pieces
• Chapters  9–13: Collecting, vetting, and blending the data your risk 
assessment scope identified (external research, internal data, expert 
interviews)
This chapter gets you from confusion to clarity about what you’re analyzing. The 
chapters that follow will show you how to gather the specific data your scope identifies.Chapter 7  From risk statements to assessment sCope

113 Introducing Risk Statements and Risk 
Assessment Scope
A risk statement is a single sentence that captures the essential elements of a 
risk in a structured format, identifying the threat source, the asset at risk, and the 
potential impact.
The “Lost or Stolen Store Device” misunderstanding has happened to me many 
times before and many times since. This is a key lesson I teach anyone I lead on a risk 
team or anyone I work with on risk assessments: we all need to be on the same page 
about what we are assessing. To get on the same page, we need to scope the assessment 
properly. But before you can scope an assessment, you need to start with clear 
statements.
Many people think scoping an assessment means jumping straight into detailed 
narratives about how attacks unfold. That’s getting ahead of the process.
Here’s what works: first, you craft a precise risk statement that everyone can agree 
on; then, you expand it with all the operational details. Skip the statement step, and you’ll end up with beautifully detailed scope documents that different people interpret 
completely differently.
Think of building a risk analysis like planning a research project:
• Risk statement: The research question that defines what you’re investigating
• Risk assessment scope: The detailed research plan that defines your methodology, boundaries, and what you will and won’t study
Just like a researcher needs both a clear question and a detailed study plan, you need 
both a focused risk statement and a comprehensive scope to do effective quantitative analysis.
 EXERCISE 7-1: BRAINSTORM YOUR WORRIES
take a few moments and brainstorm some generic risks.  t hey don’t need to be fully formed 
yet. t hey can be worries, findings, gaps, control deficiencies, or something the C to  said to you 
in the elevator. Write them down.Chapter 7  From risk statements to assessment sCope

114Examples to get you started:
• “our cloud setup feels risky.”
• “employees keep clicking phishing emails.”
• “that audit finding about password policies.”
• “What if our main vendor gets breached?”
Don’t worry about structure or precision yet. Just capture what comes to mind.
 The Progression: From Worry to Analysis
Every quantitative risk assessment follows the same basic path. You start with something 
vague and messy: a concern, a finding, something that keeps you up at night. Through 
the process you’ll learn in this chapter, you transform that worry into something you can 
measure and act on. Figure 7-1 shows this progression.
Figure 7-1.  The progression of a vague worry into a quantified assessment
Each step builds on the previous one. The risk statement gives you clarity about 
what you’re analyzing. The scope defines your boundaries. The data collection focuses 
your research. The quantified assessment provides the information decision-makers 
need to act.
 The A-T-E Framing
The first step in escaping the swamp of ambiguity is writing a clear risk statement. One sentence, if shaped correctly, carries everything we need to start a conversation about what we mean when we say “risk. ” It also sets us up for success in the following two 
stages: building your assessment scope and collecting data.Chapter 7  From risk statements to assessment sCope

115This approach comes from FAIR (Factor Analysis of Information Risk). FAIR is 
not just one model, but rather a family of related frameworks and methods. What I’m 
showing here is FAIR’s approach to building risk statements. FAIR utilizes Asset, Threat 
Agent, and Effect  as the core components of risk statements, as illustrated in Figure  7-2. 
I call it A-T-E framing because it’s easier to remember, but the concept is identical. There 
is an optional fourth piece, Method , for times when you want extra detail.
Figure 7-2. The components of a risk statement
FAIR’s approach to risk statements is worth adopting because it’s simple, 
unambiguous, and uses standard definitions. Whether you ultimately employ FAIR’s 
full quantitative methodology or a different approach, this Asset-Threat-Effect structure 
compels you to be specific about what you’re analyzing.
Asset: What Has Value
First comes the Asset , which is the thing that has value to the organization. It can be a 
system, a database, intellectual property, cash, people, or even something intangible like 
brand reputation. Start broad: customer data is a fine first cut. Drill down only when the 
analysis demands it, for example, “Customer personally identifiable information of EU 
citizens. ” Begin simple; zoom in later.
Common Assets Most Organizations Have
• Customer data (PII, payment info, contact details)
• Financial systems (accounting, payroll, banking)
• Intellectual property (code, designs, trade secrets)
• Operational systems (email, file servers, databases)
• Physical infrastructure (buildings, equipment, devices)
• Brand reputation and customer trustChapter 7  From risk statements to assessment sCope

116Threat: Who or What Can Act
Next, we identify the Threat . A threat is any actor or force of nature that can act against 
the asset and cause harm or loss. Earthquakes, malicious ex-employees, untrained or 
careless current staff, cybercriminal groups, power outages, and foreign intelligence 
services all qualify. Most organizations share a core set of threats, such as untrained 
employees or commodity cybercriminals. Every sector also has its own flavor. A 
government agency worries about foreign spies; critical infrastructure fears nation-  
state saboteurs; hospitals lose sleep over ransomware gangs. Keep motive neutral; 
accidents count too. There are often many threats paired with a single asset. For each 
asset, there may be more than one threat actor.
Common Threats Every Organization Faces
• Cybercriminals (ransomware, fraud, theft)
• Untrained employees (mistakes, misconfigurations)
• Malicious insiders (data theft, sabotage)
• Natural disasters (floods, earthquakes, storms)
• System failures (hardware breakdowns, software bugs)
• Third-party vendors (breaches, outages, failures)
Effect: What Gets Damaged
Finally, for each asset-threat pair, we spell out the Effect . What materializes if the threat 
acts on the asset? This can be a tough step for beginners, but with practice, it becomes 
second nature. Start with the standard information security CIA Triad : confidentiality, 
integrity, and availability, and build from there. Consider all the ways the threat actor 
can target the asset. Just as in the previous step, there may be more than one effect for 
each asset-threat  pair.
Effects are very asset-threat specific. Common ones include
• Confidentiality loss : Data exposed, secrets stolen, privacy breached
• Integrity loss : Data corrupted, systems modified, records falsified
• Availability loss : Systems down, processes stopped, services 
unavailable
• Authentication loss : Identity compromised, unauthorized 
access gainedChapter 7  From risk statements to assessment sCope

117 Putting It Together
The result is several crisp, short risk statements. Stakeholders see a risk they recognize. 
Risk analysts are presented with a problem they can assess.
Using the example above of Lost or Stolen Store Device  from the beginning of the 
chapter, we now have:
• “Thieves impact the availability  of point-of-sale systems. ”
• “Cybercriminals impact the confidentiality  of customer PII. ”
• “Equipment failure impacts the availability  of payment processing. ”
 Adding Method (Optional)
When needed, add the Method . Phishing, zero-day exploits, and forklifts through the 
data-center wall—knowing “how” sharpens discussions around how to respond to 
the risk. It is optional; the first three elements already provide a statement that can be 
quantified.
Adding a method  to our retail examples gives us even more clarity:
• “Thieves impact the availability of point-of-sale systems via physical 
device theft .”
• “Cybercriminals impact the confidentiality of customer PII by 
accessing data on stolen devices .”
• “Equipment failure impacts the availability of payment processing 
via hardware malfunction .”
 The Mad Libs Approach
I call it A-T-E framing because that’s the easiest way to think through risk components: 
Asset ➤ Threat ➤ Effect. But when you write the actual sentence, start with the threat for 
natural grammar: “[Threat] impacts the [Effect] of [Asset]. ”
Why the mismatch? Because thinking order and writing order serve different 
purposes. You brainstorm, starting with what has value (the asset), but readers 
understand sentences that begin with who’s acting (the threat). This template gets you 
80% of the way there. Just polish the language for clarity.Chapter 7  From risk statements to assessment sCope

118 ALWAYS CONNECT TO ORGANIZATION OBJECTIVES
Develop risk scenarios that directly align with organizational objectives. sometimes that 
means starting with effects first. start conversations about how damage impacts the company 
and work backward from there.
 GENAI PROMPT: RISK STATEMENT BUILDER
i have a risk concern: [ insert concern]
Convert this into clear risk statements using a - t- e  format:
• asset: What valuable thing could be harmed?
• threat: Who or what could act against it?
• effect: how would it be damaged? (confidentiality, integrity, availability)
Create 1-3 statements formatted as: “[ threat] impacts the [ effect] of [ asset]”
Requirements:
• Be specific enough to measure frequency and impact
• Focus on realistic, plausible scenarios
• if multiple assets/threats are involved, create separate statements
• include business impact, not just technical details
Now let’s practice this approach with your own risk concerns.
 EXERCISE 7-2: CREATE RISK STATEMENTS
Grab a few of your worries from Exercise 7-1 and turn them into fully formed risk statements 
using the A-T-E framing , optionally adding a method. Feel free to do it by hand or with Gen ai.Chapter 7  From risk statements to assessment sCope

119 Where to Find Risk Statement Inspiration
Do you need more risk statements beyond your current register? Look to three sources: 
your organization’s strategic objectives (what could prevent achieving them?), industry 
security news (when you see “Hospital hit by ransomware, ” ask “Could that happen 
here?”), and cross-functional conversations with operations, legal, finance, and IT teams 
about what keeps them up at night. Risk brainstorming workshops, which we’ll cover in 
Chapter 14, bring these perspectives together systematically.
 GENAI PROMPT: RISK DISCOVERY ASSISTANT
scan this [ industry report/news article/incident] and identify potential risk scenarios for a [your 
industry] organization with [brief description of your business].
Create 3-5 risk statements using this format: “[Threat] impacts the [Effect] of [Asset]”Focus on scenarios that could realistically affect an organization like ours.
 Quick Quality Filter
Before investing time in detailed scoping, quickly scan your list for obviously implausible 
scenarios. Ask yourself: Could this realistically happen at an organization like ours? 
Remove clear outliers: scenarios that require multiple unlikely events or sophisticated 
attackers, which don’t align with your threat landscape. Don’t overthink this step; you 
can always revisit statements later. Begin with the risks that are most clearly relevant to 
your environment.
Use these guidelines to evaluate whether your risk statements are worth analyzing:
• Must have an asset at risk.
• Must have a threat that can reasonably act against the asset.
• The event must result in some form of loss.
• A reasonable person would think of the scenario as within the realm of possibility.
• Not only is the event possible, it’s plausible.Chapter 7  From risk statements to assessment sCope

120 GENAI PROMPT: QUALITY FILTER HELPER
[paste risk statements]
take the above risk sta tements and evaluate them against the General Guidelines below. For 
each statement, assess:
• Does it have a clear asset at risk?
• is the threat reasonable and capable of acting against the asset?
• Does the event result in measurable loss?
• is it within the realm of possibility for a reasonable person?
• is it not only possible, but plausible?
provide a confidence rating in the strength of each statement and suggest improvements 
where needed.
 Scoping Your Risk Assessment
Your risk assessment scope is the bridge between identifying a risk and analyzing it. 
Think of it as a project charter: you’re defining exactly what you’ll measure and what 
you won’t, which prevents scope creep and ensures stakeholders understand your 
results. Without a clear scope, you’ll waste time collecting irrelevant data, miss critical 
information, and build models that don’t answer the business question. Get this right, 
and the rest flows naturally.
Your scope must answer five essential questions:
 1. What decision is this informing? Be specific: “Should we invest $50K in additional WAF protection?” not “assess our web 
security risk. ”
 2. What exactly are we measuring? Expand your asset beyond the 
risk statement. “Customer payment database containing ~50,000 
active credit card records” tells you more about impact than 
“customer data. ”Chapter 7  From risk statements to assessment sCope

121 3. What are we NOT measuring? Critical for preventing scope 
creep: “ Analysis excludes employee HR database and marketing 
customer data. ”
 4. What’s our time horizon? Default to 12 months unless you have a 
specific reason otherwise.
 5. What specific losses could occur? This connects to Chapter 8. 
Based on your asset-  thr eat-  effe ct, identify which loss categories 
might apply:
• Productivity loss (operational downtime?)
• Response costs (incident response needed?)
• Replacement costs (what needs to be replaced?)
• Fines and judgments (regulatory penalties?)
• Reputation damage (customer/brand impact?)
• Competitive advantage loss (strategic value at risk?)
You’ll learn to measure each category in detail in Chapter 8, but identifying them 
now guides your data collection.
 DEFENDING YOUR SCOPE AGAINST “WHAT ABOUTS”
as you circulate your scope for feedback, expect “what abouts”—inevitable scope creep 
requests. Listen to each one, but bring it back to two things: the risk statement and the business decision.
The opportunity cost matters
: every additional piece of scope costs time, effort, and 
potentially delays the decision. Before expanding, ask:
• Will this change the decision we’re trying to make?
• Could the decision-maker act confidently without this?
How to respond : “that’s an interesting point. Let’s capture that as a separate risk to analyze 
later, but for this assessment, we’re focused on [restate original scope] because it addresses 
[the business decision].”Chapter 7  From risk statements to assessment sCope

122 From Scope to Data Collection: Your 
Translation Guide
Once you’ve answered the five scoping questions, Table 7-1 shows examples of what 
data to collect.
Table 7-1.  From scope questions to data collection requirements
Scope QuestionWhat This Tells You About Data CollectionSpecific Data You Need
Q1: What 
decision?
• precision level required
• timeline constraints
• key stakeholders• Decision-maker’s risk tolerance
• Comparable past decisions
• Budget constraints
Q2: Asset and 
effect?For Frequency:
how often does this happen?External:  industry attack/incident rates for this 
asset-threat comboInternal: Your logs, past incidents, vulnerability 
scans
SME:
 security team likelihood estimates
For Magnitude:
how much impact?External:  industry cost benchmarks
Internal:  asset value, revenue dependencies
SME: Business impact estimates
Q3: NOT measuring?• Data you can skip
• scope boundarieskeep this list handy when stakeholders request 
additions
Q4: Time horizon? • how to annualize data
• seasonal factors• historical data covering your timeframe
• planned changes in the next 12 months
Q5: Loss categories?For EACH category you identified, you need specific 
cost dataChapter 8 breaks down how to measure:
• productivity loss
• response costs
• replacement costs
• Fines and judgments
• reputation damage
• Competitive advantage loss
For now, just identify which categories apply to 
your scenario.Chapter 7  From risk statements to assessment sCope

123
 Complete Worked Example: From Statement to Data 
Road Map
Risk Statement: “Cybercriminals impact the confidentiality of the customer payment 
database via SQL injection. ”
 Scoping the Assessment
 1. What decision is this informing? Justify $50K WAF investment for Q1 budget approval by CISO.
 2. What asset and effect are we measuring? Customer payment database (50,000 credit card records) experiencing a loss of 
confidentiality through unauthorized access. (Excludes marketing 
database and employee HR data.)
 3. What are we NOT measuring? This analysis excludes insider threats, social engineering attacks, and our mobile app 
infrastructure.
 4. What’s our time horizon? Next 12 months, assuming current 
WAF effectiveness remains constant.
 5. What specific losses could occur?
• Response costs (incident response, forensics, breach notification)
• Fines and judgments (PCI DSS penalties)
• Reputation damage (customer churn, brand impact)
• Productivity loss (system downtime during investigation)
 The Data Collection Road Map Emerges
Based on this scope, you now know what data to collect:Chapter 7  From risk statements to assessment sCope

124
Frequency Data
• External: SQL injection attack rates in ecommerce, industry 
threat reports
• Internal: Vulnerability scan results, WAF logs, past incidents
• SME: Security team estimates on current exposure
Magnitude Data (organized by loss category)
• Response costs: Incident response hourly rates, notification costs
• Fines and judgments: PCI DSS penalty ranges, legal settlement benchmarks
• Reputation: Customer churn rates after breaches, brand recovery costs
• Productivity: Hourly downtime costs, investigation duration estimates
Notice how identifying specific loss categories in Question 5 directly tells you what 
data to collect. Chapter 8 will teach you what each category means and how to break it down into measurable components.
 What You’ve Accomplished
Your scope has done three critical things:
 1. Defined boundaries: What you will and won’t measure
 2. Identified loss categories: The specific types of impact to quantify
 3. Created a data road map: What information you need to collect
Question 5 drives everything that follows. You know you need response cost data, 
fine ranges, churn rates, and downtime costs because you identified those specific loss 
categories in your scope. Chapter 8 teaches you to break down each loss category into 
measurable components.Chapter 7  From risk statements to assessment sCope

125
 GENAI PROMPT: SCOPE ASSISTANT
Create a complete risk assessment scope for: [paste risk statement]
Context: [industry], [org size], [key regulations], [geographic footprint]Answer these five scoping questions:
 1. Wha t specific business decision will this assessment inform?
 2. Wha t asset and effect are we measuring? (Be precise about the asset details)
 3. Wha t are we not  measuring? (Clear exclusions)
 4. Wha t’s the time horizon? (Default: 12 months)
 5. Wha t specific losses could occur? ( i dentify which categories apply: productivity 
loss, response costs, replacement costs, fines & judgments, reputation damage, 
competitive advantage loss)
then create a data collection roadmap showing:
• Frequency data needed (external, internal, sme sources)
• magnitude data needed for each loss category identified
• specific questions to ask experts
Be specific and actionable - this will guide my data collection.
 Chapter Summary
The Big Idea: Clear risk statements and comprehensive assessment scopes are the foundation of effective quantitative risk analysis. Get this right, and everything else falls 
into place naturally.
Key Takeaways
• Start with precise risk statements using the A-T-E framework (Asset, 
Threat, Effect) to eliminate ambiguity before you invest time in analysis.
• Expand statements into detailed scopes that define exactly what you’ll measure, what you won’t, and what data you’ll need to collect.Chapter 7  From risk statements to assessment sCope

126
• Protect your scope boundaries  against “what about” requests that 
can derail focus and timeline.
• Use the scoping framework systematically  to identify decision 
context, stakeholder impacts, and data collection requirements.
• Think like a project manager . Your assessment scope is the charter 
that keeps everyone aligned on deliverables and expectations.
Bottom Line:  The 30 minutes you spend getting clear on what you’re analyzing will 
save you hours of collecting irrelevant data and arguing over definitions later.
 What’s Coming Next
You’ve transformed vague worries into clear risk statements and detailed assessment 
scopes. Your scope identifies which loss categories to measure and creates a data 
collection road map.
Chapter  8 breaks down “effect” into specific business loss categories you can 
quantify. You’ll learn what productivity loss, response costs, fines, reputation damage, 
replacement costs, and loss of competitive advantage mean, as well as how to 
decompose each one for measurement.
Chapters  9–13 then show you how to collect the data your scope identified: external 
research, internal data analysis, and expert interviews.
Your scope is the blueprint. Everything that follows builds on what you defined here.Chapter 7  From risk statements to assessment sCope

