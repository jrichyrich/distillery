---
title: "Chapter 5: Your First Quantitative Risk Assessment"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 5
pages: 93-113
ingested: 2026-04-04
---

# Chapter 5: Your First Quantitative Risk Assessment

67
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_5CHAPTER 5
Your First Quantitative 
Risk Assessment
This is the beginning of a beautiful friendship.
—Rick Blaine, Casablanca
Time to keep my promise from Part 1. We’re going to step into quantitative analysis, 
but in a way that’s not going to melt your brain. We’re going to start with a very simple 
tool: the Monte Carlo method, which provides a glimpse into what the future could look 
like by simulating many outcomes based on what we know, including our uncertainty. 
It’s the backbone of CRQ and is commonly used in many disciplines like finance, 
economics, medicine, military, and engineering, just to name a few.
 What Is Monte Carlo Simulation?
Monte Carlo simulation is a method that uses randomness to explore potential future events. Despite its fancy name, it’s simply a tool that helps us understand uncertainty by 
running thousands of “what if” scenarios.
Rather than forecasting specific results, Monte Carlo methods reveal the range of 
possibilities through repeated sampling of potential scenarios. Recall from the previous 
chapter that we always articulate our data in ranges  because we’re performing a forecast, 
and we can’t predict the future exactly. We’re not fortune-telling; we’re methodologically exploring uncertainty.

68 THE ORIGINS OF MONTE CARLO
The concept is elegantly simple: it involves a set of mathematical algorithms that 
utilize random sampling to solve problems. Monte Carlo simulation was first developed 
systematically during the Manhattan Project, the United States’ program to develop nuclear 
weapons during World War II. John von Neumann and Stanis ław Ulam developed a method to 
solve neutron diffusion problems in nuclear weapons development, as well as other complex 
problems in nuclear physics (Dunn & Shultis, 2011 ).
They named it “Monte Carlo” after the famous casino in Monaco, which was a tribute to 
Ulam’s love of gambling (Dunn & Shultis, 2011 ). The name was fitting. Just as casino games 
rely on chance and probability, their new method used randomness as a tool to solve problems 
that were previously difficult or impossible to solve otherwise.
 How Monte Carlo Works in Risk Analysis
Monte Carlo simulation is the next step that takes those ranges and uses randomness to 
simulate values within those ranges, clustering around the most likely value while also 
exploring the outer bounds.
In CRQ, we’re simulating years  because we annualize everything. Think of it this 
way: every time you run a Monte Carlo simulation, you’re simulating the next 12 months. 
For example, if it’s December 2026 and your Monte Carlo is set to run 10,000 trials (we 
call them trials because not every Monte Carlo simulation represents a year), you’re 
simulating 10,000 different versions of 2027.
After running these simulations, we examine the distribution of results. What are the 
outliers? What are the chances of something at the outer bounds occurring? How do the 
results cluster around the most likely value, and what are the chances of that happening? 
It’s a quick and easy tool to gain insight into what the future could look like.
In cybersecurity, we constantly deal with uncertainty. How often will we get 
breached? How much will it cost? Instead of throwing our hands up and saying “we don’t 
know, ” Monte Carlo lets us work with that uncertainty in a structured way.ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

69 Your First Monte Carlo Simulation
Let’s learn by doing with a simple exercise that will show you exactly what Monte Carlo is.
 EXERCISE 5-1: THE COIN FLIP EXERCISE
Step 1: Real Life   
Find a coin and flip it ten times. record the results on paper, numbered 1 to 10, writing “ heads” 
or “Tails” for each flip. You probably got something like six heads and four tails, not exactly five 
and five. It’s also possible you got two and eight, one and nine, or even zero and ten, because 
coin flipping is random and your previous results have no influence on your next result.
Step 2: Digital Simulation  
Now simulate the same thing in excel:
 1. Type this formula into cell A1:  =IF(raND()>0.5,” heads”,”Tails”).
 2. Copy this cell: Ctrl+C (PC) or Cmd+C (Mac).
 3. Select cells A1 through A10, then paste:  Ctrl+ v (PC) or Cmd+ v (Mac).
Compare your physical coins to the results in your excel spreadsheet. We have different 
outcomes, but similar patterns.Step 3: Scale It Up  
Now extend your excel simulation to 1,000 flips:
 1. Select the range a 1 through a 1000.
 2. P aste the formula again.
 3. In cell B1, type this formula:  
=CoUNTIF( a1:a1000,“ heads”).
 4. In cell B2, type this formula:  
=CoUNTIF( a1:a1000,“Tails”).
The last two steps count the number of heads and tails in our simulation.Watch what happens when we refresh the simulation:
• PC users: Press F9
• Mac users: Press Cmd + =ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

70You’ll see roughly 500 heads and 500 tails each time, but the exact numbers change each 
time. This demonstrates Monte Carlo’s core mechanics in action. We can now observe consistent patterns emerging from randomness.
You just did a Monte Carlo simulation! The only difference between this coin flip simulation and 
a risk analysis is complexity, not concept. Instead of heads and tails, we use ranges, but the fundamental approach remains the same.
A downloadable Excel example of this exercise is available at www.
heatmapstohistograms.com in the Tools & Downloads section.
 THE LAW OF LARGE NUMBERS
open the spreadsheet you created for Exercise 5-1, and refresh the sheet. Watch the 
proportion of heads vs. tails for 10 flips and compare with the proportion for 10,000 flips. 
observe the differences and refresh at least ten times.
Do you notice something interesting?
With ten flips, there can be wide variance: sometimes 50/50, 70/30, 80/20, maybe even 100/0. 
however, with 10,000 trials, we observe a much closer to 50/50 ratio. Usually not exactly 
50/50, but much closer to 50/50 than the ten flips.Why?You are observing a fundamental statistical principle known as the Law of Large Numbers. 
Though individual flips are uncertain, the underlying probability distribution tells us that heads and tails each have a 50% likelihood of occurring. When simulating trials, such as coin flips or a cyber risk scenario, the more trials you run, the closer the simulation gets to the expected value. This is the Law of Large Numbers at work: more trials mean less variation from the expected value.
This is particularly important
 in CrQ because, unlike coin flipping, we don’t know the expected 
value. We want to run enough trials to reduce the amount of variation from the expected value 
as much as possible. In my experience, the minimum is 10,000 trials, but 50,000 is better to accurately capture outlier results (extreme values that fall far from the typical range). 50,000 trials were no small task when these methods were being developed on early computers, but today, even a semi-modern smartphone can make quick work of this job.ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

71 Forecasting Frequency
Next, we will forecast the frequency of events. Recall from the previous chapter that 
frequency refers to the number of times something occurs. We will combine several 
concepts: uncertainty, frequency, ranges, confidence intervals, and Monte Carlo 
simulation.
 Setting Up the Problem
What are the chances of me losing or damaging my mobile phone in the next 12 months? I’m not sure, a low chance? I’ve had a lucky run over the last several years, but not a 
perfect one. I drop my phone quite a bit, and I’m somewhat forgetful, so the threat is 
not zero. I’m not exactly sure what the next 12 months could look like. In other words, I 
have uncertainty. We can’t eliminate uncertainty, but we can use structured reasoning 
and logic to move our uncertainty from “um, a low chance?” to a numerical range that is 
directionally right.
First, I’m going to do this exercise, and I want you to follow along, gathering your 
own numbers.
 Gathering Historical Data
I’m going to look back five years and gather historical data for this question. Five years is 
enough for this exercise because it provides sufficient historical context while remaining 
relevant to current conditions. Using my memory, I can immediately recall the following 
incidents, shown in Table 5-1.
Table 5-1.  Initial recalled incidents
Device Type Year Incident
iPhone (can’t remember exact model) 2020 Cracked screen, needed replacement
iPhone 13 2022 Cracked screen, needed replacement
iPhone 13 2022 Total device replacementChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

72This is what I can recall, which is essentially using myself as a subject matter expert 
(SME), a concept we’ll learn about in later chapters. 2022 clearly stands out in my mind 
because it was a challenging year: not only did I drop the phone and crack the screen, but shortly after the replacement, I went swimming in the ocean with the phone in my pocket. The salt corroded the charging port, and the side buttons stopped working, necessitating a total device replacement (yeah, I know).
 Verifying the Data
Am I sure? I think so, but I’m not entirely sure, and I also can’t remember which phone I had back in 2020 that required a screen replacement. To obtain this data, I will review my carrier’s billing statements, as well as credit card statements for iPhones, receipts from the local mobile carrier store, and records from a few screen replacement places in my area. This would essentially be equivalent to searching throughout your organization for internal incident data and details surrounding an incident to determine what occurred.
 OUTSOURCE THE MUNDANE
I uploaded PDFs of invoices and credit card statements into Gen aI, instructing it to find any 
charges that fit the parameters outlined above. It did in seconds what would have taken me a weekend, if not more.
I didn’t miss any incidents, but I was able to gather more data on the models of 
phones, as shown in Table 5-2.
Table 5-2.  Updated incident list
Device Type Year Incident
iPhone 11 Pro 2020 replaced cracked screen
iPhone 13 Pro 2022 Cracked screen, needed replacement
iPhone 13 Pro 2022 Total device replacementChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

73Based on SME (me) data combined with cost research, I’ve found that in a five-year 
span, I’ve had two broken screens and one full device replacement. In a good year, that 
means I’ve had zero incidents, and in a bad year, I’ve had a full device replacement and 
one broken screen.
 Forecasting Future Scenarios
But what could my next 12 months look like? This is where we need to do some 
forecasting.
Lower bound (minimum) : Could I have zero incidents in a year? Yes, I’ve had 
several years with no incidents at all. So, my lower bound is 0.
Upper bound (maximum) : Theoretically, I could break an infinite number of 
phones until I run out of money or patience, but that’s not realistic. I need to set a 
rational upper bound that captures plausible worst-case scenarios without being overly 
optimistic or absurd.
Thinking about what could plausibly  go wrong in a particularly bad year:
• One stolen device (complete loss)
• One device damaged beyond repair (like my ocean swimming 
incident)
• One screen crack requiring replacement
That gives me a maximum of three incidents in a single year. While higher numbers 
are technically possible, they fall outside the range of reasonable scenarios I want to plan 
for with 90% confidence.
 PERMISSION TO BE IMPERFECT
We always want to bound both sides of our ranges rationally and eliminate absurd ranges 
because we don’t need to be 100% confident. We’re aiming for 90% confidence in our 
forecast, which means that nine times out of ten, we expect the actual result to fall within this 
range. This gives us permission to be a little more rational and reasonable with our ranges. We 
don’t want our range to be too absurd on either end, just so we can try to capture the entire 
range of possibilities. We want a range that captures a very good range of plausibility.ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

74Typical value (P50): For the most likely value, I will estimate zero incidents per 
year, despite my historical average being 0.6 incidents per year. Here’s my reasoning: My 
threat model has fundamentally changed since my historical period:
• My children are older now and have their own phones, eliminating 
the borrowing risk that led to several incidents.
• After my disastrous 2022 double-incident year, I’ve developed much better handling habits and situational awareness.
• I now use better protective cases and have changed my behavior around water/outdoor activities.
• Three of my five historical years had zero incidents, showing that incident-free years are very achievable for me.
This demonstrates a key principle in quantitative risk: historical data informs but 
doesn’t dictate future estimates. When you have clear evidence that your risk profile has changed, you should adjust accordingly. In my case, the operational changes justify 
expecting my “good years” (zero incidents) to be more representative of my future than 
my overall historical average.
My final forecast for mobile phone incidents for the next 12 months:
• Range (P5–P95): 0 to 3 incidents
• Typical value (P50): 0 incidents
• Confidence level: 90%
 SOME THINGS ONLY A HUMAN CAN KNOW
This book is very a I-forward, demonstrating tasks and pieces of quantitative risk analysis that 
can be outsourced. Be wary of products or models that claim to run analyses completely on 
data and a I alone; they miss things that only humans know, such as the reasons I set 0 for my 
Most Likely value. In cyber risk, there are many things that only humans, the people who work directly in the systems or are aware of the operating environment, know.
Now it’s your turn. Using the same methodology demonstrated above, you’ll forecast 
your own chances of mobile device damage or loss over the next 12 months.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

75 EXERCISE 5-2: YOUR MOBILE DEVICE INCIDENT FREQUENCY
Step 1: Gather Your Historical Data
Using your recollection, fill out this table covering the past five years of incidents:
Device Type Year Incident
‪ ‪ ‪
Step 2: Verify and Complete Your DataSearch through your records to fill in any gaps and verify your memory:
• Carrier billing statements
• Insurance claims
• repair shop receipts
• Credit card statements for device purchases
Use GenAI to help:  ask it to suggest what types of records might contain evidence of device 
incidents or replacements. Upload statements in bulk for easy searching.Update your table above with any additional incidents you discover.Step 3: Create Your Forecast RangeBased on your historical data, create a forecast for the next 12 months. Consider:
• Your historical incident pattern from the table
• Current threat environment (travel, lifestyle changes, work requirements)
• Changes in your behavior or risk profile since your historical period
• any upcoming situations that might increase or decrease your risk
Create your forecast with three values:
• Lower bound (P5): _____ incidents
• Typical value (P50): _____ incidents
• Upper bound (P95): _____ incidentsChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

76Step 4: Validate Your Confidence Level
ask yourself: Are you 90% confident in this range?
• Too wide (100% confident): Your ranges may be unnecessarily broad.
• Too narrow (50–60% confident): You’re probably being too precise.
• Just right (90% confident): Nine times out of ten, the actual result should fall 
within your range.
Make any final adjustments and record your values. We’ll need them later in this chapter.
Some readers may not have had any incidents at all in the last five years, maybe even 
ten years. How do we analyze an incident or risk that’s never happened?
 ZERO INCIDENTS DOES NOT MEAN ZERO RISK, UNLESS…
Some readers may not have experienced any incidents in the past five years, or even ten 
years. This raises an important question: how do we analyze a risk that’s never happened to 
us personally?
Zero incidents do not mean zero risk, unless you’re completely avoiding the activity. The 
only way to truly eliminate mobile phone risk is to refrain from owning or using any mobile 
phone during the entire time period. For everyone else, we carry risk even without a personal 
incident history.
Many companies face this same challenge. They may have never experienced a material data 
breach, ransomware attack, or theft of hundreds of thousands of dollars due to sophisticated 
social engineering, but these remain very real, possible, and plausible threats.
Building a Credible Range with No Personal HistoryLower bound (P5):
 easy, it’s 0.
Typical value (P50): Probably also 0, unless there has been or will be a significant change 
in the threat landscape, business environment, operating environment, control efficacy, or 
personnel that changes your risk profile.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

77Upper bound (P95): We can’t use 0, because an incident is possible. This is where you need 
external data. Use an internet search or Gen aI to find studies, reports, or surveys about how 
often the incident occurs. Use this as a starting point, then adjust up or down based on your 
behavior and risk profile.
Decomposition StrategyIf you’re having trouble estimating your maximum, break it down by incident type:
• Theft : how often in the next five years could your device be stolen?
• Loss : how often in the next five years could you misplace or lose your device?
• Damage : how often in the next five years could you break or damage 
your device?
Consider each separately, then combine for your total maximum range.Working with Fractional Rates
Your maximum might not be a whole number. a s covered in the previous chapter, you can 
express risk as
• once every three years = 0.33 incidents per year
• once every five years = 0.20 incidents per year
• once every ten years = 0.10 incidents per year
Important: Your final range will likely be wider than the example in this chapter because you 
have less historical data to work with. With less information, you need to use broader ranges 
to maintain a 90% confidence level. This is perfectly normal and statistically appropriate. Don’t try to force narrow ranges when your uncertainty is genuinely high.
 Adding Monte Carlo Simulation
We have a good sense of our range, but we can refine our next 12-month forecast by 
incorporating our range into a Monte Carlo simulation using the data. Our ranges show 
us only the boundaries of incidents. Monte Carlo tells us what’s actually probable. What 
are the chances of having two mobile device incidents next year? Ranges don’t tell us 
that; Monte Carlo will.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

78Using the same concepts as the coin flipping example earlier in the chapter, we’ll 
construct a Monte Carlo simulation with 10,000 trials (or in this case, 10,000 years since 
we’re annualizing).
 EXERCISE 5-3: SIMULATE YOUR MOBILE PHONE INCIDENTS
Go to www.heatmapstohistograms.com in the Tools & Downloads section and download 
the spreadsheet for Chapter 5 , exercise 5-3.
In the first tab, fill out the Lower Bound (P5), Typical (P50), and Upper Bound (P95) values you 
estimated from Exercise 5-2. The spreadsheet is set to run 10,000 trials, in other words, 
10,000 phone years.
In the Summary section, notice the results.
• expected events per year:
• Chance of at least one event:
• Probability of exactly one event:
• 95th percentile (events):
The expected events per year may include decimal point values in instances where the 
incident rate is less than once a year. This is a typical scenario and something we frequently 
encounter in cyber risk. Many events, such as data breaches, ransomware, and widespread 
outages, occur less than once a year (sometimes less than once every 10 or 20 years), so it’s 
good to get accustomed to seeing this.
Based on my results, I’ve found some interesting data that goes beyond just the 
range. Here’s what I found.
• I have a 45% chance of experiencing one or more incidents a year.
• However, I only have an 11% chance of experiencing two or more 
incidents per year.
Now we know how often incidents might occur, but that’s only half the story. A single 
cracked screen costs very differently from a stolen phone, and frequency alone can’t tell us our actual financial exposure. To make real decisions about insurance, protection, or 
budgeting, we need to combine our frequency estimates with the financial magnitude of 
each incident type.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

79 UNDERSTANDING DISTRIBUTIONS
There’s always uncertainty when we’re looking at future events. a  distribution is a way of 
capturing that uncertainty based on what we currently know. Instead of providing a single 
answer, a distribution captures the range of possibilities.
For example, when analyzing the potential number of phone incidents next year, we cannot 
provide a single number because we are uncertain about its range, which could be low, high, 
or somewhere in between. a  distribution lets us capture that range.
This same principle applies to any uncertain future event, whether it’s phone incidents, 
cyberattacks, or system outages. There are many distributions that can be used in forecasting 
and risk analysis. In this exercise, we will be using the triangular distribution, which may 
not capture all the complexities of real-world phenomena, but it’s very simple, intuitive, and 
teaches the basics of distributions very nicely. other exercises use different distributions.
Triangular and Beta-P erT distributions use three inputs:  minimum, most likely, and maximum, 
where the middle value is the mode, or the peak of the curve. Percentile-based methods like P5–P50–P95 express uncertainty differently, focusing on your degree of belief rather than 
curve shape. In practice, your P50 often ends up close to the “most likely” point in a triangular 
model, but the two aren’t mathematically identical.
as you continue your journey in risk quantification, you will discover other distributions that 
work very well in risk analysis, such as beta, lognormal, Poisson, and others. each of them has 
its pros and cons and can capture our uncertainty in different ways.
We’re starting with the triangular distribution so that we can focus on the core concepts first. 
after you finish this book and decide to develop your own risk models, you will need to learn 
about other distributions. or if you decide to use prepackaged software for risk quantification 
modeling (from a vendor, a Python library, or an excel spreadsheet that someone else built), 
they will most likely have chosen the distribution for you.It’s useful to know the pros, cons, limitations, and strengths of each distribution so that you 
can defend your results.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

80 Forecasting Magnitude
Now let’s move to the magnitude side of the equation. With our example, I need to 
estimate the cost of such an incident. For simplicity, I’ll assume we don’t have an 
extended warranty and that breakage or loss is not covered by warranty, so we rely on 
insurance. However, the results of our risk assessment can be directly used to inform 
whether we should have those risk mitigations by telling us our annualized risk exposure , 
giving us valuable data for comparison.
I don’t need to find the costs of actual replacements from back in 2020 and 2022, 
but finding those invoices would help with validation. I want to use today’s dollars because we’re forecasting the next year. This is where I list out probable costs of various 
replacements, shown in Table 5-3.
Table 5-3.  Cost research
Item Cost Range Notes
Full cost of the latest iPhone Pro ~$1,000–$1200 adjusting slightly upward for the forecast 
due to rumored price hikes
Full cost of a screen replacement on the latest iPhone Pro$279–$379
range based on model and store ( apple 
vs. aftermarket)
I’m going to use the following values for my distribution:
• Lower bound (P5): $279—The minimum cost I could incur from any incident would be a broken screen repair.
• Typical value (P50): $279—Setting this at the same value since screen damage is the most probable incident type.
• Upper bound (P95): $1,200—Complete phone replacement in worst-case scenario.
 EXERCISE 5-4: YOUR MOBILE DEVICE INCIDENT MAGNITUDE
Now, it’s your turn to estimate the magnitude (cost) of a mobile phone incident. You’ll research current costs and build your own triangular distribution for use in our upcoming Monte Carlo 
simulation.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

81Step 1: Research Current Costs
Use the internet to research replacement and repair costs for your specific phone model . Fill 
out the table below with current pricing:
Item Your Cost Range Your Notes
Full replacement cost for your phone 
model$______–$______ Source: ________________
Screen replacement for your phone 
model$______–$______ Source: ________________
Other common repairs  (optional) $______–$______ Type: __________________
Research Tips
• Check manufacturer websites (a pple, Samsung, Google, etc.).
• Look at authorized repair shops vs. third-party options.
• Consider both new and refurbished replacement costs.
Step 2: Define Your Distribution Parameters
Based on your research, determine your range of loss:
• Lower bound (P5) : $______
• What’s the lowest cost incident you could realistically face?
• Your reasoning:  ________________________________
• Typical value (P50) : $______
• What do you think is the most probable cost for a typical incident?
• Your reasoning:  ________________________________
• Upper bound (P95) : $______
• What’s the worst-case scenario cost?
• Your reasoning:  ________________________________ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

82Step 3: Validate Your Logic
Check Your Distribution Shape
• Is your “typical” value between your lower bound and upper?
• Does the spread make sense for your phone and usage patterns?
• have you considered your most common risk scenarios?
Consider These Factors
• how do you typically use your phone? (office work, outdoor activities, etc.)
• What incidents have you or people you know experienced?
• Do you use a protective case? Screen protector?
• What’s your historical pattern of phone incidents?
Save your estimates! In the next exercise, we’ll combine your magnitude data with frequency 
estimates to run your first complete quantitative risk assessment using Monte Carlo 
simulation.
Now, let’s put frequency and magnitude from Exercise 5-4 together and find out 
what our risk exposure is.
 EXERCISE 5-5: QUANTITATIVE RISK ANALYSIS ON MOBILE PHONE RISK
Go to www.heatmapstohistograms.com in the Tools & Downloads section and download 
the spreadsheet for Chapter 5 , exercise 5-5.
In the first tab, fill out the Lower Bound, Typical, and Upper Bound values for the frequency you estimated from Exercise 5-2. Next, fill out the Lower Bound, Typical, and Upper Bound values 
you estimated for Exercise 5-4.
The quantitative risk analysis will automatically run, providing results in multiple formats.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

83 Congratulations, Your First Quantitative 
Risk Analysis!
You did it! That is a true, end-to-end, quantitative risk analysis! We used the data that we 
had, embraced and measured our uncertainty about future events, and estimated the 
frequency and magnitude of future events.
 What Do All These Numbers Mean?
Your Monte Carlo simulation generated thousands of possible annual loss scenarios. 
The spreadsheet shows you various statistics: mean, median, minimum, maximum, 
and percentiles. But which one represents your “annualized loss exposure”? And what if 
someone just wants to know the cost per incident without frequency?
That’s where experts disagree and where different business needs require different 
answers. Different authorities, from NIST to FAIR to insurance companies, emphasize 
different statistics for different purposes. We’ll explore exactly what each number means 
and when to use which one in Chapter 6, where we learn to communicate quantitative 
risk effectively.
Two Key Concepts to Remember
• Magnitude  (FAIR calls this “Loss Magnitude”):  The potential 
impact per incident (what business continuity teams often need for 
scenario planning)
• Annualized loss exposure  (FAIR terminology):  The annualized 
potential impact, including frequency (what risk teams need for 
budgeting)
 A Note on Terminology: Why We Use FAIR Language
You’ll notice we use “magnitude” and “annualized loss exposure” rather than the 
traditional terms from CISSP , NIST, and other frameworks. This is a deliberate choice 
rooted in intellectual honesty about uncertainty.ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

84Traditional frameworks use “single loss expectancy” and “annualized loss 
expectancy” language that implies false precision and prediction. When someone 
hears “expectancy, ” they naturally think “this is what will happen. ” But that’s not how 
probability works. We can’t predict exactly what will occur; we can only quantify our 
exposure to uncertainty. The term “expected” actually means the average of all possible 
outcomes, weighted by their likelihood, not what we personally think will happen. We 
can’t predict exactly what will occur; we can only describe how uncertain we are about it.
The FAIR standard advanced risk terminology significantly by adopting actuarial 
language that better reflects reality. Actuaries don’t pretend to predict the future; they 
quantify exposure to uncertain financial outcomes. FAIR’s “Loss Magnitude” captures the range of possible costs per incident. “ Annualized loss exposure” acknowledges that 
you’re carrying the financial burden of uncertainty over time, not receiving a prediction 
of specific losses.
Even if you never adopt the FAIR methodology fully, its terminology represents a 
fundamental improvement in how we think and communicate about risk. It moves us 
away from the false precision that has plagued risk management for decades, toward an 
honest acknowledgment of what we actually know and what we don’t know.
This isn’t just semantic preference; it’s about building credibility with stakeholders 
who understand that the future is uncertain and who respect analyses that admit 
uncertainty rather than pretending it away.
 ALE VS. ALE VS. ALE
Be careful when discussing a L e  in risk conversations. People use the same acronym to mean 
three different things:
Annualized loss expectancy:  a single point number representing expected annual loss. This 
is the traditional approach, but it doesn’t capture uncertainty.Annualized loss exposure:
 actuarial thinking that represents your annual risk as a 
distribution or range of possible outcomes. This is what your Monte Carlo simulation produces.Average loss expectancy:
 Some people use a L e  to refer to the average (mean) value from 
their risk calculations.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

85When someone mentions a L e , clarify which version they are referring to. a re they looking for a 
single number for budgeting, a range for scenario planning, or the mathematical average from 
your analysis?
Pro tip:  In conversations, I just say “loss exposure” and drop the “ a.” everyone knows we’re 
talking about annual timeframes, which avoids confusion entirely while making it clear that I’m 
thinking in terms of ranges, not single numbers.
 From Numbers to Decisions
Now that I’ve run a risk analysis, I can see the median of my annual exposure is around $465, with potential bad years reaching $3,300. This raises practical questions: Should 
I invest in a better phone case, buy AppleCare, or get additional insurance? These are 
exactly the types of decisions that quantitative risk analysis enables and concepts we’ll 
cover in later chapters as we explore risk treatment and decision-making.
For now, look at your own exposure numbers and think about what they mean 
for your personal risk profile. More importantly, take a moment and celebrate having 
completed your first quantitative risk assessment. You’ve transformed uncertainty into 
measurable exposure using the most honest language available to express what that 
means. This is the foundation of every risk decision you’ll make going forward.
 KEEP DOING PERSONAL RISK ASSESSMENTS
These are real quantitative risk assessments. The methodology you just used is identical to what Fortune 500 companies pay consultants to perform. The only difference is scale, not 
technique.
The bulk of the risk assessments you’ll perform as a learner will be risks in your personal life. 
Don’t dismiss these as “practice.” They’re legitimate C rQ that improve real decisions and 
build genuine expertise. I maintain several personal risk assessments that help me evaluate 
decisions for myself and my family.
Start Building Your Portfolio
• Car accident risk: Should you add extra auto insurance coverage?
• Home burglary: Should you invest in a security system or upgraded locks?ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

86• Emergency medical costs: Should you build a larger emergency fund for 
medical expenses?
• Travel risk: Should you buy travel insurance?
• Identity theft/credit card fraud: Is credit monitoring worth paying for?
every assessment makes you better at data collection, uncertainty modeling, and decision 
frameworks. This is how C rQ expertise is built: through repeated application to real problems 
with real stakes.
 Chapter Summary
The Big Idea: Monte Carlo simulation transforms uncertainty from an obstacle into a structured analytical tool, allowing you to forecast the frequency and magnitude of 
future events using historical data, expert judgment, and probabilistic modeling.
Key Takeaways
• Monte Carlo is just sophisticated coin flipping applied to risk. The 
same randomness principles that govern casino games can model 
complex business uncertainties, turning “we don’t know” into “here’s 
what could happen with these probabilities. ”
• Historical data informs but doesn’t dictate future estimates. Your personal phone incident analysis showed how to adjust forecasts 
based on changed threat models, demonstrating that quantitative risk requires human judgment, not just mathematical calculation.
• Frequency and magnitude together create true risk exposure. 
Knowing how often incidents happen means nothing without 
knowing their financial impact, and cost estimates mean nothing 
without understanding likelihood.
• Personal risk assessments are legitimate quantitative analyses. The methodology you used for mobile phone risk is identical to 
Fortune 500 consulting engagements, proving that CRQ skills develop 
through practice on real problems with real stakes.ChaPTer 5  YoUr FIrST QUaNTIT aTI ve rISk aSSeSSMeNT

87Bottom Line:  You’ve completed a genuine quantitative risk analysis using 
professional methods. The numbers you generated represent actual risk exposure that 
can inform real decisions about insurance, protection, and risk acceptance.
 What’s Coming Next
You’ve built your first complete quantitative risk assessment with real probability ranges 
and loss exposure estimates. Now you need to turn those Monte Carlo results into clear, 
actionable insights that drive decisions.
Chapter  6 teaches you to interpret and communicate quantitative risk 
effectively , transforming simulation output into compelling analysis that stakeholders 
can understand and act upon by showing you how to read distributions, explain 
uncertainty to executives, and use quantitative results to evaluate risk treatment options 
while learning communication techniques that build confidence rather than confusion 
in your analysis.
Reference
Dunn, W. L., & Shultis, J. K. (2011). Exploring Monte Carlo methods  [E-book]. Elsevier 
Science.ChaPTer 5  YoUr FIrST QUaNTIT aTIve rISk aSSeSSMeNT

