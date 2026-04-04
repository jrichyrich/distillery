---
title: "Chapter 6: Interpreting and Communicating Quantitative Risk Results"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 6
pages: 114-135
ingested: 2026-04-04
---

# Chapter 6: Interpreting and Communicating Quantitative Risk Results

89
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_6CHAPTER 6
Interpreting and 
Communicating Quantitative Risk Results
It is better to be roughly right than precisely wrong.
—John Maynard Keynes
As you advance in quantitative risk, you’ll discover something surprising: the most 
challenging part isn’t the technical stuff. It’s not dealing with imperfect data, learning 
Monte Carlo methods, expensive tools, or finding subject matter experts. The real 
challenge is translating your analysis into decisions that everyone, from executives to 
engineers, will make.
The reason is simple: everybody processes and interprets data differently. Some 
people prefer graphs. Some people like numbers and probabilities. Other people like 
stories. Some people are a blend of the above. Others struggle with data, regardless of 
how it is presented. Some will be easy to reach, others will nod in agreement as if they 
fully understand, but they won’t get it. Others will completely get it, and you’ll think your 
job is done.
Risk communication will be the single hardest thing for you to master in quantitative 
risk. After years of presenting risk results to different audiences, I’ve learned one big lesson: your best chance of success is learning how to communicate like an actuary.
The original sin of traditional risk frameworks isn’t just that they ignore uncertainty. 
It’s that they’ve trained executives to expect false certainty. When you walk into a 
boardroom and say, “There’s a 15–40% chance of this happening, ” you’re asking them to 
think differently than every risk presentation they’ve ever seen.

90Actuaries have mastered this communication challenge. They don’t hide uncertainty 
behind colors. They make uncertainty useful for decisions. Instead of “high risk, ” they 
say “there’s a 10% chance we’ll exceed $5M in losses this year, and here’s what that 
means for our insurance strategy. ”
The key is showing executives that uncertainty doesn’t mean ignorance or a lack of 
information. It exists because of many possible outcomes. It’s actionable information. 
Your job isn’t to give them certainty they can’t have. It’s to reveal the degree of 
uncertainty they actually face.
You won’t learn this communication approach from information security books. 
Look to how actuaries present to insurance executives, how epidemiologists brief health 
officials, how economists advise policymakers. They’ve solved the communication 
puzzle you’re struggling with.
 Show Your Work: Turning Numbers into Narratives
In this chapter, we will learn how to present our work and transform numbers into 
narratives. There’s not one way to communicate the results of a quantitative risk 
assessment; there are many ways, many graphics, and many different approaches to slice 
and dice the data.
You will discover that you need to tailor and customize your risk communication 
style to
• Different audiences who consume data in different ways
• The specific decision at hand, which requires different types of 
communication
• The nature of the risk itself, since different types of risks present 
differently in the results
Throughout this chapter, we will use the results from our example of a lost or 
damaged mobile phone from the previous chapter, paired with cyber risk examples, to 
illustrate how different types of risks present themselves differently in the results. Refer 
back to this chapter frequently as you progress through the book, as it will serve as your 
primary reference guide for risk communication techniques.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

91 The Shape of Risk
Understanding the shape of risk means understanding how losses are distributed. 
An evenly distributed risk is like a set of dice throws that you record or simulate. With 
enough dice throws, you see that the outcomes are evenly distributed, which basically 
means that there will be about the same number of ones as twos as threes, and so on.
Risk is seldom evenly distributed. Most cyber incidents are small and frequent, 
but every decade or so, you get hit with something massive. Take data breaches: most 
organizations I work with see minor data leakage incidents every few months that don’t 
trigger legal reporting requirements, but every 10–20 years, they face a significant breach 
that makes headlines and incurs millions of dollars in costs.
This uneven pattern is what’s called the shape of risk , also known as a distribution. 
Picture a scale from zero to company-ending loss. Most incidents cluster on the left 
side with small, manageable costs, while a few sit way out on the right with catastrophic impact. Understanding this distribution changes how you communicate risk. Instead 
of saying “data breach risk is medium, ” you can say “we expect two to three minor 
incidents per year costing under $50K each, with about a 5% annual chance of a major 
breach costing $5–15M. ” That’s the difference between describing risk as a category vs. 
describing it as a distribution.
Understanding the shape of risk is crucial for effective communication, as 
stakeholders need to see the whole picture, not just an average or a single number. When 
you tell executives “the average cost is $500K, ” they’re missing the story of whether 
that’s because most incidents cost $500K or because you have many $50K incidents and 
occasional $5M disasters. The shape tells the real story.
Now let’s look at specific tools to measure and describe this shape.
 The Five-Number Summary
The five-number summary is a great way to visualize the shape of risk instantly. We’re 
starting with the five-number summary because it’s a common approach. So common, 
in fact, that you may remember it from a statistics or math textbook. It provides a rapid 
overview of a distribution by fitting it into five categories:
 1. Minimum: The lowest value in a distribution.
 2. First quartile: 25% of values fall below this point.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

92 3. Median : The midway point; 50% of values fall below this point.
 4. Third quartile: 75% of values fall below this point.
 5. Maximum: The highest value in the distribution.
 WHAT ARE QUARTILES AND PERCENTILES?
Quartiles split a dataset into four equal groups. t he first quartile means 25% of values fall 
below this point, the second quartile (median) means 50% fall below, and the third quartile 
means 75% fall below. percentiles work similarly but can be an y percentage; the 90th 
percentile means that 90% of values are lower. For example, when a child is young, a doctor 
might say the child’s height is at the 90th percentile, which means that 90% of children of the 
same age are shorter.
Let’s see this in action. When you run a Monte Carlo simulation, you get thousands 
of possible outcomes. To make sense of all that data, we’ll summarize it in Table 6-1 
using a five-number summary based on the mobile phone incident example from the 
previous chapter.
Table 6-1.  Five-number summary for the mobile phone incident risk
Minimum First Quartile Median Third Quartile Maximum
$0 $206 $466 $857 $2974
Based on these results, I can make quite a few informed decisions. Rounding the 
values, which is something I always do to avoid the illusion of precision, the median loss 
exposure I’m facing is about $500 a year, with worse-case scenarios approaching $900 of 
annual loss exposure. In a bad year, I’m exposed to $3,000 of loss.
 WHAT DOES IT MEAN TO BE EXPOSED TO RISK?
this is a new concept to a lot of people. In my experience working with security teams, your 
CIso will struggle, but your CF o and C eo will get it immediately. t hat’s because when we talk 
about loss exposure, we’re speaking the language of business.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

93Loss exposure is basically how much potential financial loss you’re carrying year over 
year (because everything is annualized). t hink of it like your annual “loss budget,” the range 
of financial impact you need to be prepared for, even though you might not experience it every year.
a good parallel is how insurance operates. let me oversimplify this example to demonstrate: 
think of ten homes on the coast. a ll ten homes are in a hurricane-prone area. e ach home is 
worth $1 million, and each home has $1 million in insurance coverage.
the insurance company would say they have $10 million in loss exposure year over year. 
most years, there’s no hurricane. some years, there’s one hurricane with minimal damage, 
say $300 k. But it’s possible, and it has happened, where a catastrophic storm hits and all ten 
homes are complete losses.
every year, the insurance company would say they have $10 million in loss exposure, even if 
nothing happens or the worst happens.
It’s the same concept with mobile phone risk. Based on our analysis, I have between $500 
and $3,000 of annual loss exposure.
What This Does NOT Mean
• I lost that much in previous incidents.
• I’m losing that much this year.
• I will lose that much next year.
What This DOES Mean
• this is my potential annual loss range for planning purposes.
• In a typical year, I should plan for around $500 in losses (the median).
• I need to be financially prepared for up to $3,000 in a bad year.
• this helps me make informed decisions about mitigation and transfer.
How I use this for planning: I’ll mitigate the median exposure by investing in a better phone 
case and changing some habits to manage that $500 range. For the outlier exposure ($3,000), 
it happens so infrequently that it’s not worth directly managing. I’ll transfer it via phone 
insurance and make sure I can cover any remaining gap with cash reserves.
that’s what loss exposure means: your annual loss-carrying capacity that helps you make 
smart mitigation and transfer decisions.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

94Let’s look at a cyber example. In Table 6-2, I’ve estimated a five-number summary of 
a data breach scenario for a large, US-based bank based on industry research.
Table 6-2.  Five-number summary for a large US-based bank
Minimum First Quartile Median Third Quartile Maximum
$200,000 $300,000 $2,200,000 $16,000,000 $270,000,000
What do you observe about this distribution of risk for data breaches? Does the 
spread look different than the cell phone incident? Are the losses distributed differently?
Notice how different these two distributions look. The mobile phone losses are 
relatively evenly distributed; the gap between the median ($466) and maximum ($2,974) 
is reasonable, and you can see a gradual progression through the quartiles.
The data breach distribution tells a completely different story. There’s a massive 
jump between the third quartile ($16M) and the maximum ($270M)—a 17× increase. 
This is the “heavy tail” or “fat tail” distribution that’s common in cybersecurity, where 
most incidents are manageable, but the worst-case scenarios can be catastrophic.
This difference in distribution shape fundamentally changes how we communicate 
and manage these risks. The mobile phone risk is predictable; the data breach risk has 
extreme uncertainty in the tail. We’ll explore why cyber risks behave this way and what it 
means for your analysis later in this chapter.
For now, the key insight is that the five-number summary instantly reveals whether 
you’re dealing with a “normal” risk distribution or one of these challenging cyber risk patterns. Most importantly for risk communication, it gives stakeholders an instant view 
of the shape of risk, which is a great conversation starter on how to respond.
For executive communication, you might prefer showing the 10th and 95th 
percentiles as “best case” and “worst case” instead of minimum and maximum, but the 
five-number summary captures the same insights about distribution shape.
 WHY YOUR NUMBERS CHANGE EACH TIME
If you’ve run your monte Carlo simulation multiple times, you’ve probably noticed that your 
results change slightly with each run. t his is completely normal and expected.
monte Carlo simulations use random sampling, so each run draws a slightly different set of 
scenarios. t hink of it like polling—survey 1,000 different people and you’ll get similar but not 
identical results.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

95Focus on patterns, not precision:  If your median bounces between $450 k and $480 k, your 
insight is “typical losses around $450–480 k,” not exactly $463 k. round your numbers for 
presentations and emphasize the story your distribution tells rather than precise values that 
will vary slightly each time.
this is the “less wrong” mindset from Chapter 4 in action.
 A Quick Word on Average, Mode, and Median
You’ll encounter these terms constantly in risk data and executive conversations, so it’s worth clarifying what people usually mean.
• Mean (average): Most people use this term to mean “mean” (sum divided by count), but it can be misleading when applied to cyber 
risks. That $12M “average” data breach cost includes some massive 
outliers that skew the number upward. The median value of $2.2M is 
often more helpful for planning.
 There are two ways people talk about averages in risk:
 O ne includes every year, even those with no incidents. That’s your 
expected annual loss, what you’d plan for across time.
 T he other includes only the years when something actually happened. 
That shows the typical cost per event when a loss occurs.
• Mode  (most likely): The value that occurs most often. With some 
cyber risks, this is usually the smallest number in your range because 
most incidents are minor, with a few extremely large outliers. It’s 
helpful for describing typical day-to-day experience, but it doesn’t 
help with budgeting for the big ones.
• Median  (P50, sometimes called “typical”): The 50th percentile; 
half of all outcomes fall below it, half above. The median is useful 
for describing a “typical” year or event, especially when the data is 
skewed by a few large outliers.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

96For Risk Communication: When someone says, “What’s the average cost?” clarify 
whether they want the mathematical mean (for insurance/budgeting) or the typical case 
(median). Both are valid, but they tell very different stories about the same risk.
 AVERAGE VS. CENTRAL TENDENCY
earlier in Chapter 4, we explored how ranges and percentiles express uncertainty. t his sidebar 
shows how those ideas carry through into interpreting results.
Central tendency refers to a single number that represents the “middle” or “typical” value in 
a distribution. Be careful when using the word “average” in risk communication. most people 
associate “average” with “mean,” but some statistics textbooks still teach that “average” 
refers to central tendency broadly, which includes mean, median, and mode.
as a distribution becomes more skewed, these three numbers drift apart:
• Mode : the most common value; what happens most often.
• Median : the middle value; half the outcomes are higher, half are lower.
• Mean : the balancing point; the probability-weighted center of all outcomes.
to a void confusion, specify which measure you’re using rather than simply stating “average.” 
say “the mean is $500 k” or “the median outcome is $300 k” instead of “the average loss 
is….” t his ensures everyone understands exactly what number you’re referencing.
The five-number summary captures all of this without the confusion of terminology, 
which is why we start there.
 GENAI PROMPT: RISK DISTRIBUTION SNAPSHOT
[From the Quant Risk Analysis worksheet that contained your mobile phone risk analysis, copy the raw Monte Carlo simulation data (Sim tab, Expected events/year (λ) column) results into a 
CSV or Excel file and upload into the prompt]
attached is a dataset of simulated loss values from a monte Carlo risk model. a nalyze it and 
return results in two clearly separated sections:Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

97Section 1: Five-Number Summary
• minimum
• Q1 (25th percentile)
• median (Q2, 50th percentile)
• Q3 (75th percentile)
• maximum
Section 2: Central Tendencies
• mean
• median (repeat for comparison)
• mode
output the results in a clean, labeled table format, with each section clearly separated. 
provide a short interpretation of what the numbers imply about risk outcomes (e.g., ‘half of the 
simulated losses are below X’).
 When Risk Distributions Behave Strangely
Cyber risks often create unusual distributions that can confuse stakeholders if you’re not 
prepared. Here are two common patterns you’ll encounter:
Some cyber events create distributions where the minimum, first quartile, median, 
and third quartile are all zero, but the maximum jumps to a massive, outsized amount. This represents extremely low-frequency, high-impact events: most of the time, nothing happens, but when it does, it could be existential for the company. To communicate 
this clearly, it helps to show both the event loss distribution (the range of outcomes for 
a single incident) and the annual loss distribution (how those events add up across a 
year). The aggregate view makes it clear that even if most years see no events, the rare 
ones can drive devastating losses.
The communication trap here is obvious: if you report the median, it’s zero. 
Stakeholders will say, “Well, if the typical is nothing, why should we invest in controls?” 
This is exactly when you need the five-number summary and percentiles to show that 
while most scenarios are benign, the tail risk could be catastrophic.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

98At the other extreme, very large companies might see several phishing attempts 
daily, multiple malware detections, or constant credential stuffing attempts. Each 
incident incurs a small cost, but the frequency makes the cumulative impact substantial. 
Here, the mean might be more useful than the median for showing the true cumulative 
cost of these constant small incidents.
Understanding these distribution patterns prepares you for the visualization 
techniques in the next section, where you’ll learn to present these complex distributions 
in ways that stakeholders can understand and act upon.
EXERCISE 6-1: BUILD YOUR STATISTICAL RISK SUMMARY
Find the statistical summaries on the monte Carlo simulation from your mobile phone excel in 
the spreadsheet. a lternatively, you can use g en a I prompts to create new summaries.
Your Tasks
• read and interpret the statistical summaries.
• Write a 30-second explanation of this risk using a few key numbers.
• draft an answer to “ how bad could this get?” using your statistical results.
• Identify which measure best represents the typical cost.
• Check for anomalies: does your distribution show heavy tails or other unusual 
patterns?
this exercise prepares you to interpret and communicate risk results to stakeholders in a 
confident manner.
 Key Visualizations That Matter
There are two visualizations I want to demonstrate that are often used to communicate quantitative risk results. Often, they are paired with the summary statistics shown 
in the previous sections. There are many other visualizations available, such as a 
tornado diagram, a ridgeline plot, and a box plot; however, the histogram and the loss Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

99exceedance curve are the most common in cyber risk analysis. I encourage you to 
experiment with these and others to find the best that works for you and the people you 
are communicating with.
 Histogram: The Shape of Risk
The histogram illustrates the shape of risk, as shown in Figure  6-1. In quantitative risk 
analysis, a histogram groups Monte Carlo simulation results into bins and displays 
them as a bar chart. The x axis shows loss amounts, and the y axis shows how frequently 
simulated results landed in each loss range.
Figure 6-1. Monte Carlo simulation results graphed on a histogram
How to Read and Communicate Histograms : Focus on the shape: Where do 
most losses cluster? How wide is the spread? Are there outlier “tail events”? When 
communicating, emphasize that this shows the range of financial impacts if the risk 
occurs, not the probability of occurrence itself. For executives, lead with business 
impact: “Most scenarios cluster around $X, but we need to prepare for outliers up to $Y. ” 
The key insight is in the distribution shape. A narrow peak means predictable losses, 
while a wide spread or long tail indicates high uncertainty requiring different planning 
strategies.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

100Benefits
• Shows the complete risk profile at a glance, clearly highlighting both 
typical outcomes and extreme scenarios
• Familiar format that stakeholders can easily interpret
Key Consideration:  The most common mistake is misinterpreting the y axis. It 
shows how often different loss amounts occurred in your simulation, not the probability 
of an incident happening. Think of each bar as showing “if something bad happens, 
here’s how bad it’s likely to be. ”
 Loss Exceedance Curve, a.k.a. the “What Are 
the Chances?” Chart
This is my favorite visualization, and I call it the “what are the chances” chart. This might 
be the most important visualization for executives, but it’s also the one that confuses 
people the most. It would be a wise time investment for all risk managers to learn this 
visualization inside and out and learn how to narrate it to executives in real time.
 Why This Chart Is Difficult (and Why That’s OK)
In my experience, people in information security often don’t recognize this chart and say 
they dislike it because they don’t know how to interpret it. There’s a good reason for this: 
security professionals think in terms of “Will an attack happen?” while this chart answers 
“If something bad happens, how bad could it get?”
Step outside of the information security field, though, and people start to recognize 
this chart immediately. Finance teams encounter this type of graphic in insurance 
models, executives face it in business forecasting, and anyone who has looked at 
weather predictions has seen similar probability curves. It is known as a loss curve, an 
exceedance probability graph, a cumulative distribution function (CDF), and various 
other terms in other fields.
 The Power of This Visualization
This chart answers the question executives care about: “What are the odds we’ll lose more 
than $35 million?” shown in Figure  6-2. It’s the same thinking insurance companies use to 
set premiums and the same logic the C-suite uses for scenario planning. Figure  6-2 is an 
example of a loss exceedance curve that one might show to executives.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

101
Figure 6-2. An exec-ready loss exceedance curve showing a ~20% chance of losses 
exceeding $35 million or more
How to Read It
• The y axis shows probabilities (0% to 100%).
• The x axis shows dollar amounts.
• The curve shows the chances of losses exceeding any given 
dollar amount.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

102
Figure 6-3. How to read a loss exceedance curve
Detailed Walkthrough: Follow Along on  Figure  6-3
Step 1:  Find your dollar amount of interest on the x axis (e.g., $35M).
Step 2:  Move straight up from that point until you hit the curve.
Step 3:  Move horizontally left to read the probability on the y axis 
(e.g., 20%).
Interpretation:  “There’s a 20% chance that losses will exceed $35 million. ”
Visual Helper:  The yellow-shaded area in Figure  6-3 represents 
the 20% probability zone, which encompasses all outcomes where 
losses exceed $35M. The larger this shaded area, the higher the 
probability of exceeding that loss amount. 
Common Pitfall:  Don’t confuse the y axis with the frequency of 
incidents. The curve shows “if an incident happens, what’s the 
chance losses exceed X amount?” , not “how often do incidents 
occur?” The incident frequency is already baked into your annual 
loss exposure calculation.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

103 Anchoring a Loss Exceedance Curve to Real Decisions
When presenting a loss exceedance curve (LEC), avoid arbitrary dollar markers. Instead, 
connect the curve to thresholds that matter to your stakeholders:
• Risk tolerance : Ask your board or CFO, “What’s the maximum loss 
we can absorb before it threatens operations?” Use that number as 
your anchor point.
• Cyber insurance limit : Losses beyond the policy limit are uninsured, 
and the organization bears the full impact. Remember that exclusions 
and sub-limits (e.g., ransomware or regulatory fines) may reduce the 
effective coverage.
• Budget thresholds : Compare losses to contingency or emergency 
reserves. If there’s a 60% chance of exceeding reserves, planning 
needs attention.
• SEC materiality : For US-based public companies, ask legal, “ At what 
loss level would disclosure likely be required?” There’s no fixed dollar 
rule. Materiality depends on context, but establishing a working 
threshold makes the curve actionable.
• Project costs : Compare loss probabilities to security investments; 
if there’s a 40% chance of losses exceeding a $3M project’s cost, the 
investment looks justified.
Each of these anchors transforms the curve from a probability graph into a decision-  
making tool.
 Creating Loss Exceedance Statements
I always accompany the curve with narrative statements that serve as a voiceover for 
people who have trouble reading charts:
• “There is a 20% chance that losses will exceed $2 million. ”
• “We have a 50/50 chance of losses exceeding $500,000. ”
• “There’s only a 5% chance we’d see losses above $8 million. ”Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

104Start your executive presentation with the loss exceedance statement, then show the 
curve. This primes their understanding before they see the visual.
 GENAI PROMPT: CREATE A HISTOGRAM AND A LOSS EXCEEDANCE CURVE
[From the Quant Risk Analysis worksheet that contained your mobile phone risk analysis, copy 
the raw Monte Carlo simulation data (Sim tab, Annualized Loss column) results into a CSV or 
Excel file and upload into the prompt]
attached is a dataset of simulated loss values from a monte Carlo risk model.
Create and display:
• a histogram of the loss distribution with appropriate binning, labeled axes, and 
rounded tick marks.
• a loss exceedance Curve ( leC) where the x-axis is loss amount ( usd) and the 
y-axis is exceedance probability (%).
• generate five clear loss exceedance statements in plain language. each should 
follow the format: “ there is a X% probability that losses will exceed $Y.”
• Choose meaningful thresholds (e.g., 10th, 25th, 50th, 75th, 90th percentiles, or 
round-number thresholds).
Format all monetary values in millions of usd. provide a short interpretation of the results: 
what the histogram shows, what the leC shows, and how the exceedance statements can be 
used in decision-making.
make sure all charts are professional and publication-ready.
 The Risk Heatmap: When You Have No Choice
There’s an uncomfortable truth that all security risk analysts must live with: the risk matrix or risk heatmap is the de facto language of risk in our field. The risk 
communication methods shown earlier in this chapter are preferable, of course, but 
there will be times when you are expected to communicate risk via a heatmap.
As the old adage goes, if you can’t beat ‘em, join ‘em. Let’s make the heatmap better.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

105First, some grounding. There are two names for the visualization in Figure  6-4:
Figure 6-4. A traditional risk matrix: standard 3×3 grid showing a typical 
qualitative approach
The  Risk Matrix : This is a model for assessing risk.  You pick an adjective for impact, 
pick an adjective for likelihood, and where the two meet on the grid, that’s your risk.
The  Heatmap : This is a risk communication tool , not a model. Risk has already been 
assessed, and the results are plotted on a heatmap.
We covered the problems with qualitative methodologies and the risk matrix in 
Chapter 2, but specifically, when it comes to risk communication, the main issues are the 
following:
• We’re not articulating uncertainty.
• We’re losing the shape of risk.
• It’s too simple. Reducing it down to a single color or point on a grid 
loses too much information.
Making the Heatmap BetterChapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

106
Figure 6-5. A quantitatively anchored heatmap
See the heatmap in Figure  6-5. You’ll notice a few changes I’ve made to encourage 
people to think quantitatively. If you can implement one or more of these tips, you’ll be 
communicating risk better than the traditional approach shown in Figure  6-4. Here are 
the key changes I made:
• Quantitative bins : Both axes are divided into equal-sized 
quantitative bins. The y axis uses probability percentages (0–100%) 
instead of vague frequency categories, and the x axis is scaled by the 
cost of a single loss.
• Distribution in the legend : The heatmap shows where the Most 
Likely value sits, while the legend shows the full distribution of 
each risk.
• Neutral color scheme : Instead of using red/yellow/green, I’m using 
shades of blue. This reduces the emotional bias that comes with 
traditional traffic light colors and forces attention to the legend and 
actual numbers rather than gut reactions to red/green.
• Outer bounds anchored in risk capacity : In my example, $250M 
represents my fictitious organization’s risk capacity. Anything above 
this amount exceeds the organization’s ability to absorb the cost.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

107Here are additional improvements you can try, not shown in Figure 6-5:
• Whiskers: Plot each dot at the median (P50) and add whiskers (like 
error bars) that extend to the 10th and 90th percentiles or even the 
5th and 95th. This helps show uncertainty ranges directly, rather than 
compressing everything into bins.
• Scatter view: Instead of a binned heatmap, you can plot each scenario as a point on a scatter chart, with frequency or probability on the y axis and impact  on the x axis (log scale). Each point can include 
whiskers to show the range of possible impacts.
• Iso-value lines: Add light diagonal “equal loss” lines showing combinations of frequency and impact that produce the same 
expected loss (e.g., $100K, $1M, $10M). These lines make it easier to 
compare which risks drive more total exposure.
• Multiple markers: If you’re plotting only one risk, use three marks: most likely, 10th percentile, and 90th percentile. Use different 
symbols with a clear legend.
• Bubble size: Use bubbles to visualize the range size, letting them 
span multiple grid boxes. This approach requires careful explanation 
to avoid confusion, but it can convey uncertainty when properly 
narrated.
• White background: Remove all colors from the grid to further reduce biasing effects.
 RISK PLACEMENT
risk is a distribution, not a single point. When we plot it on this type of chart, we’re forcing it 
into a visualization that wasn’t designed for quantitative risk. You’ll need to decide which point on the distribution to use: median, mean, or an outlier such as the 95th percentile. Whatever 
you choose, be consistent and transparent about your method.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

108 Putting It All Together
A few years back, I was doing my quarterly technology risk update for the C-suite at a 
large US-based company where I’d built the quantitative risk team. I’d run Monte Carlo 
simulations on several major technology risks and had loss exceedance curves ready to 
show the results.
The CISO warned me beforehand: “The C-suite doesn’t like numbers. They won’t 
receive it well. ” I planned to keep the narrative heavy and reserve the quantitative 
analysis for backup.
I walked in and began discussing some existential risks we were facing, focusing on 
stories and qualitative descriptions. Five minutes in, the CFO interrupted: “If this is the 
result of a Monte Carlo simulation, do you have an exceedance probability curve?”
I glanced over at the CISO, the one who told me the C-suite doesn’t like numbers.
I threw up the loss exceedance curve, and the entire room lit up. We spent the next 
30 minutes having the best risk conversation I’ve ever had with executives. We discussed 
investment trade-offs, opportunity costs, insurance levels, tail risk, and everything in 
between.
 What I Learned About Executive 
Risk Communication
Don’t assume executives can’t handle numbers.  They deal with financial uncertainty 
every day. The problem isn’t the math; it’s usually how we present it.
Always have your loss exceedance curve ready.  Even if you plan to go narrative-  
first, executives who understand business risk will often want to see the shape of 
uncertainty.
Let them drive the conversation.  Once you show the curve, executives often ask 
exactly the questions you hoped they would about probability, impact, and decision 
options.
Trust your analysis.  If you’ve done the work right, the quantitative story is usually 
more compelling than the qualitative version.
Presentation Tips
• Lead with the key insight in titles : “20% Chance of $2M+ Loss” puts 
the decision-relevant information first.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

109• Round to avoid the appearance of false precision: “$1.7–3.2M” 
becomes “$2–3M” for executive discussions.
• Always present both the typical loss and the outliers (e.g., 90th or 95th percentile). They spark different, but equally important, 
conversations. You may decide to address the typical loss directly 
while transferring risk from the outlier or ensuring cash reserves to 
withstand it.
• Include a brief data source note: “Based on industry benchmarks 
and expert estimates” or “Derived from internal incident data and 
external studies” .
Know your audience: Every organization is unique, and its organizational culture 
varies significantly. Your job is to read the room and adapt, but always come prepared with the tools that can elevate the conversation.
 Chapter Summary
The Big Idea: Effective risk communication requires selecting the right visualization 
for your audience and purpose, from histograms for analysts to executive-friendly loss 
exceedance curves for informed strategic decision-making.
Key Takeaways
• Master the core visualizations: Histograms for showing risk shape 
and loss exceedance curves for executive communication.
• Loss exceedance curves are your secret weapon for executive communication because they show the probability of exceeding 
different loss amounts in language that business leaders understand.
• Use heatmaps carefully as communication tools only, never as 
analytical models, and always anchor them to quantitative data.
• Supplement visuals with narrative using loss exceedance statements that translate charts into plain English.
• Different audiences need different approaches because security teams may prefer narratives, while executives respond better to loss 
exceedance curves.Chapter 6  Interpret Ing and CommunICatIng QuantItatIve rIsk results

110Bottom Line:  The goal isn’t finding the “right” visualization; it’s understanding your 
audience and helping your organization make better decisions about the risks they face. 
Meet people where they are, focus on the decisions that need to be made, and choose 
the communication approach that gets stakeholders to act on the information, rather 
than agonizing over mathematical perfection.
 What’s Coming Next
You’ve learned to turn quantitative results into compelling visual stories. Now you’re 
ready to continue building the foundational blocks for complete risk assessments from 
start to finish.
In Chapter  7, you’ll learn to transform vague worries like “our cloud setup feels 
risky” into precise, measurable risk statements using the A-T-E framework.  You’ll 
discover how to expand those statements into comprehensive assessment scopes that 
tell you exactly what data to collect, which experts to interview, and how to set clear 
boundaries on your analysis.Chapter 6  InterpretIng and CommunICatIng QuantItatIve rIsk results

