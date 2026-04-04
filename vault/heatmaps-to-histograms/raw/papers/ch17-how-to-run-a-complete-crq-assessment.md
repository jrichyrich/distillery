---
title: "Chapter 17: How to Run a Complete CRQ Assessment"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 17
pages: 343-367
ingested: 2026-04-04
---

# Chapter 17: How to Run a Complete CRQ Assessment

325
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_17CHAPTER 17
How to Run a Complete 
CRQ Assessment (A Full Walkthrough)
One thing a person cannot do, no matter how rigorous their analysis, is 
draw up a list of things that would never occur to them.
—Thomas Schelling
This chapter walks through one complete CRQ analysis from start to finish. It is 
intentionally deep rather than broad. Instead of giving you several lightweight examples, 
I want to show you a full, real-world workflow, step by step, so you can repeat it in your 
own environment.
Additional sample scenarios and industry variations will be available on the book’s 
companion site at heatmapstohistograms.com.
 Could It Happen Here? Modeling 
a Ransomware Event
It started with a news alert on a Tuesday morning.
You are the quantitative risk lead at a US-based mid-sized fintech-style financial 
services provider. A company almost identical to yours, same industry, similar size, and same technology stack, had been hit by ransomware. Their customer-facing platform 
was offline for three days. Customers vented on social media. Analysts speculated on the 
financial hit. Within hours, your CFO forwarded the article with a short note:

326“If this happened to them, could it happen to us? What would it cost? Are we doing 
enough to mitigate this kind of risk?”
That single question triggered the analysis you are about to walk through.
This is not a postmortem. We are not reconstructing what happened in their 
environment. We are performing a forward-looking quantitative risk assessment. The 
goal is to estimate our potential exposure if we suffered a ransomware incident similar to 
our competitor. It raises a meaningful question, could this happen to us?,  and one we can 
answer with evidence, ranges, and structured reasoning.
When a competitor suffers a ransomware incident, I do not want to treat it as a one-  
off story. I want to know whether it reflects a broader pattern in our sector. One of the 
quickest ways to do that today is with a targeted GenAI search that pulls together recent 
ransomware activity among peer organizations.
 GENAI PROMPT: SECTOR RANSOMWARE SIGNAL FINDER
I want to stay ahead of ransomware trends in my sector so that I can brief leadership before 
a headline forces the conversation. Search credible, verifiable reporting for ransomware 
incidents in the past twelve months that match my organization’s profile. Focus on incidents at 
companies similar in size, industry, technology stack, and regulatory environment.
My organization is a financial services company based in San Francisco with about one billion 
dollars in annual revenue. We operate primarily in California and use AWS for production and 
enterprise workloads.
Return:
 1. A list of the most relevant ransomware incidents affecting peer organizations
 2. A short summary of each incident
 3. The primary loss drivers (availability, response, data loss, reputation)
 4. Any observable patterns or trends within the sector
 5. Why each incident is relevant to us
 6. Links to the original sources
Only include incidents with reliable reporting or clear evidence. Do not invent sources.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

327 Step 1: Framing the Scenario
As described in Chapter 7, the first real and most important step in any risk analysis is 
developing a realistic and properly scoped scenario. The news story gave us a threat, a 
rough sense of impact, and a clear signal that leadership is concerned. That may not feel 
like much, but it is more than enough to start.
In practice, I would talk with a few people in engineering and operations to identify 
the most likely entry point for ransomware in our environment. The goal is to keep the 
scenario high-level so it stays meaningful to executives while still being specific enough 
to model.
After a short set of conversations, we aligned on the following A-T-E structure, in 
Table 17-1.
Table 17-1.  Risk analysis scope for a ransomware incident
Scoping Element Description
Asset Customer-facing production services and data hosted in AWS
Threat external actor deploys ransomware after gaining unauthorized access
Effect Multi-day outage with partial encryption of production systems and potential data loss
To close the loop, I brought this back to the CFO to confirm it reflected the concern 
behind the original question. It did. Modeling this scenario would give a defensible estimate of our exposure and help them understand whether our security investments 
are sufficient.
This is also a natural moment to identify the decision this analysis will inform, as 
described in Chapter 19. The decision is
Based on the estimated annualized loss exposure and the causal factors driving 
it, what kinds and levels of resilience and credential-hardening improvements 
should we implement in FY 2026?
See Chapter 7 for how to scope scenarios using the A-T-E framework.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

328 Step 2: Setting the Stage—From Headline to Hypothesis
The news story gave us enough information to frame the problem, but not enough to 
model it. Reporters described an attacker using stolen automation or developer tokens 
to access a peer company’s cloud environment, encrypt storage, and take services offline 
for about three days. There were hints of partial data loss and a multi-million dollar 
financial hit, but there was no underlying data, no breakdown of losses, and no visibility 
into their controls.
That is useful context, but it is not evidence.
The purpose of the headline is to shape the initial hypothesis we want to test. It helps 
us ask questions such as
• What type of ransomware event are we comparing ourselves against
• Which assets appear to matter most
• What type of access would the attacker need
• How severe the business disruption might be
• What a plausible version of this event would look like in our 
environment
These clues help refine the scenario we scoped in the previous section. We are not 
using numbers from the news article as inputs. The inputs for the model come later, 
when we gather and vet external data, internal signals, and SME input, as covered in 
Chapters 10 through 14.
For this analysis, we start with a simple and defensible set of assumptions:
• A cloud-hosted production environment
• Privileged access gained through credential compromise
• Encryption of data causing a two- to three-day outage
• Some possibility of partial data loss
• No catastrophic multi-week rebuild
These assumptions give us a clear hypothesis to test: If a similar event happened 
here, what would our exposure look like?ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

329 What Data We Need for This Scenario
Before we start collecting evidence, we need to be clear on what data this scenario 
requires. Our scope defines everything. Once we settled on a ransomware event that 
affects customer-facing production systems in AWS, with privileged access gained 
through compromised credentials and a multi-day outage, the data requirements 
became clear.
For frequency, we need evidence that helps us answer two questions:
 1.  H ow often do organizations like ours experience 
ransomware events?
 2.  H ow do our internal controls, history, and architecture make this 
event more or less likely?
That means we look for external rates from high-quality studies, internal telemetry 
on credential and access protections, and SME insight into plausible attack paths.
For magnitude, we use the six forms of loss from Chapter 8 as our structure. In 
this scenario, five of them are in scope: response, replacement, productivity, fines and judgments, and reputation. The sixth, competitive advantage, is scoped out because this 
event does not materially change our strategic position. Some of these require internal 
data, such as restore times or contractual obligations. Others benefit from external 
anchors, such as typical loss ranges reported in security research and studies.
This gives us a clear shopping list. The model only needs two things: how often this 
event could happen, and how large it could be. Everything we collect next is aimed at 
those two questions.
 GUARDRAILS AGAINST SCOPE CREEP
At this stage, the biggest threat isn’t bad data. It’s the scenario mutating into something it 
isn’t. A single headline can turn into five different risk assessments if we’re not careful.
To keep the analysis on track, only three things are allowed right now:
 1. What the scenario is:  A clear A-T- e everyone can picture the same way
 2. What the scenario is not:  explicit exclusions so we don’t drift into new 
threat models
 3. What we need next: Only the evidence required to estimate frequency and 
magnitudeChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

330If someone adds a detail, ask
“Does this change the decision we’re supporting?”If not, it goes in the parking lot.
 Step 3: Collecting and Vetting the Data
Good analysis is built one input at a time. For each part of the model, we follow the 
same cycle you learned in Part 3: begin with a strong external anchor, refine it with 
internal telemetry, and shape it into a realistic range with SME judgment. Every new 
piece of information is screened using the Chapter 10 criteria of relevance, verifiability, 
applicability, and coverage. This ensures we widen uncertainty where the evidence is 
weak and tighten only when we can justify doing so.
The simplest way to see this in action is to start with frequency. Once we know how 
often this kind of event could occur, we will estimate the magnitude using the six forms of loss.
 Estimating Frequency
External Baseline
We begin with the question:
For a company like ours, how often do ransomware events occur in a typi -
cal year?
To answer it, I used GenAI to research and find external sources. It found many 
reports, blogs and news stories, but I narrowed it down to two reports: the Cyentia IRIS 
Ransomware 2024 report and the Verizon DBIR 2025 report. Both meet the High Quality 
criteria from Chapter 10. They are transparent about their methods, have strong sample 
sizes, and cover industries similar to ours.
The Cyentia IRIS report gives us the clearest external baseline. According to IRIS, 
organizations in the one billion to ten billion dollar revenue band have an upper bound 
probability of about 9–10% of experiencing at least one ransomware event in the next 12 
months. Screening the source using the Chapter 10 criteria confirms it as High Quality. 
Following the approach from Chapters 10 through 14, we treat the external estimate 
as the midpoint, widen the range based on evidence quality, shift it using internal 
telemetry, and shape the boundaries using SME judgment.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

331• P5: 0.05 events per year
• P50: 0.10 events per year
• P95: 0.15 events per year
This becomes our external prior. The data collected for this scenario is summarized 
in Table 17-2.
Table 17-2.  External data collected for our scenario
External Signal Observation Why It Matters Quality 
Category
Annual ransomware event 
probability (peer-sized 
organizations)8–12% per year (IRIS 
Ransomware 2024)establishes the external 
baseline for frequencyhigh 
Quality
Typical ransomware loss (all forms combined)$1.4M (IRIS Ransomware 2024)
provides scale for 
magnitude; used as a 
sanity check, not an inputhigh 
Quality
95th percentile 
ransomware loss~$50M (IRIS Ransomware 2024) helps shape the upper 
bound of SM e rangeshigh 
Quality
Ransomware involvement 
in breaches (all industries)44% (Verizon DBIR 2025) Confirms the significance of ransomware as a top 
incident patternhigh 
Quality
Credential misuse (initial access vector)Credential abuse is the most common initial access vector 
in breaches (DBIR 2025)Validates our scenario’s 
entry point (compromised 
access) high 
Quality
Sector context (Financial 
Services)15% of incidents involve ransomware (IRIS 
Ransomware 2024)helps calibrate frequency 
slightly downward for our sectorhigh 
Quality
Internal RefinementNext, we look inward. Following the guidance in Chapter 12, we narrowed our internal 
data collection to a small set of relevant signals that have good coverage across the 
enterprise and directly inform either frequency or magnitude for this scenario. We 
reviewed last year’s Internal Audit report covering the in-scope systems, a NIST CSF ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

332self-assessment conducted by the Information Security team, and three years of security 
incidents recorded in JIRA. We found high MFA adoption for administrators, high 
backup success rates, and no ransomware events in the last three years.
GenAI helps here, too. With a few prompts, it can surface control adoption rates 
across industries from research institutes, vendors, and nonprofit reports. These 
benchmarks give us context for how much to narrow the range around our external 
estimate or whether to shift it slightly.
Here is what we gathered so far from internal telemetry, in Table 17-3. We are not 
ready to blend yet. We will hold these signals for the next step when we combine them with external data and SME judgment.
Table 17-3.  Internal signals relevant to the scenario
Internal Signal Observation Why It Matters Quality 
Category
MFA coverage 
(administrators)95% Reduces likelihood of credential misuse high Quality
Backup success rate 97% Strong indicator of recovery 
capabilityhigh Quality
Median restore time 18 hours Anchors outage duration estimates high Quality
95th percentile restore time32 hours Sets upper bound for restoration time
high Quality
historical ransomware 
incidents (three years)0 Suggests lower local 
frequencyhigh Quality
Legacy access token 
(privileged)present Creates a realistic attack path Moderate Issues
Security incidents (JIRA, 
three-year window) no confirmed malware or 
crypto locker activityhelps calibrate frequency 
downwardhigh Quality
Internal Audit report (last 
year)In-scope systems compliant with key access controlsReinforces posture strength
high Quality
nIST CSF self-
assessmentpartial ga ps in identity and 
access managementhelps shape SM e 
interpretation and tail boundsModerate IssuesChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

333Before we use these signals in the model, we tag each one with a Quality 
Category. This comes from the screening process in Chapter 10. High-quality 
evidence is observable, relevant to the scoped asset, and backed by strong telemetry 
or documentation. Moderate Issues means the evidence is useful but incomplete or 
forward-looking, so we keep the range wider to avoid overconfidence.
Finally, we speak to engineering and operations SMEs. We bring them the external 
baseline and internal telemetry and ask the structured questions from Chapter 13: Does 
this feel right? What would surprise you on the low end? What would surprise you on the 
high end? What would need to happen for the tail of this distribution to occur?
As usual, the conversation is not perfectly linear. One SME believes the frequency 
should be lower based on our strong credential protections. Another raises concerns 
about the legacy access token in one subsystem. A third shifts into “what-if” scenarios 
that are technically possible but do not match the scope of our A-T-E definition. This 
is normal. SME workshops often drift into imaginative territory or into past incidents 
that feel familiar but are not relevant to the modeled scenario. Chapter 13 covers this 
in detail. The analyst's role is to acknowledge input, bring the discussion back to the 
scoped event, and separate insight from noise.
With a bit of guidance, we refocus on what matters. The SMEs converge on a shared 
view: a ransomware event in any given year is unlikely but not negligible. Our controls 
make opportunistic attacks harder, but a motivated actor with access to credentials 
could still cause harm. They also point out that while most detection rules are strong, 
some lag current attacker techniques. This helps us shape the distribution's boundaries, 
especially in the upper tail.
As discussed in Chapter 13, SME input is essential but carries natural uncertainty. 
SMEs provide insight, not telemetry. They can describe plausible attack paths and 
identify weak spots, but they cannot give precise probability estimates. They also 
disagree, anchor on recent incidents, and sometimes over-extrapolate from isolated 
experiences. This is why we tag SME-derived inputs as Moderate Issues. The Quality 
Category does not reflect the capability of the people. It reflects the limitations of human 
judgment, as you learned earlier in the book.
Following the blending method from Chapter 14, the external base rate is our prior. 
Internal telemetry is the first update. SME input is the second update that shapes the tail 
and prevents us from becoming overconfident. We are not replacing earlier estimates. 
We are refining them in light of expert insight that sits in context, not in code.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

334After incorporating the SME input, we arrive at a frequency estimate shown in 
Table  17-4  that reflects everything we know about this scenario and this environment.
Table 17-4. Final frequency estimate
P5 P50 P95
.04 .08 .13
This is our blended posterior. The earlier tables for external data and internal 
telemetry form the audit trail that shows how we moved from a 10% industry base rate to 
a narrower and slightly lower local estimate between 4% and 13%, centered around 8%.
 Estimating Magnitude: The Six Forms of Loss
Magnitude follows the same pattern as frequency. For each loss form, we begin with 
external anchors, refine them using internal data, and shape the boundaries with SME 
judgment. We then vet what we found using the criteria from Chapter 10 and apply the 
quality category to determine how wide the range should be.
To keep this example readable, we will walk through two loss forms in detail. These 
show the full thought process of the three-source model. After that, we summarize the 
remaining forms more briefly.
Response (Full Walkthrough)
We start with external anchors. IRIS provides sector-wide ransomware loss data, including 
typical losses and tail losses. We do not use these numbers directly, but they give us a 
realistic sense of scale. This keeps us from anchoring our ranges too low or too high.
Next, we refine using internal data. Our internal labor rates, IR staffing patterns, and 
historical incident workstreams tell us what response looks like for us, not the industry 
as a whole. This is exactly the distinction from earlier chapters: external data gives shape, 
internal data gives scale.
Finally, we bring in SMEs. We guide the conversation the way Chapter 13 teaches:
• “What happens in a good response?”
• “What slows things down?”
• “What would surprise you on the high end?”
• “Has this ever gone differently than expected?”ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

335SMEs help us set the boundaries. They identify coordination bottlenecks, cross-team 
delays, and tasks that scale with outage severity. Two SMEs initially disagree, which is 
expected. One anchors on a recent near miss, the other on an older multi-week incident. 
We bring them back to the scoped scenario and align on plausible bounds.
Because this estimate blends external research and SME judgment, we tag it as 
having Moderate Issues . The final data we collected in Table  17-5  is very useful, but not 
perfect.
Table 17-5. Response costs estimate
P5 P50 P95
$400k $700k $1.2M
Productivity (Full Walkthrough)
Productivity loss starts with a simple question from Chapter 8:
“How much money does the business lose when systems are down?”
We could not find any relevant external data, so we turned to internal telemetry. 
Restore times tell us how long we would realistically be offline. Revenue-per-day and 
customer usage patterns help translate hours into financial impact.
Next, SMEs shape the boundaries. We use the elicitation methods from Chapter 13 to 
keep the conversation grounded:
• “Which systems generate the most business value?”
• “How quickly do customers notice?”
• “What do manual workarounds look like?”
• “What would surprise you on the high end?”
As expected, the discussion drifts. One SME imagines a catastrophic multi-week 
rebuild, which is out of scope. Another describes an outage that only affects internal 
tools, which would reduce loss but does not match the threat scenario. We tighten the 
conversation and bring them back to the A-T-E definition.
Because this estimate combines internal data with forward-looking assumptions, we 
tag it as having Moderate Issues . The final data we collected is in Table  17-6 .ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

336Table 17-6. Productivity costs estimate
P5 P50 P95
$500k $900k $2M
Replacement (Short Form)
Replacement costs draw mainly on internal evidence. Engineering provides reliable 
estimates for rebuilding cloud infrastructure and restoring critical configurations. These 
tasks are well understood and repeatable, so we tag this loss form as High Quality  in 
Table  17-7 .
Table 17-7. Replacement costs estimate
P5 P50 P95
$200k $400k $800k
Fines and Judgments (Short Form)
Here, we start with external research on enforcement actions and translate it using our 
own contractual obligations and regulatory environment. Legal SMEs help us interpret 
vague public cases into concrete ranges that fit our business. This mix of external 
anchors and documented internal terms makes the evidence High Quality  in Table  17-8 .
Table 17-8. Fines and judgments costs estimate
P5 P50 P95
$0k $250k $1.5M
Reputation (Short Form)
Reputation loss is the most uncertain. External research provides broad patterns of 
churn and brand impact, but internal sales and customer success teams provide the 
context that matters. Because this loss form depends on customer behavior that has not 
yet occurred, we tag it as having Moderate Issues  in Table  17-9 .ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

337Table 17-9.  Reputation costs estimate
P5 P50 P95
$0k $500 k $3M
 Blending the Evidence for Magnitude
Just as in Chapter 14, each loss form moves through the same cycle: external anchor, 
internal refinement, SME shaping, and an adjustment based on the quality of the 
evidence. The blended ranges below in Table 17-10 are the posterior for each loss form.
Table 17-10.  Final magnitude ranges by loss form (P5-P50-P95)
Loss Form P5 P50 P95
Response $400 k $700 k $1.2M
Replacement $200 k $400 k $800 k
productivity $500 k $900 k $2.0M
Fines and Judgments $0 $250 k $1.5M
Reputation $0 $500 k $3.0M
These ranges reflect the outcomes and purpose of Chapter 10's vetting framework. 
Strong evidence narrows uncertainty; weaker evidence widens it. The result is not one 
number, but a defensible range that communicates our uncertainty.
 Consolidating Loss Forms into a Single Magnitude Input
Some CRQ tools model each loss form separately and add them during the simulation. The spreadsheet from Chapter 15 uses a simpler structure: it expects one magnitude 
distribution per event, expressed as P5, P50, and P95.
To use our five loss-form estimates in that model, we combine them into a single set 
of inputs.
This is not a perfect mathematical combination. We are not convolving distributions. 
We are creating a defensible approximation that preserves the scale and uncertainty 
of the blended loss forms. Adding the P5, P50, and P95 values across loss forms is an ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

338approximation. In practice, the P5 of the total is not just the sum of the individual P5 
values unless every loss form moves in perfect sync. Most events do not work that way. 
This shortcut produces a wider range, which is fine for early analyses and helps keep the 
example easy to follow.
 1.  A dd the P5 values across the loss forms.
 2.  A dd the P50 values.
 3.  A dd the P95 values.
This gives us an approximate total loss per event.
Table 17-11.  Combined magnitude estimate (for spreadsheet input)
Bound Approximate Sum Across Loss Forms
p5 $400 k + $200 k + $500 k + $0 + $0 = $1.1M
p50 $700 k + $400 k + $900 k + $250 k + $500 k = $2.75M
p95 $1.2M + $800 k + $2.0M + $1.5M + $3.0M = $8.5M
These are the values you will enter into the spreadsheet:
• Magnitude P5: $1.1M
• Magnitude P50: $2.75M
• Magnitude P95: $8.5M
This becomes the per-event loss distribution used by the simulation.
In a more advanced CRQ tool, each loss form would be modeled separately. 
For teaching purposes, and for analysts doing their first quantitative assessment, a single magnitude distribution maintains clarity while still capturing the right order of 
magnitude and uncertainty.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

339 SAVE EVERYTHING. YOUR FUTURE SELF WILL THANK YOU
good analysts save every piece of vetted data because most of it can be reused in future risk 
assessments.
Years ago, I was modeling a ransomware event almost identical to the example in this chapter. 
We collected restore times, MFA coverage, backup success rates, contractual obligations, IR 
staffing patterns, and a ton of incident data, both internal and sector-based. At the time, it felt like we assembled that evidence only for this one scenario.
Six months later, we ran a data breach analysis. Suddenly, all those inputs mattered again.
• Restore times shaped productivity loss for a system-availability breach.
• Backup success rates helped us estimate recovery likelihood after an 
exfiltration incident.
• MFA coverage became part of the frequency estimate for credential-stuffing and unauthorized access events.
• Incident response labor patterns reappeared in every scenario involving containment, investigation, or customer notification.
none of that work had to be redone. Because we documented the previous analysis, our 
subsequent analysis started halfway done.
Data collected for one scenario almost always accelerates the next. Make sure you build 
a reusable library of vetted data like internal baselines, SM e judgments, external research, 
incident data, sector anchors, and anything else you can get your hands on. Over time, your 
analyses become faster, more consistent, and far more defensible because you are drawing 
from a growing body of evidence rather than starting from zero each time.
How to Save It (Without Buying Anything)Start simple. You don't need a full platform to manage evidence. Focus on doing it, with a good 
structure and consistency.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

340here are three free or nearly free ways to store your growing library of vetted data:
 1. Excel or Google Sheets (Start Here)
Create a tab for each category:
• external signals
• Internal telemetry
• SMe inputs
• Loss-form examples
• Quality categories
Include
• The data
• Source link or documentation
• Date collected
• notes on how it was used
• genAI prompts you may have used to gather, vet, or refine the data
This is perfectly sufficient for your first year of CRQ.
 2. Airtable (Low-Friction, Highly Flexible)
Airtable’s free tier works surprisingly well for CRQ evidence:
• Tables for external data, internal telemetry, SM es, and loss-form ranges
• Tags for Industry, Asset, Threat, Loss Form
• Attachments for pDFs, screenshots, or SM e interview notes
• Filters for searching quickly across past analyses
This becomes your “CRQ evidence library” and scales nicely as you run more 
assessments.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

341 3. Notion (Free for Personal Use)
great if you want something more narrative:
• A page per analysis with embedded tables
• “evidence blocks” that link to reusable data points
• Versioning built in
• Full search across everything
notion works well for analysts who prefer writing out context.
My rule of thumb: If you spent more than five minutes finding it, collecting it, vetting it, or 
debating it…save it for next time.
 Step 4: Building the Model
At this point, we have everything we need to quantify the scenario. The modeling steps were covered earlier in Chapter 15. Now we use that same spreadsheet, enter the 
blended frequency range and the combined magnitude range from Step 3, and run the 
simulation.
The inputs are simple:
• The blended frequency range
• The combined magnitude range for per-event loss (P5, P50, P95)
After you enter the P5, P50, and P95 values into the spreadsheet, the spreadsheet 
converts them into distributions, runs the simulation, and produces annual loss estimates. Your job is to interpret the output.
 Summary Statistics from the Model
Reference back to Chapter 6, where we learned the five-number summary and other ways to report risk results.
Table 17-12.  Five-number summary for the ransomware scenario
Minimum First Quartile Median Third Quartile Maximum
$80,729 $227,497 $306,151 $410,297 $1,074,731ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

342These are the additional outputs most CRQ analyses report:
• Expected (mean) annual loss:  $332K
• Annual probability of loss greater than $1M:  0.01%
• P90 annual loss:  $520K
• P95 annual loss:  $592K
These statistics tell us the shape of the risk more than they tell us a single “answer. ” 
Most simulated years cluster between $200K and $400K  in annual loss. A few years 
produce a higher six-figure loss. Only 1 out of 10,000 simulations exceeded $1M . In this 
environment, ransomware behaves more like a low-frequency, moderate-impact risk, 
not the catastrophic budget-killer people sometimes imagine.
No single number tells the story on its own. The value is in seeing how the outcomes 
spread out: most years look uneventful, some are more painful, and a very small number 
stretch into the high end.
 Loss Exceedance Curve (LEC)
Before we interpret the results, it helps to see the LEC itself. This is one of the most useful 
views in a CRQ analysis because it shows how often annual loss crosses thresholds that 
matter to the business.
Figure 17-1  shows the probability that annual loss will exceed different financial 
levels, based on 10,000 simulation runs.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

343
Figure 17-1. Loss Exceedance Curve for the ransomware scenario
The Loss Exceedance Curve shows the probability that annual loss will exceed 
different financial thresholds. It helps leaders understand not just the typical outcomes, 
but how often losses cross levels that matter to the business.
For this scenario, the LEC tells a clear story.
We have a high likelihood of moderate annual loss and an extremely low likelihood 
of severe loss:
• There is about an 84% chance that annual loss will exceed $200K.
• A little over half of simulated years exceed $300K.
• Only 27% of years exceed $400K.
• Fewer than 12% exceed $500K.
• And only 0.01% of years exceed $1M.
This curve falls quickly and then flattens, which is typical for low-frequency 
ransomware events with constrained magnitude. The vast majority of simulated 
outcomes sit in the lower-to-mid six figures. The right tail exists, but it is short, and only a 
single simulated year crossed the million-dollar mark.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

344What this pattern shows is that the risk is predictable in most years, with a narrow 
band of plausible losses. There is still tail risk, but it is not dominated by catastrophic 
loss in this particular environment. For the CFO, this curve makes the trade-off clear: 
controls that reduce downtime or improve credential protections primarily compress the 
middle of the distribution, not a long catastrophic tail.
If we wanted to explore which assumptions matter most, we could run a few simple 
what-if tests or look at a tornado diagram. Chapter 15 showed how a what-if analysis 
works: you change one input, rerun the model, and compare the curves. A tornado 
diagram is just a visualization that does the same thing on a single chart. It shows how 
much the output moves when you adjust one input at a time, with the biggest bars at the 
top and the smallest at the bottom. Some inputs move the curve a lot, others barely move 
it at all, and that usually points directly to the controls worth improving.
 Turning the Analysis into a Decision
When I walk into the CFO’s office with this analysis, the goal is simple: help them make a 
good decision without dragging them through how the sausage was made.
So, I sit down, hand a one-pager over, and say something like
“Here’s the picture. Most years, this doesn’t happen. In the years when it does, the 
financial hit lands in the mid-six figures, sometimes a little higher. The million-dollar 
years are rare. Not impossible, but rare. ”
They usually lean in at this point, not because of the number, but because the 
uncertainty is finally concrete. That is the whole point of everything we did in the earlier 
chapters: building scenarios clearly, vetting data, widening ranges when the evidence 
was weak, narrowing them when we had good telemetry, and grounding SME input to 
keep it realistic. All that discipline is what lets us sit in this room and talk about the risk 
without hand-waving.
The CFO asks the same question every CFO asks:
“So…are we good?”
This is where a risk analyst becomes a strategic partner, not a reporting function.
“We’re mostly good, ” I say. “The likelihood is low, and the tail is short. But there are 
three places where we can tighten things up that make a measurable difference. ”
“Here’s the good news, ” I tell the CFO. “There are a few practical things we can do to 
take a meaningful chunk of this risk off the table. None of them are major projects, and 
all of them directly reduce the outcomes you saw in the model. ”ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

345Then I pause and give the headline, not the technical detail:
“They target the weak access paths, they help us spot trouble earlier, and they 
shorten recovery when something goes wrong. ”
That is all the CFO needs.
They nod. They understand the shape of the decision. And that is when I say:
“I’ll work with the CISO on what those improvements look like in practice and what 
they cost. We’ll bring you options. ”
Later, in the follow-up with the CISO, we get more specific:
• Remove the legacy access path.
• Improve detection around credential misuse.
• Tighten and automate recovery steps.
But that part is for the security team, not the CFO. I don’t give them the Monte Carlo. 
I don’t talk about P95 or vetting or distributions.
Those were for me.
What I give them is the decision:
“We can take a meaningful amount of this exposure off the table for a reasonable 
investment. If we do these three things, the story looks better a year from now. ”
That is the moment CRQ pays for itself.
Not in the model.
But in the clarity that lets a leader decide with confidence.
By the end of the conversation, they walk away with three things:
• We understand the risk.
• We understand what drives it.
• And we know what to do about it.
That is what this entire chapter has been building toward: taking a messy, uncertain 
problem and turning it into something the business can act on. When we do this well, 
risk analysis stops being a reporting exercise and becomes a strategic capability. It gives 
leaders clarity, not comfort; choices, not checkboxes; and a way to steer the organization 
with evidence rather than instinct.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

346 THE FIRST RULE OF CRQ
There’s a line in the 1999 movie Fight Club:
“The first rule of Fight Club is: you do not talk about Fight Club.”I have my own version of that rule, and it surprises people:The first rule of CRQ is: do not talk about CRQ.At least not in the room where a decision is being made.I learned this the hard way. Once, I walked into a C-suite level meeting and started explaining 
FAIR, inputs, distributions, Monte Carlo…and I could watch the energy drain out of the room. 
eyes glazed over. Someone checked their phone. Once you lose the room, you do not get 
it back.
executives do not want a tour of the method. They want to know:
• What is our exposure?
• What drives it?
• Are we good?
• What should we do next?
That is the whole conversation.
If they ask to go deeper into the model, great. Walk them through it. But do not lead with it. 
CRQ is the engine behind the analysis, not the meeting.
 Chapter Summary
The Big Idea: A full CRQ analysis is not complicated once you see how the pieces fit together. When you move through a simple sequence of steps—scenario, data, ranges, 
simulation, interpretation—you turn an open-ended question into something a business 
can act on. The value is not in the math. It is in the clarity you create.ChApTeR 17  hOW  TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

347Key Takeaways
• You can build a complete analysis  with a clear scenario, the three-  
source model, vetted ranges, and a basic spreadsheet.
• The end goal is structure, not precision.  You are creating a 
consistent way to express uncertainty in dollars and probability, not 
chasing perfect numbers.
• The insight comes from how the distribution behaves.  It shows 
the range of possible outcomes, how the tail behaves, and where 
uncertainty sits.
• CRQ changes the conversation.  You go from debating fears and 
opinions to comparing trade-offs the same way the rest of the 
business does.
• A good analyst is not just producing numbers.  You are helping 
leaders make a clearer, faster, and more defensible decision.
Bottom Line:  By now, you have seen how a full CRQ assessment comes together. Not 
as a checklist, but as a way of thinking. You watched a vague, slightly anxious leadership 
question turn into a structured scenario, a set of vetted inputs, and a clear picture of 
exposure. You saw how evidence, judgment, and simple tools can turn uncertainty into 
something the business can work with. Many of the myths we covered earlier in the book 
should feel less intimidating now. CRQ is not complicated once you see it in motion. It 
is a straightforward, honest way to reason about risk, and once you use it, it is hard to go 
back to the old way of doing things.
 What’s Coming Next
Now that you can run a complete analysis, the next question is simple. How do you make 
this work inside a real organization?
Chapter 18 looks at what happens when CRQ meets people, process, politics, and 
culture. You will learn how to introduce this approach without friction, how to build 
allies, how to keep momentum, and how to make CRQ feel like a natural part of decision-  
making instead of an add-on.ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

348References
Cyentia Institute. (2024). Information Risk Insights Study: Ransomware . Cybersecurity 
and Infrastructure Security Agency (CISA). https://www.cyentia.com
Verizon. (2025). 2025 Data Breach Investigations Report. Verizon Enterprise 
Solutions. https://www.verizon.com/business/resources/reports/dbir/ChApTeR 17  hOW TO Run A COMpLeTe CRQ ASSeSSMenT (A FuLL W ALkThROugh)

PART V
Making It Stick

