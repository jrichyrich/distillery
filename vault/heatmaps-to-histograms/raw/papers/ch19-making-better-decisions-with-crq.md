---
title: "Chapter 19: Making Better Decisions with CRQ"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 19
pages: 386-402
ingested: 2026-04-04
---

# Chapter 19: Making Better Decisions with CRQ

369
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_19CHAPTER 19
Making Better Decisions 
with CRQ
The quality of a decision cannot be judged by its outcome, but only by the 
process by which it was made.
—Ron Howard
Back in Chapter 4, we learned that the goal of quantification is not to be perfectly right. 
It is to be less wrong. Everything you have learned since then gives you permission 
to iterate. You have modeled data, blended evidence, and turned a big, messy ball of 
uncertainty about the future into something tangible: numbers, ranges, and curves.
This chapter shows you what all that effort was for.If you think back to Exercise 14-1, you used observable data to make a simple but 
familiar decision about what to wear for the weather. You looked outside, gathered evidence, updated your belief, and made a choice: jacket, raincoat, umbrella, or none 
of the above. That exercise was never about the weather. It was about the essence of risk 
analysis: using imperfect information to make better decisions under uncertainty.
That is the point of everything we have done. The risk management function exists 
for one reason: to help people choose wisely when the future is uncertain. To help them make the best choice with the information available, not to eliminate uncertainty 
entirely.
As with many of the lessons in this book, the way forward does not come from 
information security standards or frameworks. It comes from decision science, a field 
that studies what makes some choices better than others. When we center our analyses 
around decisions rather than data, we find clarity again.

370I have been in many moments where my team, or I, started to lose the plot with 
executives. The analysis became too abstract, too distant from the choice on the table. 
The fix was always the same: pause and return to the decision itself. What are we 
choosing between? What does success look like? What information do we already have?
Sometimes that decision is small, like how to allocate this quarter’s resources or 
what the engineering team should focus on next week. Other times it is existential, like 
how much to keep in cash reserves, whether to acquire a company, or how much risk to 
transfer through insurance.
The scale changes, but the principle never does. Risk analysis is just decision 
analysis by another name. The real purpose of decision analysis is clarity, because a good analysis removes noise so the decision-maker can see the choice more clearly. 
Every decision begins with a simple question: Why choose at all? Something in the 
environment has changed, or a constraint has appeared, that forces a choice. In that 
sense, risk management is really decision management. Our work only matters when it 
informs what people choose to do next.
 Clearing the Fog
Most organizations still approach risk analysis backward. They start with reports, dashboards, and frameworks rather than decisions. The result is a flood of information 
that looks like accountability but rarely changes outcomes. Risk assessments become 
artifacts instead of tools.
When you peel back the layers, you find that many programs are designed to display 
risk, not to reduce uncertainty. Heatmaps and red-yellow-green charts may impress 
in meetings, but they do not help anyone decide what to do. They create the illusion of 
control without providing a basis for action.
True risk analysis is about decision quality. It exists to clarify choices, not to create 
dashboards. Until a risk program centers on decision-making, all the math, tooling, and 
metrics in the world only make the fog thicker.
If most risk programs are built backward, what does it look like to get it right? That 
brings us to the true purpose of risk assessment.Chapter 19  Making Better De Cisions with CrQ

371 The True Purpose of Risk Assessment
Risk analysis is not a performance metric or a compliance ritual. Its purpose is to inform 
a choice under uncertainty. Every activity, such as identifying scenarios, estimating loss, 
and gathering data, should support a specific decision someone needs to make.
When an analysis fails to connect to a decision, it becomes busywork. Teams spend 
hours ranking vulnerabilities or scoring risks that never influence a plan, budget, or 
control.
The goal is not to eliminate uncertainty but to manage it. Quantitative methods make 
uncertainty discussable and measurable, allowing decision-makers to compare options 
on equal footing. To see how CRQ supports better choices, we first have to understand 
what a decision really is.
We have been taught that good risk management means reducing risk. In reality, 
the goal is optimization: balancing protection, performance, and opportunity so the 
organization gets the most value from every dollar.
CRQ enables that shift. Once you can measure exposure in financial terms, you can 
ask better questions: How much protection is enough? Where are we overspending for 
marginal benefit? Where could we safely take on more risk to gain efficiency?
That is what separates a mature program from a compliant one. Optimization, not 
reduction.
 What Makes a Decision?
Decision science pioneer Ron Howard describes a decision as a commitment to an 
irreversible allocation of resources made in pursuit of a goal (Howard & Abbas, 2016 ). It 
is a practical definition because it reminds us that the point of analysis is action.
Every meaningful risk analysis begins and ends with a decision. You can identify 
vulnerabilities, model probabilities, and create loss exceedance curves, but if there is no 
choice to be made, the exercise has no direction.
Decisions are the anchor of risk analysis because they give the work purpose. 
They tell you why you are modeling uncertainty and what the analysis is supposed 
to influence. The mistake many organizations make is to start assessing risk before 
understanding the decision the assessment is meant to support. That almost always 
leads to reports that look impressive but fail to change anything.Chapter 19  Making Better DeCisions with CrQ

372The structure of a good decision was formalized more than 50 years ago by Howard, 
who defined three ingredients that must be present before a real decision can exist: 
choice, preference, and information  (Howard & Abbas, 2016 ). You can picture 
them as the three corners of a triangle. The decision-maker uses logic  to evaluate the 
components, both together and individually.
Figure 19-1.  The components of a decision
 Choice
A decision only exists when more than one course of action is possible. “Should we 
migrate to the cloud or stay on-premises?” is a decision. “We are migrating to the cloud; 
what are the risks?” is not.
Before you start modeling, identify the real options on the table. Sometimes this 
exercise exposes that there is no choice at all; someone has already decided, and what 
they are calling a “risk assessment” is really a request for validation. When that happens, 
redirect the conversation toward decision quality: If the direction is fixed, what variables 
can we still influence?  That keeps the work relevant.Chapter 19  Making Better De Cisions with C rQ

373 Preference
Even with options, a decision is impossible without a sense of what outcome matters 
most. Preferences express what the decision-maker values, such as security control 
strength, cost savings, speed to market, regulatory compliance, or a mix of them. Before 
you compare alternatives, you need clarity on the objective the decision is meant to 
satisfy. Without a clear objective, preferences drift, and the analysis loses direction. In 
practice, that means clarifying objectives before defining the options. Only then can you 
compare alternatives in a structured way.
Ask explicitly: What does success look like? In practice, that question uncovers hidden 
motives and trade-offs. One stakeholder might prefer resilience over savings; another 
might prefer convenience over resilience. Understanding those priorities determines 
how you scope the analysis and what metrics matter. CRQ adds clarity by quantifying 
those trade-offs instead of treating them as abstract goals.
 Information
The third ingredient is information: the evidence available to compare options. This is where risk analysis earns its keep. The job is not to predict perfectly but to make the 
information component strong enough that choices and preferences can be weighed 
rationally.
Information can come from internal data, external benchmarks, or subject matter 
expertise. The question is not Do we have perfect data? but Do we have enough 
information to make this choice better than guessing? When you reach that threshold, it is 
time to model.
 The Decision Check
When you combine these three elements, choice, preference, and information, now  you 
have a real  decision. If any piece is missing, you do not. You have a meeting agenda item 
disguised as a risk assessment.Chapter 19  Making Better De Cisions with CrQ

374Before starting any CRQ project, pause and test for the presence of each element:
 1. What are the actual options?
If there is only one, it is an implementation plan, not a decision.
 2. What outcome matters most?
If the stakeholders cannot answer, the analysis will drift.
 3. What information already exists?
If a data gap exists that prevents you from moving forward, focus 
first on evidence gathering, not modeling.
If you cannot answer all three, do not begin the analysis yet. Clarify the decision first. 
This ten-minute exercise saves weeks of unfocused modeling later.
Once you know the three ingredients of a real decision: choice, preference, and 
information, it is easy to spot when any of them is missing. What is harder is knowing what to do next.
Sometimes the correct answer is not to push forward with a risk analysis at all, but to 
pause and ask a different question.
 Alternatives to the Risk Assessment
It may seem counterintuitive coming from a quantitative risk analyst, but quantitative risk analysis is not always the most appropriate tool for making security decisions. 
When someone asks me to conduct a risk analysis, the first thing I do is ensure it’s 
the right fit for the question at hand. Over time, I’ve learned that sometimes the most 
helpful thing we can do is pause and consider whether another method would serve 
better. Quantitative risk analysis is powerful, but it’s not the only way to make a sound, 
defensible decision.
Here are a few examples of analyses in Table 19-1 I’ve been asked to perform and 
how I’ve redirected the request.Chapter 19  Making Better De Cisions with CrQ

375Table 19-1.  Alternatives to risk analysis
If You Are Asking For… What You May Need Instead
Document a decision already made Decision log
Could this threat group break in? threat modeling or red team
what is the impact if a system goes down? Business impact analysis
what happens if ransomware hits us? tabletop exercise
which vulnerabilities should we prioritize? Vulnerability management and threat intelligence
are we compliant with regulation X? gap assessment or audit
prove the program is effective Metrics and kpis
where are we most exposed? attack surface mapping
Compare vendors third-party risk management
Forecast budget needs scenario planning or financial modeling
help us choose between two strategies Decision matrix or multi-criteria decision analysis
where are our process weaknesses? swot  or root cause analysis
Justify an initiative to executives Business case
estimate the cost of an incident after the fact post-incident review
show how we compare to peers Benchmarking
These tools are not dead ends. They are on-ramps. A tabletop may surface 
uncertainty about the probability and magnitude of ransomware losses. Scenario 
planning may expose unclear alternatives or competing preferences. A gap assessment 
may highlight trade-offs between risk reduction and business friction.
Each of these is an opportunity to turn the conversation into a quantitative risk 
analysis once the uncertainty is clear and the decision is tied to objectives.
The real payoff is cooperation. Working with continuity teams on a business impact 
analysis, with compliance on a gap assessment, or with finance on scenario modeling creates shared language. It shows that security is not a critic on the sidelines but a 
partner helping the business connect the dots. That is how we expand influence and 
make risk analysis something the whole organization values.Chapter 19  Making Better De Cisions with CrQ

376Once you have ruled out the wrong tools, you are ready to use the right one. When 
the problem is tied to a real decision, when uncertainty matters, and when information 
can be improved enough to guide that decision, that is where quantitative risk analysis 
shines. The next section explores how CRQ supports real-world choices, helping teams 
allocate resources, justify investments, and make confident, defensible decisions when 
the future is uncertain.
 Use Cases for Quantitative Risk
One of the most exciting things about cyber risk quantification is the range of new use cases it unlocks for better decision-making. While most people think of it as just a way to 
“put numbers on risk, ” it opens up entirely new ways to guide strategy, investments, and 
operations.
Figure 19-2.  Use cases for quantitative risk
 Operational Decision-Making
 Risk Ranking and Prioritization
The most apparent and foundational use case is risk ranking. This means taking a portfolio of risks (whether threats, vulnerabilities, or projects) and sorting them by 
probable risk. It helps your team prioritize which risks to remediate first.Chapter 19  Making Better De Cisions with CrQ

377Yes, qualitative risk analysis also does this, but only in broad buckets: high, medium, 
and low or red, yellow, and green. When you have a list of 100 risks, this type of 
categorization just isn’t enough. In fact, it’s impossible. Every “high” or “red” risk gives 
you exactly one data point to compare against other risks, which flattens out important 
differences.
Quantitative methods offer far more granularity and nuance. When you work with 
ranges instead of single ratings, you can see the complete picture of each risk. A risk that 
could happen once per year could warrant a very different response than something 
that happens once every 20 years, even if both end up with similar overall loss exposure 
numbers. By enabling you to pull apart these nuances, you can have much richer 
conversations about what to do about risk and which controls might deliver the most 
significant return.
Even better, quantitative methods let you test those controls in hypothetical 
scenarios before you commit any resources.
 Identifying and Prioritizing Control Gaps
After running several quantitative assessments across different domains or asset classes, 
you can start to see patterns where some risks are well-controlled while others need 
attention. While qualitative methods can identify control gaps, quantitative analysis 
helps you prioritize them by actual business impact.
Quantitative risk analysis can highlight where your controls are weak, redundant, or 
overbuilt. It helps you identify inefficient areas where you’re spending too much for too 
little risk reduction and where you might be exposed without realizing it. This makes it 
easier to rationalize your control stack based on data rather than gut feel.
 Investment and Budget Decisions
 Adding or Removing Controls
This is my favorite use case because it’s where quantification shows its value. It enables 
unambiguous, defensible decisions about which security controls are worth the cost.
You begin by measuring the baseline risk (where things stand today). Then you 
create a forecasted, hypothetical model that reflects the addition or removal of a control. 
This might include a new tool, a vendor, added headcount, or a new security project. 
Comparing the two scenarios shows you the projected risk reduction and supports 
smarter, more informed investment decisions.Chapter 19  Making Better DeCisions with CrQ

378Every treatment decision is a trade-off among cost, residual risk, and time. CRQ 
makes those trade-offs visible rather than gut calls. A mitigation that saves $2M in 
expected loss but costs $3M to deploy is mathematically worse than doing nothing; a 
cheaper control that trims $500K of exposure for $100K in spend is a clear win.
When leaders see the trade-offs quantified, the conversation changes from “What 
should we do?” to “Which option fits our appetite and resources best?”
 Project ROI and Budget Justification
Once you have modeled the “before” and “after” risk scenarios, you can calculate the return on investment. If you know the cost of the control or project, you can estimate the 
value of the risk reduction it delivers.
This transforms budget conversations from “we need this for security” to “this 
investment will reduce our expected annual losses by $X, which makes it worth the $Y 
cost. ” You’re speaking in business terms that finance and operations teams understand, 
making it much easier to justify security spending and align road maps to measurable 
outcomes. It also gives leadership teams the rational basis for making a trade-off 
between spending money here on security vs. other areas where limited resources might 
provide higher rates of return.
 Strategic Decision-Making
 Insurance Analysis
This use case is always popular with executives. A good quantitative risk model helps determine whether certain risks should be insured and, if so, how much coverage is 
appropriate.
The focus here is on risks that either pose an existential threat to the organization or 
that exceed what your company can comfortably absorb financially. By assessing top-tier 
risks, you can have structured conversations about premiums, policy limits, deductibles, 
and whether you’re over- or under-insured.
 Third-Party Risk and M&A
Vendor onboarding, mergers, and acquisitions can all rapidly alter your risk landscape, 
sometimes overnight. That makes them ideal candidates for quick, quantitative 
assessments.Chapter 19  Making Better De Cisions with CrQ

379By modeling how the addition of a third party or acquisition target changes your risk 
posture, you give executives something they value: the ability to move quickly without 
flying blind. Even lightweight assessments in this category can be highly impactful.
 Emerging Risk Analysis
Every organization faces new threats and regulatory changes that didn’t exist before. 
How do you evaluate the risk of new AI regulations changing how you can process 
customer data? What about novel attack vectors that exploit technologies your company 
just adopted?
Quantitative analysis provides a framework for evaluating unfamiliar risks using data 
rather than speculation. You can model different scenarios based on similar historical 
precedents, even when the specific threat is new. Sometimes the result is “Yes, this 
is a big deal, and we need to act. ” Other times, it’s “No, based on what we know, this 
isn’t something to worry about. ” Either way, you’re giving decision-makers clarity on 
unfamiliar territory.
 Exotic and Low-Probability/High-Impact Risks
Then, there are the oddball scenarios that keep your CEO or board members awake at 
night. What if a solar flare disrupts global satellite communications for weeks? What 
if a coordinated attack on submarine internet cables cuts off entire regions? What if 
quantum computing suddenly makes current encryption obsolete overnight? These are 
plausible and probable scenarios that often seem too unlikely to plan for but could pose 
an existential risk to the organization if they occur.
Quantitative analysis helps you put these exotic risks in perspective. The risk analyst 
can help the CEO or the board members sleep easily at night if the risk is not plausible. 
On the other hand, it may reveal soft spots in the organization’s resilience plans. The 
analysis opens up further conversations around contingency preparations, insurance 
types, and financial reserves. These analyses are great conversation starters around 
existential risk. Sometimes these nightmare scenarios are nothing to worry about, more 
manageable than they appear, and others genuinely deserve attention.Chapter 19  Making Better DeCisions with CrQ

380 Risk Appetite and Board-Level Reporting
Another important use case is aligning your risk portfolio with the organizational risk 
tolerance. Boards and executives are often asked to weigh in on risk decisions without a 
clear view of how close the company is to its stated risk limits.
Quantitative models help clarify that picture. Instead of showing executives color-
coded heatmaps, you can show them how much risk the company is carrying compared to 
what they said they’re comfortable with. This leads to more productive board conversations 
because everyone is reacting to the same numbers, not just subjective color categories.
 Fast vs. Focused vs. Deep-Dive Assessments
Not every decision deserves a full-court press of an analysis. Some just need a quick, 
credible answer; others are big enough to justify days or weeks of analysis. The art of risk 
quantification is knowing which is which.
When I am short on time, have an impatient executive, or the question is narrow, 
I do what I call a fast assessment . One scenario, a few reasonable inputs, and a quick 
SME gut-check. Think of it like checking the weather before leaving the house. You are 
not trying to model the entire atmosphere; you just need to know if you should bring 
an umbrella. Examples include deciding which of two top risks to brief to leadership or 
estimating whether ransomware or data theft is more likely this quarter.
When a decision will influence budgets or priorities, I shift to a focused assessment . 
These take a few days instead of a few hours. I blend external data with internal 
evidence, test a few what-ifs, and see how sensitive the results are to key assumptions. 
This level is ideal for validating insurance limits, comparing control investments, or 
testing remediation plans.
Then there are deep dives , the long hikes of risk analysis. These are for high-stakes, 
strategic questions, like assessing cloud migration risk, M&A due diligence, or prolonged 
business disruption. Here, you use every tool available: full blended data, decomposed 
loss forms, and multiple sensitivity analyses. It takes longer, but it gives decision-makers 
confidence in big calls.
The goal is not to analyze everything equally. It is to right-size the work so that 
effort matches impact. Fast assessments keep the program nimble; deep dives build 
confidence when the decisions really matter. An overview of the three types can be found 
in Table  19-2 .Chapter 19  Making Better DeCisions with CrQ

381Table 19-2.  Fast vs. focused vs. deep-dive assessments
Type When to Use Effort Example
Fast Quick, tactical choices hours Compare top risks, brief leadership
Focused Budget or priority decisions Days Validate insurance, test control benefit
Deep-Dive strategic or enterprise-level calls weeks Cloud migration, M& a diligence, 
existential threats
 Assessment Granularity
There is no “right” or “wrong” level of granularity in a risk assessment. You simply need 
to right-size the work to the decision at hand. Every level, from broad and strategic to 
narrow and technical, answers a different question for a different audience.
You can start at the top and work your way down. A broad data breach assessment 
that includes all data types, systems, and threat actors is a perfectly legitimate place to 
begin. It helps you quantify the organization’s top risks—the ones the board, executive 
team, and cyber-insurance underwriters care about. It answers the question, “How bad 
could a data breach be for us?”
From there, you can narrow the focus to data breach of customer PII stored in 
AWS . Now you’re answering a different question: “Where does our exposure live?” These 
mid-level analyses are valuable to CISOs, CTOs, and security leadership. They connect directly to budgeting, prioritization, and control investment. Run a few of these for different data sets or systems, and you start to see the full shape of your organization’s 
breach exposure.
Then you can zoom in even further, to data breach of customer PII from a 
cybercriminal group exploiting SQL injection in AWS S3. That’s a highly specific, 
technical question, the kind security engineers and architects need to answer to guide 
daily work. It’s not for the board, and that’s the point. Different audiences, different 
questions, same discipline.
Each level has value. They are not in competition; they’re nested, as illustrated in 
Table 19-3. The broad view informs strategy. The middle connects strategy to operations. 
The deep view drives technical improvement. When choosing granularity, focus on its 
relevance. Always choose the highest level of abstraction needed to decide.Chapter 19  Making Better De Cisions with CrQ

382Table 19-3.  Levels of risk granularity
Level Example Assessment Primary Audience Decision Focus
Strategic Data breach across all data 
types, systems, and threat 
actorsBoard, executives, 
insurersUnderstand top enterprise risks and overall exposure
Operational
Data breach of customer pii 
stored in awsCiso, Cto, security, 
and legal leadershipprioritize controls, plan 
investments, allocate resources
Tactical Data breach of customer pii 
via sQL injection in a ws  s 3engineering, app s ec, 
red/blue teamstest defenses,  guide mitigation, 
inform technical design
 Results into Action: Risk Treatment Options
Quantifying risk is only half the work. The next step involves using the results to shape 
decisions. Every analysis ends with a choice, and that choice usually falls into one of five 
treatment paths. None of them is inherently right or wrong. Each represents a different 
way of managing uncertainty and aligning with the organization’s priorities and appetite 
for risk. In most risk frameworks, this is called risk treatment, in other words, what are we 
going to do about this risk?
The first option is acceptance. Sometimes the modeled loss falls within tolerance, 
or the cost of further reduction simply outweighs the benefit. In those cases, acceptance 
is not neglect; it is an informed decision. The exposure is documented, monitored, and 
made visible. Quantification helps articulate exactly how much risk is being accepted 
rather than letting that decision live in the margins as an adjective.
The second option is mitigation, which focuses on reducing either the likelihood 
or the impact of a loss event. This is where most security investments live. Controls, processes, and training all serve as mitigation tools. Quantification helps determine 
when a control is worth its cost and how much it changes the expected loss. It turns 
mitigation from a checklist activity into an investment decision.
A third option is transfer, which shifts some or all of the financial impact to another 
party through insurance or contracts. Transfer is useful when losses are plausible but 
infrequent, the kind of events that can be insured rather than entirely prevented. CRQ 
helps by quantifying what coverage levels make sense and what portion of risk the 
organization should retain.Chapter 19  Making Better De Cisions with CrQ

383You can also avoid risk altogether by changing or discontinuing the activity 
that creates it. Avoidance is rare in practice but powerful when the exposure clearly 
outweighs the value of the underlying business activity. Quantification helps clarify that 
trade-off by showing what is being gained or lost.
Finally, there is the option to increase exposure intentionally. This may seem 
counterintuitive, but sometimes taking on more risk enables greater agility, efficiency, 
or opportunity. Quantification helps identify situations where additional exposure is a 
rational choice rather than a gamble.
 WAIT, WHAT? INCREASE RISK?
Yes! sometimes that is the right answer.
risk management is not about driving exposure to zero. Mature programs evolve from box-  
checking exercises into living, decision-optimizing systems that help the organization allocate 
resources where they matter most.
increasing risk can be a rational, data-driven choice when the trade-off creates greater value 
elsewhere. examples include
• Outsourcing a function that raises outage or breach exposure but saves 
millions in operating cost
• Removing or relaxing controls that frustrate customers or drive cancellations
• Taking on technical debt to move faster toward a market opportunity
Both the ISO 31000  framework ( international organization for standardization, 2018) and Risk 
Analysis: A Quantitative Guide by David Vose (2008) recognize increase risk as a legitimate 
treatment option when it is done consciously and transparently.
incorporating risk analyses that capture real business trade-offs shows that your program is 
not just about reducing risk but about enabling better decisions. it demonstrates the ability 
to weigh options, quantify consequences, and make choices that move the business forward. 
an added benefit is cultural: your security team stops being seen as the “team of no,” a 
real business blocker, and becomes the team that says, “ sure, let’s do it safely and with 
eyes open.”Chapter 19  Making Better De Cisions with CrQ

384Our goal as security professionals is not to eliminate risk. Our goal is to make every 
decision deliberate, proportional, and transparent. By expressing each treatment option 
in measurable terms—how much risk remains, what it costs to change it, and what 
benefit the change delivers—you move from intuition to evidence. Each choice becomes 
an intentional expression of strategy rather than a reaction to fear.
 What to Present to Executives: The Decision 
Support Package
A risk analysis becomes useful only when the decision-makers can act on it. That means 
giving them a decision support package that answers four questions:
 1. What decision is on the table?
Make the choice clear and list the real alternatives.
 2. What changes across the options?
Show the baseline and how each option shifts the probable loss, using ranges, not points.
 3. What is the trade-off?
Lay out the cost, benefit, and exposure in financial terms so leaders can compare options fairly.
 4. What do you recommend and why?
Offer a clear point of view that ties back to the model and the organization’s objectives. Don’t be afraid to be opinionated.
You don’t need to take them through every step you took. Give them what they need 
to make a clear, confident call.
 Chapter Summary
The Big Idea: Every credible risk assessment exists to support a decision. CRQ delivers value when it helps clarify choices, express preferences, and provide just enough 
information to act with confidence.Chapter 19  Making Better De Cisions with CrQ

385Key Takeaways
• Decisions give risk analysis purpose:  A risk assessment without a 
decision is motion without direction.
• Every decision needs three ingredients:  A choice to make, a 
preference among outcomes, and information to guide that choice.
• Start with the decision check:  Use it before every CRQ to confirm 
what question you are really answering.
• Turn awareness into trade-offs:  CRQ aligns security actions with 
business objectives.
• Scale your effort to the stakes:  Right-size your analysis to match the 
decision’s impact.
Strive for better, not perfect. The goal is progress toward better decisions, not 
flawless models.
Bottom Line:  The purpose of CRQ is to enable clear, defensible decisions. A good 
analysis tells leaders what their options are, how those options differ, and what each one 
costs in risk terms. When done well, CRQ shifts the conversation from “what’s our risk?” 
to “which trade-off are we choosing, and why?”
 What’s Coming Next
You have now reached the point where method becomes mindset. The final chapter 
looks beyond models and simulations to the future of our profession: how AI, 
automation, and human judgment will shape the next generation of risk analysts. You 
will see how the skills you have built here extend far beyond quantification itself and into 
the larger purpose of the work: protecting not just data, but reasoning.
References
Howard, R. A., & Abbas, A. E. (2016). Foundations of decision analysis (1st ed.). Pearson 
Education.
International Organization for Standardization. (2018). ISO 31000:2018 Risk 
management – Guidelines.  ISO.
Vose, D. (2008). Risk Analysis: A Quantitative Guide  (3rd ed.). John Wiley & Sons.Chapter 19  Making Better DeCisions with CrQ

