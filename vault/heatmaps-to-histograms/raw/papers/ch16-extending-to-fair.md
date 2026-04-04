---
title: "Chapter 16: Extending to FAIR"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 16
pages: 320-342
ingested: 2026-04-04
---

# Chapter 16: Extending to FAIR

301
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_16CHAPTER 16
Extending to FAIR
You’ve taken your first step into a larger world.
—Obi Wan Kenobi
I was walking down the street one afternoon with a colleague from the GRC team of a 
company where I once worked.
I’d implemented FAIR successfully at a few previous organizations, and this company 
wanted to apply it to some very specific use cases within their risk program. As we talked, 
I mentioned how quantitative methods can work well across many kinds of operational 
and technology risk.
He gave me a puzzled look and said, “I don’t like FAIR. Every time I’ve ever seen FAIR 
used, the numbers come out way too high. ”
I looked at him and asked, “Too high compared to what?”He paused. “I don’t know, ” he said. “They just feel too high. ”
I then asked, “Have you ever run another quantitative model to compare?”
He hadn’t. He just knew the results felt off.That conversation stuck with me because it captures how many people 
misunderstand FAIR. They think they know what it is, or what it’s supposed to be, but they’ve never actually tested it or compared it against anything else.
FAIR is probably the most widely recognized quantitative risk framework in 
cybersecurity. It’s also the most misunderstood.
 What FAIR Is (and Isn’t)
FAIR, short for Factor Analysis of Information Risk, was developed in the early 2000s by Jack Jones while he was Chief Information Security Officer at Nationwide Insurance 
(Freund & Jones, 2014).

302Jones has described how the framework began with a simple executive conversation 
about budget and accountability. After presenting a request for additional funding, he 
was asked two direct questions: How much risk do we have?  and How much less risk will 
we have if we approve the spend?  (Freund & Jones, 2014 ).
He realized that, despite long experience in information security, there was no 
structured way to answer either question. That gap between intuition and measurable 
evidence sparked the creation of FAIR, a model designed to express information-risk 
uncertainty in quantifiable, business-relevant terms (Freund & Jones, 2014 ).
When most people hear FAIR, they picture the classic tree diagram shown in 
Figure  16-1 . Loss Event Frequency  is decomposed into sub-components on the left, and 
Loss Event  Magnitude is decomposed on the right. This is the classic FAIR model, but 
not the whole story. FAIR began as a single model; it has since grown into a family of 
connected frameworks and an active global community.
Figure 16-1. Full FAIR model. (Adapted from Risk taxonomy (O-RT), version 3.1 
(The Open Group, 2021))Chapter 16  extending to F air

303  WHAT FAIR ISN’T
• not a product or tool.
• not a replacement for judgment.
• not limited to cybersecurity.
• it’s a structured way to answer the same questions Jack’s executives asked: 
How much risk do we have, and what do we get if we spend the money?
The Open FAIR Standard 
FAIR, as a standard, began with The  Open Group, which still maintains the Open FAIR 
Risk Taxonomy and Risk Analysis Standards. Originally published in 2014, these 
documents define the original model: the structured breakdown of how frequency and magnitude combine to produce risk.
That simple relationship turned vague words like likelihood and impact  into 
measurable components. It gave security and risk teams a shared language, and it remains the formal specification behind every FAIR-based model today.
The Open Group maintains the formal Open FAIR standards and continues to extend 
the broader body of knowledge through white papers, guides, and methodological work, including its efforts in Zero Trust and enterprise risk management. The FAIR Institute, founded by Jack Jones, builds on that foundation by developing applied frameworks such as FAIR-CAM, FAIR-MAM, and FAIR-TAM for practitioners.
 The Rise of the FAIR Institute and the New Family 
of Models
Around 2016, FAIR’s creator, Jack Jones, and collaborators founded the FAIR Institute, a research-driven, not-for-profit (FAIR Institute, n.d.), to carry the work forward. That community began extending the original model into specialized models that connect risk analysis to real-world management decisions. Table 16-1 shows the different standards, frameworks, and models.Chapter 16  extending to F air

304Table 16-1.  The current FAIR ecosystem
Organization/
Standard BodyName Type Description
the open group open F air  r isk 
taxonomy ( o - rt )Standard defines the o pen F air  model; formerly 
called the “ontology.”
the open group open F air  r isk a nalysis 
(o-ra)Standard defines the process for risk analysis.
Fair i nstitute Fair Model Standard defines the F air  model; not a formal 
standard, distinct from the open 
group versions
Fair i nstitute Fair-C a M (Controls 
analytics Model)Standard Maps controls into F air  factors to 
model how controls affect risk.
Fair i nstitute Fair-M a M (Materiality 
assessment Model)Framework/Model adds materiality/financial/regulatory 
terms to F air . Can optionally replace 
the six forms of loss.
Fair i nstitute Fair- ta M ( t hird- party 
assessment Model)Framework/Model extends F air  into third-party and 
supply chain risk.
Fair i nstitute Fair-C r M p  (Cyber r isk 
Management program)Standard integrates F air  within ongoing risk 
governance programs (emerging).
Fair i nstitute Fair- air  ( ai  r isk 
playbook)playbook applies F air  logic to ai /model risk.
Note  information compiled from t he o pen g roup (2021) and F air  i nstitute. See 
the references for full citations.
Together they form what practitioners now call the FAIR ecosystem: a living, 
modular architecture linking data, controls, and decisions. FAIR exists today in two 
closely related but distinct forms.Chapter 16  extending to F air

305• The Open Group  maintains the formal  Open FAIR standards, 
which define the official taxonomy and analysis process used for 
certification and auditability.
• The FAIR Institute , co-founded by Jack Jones, builds on that 
foundation through applied frameworks such as FAIR-CAM, FAIR-  
MAM, and FAIR-TAM.
These community-developed models expand FAIR’s reach into areas like controls 
analytics, third-party risk, and financial materiality, but they do not replace the Open 
FAIR Standards.
The FAIR Institute has been instrumental in bringing CRQ to the mainstream. 
Among other contributions, it provides
• Education and certification (for FAIR practitioners) beyond just 
taxonomy
• Research and community (connecting practitioners, cross-industry 
sharing)
• Frameworks/models built on or compatible with FAIR (e.g., controls 
modelling, materiality modelling, third-party risk modelling)
• Resources and tools to integrate FAIR into modern practice (data, 
metrics, AI integration)
 The State of Risk Management Before FAIR
To understand what Jack built, you have to understand what he was reacting to. In the 
1990s and early 2000s, information security risk management was mostly qualitative, 
with a few rare exceptions.
Organizations used arbitrary scales, inconsistent definitions, and a lot of guesswork 
dressed up as expertise. What little quantitative guidance existed told you to measure 
things like “exposure factor” or “asset value, ” but with no clear definitions or context.
As we covered in Part 1 of this book, it’s no wonder people thought quantitative risk 
analysis was impossible. Jack saw that the field wasn’t broken because of math; it was 
broken because of thinking .Chapter 16  extending to F air

306 Jack Jones’ Three Big Contributions
 1. Precise Definitions
FAIR cleaned up the language. It provides precise, unambiguous definitions for terms 
like risk, threat , loss event , asset , and Susceptibility .
Jack uses a favorite analogy in speeches when describing the state of the information 
security profession. He asks a series of questions to the audience:
• “How many of you would want to ride a space mission?” Typically, a 
few hands go up.
• Then he asks, “How many of you would want to ride on a mission 
if the scientists and engineers who designed the spacecraft and 
planned the mission couldn’t agree on the definition of mass, weight, 
and velocity?”
He then points out to the audience that that’s exactly what our profession is doing 
every day. We’re taking our stakeholders on that very mission when we can’t agree on 
basic nomenclature.
If you compare definitions of “risk” across standards, the inconsistency is striking. 
NIST ( 2012 ) calls it a function of likelihood and impact. ISO 31000 ( 2018 ) defines it as the 
effect of uncertainty on objectives. COSO ( 2020 ) frames it as “the possibility that events 
will occur and affect the achievement of strategy and business objectives. ” GDPR ( 2016 ) 
focuses on the likelihood and severity of harm to the rights and freedoms of individuals. 
PCI DSS ( 2022 ) uses the word “risk” extensively, but never defines it at all, treating 
“risk” as shorthand for non-compliance. The Open FAIR Taxonomy set out to fix that by 
defining risk in measurable terms, “the probable frequency and probable magnitude of 
future loss” (The Open Group, 2021).
 2. A Framework for Critical Thinking
Second, Jack introduced a framework for thinking  about risk.
Before FAIR, a “risk workshop” meant people sitting in a room, listing anything that 
worried them, and then playing Pick-A-Color. We still do that, but at least there’s an 
alternative. Half the items that come out of such workshops aren’t risks; they could be Chapter 16  extending to F air

307threats, control gaps, vague concerns, or something else entirely. FAIR brought structure. 
It forced analysts to decompose problems into an asset, threat, and effect. It made risk a 
reasoning problem, not a coloring exercise.
 3. Measurement and Actuarial Logic
Finally, Jack introduced concepts from metrology  (the science of measurement) and 
actuarial science  into information risk management. These ideas existed in academia, 
but few had made them usable in day-to-day security programs.
FAIR bridged that gap. It gave practitioners  a way to reason probabilistically and 
quantitatively without needing to be statisticians.
At a dinner years later, Jack Jones and I explained FAIR to a colleague who is an 
expert in quantitative enterprise risk management. After listening, he said, “So it’s 
just actuarial techniques applied to information risk?” Exactly. FAIR didn’t invent 
quantification; it operationalized  it for information systems.
 How FAIR Works (in Plain English)
If you’ve walked through the exercises in this book, you already know the basics of FAIR.
At its simplest, FAIR expresses risk  as the combination of
• Loss Event Frequency (LEF) : How often losses are expected to occur
• Loss Magnitude (LM) : How large those losses are likely to be
Earlier in this book, we called those simply frequency  and magnitude.  It’s the same 
thing, even measured the same way: as ranges articulated in years, not probabilities.
If you stop right there, you’ve already done a FAIR-compatible risk assessment. But 
FAIR goes further by showing how to break those top-level factors into measurable parts. 
That decomposition is one of FAIR’s biggest contributions to risk analysis.
This layered structure is the real power of FAIR. It lets you find data that exists  
instead of lamenting data that doesn’t. Every security team has different telemetry. 
FAIR gives you multiple entry points for quantification so you can start wherever your 
evidence lives.Chapter 16  extending to F air

308FAIR can feel complex at first, especially when implemented through enterprise 
tooling or governance processes. But at its core, it’s simply a structured way to express 
what you already know about frequency and impact. Start simple, expand only when 
your data justifies it.
 Decomposing Loss Event Frequency
You can think of Loss Event Frequency as a function of how often threats act and how 
often attempts succeed. In the FAIR model, those subcomponents are Threat Event 
Frequency (TEF) and Susceptibility.
• Threat Event Frequency: How often a threat actor acts against an 
asset, whether or not the attempt succeeds
• Susceptibility: How likely the asset is to experience loss given the threat’s capability and the strength of controls resisting it
Note  W e use Susceptibility (synonym in the o pen F air  standard for Vulnerability) 
to emphasize the probabilistic nature of resistance.
This is useful because organizations often have data that fit one level but not another. 
Maybe you know how many phishing attempts occurred last year, but not how many 
succeeded. FAIR’s decomposition lets you work with the data you have.
If you lack data even for Threat Event Frequency, FAIR allows another layer of 
decomposition:
• Contact frequency: How often a threat comes into contact with 
the asset
• Probability of action: How likely the actor is to act once contact occurs
Each layer lets you substitute available data for missing pieces while keeping 
the logic consistent. Susceptibility can also decompose into threat capability and 
resistance strength.Chapter 16  extending to F air

309  GENAI PROMPT : IDENTIFY DATA FOR FREQUENCY
given a risk scenario where [ describe scenario], list the kinds of data that could estimate 
threat event Frequency ( teF) and Vulnerability in a F air -based risk assessment. For each, note 
whether the data is internal or external, how often it is updated, and where one could find it.
 Decomposing Loss Magnitude
We’ve already covered this in Chapter 8. FAIR divides Loss Magnitude into Primary 
Loss and Secondary Loss.
• Primary Loss: The direct, immediate cost of the event
• Secondary Loss: The indirect or long-tail fallout—regulatory fines, customer churn, reputation damage, or legal costs
In this book, we explored those concepts through the six forms of loss, which align 
directly to FAIR’s magnitude side.
  EXERCISE 16-1: DRA W YOUR FIRST FAIR MODEL
Goal:  practice connecting a simple risk scenario to F air ’s core structure.
Scenario:  a financially motivated threat actor is likely to attempt a phishing campaign against 
finance staff. a  successful compromise could lead to ransomware encrypting shared drives 
and disrupting access to financial systems.
Step 1: Start Simple
draw three boxes: Risk → Loss Event Frequency (LEF) → Loss Magnitude (LM).
Write one sentence for each:
• LEF: “how often could ransomware from this group encrypt our shared drives?”
Example answer: “We’ve had one major ransomware event in the past three years, 
and similar companies see a few per year.”Chapter 16  extending to F air

310• LM: “What would it cost each time it happens?”
Example answer: “We’d lose two to three days of productivity and pay recovery and IR 
costs around $250K.”
Step 2: Add One Layer
Under L eF, add Threat Event Frequency (TEF) and Susceptibility.
ask yourself:
• TEF: how often do attackers try this?
• Susceptibility: When they try, how often does it succeed?
Step 3: List New Data You’d Need
examples: phishing attempts per year, click-through rates, backup success, MF a  coverage.
Step 4: Reflect
What did adding te F and Susceptibility show that the simple L e F and LM view missed?
 Using Only As Much FAIR As You Need
If there’s one message to take from this chapter, it’s that you can use as much or as little of FAIR as you need.
That’s one of its greatest strengths. It’s modular. Choose the pieces that fit your 
program and ignore the rest. You don’t have to “go full FAIR” to get value from it. The 
principle works with the FAIR ecosystem shown in Table 16-1 and with the FAIR model 
itself, in Figure 16-1.
Throughout this book, I’ve used parts of FAIR even though this isn’t a FAIR book. 
The point isn’t whether you follow FAIR line by line. The point is whether you’re thinking 
clearly about the components of risk.
Some practitioners treat FAIR dogmatically, forgetting that its real power lies in 
critical thinking and adaptation, in using the parts that help you reason better about 
uncertainty, not from following the model for its own sake. FAIR, Hubbard’s models, and 
other quantitative frameworks all rest on the same foundation: probabilistic reasoning, 
measurement under uncertainty, and structured decision-making. They work together 
because, at the end of the day, it’s all just math applied to uncertainty.Chapter 16  extending to F air

311The deeper you go in the model, the more data and effort you need. If you already 
have strong loss frequency data, you don’t need to decompose it further just to say you 
did. Use the level of the model that matches your available data and the decision you’re 
trying to support.
 GENAI PROMPT : PICK YOUR FAIR DEPTH
here is the data i have for a risk analysis: [ paste or describe ]. Suggest the simplest F air  
decomposition that makes sense given the available data. explain which F air  factors to 
include and which to omit.
Here are three examples of mix-and-match approaches that work in practice. Think 
of them as “choose your own adventure” paths through FAIR, depending on what data 
you have and the decision you’re trying to make.
 Example 1: Use Top-Level Inputs Only
Figure 16-2.  Using FAIR at the Loss Event Frequency and Loss Event 
Magnitude level. (Adapted from Risk taxonomy (O-RT), version 3.0.1 (The Open 
Group, 2021))Chapter 16  extending to F air

312If you already have high-quality data for Loss Event Frequency and Loss Magnitude 
and the decision at hand doesn’t require further decomposition, stop there, as seen in 
Figure  16-2 . For instance, the Cyentia IRIS reports provide excellent aggregated data at 
those levels. I’ve run analyses using only those two inputs with great success. There’s no 
reason to decompose frequency into more detail if the data is already solid.
 Example 2: Fully Decomposed Magnitude
Figure 16-3. Loss Event Frequency is top-level; Loss Event Magnitude is fully 
decomposed. (Adapted from Risk taxonomy (O-RT), version 3.0.1 (The Open 
Group, 2021))
Sometimes you have reliable data for how often losses occur but want more precision 
in how you describe their cost. That is especially common in data breach scenarios. 
The industry now has solid frequency data and increasingly detailed magnitude data, 
including secondary losses. Each year, this gets easier to obtain as the risk analyst can 
use AI tools to scan news stories, public databases, and regulatory filings such as 8-K and 
10-K forms to extract information about fines, legal actions, and total incident costs. In 
those cases, it often makes sense to keep frequency at the top level and break magnitude 
down further, as demonstrated in Figure  16-3 .Chapter 16  extending to F air

313  GENAI PROMPT : EXTRACTING MAGNITUDE DATA FOR DATA BREACH
You are an analyst assisting with a quantitative risk assessment. Your task is to collect verified, 
factual data on publicly reported data breach incidents that include financial impact details.
Follow these rules strictly:
• No estimates, projections, or AI-inferred numbers.  only include values 
explicitly stated in reliable, published sources.
• No speculation.  if a cost or loss figure is unclear or disputed, omit it and note 
that it was unavailable.
• Check for hallucination.  after retrieving each figure, recheck the source text 
to confirm the value exists verbatim.
• Verify every citation.  only use data from primary or verifiable sources such as
• regulatory filings (e.g., S eC 8-K, 10-K, or enforcement documents)
• Court records or settlement documents
• reputable investigative journalism (e.g., reuters, Bloomberg, WSJ, t he 
register, SC Media)
• Company press releases or investor statements
For each incident, extract:
 1. o rganization name and industry
 2. Y ear of incident
 3. d escription (one sentence)
 4. r eported primary losses (response, legal, downtime, restoration)
 5. r eported secondary losses (fines, lawsuits, regulatory actions, customer 
churn, reputation impact)
 6. Source and publica tion date
 7. V erification note (e.g., “Confirmed in 8-K filed Feb 2024”)
present the results in a table with one row per incident.
Convert values to US d if necessary, and flag any record where cost data cannot be confirmed 
verbatim.Chapter 16  extending to F air

314 Example 3: Decompose Threat Frequency Using 
Control Data
Figure 16-4. Decomposing Loss Event Frequency enables control evaluations. 
(Adapted from Risk taxonomy (O-RT), version 3.0.1 (The Open Group, 2021))
Other times, the data you have is upstream. You might have detailed threat activity 
data, such as phishing attempts, but limited insight into success rates. In that case, 
use a control evaluation framework like FAIR-CAM (one of the frameworks listed in 
Table  16-1 ) to derive Susceptibility based on control strength. You can decompose 
Threat Event Frequency and vulnerability further while keeping the rest simple, shown 
in Figure  16-4 .
 Practical Tips for Using FAIR Depth Wisely
The examples above are just starting points. You can mix and match levels depending 
on your data and the decision your analysis is meant to support. The decision context 
should always be your north star for how deep to go.Chapter 16  extending to F air

315A Few Tips
• Let data guide depth.  If you already have solid evidence for Loss 
Event Frequency, there’s no reason to break it down further. If 
magnitude is the uncertainty, focus your decomposition there 
instead.
• Remember: every layer adds two parts . When you decompose 
Loss Event Frequency, you now have to estimate both Threat Event 
Frequency and Susceptibility. Go deeper only if you can meaningfully 
inform both sides.
• Avoid unnecessary layers.  Contact Frequency and Probability of 
Action are useful for teaching but rarely practical in live analyses. 
Most real-world models stop at LEF or TEF/Susceptibility.
• Keep it decision-driven.  Always ask, “Will this extra layer help 
us make a better decision?” If not, stop where the data and 
purpose align.
The point isn’t how many FAIR factors you use. The point is whether the model helps 
a real decision get made faster, with more clarity, and less guesswork. FAIR is a toolkit, 
not a test of purity. Use only as much as you need to get the job done.
 Mapping Data to the FAIR Ontology
For each dataset, ask: Does it tell me how often  something happens, how bad  it is when 
it does, or who else reacts ?Chapter 16  extending to F air

316FAIR Element Question It Answers Example Data Sources
Threat Event 
Frequency (TEF)how often do defined 
threat communities attempt something that could cause loss?SieM/idS/ipS logs of confirmed attack 
attempts, phishing/fraud attempts per year, 
external threat intel and industry reports ( dBir, 
eniSa, etc.) scoped to your scenario
Contact  Frequency (CF) how often do they have 
the opportunity to interact with the asset?Firewall/W aF/Vpn logs sho wing access to 
exposed services, scan/activity against public apps, identity/access data showing who can reach what (opportunity, not necessarily malicious)
Probability of  Action (PoA)
given contact, how often 
do they try something harmful?threat profiling, adversary behavior reports, 
red team exercises, and honeypot data showing the proportion of probes that escalate to attempts
Susceptibility (Vulnerability)
given an attempt, how 
likely is it to result in loss?pen test success rates,  exploit success vs. 
failure in incident/ ir data, control coverage and 
configuration metrics (interpreted as resistance strength vs. expected threat capability)
Loss Event  Frequency (LEF)
how often do we 
experience actual loss events in this scenario?Confirmed loss-causing incidents in ir/grC/
ticketing systems; may be derived from teF × 
Susceptibility, where internal history is thin
Primary Loss Magnitude (PLM)What are the direct costs per loss event?
ir labor hours × rates, forensics and legal 
invoices, downtime × business impact, replacement/rebuild costs from finance and ops
Secondary Loss Event Frequency (SLEF)
how often does a primary 
Loss trigger secondary fallout?historical rate of regulatory investigations, 
lawsuits, major customer notifications, and adverse media events, conditional on similar incidents
Secondary Loss Magnitude (SLM)
how big are the 
secondary costs when they occur?past fines and settlements, customer churn 
analysis, revenue or market-cap impact, and 
extended pr/brand remediation costsChapter 16  extending to F air

317 Mapping This Book to FAIR
Everything in this book can be applied within FAIR without modification. Each chapter 
connects naturally to a different part of the FAIR model or workflow.
• Chapter  4 and Chapter  6 fit directly into FAIR’s structure of 
frequency, magnitude, and loss communication.
• Chapter  7 borrows FAIR’s logic for defining assets, threats, and 
loss events.
• Chapter  8 is borrowed from FAIR and aligns with FAIR’s 
magnitude  side.
• Chapter  10 supports every level of the FAIR ontology by helping you 
evaluate and calibrate data quality.
• Chapters  11–13 are framework-agnostic but map cleanly to FAIR’s 
data inputs for frequency and magnitude.
• Chapter  14 complements FAIR’s reasoning process by showing 
how to combine multiple evidence sources into a single, defensible 
estimate.
Regardless of which version of the model you use, the workflow is the same: Collect 
data (Chapters 11–13), vet and normalize it (Chapter 10), then blend sources as shown in 
Chapter 14.
Every step supports FAIR analysis directly.
 Common Missteps and Overuse
 1. Confusing Taxonomy with Analysis
Some practitioners treat FAIR’s taxonomy as the analysis itself. They believe they must 
measure all 12 factors in the model to “do FAIR. ” You don’t. Use only the levels your data 
can support. Two factors: Loss Event Frequency and Loss Magnitude are enough.Chapter 16  extending to F air

318 2. FAIR As Religion
This happens in both directions. Some people who love FAIR think it’s the only 
correct way to analyze risk. Others reject it entirely because they find its practitioners 
overzealous. Both miss the point.
If you learn FAIR, you’ll benefit from the community, training, and career 
opportunities. It’s where the momentum is. But your long-term aspiration should be to 
become a modeler, not a “FAIR person. ” That means building, adapting, and sometimes 
developing your own models. FAIR is the starting line, not the finish.
 3. Using FAIR to Debate Definitions
Early in my career, I wasted time arguing that “ransomware isn’t a risk, it’s a method” or 
that “vendors aren’t risks, they’re entities. ” I stopped doing that years ago. I don’t debate 
definitions anymore. I focus on the decision to be made, the story behind it, and the data 
that informs it. Once the decision context is clear, the formal risk statement emerges 
naturally. I also have the bonus that people seem to like me more and groan less when 
I enter a room if I’m not constantly saying, “Well, actually… ” (again, the “less wrong” 
mindset).
  DON’T LET THE MODEL GET IN THE W AY OF THE DECISION
Fair is a tool for understanding uncertainty, not winning arguments about terminology.
if a conversation about risk turns into a debate over whether something is a “threat event” or a 
“loss event,” stop and ask: What decision are we trying to make?
the right level of modeling is the one that supports that decision. More precision doesn’t 
always mean more value.
Fair is successful when it drives clarity in action, not when it proves you’re right about a 
definition.Chapter 16  extending to F air

319 How to Get Started with FAIR
If you’ve read this far, you’ve already started. Every concept in this book, frequency, 
magnitude, ranges, calibration, and data sources, is usable in the FAIR model. The only 
thing left is to connect the labels.
Still, if you want to go further and use FAIR formally, here’s how to begin.
 1. Pick One Scenario
Choose something small and concrete: a ransomware incident, a data breach, or a 
system outage. You don’t need an enterprise scope to start.
 2. Translate Your Work into FAIR Language
Your “frequency” becomes Loss Event Frequency.
Your “magnitude” becomes Loss Magnitude.
That’s it. You’re already at the top level of FAIR.
 3. Reuse What You Built in Earlier Chapters
The data you collected, external, internal, and SME, fit directly into FAIR’s subfactors. 
You don’t need new sources; you just map them to where they belong.
  GENAI PROMPT BOX: MAP MY D ATA TO FAIR
given this list of risk data sources [ paste table ], classify each according to the F air  ontology: 
Loss event Frequency (L eF), t hreat e vent Frequency ( te F), Vulnerability, p rimary Loss 
Magnitude ( pLM), Secondary Loss event Frequency (SL eF), and Secondary Loss Magnitude 
(SLM). explain your reasoning in one sentence per item and output a clean, labeled table 
for excel.
highlight any missing F air  components and suggest additional data that could fill them.Chapter 16  extending to F air

320 4. Estimate Ranges and Simulate
Use the same calibrated ranges (P5, P50, P95) and Monte Carlo simulation from 
Chapters 9 through 14. Those are FAIR-standard techniques.
 5. Add Depth Only When Needed
If your data supports it, go one level deeper, such as Threat Event Frequency, Susceptibility, or Secondary Loss. If not, stay simple. You’re still “doing FAIR. ”
 6. Document and Iterate
Write down your assumptions, sources, and logic. That transparency is what makes FAIR auditable and repeatable.
By reading this book, you’ve already learned FAIR; you just learned it in plain 
English first.
 Beyond FAIR
FAIR gives you structure, but it is not the whole story. Most of what you have learned in this book, structured data gathering, vetting, blending, and validation, sits outside 
FAIR. Those ideas did not exist when the framework was created, but they make it 
stronger. They turn a theoretical model into something living, testable, and scalable.
We now work in a world with more data, better telemetry, and AI tools that can 
automate the work we used to do manually. The next generation of FAIR practitioners 
will not start from spreadsheets and calibration training. They will start with AI that can 
surface, clean, and test data faster than any of us ever could. That does not make our 
judgment less important. It makes it more important because someone still has to know 
when the answers make sense.
That is what this book is about. It is a bridge between generations of practice, from 
the FAIR we learned by hand to the FAIR that will be powered by machines. The same reasoning and discipline still apply, but the tools have changed. As AI takes on more of 
the heavy lifting, our role shifts from gathering data to guiding, training, and double- 
checking the systems that do it for us.Chapter 16  extending to F air

321If this book does its job, it will help the next wave of risk professionals use FAIR not 
just as a model but as a foundation. FAIR gave us language and structure. The work 
ahead is to extend it with better data, better validation, and smarter tools, so the next 
generation can reason about risk with the clarity, speed, and confidence the field has 
always needed.
 Chapter Summary
The Big Idea: FAIR gives structure, clarity, and definitions to the messy parts of risk. 
It is the first model to break cyber risk into measurable components that anyone can 
analyze in the same way. FAIR is Jack Jones’s major contribution: a clear, defensible 
way to reason about uncertainty that removes guesswork and vague language from risk 
management.
Key Takeaways
• FAIR defines risk precisely. Risk is the probable frequency and 
probable magnitude of future loss. This clear definition anchors 
everything else and eliminates the confusion found in many other 
standards.
• FAIR decomposes risk into measurable parts. Loss event frequency, loss magnitude, susceptibility, threat capability, resistance 
strength, and the six forms of loss give you a structured map of how 
risk actually works.
• FAIR replaces fuzzy terms with real concepts. Instead of “likelihood, ” “impact, ” or color ratings, FAIR uses probability, ranges, 
and specific loss categories. These concepts help you measure 
uncertainty instead of labeling it.
• FAIR links analysis to decision-making. FAIR shows leaders where losses come from and what levers they can pull to reduce them.
• FAIR creates a shared language across teams. The model gives analysts, engineers, auditors, and executives the same vocabulary. 
This reduces misunderstandings and leads to clearer, more 
consistent decisions.Chapter 16  extending to F air

322Bottom Line:  FAIR is the structure behind modern CRQ. It is the model that turns 
risk into something measurable, explainable, and repeatable. By mapping your CRQ 
work into FAIR, you anchor your analysis to Jack Jones’s original insight: risk can be 
understood and managed only when its parts are clearly defined. FAIR brings that clarity 
to everything you do next.
 What’s Coming Next
In Chapter 17, we will walk through a complete examples of a risk assessment using 
real scenarios and real data. You will see how to apply the model end-to-end and how it 
changes the way organizations make decisions.
References
Committee of Sponsoring Organizations of the Treadway Commission. (2020). 
Compliance risk management: Applying the COSO ERM framework. COSO. https://
www.coso.org
European Union. (2016). Regulation (EU) 2016/679 of the European Parliament and 
of the Council of 27 April 2016 (General Data Protection Regulation). Official Journal of 
the European Union, L 119.  https://eur-lex.europa.eu/eli/reg/2016/679/oj
FAIR Institute. (2025). Factor analysis of information risk (FAIR) standard (Version 
3.0). FAIR Institute. https://www.fairinstitute.org
FAIR Institute. (n.d.-a). FAIR-CAM™: Controls Analytics Model.  Retrieved November 
11, 2025, from https://www.fairinstitute.org/fair-controls-analytics-model
FAIR Institute. (n.d.-b). FAIR-MAM™: Materiality Assessment Model.  Retrieved 
November 11, 2025, from https://www.fairinstitute.org/fair-materiality-
assessment-model
FAIR Institute. (n.d.-c). FAIR-TAM™: Third-Party Assessment Model.  Retrieved 
November 11, 2025, from https://www.fairinstitute.org/fair-third-party-
assessment-model
FAIR Institute. (n.d.-d). FAIR-CRMP™: Cyber Risk Management Program.  Retrieved 
November 11, 2025, from https://www.fairinstitute.org/blog/announcing-fair-
cyber-risk-management-program-fair-crmp-standard-v1.0Chapter 16  extending to F air

323FAIR Institute. (n.d.-e). FAIR-AIR™: Artificial Intelligence Risk Playbook.  Retrieved 
November 11, 2025, from https://www.fairinstitute.org/blog/fair-artificial-
intelligence-ai-cyber-risk-playbook
FAIR Institute. (n.d.-f). About the FAIR Institute.  Retrieved November 11, 2025, from 
https://www.fairinstitute.org/about
Freund, J., & Jones, J. (2014). Measuring and managing information risk: A FAIR 
approach.  Butterworth-Heinemann.
International Organization for Standardization. (2018). ISO 31000:2018 Risk 
management—Guidelines.  ISO. https://www.iso.org/standard/65694.html
National Institute of Standards and Technology. (2012). Guide for conducting risk 
assessments  (NIST Special Publication 800-30 Rev. 1). U.S. Department of Commerce. 
https://doi.org/10.6028/NIST.SP.800-30r1
Payment Card Industry Security Standards Council. (2022). Payment Card Industry 
data security standard: Requirements and testing procedures  (Version 4.0). PCI 
SSC. https://www.pcisecuritystandards.org/document_library
The Open Group. (2025a). Risk Analysis (O-RA), Version 2.1  (The Open Group 
Standard, Document No. C250). The Open Group. https://publications.opengroup.
org/c250
The Open Group. (2025b). Risk Taxonomy (O-RT), Version 3.1  (The Open Group 
Standard, Document No. C251). The Open Group.  https://publications.opengroup.
org/c251Chapter 16  extending to F air

