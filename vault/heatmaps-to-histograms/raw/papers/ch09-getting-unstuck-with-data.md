---
title: "Chapter 9: Getting Unstuck with Data"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 9
pages: 172-191
ingested: 2026-04-04
---

# Chapter 9: Getting Unstuck with Data

149
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_9CHAPTER 9
Getting Unstuck with Data
The obstacle is the way.
—Marcus Aurelius
One of the most challenging risk assessments I ever worked on involved a financial 
institution’s massive cloud infrastructure: the scope included everything from internal 
systems to customer-facing platforms, with threats ranging from cybercriminals 
to untrained employees. Getting started seemed daunting, especially the data 
collection phase.
I assigned this project to one of my risk analysts, expecting it would take a few weeks. 
Instead, I watched them struggle for over a month. They’d find industry reports but 
question whether they applied to our environment. They’d review our incident logs but 
worry the data was too sparse. Every data source seemed to create more questions than 
answers.
I took a step back and worked with them through data gathering step by step: started 
with what we had, created priors from external sources, and systematically filled in the blanks. The result was a comprehensive, defensible assessment that helped leadership 
make critical investment decisions. The key wasn’t having perfect data from day one. It 
was having a systematic approach.
If you’ve watched your analysts get stuck on data collection or if you’ve felt that same 
overwhelm yourself, you’re in the right chapter.
This is where everything you’ve learned starts to pay off. In Part 1, you built the 
foundation for thinking quantitatively about risk. In Part 2, you’ve built scenarios, 
defined what you’re measuring, and scoped your risk assessment. Now comes the part 
that stops most people in their tracks: data.

150This chapter bridges the gap between knowing what to measure and actually  
measuring it. You’ll learn the three-source model that forms the backbone of  
Chapters 10–12: how to find and evaluate external data, extract insights from internal 
sources, and work effectively with subject matter experts. By the end of Part 3, you’ll have 
a systematic approach that prevents the kind of paralysis my analyst experienced.
Data is where many people get stuck. Some find it intimidating, while others fall 
into common “data myths” that make quantitative risk feel impossible before they even 
start. Here’s the reality: the last decade of cyber incidents has given us mountains of 
data about what attacks look like. We just need to learn how to see the signal through 
the noise.
This isn’t about becoming a statistician or building perfect datasets. It’s about getting 
unstuck and moving forward with useful, defensible information that drives better 
decisions. By the end of this chapter, you’ll understand exactly what data you need and 
where to find it.
 Before You Search: Seeing the Problem Clearly
When analysts get stuck, it’s rarely because they lack data. It’s because they don’t know 
which data matters.
I’ve seen this pattern countless times: someone frames a risk scenario and starts 
hunting for every number they can find—incident counts, threat feeds, productivity 
rates, survey data, vendor reports. After two weeks, they’re surrounded by documents 
but still can’t answer the question that started it all: What should I measure?
Before you go searching, you need to see the problem clearly. The fastest way to do 
that is to work backward from your decision.
Start with the outcome you care about. In decision analysis, this is called the figure of 
merit , the single quantity your model produces to show how well different choices satisfy 
what you care about, such as minimizing cost or maximizing ROI. In a CRQ analysis, 
that’s usually annualized loss exposure (ALE) , but depending on your context, it could 
also be downtime hours  or the probability of a material event this year .
Then ask yourself: What drives that number? What has to happen for that outcome 
to change? Those drivers become your uncertainties .
Now ask: Which of those uncertainties are influenced by choices we can make? 
Those become your decisions .Chapter 9  GettinG UnstUCk with Data

151What you’re doing here is decomposing the problem: turning a complex tangle of 
possibilities into a structured chain of cause and effect. Once you’ve drawn that chain on 
a whiteboard, a piece of paper, or diagramming software, you’ve defined the few things 
worth measuring.
This step only takes five or ten minutes, but it can save you hours of wasted research. 
In decision science, that sketch has a name: an influence diagram. It’s a simple visual 
map showing how decisions, uncertainties, and outcomes connect. It’s one of the best 
tools for figuring out which data you need before you start gathering it.
 THE QUICK TEST FOR INFLUENCE DIAGRAMS
if changing an input wouldn’t meaningfully change your decision, it’s not worth chasing 
data for it.
As decision analyst Robert Brown explains, influence diagrams “visually display the 
flow of influence (cause, relevance, or correlation) among decisions, uncertainties, and 
values within a problem” and “clarify the kinds of information needed to think through 
the problem” (Brown, 2018).
 WHAT’S AN INFLUENCE DIAGRAM?
influence diagrams are decision maps. t hey show what affects what, without the complexity 
of a full decision tree. each shape represents a different type of element in your reasoning:
• Rectangles: Decisions you can make
• Ellipses: Uncertainties that affect the outcome
• Trapezoids: Fixed facts or constants
• Diamonds or hexagons:  Your objective or key result (like expected loss or rOi)
• Arrows:  the direction of influence—how one factor conditions another
You don’t need special software to use one. Start with your decision at the left, draw 
arrows to the factors that make it uncertain, and end with the outcome you’re trying to 
predict.Chapter 9  Gettin G UnstUCk with Data

152In a CRQ context, that might look like this:
• Decision:  Invest in ransomware detection technology.
• Uncertainties:  Attack frequency, probability of payout, cost of 
recovery.
• Outcome:  Annualized loss exposure.
• Objective:  Minimize expected loss or maximize ROI.
Even a rough sketch on a whiteboard clarifies which uncertainties drive your 
decision and, therefore, where to focus your data collection. A simple example is shown 
in Figure  9-1. The arrows show conditional influence between decisions, uncertainties, 
and outcomes.
Figure 9-1.  Simplified influence diagram for a ransomware decision
 GENAI PROMPT: MAP YOUR UNCERTAINTIES
Create an influence diagram for this risk scenario: [ describe your scenario ].
show the decision i need to make, the key uncertainties that affect that decision, and the final 
outcome (expected loss, downtime, or another measure of success). Label each node type 
clearly: decision, uncertainty, and objective, and describe how they influence one another.
Use the output as a first-pass map. Even if it’s rough, it will help you focus your data 
collection on the inputs that truly drive the outcome you’re modeling.Chapter 9  Gettin G Unst UCk with Data

153 Breaking the Data Myths That Keep You Stuck
Let’s tackle the biggest misconceptions head-on. These myths sometimes stop people 
before they even attempt an analysis, but each becomes manageable once you have the 
right approach to overcome it (see Table 9-1).
Table 9-1.  Breaking the data myths
Myth Reality What To Do Instead
Need lots of data need enough to decide Collect until decision is clear
Need expensive tools excel works fine start simple, upgrade if needed
Need actuarial tables Use proxy data Borrow from similar risks
No incidents = no model Use industry base rates adjust external data to your context
SMEs = garbage in/out structured elicitation works Use ranges, not point estimates
Need an army of people Focus beats resources scope tight, start small
Myth 1: “I Need a Lot of Data”
The Reality: You don’t need a lot of data. The goal of a risk assessment isn’t to count 
everything or achieve perfection; it’s to reduce enough uncertainty to enable better decisions. Sometimes a better decision only requires a little bit of data, while other times 
it needs more. In my experience, there can be diminishing returns if you over-collect, 
and trying to gather all possible data can hinder progress. You might never be done 
collecting, and you might never get to the decision-making.
Here’s what “enough data” looks like: whatever it takes to help a business leader 
choose between options. Can they decide whether to spend $200K on a new control? 
Accept the current risk level? Buy more insurance? If your data can inform those choices, 
you have enough.
In Practice: Collect just enough data to perform the analysis as you have scoped it. If 
you later need greater precision, you can always dig deeper. Start simple, then iterate.
Myth 2: “I Need Expensive Software and Specialized Tools”
The Reality: Some of the most effective risk analyses are done in Excel with basic 
functions like RAND() and simple arithmetic. The math behind Monte Carlo simulations is mostly addition, multiplication, and basic statistics. While specialized platforms 
can add convenience later, they’re not required to produce sophisticated, defensible 
analysis.Chapter 9  Gettin G UnstUCk with Data

154Here’s what you need: A spreadsheet program and the ability to think in ranges. You 
can build simulations, calculate percentiles, create loss distributions, and run sensitivity 
analysis all within Excel or Google Sheets.
In Practice: The value is in the thinking, the methodology, and the conversations 
an analysis prompts, not the tools. Master the concepts first with simple tools. If your 
analysis proves valuable and you need more efficiency later, then consider specialized 
platforms.
Myth 3: “I Need Actuarial Tables”
The Reality: Actuaries lack comprehensive actuarial tables for many types of 
emerging risks, not just cyber. When they face these situations, they typically use approaches familiar to risk analysts: proxy data, expert judgment, scenario modeling, 
and simulation techniques.
Here’s a technique commonly used in insurance that applies well to cyber risk: class 
rating. Instead of looking for cyber-specific tables, find data about similar organizations. 
If you’re a mid-size healthcare company, look for breach data from other healthcare 
companies of similar size. If you can’t find that, use broader datasets and adjust based 
on your specific risk factors.
In Practice: You can often borrow approaches from other risk disciplines. Actuaries, 
epidemiologists, catastrophe modelers, and environmental risk modelers all work with 
sparse, uncertain data, and many of their methods can be adapted for cyber risk.
 SIDEBAR: THE NIRVANA FALLACY
the nirvana Fallacy is a cognitive bias where people reject an imperfect solution while waiting 
for a perfect one that doesn’t exist. it’s named after the Buddhist concept of “nirvana,” a 
perfect, unattainable state.
in risk analysis, the nirvana Fallacy shows up as
• “risk quantification is impossible in cybersecurity until we have complete 
actuarial tables like the life insurance industry has.”
• “this industry report doesn’t perfectly match our company, so we can’t use it 
for risk modeling.”
• “Our sMe estimates aren’t 100% accurate, so we should stick with qualitative 
assessments.”Chapter 9  Gettin G UnstUCk with Data

155the fallacy tricks people into thinking that because a solution isn’t perfect, it’s not worth 
pursuing. But perfect data, perfect models, and perfect certainty don’t exist in risk analysis or 
anywhere else.
The antidote:  remember that “good enough to make a better decision” is infinitely more 
valuable than “perfect but never started.”
Myth 4: “No Incidents Means No Model”
The Reality: Most people can buy car insurance even if they’ve never had an 
accident. Insurance companies use demographic data, geographic factors, and vehicle 
characteristics, not just personal claims history.
The same principle applies to cyber risk. Even if you’ve never had a ransomware 
incident, you can estimate your risk using industry data, your control posture, and 
characteristics like sector, size, and technology stack. Here’s how: start with a base rate 
from external sources (like “3% of companies in our sector experience ransomware 
annually”), then adjust up or down based on your specific situation.
In Practice: External data provides base rates. Internal factors help you adjust those 
rates. You don’t need your own incident history to start.
Myth 5: “Using SMEs Equals Garbage In, Garbage Out”
The Reality: When used with structured elicitation methods, SMEs can be 
remarkably accurate, especially in domains where data is sparse or problems are novel. Research shows that calibrated expert judgment often outperforms unstructured 
opinion and, in some contexts, even data-only approaches (Cooke, 1991; Tetlock & 
Gardner, 2015).
The trick is structure. Instead of asking “What do you think the risk is?” try this: 
“Based on your experience, what’s the lower bound (P5) frequency? The upper bound 
(P95)? What feels most typical (P50)?” This three-point approach captures uncertainty 
while leveraging expertise.
In Practice: The problem isn’t expert judgment; it’s unstructured expert judgment. 
Simple techniques like asking for ranges instead of point estimates can dramatically improve accuracy.
Myth 6: “I Need an Army of People”The Reality: You can run effective risk assessments quickly and cheaply, often with 
just a few people working part-time. The key is starting at the right level of abstraction and resisting scope creep.Chapter 9  Gettin G UnstUCk with Data

156Here’s a simple approach: pick one well-scoped scenario and spend a few hours 
gathering data from the three sources (external, internal, and subject matter experts at 
your organization). That’s enough to build a basic model that’s far more useful than red- 
yellow-  green ratings.
In Practice: Efficiency comes from focus, not resources. Scope tightly, start simple, 
iterate as needed.
The next four chapters provide practical techniques to turn theory into practice. 
You’ll learn exactly how to evaluate and trust your data sources (Chapter 10), find and 
use external data that’s useful (Chapter 11), extract insights from internal sources you already have (Chapter 12), and structure expert conversations to get reliable estimates 
and blend all of the above (Chapter 13).
 From Myths to Method: The Three-Source  
Solution
Each myth we just discussed points to the same underlying problem: risk analysts 
may not know where to look for data or how to evaluate what they find. The solution 
is systematic: use three complementary data sources that work together to create 
complete, defensible risk pictures (Figure 9-2). External data provides industry context, 
internal data offers organizational specificity, and subject matter experts (SMEs) within 
your organization deliver forward-looking judgment. Together, these sources create a 
complete foundation for defensible risk estimates.Chapter 9  Gettin G UnstUCk with Data

157
Figure 9-2.  The three essential data sources
The three sources work together: external data provides context, internal data adds 
specificity, and expert judgment bridges gaps and looks forward.
Every credible risk assessment draws from as many of these three data types 
as possible. Think of them as the foundation of a building: for most assessments, 
all three sources will be available, though occasionally one may not be accessible 
(e.g., external data for novel threats, internal data for unimplemented systems, or 
subject matter experts for highly specialized or emerging domains). You can build 
something with a partial foundation, but the strongest structures rest on all three 
pillars.
 External Data: Context from the Outside World
External data is anything that originates outside your organization but relates to your risk 
scenario. This includes industry reports, breach databases, regulatory filings, academic 
research, and threat intelligence. Chapter 11 shows you exactly where to find this data 
and how to use it.Chapter 9  Gettin G Unst UCk with Data

158 Internal Data: Your Organizational Reality
Internal data comes from within your organization: incident logs, vulnerability scans, 
help desk tickets, postmortems, business continuity tests, and financial records tied to 
past events. Chapter 12 covers this topic in depth, including both typical and atypical 
data sources that prove useful, plus practical extraction methods.
 Subject Matter Expert (SME) Estimation: 
Forward-  Looking Insight
SME input comes from people with deep knowledge about systems, processes, threats, or consequences relevant to your risk scenario. This includes security professionals, 
engineers, business leaders, legal counsel, and operations staff. SMEs bridge the gap 
between past data and future risk. They can interpret data, fill gaps where historical 
information is missing, and adjust estimates based on changes in controls, threats, or 
business context. Chapter 13 dives deep into this topic.
When building your assessment, external data typically provides your starting 
baseline, internal data shows how your organization differs from industry norms, and 
SME input fills gaps and validates your findings.
 GENAI PROMPT: FIND RELEVANT DATA SOURCES
To practice applying the three-source model before seeing the detailed examples, use this 
prompt to brainstorm data sources for your specific risk scenario. Remember to validate any AI 
suggestions and verify that recommended sources actually exist and are accessible.
i’m assessing [ risk scenario] for a [company size/industry ] organization. help me identify:
• 3-4 external data sources (industry reports, breach databases, academic 
studies, regulatory data)
• 3-4 types of internal data we might already have (logs, tickets, financial records, past incidents)
• 2-3 job functions or types of subject matter experts to interview and one specific question to ask each
Focus on practical, accessible sources that a risk analyst could realistically obtain.Chapter 9  Gettin G UnstUCk with Data

159Here’s how the three-source model directly addresses each myth:
• Myth 1  (too much data): Focus collection on three specific 
source types.
• Myth 2  (expensive tools): Data and tools are cheap/free; upgrade 
only when needed.
• Myth 3  (actuarial tables): Use external industry data as your 
foundation.
• Myth 4  (no incidents): Combine external base rates with internal 
adjustments.
• Myth 5  (unreliable SMEs): Structure expert input systematically.
• Myth 6  (too many people): Each source requires different, 
manageable effort levels.
 How These Sources Work Together: 
Real-World Examples
Here’s how the three sources combine in practice across different risk scenarios.
 Example 1: Ransomware Risk Assessment
External data : According to the 2025 Verizon Data Breach Investigations Report, 
ransomware was involved in 44% of breaches (Verizon, 2025 ).
Internal data:  Your incident logs show no ransomware events in the past three years, 
but you’ve had five successful phishing incidents, and your backup testing revealed a 12-  
hour recovery gap.
SME input:  Your incident response lead believes that given your current controls, 
successful ransomware would likely take 24–48 hours to detect and three to five days 
to fully recover, with costs primarily driven by business downtime rather than ransom 
payment.Chapter 9  GettinG UnstUCk with Data

160Combined insight:  You might estimate a ransomware incident roughly once every 
10–20 years (lower than sector average due to no history, but not zero due to phishing 
success), with impact ranging from $300K to $3M. The wide impact range reflects 
uncertainty about incident severity. It could be a small ransomware event affecting a 
few systems or a major attack that encrypts critical infrastructure and requires extensive 
recovery efforts.
 Example 2: Phishing Success Rate
External data:  KnowBe4’s 2024  Phishing Benchmarking Report found that 34.3% of 
untrained employees clicked simulated phishing emails, but that rate dropped to 4.6% 
after a year of consistent security awareness training (KnowBe4, 2024 ).
Internal data:  Your security team’s records show 8% click-through rate on quarterly 
phishing simulations over the past year.
SME input:  Your IT security lead explains that your recent email filtering upgrade 
and mandatory training likely improved performance, but notes that real phishing 
attempts are more sophisticated than your tests.
Combined insight:  You estimate a 5–15% success rate for real phishing attempts 
in your environment. Lower than industry average due to good controls and training, 
but higher than your test results because actual attacks are more convincing. The range 
reflects uncertainty about attack sophistication vs. your defenses.
 Example 3: Cloud Outage Business Impact
External data:  While not a perfect match, an older Ponemon Institute study found that 
data center outages cost between $926 and $17,244 per minute, offering a useful reality 
check when evaluating other sources (Ponemon Institute, 2016 ).
Internal data:  Customer support tickets from last year’s 3-hour AWS connectivity 
issue show 47 customer complaints and 2 cancellations, representing roughly $8,000 in 
immediate revenue impact.
SME input:  Your VP of Customer Success believes the real impact was higher 
because most frustrated customers don’t complain; they just don’t renew. Your DevOps 
lead points out that you’ve since implemented better monitoring that would reduce 
detection time.Chapter 9  GettinG UnstUCk with Data

161Combined insight:  Current outage cost estimate of $6,000–$12,000 per hour, most 
likely $8,000. Internal data provides a good baseline, external data confirms you’re in the 
normal range, and SME input suggests hidden costs but also recent improvements.
 Why Multiple Sources Work Better
These examples show why no single source tells the complete story. External data 
provides context and benchmarks, and starting with it first helps reduce bias in 
subsequent data collection by encouraging objectivity and preventing you from 
anchoring on a single internal number or assumption. Internal data provides specificity 
and organizational reality. SMEs provide forward-looking judgment about changes and 
hidden factors. Together, they create a more complete and defensible picture than any 
one source alone, turning abstract industry statistics into actionable, organization-  
specific insights.
This triangulated approach produces assessments that are defensible, actionable, 
and far more useful than “high risk” or a red color on a heatmap.
 When You Have Limited Sources: A Practical  
Framework
Not every risk assessment starts with perfect data from all three sources. Here’s how to 
proceed based on what’s available.
 When You Have Only External Data
Situation:  Industry reports and studies, but no internal history or available experts.
Approach
• Use external data as your baseline estimate.
• Use wider uncertainty ranges to account for unknown organizational 
factors—we’ll cover specific adjustment methods in Chapter 10.
• Document assumptions about how your organization might differ 
from the industry average.
• Plan to refine estimates when internal data or SME input becomes 
available.Chapter 9  GettinG UnstUCk with Data

162Example:  Industry data shows 15% annual phishing success rate. Without internal 
context, estimate 5–30% for your organization with a note to narrow this range as you 
gather more information.
 When You Have External + Internal Data
Situation:  Industry benchmarks plus your own incident logs, metrics, or historical data.
Approach
• Start with an external baseline for context.
• Adjust based on internal data patterns (higher/lower than average, 
different trends).
• Use internal data to calibrate magnitude estimates (your actual costs 
vs. industry averages).
• Document what makes your organization different.
Example:  Industry average of 15% phishing success, but your logs show 8% in 
simulations. Estimate 6–12% for real attacks, noting that your training program appears 
effective, but real attacks are more sophisticated.
 When You Have All Three Sources
Situation:  External benchmarks, internal data, and access to knowledgeable experts.
Approach
• Use external data for initial context and benchmarking.
• Ground-truth with internal data to understand your specific 
situation.
• Leverage SME insight to adjust for future changes, hidden factors, 
and forward-looking risks.
• Create ranges that reflect the consensus or explain disagreements 
between sources.
Example:  Industry 15%, internal data 8%, SME estimates 10–15% for future attacks 
due to increasing sophistication. Final estimate: 8–15%, with most likely 12%.Chapter 9  GettinG UnstUCk with Data

163 QUALITY OVER QUANTITY
One high-quality source often beats three poor-quality sources. a  single credible s M e  with 
deep knowledge of your environment may provide better estimates than multiple outdated 
industry surveys.
the goal isn’t to use all three sources for every assessment. it’s to use the best available 
sources and be transparent about limitations.
 Understanding the Data Spectrum
Before we dive into practical data collection, it’s helpful to understand that not all data is created equal. Data falls along two important spectrums that affect how useful it is for 
risk analysis.
 Qualitative vs. Quantitative Data
Qualitative data is everywhere in cybersecurity: descriptive adjectives, arbitrary 
rankings, opinions, and feelings. You’ve seen it in the form of “high, medium, low, ” 
“red, yellow, green, ” or “fast, slow. ” These categories may help structure a conversation, 
but they are inherently subjective and can vary wildly from one team or one person to 
the next.
Quantitative data is about numbers: counting, ratios, and measurements. Instead of 
“a lot of incidents, ” you have “five security events last month” or “three failed logins from 
this user in an hour. ” Quantitative data has the benefit of specificity and repeatability, making it the backbone of defensible risk models.
 Subjective vs. Objective Data
Sometimes, the challenge isn’t about numbers vs. adjectives; it’s about perspective. Here, we encounter the subjective/objective spectrum.
Subjective data reflects personal opinions and judgments: “That risk feels high, ” 
or “I believe incidents will increase by 10% next year. ” Subjective data is shaped by 
experience, bias, and context. SMEs bring valuable insights, particularly in filling gaps Chapter 9  Gettin G UnstUCk with Data

164where data is sparse or providing context that external and internal data sources might 
miss. Still, subjective data is most reliable when used alongside other data sources rather 
than as a standalone foundation.
Objective data is about observations and measurements: “It’s 70 degrees today, ” 
or “We had one reportable data breach last year. ” These are concrete observations, less 
vulnerable to bias and personal interpretation.
 The Data Type Matrix
Table 9-2 shows how these concepts work together in practice.
Table 9-2.  Data type matrix
Qualitative Data Quantitative Data
Subjective • high, medium, low ratings
• interview responses
• risk descriptions• expert predictions of breach frequency
• sMe estimates of downtime duration
Objective • incident report narratives
• Categorized findings• actual incident counts
• Measured financial losses• Verified breach statistics
In the following chapters, we’ll show you specific techniques for each quadrant: 
how to structure subjective data, how to validate objective data, and how to extract 
quantitative insights from qualitative sources.
All types of data have value in risk analysis. While quantitative and objective data 
often feels more reliable, subjective expert judgment can be remarkably accurate when 
properly structured. In fact, as you’ll learn in Chapter 13, calibrated expert opinions 
can sometimes outperform other approaches in forecasting, especially when the right 
elicitation techniques are used (Tetlock & Gardner, 2015). The goal isn’t to dismiss any 
category, but to understand how to extract the most value from whatever data you have.Chapter 9  Gettin G UnstUCk with Data

165 Addressing AI-Generated and Synthetic Data
With the rise of large language models, you might wonder if AI should be considered a 
data source for cyber risk quantification. The short answer: No, it can’t be a primary 
data source.  AI-generated data has three fundamental problems for risk analysis:
It’s not grounded in direct observation.  GenAI doesn’t witness or measure 
anything. It reflects patterns from training data that may be biased, outdated, or 
incomplete.
You can’t trace the data origin easily.  You won’t know if output comes from 
a legitimate research report, a Reddit thread, or a hallucination. Risk models need 
auditable sources.
There’s a risk of circular reasoning.  If AI trained on human judgment is used 
to simulate expert judgment, you create feedback loops that reinforce biases without 
adding new information.
 How AI Can Support Real Data Sources
While AI shouldn’t be its own category, it can dramatically accelerate the three core 
sources:
For external research:  AI can help you find and summarize reports in minutes 
instead of hours. You still need to verify the underlying sources and check for 
hallucinations.
For internal analysis:  AI can extract patterns from logs and tickets faster than 
manual review. AI is still processing real internal data, just as a human would, but more 
efficiently.
For expert elicitation:  AI can help structure interviews, suggest questions, or 
challenge assumptions. It’s augmenting human judgment, not replacing it.
With that context about AI’s role established, let’s get practical.
 You Can Start Right Now
Here’s what I want you to remember: the data you need to get started is closer than 
you think.Chapter 9  GettinG UnstUCk with Data

166That vulnerability scan in your inbox? Internal data. The Verizon DBIR you skimmed 
last month? External data. The security engineer who remembers the last major 
incident? SME goldmine.
The goal isn’t perfection; it’s progress. Start with what you have, express uncertainty 
as ranges, and build confidence through iteration.
 EXERCISE 9-1: IDENTIFY YOUR DATA SOURCES
Scenario:  Your organization wants to assess the risk of business email compromise (B eC)—
the risk of attackers gaining access to employee email accounts and using them to commit 
fraud against the company or customers.
Your Task: For each source type, brainstorm what information would be valuable. Don’t try to 
collect the data yet; just identify what you’d look for and where you might find it.
Part A: External Sources
what industry data would help you understand B eC risk? Consider:
• how often do organizations experience B eC attacks?
• what’s the typical financial impact?
• what are the common attack methods?
• which industries or company sizes are most targeted?
Write down:  three to four types of external data that would be useful and where you might 
find them (industry reports, government studies, security vendor research, etc.)Part B: Internal Sources
what does your organization already track that might relate to B eC 
risk? think about
• email security logs and alerts
• Financial transaction monitoring
• employee reports of suspicious emails
• past incidents involving email compromise
• training records or a wareness metrics, like phishing test resultsChapter 9  Gettin G UnstUCk with Data

167Write down:  three to four types of internal data your organization might have and which 
teams would own them
Part C: SME Sources
who in your organization would have insights about B eC risk? Consider people who
• handle email security and monitoring.
• investigate security incidents.
• process financial transactions.
• train emplo yees on security awareness.
• Understand business processes that could be targeted.
Write down:  two to three people you’d want to inter view and one specific question you’d ask 
eachReflection Questions
• how do the three source types provide different perspectives on the same risk?
• which source type seems most accessible in your organization?
• what gaps do you notice—areas where you’d have limited information?
 Chapter Summary
The Big Idea: The data you need to start cyber risk quantification is closer than you 
think—you just need to know where to look and how to use it effectively.
Key Takeaways
• Break the data myths that keep people stuck: you don’t need massive datasets, expensive tools, or actuarial tables to begin.
• Use the three-source model: External data (industry context), internal data (your reality), and SME input (forward-looking insight) 
work together to create complete risk pictures.
• Start with what you have and improve over time rather than waiting 
for perfect information.
• Focus on decision-support—collect just enough data to help leaders choose between options, not everything possible.Chapter 9  Gettin G UnstUCk with Data

168• Understand the data spectrum  from qualitative to quantitative, 
subjective to objective—all types have value when used 
appropriately.
Bottom Line:  The goal isn’t perfection; it’s progress. Start simple, express 
uncertainty as ranges, and build confidence through iteration.
 What’s Coming Next
You’ve broken the data myths and understand the three essential sources: external data 
for context, internal data for organizational reality, and SME input for forward-looking 
insight. Now comes the critical question: How do you know if the data you find is actually 
worth using?
Before you start hunting for industry reports or mining incident logs, you need a 
systematic way to evaluate what you find. Not all data is created equal. Vendor surveys 
sit alongside rigorous research, marketing claims masquerade as statistics, and biased 
sources get shared as frequently as independent studies.
Chapter  10 teaches you how to vet and trust your data sources.  You’ll learn 
a simple three-step framework to evaluate any piece of information in minutes, 
distinguish quality research from hype, and adjust your uncertainty ranges based on 
data reliability. This evaluation skill is the foundation for everything that follows.
References
Brown, R. D. III. (2018). Business case analysis with R . Apress.
Cooke, R. M. (1991). Experts in uncertainty: Opinion and subjective probability in 
science. Oxford University Press.
KnowBe4. (2024). Phishing by industry benchmarking report.
Ponemon Institute. (2016). Cost of data center outages. Vertiv.
Tetlock, P . E., & Gardner, D. (2015). Superforecasting: The art and science of 
prediction. Crown Publishing Group.
Verizon. (2025). 2025 data breach investigations report.  https://www.verizon.com/
business/resources/reports/dbir/Chapter 9  GettinG UnstUCk with Data

