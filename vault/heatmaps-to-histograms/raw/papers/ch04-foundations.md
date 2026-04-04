---
title: "Chapter 4: Foundations"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 4
pages: 71-92
ingested: 2026-04-04
---

# Chapter 4: Foundations

45
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_4CHAPTER 4
Foundations
It ain’t what you don’t know that gets you into trouble. It’s what you know 
for sure that just ain’t so.
—Mark Twain (attributed)
A couple of years ago, I decided to pick up a second language, something that had 
always been on my bucket list. I tried the traditional approach: flashcards, vocabulary 
drills, grammar rules, dusty textbooks. That didn’t last long. Nothing was sticking. More 
importantly, it just wasn’t enjoyable.
I researched a method called “comprehensible input, ” which involves consuming 
content slightly above your current level by watching videos, listening to music and 
podcasts, and reading books, without focusing on formal study. As a complete beginner, 
I started with children’s programming and didn’t crack open a single grammar book.
It worked, and it was really fun. A few years later, exclusively through watching, 
listening, and reading, I was conversationally fluent.
I had a similar experience learning risk analysis. When I first encountered 
quantitative risk through the CISSP certification, I had the feeling that this was really hard  and, the way it was described, almost impossible to do. This was my first exposure 
to quantitative methods in a workplace context. I’d learned probability and statistics in college, but the CISSP study guide was supposed to show me how to use these concepts 
in real-world cybersecurity.
The ALE formula appeared precise but felt like guesswork when attempting to apply 
it. If you’ve had the same experience and, I suspect for many readers, CISSP was your 
first workplace exposure to quantitative risk as well, that reaction makes perfect sense.
There’s been enormous work done by practitioners to connect the dots from theory 
to practice, work you won’t find in study guides. Later, when I discovered these methods and started doing actual risk assessments: one scenario, then another, then another, the 
concepts finally clicked through practice, not study.

46This is exactly how I think you should learn risk analysis: by doing.
We’ll cover basic concepts in this chapter, but this isn’t going to be a vocabulary 
lesson. You won’t find dense definitions to memorize or frameworks to drill. Instead, 
think of this as “comprehensible input” for risk. We’ll introduce ideas through practice 
and real examples, then reinforce them throughout the entire book.
If you’re expecting to see something explained here that you don’t, keep going. 
Work through the exercises in the subsequent chapters. The concepts will become clear 
through use, not study. That’s how real learning happens.
 Foundations First: Why We Always Use Ranges
Single numbers imply false precision, which happens when numbers are reported with 
greater accuracy than the data supports. When we say a ransomware attack would cost 
$750K, we’re pretending to know the future more precisely than we actually do. That’s 
not an honest acknowledgment of uncertainty, and it’s not useful for decision-making.
Ranges, on the other hand, articulate what we know, given the data available to 
us at the time. $300K–$1.2M is more honest than $750K because it acknowledges our 
uncertainty while still providing useful bounds for planning.
The human intuition about talking about future events in ranges isn’t unique to risk 
analysis. We use ranges in everyday life because precise figures about the future would 
seem off and a bit dishonest. For example:
Restaurants tell you “ …about 15–20 minutes” for a table, not precisely 17.3 minutes. 
Estimates for a kitchen remodel are “around $5k–8k, ” not $6654.32. Medical prognoses 
are “6–18 months recovery, ” not 11.3 months.
Ranges help us admit what we don’t know, which protects us from overconfidence. 
But watch out for extremes. Ranges that are too wide (like $10M–$500M for a data 
breach) usually tell you that you need more research or better data. Ranges that are too 
narrow (like $748K–$752K) are just false precision in disguise.
The art is matching your range width to what you actually know. Sometimes, wide 
ranges are honest: data breaches do vary wildly depending on the number of records 
disclosed, the attacker, and dozens of other factors. However, they also may signal that 
you’re missing key information that would help you be more specific. As a risk analyst, 
part of your job is recognizing the difference.Chapter 4  Foundations

47 What Ranges Actually Mean
When we say a ransomware incident could cost between $200K and $800K, we’re not 
saying every number in that range is equally likely. Cyber losses don’t spread out evenly.
Figure 4-1. Example input range for ransomware losses
Most incidents tend to cluster around $300K, as shown in Figure  4-1. When I use 
the phrase “most likely, ” I mean the value that feels typical based on experience or data. 
Later in this chapter, we will look more closely at what “most likely” means statistically 
and why it matters. That point represents the most likely value, or mode: the number 
that feels most typical based on past experience or expert judgment. In other words, it’s 
the value you’d expect to occur most often. Later in Chapter 6, once we run a simulation, 
we’ll talk about the median, the P50, as one of several ways to summarize those results.
We bring the range down to $200K to reflect a less impactful incident. We also go up 
to $800K to capture worst-case scenarios, including regulatory fines, extended business 
disruptions, or particularly sophisticated attackers. These three numbers—low, most 
likely, and high—give us enough information to build a curve that represents uncertainty 
before any simulation is run.
Think of it like home burglaries in your neighborhood. Most might result in $2K–$3K 
in losses (stolen electronics, broken door), but your insurance coverage might go up to 
$50K to prepare for the rare case where thieves take everything valuable. The $2K–$3K 
range represents what usually happens; the full range represents what could happen. We 
define both so we can plan for everyday risk and the extremes. This distinction matters 
because of the following:
• Most likely (mode) ($3K) : What to expect in a typical incident
• Range ($2K–$50K) : Your full risk exposureChapter 4  Foundations

48If you’ve learned FAIR or other early versions of quantitative risk analysis, you might 
recognize this low-most likely-high approach. It’s still widely used, and it’s an intuitive 
way to describe what usually happens vs. what could happen. Later in this chapter, I’ll 
show you another approach: percentiles, like P5, P50, and P95, which express the same 
idea in a slightly different way.
Now that we’ve defined how to set input ranges, the next step is to ask how confident 
we can be in them.
 Confidence and Other Types of Intervals
Before we dive into modeling, it helps to understand what we really mean by an interval. 
Let’s break confidence interval down.
• Confidence is simply how sure you are about something. If you’re very confident, you’re pretty certain you’re right. If you’re less 
confident, you know you might be wrong.
• An interval is just another word for a range: it’s the space between 
two numbers, like $200K to $800K.
Put them together, and you get what’s called a confidence interval: a range that 
expresses your uncertainty and how sure you are that the real answer lies somewhere inside it. In other words, we’re saying “I’m about this  confident the true value falls 
between these bounds. ”
 CONFIDENCE, PREDICTION, AND CREDIBLE INTERVALS: WHAT’S THE DIFFERENCE?
We just learned about confidence intervals  in the preceding section. technically speaking,  
when we’re talking about future events, as we often do in risk analysis, this is called a prediction interval
. a prediction interval is a range that shows where a future outcome (such 
as next year’s loss) is likely to fall.
in formal statistics:
• Confidence interval : a confidence interval applies to observed data and 
reflects how sure we are that our estimate of the average (mean) value captures the true population value.
• Prediction interval: Where a future result is likely to fall.Chapter 4  Foundations

49• Credible interval: Bayesian version; given what you believe and the data, 
here’s where the true value probably sits.
all three describe the same basic idea: a range that expresses uncertainty. Which one should 
we use, and how can we tell the difference?
in his book, How to Measure Anything: Finding the Value of Intangibles in Business , douglas 
hubbard prefers the term confidence interval and thinks of it as a range of belief  (hubbard, 
2014). When these techniques are applied in practice in the technology domain, we don’t have 
repeated samples. We have one future, one loss event that is uncertain. t his is technically 
closer to a Bayesian interpretation of confidence.
in this book, i am going to use confidence interval when describing a range of belief about a 
set of numbers because that’s what’s used in hubbard’s work and in the F air  framework.
however, i want you to be familiar with all three terms: confidence interval used colloquially 
in CrQ, prediction interval  for when you find yourself presenting to a statistically trained CF o, 
and credible interval  when talking to someone familiar with Bayes’ t heorem.
The next step is attaching a percentage to our degree of belief. In CRQ, we typically 
use a 90% confidence interval, meaning, “I’m pretty sure, about nine times out of ten, 
that the real answer is somewhere in this range. ”
This enables a few things:
• Express our uncertainty about the data, estimation, and 
measurement.
• Acknowledge that errors are possible.
• Allow us to be accurate without pretending to be perfect.
A 90% confidence interval strikes a good balance between being useful and being 
honest about uncertainty.
Some practitioners prefer 80% (P10–P90) ranges because people estimate them more 
reliably. Either works, as long as you stay consistent.
The letter P stands for percentile. P5 means the value that is higher than 5% of all 
possible outcomes, and P50 is the midpoint, also known as the median. Think of this as 
a typical case. P95 is higher than 95% of possible outcomes. We use P5 to P95 for a 90% 
range because the middle 90% of outcomes sit between the 5th and 95th percentiles. For 
an 80% range, it would be P10 to P90.Chapter 4  Foundations

50Now that we’ve covered how wide a range should be and how confident we can be 
about it, let’s talk about what confidence really means in practice.
We will also see later that cyber losses are rarely symmetric, which affects how we 
describe what “typical” looks like in a risk range.
 CONFIDENCE IS SOMETHING YOU DO, NOT CALCULATE
When you estimate future annual ransomware losses at $200K–$800K with a 90% confidence 
interval, you’re not running a formula. You’re making a judgment call based on data, expertise, 
and process.
Confidence here means trust in that process: the quality of your data, the calibration of your 
estimates, and the rigor of your reasoning.
a good interval  reflects both what you know and what you admit you don’t. t hat’s what makes 
it credible. it’s not about math; it’s about intellectual honesty.
 When Executives Demand the Number
We’ve all been there. You present a thoughtful range, and the executive says, “Just give 
me the number. What’s your best guess? I need to know exactly what to expect. ”
Here’s what’s happening: They’re often asking for the most typical value without 
realizing it—what statisticians call the median, or P50. It’s a fair request for planning, 
but it’s not the number to use when you need to calculate averages across risks or 
aggregate exposure. For modeling, the expected value (mean) is the right choice because 
it accounts for every possible outcome and its probability weight. For communication or 
planning, though, the median is often the clearest “most realistic” figure. However, if you only report a single point, you risk underestimating the variability of the real world.
The problem comes when you give them a single number as if it’s certain. If you cave 
and say “$500K” without context, you’re setting everyone up for disappointment when 
reality lands at $400K or $700K. You might lose your credibility or, even worse, have to 
update your resume.
A much better approach acknowledges their need for the “typical” scenario while 
staying honest about the full range of possibilities:Chapter 4  Foundations

51“I understand you need a single number for planning. The median , or typical 
outcome is around $500K; that’s the middle of our range and a reasonable baseline for 
budgeting. But I’d be doing you a disservice if I didn’t mention that this could reasonably 
range from $200K to $1.2M based on the variables we’ve assessed. Do you want me to 
build in some cushion for the planning scenario, or are you comfortable with the $500K 
baseline?”
This works because you’re giving them what they want (the typical outcome) 
while making it clear that precision isn’t the same as accuracy. You’re also shifting the conversation to which number serves their decision-making best, rather than pretending there’s only one “right” answer.
The executive who demands 100% certainty is really asking you to pretend the future 
is more predictable than it really is. Your job is to give them useful information, not false confidence.
Before we continue, let’s address a question I am commonly asked.
 WHY NOT 100% CONFIDENCE INTERVAL?
it’s tempting to think we could make our range wide enough to be 100% certain, but that’s not 
how uncertainty works. to be completely sure we’ve ca ptured every possible outcome, we’d 
have to include everything, even wildly unrealistic extremes.
here’s an easier way to picture it. suppose we’re estimating the typical height of nBa 
point guards:
• 90% confidence interval: We’re saying “we’re pretty sure the true average is between 6’1” and 6’3”.”
• 95% confidence interval: “We’re very sure it’s between 5’11” and 6’5”.”
• 99% confidence interval: “We’re almost certain it’s between 5’8” and 6’7”.”
see what happens? a s we demand more certainty, the range gets wider and less useful.
a 100% confidence interval would have to cover every imaginable scenario, like “somewhere 
between 4 and 8 feet tall.” technically accura te, but practically meaningless.
that’s why we settle on a 90% confidence interval. it acknowledges that we might be wrong 
about 1 time in 10, but it gives us a range that’s actually helpful for decisions, not so wide that it tells us nothing at all.Chapter 4  Foundations

52 When to Use Ranges and Confidence Intervals
Everywhere. Throughout this book, we’ll learn measurement techniques to forecast 
everything from frequency of incidents to legal costs, incident response hours, phishing 
click rates, ransomware payments, and much more. All of these will be expressed as 
ranges with 90% confidence intervals.
This is just what you do now . With a bit of practice, thinking in ranges will feel second 
nature, and you’ll appreciate how much more useful ranges are for decision-making.
 Mode vs. Median: What Analysts Really 
Need to Know
When you define a range for a risk variable, you’ll see two main styles:
• Minimum/most likely/maximum
• P5/P50/P95
Both describe uncertainty, but they come from different traditions.
Early FAIR models used minimum, most likely, and maximum values (Freund & 
Jones, 2014 ) because their math relied on Beta-PERT or triangular distributions, which 
require a mode, the value that occurs most often. This worked well for asymmetric data, 
since the mode could sit closer to the smaller, more common outcomes. But it also made 
people think “most likely” was the only valid middle, which isn’t always true when we’re 
expressing belief rather than fitting a curve.
Hubbard and other CRQ practitioners use a percentile elicitation instead. Rather 
than picking one “most likely” number, you estimate a range of belief, for example, 
“I’m 90% sure the value falls between my P5 and P95, and my P50 is where I’m equally 
likely to be high or low” (Hubbard, 2014 ). This approach is easier to calibrate and more 
accurately reflects how humans perceive uncertainty. Refer to Table  4-1 for an overview.Chapter 4  Foundations

53Table 4-1.  Ways to express a range
If You Were Taught… What It Really Means
“Low, most likely, high” Mode-based input; still fine for pert -style models
“p5, p50, p95” percentile input; focuses on belief,  not curve shape
“Mode = typical” in skewed cyber data, the mode sits below the median
“Median ( p50)” the midpoint of belief; use this as your “typical” value
When you define a range, imagine your 90% confidence interval in three parts:
• P5: A smaller or less severe outcome. You’re 95% sure the true value 
won’t be lower than this.
• P50: The midpoint of your belief, a typical or expected outcome.
• P95: A larger or more severe outcome. You’re 95% sure the true value won’t be higher than this.
If you’ve used FAIR before, this might sound a bit different. Early FAIR models used 
low, most likely, and high values to fit a Beta-PERT curve. That middle “most likely” point represented the mode, the single outcome that happens most often (Freund & 
Jones, 2014). This works when the data is roughly symmetric, but cyber-related data 
rarely is. In most cases, it’s right-skewed, with many small events and a few large ones. 
That means the mode often sits well below the median or mean.
That’s why other CRQ practitioners, following Douglas Hubbard’s calibration 
methods, use percentiles instead. Percentiles let you express your confidence directly, 
without assuming any particular curve shape. In this framework, your P50 represents the 
point where you’re equally likely to be high or low, the midpoint of your belief about the 
outcome (Hubbard, 2014; Hubbard & Seiersen, 2023).
This percentile-based approach keeps your inputs FAIR-compatible while staying 
true to how uncertainty really behaves in risk analysis.
In this book, we’ll use P5–P50–P95 as the standard. It’s simple, consistent, and 
compatible with both modern CRQ tools and FAIR-based reasoning. If your software or template still asks for “most likely, ” use the value you’d consider typical, your P50. Tools 
that use Beta-PERT will treat it as the mode, while percentile-based models will treat it 
as the median. Either way, you’re describing the same thing: your best central judgment 
about what usually happens (Hubbard, 2014; Hubbard & Seiersen, 2023).Chapter 4  Foundations

54 EXERCISE 4-1: THE SAN FRANCISCO TO LOS ANGELES ROAD TRIP
Let’s practice thinking in ranges with something simple and familiar.
Your task: estimate how long it takes to drive from San Francisco to Los Angeles . here’s 
your only hint: it’s about 380 miles . don’t look it up.
Write down three estimates:
• Lower bound (P5):  perfect conditions,  light traffic, few stops, maybe you push 
the speed limit a bit.
• Typical time (P50): What you’d expect on an average day with normal traffic 
and one or two breaks.
• Upper bound (P95):  everything goes wrong, traffic jams, accidents, fog on the 
Grapevine, too many rest stops.
here’s a tip if you’re having trouble estimating the range.
• When you estimate a P5, you’re saying there’s only about a 5% chance it could be faster than this.
• Your P95 means there’s only about a 5% chance it could take longer than this.
• and your P50, the middle, means you think there’s an even chance the actual 
time will be shorter or longer than this.
now look at your range. a re you 90% confident the actual drive time falls within it?
if not, adjust your low and high estimates until you are.
Reflect
 1. i f your boss asked, “ h ow long does it take to drive from s F to L a ?” which 
number would you give, and why?
 2. h ow would your estimates change if you’d made this drive fifty times vs. never 
having been to California?
 3. Wha t data would make your range more accurate, such as average traffic 
speeds, rest-stop frequency, or time of day?Chapter 4  Foundations

55What This Teaches
• Why ranges matter:  nobody gives a single precise number for a future event.
• Typical vs. range: Your typical  estimate ( p50) is useful for planning, but the full 
range ( p5–p95) shows your uncertainty.
• Experience narrows ranges: More data or lived experience tightens your 
uncertainty bounds.
• Confidence, not precision: Being roughly right within a 90% confidence range beats being precisely wrong.
In other words: this is the same reasoning you’ll use when estimating frequency and 
magnitude
 in real-world risk models. t he process is identical; only the units change.
 Frequency and Magnitude
Just like your San Francisco to Los Angeles estimate, we’ll now define ranges for how often events occur and how large their impact is. The logic is the same: instead of 
estimating travel time, we’re estimating risk outcomes.
Now that we’re thinking in ranges, let’s establish the two fundamental building 
blocks of every quantitative risk model: frequency and magnitude. These concepts are 
simple but powerful. They’re the foundation everything else builds on.
 Building Block 1: Understanding Frequency
Frequency is the estimated number of times an event occurs within a specific period, expressed as a range.
In cyber risk, frequency is always annualized, meaning we describe it in terms of 
events per year.
This is the same idea accountants use when they annualize quarterly earnings 
or banks use when expressing interest rates as annual percentages. Using a standard 
timeframe allows for easier comparison across different risks.Chapter 4  Foundations

56Annualizing frequency has three main benefits:
• Consistency:  All risks use the same time scale for easy comparison.
• Business alignment:  Matches annual budgeting and 
planning cycles.
• Mathematical simplicity:  Makes later calculations much easier.
In other words, we’re asking: on average, how often does this happen per year?
A frequency  range  captures the full spectrum of possibilities, while the P50 
(median)  represents what typically happens in a given year.
Examples:
• Phishing clicks : 10–15 times per year (P50: 12)
• Ransomware incidents : 0.2–0.5 times per year (P50: 0.3)
• Credential stuffing attacks : 20–30 times per year (P50: 25)
• Major data breaches : 0.05–0.2 times per year (P50: 0.1)
When something happens less than once per year, convert it to an annual frequency 
by dividing 1 by the number of years, as shown in Table  4-2.
Table 4-2. Annual frequency conversion reference
Typical Occurrence Calculation Annual Frequency
Once every 2 years 1 ÷ 2 0.5 per year
Once every 3 years 1 ÷ 3 0.33 per year
Once every 4 years 1 ÷ 4 0.25 per year
Once every 5 years 1 ÷ 5 0.2 per year
Once every 8 years 1 ÷ 8 0.125 per year
Once every 10 years 1 ÷ 10 0.1 per year
Once every 15 years 1 ÷ 15 0.067 per year
Once every 20 years 1 ÷ 20 0.05 per year
Don’t worry if “0.2 ransomware incidents per year” sounds odd at first. It simply 
means “about one incident every five years. ” Thinking in this way allows for consistent 
comparison across all risks.Chapter 4  Foundations

57Your frequency range expresses the full uncertainty of how often something might 
happen, while your P50 value captures the typical case—what you’d expect to see in a 
normal year.
 WHY NOT PROBABILITIES?
readers familiar with other forms of risk analysis might ask why we use frequencies (e.g., 
“once every five years”) instead of probabilities  (e.g., “20% chance per year”). t here are two 
main reasons: one practical and one about communication.
 1. Practical
Many cyber events happen often: phishing, credential misuse, failed 
deployments, login lockouts, sometimes daily or weekly.
if you asked, “What’s the probability of at least one phishing incident this year?” 
the answer would be nearly 100%, which isn’t helpful for planning.
But saying “about 50 phishing incidents per year” gives you something you can 
staff for, budget for, and track.
 2. Communication
psychological research shows that people understand frequencies better than 
probabilities. it’s easier for most decision-makers to reason about “once every 
five years” than “a 20% chance per year.”
A Subtle but Important Point
When we express frequency as a rate (e.g., 0.2 incidents per year), we’re describing an 
average rate of occurrence . that doesn’t mean it happens like clockwork. i t means that, over 
time, it tends to average out to that rate.
Mathematically, even if the frequency is greater than zero, there’s always a chance that no 
events will occur in a given year.
this is why we describe risk in ranges and distributions rather than single points: it captures 
both the variability of outcomes and the possibility of none at all.Chapter 4  Foundations

58 Building Block 2: Understanding Magnitude
Magnitude is the range of financial loss per event when something bad happens. Just like 
with frequency, magnitude is expressed as a range, not a single number.
The range captures the full spectrum of what could happen, while the P50 value  (the 
midpoint of belief) represents what typically occurs.
Examples
• Credential stuffing attack : $5K–$50K per incident (P50: $15K)
• Successful phishing attack : $8K–$25K per incident (P50: $12K)
• Ransomware incident : $300K–$1.2M per incident (P50: $500K)
• Major data breach : $2M–$15M per incident (P50: $5M)
A ransomware attack might cost $300K if your backups work perfectly and you 
recover quickly. It might cost $1.2M if you have complications, need extensive recovery 
work, or face regulatory fines. The range reflects all the variables that could affect the 
outcome:
• Recovery scenarios : How quickly can you restore operations?
• Regulatory responses : Will there be fines or compliance costs?
• Business impact variations : How much revenue do you lose during 
downtime?
• Incident complexity : How sophisticated was the attack?
Just like before, we express uncertainty as a 90% confidence interval. That means 
that based on what you know about similar incidents—the data you’ve collected, the 
experts you’ve consulted, and your own experience—you’re about nine times out of ten 
confident that the true loss will fall somewhere inside this range.
 How They Combine: The Risk Equation
Figure 4-2. The classic risk equationChapter 4  Foundations

59Recall from Chapter 1: risk is how often a bad thing happens, how much it hurts if and 
when it occurs, clouded by an uncertain future. This is commonly expressed in the 
simple risk equation, Frequency × Magnitude = Risk , as shown in Figure  4-2. This is the 
classic formula you’ll encounter in CISSP , other certifications, and most risk frameworks. 
It’s been the foundation of risk analysis for decades because it’s intuitive and practical.
But there’s a problem when you’re working with ranges instead of single numbers. 
If your frequency is 0.2–0.5 incidents per year and your magnitude is $300K–$1.2M per 
incident, you can’t just multiply the endpoints together (0.2 × $300K = $60K and 0.5 × 
$1.2M = $600K). That would miss all the possible combinations in between. What if you 
have 0.4 incidents at $800K each?
In fact, multiplying endpoints tends to overstate  risk because both extremes are low-  
probability values. A low-probability frequency times a low-probability impact yields 
an even lower probability outcome, which is why a Monte Carlo simulation is needed to 
handle the full range correctly.
Figure 4-3. How ranges combine in a Monte Carlo simulation
This is where Monte Carlo simulation comes in. It runs thousands of calculations 
with different combinations of frequency and magnitude values to give us a realistic risk 
range. Instead of “ransomware risk = $250K, ” we get “ransomware risk = $150K–$650K 
per year (median: $300K), ” a range that honestly reflects our uncertainty, as shown in 
Figure  4-3.
Monte Carlo simulation works by randomly sampling values within each range, 
frequency, and magnitude, many times, combining them to show all the possible 
outcomes and their probabilities. The result is a distribution that captures not just the 
extremes, but everything in between.Chapter 4  Foundations

60We’ll dive into Monte Carlo simulation in the next chapter, but for now, just 
remember: when you have ranges for both frequency and magnitude, you feed them 
into Monte Carlo to get your risk range. It’s how we do the math when our inputs are 
uncertain.
 Essential Vocabulary: Concepts You Need to Know
 Risk Analysis vs. Risk Assessment
These two terms are commonly used interchangeably with each other, but they do mean different things. Risk analysis  is the process of understanding and measuring risk 
(frequency, magnitude, scenarios). Risk assessment is the complete project that includes analysis plus decision-making context, scope definition, stakeholder communication, 
and recommendations. In other words:
• Analysis = “What’s the risk?” (the measurement part)
• Assessment = “What should we do about it?” (the complete business 
process)
An assessment contains analysis, but also includes scoping, stakeholder 
management, communication, and decision support.
 Uncertainty
We covered the concept of uncertainty in Part 1, but I want to elaborate and wrap it up here because uncertainty is such an important concept. Uncertainty is a feature of the 
human condition.
When conducting quantitative cyber risk management, it is essential to work with 
uncertainty rather than attempting to eliminate. While good analysis can reduce many 
uncertainties, some will always remain. Pretending otherwise or forcing false precision 
into your assessments undermines their credibility and renders them less useful.
 Two Types of Uncertainty
Aleatory uncertainty is randomness. That type of uncertainty can’t be reduced through 
more research. For example, a spinning ball on a roulette wheel is aleatory. More data 
collection isn’t going to tell you where the next ball is going to land.Chapter 4  Foundations

61Epistemic  uncertainty  is a lack of knowledge. This can often be reduced by 
obtaining more knowledge, though that requires investment: your time, other people’s 
time, research resources, sometimes money. Whether it’s worth the investment depends 
on how much better decisions you’ll make with that additional information.
There’s always a cost to reducing uncertainty. You want to match your research effort 
to the decision at hand. If you want to know if a car will fit into a garage, eyeballing it 
works fine. If you’re manufacturing cars to meet safety specifications, you need precise 
measurements. The same principle applies when measuring cyber risks. You need to 
know how the information will be used to decide how much precision is worth pursuing.
 Why This Distinction Matters
Knowing the difference between aleatory and epistemic uncertainty helps you spend 
your research time wisely. If uncertainty is epistemic (lack of knowledge), you might be 
able to research your way to better estimates. If uncertainty is aleatory (randomness), 
additional research won’t help much.
Cyber risks contain both types of uncertainty; however, most are epistemic, meaning 
you can improve your estimates with more knowledge:
• How many employees will fall for phishing (depends on training 
quality, email filters, user awareness)
• How quickly your incident response team will detect a breach 
(depends on tools, processes, staffing)
• How much a ransomware attack will cost (depends on backup 
quality, business continuity planning, insurance coverage)
• Infrastructure failure rates (can be reduced through better 
maintenance, monitoring, redundant design)
But a few components are truly aleatory—inherently random and irreducible:
• The exact timing and intensity of solar flares that could disrupt 
satellite communicationsChapter 4  Foundations

62• When and where earthquakes will strike with enough force to 
damage data centers
• Quantum mechanical randomness in hardware (though this is rare for most systems)
Table 4-3.  Aleatory vs. epistemic uncertainty examples
Aleatory (Random) Epistemic (Knowledge Gap)
solar flare timing phishing success rates
earthquake occurrence incident response times
Quantum hardware effects Backup recovery costs
Many events that seem completely “random” may have both components. You might 
not be able to predict exactly when a construction crew will cut a cable, but you can influence how often it happens through better coordination processes and how much it 
impacts you through redundant connections.
 When to Reduce Uncertainty vs. When to Live with It
Get better information when you’re close to a decision threshold, when the new 
information could realistically change your choice. Live with uncertainty when the 
decision is clear either way.
For example, if a security tool costs $100K annually and prevents $200K–$500K in 
losses, that’s probably a good buy. If it prevents $30K–$70K, probably not. If it prevents 
$80K–$120K, you’re near the threshold—get better information, as shown in Table 4-4.
Table 4-4.  When to research more vs. when to decide
Decision Threshold Research Cost Low Research Cost High
Near threshold research more Consider research
Far from threshold Live with uncertainty Live with uncertaintyChapter 4  Foundations

63Keep in mind that cost–benefit isn’t everything. Regulatory requirements might force 
your hand regardless of the math. Risk tolerance varies. Some organizations won’t accept 
even small chances of major losses. Strategic considerations matter too. A decision might 
align with broader initiatives even if the direct ROI isn’t clear yet.
Focus your effort on gathering better information that could change the decision. 
Everything else is wasted motion.
 Adopting a “Less Wrong” Mindset
There’s a famous quote by statistician George Box: “ All models are wrong, but some are useful. ” This isn’t just a quote about a statistical model. This is a philosophical mindset 
that you must adopt to succeed in your career in risk management.
Think of it this way: when you use a map to navigate your city, that map isn’t 
reality. It doesn’t show every building detail, every pothole, every tree. It’s a simplified 
representation that leaves out a great deal of information. But it’s still incredibly useful 
for getting where you need to go.
Risk analysis works in a similar way, except that we’re mapping uncertainty instead 
of streets. We can’t predict every variable or outcome, and we don’t need to. What we 
need is something better than gut instinct and color-coded matrices. We create the best 
model we can with the best information we have at the time. That’s what George Box 
means. The map is “wrong” in the sense that it’s not an exact  representation, yet it’s still 
very useful.
 WHY I DON’T QUOTE GEORGE BOX AT WORK
i love the George Box quote, but i don’t quote it in the office anymore. Years ago, i was trying 
to discuss modeling our uncertainty around technology risk with the chief risk officer at a 
financial institution. i made the mistake of quoting George Box. i said, “ all models are wrong, 
but some are useful.” t his was out of frustration because the chief risk officer kept wanting 
the risk analysis to be perfect with no uncertainty.
the Cro snapped back at me: “Go back and work on this until your model is not wrong. 
We can’t have any errors in this.” it’s clear that he misunderstood me, but i realized that i 
shouldn’t have said what i said. unless you understand the philosophical meaning behind what 
George Box was talking about, it might sound like a surrender or a cop-out.Chapter 4  Foundations

64now, instead of George Box, i quote a lfred Korzybski: “ t he map is not the territory.” i t basically 
means the same thing, but it’s a little more accessible to people who struggle to grasp some 
of these philosophical concepts. same philosophical foundation, much easier conversation.
 What This Looks Like in Practice
This mindset shift changes how you talk about risk on a daily basis:
Instead of “We have high cyber risk, ” you’ll say, “We expect 2–4 ransomware 
incidents annually, each costing $300K–$1.2M. ”
When executives ask, “How secure are we?” instead of showing red, yellow, and 
green boxes, you’ll say: “Our current security posture suggests we’ll face about $2.5M in 
annual cyber losses, with a 10% chance of a catastrophic event exceeding $10M. ”
When leadership asks, “Should we invest in this $300K security tool?” instead of 
saying, “It reduces our risk from high to medium, ” you can say: “This tool would prevent about 60% of successful phishing attacks. Instead of 24 successful attacks per year 
costing $480K total, we’d see about nine attacks costing $180K. The tool pays for itself in 
the first year. ”
This precision makes risk discussions strategic rather than academic.
 Starting Small: You Don’t Need 
to Revolutionize Everything
The “less wrong” mindset doesn’t require massive resources or organizational transformation. Pick one high-stakes decision your organization is facing. Model one 
scenario using the techniques in this book. Total time investment: 2-3 days. If that 
analysis helps improve the decision, expand on it from there.
Start with decisions where precision matters, like whether to invest in a $200K 
security tool, how much cyber insurance to buy, or which of three vendors poses the 
least risk.Chapter 4  Foundations

65 EXERCISE 4-2: BUILDING YOUR RISK INTUITION
For each scenario, estimate frequency and magnitude ranges.
Scenario A: Laptop Theft
an employee’s laptop with customer data was stolen from a coffee shop.
• Frequency: ___ times per year
• Magnitude: $____ to $____ per incident
Scenario B: Cloud Service Outage
primary saas vendor outage affects your operations.
• Frequency: ___ times per year
• Magnitude: $____ to $____ per incident
Which felt easier to estimate and why? What additional information would help you be more 
confident in these numbers?
 Chapter Summary
The Big Idea: Traditional risk education starts with tools and templates instead of purpose and decision-making. This backward approach makes quantitative methods 
seem impossible when they’re actually practical and necessary.
Key Takeaways
• Risk assessment exists to support better decisions, not to check 
boxes or create pretty dashboards.
• The “less wrong” mindset acknowledges that all models are imperfect, but some are useful for decision-making.
• Uncertainty is a feature, not a bug. Ranges provide more useful information than false precision.Chapter 4  Foundations

66• Start small : pick one decision and model one scenario rather than 
trying to revolutionize everything.
• Know your vocabulary . Risk analysis vs. assessment, frequency vs. 
probability, aleatory vs. epistemic uncertainty.
Bottom Line:  You don’t need to be perfect to be useful. Focus your research time on 
epistemic uncertainties where better information could change your decisions. Accept 
that some uncertainty will always remain, and that’s normal and manageable. When 
you have ranges for both frequency and magnitude, you feed them into a Monte Carlo 
simulation to get your risk range.
 What’s Coming Next
You’ve cleared the foundational fog around why traditional risk education makes 
quantitative methods seem impossible. You understand that risk assessment exists 
to support decisions, not create compliance theater. You’ve practiced thinking 
about frequency and magnitude, and you’ve started building intuition around 
uncertainty ranges.
Chapter  5 puts these foundations into action by guiding you through your first 
complete quantitative risk assessment using Monte Carlo simulation step-by-step.  
Starting with coin flips to demonstrate the concept, you’ll then apply the same principles 
to forecast real-world incident frequency and financial magnitude, transforming your 
“less wrong” mindset into actual numbers that inform practical decisions about risk 
treatment options.
References
Freund, J., & Jones, J. (2014). Measuring and managing information risk: A FAIR 
approach . Butterworth-Heinemann.
Hubbard, D. W. (2014). How to measure anything: Finding the value of “intangibles” 
in business  (3rd ed.). Wiley.
Hubbard, D. W., & Seiersen, R. (2023). How to measure anything in cybersecurity risk  
(2nd ed.). Wiley.Chapter 4  Foundations

