---
title: "Chapter 13: Your Secret Weapon: Subject Matter Experts"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 13
pages: 259-286
ingested: 2026-04-04
---

# Chapter 13: Your Secret Weapon: Subject Matter Experts

237
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_13CHAPTER 13
Your Secret Weapon: 
Subject Matter Experts
It’s tough to make predictions, especially about the future.
—Yogi Berra
Earlier in my career, I worked on a risk assessment focusing on customer data systems. 
The external data appeared typical for the sector, with low breach frequency and 
standard impact ranges. The internal data was even more reassuring. Their customer 
database had zero reported incidents in five years, good audit results, and all the right 
controls on paper.
I was about to quickly wrap this up and move on to bigger and badder risk scenarios 
when I scheduled a quick validation session with our senior database administrator. I 
expected a 15-minute confirmation that would wrap up the assessment.
Instead, she frowned when I shared the findings. “Zero incidents?” she asked. “That’s 
not right. ”
It turns out the database system had terrible logging. Three times in the past 18 
months, they’d discovered unauthorized access attempts that bypassed their monitoring entirely. None of it was included in the official incident reports because “nothing was 
actually taken, ” and the attempts were detected through manual review, not automated 
detection.
That 15-minute conversation completely flipped my risk assessment. What appeared 
to be a well-controlled environment was, in reality, a significant issue with multiple 
unaddressed exposures. The historical data wasn’t lying; it was just a victim of a horrible 
coverage rate and poor incident reporting processes.

238The SME provided the forward-looking context that saved my analysis. Without her 
insight, I would have delivered a dangerously inaccurate assessment to leadership. To 
recover, I led a formal elicitation workshop with her team to create realistic and credible 
frequency numbers. I also added questions about coverage rates of controls to my risk 
assessment toolbox to every single risk assessment after, as discussed in Chapter 12.
This is why subject matter experts  are the third essential source of risk data. These 
are the individuals within your organization who possess in-depth knowledge of the 
systems, processes, threats, or consequences relevant to a specific risk scenario. They’re 
not just security professionals; they might be engineers, IT leads, legal counsel, product 
managers, or business unit leaders. There are people whose experience touches a 
dimension of the risk you’re analyzing.
This is where we move from the past  to the future . As Shakespeare said, “ Past is 
prologue , ” and that’s a good way to think about both external and internal data. They are 
records of what has already happened. They don’t predict the future directly. They give 
us a foundation, but not a forecast.
Always remember that risk analysis is a forecast . Risk analysis is about what might 
happen in the next year, not what already happened last year. So how do we turn past 
into prologue? That’s the role of subject matter experts.
SMEs help us look forward. While traditional forecasting methods like time series 
analysis work well on stable historical data, they sometimes don’t tell the full picture 
in technology risk, where attacker tactics, control effectiveness, and organizational 
priorities evolve quickly.
Think of your risk scenario  as both a road map and a set of guardrails. You’re not 
looking for one person who can inform every aspect of the scenario from start to finish. 
Instead, you’ll consult multiple experts who each provide insight into a piece of the 
puzzle: frequency, exposure, impact, or control performance.
By the time you engage your SMEs, you’ve already grounded the scenario. You have 
external base rates  (Chapter 11) that show what tends to happen across the industry 
and among your peers. You’ve paired that with internal operational data  (Chapter 12) 
that reveals what has happened within your organization. Now you’re handing them that 
context and asking for a forward-looking, 12-month forecast:
• “Here’s what tends to happen in our industry, and here’s what’s 
happened to us. Does this scenario still feel realistic for our 
environment?”Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

239• “Do we have any controls, security projects, or initiatives in flight that 
could reduce the frequency or magnitude of this risk?”
• Examples : New MFA rollout, EDR deployment, security 
awareness training, improved monitoring
• “ Are there any business changes or emerging conditions that could 
increase our exposure?”
• Examples : Mergers and acquisitions, new cloud migrations, 
planned system upgrades, expanding to new markets, control 
budget cuts, degraded or failing controls, newly identified 
sophisticated threat actor groups targeting our sector
• “Given all of this context, what’s your estimated range for [frequency/
magnitude] over the next 12 months?”
This structured approach transforms subjective judgment into defensible analysis. 
Expert elicitation , a formal discipline for synthesizing expert judgments when other 
forms of data are unreliable or insufficient, is well established in domains such as 
nuclear safety, structural engineering, and environmental risk assessment (Cooke, 
Experts in Uncertainty , 1991; see also Cooke & Goossens, 2008 )
Some in cybersecurity dismiss SME input as “garbage in, garbage out. ” But that 
criticism misunderstands how judgment works. The issue isn’t that SMEs are subjective; 
it’s whether their subjectivity is calibrated, structured, and challenged . We’ll go deeper 
into how to do that later in this chapter.
For now, simply know that when used effectively, SMEs provide the final, forward-  
looking component in a defensible risk model. They help you connect the dots between 
what has happened and what’s likely to happen next.
 Experts Are Not a Monolith
The “garbage in, garbage out” objection assumes that all SMEs are the same and provide 
poor quality estimations. Subject matter experts are not  all the same. They fall along a 
spectrum of usefulness, reliability, and structure. Table  13-1  and Figure  13-1  provide a 
framework and overview for considering the different types of SME judgment, how to 
elicit and interpret their input, and how to enhance it when necessary.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

240 The Five Types of SME Input
Table 13-1.  The five types of SME input, examples, and how to uplevel
Type Definition Example When to Use How to Improve
1. Unaided 
Guessraw, unstructured 
opinion with 
no evidence 
or expertise 
necessarily involved“I’d say ransomware risk is high right now. 
just a feeling.”early ideation, 
scenario brainstormingDon’t use as 
final input. probe 
for reasoning or 
redirect toward aided estimation.
2. Aided 
Estimation opinion supported 
by data, experience, or domain 
knowledge“our threat intel shows 
increased activity in 
our sector. I’d estimate 
higher-than-normal 
ransomware risk this 
quarter.”Low-stakes 
models, rough sizingask for range 
estimates and reasoning behind 
the number.
3. Calibrated 
ExpertDomain expert with training 
or experience 
in expressing uncertainty as 
ranges“Likelihood of 
successful phishing in 
the next year: 15% to 
35%, typical around 25%.”Model inputs (e.g., 
FaIr)requires ongoing 
practice to maintain calibration. Consider 
pairing with other 
experts, though 
this may introduce 
groupthink risks.
4. Expert AggregationStructured combination of 
judgment from 
multiple domain 
experts“Delphi group consensus 
after three rounds: 
20–40% chance, typical 
around 30% chance of 
ransomware this year, 
based on known control 
gaps.”high-importance 
models, scenario 
validation, when 
individual expert 
bias is a concernuse structured 
methods like Delphi. Works best with 5+ 
experts and multiple 
rounds.
(continued)Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

241Note  this classification framework is informed by principles from structured 
expert judgment, calibration theory, and forecasting research, particularly 
Superforecasting  (tetlock & Gardner , 2015), Cooke’s Method (Cooke, 1991), 
and the Delphi technique ( rowe & Wright, 1999), but the specific categorization 
and terminology used here are my own, designed for practical application in cybersecurity risk programs.
Figure 13-1.  Overview of the types of subject matter experts
• Moving up isn’t automatic: While you can add structure to improve 
SME input, true calibration requires ongoing practice and feedback 
loops that are difficult to maintain in most organizations.
• Higher isn’t always better: A single well-calibrated expert (Type 3)  
may outperform a poorly structured group (Type 4) if the group 
suffers from groupthink or anchoring.Type Definition Example When to Use How to Improve
5. Prediction MarketForecasting the market where 
participants buy and 
sell shares based 
on event outcomes“Internal market 
indicates 12% 
probability of insider 
incident in Q4.”Strategic forecasting
rarely implemented 
due to infrastructure 
needs and cultural 
barriers. requires 
critical mass and careful design.Table 13-1.  (continued)Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

242• Prediction markets are rare : While theoretically powerful, internal 
prediction markets for cyber risk are uncommon in practice due to 
cultural, technical, and participation challenges. For those interested 
in the concept, see Good Judgment Open (gjopen.com).
 Expert Calibration and Why Cyber Risk Is Different
Subject matter experts can often outperform data when they have the full picture: 
technical knowledge, lived experience, and context that data alone can’t provide. 
Research shows that experts produce highly accurate predictions when they receive 
constant feedback and face consequences for being wrong. Meteorologists compare 
their forecasts to actual weather daily. Bookmakers lose money on bad odds. Card 
players lose games. This feedback loop, combined with real consequences, builds 
calibration: when your stated probabilities match actual frequencies over time (Tetlock 
& Gardner, 2015 ; Murphy & Winkler, 1984 ).
We lack these feedback loops in cyber risk, as illustrated in Figure  13-2 . We might 
estimate ransomware likelihood and never see an event. Major cyber incidents are 
actually rare, despite headlines. At the individual level, feedback is too slow or infrequent 
to build natural calibration. Some analysts go entire careers without experiencing a 
major incident they’ve modeled.
Figure 13-2. Constant feedback loops can result in natural calibrationChapter 13  Your SeCret Weapon: SubjeCt Matter expertS

243The feedback loop can be simulated through specially crafted trivia exercises. 
Participants aren’t graded on getting answers right, but on accurately estimating their 
confidence. Done regularly with feedback, this builds calibration (Hubbard, 2014). Some 
people are naturally calibrated or maintain it through hobbies like fantasy football or 
poker. For most of us, it requires discipline.
The challenge is that Calibration requires ongoing individual discipline and 
organizational commitment that most can’t sustain.
 RUNNING A FULL CALIBRATION WORKSHOP
how to run a full calibration workshop and ongoing exercises to keep people calibrated is 
outside the scope of this book. If you are interested in doing this, an in-depth overview can 
be found in How to Measure Anything in Cybersecurity Risk  by Douglas hubbard and richard 
Seiersen. a dditionally, h ubbard offers virtual calibration training that risk analysts and SM e s 
can take at www.hubbardresearch.com.
 Three Practical Strategies for Working 
with Uncalibrated Experts
Ideally, we’d calibrate all our SMEs through ongoing training and practice. However, throughout my entire career, I’ve conducted only a handful of full calibration workshops. 
They work brilliantly in the moment, but people leave the company, fall out of practice, 
or simply don’t have time for regular calibration exercises.
There is some good news, however. You don’t need perfectly calibrated experts to get 
defensible estimates. You just need structure. Here are three career-tested strategies that 
produce reliable SME input without requiring formal calibration training.
 Strategy 1: Ask Multiple Experts
Each SME brings their own worldview, biases, expertise, and blind spots. By gathering estimates from multiple experts and aggregating them systematically, individual errors 
tend to cancel each other out, while the signal strengthens.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

244Why this works:  Groups of forecasters often outperform individuals. Even when no 
single person gets it right, the mathematical average or median frequently lands closer to 
reality.
Practical Guidance
• Minimum viable:  Two experts with direct experience (enough 
to start)
• Better:  Two to four experts with different perspectives (technical + 
operational + business)
• Optimal:  Five to seven experts with systematic aggregation
Covered in detail: “ Aggregating Expert Opinion” section later in this chapter
 Strategy 2: Structure the Elicitation Process
You can’t easily change how people think about probability, but you can change how 
you ask questions. Structured methods of eliciting expert opinion in interview settings, 
like the Delphi technique, prevent common bias traps: anchoring, groupthink, and 
dominant voices drowning out minority opinions.
Why this works:  The structure does the heavy lifting. Private estimates before group 
discussion, systematic revelation of ranges, and documented rationale transform gut 
feelings into defensible analysis.
Practical Guidance
• Always ask for ranges (P5, P50, P95), never point estimates.
• Collect independent estimates before group discussion.
• Capture the reasoning behind every number.
Covered in detail: “Mini-Delphi Method” section later in this chapter
 Strategy 3: Prime Them Quickly
A ten-minute calibration exercise before elicitation gets experts thinking 
probabilistically. It’s not perfect calibration, but it dramatically improves estimate quality 
by teaching under- and overconfidence and teaching the difference between “best 
guess” and “confidence interval. ”Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

245Why this works:  Most people give ranges that are too narrow because they confuse 
“my best guess plus/minus a little” with “90% confidence interval. ” A quick warm-up 
resets expectations and makes them comfortable with wider, more realistic ranges.
Practical Guidance
• Takes only ten minutes, no formal training required.
• Use two to three trivia questions to teach confidence.
• Focus on ranges, not right answers.
• Do this immediately before gathering estimates.
Covered in detail: “The Ten-Minute Calibration Primer” section below
 The Ten-Minute Calibration Primer
This quick exercise primes SMEs to think probabilistically and recognize their own 
overconfidence. It takes ten minutes, requires no formal training, and can be done 
informally right before you elicit forecasts. Even the saltiest systems engineer shouldn’t 
balk at three trivia questions.
The goal is to get them comfortable expressing uncertainty as ranges rather than 
point estimates and to show them that their “confident” ranges are usually too narrow.
 How to Run It
Step 1: Cover the Basics (two minutes)
Explain three key concepts:
• Possibility vs. probability:  Binary thinking (“will this happen?”) vs. 
probabilistic thinking (“how likely is this?”).
• Ranges vs. point values:  Instead of “the project will take six months, ” 
try “90% confident it will take four to eight months. ”
• What 90% confidence means:  If you’re truly 90% confident, you 
should be wrong only one time out of ten.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

246 WHAT DOES GOOD CALIBRATION LOOK LIKE?
• Well-calibrated: When you say 90% confident, you’re right about nine out 
of ten times. Your ranges are appropriately sized: wide enough to capture 
uncertainty but narrow enough to be useful.
• Overconfident (most common): You’re wrong more often than expected 
because your ranges are too narrow. You say “5-7 incidents per year” when 
reality could be 2-12. You miss the actual outcome and make decisions based on false precision.
• Underconfident (rare): You’re right more often than expected because your 
ranges are too wide. You say “0–100 incidents per year” when reality is likely 
3–8. Your estimate is technically correct but useless for decision-making. If 
everything is “somewhere between nothing and everything,” stakeholders can’t 
act on it.
the goal isn’t to be correct all the time; it’s to give ranges that are both realistic and useful. 
Most people struggle with overconfidence, which is what this exercise addresses.
Step 2: Run Quick Calibration Questions (five to eight minutes)
Ask them to give a range they’re 90% sure contains the correct answer. Emphasize 
that if they’re well-calibrated, they should be wrong about one time out of ten. Here are a few examples of questions. Feel free to use your own.
Question 1: “How tall is LeBron James?”
• Correct answer: 6’9” (or 6 feet 9 inches).
• Teaching moment: Watch for overly narrow ranges like “6’7”–6’9”” vs. appropriately wide ranges like “6’6”–6’11” . ”
Question 2: “What year was the first iPhone released?”
• Correct answer: 2007.
• Teaching moment: Even for recent events, a 90% confidence range 
might be 2004–2010, not 2006–2008.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

247Question 3: “How many time zones does Russia span?”
• Correct answer:  11 time zones.
• Teaching moment:  For unfamiliar facts, a truly 90% confident range 
might be 8–15, not 9–12.
Step 3: Reveal and Discuss (two to three minutes)
After each question, reveal the answer and ask who got it right (whose range 
included the correct answer). Most people give ranges that are too narrow because they 
confuse “my best guess plus/minus a little” with “90% confidence interval. ” A 90% CI 
should feel uncomfortably wide. That’s the point. If your range feels tight and precise, 
you’re probably overconfident.
This exercise nudges them into the right mindset: embracing wider ranges that 
reflect their true uncertainty. Now you’re ready to gather estimates for your risk scenario.
 Selecting the Right SMEs
You don’t need a perfect panel of colleagues to get started. While multiple SMEs 
generally produce better results by bringing different perspectives and reducing 
individual bias, don’t let the search for the ideal group prevent you from moving forward 
with useful input.
 How Many Experts Do You Need?
• Absolute minimum:  One expert with direct experience (not ideal, 
but sometimes it’s all you have, it’s enough to start and improve later)
• Minimum viable:  Two experts with direct experience (enough to 
start with reasonable confidence)
• Better:  Two to four experts with different perspectives (technical + 
operational + business)
• Optimal:  Five to seven experts with systematic aggregationChapter 13  Your SeCret Weapon: SubjeCt Matter expertS

248Each expert brings their own worldview, biases, expertise, and blind spots. Blending 
their answers (covered later in this chapter) typically produces more reliable estimates 
than relying on any single perspective. Keep in mind that using multiple experts reduces 
individual error; however, relevance beats quantity. Three incident responders who’ve 
handled ransomware will give you better input than ten executives who’ve only read 
about it.
 What Makes a Good SME for CRQ
Look for these characteristics when selecting experts:
• Direct operational experience  with the system, process, or threat 
you’re modeling
• Recent exposure  to the risk scenario, when possible (within the past 
two years)
• Willingness to express uncertainty  rather than false confidence
• Business context understanding , not just technical details
A good SME can also explain why the number moves. They can tell you what makes 
the estimate higher, what makes it lower, and what conditions drive that variation. They 
understand how the system behaves in the real world.
If your SME cannot explain why they believe their estimate or cannot describe the 
reasoning behind the range they chose, you may need to probe deeper or find additional 
input. The best experts can talk through their assumptions and acknowledge what they 
do not know. A reliable SME is also someone who is not directly incentivized by the 
outcome of the estimate. Incentives shape how people see risk. A control owner may 
lean toward a lower estimate, while someone trying to justify a project may lean higher. 
If you have to use someone with a clear stake in the outcome, acknowledge it up front 
and ask them to describe how that incentive works for them. Also, avoid using the final 
decision-maker as your SME. Decision owners often carry strategic or political pressures 
that can influence their forecast even if they do not intend to.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

249 THE IKEA EFFECT
When running elicitation workshops, watch out for the IKEA effect, an unintentional bias 
where people overvalue things they helped build. It’s named, of course, after the furniture 
retailer. If you’ve ever spent an hour building a wobbly IK ea bookshelf, you probably felt oddly 
proud of it anyway. t hat’s the IK ea  effect.
the same bias shows up in risk workshops. When people are estimating the likelihood or 
impact of security failures, they may downplay the probability of something going wrong with 
a system, process, or control they designed. not because they’re lying, but because it’s hard to 
imagine your own work failing.
Facilitator Techniques to Reduce This
• Frame it as forecasting, not auditing: “We’re trying to predict what might 
happen, not evaluate what you’ve built.”
• If people get defensive, step back : “this isn’t about blame or performance 
reviews. We’re just modeling future scenarios.”
• Normalize uncertainty : “every system has some failure rate. We’re trying to 
estimate what that looks like for planning purposes.”
• Bring in a cross-functional group that includes both insiders and outsiders to the system in question.
• Use the Mini-Delphi method to collect independent estimates before group discussion.
Your bedside manner matters.
 people need to feel safe expressing uncertainty about their 
own work. If the room feels like an audit or performance review, you’ll get defensive answers instead of honest estimates.
Structure and diversity help break the bias, but facilitation style determines whether people 
contribute insight or defend their past decisions.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

250 Running Effective SME Workshops
By now, you know what to ask SMEs. It’s the same data you’ve been collecting from 
external sources and internal systems. SMEs just add the final layer: forward-looking 
judgment and organizational context.
Present what you’ve found; then ask them to reality-check it. Don’t ask them to 
estimate from scratch. Show them the industry data, show them your internal findings, 
then ask: “Does this make sense for us? What would you adjust?”
This works better because it gives them something concrete to react to instead of 
starting with a blank page.
For Frequency Estimates
• “Industry data shows X-Y incidents annually. What range feels right 
for our environment? Why?”
• “Our internal logs show Z incidents over 18 months. Based on that 
and current conditions, how would you adjust that up or down?”
• “Given our controls and threat landscape, what’s the lower bound, 
typical, upper bound (P5, P50, P95) frequency?”
For Magnitude Estimates
• “External studies suggest external forensics firms would charge us 
between $X and $Y for this type of incident. Does that match your 
experience?”
• “Our last incident cost $C. What range should we use going forward?”
• “What cost categories are we missing?”
For Control Effectiveness
• “This data assumes standard controls. How do ours actually 
perform?”
• “What’s changed since this data was collected?”
For Scenario Validation
• “Does this attack path reflect how incidents actually unfold here?”
• “What would make this scenario more or less likely in our 
environment?”Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

251Remember: SMEs aren’t starting from scratch. They’re refining what you’ve 
already built.
 GENAI PROMPT: SME INTERVIEW SCRIPT GENERATOR
I’m conducting expert elicitation for a cyber risk assessment. Generate 6-8 structured 
interview questions that will help me gather reliable frequency and magnitude estimates while 
avoiding common bias traps.
Risk scenario: [paste your risk scenario here]Expert background: [describe their role/expertise]What I need: Frequency estimates (incidents per year) and impact ranges (cost per incident). 
the script should ask the SM e to decompose the factors that make up magnitude in their area 
of expertise and provide estimates.Include questions that:
• ask for ranges, not point estimates
• probe for the reasoning behind their estimates
• address uncertainty appropriately
• avoid leading or anchoring language
Format as a ready-to-use interview script with follow-up prompts.
Let’s put these learnings into practice.
 EXERCISE 13-1: SME ELICITATION QUESTION DESIGN
Your Task: You’re planning a workshop to estimate phishing success rates. First, identify the 
problems with each question; then write three good ones from scratch.
Part A: Fix These Bad Questions
• Question 1: “What’s our phishing risk?”
• Question 2:  “are we likely to get phished this year?”
• Question 3:  “how much would a phishing incident cost us?”Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

252Answer Key
Question 1 Problem:  too va gue; doesn’t specify frequency vs. magnitude, timeframe, or what 
“risk” means.Sample fix: “In a typical 12-month period, what’s your range for successful phishing incidents 
that compromise at least one employee account?”
Question 2 Problem: Forces binary yes/no instead of capturing uncertainty ranges.Sample fix:
 “how many successful phishing incidents do you expect in a typical year? Give 
me your lower bound, typical, upper bound ( p5, p50, p95) estimates.”
Question 3 Problem:  no scope defined; doesn’t specify incident severity or cost categories.
Sample fix: “For a typical phishing incident that compromises one employee email account, 
what’s the total cost range, including response time, I t cleanup, and business disruption?”
 Structured Workshops: The Mini-Delphi Method
If you can get 5+ SMEs in a room (or on a call), structured workshops produce the 
highest-quality estimates with the least post-processing. When done correctly with the 
ten-minute calibration primer and proper facilitation, you can often use the outputs 
directly in your model without requiring additional adjustments.
If you can’t get everyone together, the distributed elicitation approach, covered later, 
works well, although it requires additional quality controls.
Delphi originated at RAND Corporation in the 1950s by Norman Dalkey and Olaf 
Helmer as a systematic way to capture expert judgment for forecasting. RAND’s 1969 
memorandum, The Delphi Method: An Experimental Study of Group Opinion (Dalkey 
& Helmer, 1969), reported formal experiments evaluating the technique after its initial 
development.
The full Delphi technique involves multiple rounds of anonymous surveys. Experts 
see aggregated results from previous rounds and can revise their estimates (Dalkey & 
Helmer, 1969). It’s been used for everything from technology forecasting to medical 
consensus-building.
Delphi can take weeks and multiple survey rounds. For cyber risk workshops, we 
need something faster that captures the same benefits.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

253Delphi solves three key problems:
 1. Dominant voices drowning out valuable minority opinions
 2. Anchoring bias, where the first estimate shapes everyone else’s
 3. Social pressure to conform rather than express genuine beliefs
 The Mini-Delphi Format
At the Beginning of the Workshop
• Share context (worksheet, business objective, known data from 
external and internal sources, gaps you’re trying to fill).
• Explain what you’ll be asking for (90% ranges, not point estimates).
• Optionally include two to three calibration trivia questions to warm 
people up.
During the Session
Figure 13-3. Overview of steps when holding a Mini-Delphi style elicitation 
workshop
Round 1: Private Estimation
Ask everyone to write down their range for the first variable silently. For example: 
“What’s the annual frequency (range) of successful ransomware incidents in our 
environment?”
No discussion. No talking. Just write.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

254 AN ADVANCED WAY TO ELICIT PERCENTILES
advanced elicitation methods used in structured expert judgment and applied forecasting 
often start with percentile anchors rather than asking for a simple range. a  simple range, 
sometimes called a naive range, is when you ask an SM e for their lower bound, upper bound, 
and typical value without any additional structure. people tend to make these ranges too 
narrow because they anchor on their “best guess” and adjust only slightly up or down.
a more advanced approach uses a thought experiment instead of asking for a range directly. 
this involves asking for a lottery comparison to anchor each percentile using a lottery 
comparison. a  lottery comparison is a forced-choice question that helps an SM e  reveal the 
value where their uncertainty really sits. For example, to elicit a p95 or p5 value, you can ask:
“What number makes you unsure whether the outcome is higher than that value or whether 
you should take a 1-in-20 lottery instead?”
the point where they feel indifferent becomes their percentile anchor.
You can use the same idea for the midpoint. to anchor the p 50, ask for the number where they 
feel genuinely torn about whether the actual outcome will come in higher or lower, vs. taking a coin toss.
these comparisons help people separate their intuition from their confidence, and they tend 
to produce wider and more realistic bounds than asking for a range directly. a fter this, you still 
follow the usual Mini-Delphi flow: group discussion, then private revision.
a full description of this method can be found in robert brown’s Business Case Analysis with 
R: Simulation Tutorials to Support Complex Business Decisions (2018), which provides a 
detailed walkthrough of percentile elicitation using structured lotteries.
Round 2: Reveal and VisualizeCollect the ranges, anonymize them, and display them all at once on a board, screen, 
or shared doc.
Round 3: Group Discussion
Facilitate a quick discussion. Where’s the disagreement? Who’s high and why? What 
data or experience are people leaning on?
Don’t let this turn into a debate. You’re collecting information about why people 
think what they think, not trying to reach a consensus yet.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

255Round 4: Revision
Invite people to update their ranges if they want. Still privately, but no pressure 
to change.
Round 5: Reach Consensus
Record the final range for each participant and the group consensus if you’re 
aggregating. Document the rationale.
Repeat this cycle for each major variable. You’ll get better estimates and richer 
reasoning with this structured rhythm than from a freeform discussion.
 Controlling for Group Bias
The Mini-Delphi structure handles most bias issues. Watch out for these additional 
pitfalls:
• Don’t put a CISO or SVP at the top of the Zoom grid. They’ll shape 
the tone unintentionally.
• If someone dominates the discussion, redirect: “Let’s hear from 
others before we continue. ”
• Don’t let early speakers anchor the conversation. Stick to the private-  
first structure.
 Capture Rationale, Not Just Numbers
Every range needs a short “why. ” Ask the participants, “What’s your range, and what 
experience or evidence made you pick it?”
Capturing rationale helps you
• Reuse SME inputs later.
• Spot patterns in how people think.
• Defend assumptions to stakeholders.
• Course-correct if new data emerges.
No one remembers why they said “two to ten” six months ago. Document it while 
it’s fresh.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

256 GENAI PROMPT: MINI-DELPHI WORKSHOP AGENDA
Design a 90-minute Mini-Delphi workshop agenda for eliciting expert estimates on [risk 
scenario] from [number] participants.
Workshop goal: Gather frequency and magnitude estimates for [specific risk]. Magnitude 
estimates should be decomposed into loss forms by the participants, where possible. 
participants:  [describe expertise levels and roles] Format: [in-person/virtual]
Include:
• Detailed timing for each phase
• Facilitation tips for each section
• bias mitigation techniques
• Materials needed
• Sample questions for each estimation round
• how to handle common problems (anchoring, groupthink, dominant voices)
Make it actionable for someone who hasn’t run this type of workshop before.
 Distributed Elicitation Best Practices (Work 
with What You Have)
Most of the time, it’s challenging to gather five or more experts in a room. People are 
busy, schedules don’t align, or you need input from someone in a different office or 
time zone.
Distributed elicitation works. You gather the same structured input through one- 
on- one me etings, email exchanges, Slack conversations, or online forms. The process 
requires more discipline from you as the facilitator, plus some additional quality controls 
after you collect the estimates.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

257Step 1: Structure Your Request
Prepare a standard package before contacting any SME. Include the following:
Context Setting
• Brief scenario description
• What decision does this assessment support
• Available context and data (external and internal data, collected into 
a nice report)
• How their input will be used
Estimation Framework
• Quick explanation of ranges vs. point estimates
• What 90% confidence means
• Examples of what you’re looking for
Specific Questions
• Use the same prompts for every SME.
• Always ask for lower bound, typical, upper bound (P5, P50, P95) 
estimates.
• Ask for their reasoning behind each estimate.
Step 2: Choose Your Delivery Method
• One-on-one meetings  are most effective for complex scenarios. 
You can probe their reasoning in real time and clarify any confusion 
immediately.
• Structured email or Slack  works for straightforward requests. 
Include all context in a single message. Make it easy for them to 
respond.
• Online forms  (like Google Forms) provide the most scalable option 
for large groups. They ensure consistent formatting across all 
respondents.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

258Step 3: Quality Control During Collection
Watch for these red flags:
• Point estimates instead of ranges
• Unreasonably narrow confidence intervals
• Missing reasoning or explanations
• Estimates that seem copy/pasted from external sources
• Rationale that is obviously AI-generated
When you spot problems, follow up. Ask clarifying questions. Gently push for 
broader ranges if experts appear overly confident.
Step 4: Apply Range Adjustments
You’re working with uncalibrated individual estimates. Apply the quality framework 
from Chapter 10. Individual SME estimates typically warrant some range adjustment unless
• The expert has demonstrated calibration through training or practice.
• They provided detailed evidence-based reasoning.
• Their estimate aligns closely with other data sources.
The following section covers how to aggregate multiple SME estimates into a single 
input for your model.
 Aggregating Expert Opinion
You’ve gathered estimates from several experts. Now turn those different three-point 
estimates (P5, P50, P95) into a single input for your model. Aggregate the percentile 
points separately. In Excel, use the AVERAGE() or MEDIAN() functions across each 
percentile level.
Use MEDIAN() if your SMEs went through calibration. Use AVERAGE() for 
uncalibrated experts since biases tend to cancel out in groups.
Before you aggregate, look at the spread first. Check for
• Tight clustering:  Most estimates within 20–30% of each other (good 
to aggregate)Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

259• Bimodal distribution: Two distinct camps suggesting different 
assumptions (investigate before aggregating)
• Wide scatter: May need more structured elicitation
• Outliers: 3× higher or lower than others (investigate these)
When you find outliers, check if they misunderstood the question, possess unique 
insight others lack, or are guessing vs. drawing on experience.
 A SIMPLER METHOD FOR AGGREGATION
another option is to keep the widest reasonable range from all SM e  estimates. take the lo west 
p5 across experts, the average p50, and the highest p95. t his preserves the full spread of 
what the group thinks is possible.
use this when the experts disagree or when the scenario is uncertain and you do not want to 
narrow the range too quickly. You can always tighten it later with discussion or better data. 
averaging or using medians is still the default, but this wide-range method is useful when you 
want to see the full uncertainty before you blend it.
 Aggregation Example
Five SME estimates for annual phishing success rate range from “3–18%, typical 8%” to “2–30%, typical 10%. ” The expert with the widest range is new to the organization. The 
one with higher estimates knows about recent control gaps. Using median aggregation: 
5–22% with 12% as the typical value.
 When Simple Aggregation Doesn’t Work
Sometimes the spread is too wide for simple averaging. Model multiple scenarios when experts disagree by more than 5× on key parameters, when they’re clearly modeling 
different scenarios, or when disagreement reflects genuine uncertainty. Model both conservative and optimistic cases; then present both to stakeholders.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

260 Three Applications of SME Input
SME judgment fits with your risk assessment in three main ways. Select the approach 
based on the data you have and the model you’re trying to create.
 Application 1: When Data Doesn’t Exist
Use when:  No historical data is available from external or internal sources, or the data 
exists but is too expensive or difficult to obtain.
The approach:  Ask for a range that captures uncertainty. Walk them through three 
questions: the low end (rare but possible), the middle (most typical), and the high end 
(still realistic but uncommon)—P5, P50, P95. Give them time to think. If they give you a 
point estimate, redirect: “That’s helpful. What would be the range around that?”
Key Prompts
• “What’s the low end? Maybe a 1-in-20 outcome?”
• “What’s your best guess for the typical case?” (P50)
• “What’s the high end that wouldn’t shock you?”
Tools:  Mini-Delphi workshops or structured one-on-one elicitation.
 Application 2: When Data Needs Context
Use when:  You have data from external sources or internal systems that need adjustment 
or interpretation.
The approach:  Present the data first; then ask the SME to review and verify it. Don’t 
ask if the data is right or wrong. Ask how it applies to your specific situation. Listen for 
organizational factors, recent changes, or environmental differences that the external 
data can’t capture.
Key Prompts
• “This data says X. Does that match your experience?”
• “If you had to give a realistic range around this number, what 
would it be?”
• “What makes us higher or lower than this industry average?”Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

261Common Applications
• Converting industry averages into organization-specific ranges
• Adjusting external data for your company size, sector, or controls
• Adding uncertainty bounds to point estimates from reports
 Application 3: When Modeling Future Changes
Use when:  You need to estimate how planned changes, new controls, or evolving threats 
will affect risk going forward.
The approach:  Focus on specific changes rather than general risk levels. Describe 
the current scenario; then walk through how a proposed change affects each part of the 
risk. Ask them to think through implementation realistically, not just design intent. Get 
ranges for effectiveness rather than binary yes/no answers.
Key Prompts
• “If we implement [new control], how much would that reduce 
frequency or impact?”
• “How will [planned change] affect our risk profile over the next 12 
months?”
• “What’s the range of effectiveness we should expect from [control/
process]?”
• “How might [emerging threat/technology change] shift these 
numbers?”
Common Applications
• ROI analysis for proposed security investments
• Modeling risk changes from business initiatives (cloud 
migration, M&A)
• Adjusting estimates based on threat landscape evolution
• Forecasting control degradation or improvement over time
Historical data and current benchmarks can’t tell you how future changes will affect 
risk. Only SMEs bridge that gap with forward-looking judgment.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

262 WHEN SMES STRUGGLE WITH RANGES: ALTERNATIVE TECHNIQUES
Some experts freeze when asked for ranges. t hey are strong in their domain but have trouble 
thinking in percentiles or confidence intervals. In these cases, alternative techniques can help 
capture their judgment without requiring statistical fluency.
one option is to walk through the extreme outcomes. Start with the worst case, and ask the 
SMe what would need to happen for that outcome to occur. t hen ask for the value that would 
surprise them if it were even worse. t hat becomes the high-end estimate. Do the same for the 
best case to anchor the low end. once both extremes are clear, it is usually easier for the SM e 
to choose a typical value. t his works well for people who think more naturally in scenarios 
than in probability terms.
two other methods,  curve sketching and the chip method, also help SM e s express uncertainty 
visually. With curve sketching, the SM e draws the shape of the distribution they believe is most 
realistic. With the chip method, they distribute tokens across outcome bins to show which 
values they think are more or less likely. both techniques turn mental models into structured 
input without requiring them to name percentiles directly. For detailed instructions, see www.heatmapstohistograms.com
 in the tools & Do wnloads section.
You now have all three pieces of the CRQ data puzzle: external data from Chapter 11,  
internal data from Chapter 12, and SME input from this chapter. Each source gives you 
valuable information, but most risk analysts struggle with the next step: How do you 
blend these three different types of inputs into a single estimate for your model? The 
next chapter shows you exactly how to systematically combine external data, internal 
evidence, and expert judgment into defensible estimates you can use in your risk 
assessments.
 Chapter Summary
The Big Idea: Subject matter experts aren’t just gap-fillers when data is missing. They 
provide forward-looking insight and organizational context that no external dataset can 
capture.Chapter 13  Your Se Cret Weapon: SubjeCt Matter expertS

263Key Takeaways
• Use three practical strategies when formal calibration isn’t 
feasible.  Ask multiple experts to reduce individual error, structure 
the elicitation process with methods like Mini-Delphi, and prime 
participants with a ten-minute calibration exercise before gathering 
estimates.
• Start with a minimum of two experts, but don’t wait for the perfect 
panel.  Two SMEs with direct experience give you enough to start 
with reasonable confidence. One expert works, though you’ll need 
additional quality controls.
• Match the SME application to your data situation.  Elicit estimates 
from scratch when no historical data exists, use SMEs to interpret 
and adjust existing data for your environment, and leverage their 
judgment to model how future changes will affect risk.
• Structure beats calibration in practice.  Mini-Delphi workshops 
with private estimation rounds, systematic aggregation of 
multiple estimates, and documented rationale produce defensible 
results without requiring ongoing calibration training that most 
organizations can’t sustain.
• Aggregate systematically, not casually.  Use the median for 
calibrated experts or the mean for uncalibrated groups. Always 
examine the spread first and investigate outliers before combining 
estimates into a single model input.
Bottom Line:  The goal isn’t eliminating expert judgment bias. It’s structuring that 
judgment to get defensible estimates that reflect real operational knowledge. SME input 
is the third essential data source, providing the forward-looking context that historical 
data alone cannot capture.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

264 What’s Coming Next
You now have all three data sources: external benchmarks, internal evidence, and expert 
judgment. Most risk analysts struggle with the next step: How do you blend these three 
different inputs into a single estimate for your model? Chapter 15 shows you exactly 
how to systematically combine them into defensible estimates you can use in your risk 
assessments.
References
Brown, R. D., III. (2018). Business case analysis with R: Simulation tutorials to support 
complex business decisions. Apress.
Cooke, R. M. (1991). Experts in uncertainty: Opinion and subjective probability in 
science.  Oxford University Press.
Cooke, R. M., & Goossens, L. H. J. (2008). TU Delft expert judgment data base. 
Reliability Engineering & System Safety.
Dalkey, N. C., & Helmer, O. (1969). The Delphi method: An experimental study of 
group opinion  (RAND Research Memorandum RM-5888-PR). Santa Monica, CA: RAND 
Corporation.
Hubbard, D. W. (2014). How to measure anything: Finding the value of intangibles in 
business (3rd ed.). Wiley.
Murphy, A. H., & Winkler, R. L. (1984). Probability forecasting in meteorology. 
Journal of the American Statistical Association , 79(387), 489–500.
Rowe, G., & Wright, G. (1999). The Delphi technique as a forecasting tool: Issues and 
analysis. International Journal of Forecasting , 15(4), 353–375.
Tetlock, P . E., & Gardner, D. (2015). Superforecasting: The art and science of 
prediction . Crown Publishing Group.Chapter 13  Your SeCret Weapon: SubjeCt Matter expertS

