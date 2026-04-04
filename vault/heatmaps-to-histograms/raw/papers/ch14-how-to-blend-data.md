---
title: "Chapter 14: How to Blend Data"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 14
pages: 287-302
ingested: 2026-04-04
---

# Chapter 14: How to Blend Data

265
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_14CHAPTER 14
How to Blend Data
When the facts change, I change my mind. What do you do, sir?
—John Maynard Keynes
 The Problem Every Analyst Faces
This is the moment every risk analyst, beginner or experienced, eventually reaches. 
You’ve spent a good amount of time collecting data for your analysis. You’ve looked at 
base rates from competitors and industry peers, pulled internal logs and telemetry, and 
talked to subject matter experts who helped you interpret what all that data means. You 
haven’t done this just once; you’ve done it several times for a single analysis: once for the 
frequency of loss events and, then again, sometimes six more times, for each of the six 
forms of loss on the magnitude side.
Some of that data looks clean and ready to plug straight into your model. Other 
parts don’t agree with each other. Some even contradict themselves. And that leaves you 
staring at a pile of data, wondering what to do next.
That’s where this chapter comes in.By now, you’ve gathered external data in Chapter 11, explored internal data sources 
in Chapter 12, and worked with subject matter experts in Chapter 13. You’ve also learned 
in Chapter 10 how to evaluate and adjust data for quality, bias, and coverage. Now you’ve 
reached the last step where everything comes together. This is where you make sure that 
what goes into your FAIR or other CRQ model is coherent, reconciled, and defensible. It’s 
the moment where all the work you’ve done so far becomes something usable.
And for that, we’re going to take a little help from an eighteenth-century Presbyterian 
minister.

266 What an Eighteenth-Century Minister Can Teach Us 
About Risk Analysis
In the early 1700s, an English Presbyterian minister named Thomas Bayes unknowingly 
changed the course of many fields, including decision science and risk management. He 
wore many hats; he was a theologian, philosopher, and mathematician, and he gave us a 
way to think about uncertainty that still shapes modern decision-making. His insight was 
simple yet profound: when new evidence appears, don’t discard what you already know. 
Instead, update it. Start with a belief, add new information, and see how that changes 
your understanding of the world.
That’s the foundation of Bayesian reasoning. It’s also what we do in risk analysis 
every day, whether we know it or not.
 A NOTE ON BAYESIAN REASONING
This chapter uses the “Bayesian reasoning” conceptually, not as a mathematical derivation. 
You won’t see equations here; instead, you’ll learn a structured way of updating beliefs using 
evidence, consistent with the Bayesian mindset .
 The Reality of Data Collection
In previous chapters, I’ve described the risk assessment process like this:
You begin with what you can know about the world before looking at your own 
organization. That means starting with the base rate. The base rate gives you a 
population-level baseline, a reference point for how often an event happens across 
similar companies or industries. It doesn’t tell you what will happen inside your 
environment, but it sets the stage for everything that follows.
From there, you look inward. Internal data gives you evidence about how your 
organization behaves relative to that baseline. It adds specificity and realism, showing 
how your systems, people, and controls shift the picture. Last, you bring in subject 
matter experts. They add context that no dataset can. SMEs add information about 
things that are changing, controls that are planned, and threats that haven’t appeared in 
the numbers yet.ChapTer 14  how To Blend da Ta

267That’s the ideal. But every analyst knows the ideal is rarely what happens. 
Sometimes the base rate you need doesn’t exist, or the external data is too expensive to 
obtain. Maybe you could get it through a subscription or a research engagement, but 
the budget isn’t there. Other times, internal data is incomplete or fragmented across 
systems. Occasionally, there are no SMEs who know enough about the scenario you’re 
analyzing. Or they’re simply not available. I’ve had situations where no amount of 
persistence, or homemade cookies, could get a half hour on anyone’s calendar.
These are the natural constraints that shape the work of a risk analyst. The danger is 
getting stuck trying to collect everything before you move forward. That’s what leads to 
analysis paralysis: the belief that you can’t begin until the picture is perfect. That mindset completely defeats the purpose of adopting the less wrong philosophy from Chapter 4.
The less wrong mindset gives us permission to move forward even when the data 
isn’t perfect. It’s about progress through iteration. Bayesian reasoning fits beautifully into 
that idea. It gives you a way to take the evidence you have, whether it’s one source or all 
three, and move ahead with a belief grounded in data. When new evidence appears, you 
update your belief and continue refining your analysis.
Combining the less wrong mindset with Bayesian reasoning is one of the most 
practical and powerful ways a risk analyst can work within the realities of everyday 
corporate life. It keeps you from chasing perfect data and lets you make better, 
evidence-based decisions while staying flexible enough to change your mind when the 
facts change.
Let’s try a simple exercise to see how Bayesian reasoning works in real life.
 EXERCISE 14-1: SIMPLE BAYES UPDATING
we’re going to do a simple exercise with the wea ther. Try to do this tomorrow morning when 
you first wake up. You want to know what the weather will be like so you can decide how to dress, whether to wear a coat or a raincoat, bring an umbrella, or choose between walking to 
the grocery store or driving.
Step 1:
 when you first wake up, before checking any weather information or looking 
outside, form a belief about how the weather will be for the entire day (morning to evening): 
temperature, sunny or overcast, dry or wet. w rite down your beliefs and what decision you’d 
make: what to wear, what to bring. This is your prior.Chap Ter 14  how T o Blend da Ta

268Step 2:  look out the window. observe the sky, see if the ground is wet, and try to sense the 
temperature through the glass. Think again about how the day might turn out, and update your 
belief. would you change your decision? This is your posterior: an updated belief after new 
evidence.
Step 3:  Go outside briefly. notice the actual temperature, wind, and humidity—the things 
you couldn’t sense from inside. Think again about how the rest of the day will go and what 
decision you’d make. Your belief from Step 2 is now your new prior, and Step 3 gives you a 
new posterior.
Step 4: Check the weather forecast on your phone. Use this to update your belief again and 
make your final decision about how to prepare for the day. Your belief from Step 3 is now your 
prior, and Step 4 is your latest posterior.
Step 5:  at the end of the day, you now have perfect information about what happened. a sk 
yourself:
• did each new piece of information help you make a better forecast and 
decision (like how to dress or whether to bring an umbrella)?
• was there a point where you could ha ve stopped collecting data because you 
had enough to make your decision?
• If each step had taken ten minutes of your time, when would you have stopped 
collecting information?
The connection to risk analysis: This is exactly how you’ll combine risk data. Start with 
external base rates, update with internal evidence, and refine with expert input. each source 
improves your estimate without requiring perfect information.
 When to Use Bayesian Reasoning
You won’t always use this framework, and that’s by design. Bayesian reasoning is a tool, not a rule. The decision to apply it depends on the question you’re trying to answer, the 
value of additional information, and the data you have.
Sometimes you will have all three kinds of data: external, internal, and SME input. 
Other times, you will have only one or two. The goal is not to fill every box. It is to use 
what you have in a structured, transparent way. If your sources line up cleanly, you do 
not need to blend them. You are done.Chap Ter 14  how T o Blend da Ta

269In practice, you will see two paths. On the first path, the blending happens in the 
room. Your SMEs review external base rates, consider internal evidence, and provide 
calibrated ranges in a structured session. Their output already reflects the updates you 
need, and your job is to document how each source influenced the result and to note any 
overlaps or gaps.
On the second path, inputs arrive separately or point in different directions, or you 
are missing one or more data types. In that case, you perform the blending yourself. Start 
from the strongest available baseline, update with internal evidence, refine with SME context if you can get it, and record how each step moved your belief. Either path is valid. What matters is that your reasoning is visible.
 GENAI PROMPT: BAYES IN PLAIN ENGLISH
explain Bayes’ Theorem to a CIS o using a phishing example, without equations, in under 
150 words
 Bayesian Thinking As a Mental Model
You don’t have to be a statistician to use Bayesian reasoning. The math exists for people who need it, but what matters most for a risk analyst is the mindset. Bayesian reasoning 
is a way to structure how you think about uncertainty. It’s not about equations; it’s 
about staying honest with yourself about what you know, what you don’t, and how new 
information should change your view.
That mindset can transform how you approach risk analysis. It keeps your 
attention on what matters, avoids the trap of “boiling the ocean, ” and sidesteps the 
most common mistakes analysts make when they first start working quantitatively: believing they need to collect every possible piece of data before they begin, thinking 
their analysis isn’t valid unless it’s perfect, or getting stuck in endless research instead 
of making progress.
Bayesian reasoning also helps guard against the cognitive biases that creep into 
almost every analysis: overconfidence, anchoring, and the IKEA effect, where we 
overvalue something simply because we built it ourselves.Chap Ter 14  how T o Blend da Ta

270The model itself is simple. You start with a belief about the world, which we call a 
prior . Then you gather evidence: new information, observations, or data. You update 
your belief in light of that evidence, and that updated belief becomes your posterior .  
The next time you revisit the question, today’s posterior becomes tomorrow’s prior. 
You’re always learning, always updating, never claiming to have the final answer.
Figure 14-1. Bayesian updating is cyclical
Imagine you’re assessing the likelihood of a data breach at your company. You start 
with a prior: based on industry reports, maybe a 10% annual chance of a significant 
breach. Then new evidence comes in: your security team reports three times more 
phishing attempts this quarter, and a scan finds unpatched systems. You update your 
belief upward, maybe to 15%. A month later, you run phishing training, patch everything, 
and see real improvement. That’s new evidence, so you update again, maybe back down 
to 12%. This cycle is illustrated in Figure  14-1 .
What matters is the process, not the specific numbers. You started with imperfect 
information, made a decision, gathered new evidence, and refined your view. You didn’t 
wait to collect “all the data. ” You used what you had, stayed open to new inputs, and kept 
improving.
That’s what Bayesian reasoning looks like in practice. It’s simply disciplined humility.ChapTer 14  how To Blend da Ta

271 RISK ANALYSTS INTUITIVELY DO THIS
This same iterative refinement is already embedded in how most risk analyses evolve over 
time. each new scenario, control change, or incident effectively updates a prior belief about 
loss frequency or magnitude.
 Why Bayes Matters for Data Blending
Most analysts feel forced to choose one source over another. Bayesian reasoning gives 
you a better frame: start with your best available belief, and update it as new evidence 
appears. Each source does not replace the last. It refines it.
Figure 14-2.  The three sources of data blend together to provide 
additional contextChap Ter 14  how T o Blend da Ta

272In practice, you may have three sources, as seen in Figure 14-2, or only one or 
two. That is fine. The point is not completeness. It is transparent reasoning with what 
you have.
The next section shows a simple sequence you can apply in any order, depending on 
what evidence is available. Use it to turn mixed inputs into a single, defensible estimate.
 The Four-Step Bayesian Blending Process
Here is how to apply Bayesian thinking to combine your sources into a single, defensible 
estimate you can use in your risk model. You begin with the strongest available baseline 
and then update that belief as you layer in additional evidence. If you have all three 
sources, great. If you do not, you still follow the same reasoning pattern and document 
what is missing. An overview is shown in Table 14-1.
Table 14-1.  The four-stage Bayesian blending framework. Each step refines, rather 
than replaces, what came before, transforming mixed evidence into a coherent, 
defensible estimate.
Stage Evidence Source Guiding Question Analyst Action / Outcome
Prior external base rate 
or the strongest 
available baseline“What would I believe if I knew nothing about our specific environment?” establish your starting belief: the 
population-level expectation or best available baseline.
First 
UpdateInternal data “How does our organization’s evidence 
confirm or contradict that 
baseline?”adjust the belief upward/downward 
or widen uncertainty based on local evidence quality and coverage.
Second 
Update SMe input “What do experts know that the data can’t yet show?” add forward-looking judgment to 
account for upcoming control or threat changes.
Posterior Combined estimate “Given everything, what 
should we now believe?” derive the final, defensible 
range for modeling: transparent, 
traceable, and updatable.Chap Ter 14  how T o Blend da Ta

273 Step 1: Choose Your Strongest Available Baseline 
(Your Prior)
Often, this is a credible external base rate. That gives you a population-level starting 
point. If a good base rate does not exist or is out of reach, use the best available baseline.
Acceptable baselines, in order of preference:
• A large, recent, transparent external dataset
• An adjacent or analogous external dataset when a direct one does 
not exist
• Well-scoped internal history that is relevant to the scenario
• A clearly documented SME baseline when data is unavailable
When using external data, look for
• Large and representative samples
• Recent publication dates
• Transparent methodology
• Independent research
Apply your quality adjustments first. If Chapter 10 led you to widen uncertainty by a 
factor, use the adjusted range as your starting point. The spirit here is simple: this is what 
you would believe if you knew nothing else about your specific environment.
 Step 2: Ask What Your Internal Data Says (First Update)
Now compare your organization’s evidence to the baseline. Does it confirm, contradict, 
or refine the baseline?
Use it to move the estimate when
• Incident logs show a higher or lower frequency than the baseline.
• Loss records suggest a different magnitude than published studies.
• Control telemetry changes the exposure picture.ChapTer 14  how To Blend da Ta

274Account for coverage and quality. If logging is partial or the period is short, reflect 
that as wider uncertainty rather than a hard shift. You are asking, “Given the baseline 
and the internal evidence, what should I now believe for this environment?”
If you do not have usable internal data, say so, keep the prior, and carry that 
uncertainty forward.
 Step 3: Get the SME Reality Check (Second Update)
Present the baseline and the internal evidence to your SMEs and capture their forward-  
looking adjustments.
Useful Prompts
• Does this baseline feel right for us and why?
• What does our internal data miss that you know from operations?
• What upcoming changes would shift this estimate over the next 
12 months?
• Where would you put low, typical value, and high (P5, P50, P95)?
When SMEs give you a range, ask them what conditions would produce the low 
value, the typical value, and the high value. Their short explanations reveal the causal 
factors behind the numbers and help you see which part of the external baseline best 
applies to your environment. You’re not asking for additional estimates; you’re asking for 
context that makes the update defensible and prevents double-counting internal data.
Be explicit about overlap. If an SME is relying on the same internal dataset you 
already used, note it and avoid double-counting. Treat their input as a refinement rather 
than a brand-new piece of evidence.
If SMEs are unavailable, document the assumptions you would have tested with 
them and flag triggers to revisit the estimate later.
 Step 4: Document Your Bayesian Reasoning
Write down how each source moved your belief and why. This is your audit trail and 
your future update guide.ChapTer 14  how To Blend da Ta

275Your note should include
• Prior: The baseline you started with and why it was chosen
• First update: How internal evidence shifted or widened the range
• Second update: How the SME context refined it further
• Final posterior: The range you will use in the model
• Assumptions and triggers: The conditions that would cause you to 
revisit this number
The power of Bayesian blending is that it turns “garbage in, garbage out” into 
“transparent in, defensible out. ” You do not need perfect sources. You need honest, 
traceable reasoning about imperfect ones. Each source may be limited on its own. 
Combined thoughtfully, they produce something stronger and more useful than any 
single input. Here’s what good documentation looks like when you apply Bayesian 
reasoning in a real assessment in Table 14-2.
Table 14-2.  Example of a transparent audit trail showing how evidence shifts 
beliefs through successive updates
Step Description Example Entry
Prior Starting belief and 
rationale“23% industry phishing rate; widened to 15–30% for survey uncertainty.”
First Update Internal evidence adjustment
“one confirmed incident/18 months ≈ 10–22% annual 
probability; limited logging coverage.”
Second Update SMe refinement “Control improvements →  8–20%, p50 ≈ 12%; forward- 
looking view.”
Posterior Final modeling input “Use 8–22% ( p50 = 12%); revisit after next two quarters 
of data.”
Assumptions/TriggersConditions for re- evaluation“Training stable; logging ≥
 95%; revisit if B eC activity 
spikes.”Chap Ter 14  how T o Blend da Ta

276 Worked Example: Phishing Frequency
Let’s see Bayesian blending in action.
Scenario:  Estimate the organization-level frequency of at least one successful 
phishing incident in the next 12 months.
 Step 1: Establish Your Prior (External Baseline)
An industry study reports that 23% of companies in our sector experienced at least one 
successful phishing incident in the past year. Assuming our organization is typical of  
that population, this implies a prior probability of roughly 23% that we would 
experience at least one such incident in a given year. Because the data is survey-based, 
we use Chapter 10 to widen the range to 15–30% to account for quality and reporting 
uncertainty. This represents our prior belief before considering internal evidence.
 Step 2: First Update (Internal Evidence)
Now we compare our organization to that baseline. Our ticketing and incident records 
for the past 18 months show three phishing emails that bypassed filtering and reached 
users and one confirmed successful incident with credential capture. Logging coverage 
is about 80% across relevant mailboxes and business units.
Two quick adjustments keep us honest.
First, we need to stay consistent on the unit of measure. The external prior is the 
chance our company has at least one successful incident this year, so we need to 
interpret internal evidence in the same unit.
Second, coverage matters. With one confirmed success in 18 months and partial 
visibility, a reasonable internal update is that our organization’s annual chance of at 
least one success falls somewhere around 10% to 20%, with a wide interval to reflect thin 
data and incomplete coverage. These values are illustrative; the point is how you reason 
through evidence.
Internal evidence points slightly below the industry prior, but with high uncertainty 
due to sample size and coverage. We record 10% to 22% as a working internal 
view, median at 15%, and carry forward the uncertainty rather than declaring a 
precise number.ChapTer 14  how To Blend da Ta

277 Step 3: Second Update (SME Input)
We present the external prior and our internal evidence to the SME group: security 
awareness, email security operations, and incident response. The awareness team 
reports that training coverage expanded six months ago, and phishing-simulation click 
rates dropped significantly. Email operations notes a recent filtering upgrade and tighter 
tuning against attachment-borne campaigns. Incident response cautions that threat 
patterns shift quickly and that business email compromise attempts often spike during 
seasonal vendor payment cycles.
The SME consensus is that the industry number feels high for us, given recent 
control changes, but that internal data probably understates risk because of logging 
blind spots and because simulations are not the same as real attacks. The group 
proposes an 8–20% range, P50 at 12%, as a forward-looking estimate for the next 12 
months, with a plan to revisit after two quarters of improved logging. We record these 
numbers as the current best estimate.
The complete process is shown in Figure  14-3 .
Figure 14-3. Refining estimates through updating
 Step 4: Document Your Bayesian Reasoning
Final estimate for modeling:  8–22% chance of at least one successful phishing incident 
in the next year, P50 at 12%.
• Prior (external):  23% survey point widened to 15–30% for 
quality limits.
• First update (internal):  One confirmed success in 18 months with 
≈80% coverage supports a 10–22% range, midpoint ≈15%, reflecting 
thin data and possible undercount.ChapTer 14  how To Blend da Ta

278• Second update (SME):  Control changes and operational context 
support 8–20%, midpoint 12%, with an explicit plan to revisit after 
logging improves.
• Assumptions and triggers:  Training and filter efficacy remain stable; 
logging coverage reaches ≥95%; any material change in attack mix or 
a confirmed BEC attempt triggers a refresh.
 What You Just Did
You blended three different kinds of evidence without discarding any of them. The 
population base rate set the context, internal records provided a local reality check, and 
SME judgment added forward-looking insight that data could not yet show. You did not 
pretend to eliminate uncertainty; you managed it. You showed your work, aligned units, 
and created an audit trail that others can follow, challenge, or update.
 Building Confidence over Time
Your first few assessments using Bayesian blending might feel uncertain, and that’s 
normal. You’re learning to think probabilistically about complex systems, and that kind 
of thinking takes repetition.
Over time, something shifts. As you apply this approach again and again:
• Your Bayesian intuition sharpens. You start recognizing which priors 
are strong and which are fragile.
• You develop better judgment about how much each update should 
move your belief.
• You build a library of vetted priors that you can reuse and refine 
rather than reinventing them.
• Stakeholders begin to trust your analyses because they can see the 
reasoning behind them.
Most importantly, you stop feeling paralyzed by imperfect data. Instead of waiting for 
the perfect dataset, you learn to make sound, defensible decisions with the information 
that’s available.ChapTer 14  how To Blend da Ta

279That is the gift Reverend Bayes gave us three centuries ago: a way to reason honestly 
under uncertainty without demanding certainty first.
 Chapter Summary
The Big Idea: Bayesian reasoning provides a structured approach to combining external, 
internal, and expert data into a unified, coherent view of risk. It replaces “pick a number” 
analysis with transparent, evidence-based reasoning that adapts as new information 
appears.
Key Takeaways
• Bayesian reasoning isn’t only about equations. It’s also a mindset 
for updating beliefs as evidence accumulates.
• Start with your strongest available baseline (often an external dataset); then refine it with internal data and expert judgment.
• Use transparent documentation to show how each source shifted your belief and why; that audit trail is what makes your analysis defensible.
• You don’t need perfect data—just disciplined logic and honesty about uncertainty.
• The “garbage in, garbage out” problem disappears when your reasoning is visible, traceable, and open to revision.
• With practice, Bayesian blending sharpens intuition, builds stakeholder trust, and accelerates decision-ready analysis.
Bottom Line: Blending data isn’t about averaging numbers. It’s about systematically 
updating your beliefs using evidence. The result is a defensible, auditable estimate that grows stronger over time and aligns perfectly with FAIR and modern CRQ principles.
 What’s Coming Next
In Chapter 15, we set everything in motion. You’ll take the blended estimates from this chapter and use them in a complete cyber risk quantification analysis, building full 
scenarios, running Monte Carlo simulations, and turning probabilistic reasoning into 
actionable decisions.Chap Ter 14  how T o Blend da Ta

PART IV
Risk Assessment in 
Action

