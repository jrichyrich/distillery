---
title: "Chapter 18: CRQ in the Org"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 18
pages: 368-385
ingested: 2026-04-04
---

# Chapter 18: CRQ in the Org

351
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_18CHAPTER 18
CRQ in the Org
Experience is simply the name we give our mistakes.
—Oscar Wilde
Before we dive in, it’s worth clarifying what this book covers and what it doesn’t.
From Heatmaps to Histograms is about risk analysis, not full-scope risk management. 
The focus has been on how to frame problems, collect data, and build models that 
improve decisions. Broader management topics such as risk appetite, governance 
structures, policy frameworks, and control treatment planning are important, but they 
belong to the practice of managing risk, not analyzing it. This chapter connects those 
two worlds. It shows how analysis fits inside a living organization and how to make 
quantitative reasoning part of everyday decision-making without turning it into a 
bureaucracy.
 A Tale of Two CRQ Programs
I’d like to tell a tale of two CRQ programs, as seen in Figure 18-1. I’ve built many over 
the years—most very successful, others not so much. I want to tell you about the least 
successful and the most successful.

352
Figure 18-1. Two CRQ programs: one prioritized for speed (left) and the other for 
long-term success (right)
Let’s start with the least successful.
It was early in my career, right after I convinced my boss to send me to a two-day 
FAIR training course. I came back completely hooked. I thought, this is it . This is the right 
way to do risk. Qualitative methodologies, I’d come to realize, were fatally flawed and 
borderline professionally dishonest. In many ways, I still stand by that (but I’ve tempered 
the way I talk about it a bit).
When I got back to work, I walked in like a zealot. I told everyone that from now on, 
everything would be quantitative. The policies, the risk register, the metrics, everything. I 
was ready to rebuild the entire program in a week. People listened politely and went back 
to their day. No traction, no interest, and no allies. My proselytizing lasted about three 
days. I was right, but it didn’t matter. I may as well have been preaching heliocentrism 
in a medieval cathedral. That era of my life was short-lived, but it taught me something 
that stuck with me for the rest of my career: conviction alone doesn’t build programs. 
Culture, pacing, and relationships do.
Since then, I’ve built several programs, most of which have been successful. Now, let 
me tell you about the most successful one.Chapter 18  CrQ in the Org

353This was at a large technology company that wanted to move from compliance 
theater to genuine, data-driven decision-making. When I arrived, the “risk program” 
was 30 or 40 lines in an Excel sheet that was updated once a quarter to keep the auditors 
happy. Leadership wanted more. They wanted quantified risk that could drive real 
investment decisions.
The first thing I did was… nothing . I didn’t touch the risk register. I improved 
small things, like validating risks and updating owners, but otherwise left the existing 
qualitative program alone. That restraint was deliberate. I’d learned the hard way not to 
burn the ships.
Instead, I started meeting and talking to people. I looked for the person or team 
with a real problem, a high-stakes decision they couldn’t get traction on. Eventually, I 
found one: a team managing a security problem with hundreds of millions in potential 
exposure and weekly realized incidents, but couldn’t get any traction or funding to 
mitigate the risk. They were stuck and needed a better way to make their case.
I ran two analyses. The first was a baseline analysis showing the current risk—risk 
as it looked today . The numbers were eye-opening. Enormous realized losses and 
escalating exposure. The second analysis was hypothetical  and modeled what would 
happen if we invested in one additional headcount and a vendor solution for real-time 
monitoring and mitigation. The model showed a 70% risk reduction for an investment of 
about $2 million. That is a stellar return on investment.
I showed the analysis to the risk owner, who was thrilled. We packaged it into a short 
report, and leadership approved the budget almost immediately. Within a year, the 
measured reduction matched our forecast. It was a big win.
That success became the proof point. I brought it to other team leads and said, 
“Here’s what we did for them. Want to see if we can do something similar for you?” One 
analysis became 2, then 15. Each one solved a tangible business problem. All the while, 
the qualitative register remained quietly in the background, updated and fulfilling its 
regulatory obligations. When the time was right, I flipped the entire program to FAIR. I 
didn’t have to sell it. Everyone already wanted it.
This experience taught me that CRQ isn’t a revolution you declare. It’s a conversation 
you sustain. The difference between my failed and successful programs wasn’t math. 
It was empathy, pacing, and timing. The most successful CRQ programs don’t replace 
the old system overnight. They work within it, show quick wins, and invite people along 
the way. The rest of this chapter is about how to do exactly that: how to make CRQ stick 
inside an organization and become part of how decisions get made every day.Chapter 18  CrQ in the Org

354 Why CRQ Programs Fail (and How to Avoid It)
After running enough of these programs, you start to see the patterns. Some teams take 
off. Others stall or fade away after the first few analyses. A few never make it past the 
kickoff meeting. The failures aren’t random. They follow a pattern that shows up at three 
levels: individual, team, and organization, as illustrated in Figure  18-2 .
Figure 18-2. CRQ programs can fail at three levels
 The Individual Level
This one usually starts with enthusiasm. Someone takes FAIR training, reads How to 
Measure Anything in Cybersecurity Risk , or sees a conference talk that finally makes the 
math click. They’re excited. They build a model, plug in numbers, and start sharing 
histograms with anyone who will look.
But the excitement fades fast when nobody else understands what they’re seeing. 
The analyst starts to feel isolated, frustrated, and eventually burned out. Most of these 
early efforts fail not because the person is wrong, but because they don’t have the 
foundation or patience to meet others where they are.Chapter 18  CrQ in the Org

355At the individual level, CRQ programs fail when analysts try to substitute conviction 
for influence. They get stuck on the math and skip over storytelling, alignment, and 
decision context. They also tend to underestimate the extent to which the work actually 
requires statistical literacy, data wrangling, and communication skills. Quantification 
without understanding the models, quality checks, or context does not build confidence. 
It erodes it.
How to avoid it:  Start small and humble. Pick one decision that matters and model 
it well. Show your uncertainty rather than hide it. Find a peer who can review your work 
and keep you honest. Last, remember that every successful CRQ program is built by 
someone who learned how to translate probability into a language their stakeholders 
already speak.
 The Team Level
The next pattern happens when a small group of change agents tries to scale too quickly. 
They have the right intent but the wrong architecture. Maybe they use the wrong tools, 
bolt quantitative methods onto a legacy qualitative framework, or skip essential pieces 
like vetting data or learning risk communication because “we’ll fix it later. ” The result is a 
model that looks sophisticated but collapses under scrutiny.
The team-level failure usually sounds like this: “We built a Monte Carlo simulation, 
but leadership didn’t buy it. ” What that really means is the team built a model without 
building credibility. They ran a CRQ process, but not a CRQ program : one with data 
governance, reproducibility, documentation, and a repeatable workflow that others 
can trust.
Sometimes the opposite happens. The team over-engineers everything. They spend 
months building infrastructure, taxonomy, and tooling before a single business problem 
gets solved. By the time their first model is ready, everyone else has moved on.
How to avoid it:  Treat CRQ as a service, not a product. Every model should answer 
a real question with a decision owner and a timeline. Get results out fast, even if 
they’re rough, and iterate. Use the lightest tools possible until you’ve proven demand. 
A spreadsheet that drives one funded decision is worth more than a polished platform 
nobody uses. Build credibility first; the rest can follow.Chapter 18  CrQ in the Org

356 The Organizational Level
The biggest failures start here. These are the programs that never had a chance because 
the culture, incentives, or governance were misaligned from the start. The symptoms 
are familiar: risk lives in a silo, reporting serves auditors instead of decision-makers, 
and leadership treats CRQ as a compliance checkbox rather than a management tool—
something that informs strategy or drives investment.
Failure often happens when CRQ is rolled out as a sudden replacement for 
qualitative scoring. Replacing subjective rankings is the goal, and everyone knows the 
current method is flawed. The mistake is expecting the organization to leap straight to 
the future without a bridge. When CRQ arrives as a band-aid that gets ripped off instead 
of a path forward, it triggers an immune response. Other teams feel judged, not invited. 
They shut down cooperation, withhold data, or quietly wait until the quant team runs 
out of air.
Misaligned incentives make all of this worse. If green dashboards are rewarded more 
than honest uncertainty, anything that reveals more risk gets treated like a problem. 
Leaders start asking why the numbers went up rather than what they imply. The same 
thing shows up in how risk mitigation is rewarded. Teams earn praise for reducing risk 
even when that reduction costs more than it saves. This reflex drains budgets, crowds out 
smarter investments, and erodes credibility.
CRQ reframes incentives around efficiency. The goal becomes getting the most 
loss reduction per dollar instead of stacking more controls simply to show activity. A 
program that rewards optimization instead of “risk to say we did it” earns more trust and 
eventually earns more funding, too. That is when CRQ shifts from a reporting exercise 
into a performance engine.
Many organizations stumble not because the math is wrong but because ownership 
is unclear. Security teams feel responsible for reducing risk, yet the authority and 
responsibility to accept or transfer risk sits with the risk owner, usually someone 
outside of the Security org. When no one is accountable for acting on the numbers, 
risk quantification becomes a spectator sport. The results look interesting, but nothing 
changes.
Before building models, make decision rights explicit. Who decides, who 
implements, who monitors, and who pays the bill. Governance clarity is what turns 
quantification into management. Without it, the program stays stuck in analysis. With it, 
the organization starts improving decisions, not just measuring them.Chapter 18  CrQ in the Org

357How to avoid it:  Anchor CRQ to real business outcomes. Don’t call it a program at 
first. Call it a decision support capability or a forecasting service. Tie every model to a 
choice leadership already cares about: funding, insurance, budget allocation, or strategic 
risk appetite. Show how the results make existing processes easier, not obsolete. And 
build allies early, especially in Finance, Operations, and Legal, because they already 
understand trade-offs, materiality, and the power of numbers.
 Seeing the Whole Pattern
Most failed CRQ programs collapse because of impatience, isolation, or misaligned 
incentives. The successful ones do almost the opposite. They start small, stay connected, 
and grow through proof, not persuasion. They treat quantification as a shared language, 
not a crusade.
I’ve come to see these patterns as predictable, not personal. Every analyst, every 
team, every organization starts somewhere along this maturity curve. I’ve said 
throughout this entire book that the goal isn’t perfection; it’s progress. The real measure 
of success isn’t how many Monte Carlo simulations you’ve run. It’s whether your 
organization is making better, more transparent decisions than it did a year ago.
 How to Make CRQ Work Inside an Organization
If the first half of this chapter is about why CRQ programs fail, this half is about how they 
survive. Every successful program I’ve seen shared the same pattern. They didn’t start 
with a tool, a framework, or even a mandate. They started with a decision. Someone had 
to choose between options under uncertainty, and a model helped them do it better. 
That’s where it begins.
Quantitative risk programs thrive when they solve real problems for real people. The 
analyst isn’t trying to convert anyone to a new religion. They’re trying to make it easier 
for a decision-maker to say yes or no with confidence. An overview of this process is in 
Figure  18-3 .Chapter 18  CrQ in the Org

358
Figure 18-3. Steps to make a CRQ program succeed
 1. Start with a Single Decision
Find a decision that’s stuck: an investment, a controversial control, or a risk that 
keeps getting downgraded because “it hasn’t happened yet. ” These are goldmines for 
demonstrating value. When someone in your organization can’t get traction on a risk 
conversation, CRQ is often the missing language that unblocks it.
You don’t need a sweeping charter. You need one win. A single well-framed analysis 
that results in a better, faster, or more defensible decision will teach the organization 
more about CRQ than a dozen training sessions.Chapter 18  CrQ in the Org

359 2. Speak the Language of the Business
Most executives already think in probabilities, trade-offs, and financial outcomes, in 
their own way. They live in a world of forecasts, budgets, and market risk. The problem 
is not that they fail to understand uncertainty. It is that we often describe it in a language 
that does not translate. When we frame a risk in terms of threat actors, zero-days, or 
nation-state operations, they cannot connect it to business outcomes.
They know risk, but not our risk. Saying “There is a 20% chance we will lose more 
than $10 million this year” feels concrete and familiar. Saying “The threat landscape 
has evolved; Fancy Bear  and Stone Panda  are targeting peer companies… ” does not. 
When you express uncertainty in the financial terms the business already uses to weigh 
opportunity and cost, the conversation changes. CRQ stops sounding like security theory 
and starts sounding like decision support.
 3. Build Allies Before Infrastructure
Before you bring on a pricy CRQ vendor, find allies who can champion your work. 
Finance is often the best starting point because it already deals with uncertainty and 
expected value. Audit, compliance, and legal teams are natural partners, too, since they 
can directly connect their work to yours.
Bring them examples. Show them how a simple quantitative model can support 
choices they already face: insurance coverage, vendor risk, or capital allocation. When 
they start using your outputs in their own decks, you’ve succeeded.
 4. Integrate Gently with Existing Processes
Replacing a qualitative program overnight almost never works. Coexist for a while. 
Translate a few items in the risk register into quantitative form and show the contrast. 
When leadership starts using your quantified entries to make real decisions, others 
will want the same thing. Eventually, you can flip the register completely. By that time, 
nobody will call it a “transition. ” It will just feel like progress.
 5. Normalize Uncertainty
One of the quietest culture shifts a CRQ program brings is the idea that uncertainty 
isn’t failure. It’s honesty. People accustomed to heatmaps are used to pretending 
the world is certain enough to fit in red, yellow, and green boxes. CRQ asks them Chapter 18  CrQ in the Org

360to be transparent about what they don’t know. Over time, that shift changes the 
conversation from arguing over colors to discussing probability, tolerance, and trade-
offs. That’s a sign of maturity.
 6. Show Progress, Not Perfection
You can’t build a mature CRQ program in one quarter. What you can do is show that 
each quarter, your models get more calibrated, your data gets better, and your decisions 
start to lead to better outcomes. Visible improvement is what earns executive patience 
and funding. CRQ is iterative by nature. You don’t need to be perfect to be credible. You 
just need to be transparent, improving, and consistent.
When CRQ is done well, it stops being a security project and becomes part of how 
the business thinks. Risk quantification becomes less about models and more about 
shared reasoning. People start asking for the data before you bring it to them. That’s 
when you know it’s working.
 Keeping It Going
When a CRQ program finally clicks, it’s tempting to think the hard part is over. You’ve 
built credibility, solved real problems, and earned trust. But risk doesn’t hold still. The 
world keeps changing, and the math moves with it. Controls age. The business shifts. 
Threats evolve. Even the definition of “too much risk” can change after a new regulation 
or board directive.
Once CRQ becomes part of how your organization makes decisions, the next 
challenge is keeping it calibrated. A good program doesn’t just model today’s 
environment. It keeps its bearings as conditions shift around it. This is where ongoing 
monitoring matters, not in a dashboard sense but in a strategic one.
The following section outlines six quiet but powerful forces that move your risk 
estimates over time. Think of them as the hidden gears underneath every risk model. 
When they change, your analysis should too.Chapter 18  CrQ in the Org

361 The Six Levers That Quietly Change Your Risk
Back in 2011, I was a mid-level risk analyst at a regional bank. Each quarter, I refreshed 
our “existential technology risk” deck for the C-suite and board: classic red, yellow, green 
heatmaps. I turned reds to yellows, yellows to greens, and everyone applauded:
“Look at the ROI on our security spend. Risk keeps going down!”
The big logical fallacy we committed was treating controls as the only thing that 
moved risk. If we spent money, risk went down. That was the assumption. Anything else 
was unthinkable.
Something happened that entirely changed my thinking. Operation Payback occurred, 
which was a series of massive DDoS attacks against the US financial system. Suddenly, our 
exposure felt higher, but how do you show that with a traffic light? We had no way to reflect 
real-world spikes without cranking a color back up, undermining our own narrative.
That moment made something clear: controls are just one lever, and often not the 
biggest one. Most changes in risk come from forces far outside your walls.
Since then, I’ve seen six quiet but powerful levers reshape risk across industries 
and incident types. These shifts don’t always show up in your dashboards, but they 
absolutely move the math. Controls are only the first.
Let’s walk through all six and break down what each one does to the two things that 
matter most in risk. Figure  18-4  provides an overview, with detailed breakdowns following.
Figure 18-4. Overview of the six levers that quietly change risk
Below, arrows show where each lever usually nudges those numbers: ▲ = up, 
▼ = down, ↔ = no direct change, ◇ = could swing either way.Chapter 18  CrQ in the Org

362 1. Internal Security Posture and Control Effectiveness
This category is obvious because we all know that investments in controls (should) 
drive down risk, but consider the entire internal security posture when assessing or 
reassessing risk.
New Controls
Switching to passkeys, finally enforcing SSO, MFA on admin accounts, encryption, 
tokenization, etc. (frequency ▼, impact ▼) .
Control Failure or Decay/Configuration Drift
A TLS certificate expires, the “temporary” allow-all rule you added for troubleshooting 
never gets removed, or the nightly backup job has silently failed for weeks. Nothing 
outside changed, but weak points opened inside (frequency ▲, impact ▲).
Control Obsolescence As Threats Adapt
SMS codes were fine until SIM-swap kits became a click-to-buy service; an on-prem IDS 
can’t see into your encrypted traffic; SHA-1 signatures are now crackable on a laptop 
(frequency ▲, impact ▲).
Headcount and Skill Shifts
Your only cloud-security engineer leaves, and the backlog of misconfig alerts piles up (frequency ▲, impact ▲). Hire a seasoned DevSecOps lead, and those arrows 
reverse (frequency ▼, impact ▼).
Asset and Data Growth
You spin up dozens of new microservices, start logging user biometrics, or expose an 
API. More entry points and more valuable data (frequency ▲, impact ▲). On the other 
hand, the strategic removal/deletion/deduplication of sensitive data, tackling tech debt, 
and then risk moves (frequency ▼, impact ▼).
 2. Business and Operating Model Changes
M&A/Divestitures
Acquiring a fintech in Brazil brings unfamiliar tech stacks, inherited vulnerabilities, 
and new privacy laws like LGPD into scope (frequency ▲, impact ▲). Spinning off 
a legacy division can reduce surface area and regulatory complexity (frequency ▼, impact ▼).Chapter 18  CrQ in the Org

363Market Pivots
Launching a consumer mobile app or expanding into healthcare or education 
introduces highly regulated data, public-facing attack surface, and more determined 
threat actors (frequency  ▲, impact ▲).
Third-Party and Supply Chain Exposure
Every external dependency adds risk, whether it’s a vendor, an API, or an open source 
library. A new SaaS provider might have weak access controls. A payment or logistics 
API could be misconfigured or leak data through logs. An open source package may be 
maintained by a single volunteer and pulled into your environment without anyone 
noticing. You rarely control how these systems are secured, monitored, or updated, but 
their risk becomes yours (frequency ▲, impact ▲).
Macroeconomic Shifts: Inflation, Recession, and Currency Swings
Economic changes don’t always make attacks more likely (frequency ↔), but they often 
make them more expensive to handle (impact ▲). Inflation drives up the cost of cloud 
services, incident response, legal counsel, and regulatory penalties. During recessions, 
security budgets can get cut, slowing down hiring, delaying upgrades, or pausing key 
projects. That can create longer-term blind spots or gaps in coverage that attackers may 
eventually exploit, especially if teams are forced to do more with less.
 3. External Threat and Regulatory Landscape
Threat-Actor Capability Shifts
Attackers don’t just evolve; sometimes they leap ahead. Periodically, adversaries 
outpace defenses, yours and your vendors’ . We’ve seen technology change with evolving 
ransomware, deepfake voice scams, and AI-generated phishing kits. When offensive 
tools get cheaper, faster, and more effective overnight, it becomes harder to keep up 
(frequency ▲, impact ▲).
Geopolitical Volatility
Wars, sanctions, and political instability can disrupt trusted vendors, force reliance on 
unfamiliar or less secure suppliers, and expose your business to nation-state threats. 
Operating in sensitive regions or serving customers in politically tense areas increases 
the chance of being targeted, whether directly or as collateral. When incidents do 
happen, they often carry heavier legal, financial, and reputational consequences 
(frequency ▲, impact ▲).Chapter 18  CrQ in the Org

364Regulatory Shifts and Pressure
New laws, regulations, and guidance like GDPR, SEC breach disclosure rules, and DORA 
don’t necessarily make incidents more likely (frequency ↔), but they increase what it 
costs. One incident can now trigger multi-country investigations, fines, and reputational 
damage (impact ▲).
Non-traditional Adversaries and Information Misuse
Not every threat actor is a criminal or state-sponsored hacker. Competitors, researchers, 
analysts, journalists, or even social media influencers may legally (sometimes illegally) 
access exposed data, screenshots, or misconfigured assets. Some chase scoops; 
others chase clout or market edge. They may operate entirely within the law, but the 
reputational and strategic fallout they trigger can be severe. If your systems are too open, 
or your data too discoverable, you could be making it easy for someone to exploit your 
own transparency (frequency ▲, impact ▲).
 4. Incident and Near-Miss Learnings
Real events and close calls expose gaps in your assumptions. You might have believed 
an attack was unlikely or that the damage would be minor, but then something like 
the Colonial Pipeline ransomware incident shows how wrong that can be. Or maybe 
your own systems narrowly avoid failure from a threat you never even modeled. These 
situations often reveal that risk was underestimated, pushing both frequency and impact 
higher. Occasionally, a post-incident review shows the opposite: you were overprepared, 
and the risk can be revised down (frequency ▲ or ▼, impact ▲ or ▼).
 5. Improved Visibility
Visibility and Data Quality Improvements
Better tools and scanning often uncover risks you didn’t know were there. Finding 
an exposed S3 bucket, a forgotten VPN endpoint, or a misconfigured role means your 
environment wasn’t as locked down as you thought (frequency ▲, impact ▲).
Model Upgrade from Qualitative to Quantitative
Switching from a heatmap to a model like FAIR doesn’t change the actual risk, but 
it gives you a more accurate view. With better inputs and sharper methods, the way 
stakeholders perceive risk might go up or down or stay the same; it just depends on what 
the data shows (frequency ◇, impact ◇).Chapter 18  CrQ in the Org

365 6. Risk Appetite, Governance, and Insurance Terms
Changing Risk Appetite, Governance, and Insurance Terms
The threat landscape may stay the same, but your tolerance for loss can shift. A new 
board directive, regulatory pressure, or cyber insurance rider might lower the acceptable 
loss threshold from $10 million to $2 million. That doesn’t change the actual impact of 
an event, but it does change which risks are now considered material and require action. 
Likewise, if the business grows significantly, it may tolerate the same events without 
triggering a response (frequency ↔, impact actual = same, perceived ▲ or ▼).
Leadership and Governance Changes
A new CEO or board may bring a very different attitude toward risk. The organization 
might shift from risk averse to risk seeking, or the other way around. This doesn’t change 
the loss amount of any given event, but it shifts how risk is interpreted, prioritized, and 
whether a given loss is acceptable or not. You may need to reassess risks against a new 
benchmark (frequency ↔, impact actual = same, perceived ▲ or ▼).
 A Quick Check As You Reassess
If any of these levers have shifted since your last assessment, expect the math to move. 
Update the model and your assumptions before the headlines do it for you. The next 
time you revisit a scenario, ask these six questions:
• Have our controls aged, drifted, or become obsolete?
• Did the business itself morph: new products, new markets, new 
vendors?
• Have attackers leveled up, or has the legal/regulatory landscape 
changed?
• What did the last incident or near-miss teach us about our priors?
• Do we see the system more clearly today (telemetry, better models)?
• Did the definition of “too much risk” just change?
If even one answer is “yes, ” the math moved. That’s not a failure of the model; it’s 
proof the model is alive and working.Chapter 18  CrQ in the Org

366 Keeping CRQ Alive
Every CRQ program eventually reaches the point where the work feels stable. The 
models run smoothly, the results are trusted, and the conversations are healthy. 
However, that stability can be an illusion if you don’t treat your risk program as 
something that is constantly evolving. The forces underneath your analysis, the 
Six Levers, never stop moving. Controls drift. Businesses evolve. New laws appear. 
Leadership changes its definition of acceptable loss. If you are not watching those shifts, 
your models will start to lag behind reality.
That’s why the best CRQ programs behave more like living systems than static tools. 
They monitor, learn, and adapt. They invite disagreement instead of defending certainty. 
They treat a new data point, a near miss, or a regulatory change as a signal to revisit the 
data, not as an interruption to the process. When you reach that level, your organization 
stops seeing risk quantification as a project and starts seeing it as a habit of thought.
Every program moves through stages to get there. Early CRQ efforts often focus on 
building credibility and proving value. Mature programs shift from proving to improving, embedding quantification directly into business decisions. Table 18-1 shows some of the 
differences between early-stage and mature programs.
Table 18-1.  Early stage vs. mature risk programs
Characteristic Early-Stage Mature
Purpose reporting to auditors Supporting business decisions
Communication Color dashboards probabilistic narratives
Data Use Static snapshots Continuous feedback
Leadership View experimental integral to planning
If the Six Levers seem daunting, the solution is to build a simple but robust program 
of metrics that tracks them automatically. AI makes this possible in a way that was never realistic before. In the past, I could monitor a few of these changes manually each 
month. Now, with AI assistance, it is easy to automate much of that monitoring. You can 
flag changes in threat data, financial exposure, or business context without spending 
hours hunting through reports.Chapter 18  CrQ in the Org

367Leverage AI as much and as often as you can. Use it to summarize incidents, detect 
data drift, surface anomalies, and even write the first draft of your reassessment plan. AI 
will help you keep your program alive in another way, too. It removes the last practical 
excuse not to use CRQ. Executives will start demanding the clarity that quantitative 
models and automation can deliver. They will stop settling for colors when numbers are 
available.
Looking back, that was the difference between the program that failed and the 
one that worked. The first was built on conviction and speed. The second was built on 
relationships, patience, and curiosity. The successful program did not need to announce 
itself. It simply kept solving real problems, one decision at a time. Over time, those small 
wins added up to something much larger: a culture of reasoning about risk instead of 
reacting to it.
That is the real endgame of CRQ. Not a perfect model. Not a universal taxonomy. But 
a durable way of thinking that helps the organization face uncertainty with clarity. The 
tools will evolve. The data will change. New frameworks will appear. The discipline stays 
the same. Quantification is simply how you make that discipline visible.
When your models start to feel alive, when they respond to changes in the world the 
same way your organization does, you will know you have crossed the threshold. CRQ is no longer something you run. It’s part of the very culture of the organization.
 Chapter Summary
The Big Idea: Building a successful CRQ program is just as much about momentum and 
patience as it is about math. Programs thrive when they grow patiently, earn allies, and 
adapt to constant change.
Key Takeaways
• Most CRQ failures stem from culture, pacing, and incentives, not 
modeling errors.
• Start with one real decision that matters, show clear value, and build credibility through proof, not persuasion.
• Meet executives in the language they already speak: trade-offs, costs, and outcomes. Translate uncertainty into financial terms.Chapter 18  CrQ in the Org

368• Coexist with qualitative processes at first ; success will make the 
case for broader adoption.
• Treat uncertainty as information, not failure . Normalize it and use 
it to drive better questions.
• Maintain your program with simple, repeatable metrics  tied to the 
Six Levers of risk change.
• Use AI  to automate monitoring, detect data drift, and surface early 
warning signals. It removes the last excuse not to quantify.
• The real measure of maturity  is when CRQ becomes a habit of 
thought across the organization, not a standalone project.
Bottom Line
CRQ succeeds when it evolves with the organization it serves. Move slowly, build trust, 
automate where you can, and let quantification become the shared language of how 
your company thinks about uncertainty.
 What’s Coming Next
In Chapter  19, you’ll learn how to use CRQ to make better, faster, and more defensible 
decisions. You’ll see how to identify the decisions worth quantifying, frame them 
around real options and preferences, and guide trade-offs between cost, control, and 
risk tolerance. By the end, you’ll understand how CRQ transforms risk analysis from a 
reporting tool into a decision engine that shapes how the organization thinks and acts.Chapter 18  CrQ in the Org

