---
title: "Chapter 12: Your Best Evidence: Finding and Using Internal Data"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 12
pages: 235-258
ingested: 2026-04-04
---

# Chapter 12: Your Best Evidence: Finding and Using Internal Data

213
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_12CHAPTER 12
Your Best Evidence: 
Finding and Using Internal Data
Insufficient facts always invite danger.
—Mr. Spock
The next essential source of risk data is internal data, which is information generated 
within your own organization. Unlike external data, which provides context and baseline estimates, internal data serves as your anchor, grounding your risk estimates in the specific systems, controls, weaknesses, and operational realities of your environment. It’s your most tailored and organizationally relevant source of evidence.
Years back, I started a new job at a financial services firm and was tasked with 
developing a quantified “Top 5” list of risks for the C-suite. Data breaches dominated the news that year, particularly at US-based banks and lenders. Executives sought to understand how data breach risk compared to other risks within the organization, as well as how our risk posture aligned with that of our peers.
I applied the techniques from the previous chapter to establish an initial base rate of 
data breach risk, which represented the risk faced by firms like ours in the sector. Next, I wanted to update that number based on new information. That new information was, primarily, internal data.
There were three primary things I was interested in learning that would cause my initial 
base rate to move: Have we experienced more or fewer reportable data breaches than our peers? Was our control environment better or worse than our peers’? Would the cost of a data breach, considering various factors, be about the same as our peers’ or different?

214With that in mind, I set out to gather as much data as possible from telemetry, 
previous assessments and audits, incident logs, postmortems, red teaming exercises, bug 
bounty submissions, control evaluations, and other relevant sources.
What I discovered was eye-opening. Our incident history was better than the 
industry average, but our control environment had some concerning gaps that were 
outside of standards. Most importantly, our potential breach costs would likely be 
significantly higher than those of our peers due to our specific customer base and 
regulatory environment. By the time I finished the analysis, my final risk estimate had 
moved substantially from where I started, and the internal data was what made that 
adjustment possible.
This chapter will show you exactly how to gather, evaluate, and use internal data the 
same way I did at that financial services firm. You’ll learn where to find this data within 
your organization, how to extract meaningful insights from messy sources, and how to 
combine it with external benchmarks to build more accurate, defensible risk models.
 Why Internal Data Matters
You’ve seen how internal data can update your external base rates, as in my financial 
services example. Now let’s explore the full scope of what internal data can do and where 
to find it in your organization.
Examples of What Internal Data Looks Like
• Vulnerability scan results showing exposure trends or high-risk assets
• Penetration test and red team findings, which highlight real paths an 
attacker could take
• Incident response tickets and root cause analyses from past events
• Security team risk write-ups, including risk registers or assessment summaries
• Postmortems from outages or security incidents
• Tabletop and simulation exercise outcomes, especially those tied to 
loss estimates or impact
• Business continuity or disaster recovery assessments, often linked to 
downtime estimatesChapter 12  Your Best evidenCe: Finding and using internal data

215• IT asset inventories, which help estimate the blast radius or 
exposure surface
• Security control telemetry (e.g., blocked phishing attempts, alerting volume, patch coverage)
Used correctly, this data provides direct insight into how often things go wrong, how 
quickly you recover, and how prepared you are for various threat scenarios. It’s your best chance to estimate frequency, duration, and exposure tailored to your business.
For Example
• If your internal data shows you average three security incidents per year that require containment and cleanup, that’s a strong basis for 
modeling scenario frequency.
• If your average downtime from a critical system failure is four hours 
and your business units report $250,000/hour in lost productivity, 
that’s a concrete internal estimate of loss magnitude.
• If you’ve had two high-severity phishing incidents in the past 18 
months, you now have a data-driven case to model future credential 
compromise risk.
The  limitations (and why the three-source approach matters): Internal data isn’t 
perfect. It may be scattered across tools, teams, or departments. It may be incomplete, especially if incidents weren’t well documented or loss estimates weren’t captured. 
It may also be biased or have poor coverage. For example, if only “serious” events are 
logged, you’ll miss low-level but frequent problems.
That’s exactly why internal data shouldn’t stand alone and needs to be cross-checked 
with external data and expert judgment, whenever possible. When combined with the 
other sources, internal data helps illuminate the organization’s risk surface. It lets you 
move from “what could happen to someone” to “what’s likely to happen to us. ”
Why  stakeholders trust it: I’ve presented the results of quantitative risk assessments 
more times than I can count. Nearly every time, engineers, executives, and peers come in with a healthy dose of skepticism. That’s not a problem; it’s a necessary step in any risk 
assessment. The best way to respond is with data they recognize: actual numbers from 
their own environment, tied to incidents they remember, backed by systems they use.Chapter 12  Your Best evidenCe: Finding and using internal data

216Internal data becomes the bridge between theory and operations. It helps you shift 
from “What tends to happen in the industry?” to “What’s actually happened here?” That 
shift turns abstract models into something decision-makers can act on.
 Types of Internal Data Sources
Your organization generates risk-relevant data across dozens of systems and processes. 
The key is knowing where to look and what each source can tell you about frequency, magnitude, or control effectiveness. Table 12-1 maps the most common internal data sources to their practical applications in cyber risk quantification, also illustrated in 
Figure 12-1.
Table 12-1.  Common internal data sources, where to find them, and CRQ 
applications
Main Data Source Examples CRQ Applications
Security 
Detection and 
Intelligenceedr alerts, sieM logs, vulnerability 
scans, ids/ips data, threat intel 
feeds, ioC matches, attribution data, 
attack campaign trackingFrequency (threat detection patterns), 
scenario Building (attack pattern 
analysis), Contextual (threat landscape 
understanding)
Incident 
Response 
and Crisis Managementincident reports, postmortems, 
forensic analyses, crisis communication logs, stakeholder 
notification records, media 
monitoringFrequency (incident volume tracking), Magnitude (loss analysis, response 
costs), scenario Building (incident 
pattern calibration), Contextual (response coordination effectiveness)
Helpdesk 
and Ticketing 
Systemsphishing tickets, malware reports, 
outage logsFrequency (incident volume, cause analysis)
Business 
Continuity and 
RecoveryBCp test results, disaster drills, rto 
performance, backup test results, 
recovery time measurements, data 
restoration logs, failover testingMagnitude (downtime estimates, 
recovery timelines), Control evaluation 
(recovery capability assessment)
(continued)Chapter 12  Your Best evidenCe: Finding and using internal data

217Main Data Source Examples CRQ Applications
Financial, Legal, 
and Litigation 
Recordsdowntime cost estimates, legal fees, 
insurance claims, lawsuit records, 
settlement amounts, legal discovery 
costs, regulatory penalty histories, 
litigation timelinesMagnitude (loss quantification, legal consequence measurement), Contextual (organizational risk exposure)
Asset and 
Infrastructure 
Data CMdBs, asset inventories, 
application catalogs, cloud service logsFrequency (exposure surface mapping), Magnitude (asset classification for 
impact), Control evaluation (coverage 
gap analysis)
Compliance, Audit, and Control 
Performanceaudit findings, control tests, 
soC and pCi reports, regulatory 
examination findings, compliance 
test results, and regulatory 
correspondenceControl evaluation (control strength 
assessment), Magnitude (regulatory 
risk exposure), Contextual (compliance 
maturity)
Identity and User Behavior access logs, MF a usage, dlp alerts, 
insider threat flagsFrequency (access risk patterns), Control 
evaluation (identity control effectiveness)
Awareness and 
Culturephishing test results, training 
completion rates, and employee security surveysFrequency (human error rates), Control 
evaluation (training effectiveness), 
Contextual (security culture maturity)
Risk and Governance risk register entries, exception logs, 
and past scenario modelsscenario Building (baseline modeling), 
Contextual (trend comparison, risk appetite)
Change and 
Project Data Change logs, devops metrics, and 
control project statusesFrequency (operational risk, deployment 
issues)
Third-Party and Vendor 
ManagementBreach notification records, 
regulator inquiries, subpoenas, 
slas, vendor questionnaires, vendor 
security assessmentsFrequency (vendor incident patterns), Magnitude (external legal and 
contractual impact)Table 12-1.  (continued)
(continued)Chapter 12  Your Best evidenCe: Finding and using internal data

218Table 12-1.  (continued)
Main Data Source Examples CRQ Applications
Network and 
Infrastructure 
Monitoringnetwork flow data, bandwidth 
usage, system performance metrics, 
capacity planning dataFrequency (system failure patterns), Magnitude (performance impact), Contextual (resilience baselines)
Customer/
External ImpactCustomer complaints, service desk 
escalations, sla breaches, customer 
churn dataMagnitude (business impact 
measurement), Contextual (reputation 
effects)
Security Testing 
and ValidationBug bounty results, red team exercises, tabletop exercise 
outcomes, pen test reportsscenario Building (exploitability 
validation), Control evaluation (response 
capability testing), Contextual (security 
posture assessment)
Figure 12-1.  Fifteen places to look for internal data sources
The great thing about internal data is that you don’t need all of these sources to get 
started. Even two or three categories can provide enough insight to improve your risk estimates meaningfully. Start with what’s most accessible in your environment and build from there.Chapter 12  Your Best evidenCe: Finding and using internal data

219 YES, YOU HAVE INTERNAL DATA (EVEN IF IT’S UGLY)
people i talk to about incorporating internal data into their risk assessments usually fall into 
two camps: they think they don’t have enough data to get started and don’t know where to 
find it, or they’re completely overwhelmed by the amount of data their organization produces.
Both problems have the same solution: start with your scenario, not your data.  this is why 
we built scenarios in Chapter 7 before diving into data collection. When you know exactly 
what risk you’re modeling, you can focus on the specific data sources that matter most, 
rather than trying to analyze everything at once or giving up because you think you don’t have 
anything useful.
the list in table 12-1 can help you get started, but focus on low-hanging fruit that gives you 
the most uncertainty reduction for effort expended. You don’t want to spend weeks cleaning up, normalizing, and analyzing a dataset just to find out that it doesn’t really illuminate the risk 
landscape much, and a much easier data source did the job just fine.
Start small and targeted.
 pick one or two data sources that directly relate to your scenario 
and see what insights emerge. expand later once you’ve proven the value of the approach.
Leverage GenAI.  if your organization permits ai  usage on internal data, ai-based tools can 
sift through mountains of data, including telemetry, vulnerability scans, unstructured text in 
memos and reports, incident logs, and much more. t hese tools can find patterns, extract 
context, assess relevance, and pair findings with risk scenarios. Many of the quantitative risk 
objections i’ve heard over the years (“not enough data” or “too much data”) are becoming 
moot in the age of ai -assisted risk analysis.
 Where to Find It (and Who to Ask)
Finding internal data isn’t about building a new pipeline. It’s about tracking down what 
already exists, which is usually scattered across systems, logs, and ticket queues. The 
speed at which you can collect this data and the depth available are, unfortunately, very 
organization-dependent. The fortunate among us may be able to type a well-crafted 
GenAI prompt into an AI-enabled enterprise search tool and obtain most of what they 
need in no time. Others may need to spend a bit of time channeling their inner Sherlock Chapter 12  Your Best evidenCe: Finding and using internal data

220Holmes: going out to talk to people who know what data sources exist, asking (or 
begging) for access, and getting help interpreting what they find. For the latter group, this 
section is for you. You just need curiosity, persistence, and a few well-aimed questions.
 Who to Ask
These are some of the teams illustrated in Figure 12-2, sitting closest to the data you 
want. They may not always own it directly, but they’ll know where it lives or who to nudge.
Figure 12-2.  Some teams to ask for data and what to ask for
• Security operations (SecOps): Incident logs, alert trends, containment metrics, SIEM data, threat intelligence feeds, 
forensic reports
• Infrastructure/IT: Uptime and downtime records, recovery 
timelines, system dependencies, performance metrics, capacity 
planning data
• GRC/Risk: Policy exceptions, risk register entries, control mappings. 
Internal Audit: Audit findings, control efficacy workChapter 12  Your Best evidenCe: Finding and using internal data

221• Finance: Historical losses, materiality thresholds
• Legal/privacy: Regulatory reporting, breach disclosures, fine history
• Helpdesk or support: User-reported incidents, phishing complaints, 
escalation patterns
• Business continuity/disaster recovery: Recovery testing results, scenario outcomes, RTO/RPO tracking, business impact estimates
• Vendor/third-party risk: SLAs, vendor assessments, supplier breach 
notifications, vendor security questionnaires
• Security testing/AppSec: Pen test results, bug bounty findings, red 
team exercise outcomes, vulnerability remediation timelines
  DON’T ASK FOR “DATA”
ask for timelines, logs, summaries, or reports that show what happened when something 
broke. specific questions get better results. tr y to speak the language of the team you are 
interacting with.
 Starter Questions and Scripts
Knowing who  to talk to is one thing. Knowing what  to ask is another. Use these starter 
scripts to gather data without spinning your wheels. They’re designed to be copy-pasted, 
adapted, and sent as Slack messages, emails, or hallway drive-bys.
To Security Ops or Detection Engineers“Do we have any records or logs that show how often [threat or incident type] was 
detected in the last year? I’m working on a risk scenario and want to get a handle on frequency. ”
“Do we track how long it usually takes to contain a confirmed incident, from 
detection to mitigation?”
“ Any dashboards that show alert volumes over time or by severity? Even just the raw 
numbers would help. ”Chapter 12  Your Best evidenCe: Finding and using internal data

222To IT or Infrastructure
“Do we track how long it usually takes to recover from a system outage or security 
incident? Even rough timelines would help. ”
“I’m trying to model the impact of downtime. Do we have actualized RTOs or any 
real recovery data from past outages?”
“Can I see any recent reports on unplanned downtime or service interruptions, 
especially the ones that required escalation?”
To Audit
“I’m reviewing risk exposure related to [scenario]. Are there any recent audit 
findings, risk acceptances, or policy exceptions tied to this area?”
“Is there a central place where we track control failures or overdue mitigations?”
“ Any reports or spreadsheets from past audits that include likelihood or impact 
estimates?”
To Finance
“Do we have any cost estimates or financial impact numbers from past incidents: 
downtime, legal costs, penalties, anything like that?”
“Has anyone modeled or tracked how much a major outage or breach actually 
costs us?”
“Do we track payouts for cyber insurance claims, or set aside contingency budgets 
for security-related events?”
To Support or Helpdesk“Do we track how many phishing reports or malware tickets come in each month? 
And do we log how long it takes to close them?”
“Is there a ticket category for security-related issues? I’d love to see counts or trends 
over time. ”
“Have we ever done a review of the most common types of end-user security 
complaints or escalations?”
To Everyone“I’m trying to build a risk scenario and don’t want to waste time chasing the wrong 
data. If you had to tell me one system, report, or person to talk to about this topic, who would it be?”
“Is there anything you or your team use to track incidents, patterns, or lessons 
learned, even if it’s not formal?”
“If I wanted to know what usually goes wrong in [system/process], what would you 
point me to first?”Chapter 12  Your Best evidenCe: Finding and using internal data

223  WHEN PEOPLE SAY NO (AND WHAT TO DO ABOUT IT)
some people will be less than enthused to help with your data requests. here’s how to handle 
common pushback:
“I don’t have time for this.”
• offer to do the work yourself if they can just point you to the right system or 
reports.
• ask for just ten minutes to understand what data exists, not necessarily to get it 
all immediately.
• Come back during their slower periods or offer to help with something 
they need.
“That data is confidential/sensitive.”
• Clarify exactly what you need (often it’s trends or counts, not sensitive details).
• ask about anonymized or aggregated versions.
• involve your manager or their manager if the data is genuinely critical to a risk 
assessment.
“We don’t track that,” or “That data doesn’t exist.”
• ask what they do track that might be related.
• probe for informal tracking, spreadsheets, or institutional knowledge.
• ask who else might have similar data on the same risk.
“I’d need approval from [higher authority].”
• offer to help draft the request or provide context about why it matters.
• ask who specifically needs to approve and what information they’d need.
• Consider involving your leadership to make the request peer-to-peer.
“Audit just came through last month.”
• explain that you’re doing risk analysis, not audit compliance: “i’m trying to 
understand how often things happen and what they cost, not whether controls exist on paper.”Chapter 12  Your Best evidenCe: Finding and using internal data

224• Clarify the difference: “ audits check if you have the right processes. risk 
analysis estimates what could go wrong and how much it might cost if it does.”
• emphasize forward-looking value: “this helps us make better decisions about 
where to invest our security budget, not just pass the next audit.”
• Frame it as complementary: “ this actually makes audits easier because we’ll 
have better data about what our real risks are.”
Remember: You’re trying to improve organizational risk management. Most people want to 
help once they understand the purpose and see that you’re not trying to create busy work 
for them.
 Coverage Rates
You learned the core data quality evaluation framework in Chapter 11. Apply those 
same principles to internal data. However, there is one additional aspect of internal data 
evaluation that deserves special attention: coverage rate. A coverage rate measures the 
percentage of your environment that is reflected in the data. For example:
• If you’re using detection logs, what portion of your endpoints or assets are covered by the logging tool?
• If you’re analyzing tickets or response events, are all business units represented or only a few?
• Is this data specific to one region, team, or system, and are you trying 
to generalize it beyond that scope?
Coverage rate helps you avoid drawing conclusions from a skewed sample. If your 
dataset only covers 40% of your environment, you need to be explicit about that and adjust your frequency estimates accordingly.
What to do: Address poor coverage in one of three ways: (1) Find complementary 
data sources with better coverage, (2) scale your estimates mathematically only if you’re confident about both the coverage rate and that your logged incidents are 
representative, or (3) use SME input to validate coverage assumptions and identify what 
goes unreported. The SME piece is particularly important. They might say, “Yes, we only 
log about half” or “actually, minor phishing attempts never get logged, but major ones 
always do, ” which fundamentally changes how you’d adjust.Chapter 12  Your Best evidenCe: Finding and using internal data

225 WHY COVERAGE RATES MATTER SO MUCH
imagine a fire marshal walks into an apartment building and inspects installed ten smoke 
detectors. a ll ten are in perfect working order. Based on that inspection, things look great: 
safe building, responsive residents, no action needed. t he report will reflect that ten out of ten 
detection controls are in place.
But then you learn something else.
there aren’t supposed to be ten smoke detectors in the building. there are supposed to be 50. 
that means the building is missing 40 detectors that weren’t inspected. suddenly, the “ten out 
of ten working” stat doesn’t feel so great, illustrated in Figure 12-3 . not only is it a misleading 
statistic, but without the full picture, we’re missing the fact that the apartment building is at 
elevated risk if a fire broke out.
Figure 12-3.  Why knowing the coverage rate matters
this is the importance of coverage rate . if you’re gathering data for a risk model, it’s not 
enough to know how many alerts were closed, how many systems were patched, or how 
many users clicked a phishing link. You also need to know: out of how many?
• if your vulnerability scan shows 500 issues across 100 assets, how many 
assets were scanned out of the total number of assets at the organization?
• if your alert volume is trending down, is that across the whole environment or 
just the parts where logging is enabled?Chapter 12  Your Best evidenCe: Finding and using internal data

226• if your ticket closure time is improving, does that reflect the whole organization 
or just one business unit?
Coverage rate is the denominator. it’s what turns metrics into meaningful signals. Without it, 
your data can’t tell the whole story, no matter how good it looks on the surface.
  GENAI PROMPT: EXTRACT CRQ-RELEVANT DATA FROM INTERNAL DOCUMENTS
When analyzing internal documents for risk quantification, use this prompt to identify and 
extract usable data. Always verify a sample manually to catch errors, especially for financial 
figures or critical metrics.
i need to analyze the attached document for cyber risk quantification (CrQ). do the following:
 1. Identify Data Types Present
list what types of data the document contains (incidents, audits, costs, 
timelines, vulnerabilities, testing results, etc.)
 2. Classify Internal Data Sources
Categorize by team/source ( secops logs, audit findings, financial records, BC/
dr testing, etc.)
 3. Extract CRQ Elements
pull all relevant quantification data:
• Frequency:  incident counts, patterns, control failures, attack volumes
• Magnitude:  direct/indirect costs, downtime impact, financial losses
• Control/Response:  detection/containment/resolution times, team effort, 
control effectiveness
• Exposure:  affected systems, vulnerability counts, blast radius
• Context:  root causes, threat actors, contributing factorsChapter 12  Your Best evidenCe: Finding and using internal data

227 4. Provide CRQ Insights
Briefly explain how this data could be used in risk models (e.g., “ supports 
frequency estimation for ransomware” or “ provides magnitude inputs for 
outage scenarios”)
Format as a structured table. Mark unavailable information as “ not specified” rather than 
guessing.
 From Raw to Useful: Prepping Internal Data for CRQ
You’ve done the hard part: tracked down data, sifted through logs, and reviewed 
countless dashboards. Now it’s time for the fun part: turning the data into inputs for the 
risk quantification model.
This section shows how to take the data you’ve collected and transform it into 
estimates for the three core CRQ components: scenario definition, frequency, and 
magnitude. We’ll also use internal data to provide context for the overall risk landscape.
  HOW TO PRACTICE THE FOLLOWING METHODS
as with all the techniques in this book, i strongly encourage you to practice them on your 
own. however, unlike other chapters, this one deals with data that comes from inside your 
organization and may be confidential, regulated, protected by attorney-client privilege, or all of 
the above. t he section later in this chapter, “ethical Considerations and privacy,” elaborates on 
these concerns.
i still want you to practice, so there’s a downloadable ai-generated incident log that replicates 
what an incident response team might log in a typical organization. You can find it at www.heatmapstohistograms.com
 in the tools & downloads section. You can use this dataset, or 
even better, use genai to create your own based on the metadata your team actually tracks.Chapter 12  Your Best evidenCe: Finding and using internal data

228 Method 1: Use Timestamped Records 
to Estimate Frequency
If you have incident logs, alerts, or tickets with time stamps, you can calculate how often 
something happens.
How to Do It
• Count the number of relevant events.
• Define the time window (e.g., 12 months).
• Divide or scale events by time to get an annualized rate.
• Adjust for partial coverage if the data only reflects part of the environment.
Examples
• 12 phishing incidents over 8 months → ~18 per year (12 ÷ 8) × 12 = 18 incidents per year
• 3 unplanned website outages over the last 5 years → ~0.6 per year (3 ÷ 5 = 0.6 outages per year)
• 2 insider-driven data exfiltration events over the past 9 years → ~0.22 per year (2 ÷ 9 ≈ 0.22 incidents per year)
Remember: these calculations give you point estimates. You’ll need to convert them 
into ranges using SME input or the quality adjustment methods from Chapter 11. Define the range as a lower bound, typical, and upper bound, a.k.a. P5, P50, and P95, so your 
inputs align with the modeling approach introduced earlier.
  EXERCISE 12-1: ESTIMATING FREQUENCY
Note: Use the sample incident dataset available at
www.heatmapstohistograms.com
• sort the spreadsheet by Incident Type . pick one type (like “phishing” or “system 
outage”); then count how many times it occurred during the time period.
• since the data covers a seven-month window (January–July 2024), you’ll need 
to annualize the frequency using this formula: Annualized Frequency = 
(Events ÷ 7) × 12.Chapter 12  Your Best evidenCe: Finding and using internal data

229• this gives you a normalized event rate you can use in your risk model.
• While you’re doing your analysis, the information security manager approaches 
you with a problem. t here was a training issue with some of the junior analysts, 
and it was discovered that some incidents were not logged. a fter discussion, 
it’s estimated that about 10% of incidents were not logged, meaning the 
incident list has about a 90% coverage rate.
• adjust your data for this coverage rate: divide your frequency estimate by 0.9 to 
account for missing incidents.
• the manager seemed sure, but not 100% confident about the coverage 
rate. using the quality adjustment methods from Chapter 11, apply a ×2 
range widening  to reflect uncertainty about coverage and data quality. t he 
adjustments are for uncertainty, not strict math corrections.
• You now have an annualized frequency estimate with appropriate uncertainty ranges for your chosen incident type.
• note that the above adjustments are for uncertainty, not strict math corrections.
 Method 2: Extract Event Durations to Estimate Downtime, 
Incident Response, and Recovery Windows
Look for start and end times in tickets or postmortems. This information helps you estimate how long incidents actually take, from detection to containment to full 
recovery. That duration becomes a key input for modeling downtime, labor costs, and lost productivity.
How to Do It
• Obtain a list of incidents with corresponding timeline data.
• Break down the incident timeline into stages: detection, 
containment, resolution.
• Calculate minimum, most likely, and maximum recovery times to understand the range.Chapter 12  Your Best evidenCe: Finding and using internal data

230Use this data to help inform your forms of loss (Chapter 8). Here are key cost 
categories to consider:
• Response costs from labor, paired with hourly wage (security, IT, 
legal, communications)
• Revenue loss per hour for customer-facing services
• Third-party fees (e.g., outside counsel, PR, contractors)
• Penalty multipliers for violations tied to duration (e.g., SLA fines)
Example: Over the past five years, your company experienced eight significant 
system outages, with recovery times captured in postmortems and incident ticketing. 
You calculate
• Lower bound (P5): Two hours (minor service disruption with rapid 
recovery)
• Typical (P50): Six hours (typical recovery with coordinated response)
• Upper bound (P95): Four days (complex outage involving multiple systems and coordination with outside firms)
 GENAI PROMPT: ESTIMATE DOWNTIME, INCIDENT RESPONSE, AND RECOVERY
Note: Use the sample incident dataset available at www.heatmapstohistograms.com.
 1. F ind the column that contains duration data. Focus on incidents that caused 
system downtime or required significant response effort. Hint:  look at the 
“analyst notes” column. use genai to help you find patterns.
 2. group incidents by severity level (low/Medium/high/Critical).
 3. F or each severity level, identify the minimum, median (most likely), and 
maximum duration values.
 4. Calcula te response costs for information security incident responders:
• extract team size information from the analyst notes (look for phrases like 
“3 soC analysts,” “4 network engineers”)Chapter 12  Your Best evidenCe: Finding and using internal data

231• use an average weighted hourly wage of $150/hour for security 
team members
• apply your dura tion values (min/median/max) to calculate cost ranges: 
(team size × duration × $150/hour)
• You now have a range for the response Costs category in your magnitude 
analysis
 5. Calcula te business impact from downtime:
• For incidents that affected multiple users, use an estimated downtime 
cost of $8,000/hour (adjust this figure based on your organization’s typical 
hourly revenue and the systems affected)
• apply your dura tion values to calculate impact ranges
• this gives you estimates for the Business disruption category in your 
magnitude analysis
You have now practiced Method 2 and created magnitude estimates using simulated 
internal data.
Note: You may want to weight your final estimates based on the frequency of each 
severity level.
 Method 3: Define Scenarios Based on Repeating Patterns
Use documented incidents to discover causes, effects, threat paths, and consequences. 
Use this information to improve your risk scenarios.
How to Do It
• Look for patterns, repeatable conditions, or unique factors in postmortems or incident write-ups.
• Document threat vector, asset class, control state, and outcome.
• Use this to create credible, concrete risk scenarios.Chapter 12  Your Best evidenCe: Finding and using internal data

232Examples
• Three separate cloud breaches stemmed from the same third-party 
misconfiguration. Use this to model a scenario where a vendor 
exposes sensitive data via cloud storage.
• Two separate BEC incidents involved finance employees falling for 
credential phishing and having mail forwarding rules set up without 
detection. Use this to model a scenario where a phishing attack leads 
to unauthorized access and silent data exfiltration from a corporate 
email account.
  GENAI PROMPT: PATTERN RECOGNITION FOR RISK SCENARIOS
Upload incidents into the GenAI prompt
analyze the attached incidents and identify common patterns that could inform risk scenarios. 
For each pattern you find, provide:
 1. Common elements: What threat vectors, asset types, or failure modes repeat 
across incidents?
 2. Root cause patterns: What underlying conditions or control gaps enabled these incidents?
 3. Impact patterns: What types of losses or consequences occurred consistently?
 4. Scenario framework: Write a risk scenario statement based on this pattern using this format:
• Asset: What specific system, data, or resource was affected?
• Threat: What actor or force caused the problem (e.g., cybercriminals, untrained employees, system failures)?
• Effect: What aspect of security was compromised - confidentiality (data exposed), integrity (data corrupted), or availability (systems down)?
 5. Format : “[threat] impacts the [effect] of [asset]
Focus on patterns that appear in two or more incidents rather than one-off events. present 
your findings in a structured format that i can use in a risk assessment.Chapter 12  Your Best evidenCe: Finding and using internal data

233 Method 4: Model Control Conditions from Exceptions 
and Audit Findings
Scenarios depend on whether key controls are working or not. Internal data shows where 
they’re failing. Failing controls, especially newly failing ones, give you a signal to adjust 
frequency and/or magnitude upward in your risk models.
How to Do It
• Review exceptions, audit reports, or known control gaps.
• Use this information to adjust the frequency and magnitude numbers 
in your risk analysis, as appropriate.
Examples
• You just discovered that 80% of systems are exempt from MFA. This raises the likelihood of account compromise in insider threat 
scenarios.
• Your fraud detection vendor just went out of business, and it will take 
at least a month to onboard a new one. This increases the frequency 
of successful fraud cases, and more events may slip through without 
detection. It may also increase magnitude, since a delayed response 
usually means higher losses, more remediation effort, and more 
customer impact.
  GENAI PROMPT: DERIVE CONTROL GAPS FROM INCIDENT DATA
Upload incidents into the GenAI prompt
analyze the incidents attached to identify control gaps and failures. group your findings by 
control gap type, not by individual incident. only derive gaps explicitly seen in the incident 
data. do not extrapolate.
For each control gap you identify, provide:
 1. Control Gap Name:  (e.g., “MF a  not enforced,” “p a tch Management delays,” 
“email Filtering Bypassed”)Chapter 12  Your Best evidenCe: Finding and using internal data

234 2. Gap Category:
• preventive Controls: Failed to stop incidents from occurring
• detective Controls: Failed to identify threats quickly
• response Controls: Failed to contain or mitigate effectively
• recovery Controls: Failed to restore operations efficiently
 3. Root Cause Type:
• technical:  system misconfiguration, software bugs, hardware failures
• process: Missing procedures, inadequate workflows
• people:  training ga ps, policy violations, human error
• vendor/ external: third-party failures, supply chain issues
 4. Supporting Incidents:  list the incident ids where this gap contributed to 
the problem
 5. Risk Impact:  how does this gap affect the frequency or magnitude of future 
incidents?
 Ethical Considerations and Privacy
Quantitative risk analysis requires deeper data access than traditional assessments. 
While red-yellow-green methods might review summary reports, CRQ often involves 
years of incident logs, detailed postmortems, and sensitive operational data. This increased depth requires extra care.
Key Considerations
Attorney-client privilege and PII protection: Flag anything that appears protected 
but isn’t clearly marked. I’ve found names, contact info, and customer data accidentally embedded in logs and analyst notes. Always escalate these discoveries and follow your 
organization’s data retention policies.
GenAI and data privacy: If using AI for cleanup or analysis, use only enterprise- 
grade tools that meet your organization’s security policies. This isn’t just best practice; 
it may be a compliance requirement. Regulators like FINRA and the SEC expect firms to 
supervise technology use, including GenAI.Chapter 12  Your Best evidenCe: Finding and using internal data

235Access permissions: Just because you can access HR systems, email logs, or 
monitoring tools doesn’t mean you should without explicit approval. Get proper signoff 
when in doubt.
Reporting on teams: When data reveals repeated failures in specific departments, 
be direct but thoughtful. Risk assessments should inform, not shame.
Regulatory compliance: Industries subject to GDPR, HIPAA, or SOX have specific 
limitations on data use, even internally. Check with legal or compliance teams when 
uncertain.
Transparency in analysis: Always include an assumptions and disclaimers section 
explaining data limitations, coverage adjustments, and modeling decisions. This builds trust, invites feedback, and often surfaces better data from stakeholders who weren’t 
initially involved.
Remember: Cleaning messy data and adjusting for gaps is standard analytical 
practice. The key is being transparent about your methods and limitations.
 Protecting Results As They Circulate
When it’s time to share your assessment, respect confidentiality. If your results are 
abstracted enough from the source data, it may not be a problem. But for deep-dive 
assessments, especially ones tied to active incidents, legal matters, or regulatory issues, 
double-check that your outputs are tagged and handled appropriately.
If you’ve used privileged or confidential data to produce the results, make sure 
that protection carries forward. That includes slides, summaries, and anything shared 
with stakeholders. If there’s any doubt, loop in privacy, compliance, or legal before 
circulating. That’s part of doing the job responsibly.
 Chapter Summary
The Big Idea: Internal data serves as your anchor, grounding risk estimates in your specific operational reality, but only when you know how to find it, evaluate its quality, 
and transform messy organizational records into usable risk inputs.
Key Takeaways
• Start with your scenario, not your data. Let your risk assessment 
scope guide what internal sources to prioritize rather than trying to 
analyze everything at once.Chapter 12  Your Best evidenCe: Finding and using internal data

236• Master the four transformation methods. Convert timestamped 
records to frequency estimates, extract duration data for magnitude 
analysis, identify patterns for scenario building, and model control 
conditions from audit findings.
• Apply targeted quality evaluation. Focus especially on coverage rates and common challenges like reporting bias, definitional drift, 
and data locked behind organizational silos.
• Use the systematic approach to data collection. Know who to ask, 
what questions to get results, and how to handle pushback when 
people say no.
• Leverage GenAI responsibly. Use approved, enterprise-grade tools 
to accelerate pattern recognition and data extraction, but always 
validate outputs and follow your organization’s privacy policies.
• Practice ethical data handling, respect attorney–client privilege, 
protect PII, get proper approvals, and be transparent about data 
limitations and analytical adjustments.
Bottom Line: Internal data provides the organizational specificity that transforms 
generic industry baselines into actionable, credible risk models that stakeholders recognize and trust.
 What’s Coming Next
Chapter 13 introduces the third essential data source: subject matter experts. You’ll learn 
how to structure expert judgment, run effective elicitation sessions, and combine SME 
insights with the external and internal data you’ve already collected to create complete, 
defensible risk assessments.Chapter 12  Your Best evidenCe: Finding and using internal data

