---
title: "Chapter 10: How to Vet and Believe Your Data"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 10
pages: 192-209
ingested: 2026-04-04
---

# Chapter 10: How to Vet and Believe Your Data

169
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_10CHAPTER 10
How to Vet and Believe 
Your Data
Don’t believe the hype.
—Public Enemy
I once inherited a FAIR-based risk program where some of the security scenarios didn’t 
pass a basic reality check. When I dug deeper, I discovered most of the impact estimates 
were based on a vendor marketing report that turned out to be a poorly designed survey 
with a tiny sample size and no disclosed methodology. The data wasn’t relevant to our 
company size or sector, but someone had plugged it directly into the model anyway.
I delayed the quarterly risk reports for a few weeks while I rebuilt the analysis with 
defensible data. When I finally presented the updated numbers, they were dramatically 
lower than what leadership had been seeing for months. This was a medium-sized 
company, and it turns out the new analysis showed that risk was elevated by at least 
$50m per scenario. That is a huge difference for a company of that size. That led to 
some very uncomfortable questions: “Why were our previous estimates so inflated? 
How do we know these new numbers are right? What else might be wrong with our risk program?”
Here’s the thing: this wasn’t malicious or lazy. The analysis was from a smart analyst 
who hadn’t been taught systematic data quality evaluation. If you’re reading this chapter, 
you probably don’t want to end up explaining to your CISO why your risk estimates just 
dropped by 60%.
Until very recently, exhaustive data collection, sourcing, vetting, and analysis were 
prohibitively difficult, even for large teams with significant resources. The common 
approach was to utilize limited data sources, which were heavily supplemented by SME 
estimates. A chapter like this would have been considered too onerous as recently as 

1702024. But generative AI has fundamentally changed the landscape. Tasks that used to 
take analysts weeks—sourcing diverse datasets, cross-referencing multiple studies, and 
identifying methodological red flags—can now be done in a fraction of the time with AI 
assistance.
This transformation means the time is now to implement rigorous data vetting and 
evaluation standards. We can finally afford to be systematic about data quality without 
the prohibitive time costs. More importantly, using AI-accelerated research with strong 
vetting processes makes our risk assessments far more defensible to skeptics who 
question quantitative approaches.
The cyber risk quantification field has developed sophisticated modeling techniques 
and frameworks, but it has largely ignored the fundamental question of data quality. 
Most CRQ resources will teach you how to build Monte Carlo simulations or apply FAIR 
methodology, but they won’t tell you how to evaluate whether your inputs are worth 
modeling in the first place. Other fields like climate science and nuclear safety have 
solved this problem decades ago with systematic frameworks for tagging data origin and 
quality.
Every risk analyst faces the same challenge: useful data is everywhere, but so is junk 
data disguised as research. Vendor surveys with small sample sizes, industry reports 
with undisclosed methodologies, and expert opinions that turn out to be less than expert 
all compete for space in your risk model. The difference between building a credible 
analysis and accidentally misleading your leadership often comes down to one skill: 
knowing how to evaluate whether a piece of information is worth using.
That skill, data vetting, is what this chapter teaches. You’ll learn a simple three-step 
process to evaluate any data source in minutes and turn questionable information into 
honest, defensible ranges you can confidently use in your models.
The challenge is bigger than any single analyst. The cybersecurity field now produces 
massive amounts of data—some excellent, some problematic. LinkedIn polls asking 
“How much did your last breach cost?” sit alongside legitimate research. Vendor blog 
posts citing cherry-picked statistics get shared as frequently as peer-reviewed papers. 
Without evaluation skills, it’s hard to distinguish between rigorous research and 
promotional campaigns dressed up as studies. Every dataset that goes into a quantitative 
risk assessment should carry its own “nutrition label. ” Reviewers should be able to see, 
in seconds, both the number and the story behind it: where it came from, how reliable 
it is, and what limitations they should know about. That’s why we need a systematic 
screening process.Chapter 10  how to Vet and BelieVe Your data

171 A Simple Three-Step Evaluation
The solution is systematic data evaluation that an analyst can do in a few minutes. 
Every data source receives the same treatment: a quick screening to eliminate obvious 
problems, basic documentation for audit trails, and a quality assessment to establish 
appropriate uncertainty ranges.
Figure 10-1. The three-step data evaluation process
Here’s how it works, as seen in Figure  10-1 :
• Step 1: Screen —Four quick checks to see if data is worth using.
• Step 2: Document —Capture essential details for transparency.
• Step 3: Assess quality —Adjust ranges based on reliability.
Figure 10-2  illustrates the systematic application of the four screening criteria to 
determine whether data sources are suitable for use. Keep in mind that we’re not trying 
to eliminate  all uncertainty. It’s about showing  our levels of uncertainty. Uncertainty can 
never be eliminated entirely. When data quality is questionable, we widen ranges rather 
than exclude potentially useful information. When data is strong, we can use narrower 
ranges with more confidence.Chapter 10  how to Vet and BelieVe Your data

172
Figure 10-2. Quality assessment decision tree: apply the four screening criteria 
systematically to determine if data sources are worth using.
Let’s walk through each step.
 Step 1: Screen Your Data
First, before using any data, we need to screen it through these four quick checks. This 
tells us if we should even use the data in the first place.
Relevance : Does this measure what I’m modeling?
• Use it : Downtime hours when measuring outage costs, incident 
response times for the same incident type, expert estimates with a 
clear scope that matches your scenario
• Be skeptical : Generic risk scores, mixed IT tickets, vague expert 
opinionsChapter 10  how to Vet and BelieVe Your data

173Here’s a quick example of how to apply those screening questions to a real-world 
data source you’ve almost certainly encountered before.
 EXAMPLE: EVALUATING “COST OF A DATA BREACH” TYPE REPORTS
i’m calling this one out because these reports are everywhere. t hey show up in executive 
decks, insurance filings, and vendor marketing slides, often cited as if they were definitive. 
Many readers will encounter them long before they ever build a quantitative model or review 
peer data.
the problem isn’t bad intent. it’s weak methodology. Most of these “ ponemon-like”  reports rely 
on small, self-selected samples, opaque survey designs, and results packaged for marketing 
rather than measurement. t hat doesn’t make them useless, but it does mean they belong in 
the low-confidence tier of this framework.
trea t them as directional input, not calibrated data. t hey can help shape priors or illustrate 
trends, but they shouldn’t anchor your quantitative model without independent, reproducible 
data to back them up.
Verifiability: Can I check the source and method?
• Use it: Published reports with methodology, timestamped logs, experts with track records
• Be skeptical: Random slide deck numbers, missing data with no explanation, unsupported expert claims, industry reports with no 
methodology
If the source can’t be verified, don’t discard it immediately. Note it as unverified and 
use it only as supporting or anecdotal evidence until stronger data becomes available.
Applicability: Does this fit my organization type?
• Use it: Same industry/size/region, similar systems, relevant expert 
experience
• Be skeptical: Different sectors, unrelated technology, irrelevant 
expert backgroundChapter 10  how to Vet and BelieVe Your data

174Coverage: Does this source miss important events?
• Use it: Known coverage rates, acknowledged limitations, realistic 
scope claims
• Be skeptical: Public databases missing private incidents, partial logs with no adjustment, claims of perfect visibility
 SCIENTIFIC FOUNDATION
this screening approach is adapted from the Numeral, Unit, Spread, Assessment, Pedigree 
(NUSAP)  framework (Funtowicz & ravetz, 1990), used for over 30 years in fields like 
environmental science, nuclear safety, industrial safety, public health, and many more to 
evaluate data quality under uncertainty.
Quick Decision Rules
• Fails 1 criterion: Use with caution; apply heavy uncertainty ranges 
(step 3).
• Fails 2+ criteria: Exclude and find better sources.
• Passes all 4: Move to Step 2 for detailed assessment.
If Data Raises Red Flags
• First choice: Find better data that passes all screens.
• If none exists: Use SME methods (Chapter 13) instead, possibly using the problematic data as a discussion starter.
 GENAI PROMPT: SOURCE SCREENING ASSISTANT
[paste data source, description, and raw data if possible]
i’m evaluating this data source for a risk assessment. please assess it against these four 
criteria:
 1. r elevance: d oes this measure what i  need for [ specific risk scenario]?
 2. V erifiability: Can the methodology and source be traced and checked?Chapter 10  how to Vet and BelieVe Your data

175 3. a pplicability:  d oes this fit a [your org size/industry] organization?
 4. Covera ge: w hat might this source be missing or excluding?
rate each criterion as pass/F ail and explain your reasoning.
Now, practice applying these screening criteria with some realistic examples:
 EXERCISE 10-1: SOURCE SCREENING PRACTICE
evaluate these three sources against the four screening criteria:
• a linked in poll: “ how much did your last cyber incident cost?” (47 responses)
• Your company’s incident response log from last year’s database outage
• Gartner report on cloud security costs (500+ enterprise survey, methodology 
disclosed)
For each source, determine: pass or fail on each criterion? u se or exclude?
Check your work with the GenAI prompt preceding this exercise.
 Step 2: Basic Data Collection
Data without context is dangerous. This step creates an audit trail that stakeholders can follow, helping you revisit assumptions later when conditions change. Make it a practice 
to save each data point you collect and each risk measurement in a shared, accessible 
location. This approach delivers two key benefits: transparency that builds stakeholder 
confidence and reusability that saves a tremendous amount of time, as similar data 
points appear across different scenarios and assessments. For each source that passes 
Step 1, capture these essential elements:
Essential Documentation FieldsData value: The central figure or finding you’re working with (percentage, dollar 
amount, frequency, or any quantitative claim). See Appendix C for a full list of data types and unit examples.
Unit: The measurement scale that makes your data unambiguous (incidents/year, 
USD loss, probability, etc.).Chapter 10  how to Vet and BelieVe Your data

176Source: Full citation with enough detail for someone else to find the exact same 
information.
Date collected: When you gathered this information (helps track data freshness).
Documentation Template
Table 10-1.  Sample data collection documentation template
Data Value Unit Source Date Collected
44% Breaches with 
ransomware present 2025 Verizon dBir, Summary 
of findings, p. 101/15/2025
12–24 phishing incidents incidents/year internal: Service now 
tickets, category “ phishing,” 
2023–20241/10/2025
$150K–$500K (C iSo 
estimate: $280K most likely)uSd breach cost SMe estimate: C iSo based on 
2022 incident + legal fees1/12/2025
 What If I Can’t Find a Range?
If your source only gives a single number with no range, that’s a signal to pay closer 
attention. Real-world data always has uncertainty. Look for any indication of spread 
around the main number, whether it’s confidence intervals (95% CI: 180K–320K), simple 
ranges (two to six incidents/yr), or even narrative qualifiers like “order-of-magnitude 
estimate. ”
If you still can’t find it, don’t worry. We’ll cover this in the next section.Documentation Best Practices
• Record sources immediately—don’t rely on memory.
• Use full citations, not just URLs that might change.
• Include enough detail for someone else to find the same information.
• Note ranges when available, not just single numbers.Chapter 10  how to Vet and BelieVe Your data

177 GENAI PROMPT: DOCUMENTATION STANDARDIZER
Create a systematic record for this data source: [paste source info ]. output in a table format 
that can be optionally exported as an excel file. Format it with these fields:
• data Value: [the specific number/range]
• unit: [precise measurement scale]
• Source: [full citation with page/section]
• date Collected: today’ s date
 Step 3: Assess Quality and Adjust for Uncertainty
Now comes the critical step: evaluating what you’ve collected and adjusting for reliability 
issues. This creates appropriate confidence levels, not artificial certainty. When data 
quality is questionable, we widen uncertainty ranges rather than exclude potentially 
useful information. As you learned in Chapter 4, uncertainty doesn’t mean we lack data. 
It means we’re defining our confidence in what we do have.
 The Simplified Quality Checklist
Use this four-category approach to quickly assess any source’s quality factors:
Fatal Flaws (Exclude Immediately)
• Fabricated or completely unverifiable sources
• Fraudulent organizations with known misconduct history
• Synthetic data presented as real incidents
• Marketing surveys disguised as research
• Sources or claims that defy basic logic
Major Concerns (×3 Range Adjustment—or adjust to your comfort level)
• Small sample sizes relative to the population they claim to represent
• Heavy vendor bias (selling solutions to the problem they’re 
measuring)Chapter 10  how to Vet and BelieVe Your data

178• Scale mismatches (Fortune 500 data applied to SMB scenarios)
• Cherry-picked timeframes or outlier events
• Geographic/regulatory mismatches (EU data for US analysis)
Moderate Issues (×2 Range Adjustment—or adjust to your comfort level)
• Survey data with undisclosed methodology
• Self-reported incidents without verification
• Data over two to three years old for rapidly evolving threats
• Missing error bounds or confidence intervals
• Moderate sample size limitations
High Quality (No Adjustment Needed)
• Large, representative samples with disclosed methodology
• Independent research from reputable organizations
• Recent data relevant to your context
• Transparent limitations and confidence intervals
• Multiple independent confirmations
These multipliers (×2, ×3) reflect my experience with what creates appropriately 
conservative ranges for different quality issues. You might find that ×1.5 or ×4 feels right 
for your risk program and organizational context. The key principle is consistent: lower 
quality data should result in wider uncertainty ranges. Start with these guidelines, then 
adjust based on what feels defensible when you present to stakeholders.
Important Rule:  Don’t stack penalties. Apply only the largest single adjustment 
needed. If a source has both small sample size (×3) and vendor bias (×2), use ×3, not ×6.
Appendix D  has a comprehensive list of quality factors, examples, and range 
adjustments.Chapter 10  how to Vet and BelieVe Your data

179 GENAI PROMPT: QUALITY ISSUE DETECTOR
[copy/paste source, source description or document (e.g. doc, PDF)]
analyze this data source for quality issues. Check for these problems:
• Sample size and methodology transparency
• potential bias or conflicts of interest
• relevance and applicability to my context
• Missing context or important limitations
rate as: Fatal Flaw, Major Concern, Moderate issue, or high Quality. describe in detail why you 
are making this assessment and cite specific examples in the source to back your reasoning.
 Range Adjustment Examples
When you identify quality issues, adjust uncertainty ranges to reflect reduced 
confidence:
How ×2 Adjustment Works
• Original estimate: “15–25% annual breach rate. ”
• After ×2 adjustment: “8–40% annual breach rate. ”
• You’re acknowledging: “This could be quite different from what the source claims. ”
How ×3 Adjustment Works
• Original estimate: “$500K average breach cost. ”
• Convert to range: “$300K–$700K” (rough estimate).
• After ×3 adjustment: “$100K–$1.1M. ”
• You’re saying: “This number is highly uncertain. ”
Here’s how quality assessment and range adjustment work together in practice.
Documentation ExampleChapter 10  how to Vet and BelieVe Your data

180
Table 10-2.  Complete documentation example showing quality assessment in 
practice
Data Value Unit Source Date 
CollectedQuality ConcernsRange AdjustmentUse Case
44% Breaches with ransomware 
present2025 Verizon 
dBir, Summary 
of findings, 
p. 105/15/2025 no 
significant concerns 
identifiednone 
appliedprimary 
input for 
baseline 
frequency
12–24 
phishing 
incidentsincidents/
yearinternal: 
Service now 
tickets, 
category 
“phishing,” 
2023–20244/10/2025 ~80% coverage 
rate, 
consistent 
logging×2 for 
coverage 
gapsprimary 
input, 
adjusted for 
incomplete 
visibility
$150K–$500K 
(CiSo 
estimate: $280K most 
likely)uSd breach 
costSMe estimate: 
CiSo based on 
2022 incident 
+ legal fees4/12/2025 Single 
expert, 
based on one 
incident×2 for limited 
sampleSupporting 
estimate, 
validate with external 
data
 Creating Ranges from Point Estimates
Many sources only provide single numbers: “ Average breach cost is $4.2M” or “23% of 
companies experienced ransomware. ” But quantitative risk assessment requires ranges 
to capture uncertainty. Look at the back of the report or the organization’s website 
for any additional data slicing or ranges. If you still can’t find anything, you’ll need to 
convert it.
Step 1: Identify What Type of Estimate You Have
• Mean/average: Mathematical average (common but problematic 
in cyber)
• Mode : Value that shows up most frequently, sometimes called “Most 
Likely” (rare but better)Chapter 10  how to Vet and BelieVe Your data

181• Undefined: Just a number with no explanation 
(unfortunately common)
Step 2: Convert Using the Appropriate Method
For Averages (Most Common): Cyber data is usually skewed; a few big incidents 
pull the average up. Don’t use the average as your mode/”most likely” value. At this point, there is no choice but to take the data and the report and ask SMEs to apply their 
best judgment and create a three-point estimate, using the average as a starting point.
Example: “ Average ransomware cost is $1.5M. ”
• Ask SMEs: “What’s a realistic low-end cost?” → $200K (5th percentile)
• “What’s typical in your experience?” → $800K (median)
• “What’s the high-end that’s still plausible?” → $5M (95th percentile)
For Point Estimates with No Context: Example: “12% of healthcare orgs experienced 
breaches. ”
• Build range around it: “8–18%” based on SME judgment
• Apply quality adjustments: If survey-based, maybe “5–25%”
Step 3: Apply Quality Adjustments to Your New RangeAfter creating the range, apply any ×2 or ×3 adjustments based on data quality issues 
identified above.
 EXERCISE 10-2: APPLY THE COMPLETE FRAMEWORK
Practice the full three-step process on these three data sources.
Sources to Evaluate
 1. Verizon 2025 DBIR finding:  “ransomware was involved in 44% of breaches” 
(large annual study, established methodology, publicly available report).
 2. Internal ServiceNow data:  eighteen phishing incidents logged over 
2023–2024, but system only covers about 80% of employees.
 3. CISO estimate: “Based on our 2022 incident, a breach would cost $280K most 
likely, could range $150K–$500K” (estimate based on a single past event).Chapter 10  how to Vet and BelieVe Your data

182Your Task
• Step 1:  apply the four screening criteria.
• Step 2:  document each source.
• Step 3:  assess quality and determine range adjustments.
Focus on documenting your reasoning: w hy did you categorize each source in the Simplified 
Quality Checklist? w hat specific factors drove your range adjustment decisions?
 Why Range Widening Works: The Scientific Foundation
Range widening isn’t punishment for poor data. It’s honest uncertainty accounting 
based on decades of research in decision science. When Douglas Hubbard studied how 
estimation accuracy relates to data quality, he found that imprecise inputs require more 
conservative ranges to maintain calibration (Hubbard, 2014).
Calibration means that when you say “90% confidence, ” you’re right about 90% of 
the time. Well-calibrated risk analysts produce uncertainty ranges that accurately reflect 
what they actually know vs. what they wish they knew.
This systematic approach to uncertainty comes directly from the NUSAP framework 
we adapted for screening. NUSAP explicitly encourages mapping the strength of each 
data component and using that assessment to inform how broadly uncertainty is 
expressed (Funtowicz & Ravetz, 1990). The ×2 and ×3 range adjustments apply this 
principle: weaker data components require broader uncertainty ranges.
The Logic
• High-quality data = narrower uncertainty ranges = higher confidence
• Poor-quality data = wider uncertainty ranges = appropriate skepticism
• False precision from bad data = worse than honest uncertainty
Real-World Example: A vendor survey of 47 companies claims “average breach 
cost is $2.1M. ” Without quality adjustment, you might use “$1.8M–$2.4M. ” But the small 
sample and vendor bias warrant ×3 widening, giving you “$600K–$6.3M, ” a range that 
honestly reflects what you actually know vs. what you wish you knew.
This approach prevents overconfident decisions based on shaky foundations while 
preserving useful signal from imperfect sources.Chapter 10  how to Vet and BelieVe Your data

183 The Ten-Minute Assessment Method
For each source, spend no more than ten minutes asking
 1. Can I defend this source if challenged? (Do I know where it 
came from and how it was created?)
 2. Does this actually measure what I need? (Is it relevant to my 
scenario and organization?)
 3. What would make me distrust this number? (What are the obvious limitations?)
If you can’t answer the first two confidently, find better data. The third question 
guides your range adjustments.
 AVOID THESE DATA VETTING TRAPS
Mistake 1:  “this number looks official, so it must be good.”
Reality: Marketing surveys often look professional.
Mistake 2:  “i’ll just use the average as my best estimate.”
Reality: Most incidents are below average, while a few large ones pull the mean up.Mistake 3:
 “i can’t find perfect data, so i won’t do the analysis.”
Reality:  honest uncertainty beats perfect paralysis.
Mistake 4:  “this data is recent, so it must be relevant.”
Reality:  recency doesn’t equal relevance—fresh data about the wrong scenario is still 
useless for your analysis.Mistake 5:
 “if multiple sources say the same thing, it must be true.”
Reality:  industry reports often cite the same original flawed study, creating an echo chamber 
of bad data.Mistake 6: “Big sample size automatically means high quality.”Reality:
 a survey of 5,000 C i S o s who self-select to respond is still biased, regardless of size.
Mistake 7:  “academic sources are always more reliable than industry reports.”Chapter 10  how to Vet and BelieVe Your data

184Reality:  peer -reviewed research can be years out of date or too theoretical for practical risk 
decisions.
Mistake 8:  “i found one great source, so i don’t need to validate it.”
Reality:  even high-quality sources have blind spots and limitations that matter for your 
specific scenario.
 “Good Enough” Decision-Making
Don’t overthink it. You’re looking for obvious problems, not conducting a peer review. 
Perfect data doesn’t exist in risk analysis. The goal is appropriate uncertainty, not false 
precision.
Stop assessing when
• You’ve identified the main quality issues.
• You know what range adjustment to apply.
• The data answers the core question.
• You can explain the limitations to stakeholders.
• Further analysis won’t change your decision (see Value of 
Information sidebar below).
Dig deeper only when
• Your quality assessment is inconclusive.
• The data doesn’t answer your core question.
• You found major red flags that need investigation.
• The decision involves significant budget or risk.
• Conflicting sources give dramatically different answers.Chapter 10  how to Vet and BelieVe Your data

185
 THE VALUE OF INFORMATION: WHEN TO STOP LOOKING
Before spending more time hunting for better data, ask: “ will finding more information actually 
change my decision?” t his concept, called the Value of i nformation (Vo i ), is central to d ouglas 
hubbard’s applied i nformation e conomics approach ( h ubbard, 2014).
The Core Principle:  information is only valuable if it could change your decision, and the value 
depends on how much that decision matters.
if you’re deciding between two security controls and already have enough data to make a 
confident choice, additional research has low V oi.
if you’re presenting to the board and your estimates could change budget allocation by 
millions, high-quality data has high V oi.
if you’re doing a quick risk screening for quarterly planning, perfect precision has low V oi.
Sometimes, a single high-quality source beats spending days hunting for the perfect dataset 
that doesn’t exist.
 Chapter Summary
The Big Idea: Every piece of data tells a story about its reliability. Learn to read that story so you can build defensible risk estimates from imperfect sources.
Key Takeaways
• Don’t believe the hype. Learn to distinguish quality research from marketing disguised as data
• Apply systematic screening before evaluating quality: Does it measure what you need? Can you verify it? Does it apply to 
organizations like yours?
• Use the quality assessment framework to identify red flags and 
apply appropriate range adjustments (×2, ×3) that reflect reduced 
confidence.
• This applies to ALL data types: external sources, internal data, and 
SME input all need systematic evaluation.Chapter 10  how to Vet and BelieVe Your data

186
• Transparency about uncertainty is better than false precision . 
Wider ranges from poor-quality data honestly reflect what you 
don’t know.
Bottom Line:  Every dataset should carry its own “nutrition label” showing where it 
came from, how reliable it is, and what limitations matter for your analysis.
 What’s Coming Next
Chapter 11 will take you hunting for external data, showing you exactly where to look, 
how to extract usable numbers from industry reports, and how to spot the red flags that 
distinguish quality research from vendor hype.
Time to go find some data.
References
Funtowicz, S. O., & Ravetz, J. R. (1990). Uncertainty and Quality in Science for Policy . 
Springer Netherlands.
Hubbard, D. W. (2014). How to measure anything: Finding the value of intangibles in 
business  (3rd ed.). Wiley.
Verizon. (2025). “2025 Data Breach Investigations Report” . Retrieved from  https://
www.verizon.com/business/resources/reports/dbir/Chapter 10  how to Vet and BelieVe Your data

