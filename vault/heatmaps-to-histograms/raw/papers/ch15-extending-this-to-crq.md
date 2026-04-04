---
title: "Chapter 15: Extending This to CRQ"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 15
pages: 303-319
ingested: 2026-04-04
---

# Chapter 15: Extending This to CRQ

283
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_15CHAPTER 15
Extending This to CRQ
I love it when a plan comes together.
—Hannibal, The A-Team  (1980s TV)
When I was learning quantitative risk, before I ran my first analysis, I felt like I 
understood the individual parts, but I didn’t understand how they all fit together. It was 
like the time I dumped the contents of the IKEA Storklint six-drawer dresser onto my 
living room floor, only to realize the instructions were missing.
I could clearly identify every piece: the panels, the top, the back panel, the handles, 
the screws, and the nails. But how did it all fit together?
If this book, especially Chapters 7 through 14, feels like that IKEA Storklint dresser 
dumped across your living room floor with no instructions, congratulations. You just 
found the instructions. And, just like IKEA furniture, you may still be a little confused 
even with the instructions. You might have to take half of it apart because something is 
upside down, then put it back together. That’s perfectly fine. You’re on the right track and 
moving forward.
Before we begin, let’s calibrate where we are.
This chapter will show you how to assemble all the pieces of a quantitative risk 
analysis. Everything up to this point, including this chapter, applies to any flavor of quantitative risk. You can use it for cyber, technology, or even operational risk.
It’s also broad enough to strengthen any model, whether you are using FAIR, the 
techniques from Doug Hubbard’s books, your own approach, or something else. If you 
never move beyond this chapter, that’s perfectly fine. You’ll still be able to run credible, 
defensible risk analyses.
If you want to use FAIR, think of this chapter as the foundation. The next chapter, 
Chapter 16, will show how what you build here maps neatly into the FAIR model. Everything in this chapter is fully compatible with FAIR, but can easily be integrated into 
any other new or existing CRQ program.

284 The Baby-Steps Map
At its simplest, assembling a risk analysis is this, seen in Figure 15-1.
Figure 15-1.  The CRQ assembly map
The rest is just practice.
Do these in order, and don’t worry if it still feels slow or mechanical at first. That’s 
how every modeler starts.
 1. Write One Crisp Risk Scenario (A-T-E)
See Chapter 7.
• Describe a plausible event in one paragraph: the Asset, the Threat, and the Effect.
• Define your timeframe, scope, and what is out of scope.
• If another person could picture the same event, your scenario is ready.
 2. Pick the Relevant Loss Forms
See Chapter 8.
• Choose one or two loss forms that matter most.
• Keep it manageable. The goal is to learn the process, not cover every possible impact.
• Most analysts start with productivity and response loss.
 3. List the Minimum Data You Need
See Chapters 9 and  10.
• Ask yourself, “What do I need to estimate frequency and 
magnitude?”Chapter 15  extending this to CrQ

285• Jot down external, internal, and expert sources that could answer 
those questions.
• Don’t collect yet. Just identify what’s required.
 4. Grab an External Base Rate
See Chapter 11.
• Look for industry benchmarks or research reports that approximate how often events like yours occur.
• Treat these as a starting point, not the truth.
• Note the quality of each source using the confidence grades you learned earlier.
 5. Pull One Internal Signal
See Chapter 12.
• Find something observable in your environment that relates to the scenario.
• It could be an incident count, an audit finding, or a system log pattern.
• This anchors your analysis to real organizational experience.
 6. Ask One to Three SMEs for a Range
See Chapter 13.
• Talk to people who understand the process or system best.
• Ask for low, typical, and high estimates (P5, P50, P95).
• Document what they assumed when giving those numbers.
 7. Vet and Adjust Your Data
See Chapter 10 again.
• Check for consistency and bias.
• Apply the widening rules for lower-confidence sources.
• Ask: “Would someone else believe this range if they saw the sources?”Chapter 15  extending this to CrQ

286 8. Blend Your Three Sources
See Chapter 14.
• Combine external, internal, and SME data into a single range for 
frequency and magnitude.
• Record how each changed your belief.
• This becomes your model input.
 9. Drop the Ranges into the Spreadsheet
See Chapter 5.
• Use your preferred tool to perform a Monte Carlo simulation (simulate thousands of possible outcomes).
• Don’t worry yet about fine-tuning.
• You’re just generating the shape of possible loss.
Go to www.heatmapstohistograms.com in the Tools & Downloads section, and 
download the risk analysis spreadsheet for Chapter 15. It’s the same as the one for Chapter 5, but adjusted to better handle CRQ results in the millions of dollars. 
Alternatively, you can vibe code it:
 GENAI PROMPT : CRQ RISK ANALYSIS
i’m learning cyber risk quantification and want to run a simple Monte Carlo simulation.
Use these inputs to estimate annualized loss exposure:
Frequency range (events per year)
• p5: [insert value, for example 0.05]
• p50: [insert value, for example 0.10]
• p95: [insert value, for example 0.20]Chapter 15  extending this to CrQ

287Magnitude range (loss per event in USD)
• p5: [insert value, for example $250,000]
• p50: [insert value, for example $600,000]
• p95: [insert value, for example $1,500,000]
do the following:
 1. Choose the best distribution for both frequenc y and magnitude.
 2. s imulate 10,000 trials.
 3. F or each trial, combine frequency and magnitude to get the total annual loss.
 4. r eturn a five-number summary
 5. Calcula te the mean, mode, median (P50), and P95.
 6. g enerate a short text interpretation in plain language, such as:
“typical annual loss is about $ x  with a Y percent chance of exceeding $Z.”
 7. p lot a simple histogram of simulated losses.
 8. p lot a loss exceedance curve.
 10. Interpret the Results
See Chapter 6.
• Review your histogram, five-number summary, and loss 
exceedance curve.
• Check for logic: Are results in the right order of magnitude?
• Translate findings into plain language: “We expect about X per year, with a Y percent chance of exceeding Z. ”
  EXERCISE 15-1: DO THIS ON Y OUR OWN
take one or more of the risk scenarios you built in Cha pter 7 and follow the steps above to 
perform a complete, end-to-end risk analysis.Chapter 15  extending this to CrQ

288  IS IT THA T SIMPLE?
some early F air  practitioners, myself included, learned the model in a different era. i  was 
doing my first assessments in the mid-2010s, when most of us collected a handful of inputs, 
interviewed some sMes, and dropped ranges into a spreadsheet. t hat was the norm. i t worked 
well enough, and for many decisions it still does.
in this chapter, i am asking you to do more. t he three-source model, the vetting framework, 
and the blending step are new for many analysts. t hese ideas add cognitive load. t hey ask 
you to slow down, to check assumptions, to compare sources, and to be deliberate about 
uncertainty. t hat is intentional.
there are two reasons for this. First, i do not want us taking shortcuts in the rush to implement 
CrQ. shortcuts make your results harder to defend, and they make it harder to repeat or 
explain an assessment later. second, we now have ai -assisted workflows that remove most of 
the busy work. ai  can scrape data, summarize reports, draft questions, and organize evidence 
in minutes. t hat gives you more time to think, to review, to challenge your inputs, and to 
improve the quality of your decisions.
so yes, the basic process is simple. You can collect a few data points, talk to a few sMes, and 
get a directional answer in an afternoon. But you now have the tools to slow down where it 
matters and raise the quality of your work without slowing down your overall pace.
 Running a What-If Analysis
Running a what-if analysis is a simple and high-value add-on to any risk assessment. It requires only a small amount of extra effort but delivers insights that decision-makers 
and stakeholders care about.
The concept is straightforward. You run two (or more) versions of the same analysis 
and compare them.
• Baseline risk: The first model represents risk as it currently exists, 
given current controls, the threat environment, data volume, and 
other relevant factors.
• After risk: The second model represents a possible future state where 
one or more risk factors have changed.Chapter 15  extending this to CrQ

289An example plotted on a loss exceedance curve is shown in Figure  15-2 .
Figure 15-2. Example loss exceedance curve of how an org-wide MFA 
implementation reduces risk
This is one of the most common analyses I perform. You can do it with the 
spreadsheet example in this book by taking your model from Exercise 15-1 , copying the 
sheet, and changing one variable.
Try adjusting
• The frequency  input (how often the event might occur)
• The magnitude  input (how much it costs when it happens)
• Or both together
Some common what-if scenarios I’ve modeled include
• Implementing a new control, such as MFA
• Automating failover for a critical service
• Expanding into a new market or region
• Increasing vendor or cloud dependenciesChapter 15  extending this to CrQ

290• Scaling user volume or transaction load
• Removing an existing control to free up resources
• Accounting for new regulatory fines or penalties
• Improving data quality or monitoring coverage
Each of these tells a different story about how your risk might shift if the 
environment, your operations, or your assumptions change.
A what-if analysis helps you see not only what  could change your risk, but how much  
it would matter if it did. It is an easy way to explore uncertainty and test the sensitivity of 
your model without adding more math or tools.
In Chapter 18, we will build on this idea by introducing The Six Levers That Move 
Risk , a structured way to think about all the forces that push your curve up, down, left, or 
right. What-if analysis is your first step toward mastering those levers.
 Return on Security Investment (ROSI)
At some point in every analysis, someone will ask the question that matters most: “If we 
spend this money, what actually changes?” That is where Return on Security Investment, 
or ROSI, comes in.
ROSI sounds like a financial term, but in security, it means something different. In 
business, Return on Investment, or ROI, measures how much profit an investment earns. 
You spend one dollar, you make one dollar and a quarter, and your ROI is 25%.
Security does not work that way. We rarely make  money from security. We avoid 
losing  it. The “return” we measure is loss avoided, not profit gained. When we use 
the phrase “security investments, ” we are using the term informally. In finance, an 
investment generates profit. In security, the economic value comes from reducing 
expected loss.
Even though security does not generate revenue, improving cost efficiency still 
contributes to economic profit over time. Avoided loss becomes money the company 
keeps, and money the company keeps improves long-run financial outcomes. The 
improvement is probability weighted rather than guaranteed, but it still matters.Chapter 15  extending this to CrQ

291 How ROSI Works
In a risk model, ROSI simply compares two versions of the same scenario, just like we did 
earlier, with one extra step:
 1. Baseline risk: What expected loss looks like today
 2. After risk: What expected loss looks like after a control is in place
The difference between the two is the expected annual loss avoided. Divide that 
reduction by the cost of the control, and you get the ROSI ratio.
ROSI = (Mean Loss Before – Mean Loss After) ÷ Cost of Control
A ROSI of 1.0 means you avoid one dollar of expected loss for every dollar you 
spend. That is the break-even point. A ROSI above 1.0 means the control is cost-effective 
because it avoids more expected loss than it costs. A ROSI below 1.0 means you may be spending more than the loss you are reducing.
This simple version of ROSI is all you need for most day-to-day decisions.
  ROI VS. ROSI (AND WHY FINANCE USES A DIFFERENT STRUCTURE)
Finance roi uses a different formula. it subtracts the cost of the investment before dividing:
ROI = (Gain minus Cost) ÷ Cost
security uses rosi because our return is avoided loss, not profit. if you ever need to translate 
a rosi result into finance language, you can express it using a net version that mirrors the roi 
structure:
ROSI (net) = (Mean Loss Avoided minus Cost of Control) ÷ Cost of Control
in this form, the break-even threshold is zero instead of one.
You do not need this version for operational C rQ work. Use it only when a CF o or finance 
leader asks for “ roi” in the traditional sense. When a decision moves to the executive or 
financial level, the organization may also use NPV  (net present Value, a way to compare costs 
and benefits over time) or IRR  (internal rate of return, a way to compare returns across 
projects). You do not need to calculate these for everyday risk analysis. it is enough to know 
they exist and that finance teams use them for long-term or capital-intensive decisions.Chapter 15  extending this to CrQ

292think of rosi as your operational tool. t hink of roi , np V, and irr  as the tools you switch to 
when a decision rises to the financial leadership level.
How to Explain ROSI to Finance
Finance teams think in terms of profit, cash flow, and return on capital. t he simplest way to 
bridge the gap is“ROSI shows how much expected loss we avoid per dollar spent. If you want it in traditional 
ROI form, we can restate it as net benefit divided by cost.”
that one sentence translates the analysis into the structure finance already uses.
For readers who want to go deeper into how rosi fits into multi-year capital planning 
alongside npV, irr, and the gordon–Loeb model, the F air  i nstitute provides an extended 
treatment of these methods in its white paper on measuring cyber risk reduction.
 Why We Use the Mean
When calculating ROSI, use the mean  (the average outcome from all simulated trials).
The mean represents the long-term expected loss—what you would expect to 
happen if you repeated the same year thousands of times.
That’s why it’s the best fit for ROSI, which is essentially a budgeting decision: “How 
much risk do we expect to reduce each year for this investment?”
If you base ROSI on P95, you’ll make every investment look better than it really is, 
because you’re assuming every year is almost catastrophic.
If you use the median, you’ll understate risk, because you’re ignoring the rare but 
painful years that drive long-term loss.
The mean  balances both. It shows what happens over time, not just in a good or bad 
year. The differences between the three are demonstrated in Table 15-1.Chapter 15  extending this to CrQ

293Table 15-1.  Three ways to report risk and when to use them
Metric What It Means When to Use It Notes
Mean the long-term 
average lossrosi and cost–benefit 
decisionssensitive to large outliers but 
best for overall exposure
Median (P50) the most typical 
yearCommunicating what’s 
“normal”doesn’t reflect rare but costly 
years
P95 a bad but plausible 
yearstress tests and resilience 
planningtoo conser vative for rosi ; 
overstates benefits
 A Simple Example
Let’s say your model shows that average annual loss drops from $600,000 to $400,000 after adding automated failover.
The program costs $100,000 a year.
ROSI = (600K – 400K) ÷ 100K = 2.0
That means for every dollar spent, you reduce two dollars of expected loss. This 
value is the ROSI ratio: the simplest expression of how much benefit you get per dollar 
invested.
 Understanding the ROSI Ratio
The ROSI ratio tells you how much value you get for what you spend.
It looks like a single number, but it carries a story, as seen in Table 15-2.Chapter 15  extending this to CrQ

294Table 15-2.  Understanding the ROSI ratio
ROSI Ratio What It Means How to Use It
> 1.0 the investment reduces more  
loss than it costsUsually worth considering
≈ 1.0 Break-even double-check assumptions or combine 
with other benefits
< 1.0 Costs more than the modeled  
benefitConsider alternatives or non-quantitative justification
You can also flip the equation to show cost per dollar of loss avoided:
Cost Efficiency = Cost ÷ (Mean Loss Before – Mean Loss After)
Both approaches describe the same trade-off.
If your ROSI is 2.0, then your cost per dollar of loss avoided is 0.5: you spend 50 cents 
to save a dollar.
If your ROSI is 0.8, then your cost per dollar of loss avoided is 1.25: you spend a 
dollar and a quarter to save a dollar.
Both tell the same story. Use whichever version your audience prefers.
 ROSI IS A DECISION SUPPOR T TOOL, NOT A PROMISE
it simplifies a complex judgment into something you can talk about in a meeting.
some investments with low rosi may still be mandatory (e.g., regulatory controls or customer 
requirements). others may have high rosi but be hard to implement. t he point is not to let the 
number decide for you, but to use it to guide discussion.
 Account for Control Success Probability
Not every control works perfectly every time. Some are hard to deploy, some depend on users doing the right thing, and some simply fail in certain conditions. When estimating 
ROSI, it helps to adjust the benefit based on how often the control works in practice.Chapter 15  extending this to CrQ

295A simple way to do this is to ask an SME:
“Out of 10 or 100 times this control is needed, how often does 
it work?”
If they say the control succeeds about 80% of the time, then only 80% of the modeled 
loss reduction should count toward the benefit. For example, if your model shows a $200,000 annual reduction in expected loss and the control is successful 80% of the time, the adjusted benefit is $160,000.
This keeps you from overestimating the value of controls that are unreliable or 
inconsistent and helps avoid enthusiasm bias.
 ROSI vs. Risk Reduction
ROSI is helpful, but it’s not the only way to talk about value. Sometimes, it’s clearer to skip the ratio and show results directly in dollars, as seen in Table 15-3.
Table 15-3.  ROSI vs. risk reduction
Metric Description Example
ROSI ratio of benefit to cost “every dollar spent reduces two dollars of loss.”
Risk Reduction dollar value of benefit “expected loss drops by $200,000 per year.”
Both are valid.Use ROSI when you are comparing options or need a simple ratio to talk about value 
for money.
Use risk reduction when you just need to show impact in dollars. When you escalate 
a decision to finance or the board, you can translate ROSI into traditional ROI, NPV , or IRR if they ask for it.
 Closing the Loop
You just built your first complete quantitative cyber  risk analysis. You learned how to 
take a clear scenario, add data from multiple sources, run a simulation, and translate the results into business language that leaders understand.Chapter 15  extending this to CrQ

296From here, you can already do more than most risk teams ever attempt. You can 
measure uncertainty, test assumptions, and show how decisions change risk in dollars 
and probability instead of color and intuition.
If you stopped here, you’d have everything you need to run credible, defensible 
CRQ analyses in any domain. But if your organization already uses FAIR, or you plan to 
introduce it, you’re ready for the next step.
The next chapter will show how everything you built here maps directly into the 
FAIR model. You’ll see how each element you just assembled fits within FAIR’s structure, 
giving you a shared language to scale your work across teams.
For now, take a moment to appreciate what you’ve built.
This is the point in the IKEA project where the dresser stands on its own, and it 
finally looks like the picture on the box.
 Where to Go from Here: The Bigger Field
There’s a memorable exchange of dialogue from the last installment of the Star Wars  
prequel series, Revenge of the Sith.  Emperor Palpatine tells Anakin about a power so 
great it can even save people from death. Anakin asks where he can learn this power. The 
Emperor replies, “Not from a Jedi. ”
I think of that line every time someone asks me how to learn cyber risk 
quantification:
Not from a cybersecurity book.
Cybersecurity gives us the problems, but the solutions come from broader 
disciplines that have studied uncertainty for centuries.
CRQ isn’t a subfield of cybersecurity. It’s an age-old business forecasting applied 
to technology. Quantifying uncertainty connects you to a much older lineage of 
statisticians, forecasters, actuaries, economists, and decision scientists who have been 
wrestling with the same questions for hundreds of years.
If you want to keep learning, here are some directions worth exploring.Chapter 15  extending this to CrQ

297 Books That Build Judgment and Intuition
• Against the Gods: The Remarkable Story of Risk  by Peter 
L. Bernstein: The historical and philosophical backbone of modern 
risk thinking
• Fooled by Randomness  by Nassim Nicholas Taleb: A philosophical, 
sometimes provocative exploration of probability, luck, and 
overconfidence
• How to Measure Anything  by Douglas Hubbard: A foundational text 
on measurement and uncertainty, not just for technology
• Mistakes Were Made (But Not by Me)  by Carol Tavris and Elliot 
Aronson: A sharp, accessible look at self-justification, cognitive 
dissonance, and why smart people cling to bad decisions
• Superforecasting  by Philip Tetlock and Dan Gardner: How to 
improve calibration and probabilistic reasoning in real life
• The Flaw of Averages  by Sam L. Savage: Why relying on single-point 
estimates can lead to wrong decisions and how to fix it
• The Signal and the Noise  by Nate Silver: How to separate meaningful 
signals from noise in data and prediction
• The Wisdom of Crowds  by James Surowiecki: Why collective 
judgment often outperforms experts and how to make it work
• Thinking, Fast and Slow  by Daniel Kahneman: A masterclass in 
human bias, intuition, and why we misjudge probability
• Thinking in Bets  by Annie Duke: How to make better decisions when 
you can’t be certain of the outcome
 Fields That Share DNA with CRQ
• Actuarial science : The original discipline of quantifying financial 
and operational risk long before cybersecurity existed
• Behavioral economics : How incentives, bias, and cognitive 
shortcuts shape risk decisionsChapter 15  extending this to CrQ

298• Decision science: The formal study of how people make choices 
under uncertainty (Ron Howard, Howard Raiffa)
• Expert judgment and elicitation: The science of extracting, calibrating, aggregating, and validating expert knowledge when data 
is sparse or uncertain (Cooke Method, structured interviews, Delphi)
• Forecasting: Using data, models, and probability to predict future 
outcomes (weather, supply chains, macro trends)
• Metrology: The science of measurement: how we define, evaluate, and improve measurements, especially when data is imperfect, 
indirect, or hard to observe
• Superforecasting: Human-driven predictive judgment using 
calibration, feedback, and prediction markets (Good Judgment 
Project, Tetlock, Metaculus)
• Systems thinking: Viewing risk as the emergent property of 
interconnected parts, not isolated events
 Communities Worth Following
• FAIR Institute: The largest community for cyber risk quantification
• SIRA (Society of Information Risk Analysts): The intellectual crossroads of applied risk, statistics, and decision analysis
• Good Judgment Open/Metaculus: Forecasting platforms that sharpen calibration and probabilistic thinking
 Chapter Summary
The Big Idea: Quantitative risk analysis is not complicated once you see how the pieces fit together. By following a simple, repeatable process: scenario, data, simulation, 
interpretation, you can turn uncertainty into structured, decision-ready insight.Chapter 15  extending this to CrQ

299Key Takeaways
• You can build a complete CRQ model  using only a clear scenario, 
three data sources, and a spreadsheet.
• The goal is not precision but structure.  The point is a consistent 
way to express risk in dollars and probability, not to chase 
decimal points.
• A quick  what-if analysis  shows you what matters.  It reveals which 
factors move your risk and how much they matter.
• ROSI connects  risk reduction  to cost.  It translates your model 
results into a language business leaders already understand and can 
be translated into traditional ROI when you work with finance.
• CRQ reframes risk conversations.  You move from “Is this risky?” 
to “How much risk are we willing to accept, and what are we getting 
for it?”
Bottom Line:  You now have every part of a working quantitative risk analysis. You 
can describe a scenario, collect data, blend sources, run a simulation, test assumptions, 
and show clear trade-offs in business language. This is the foundation of all modern 
CRQ, regardless of framework.
 What’s Coming Next
In Chapter 16, you’ll see how everything you built here fits inside the FAIR model. We’ll 
map your inputs, outputs, and terminology to FAIR’s structure so you can scale your 
work across teams and programs without changing the underlying logic.
You’ve built the engine. Next, we’ll install it in the FAIR chassis.Chapter 15  extending this to CrQ

