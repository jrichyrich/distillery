---
title: "Chapter 11: Finding and Using External Data"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 11
pages: 210-234
ingested: 2026-04-04
---

# Chapter 11: Finding and Using External Data

187
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_11CHAPTER 11
Finding and Using 
External Data
Without data, you’re just another person with an opinion.
—W. Edwards Deming
External data refers to any information that did not originate within your own 
organization. External data is a double-edged sword: it’s plentiful, easy to obtain, often 
free, and, sometimes, can be used directly in risk assessments in varying areas. However, 
working with it is easily the most complicated part of the three-source model used in 
this book. Formats are all over the map (large data dumps, PDFs, glossy vendor reports, 
scraped news feeds, advertisements disguised as research), the reporting goals vary 
(regulatory compliance, marketing, peer-reviewed research), and the quality ranges from 
directly usable to “should never have seen daylight. ” Luckily for risk analysts everywhere, 
a lot has changed since the olden days of data gathering (the olden days are early 2025, 
of course). AI can now help you discover relevant sources, extract key statistics, and even 
assess data quality, turning what used to be a 30-hour research project into a focused 
2-hour effort.
In this chapter, you’ll learn to find and evaluate external data that measurably 
improves your risk assessments. We’ll cover the five types of external sources, red flags that signal unreliable research, and step-by-step methods for turning industry reports 
into quantified inputs you can defend to stakeholders.

188 LESSONS FROM 1066: THE COST OF IGNORING EXTERNAL SIGNALS
In early 1066, Harold Godwinson ascended to the English throne following the death of 
Edward the Confessor on January 5th, 1066. At that time, England was relatively peaceful, and 
Harold’s advisors, observing the internal stability, likely developed a sense of security. They 
hadn’t experienced a significant negative event, and the kingdom appeared stable.
However, warning signs were evident.
To the north, Harald Hardrada of Norway was assembling a fleet of approximately 300 ships, 
preparing to invade England. To the south, William of Normandy was building ships and 
gathering an army, openly preparing for invasion.
Both men had histories of successful military campaigns. Yet, Harold focused inward, 
consolidating power and securing loyalty from the English nobility. He didn’t fully consider the 
external threats, creating a critical blind spot.
Then the invasions began.
On September 20th, 1066, Hardrada’s forces defeated the English earls Edwin and Morcar at 
the Battle of Fulford. Five days later, Harold marched north and achieved a significant victory 
against Hardrada at the Battle of Stamford Bridge on September 25th.
However, shortly after, William landed on the southern coast of England on September 28th. 
Harold rushed south to confront this new threat and was ultimately killed at the Battle of 
Hastings on October 14th, 1066. This defeat led to the Norman conquest of England and a 
profound transformation of its society and governance.
Lesson:  Your internal environment might appear calm, but ignoring external indicators, such 
as competitors experiencing cyberattacks, regulatory actions against peers, or emerging 
threats in similar technology stacks, can leave you vulnerable. External data provides the 
foresight needed to anticipate and address risks proactively before they become incidents.CHApTEr 11  FINdING ANd USING ExTErNAl dATA

189 Why Your Organization’s Data Only Tells Half 
the Story
Looking inward, only at the incidents, threats, and controls that have occurred at 
your company, isn’t enough to understand the full risk landscape. Your internal logs 
might tell you what’s happened before, but they won’t show you everything that could 
happen next.
I own a house, and like every other homeowner, I face fire risk. However, I’ve 
never had a fire. In risk analysis, we call this “zero incident risk. ” If an insurer based my 
premium purely on that personal history, they’d think I carried no risk. But that’s not 
how insurance works.
Instead, my fire policy is priced using demographic and contextual data: where I live, 
the materials my house is built with, proximity to fire stations, and local incident rates. 
As we covered in Chapter 9, this approach is known as class rating  in actuarial science: 
grouping me with others who share my characteristics to estimate risk. My individual 
loss history might nudge the price up or down, but the insurer’s estimate is built on a 
broad, population-level picture of similar homes and neighborhoods.
We can apply this exact logic to cyber risk quantification.
Just because your company has never experienced a data breach doesn’t mean 
your risk is zero. It might mean you’ve been lucky, you’re doing things right, or you’ve 
experienced one and don’t know it. To create a realistic picture of risk, we need to look 
beyond your walls.
It means pulling data about companies with comparable technology stacks, 
regulatory environments, geographic footprints, employee counts, and industries. It also 
means using breach data from competitors, enforcement actions from regulators, and 
loss studies from insurers. This gives us a base rate , the historical frequency observed 
across a similar population.
This starting estimate is your prior  in Bayesian terms: your initial belief before you 
layer in organization-specific information. We’ll express the posterior again as P5–P50–
P95. You can then revise that estimate using internal data and SME input (the updated 
estimate is called a posterior ), as illustrated in Figure  11-1 .CHApTEr 11  FINdING ANd USING ExTErNAl dATA

190
Figure 11-1. How base rates are used in risk analyses
Base rates are especially valuable when you have little or no internal data. They 
give you a starting point and support benchmarking, so you can say, “Here’s what 
organizations like ours are experiencing. ” That level of research lends credibility when 
presenting to stakeholders because your inputs don’t exist in a vacuum.
You’ll create different types of  base rates , for example:
• Frequency estimates : How often certain incidents happen in 
your sector
• Magnitude estimates : Typical financial losses from those incidents
• Control failure rates : Rates of things like phishing clicks or 
patching delays
All of these can be derived from external data. While they’re not perfect, they’re 
far better than playing “pick a color” on a risk matrix. Keep in mind, these are starting 
points that you’ll refine as you gather internal data (Chapter 12) and expert judgment 
(Chapter 13).
 Why I Reach for External Data Early
Whenever I start a risk assessment, external data is almost always one of the first places I 
look, sometimes even before the scenario statement is fully drafted. Here’s why external 
data should be your starting point, not an afterthought:CHApTEr 11  FINdING ANd USING ExTErNAl dATA

191• External data grounds your analysis in  reality . At the very start of 
an assessment, external data helps turn vague concerns into realistic, 
evidence-based scenarios. Instead of building scenarios around 
abstract fears (“What if we get hacked?”), you can craft storylines 
grounded in documented incidents: “Based on three peer company 
breaches disclosed in SEC filings, here’s how a similar attack might 
unfold in our environment…. ”
• External data shows you how  real-world incidents  actually 
progress : who the threat actors are, what initial access methods they 
use, how long they remain undetected, and what types of damage 
they cause. It also acts as a reality check for your assumptions. When 
your estimates are double the industry average, that’s either a red flag 
about your analysis or valuable insight about your unique risk profile.
• External data builds  credibility  and provides defensible starting 
points.  Executives become much more comfortable when they see 
that inputs weren’t invented in-house. Referencing a competitor’s 
SEC filing, an insurance industry loss study, or regulatory 
enforcement data signals analytical rigor and gives decision-makers 
something familiar to anchor their understanding.
• More practically, external data provides the  baseline estimates  
you need when internal data is sparse or nonexistent.  Rather 
than starting with wild guesses, you begin with industry-grounded 
numbers that you can then adjust based on your specific context. 
This transforms your role from “person making up numbers” to 
“analyst applying industry context to organizational reality. ”
 USE AI TO ACCELERATE, BUT NOT REPLACE, THIS PROCESS
Generative AI can speed up early-stage research dramatically. A task that once took 30–40 
hours can now be done in under an hour—but only if you review and validate the outputs.
Where GenAI excels in external data work:
• Finding relevant sources across the five data types
• Extracting key statistics from long reports and studiesCHApTEr 11  FINdING ANd USING ExTErNAl dATA

192• Converting between units, currencies, and time periods
• Identifying potential quality issues in data sources
• Suggesting organizational context adjustments
Pro tip:  Use specific prompts like “Extract all frequency and cost statistics from this breach 
report, noting sample sizes and methodology” rather than generic requests like “summarize 
this document.”
Critical Cautions
• Always verify citations : AI often creates plausible-sounding but nonexistent 
sources.
• Check calculations : AI can make basic math errors in conversions and 
transformations.
• Validate quality assessments : AI may miss subtle bias indicators or 
methodological flaws.
• Don’t outsource judgment : AI can suggest adjustments, but can’t replace your 
understanding of organizational context
Bottom Line:  AI is excellent at accelerating the mechanical parts of external data collection 
and transformation, but the critical thinking about relevance, quality, and application to your 
specific risk scenario still requires human expertise.
 The Five Types of External Data: A Taxonomy
You know external data is valuable, but where do you start? With hundreds of potential 
sources available, from incident databases and threat intelligence to industry surveys 
and regulatory filings, it’s easy to get lost in the noise. This taxonomy provides a road 
map, organizing external data into five types based on what they reveal and when to 
use them.
Understanding these categories helps you search more efficiently and evaluate what 
you find more critically. Instead of randomly hunting for data, you can target the specific 
type of information your analysis needs: historical incidents, current exposures, expert 
opinions, analytical insights, or legal precedents.CHApTEr 11  FINdING ANd USING ExTErNAl dATA

193 WHERE TO FIND EXTERNAL DATA
I keep talking about this “external data,” but I haven’t said where to actually find it. There’s not 
one place to find it. The truth is it’s everywhere.
Start with a subject like a loss type, a threat group, a worry, or a specific risk, and use your 
best search engine and GenAI detective skills. look through breach databases, regulatory 
filings, incident reports, and white papers. But don’t stop there. Industry conferences, local 
meetups, and conversations with colleagues are also great ways to discover who’s putting out 
quality research and where to find it.
 1. Event-Based Data | What Happened?
These are sources that track actual incidents, breaches, losses, and their consequences. It’s a look back at what really happened in the world.
Examples: Incident databases, insurance/claims data, regulatory disclosures (like 
SEC 8-K, GDPR notifications), press coverage, VERIS Community Database, and Privacy 
Rights Clearinghouse breach reports.
What You’ll Find: Information about what happened, where it occurred, and how 
much it cost. This includes basic facts like dates, affected organizations, and costs, plus 
details like technical vectors, impact breakdowns, and timelines.
CRQ Use Cases: Build base rates for frequency estimates, calibrate impact models 
(legal costs, ransom payments, downtime), validate scenario timelines, map incidents to FAIR loss types, benchmark control failures, and identify threat actor patterns.
 2. Measurement and Exposure Data | How 
Exposed Are We?
These are sources that quantify vulnerabilities, external-facing systems, and attack surfaces. They help you assess how exposed your organization, or your entire sector, is to 
specific threats.
Examples: Vulnerability databases (CVE/NVD), internet scanners (Shodan, Censys), 
external risk ratings, threat intelligence feeds, and patch management reports.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

194What You’ll Find: Counts of known vulnerabilities, vulnerability details, exposed 
services or ports, patch status, misconfigurations, or threat actor interest. Some data is 
technical and raw, while other sources provide summarized scores or exposure trends.
CRQ Use Cases: Estimate likelihood before controls are applied, scale exposure 
to critical assets, benchmark patching windows, identify inherited risks from vendors, 
prioritize remediation efforts, and inform subject matter expert assumptions for 
frequency estimates.
 3. Opinion, Perception, and Benchmark Data | What Do 
People Say?
These sources reflect what people believe is happening, based on surveys, 
benchmarking studies, or expert opinions. They capture perception more than reality, 
but still offer insight into trends, priorities, and self-reported losses or controls.
Examples: Industry surveys (Ponemon, SANS), analyst reports, peer benchmarking 
studies, ISAC surveys (e.g., FS-ISAC, H-ISAC), and maturity assessments.
What You’ll Find: Self-reported incident rates, preparedness levels, spending 
benchmarks, maturity scores, or perceived risk rankings. Most include charts and 
summary stats, but quality varies widely.
CRQ Use Cases: Sanity-check internal assumptions, inform stakeholder 
expectations, support qualitative priors, compare maturity or investment levels, estimate 
market trends, and guide early scenario design.
 CAN I USE LINKEDIN/X (TWITTER) POLLS AS A DATA SOURCE?
No. Here’s why:
 1. No sampling control: Anyone can respond. There’s no way to ensure the 
audience reflects your population of interest (e.g., CISOs, mid-size orgs, specific 
sectors).
 2. Massive selection bias:  people who respond are self-selecting,  often skewed 
by who follows the pollster, time posted, or who sees it due to retweets.
 3. No demographic metadata: You don’t know who answered, what region or 
industry they’re in, or whether they understood the question.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

195 4. No margin of error: You can’t quantify how wrong the results might be.
 5. High potential for trolling or bad-faith responses: Especially in controversial 
or “hot take” security topics.
 6. Gimmicks or giveaways: Especially if there’s a drawing or a free gift card for 
answering. people will say an ything for a $5 Amazon gift card.
 4. Research and Analysis Data | What Do Deep 
Dives Reveal?
These are sources that conduct in-depth examinations of cybersecurity topics, ranging from peer-reviewed academic studies to highly detailed vendor and law firm reports. 
They help us understand the “why” behind trends, attacker motivations, and the real- 
world impact of security incidents.
Examples: Academic research, vendor threat reports (e.g., Mandiant, CrowdStrike, 
Palo Alto Networks Unit 42), law firm incident digests (e.g., BakerHostetler, Cooley), 
think tanks (e.g., RAND, ENISA, CSIS), and major analyst firms (e.g., Forrester, Gartner).
What You’ll Find: Structured case studies, attacker behavior trends, root cause 
analyses, legal impacts, cost breakdowns, and, in some cases, attacker economic 
modeling. Peer-reviewed papers may provide theoretical models or risk models, while 
law firm and vendor reports often analyze hundreds of real-world cases.
CRQ Use Cases: Calibrate impact scenarios, analyze root causes, identify attacker 
incentives, support regulatory framing, validate magnitude assumptions, inform downstream risk calculations, supplement Monte Carlo ranges, compare attacker tactics by industry, and identify gaps in internal data.
 5. Legal and Enforcement Data | What Are 
the Consequences?
These are sources that track regulatory enforcement, lawsuits, fines, and legal 
consequences following cyber incidents. They help quantify what happens after 
something goes wrong, especially the legal, financial, and reputational fallout.
Examples: Regulatory enforcement actions (e.g., SEC, FTC, GDPR fines, NYDFS), 
lawsuits and settlement databases (PACER, Westlaw), attorney general notifications, law 
firm reports, consent decrees, legal filings, and breach notification letters.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

196What You’ll Find: Details on fines, legal fees, settlements, court rulings, and 
timelines between incident, investigation, and enforcement. You may also find 
commentary on root causes (like MFA failure or delayed notification), legal theories used 
in lawsuits, and variations across jurisdictions.
CRQ Use Cases: Model legal and regulatory loss types, benchmark enforcement 
patterns, validate scenario timelines, analyze legal root causes, support  com pliance-  
driven risk models, estimate litigation likelihood, and compare sector-specific legal 
exposure.
Table 11-1.  Common external data sources by type
Data Type Where to Start Looking Key Databases/Sources
Event-Based Industry reports, regulatory 
filingsVErIS, SEC 8-K filings, G dpr breach notifications, 
privacy rights Clearinghouse
Measurement and ExposureVulnerability databases, scanning services
CVE/NV d, Shodan, Censys, vendor threat intel 
feeds
Opinion and BenchmarkIndustry surveys, analyst reports
SANS surveys, ponemon Institute,  Gartner 
reports, ISAC publications
Research and AnalysisAcademic papers, vendor researchIEEE papers, vendor threat reports, law firm analyses, think tank studies
Legal and 
Enforcement
regulatory websites, legal 
databasesSEC enforcement, FTC actions, G dpr fines, 
pACE r  court records
Remember: Once you find potential sources, apply Chapter 10’s quality assessment 
framework before using them in your analysis.
 GENAI PROMPT: BRAINSTORM RESEARCH TYPES
I’m researching legal fines, judgments, settlements, and regulatory enforcement actions 
related to data breaches. provide a comprehensive and up-to-date list of reliable sources, 
including U.S. and international regulators, legal databases, breach reporting portals, and 
industry reports, that track or publish this information. prioritize sources that include penalty 
amounts, case summaries, and regulatory bodies involved. Where available, include links to 
databases or trackers with searchable enforcement records.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

197 AI TRIANGULATION FOR DATA VETTING
When using AI to collect or summarize external data, consider running a multi-model check. 
Ask one llM to produce a summary or dataset; then prompt a different llM to critique or 
verify it. disagreement signals where human review is needed. This cross-model approach 
doesn’t eliminate bias, but it helps surface hidden assumptions and reduce hallucinations.
Before diving into how to use external data, here are some common mistakes to 
avoid when working with the sources you’ve found.
 COMMON PITFALLS TO AVOID
Even though external data is powerful, it’s not foolproof. Be cautious about
• Overreacting to headline events. A single breach at a peer company doesn’t 
mean the same threat applies equally to you.
• Using stale or decontextualized data. A regulatory action from 2019 might not reflect today’s enforcement climate.
• Assuming others’ consequences are universal. Just because a global bank got fined $50M doesn’t mean your mid-sized SaaS org faces the same 
exposure.
Now that you understand the five types of external data and have practiced finding 
relevant sources, let’s explore how to systematically put that information to work in your risk assessments.
 EXERCISE 11-1: DATA HUNTING MISSION
Your Mission:  pick one of the risk themes below (or use one from your organization or earlier 
chapter exercises), and practice finding external data that would inform a quantitative risk 
assessment.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

198Risk Themes
• Business email compromise targeting finance employees
• ransomware affecting critical business systems
• Cloud service outage impacting customer-facing applications
• data breach involving customer personal information
• Insider threat involving data theft or sabotage
Step 1: Quick Planning
Using your scenario-building skills from earlier chapters, identify what external data you need 
to answer these questions:
• How often does this happen to organizations like yours?
• What does it typically cost when it happens? (Think about the six forms of loss)
• What types of sources from our taxonomy would be most helpful?
Step 2: Hunt for Sources
Find two to three external sources for your theme. Try to get at least one from different data 
types (event-based, research, legal, etc.).
Step 3: Quick Quality CheckFor each source, note the following:
• What data type is this?
• does it seem credible? Any red flags?
• How would you use this in a risk assessment?
 How to Use External Data
Now that you understand the five types of external data available, let’s explore how to 
systematically put that information to work in your risk assessments. External data serves 
three key purposes in risk analysis: building realistic scenarios, creating quantitative 
model inputs, and validating your final results.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

199The three methods below show you how to accomplish each purpose, plus we’ll 
cover the data transformation techniques you’ll need regardless of which method 
you’re using.
 Method 1: Building Risk Scenarios and Statements
External data helps you build realistic, evidence-based risk scenarios using the 
structured format from Chapter 7: Asset + Threat + Effect + optional Method.
When to use: During risk scenario building (Chapter 7), when starting a new risk 
assessment, or when updating existing scenarios with current threat intelligence.
Step-by-Step Process
 1. Define your asset: Start with the asset you want to protect; then use external data to understand what similar assets attackers 
typically target and value.
 2. Research relevant threats: Find threat intelligence showing 
which threat actors target organizations like yours: their 
capabilities, motivations, and recent campaign patterns.
 3. Ground effects in real cases: Use external data on actual incident 
impacts: financial losses, business disruption duration, regulatory 
penalties, and recovery timelines from peer organizations.
 4. Document attack methods (optional): Look for incident reports 
showing how similar attacks actually unfold: initial access vectors, lateral movement techniques, and exploitation methods.
 5. Validate timeframes: Base your assessment period on 
documented threat patterns: campaign seasons, disclosure 
timelines, or regulatory cycles.
 6. Assemble your structured scenario: Combine external 
insights into the Chapter 7 format with specific, evidence-based 
components.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

200Example using Chapter 7 structure, supplemented with external research:
• Asset: Customer payment database containing 50,000 credit 
card records
• Threat: Cybercriminal groups seeking financial data for resale (based on published threat intelligence)
• Effect: $2.8M–$8M in response costs, regulatory fines of $500K–$2M, 7–14 days business disruption (based on peer company SEC filings and PCI penalty guidelines)
• Method: SQL injection via unpatched web application vulnerabilities (CVE data shows this vector in 40% of similar breaches)
 GENAI PROMPT: EXTRACT RISK SCENARIOS FROM INDUSTRY REPORTS
I’ve uploaded [industry report/threat intelligence/incident database] in the prompt and need to extract relevant risk themes for my organization. Analyze this document and help me build 
evidence-based risk scenarios:
My organization context:Industry: [your industry]Size: [employee count/revenue]Technology profile: [cloud-first/hybrid/legacy]Extract and organize:
• relevant incident patterns: Which incidents in this report match organizations 
like mine? Group by risk theme (ransomware, BEC, cloud outage, etc.)
• Threat-actor-asset combinations: For each relevant incident, identify: What 
assets were targeted? Which threat actors were involved? What methods did 
they use?
• Impact data: Extract specific cost figures, disruption timelines, and recovery details for incidents at similar organizationsCHApTEr 11  FINdING AN d USING ExTErNAl dATA

201• prioritized scenarios: rank the top 3-5 risk scenarios by relevance to my 
organization profile
• Structured output: For each priority scenario, format using Asset + Threat + 
Effect + Method structure with specific data from the report
Cite page numbers and specific sections for each data point you extract, and flag any gaps 
where additional external research would be helpful.
 Method 2: Creating Quantitative Model Inputs
External data provides the baseline estimates that anchor your risk models in industry 
reality before you add organization-specific adjustments.
When to use: Building frequency and magnitude estimates for new risk models, 
establishing defensible starting points when internal data is sparse, or creating industry- 
grounded baselines.
Step-by-Step Process
 1. Identify the data you need: List what you need to estimate: 
annual frequency, incident duration, response costs, regulatory 
penalties, and business disruption costs
 2. Find relevant industry benchmarks: Search for sources 
matching your sector, size, and risk profile. Target recent studies 
with high-quality data (Chapter 10).
 3. Extract relevant statistics: Gather specific data points from your 
sources. For example:
• Incident frequencies (15% of healthcare orgs experienced ransomware in 2024)
• Cost ranges (Average breach response: $2.8M, range $1.2M–$8.5M)
• Duration data (Median recovery time: 12 days)
• Penalty amounts (GDPR fines averaged €2.4M for healthcare violations)CHApTEr 11  FINdING AN d USING ExTErNAl dATA

202See Method 4 if these statistics need transformation before use in 
your model.
 4. Apply quality adjustments: Use Chapter 10’s framework to adjust for data limitations: ×2 range widening for medium quality 
sources, ×3 for low quality.
 5. Document your inputs: Record original statistics, quality 
assessments, adjustments made, and key limitations for transparency and future updates.
Example Transformation
• Raw external data: “ Average breach response cost: $4.5M” (vendor survey, n=200)
• Quality assessment: Survey-based with potential vendor bias = ×2 range adjustment
• Model input: Response cost range of $2.25M (P5)–$9M (P95), typical is $3.6M (P50), noting industry average with uncertainty adjustments 
for survey limitations
 GENAI PROMPT: EXTRACT QUANTITATIVE MODEL INPUTS
I’ve uploaded [industry report/study] and need to extract specific quantitative data for my risk 
model. please analyze this document and help me find model-ready inputs:
My risk scenario: [brief description of what you’re modeling] My organization: [size/
industry/context]
Extract these specific data types:
 1. Frequency statistics: Find percentages, incident counts, or rates related to my 
scenario. Include the sample size and time period for each statistic.
 2. Cost data: Extract cost ranges, averages, or case study amounts. Note what’s included/excluded in each figure (direct costs only, total business impact, etc.).
 3. Duration data : look for timeline information – detection times, recovery 
periods, business disruption lengths.
 4. Penalty/fine amounts: Find regulatory enforcement amounts, settlement figures, or legal costs.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

203For each data point, provide:
• The exact statistic with context
• Sample size and methodology quality indicators
• page number/section where found
• What transformation might be needed (currency conversion, time period 
adjustment, etc.)
• Quality assessment notes (survey vs. measured data, potential bias, sample 
limitations)
Flag any statistics that seem unusable due to quality issues or context mismatches.
Most frequency estimates can be gathered with the tools above. For more complex 
scenarios, consider this advanced technique:
 ADVANCED TECHNIQUE: BETA DISTRIBUTION MODELING
For situations where extracting frequencies described in Method 2 doesn’t apply, like when 
you have incident counts but unknown or highly uncertain denominators, statisticians 
sometimes use beta distribution modeling .
Tools like Excel add-ins and resources like Hubbard and Seiersen’s How to Measure Anything 
in Cybersecurity Risk  make this technique quite accessible.
However, Method 2, combined with the quality adjustments (Chapter 10) and SME elicitation 
techniques (Chapter 13), covers the majority of real-world external data situations. For a 
beginner’s toolkit, you have everything you need to get started effectively.
Advanced practitioners who encounter edge cases can explore beta distributions later, but 
these core methods will handle most of what you’ll face in practice.
 Method 3: Validating and Stress-Testing Results
External data serves as your reality check, ensuring your risk assessment results reflect 
industry patterns rather than spreadsheet errors or organizational blind spots.CHApTEr 11  FINdING ANd USING ExTErNAl dATA

204When to use: After completing your initial risk model, when results seem unusually 
high or low compared to intuition, or before presenting findings to stakeholders.
Step-by-Step Process
 1. Compare loss estimates to published ranges: Check if your 
results fall within documented incident costs from SEC filings, 
insurance claims, or regulatory settlements.
 2. Benchmark frequency against industry norms: Verify your 
incident rates align with sector-specific breach databases, threat 
intelligence, or peer disclosure patterns.
 3. Test scenario plausibility: Ask whether your risk scenario would 
seem realistic to external observers familiar with your industry’s 
threat landscape.
 4. Investigate significant outliers: If your estimates are 2–3× higher 
or lower than industry averages, determine whether this reflects 
genuine organizational differences or analytical errors.
 5. Update with current intelligence: Refresh your validation using 
recent threat reports, enforcement actions, or incident disclosures 
to catch evolving risk patterns.
Example Validation Catch
• Risk assessment result: Ransomware frequency of 2.1 incidents 
per year.
• External validation: Suppose industry data showed the financial services sector averages 0.3 incidents per year.
• Investigation result: Error found in frequency calculation; corrected estimate of 0.4 incidents per year aligns with industry patterns while 
reflecting slightly higher exposure due to legacy systems.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

205 GENAI PROMPT: VALIDATION RESEARCH STRATEGY
I need to validate my risk assessment results against industry benchmarks. Help me plan a 
systematic validation approach:
My assessment results:
• risk scenario: [ brief description]
• Annual frequency estimate: [X incidents per year]
• Financial impact range: [$X - $Y per incident]
• Organization context: [size/industry/specifics]
Help me identify:
 1. Benchmark sources to check: What specific databases, reports, or studies 
should I search for validation data on this scenario?
 2. Key validation questions: What specific questions should I investigate to validate each estimate?
 3. Red flags to watch for: What would indicate my estimates are unrealistic (too high/low relative to industry norms)?
 4. Research strategy: What’s the most efficient sequence for finding validation sources?
 5. Quality criteria: How should I evaluate whether benchmark sources are suitable for comparison?”
 Method 4: Transforming Raw Statistics
Most external data requires conversion before it becomes usable in risk models. This method provides tools for the most common transformations you’ll encounter. Use only 
the steps that apply to your specific statistic.
When to use: You’ve found relevant statistics, but they’re in percentages, cover 
different time periods, or lack the context needed for direct use in your model.
Transformation ToolsIf you need the denominator—Look in methodology sections or footnotes for total 
population (“23% of 500 surveyed companies” = 115 incidents from 500 companies).CHApTEr 11  FINdING AN d USING ExTErNAl dATA

206 WHAT’S A DENOMINATOR?
It’s the bottom part of a fraction that tells you the whole picture. If 42 companies experienced 
data breaches, that means very different things depending on whether those 42 came from a 
pool of 100 companies (high frequency) or 10,000 companies (low frequency).
Without the denominator, you can’t calculate meaningful frequency estimates for your 
risk model.
If your statistic is a percentage —Convert directly to frequency (23% of companies = 
0.23 incidents per org per year, assuming a one-year observation).
If you need to calculate per-organization rates —Divide incidents by population 
size (342 breaches ÷ 8,500 companies = 0.04 per year).
If your data covers multiple time periods —Normalize to annual rates: quarterly 
data ×4, multi-year studies ÷ number of years.
If adjusting for currency —Convert using exchange rates from when the study was 
conducted (€2.4M using 2022 EUR/USD rate of 1.05 = $2.52M).
If adjusting for inflation —Use the study-year FX rate; then inflate to current dollars 
with a transparent index (e.g., CPI) and show the year.
If clarifying scope —Identify what’s included/excluded in cost figures; then adjust 
or note limitations (e.g., study includes only direct response costs, excludes lost revenue 
which may underestimate total impact by 40–60%).
If you need to adjust for your context —Make directional adjustments based on 
organizational differences:
• Smaller organizations often have lower absolute costs but higher 
relative impact.
• Higher-risk industries may warrant increased frequency estimates.
• Legacy technology environments typically face higher vulnerability-  
based risks.
If you need uncertainty ranges —Convert point estimates to ranges reflecting data 
quality and organizational variability. Reference Chapter 10’s quality framework for 
appropriate adjustments.CHApTEr 11  FINdING ANd USING ExTErNAl dATA

207Validation check —Does your final number make intuitive sense? Is it within an 
order of magnitude of similar studies? If dramatically different, double-check your 
transformations.
Simple example:  Raw statistic:  “15% of healthcare organizations experienced 
ransomware in 2024”; Applied tools:  Percentage conversion (15% = 0.15 per year) + range 
creation (0.10–0.25 reflecting uncertainty)
Don’t range-widen for quality and then widen again for the same limitation when 
adding organizational context.
Common Transformation Pitfalls
• Currency timing errors : Using current exchange rates for 
historical data.
• Double-counting adjustments : Applying both organizational and 
quality adjustments to the same number. For example, don’t widen 
ranges once for quality, then again for the same limitation when 
adding organizational context.
• Scope mismatches : Comparing studies that measure different cost 
components.
• Unit confusion : Mixing per-incident and annual figures.
 GENAI PROMPT: HELP ME TRANSFORM THIS STATISTIC
I found this statistic, but I can’t use it directly in my risk model:
The statistic:  [paste exact text from source ]
Source:  [name/date of report ]
What I need:  [frequency per year/cost estimate / etc. ]
Help me figure out:
 1. What information might be missing from this statistic (like total population, time 
period, etc.)?
 2. What conversions do I need (percentage to frequency, currency, time period, etc.)?
 3. Walk me through the transformation step-by-step
 4. What should I watch out for with this type of data?CHApTEr 11  FINdING ANd USING ExTErNAl dATA

208Consider these common transformations:
• Converting percentages to annual frequencies
• Adjusting for different time periods
• Currency and inflation adjustments
• Finding missing denominators
• Creating uncertainty ranges from point estimates
 Method 5: Extracting Magnitude Data
External data provides the cost baselines that ground your impact estimates in industry 
reality. This method shows you how to systematically extract and organize magnitude 
data using the six forms of loss framework from Chapter 8.
When to use: You need cost estimates for your risk model, want to validate internal 
cost assumptions, or need industry benchmarks for different types of losses.
Step-by-Step Process
 1. Reference the forms of loss: Use the work from Chapter 8 to 
guide your search—response costs, business disruption, asset 
replacement, regulatory fines, competitive advantage loss, and 
reputation damage.
 2. Search by loss category: Work through each loss form systematically. Look for incident response studies (response 
costs), downtime research (business disruption), enforcement databases (regulatory costs), etc.
 3. Extract relevant cost data: Gather specific ranges and 
breakdowns:
• Response costs (e.g., Average IR cost: $275K, range $150–$400K)
• Disruption costs (e.g., $50K per hour of downtime for mid-size retail)
• Regulatory penalties (e.g., GDPR fines: €500K–€20M for data breaches)CHApTEr 11  FINdING AN d USING ExTErNAl dATA

209 4. Apply quality adjustments: Use Chapter 10’s framework: high 
quality sources use as-  is , medium quality sources get ×2 range 
adjustment, low quality get ×3 adjustment.
 5. Update your worksheet systematically: Add ranges, quality 
notes, source citations, and gap indicators for what still needs 
internal data or SME input.
 6. Document limitations: Note what’s included/excluded in cost 
figures, organizational context differences, and areas needing 
local customization.
Example extraction: Loss category; response costs
• External data: $150K–$400K (Security Vendor Study 2024, 
Quality: Medium)
• Applied adjustment: $75K–$800K (×2 range widening for survey limitations)
 GENAI PROMPT: EXTRACT AND CATEGORIZE ALL COSTS
Extract all cost-related data from this document and categorize it for risk modeling:
Source material: [upload document or paste text]Do the following:
 1. Find all cost figures (ranges, averages, case studies, penalties, etc.)
 2. Categorize each cost into logical groups (response costs, business impact, 
regulatory penalties, etc.)
 3. Note key details for each: what’s included, sample size, time period, organization type
 4. Flag quality concerns (survey vs. actual data, small samples, potential bias)
 5. Suggest gaps where cost categories might be missing
Focus on costs that would be relevant for cyber risk assessments at organizations similar to mine: [brief context]CHApTEr 11  FINdING AN d USING ExTErNAl dATA

210Now that you have the tools to extract and transform external data, let’s practice 
putting it all together.
 EXERCISE 11-2: COMPLETE EXTERNAL DATA WORKFLOW
Using the external data sources you found in Exercise 11-1, practice Methods 1 and 2 to build 
a structured risk scenario and extract quantitative inputs.
Part A: Build Your Risk Scenario (Method 1)
Using your external research, create a risk statement with the A-T-E framework:
• Asset: What gets targeted based on your research?
• Threat: Which threat actors from your sources?
• Effect: What realistic impacts did you find?
Part B: Extract Model Inputs (Method 2)Mine your sources for quantitative data:
• Find frequency statistics (percentages, incident counts).
• Extract cost figures (ranges, averages).
• Note duration data (recovery times, detection periods).
• Apply basic conversions using Method 4 tools if needed.
Deliverables
• Risk scenario: One completed risk scenario (Chapter 7)
• Key inputs: Annual frequency range, cost range, duration estimate
• Source notes: Where each number came from
 Chapter Summary
The Big Idea: External data provides the industry context that transforms generic risk 
concerns into evidence-based assessments—but only when you know how to find 
quality sources, extract usable statistics, and ground your analysis in organizational 
reality.CHApTEr 11  FINdING AN d USING ExTErNAl dATA

211Key Takeaways
• Start with the taxonomy . Use the five data types as your research 
road map rather than hunting randomly for sources.
• Build scenarios from evidence . Ground your risk statements in 
documented incidents, threat patterns, and actual impact data from 
peer organizations.
• Transform systematically ; most external statistics can’t be used 
directly; apply the conversion tools based on what your specific data 
needs are.
• Validate against industry norms . Use external benchmarks 
to reality-check your results and catch analytical errors before 
presenting to stakeholders.
• External data is your foundation, not your destination . Establish 
defensible baselines that you’ll customize with internal data and 
expert judgment.
• Document everything ; capture source details, quality assessments, 
and transformation logic for transparency and future updates.
Bottom Line:  External data gives you the industry context to move beyond 
organizational blind spots, but success requires systematic collection, critical evaluation, 
and appropriate transformation of raw statistics into reliable model inputs.
 What’s Coming Next
Chapter 12 takes you inside your organization to find the data that’s most relevant to 
your specific environment. You’ll learn how to extract frequency and magnitude insights 
from logs, incident reports, and operational records—even when that data is messy, 
incomplete, or scattered across different systems.
Time to look inward.CHApTEr 11  FINdING ANd USING ExTErNAl dATA

