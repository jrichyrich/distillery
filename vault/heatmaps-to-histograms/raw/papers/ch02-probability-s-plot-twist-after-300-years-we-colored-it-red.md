---
title: "Chapter 2: Probability's Plot Twist: After 300 Years, We Colored It Red"
source: "From Heatmaps to Histograms - Tony Martin-Vegue"
type: pdf
chapter: 2
pages: 45-60
ingested: 2026-04-04
---

# Chapter 2: Probability's Plot Twist: After 300 Years, We Colored It Red

15 What’s Coming Next
You’ve seen why the current system is broken and what becomes possible with 
quantitative approaches. Now you’re ready to understand how we got here and the path 
forward:
Chapter  2 traces the 300-year evolution from mathematical breakthroughs to 
management matrices,  why we have two completely different disciplines operating 
under the same name, and how the pioneers of cyber risk quantification are leading us 
back to scientific foundations
The rebellion starts with understanding that there’s a better way and recognizing that 
this “better way” isn’t new at all. It’s a return to the scientific roots of risk analysis that 
other fields never abandoned. Next, let’s explore how probability theory changed the 
world, where cybersecurity went astray, and who’s showing us the way back.
References
Anderson, R. (2001). Why information security is hard: An economic perspective . In 
Proceedings of the 17th Annual Computer Security Applications Conference (ACSAC)  
(pp. 358–365). https://www.acsac.org/2001/papers/110.pdf
Aven, T., Renn, O., & Rosa, E. A. (2011). On the ontological status of the concept of 
risk. Safety Science, 49 (8), 1074–1079. https://doi.org/10.1016/j.ssci.2011.04.015
Hubbard, D. W. (2014). How to measure anything: Finding the value of intangibles in 
business  (3rd ed.). John Wiley & Sons.Chapter 1  WelCome to the rebellion

17
© Tony Martin-Vegue 2026 
T. Martin-Vegue, From Heatmaps to Histograms, https://doi.org/10.1007/979-8-8688-2300-8_2CHAPTER 2
Probability’s Plot Twist: 
After 300 Years, We Colored It Red
We have to go back!
—Jack, Lost  (TV series)
Before we dive deeper, let’s address something important: we’ve mentioned qualitative 
and quantitative risk approaches, but haven’t defined them yet. Since these concepts are 
central to everything that follows, let’s establish what each one means.
 Qualitative vs. Quantitative: The Two 
Methods Explained
Recall from Chapter 1 that risk is neutral and uncertainty is normal. These aren’t 
just philosophical concepts; they fundamentally shape how we should approach 
risk analysis. Let’s examine the two approaches used in modern cybersecurity risk 
management and see how each one handles these realities. First, we’ll look at qualitative 
methods.

18 Understanding Qualitative Risk Analysis
Qualitative risk analysis uses ordinal scales  and descriptive categories  to prioritize risk. 
Ordinal scales are ranked categories, but the differences between the categories are not 
known or equal, because ordinal scales are not measurements.
 ORDINAL SCALES: MILD, MEDIUM, HOT
A great analogy to help you wrap your head around ordinal scales is hot sauce labeling: mild, 
medium, hot. The degree of difference between categories isn’t equal, and the labels are 
subjective. We’ve all bought a “medium” hot sauce from a new brand, only to find it’s either 
quite mild or blow-your-mouth-out hot.
If you want to know the real difference between categories, you have to measure  it, which is 
exactly what Scoville units  are. High-Performance Liquid Chromatography (HPLC) measures 
capsaicinoid concentration in peppers. A jalapeño measures 2,500–8,000 Scoville units, while 
a habanero ranges from 100,000 to 350,000 units. Now you know the habanero is roughly 
20–40 times hotter, not just “one category up.”
Risk matrices suffer from the same problem. When the network team rates a potential outage 
as “High” and the application team rates a different outage, also as “High,” it’s unclear which 
is worse or by how much. Just like hot sauce needs Scoville units, cyber risk needs actual 
measurements: frequencies and dollar amounts to enable real comparisons and decisions 
across teams.
Most frameworks assess both likelihood and impact, but other methods exist where 
arbitrary values are assigned to the categories. The most common method of combining 
the values is to create a risk matrix, shown in Figure  2-1, with the value plotted on the x 
and y axes.CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

19
Figure 2-1. The risk matrix, a model in qualitative risk analysis
Instead of specific numbers, a typical risk matrix provides labels:
• Likelihood : High, Medium, Low (though specific terms vary widely)
• Impact : High, Medium, Low (again, terminology differs by 
framework used and organization)
• Overall Risk : Low, Medium, High (often color-coded as green, 
yellow, red)
These are typically arranged in matrices ranging from 3×3 to 5×5 grids. Some use 
different terminology, different scales, or even different grid sizes, but the fundamental 
approach remains the same: reducing complex uncertainties to simple categorical 
judgments.
Now let’s examine the other approach.
 Understanding Quantitative Risk Analysis
Quantitative risk analysis uses numerical estimates and probabilistic models to forecast 
the frequency and financial impact of future adverse events, using measurements rather 
than categories to articulate uncertainty.
Rather than categorical labels, quantitative risk analysis uses numerical estimates 
to model both likelihood and impact. Instead of “high risk of data breach, ” we might 
estimate a data breach to occur once every 10–20 years and could cost between $500K 
and $2M, with a most likely impact around $800K.CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

20This approach requires more effort and skill but delivers data and insight 
commensurate with that investment—exactly what’s needed for complex business 
decisions. It allows you to model scenarios, calculate returns on investment, and speak 
in the same language as finance and operations teams. Because uncertainty makes 
simple calculations inadequate, quantitative analysis often relies on Monte Carlo 
simulation, a method that uses randomness within our ranges to simulate thousands of 
likely outcomes.
Figure 2-2. A loss exceedance curve (LEC), one of several visualizations 
used in CRQ
One powerful way to visualize these results is the loss exceedance curve ( LEC) , 
shown in Figure  2-2. Unlike a typical graphic showing a single color, adjective, or rating, 
the LEC illustrates the probability that losses will exceed different dollar amounts, 
enabling executives to understand the actual exposure across a range of outcomes, 
which reflects the reality of security incidents. In this example, our organization has a 
30% chance of losses exceeding $40 million in a phishing attack.
The LEC is one of several methods for visualizing quantitative risk results. We’ll dive 
into more visualizations in Chapter 6.
If this seems confusing, don’t worry. Each of these concepts will be expanded on 
throughout the book, building block style.CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

21 BEYOND QUANTITATIVE ANALYSIS: OTHER APPROACHES
This book advocates for quantitative risk methods, but they’re not the only effective decision- 
making tools available. other fields offer excellent alternatives: decision trees, cost–benefit 
analysis, scenario planning, and more. The real problem isn’t that we need CRQ specifically; 
it’s that we’re using a fundamentally flawed one: the risk matrix. Some examples are
• Decision science:  decision trees, utility theory, multi-criteria analysis, 
probability theory
• Safety engineering:  fault T ree Analysis ( f TA), e vent Tree Analysis ( e TA)
• Reliability engineering:  deterministic modeling, stress testing
• Operations research:  optimization models, queuing theory, mathematical 
approaches
CRQ primarily focuses on probabilistic methods because they suit cybersecurity’s uncertainty- 
heavy environment and align with how executives think about business risk. but if your 
organization has established methods from other fields, those can be equally valid.
Now that we’ve covered the broader landscape of quantitative approaches, let’s 
address a common misconception that trips up many organizations.
 DON’T BE FOOLED BY SEMI-QUANTITATIVE
Many frameworks describe a third option between qualitative and quantitative: semi-quantitative. It’s touted as a bridge to quantitative because it replaces colors or adjectives with numbers.
don’t be fooled. even if the rankings are 1–5, they’re not quantitative; they’re still ordinal 
and qualitative. In this instance, “1” is the same as a color or adjective. It’s like replacing 
“Mild, Medium, Hot” ratings on hot sauce with “1, 2, 3.” you still can’t make meaningful 
comparisons. The numbers look like numbers, but they more closely resemble adjectives than something on which math can be performed.
Risk expert david Vose noted that semi-quantitative methods are “absurdities” and states that 
these methods “end up with an evaluation system that is more complex, vague, and illogical” (Vose, 2019).
Semi-quantitative is a misnomer. It’s still qualitative risk because it uses ordinal scales.CHAPT eR 2  PRobAbILITy’S PLoT TWIST :  Af TeR 300 yeARS, We CoLoRed IT Red

22 How Did We Get Here?
Understanding the past helps us see how we got here and the way forward. Modern 
CRQ isn’t some newfangled trend or fad (as I’ve heard many times on social media and 
at risk conferences) but rather rooted in science with a very long pedigree. Our story 
doesn’t begin with NIST CSF , FAIR, or even Governance, Risk, and Compliance (GRC). 
Risk is interdisciplinary and has been studied by humans across philosophical, religious, 
ethical, scientific, legal, cultural, psychological, and business domains for millennia, 
making CRQ part of this long intellectual tradition rather than a passing trend.
Human civilization has always had a basic concept of risk, even if not formally 
defined. We know there is uncertainty in the future, and depending on our actions, the 
future holds both great rewards and adverse effects. We’ve learned to mitigate some 
risks based on observations that influence future behavior, such as prehistoric humans 
learning through trial and error how to hunt safely, reducing some of the risk involved in 
hunting woolly mammoths, an inherently risky enterprise.
 From Ancient Ships to Modern Algorithms: Risk’s 
Scientific Journey
One of the first documented approaches to structured risk management was bottomry , 
an ancient maritime financial instrument dating back to 4000–3000 BCE (Encyclopedia 
Britannica, Inc., n.d.). The concept was elegantly simple: merchants facing the 
risks of shipping goods to distant lands could get loans from financiers. If the ship 
returned safely, the loan was repaid with interest. If lost, no repayment was required 
(Encyclopedia Britannica, Inc., n.d.). This fascinating financial instrument demonstrates 
early understanding of risk transfer, risk pricing, and quantified decision-making under 
uncertainty.
But our story takes an unexpected detour through gambling halls. Until the 1600s, 
humans lacked a concept of mathematical probability, attributing uncertain outcomes 
to divine will or luck (Bernstein, 1996 ). That changed when French nobleman Antoine 
Gombaud, also known as Chevalier de Méré, approached mathematician Blaise 
Pascal with a gambling problem. Certain dice games weren’t behaving as his intuition 
suggested, causing him to lose large sums of money (Bernstein, 1996 ).CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

23Pascal’s subsequent correspondence with another mathematician, Pierre de 
Fermat, to solve this “problem of points” became the foundation of probability theory 
(Devlin, 2010 ). For the first time, humans had mathematical tools to understand and 
quantify uncertainty rather than attribute events to mysterious forces. This represented a 
fundamental shift from hoping for the best to calculating the odds (Bernstein, 1996 ).
With probability theory established, entirely new industries became possible. 
Lloyd’s of London systematized maritime insurance in the late 1600s. Edmund Halley 
created the first life tables in 1693 for calculating annuities. Actuarial science, modern 
risk management, and public health research, all using quantitative methods, were 
born (Bernstein, 1996 ). These concepts rapidly spread to agriculture, finance, and 
military planning, marking the intellectual shift toward the Age of Enlightenment. The 
mathematical foundations continued to develop through the 20th century, with Savage 
establishing the foundations of decision theory in 1954 (Savage, 1972 ) and Ronald 
Howard developing practical decision analysis methods in 1966 (Howard, 1966 ).
The ability to quantify uncertainty and make mathematical decisions about risk 
became the foundation of what we now call “quantitative risk analysis. ” For centuries, 
this was simply risk analysis . The quantitative approach dominated until management 
consulting in the mid-20th century introduced alternative methods. The techniques we 
use in modern cyber risk quantification have a direct lineage from these innovations, 
proving that CRQ isn’t some passing trend but part of humanity’s oldest intellectual 
traditions.
 The Great Divergence: We Have Two Separate 
Disciplines Operating Under the Same Name
A pivotal shift occurred in the early 20th century that fundamentally altered how 
organizations approached uncertainty. As the Industrial Revolution enabled 
organizations to grow larger and more complex, a different way of managing uncertainty 
emerged. This new approach was not rooted in mathematical probabilities but rather in 
industrial management that emphasized efficiency and optimization.
Frederick Winslow Taylor developed “scientific management” in the early 1900s, 
commonly referred to as Taylorism, a highly influential philosophy that sought 
to eliminate uncertainty through strict control of processes (Taylor, 1911 ). Where 
probability theory embraced uncertainty as an inherent part of reality, Taylorism viewed CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

24uncertainty as a problem to be solved through systematic control. He is considered one 
of the first management consultants, and through that pedigree, management consulting 
firms took hold throughout the 20th century, emphasizing quick decision-making, 
speed, efficiency, and actionable results rather than the work of uncertainty analysis.
Figure 2-3. High-level timeline of the divergence of risk analysis methods
This philosophical divide came to define two fundamentally different approaches to 
risk. In January 1978, the US Department of Defense issued a risk classification system 
for occupational safety and health risks, marking one of the first uses of qualitative risk 
labels (U.S. Department of Defense, 1978 ). In August 1978, David Hussey coined the 
phrase “risk matrix” to analyze portfolio risk on a 3×3 grid (Hussey, 1978 ), as illustrated 
in Figure  2-3. Management consulting firms quickly caught on, and by the 1990s, nearly 
every firm had its version of the colored grid (Hubbard, 2020 ). The product they sold 
replaced probabilistic scientific thinking with color-coded grids that prioritized quick 
decision–making and control, giving the illusion of analytical rigor while avoiding the 
hard work of probabilistic analysis.
The consequences were profound. For centuries, there was only one type of “risk 
analysis”: the probabilistic kind. The influence of management consultants created a 
great divergence. There are now two distinct disciplines operating under the same name, 
with fundamentally different intellectual lineages.CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

25Table 2-1.  Quantitative vs. qualitative methodologies
Dimension Quantitative Risk Management Qualitative Risk Management
Intellectual 
AncestryProbability theory, actuarial science, decision theoryTaylorism, management consulting, efficiency optimization
Core Question What are the probable outcomes and 
their magnitudes?Are we following the right processes and controls?
Philosophy
embrace uncertainty, quantify ignorance Control uncertainty through systematic 
processes
Success 
CriteriaAccurate forecasts, calibrated confidence intervalsConsistent procedures, audit compliance
Tools
Monte Carlo simulation, bayesian 
inferenceRisk matrices, compliance checklists
Here’s the test: if the spirit of the implementation is designed to reduce 
uncertainty for future decisions that help the organization execute its core objectives, the philosophical pedigree can be traced back to those 17th-century French 
mathematicians. If the implementation is rooted in quick decisions and explicitly 
ignoring uncertainty because, philosophically, uncertainty is something to be managed out of existence, the philosophical pedigree resembles Industrial Age thinking.
This philosophical divide has real consequences. Organizations spend time, 
money, and resources on risk management programs that feel sophisticated but are 
disconnected from real decision-making because they fundamentally misunderstand 
the nature of uncertainty. They create detailed risk registers that document everything 
except what actually matters: the probability and magnitude of future losses.
The good news is that we don’t need to reinvent the wheel. Meteorologists, actuaries, 
financial risk managers, and epidemiologists never abandoned probabilistic thinking. 
They’ve continued to refine these methods while corporate risk management wandered 
into the land of color-coded matrices.
The risk matrix is a natural product of Industrial Era management thinking, reflecting 
the core tenets of Taylorism: control, simplification, and the belief that complex systems can be managed away. But most modern risks, especially cyber risk, emerge from 
complex environments where feedback loops, interdependencies, and nonlinearity 
dominate. Using a risk matrix to manage cyber risk is like using a speedometer to CHAPTeR 2  PRobAbILITy’S PLoT TWIST :  Af TeR 300 yeARS, We CoLoRed IT Red

26measure weight. It’s the wrong tool for the job. It’s the wrong tool for every job. In the 
next chapters, we’ll see how those probabilistic roots evolve into modern quantitative 
techniques—Monte Carlo modeling, confidence intervals, and calibrated estimation—
that return us to risk’s scientific core.
Cyber risk quantification represents a clear departure from this flawed tradition. 
FAIR formalized this departure, but CRQ now encompasses a broader ecosystem of 
methods. CRQ builds probabilistic models that make uncertainty explicit, embracing 
ranges, simulations, and distributions to reflect real-world complexity. Where the risk matrix assigns adjectives or color coding, CRQ offers meaningful estimates. It shifts the conversation from “Which box does it fit in?” to “What could happen, and how bad could it be?” CRQ is not about eliminating uncertainty; it’s about embracing it.
While CRQ might seem mainstream now, it challenged the status quo in 
cybersecurity when it was first introduced. The quantitative approach didn’t emerge 
overnight. It was built by innovators who recognized that the probabilistic tradition 
could be adapted to our unique challenges.
 THE ACADEMIC CASE AGAINST RISK MATRICES
This chapter and the preceding chapter focus on operational problems with qualitative methodologies, risk matrices, and “the way we’ve always done it” because that is going to 
be your best way to change things in your career, in your team, at your organization, and 
in our field. Making the argument to fix misaligned incentives is powerful and tangible and 
can translate directly to better risk management, which in turn means better organizational 
functioning.
However, there’s a substantial body of peer-reviewed research documenting the fundamental 
flaws of qualitative methods and the associated risk matrix, which is beyond the scope of this 
book. If you’re interested in better security decision-making, you should at least be aware of this research.
There are many sources, but the best and most comprehensive compilation is in The Failure 
of Risk Management: Why It’s Broken and How to Fix It
 by douglas Hubbard. In that book, 
Hubbard systematically documents how qualitative risk methods violate basic principles of 
measurement theory, create mathematical inconsistencies that can make decisions worse 
than random choices, and fail to provide the decision support that organizations need.CHAPTeR 2  PRobAbILITy’S PLoT TWIST :  Af TeR 300 yeARS, We CoLoRed IT Red

27 The Legends Mixtape: Greatest Hits of Cyber 
Risk Quantification
Modern technology risk management emerged alongside information security in the 
1970s. The US Department of Commerce’s FIPS-65 was the first publication describing 
risk management in computer security, advocating quantitative risk using the basic 
equation (risk = probability × impact) but providing no guidance on measuring complex 
security incidents (National Bureau of Standards, 1979 ). Despite this early quantitative 
advocacy, risk matrices quickly became the de facto standard, and quantitative methods 
remained confined to academic circles for decades.
This qualitative status quo persisted until a measurement expert from outside 
cybersecurity changed everything. In 2007, Douglas Hubbard published How to Measure 
Anything: Finding the Value of Intangibles in Business  (Hubbard, 2007 ), synthesizing 
concepts from statistics, decision science, and metrology into one accessible book. 
His core insight was simple: if something matters to a decision, it’s measurable. Even 
intangible things, such as reputation or security effectiveness, can be measured. The 
breakthrough was accessibility. Instead of requiring advanced mathematics, Hubbard 
showed how basic statistical concepts and simple tools like Excel could produce 
sophisticated analyses. For cybersecurity professionals stuck with qualitative heatmaps, 
this was transformative. Real change accelerated when How to Measure Anything in 
Cybersecurity Risk  came out in 2016, co-authored with CISO Richard Seiersen (Hubbard 
& Seiersen, 2016 ), bringing quantitative thinking directly into mainstream cybersecurity. 
This represented a shift from niche methodology to mainstream practice.
While Hubbard provided the measurement foundation, cybersecurity needed 
someone who could translate these concepts into a framework specific to our field. 
Jack Jones, a CISO frustrated by the state of risk management practices, created FAIR 
(Factor Analysis of Information Risk) in 2005. Organizations were stuck with either 
flawed risk matrices or oversimplified risk formulas, lacking guidance on how to 
measure components effectively. FAIR provided what had been missing: a structured 
methodology to break down risk into measurable parts using uncertainty ranges 
and data from many sources while speaking business language that executives could 
understand. FAIR has since become an international framework (FAIR Institute, n.d.), 
with the FAIR Institute building a community of thousands of practitioners (FAIR 
Institute, 2021 ).CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

28As cybersecurity matured, practitioners naturally gravitated toward proven 
quantitative techniques already being used across business and science. Monte Carlo 
simulation, expert elicitation, and probabilistic modeling weren’t new inventions but 
established tools that cybersecurity professionals finally had frameworks to apply 
systematically. What started with frustrated analysts grasping for better ways to measure 
risk has become a genuine movement with conferences, communities like the Society 
of Information Risk Analysts (SIRA) (Society of Information Risk Analysts, n.d.) and 
the FAIR Institute (FAIR Institute, 2021), university courses (FAIR Institute, n.d.), and formalized training programs (FAIR Institute, n.d.). Cybersecurity has become the most prominent proving ground for quantitative risk methods (FAIR Institute, 2023), driven by high-stakes decisions and regulatory pressure. This isn’t academic theory anymore 
but a practical discipline with tools, techniques, and practitioners proving that better risk 
analysis works.
 IF YOU HAVE TO USE QUALITATIVE METHODS…
I get it. I’ve been there.
I’ve mapped risks on heatmaps because I had to—because that’s what the audit required, 
what my boss expected, what the framework demanded. I’ve sat in meetings presenting color- 
coded matrices because if I didn’t, it would have cost me my job. The truth is qualitative risk is 
the de facto standard and will pass an audit, no question.
There’s enormous pressure to keep things the way they are. Perhaps you work in an 
environment with little appetite for change. your role may be explicitly about compliance,  not 
effectiveness. you may be early in your career and can’t afford t o rock the boat. I’ve been that 
analyst too.
but here’s what I learned: you can do what you have to do and still think better about risk.
even if you’re stuck creating heatmaps, understanding the flaws described in this chapter 
makes you a sharper analyst. you’ll ask better questions during risk identifica tion. you’ll be 
more careful about how you communicate uncertainty. you’ll kno w when your matrix results 
don’t pass the smell test.When someone eventually asks why all the “High” risks feel the same, or why the numbers 
don’t support budget decisions, or why last year’s assessment didn’t predict this year’s 
problems, you’ll know exactly what went wrong and propose something better.CHAPTeR 2  PRobAbILITy’S PLoT TWIST :  Af TeR 300 yeARS, We CoLoRed IT Red

29Most techniques in this book work whether you’re building a complete quantitative program 
or just trying to think more clearly within existing constraints. better methods will make your 
work stronger, even if no one else notices yet.
The path from colored 3×3 boxes to measuring risk isn’t just a technical upgrade. 
It’s a return to the scientific roots of risk analysis. The tools exist, the methods work, and 
practitioners around the world are proving it’s possible. Whether you’re ready to make 
the full transition or just thinking more clearly within existing constraints, you’re part of building something better.
 Chapter Summary
The Big Idea: What we call “risk management” is two completely different disciplines with opposing philosophies: probabilistic thinking rooted in 300 years of science 
and management consulting approaches that treat uncertainty as a problem to be 
controlled away.
Key Takeaways
• We have two separate disciplines operating under the same name . Quantitative risk management traces back to Pascal and 
Fermat’s probability theory, while qualitative methods emerged from Industrial Age management thinking that views uncertainty as 
controllable through processes.
• The “Great Divergence” explains why risk matrices feel wrong. They’re not broken versions of quantitative methods; they’re 
completely different tools designed for optimization and control, not 
uncertainty analysis.
• Meteorologists, actuaries, financial risk managers, 
epidemiologists, and many other fields never abandoned 
probabilistic thinking; business management, and by extension, 
cybersecurity, just wandered off into color-coded matrices.CHAPTeR 2  PRobAbILITy’S PLoT TWIST :  Af TeR 300 yeARS, We CoLoRed IT Red

30• The legends who built modern CRQ gave us practical foundations . 
Hubbard made measurement accessible, Jones created FAIR as 
a structured framework, and a growing community proves these 
methods work in practice.
• This isn’t about learning new techniques ; it’s about returning to the 
scientific roots of risk analysis that other fields never abandoned.
Bottom Line:  The path from colored boxes to measuring risk isn’t some new idea; 
it’s coming home to where the understanding of risk started 300 years ago.
 What’s Coming Next
Now that you understand the scientific foundations that separate real risk analysis from 
colored matrices, Chapter 3 explores how AI can accelerate your learning path while 
avoiding the pitfalls that could undermine your credibility.
Chapter  3 will show you how to use AI as a supervised research assistant , 
transforming your role from manual data collection to high-value research validation 
and strategic thinking, while learning AI-assisted analysis techniques to compress weeks 
of quantitative risk work into hours without sacrificing accuracy.
References
Bernstein, P . L. (1996). Against the gods: The remarkable story of risk . John Wiley & Sons.
Devlin, K. (2010). The unfinished game: Pascal, Fermat, and the seventeenth-century 
letter that made the world modern . Basic Books.
Encyclopedia Britannica, Inc., (n.d.). Historical development of insurance . In 
Britannica.com . Retrieved July 26, 2025, from https://www.britannica.com/money/
insurance/Historical-development-of-insurance
FAIR Institute. (2021, February 25). FAIR Institute reaches 10,000 members in less 
than 5 years. FAIR Institute .  https://www.fairinstitute.org/blog/fair-institute-
reaches-10000-members-in-less-than-5-years
FAIR Institute. (2023). 2023 FAIR training schedule – Learn cyber risk quantification 
analysis. FAIR Institute . https://www.fairinstitute.org/blog/2023-fair-
training-scheduleCHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

31FAIR Institute. (n.d.-a). FAIR training and certification. FAIR Institute . https://www.
fairinstitute.org/fair-training-and-certification
FAIR Institute. (n.d.-b). What is FAIR. FAIR Institute . https://www.fairinstitute.
org/what-is-fair
Howard, R. A. (1966). Information value theory. IEEE Transactions on Systems 
Science and Cybernetics , SSC-2 , 22–26.
Hubbard, D. W. (2007). How to measure anything: Finding the value of intangibles in 
business . John Wiley & Sons.
Hubbard, D. W. (2020). The failure of risk management: Why it’s broken and how to 
fix it  (2nd ed.). John Wiley & Sons.
Hubbard, D. W., & Seiersen, R. (2016). How to measure anything in cybersecurity risk . 
John Wiley & Sons.
Hussey, D. E. (1978,. August). Portfolio analysis: Practical experience with 
the directional policy matrix. Long Range Planning , 11(4), 2–8. https://doi.
org/10.1016/0024-6301(78)90001-8
National Bureau of Standards. (1979). Guideline for automatic data processing risk 
analysis  (FIPS PUB 65). U.S. Department of Commerce. https://nvlpubs.nist.gov/
nistpubs/Legacy/FIPS/fipspub65.pdf
Savage, L. J. (1972). The foundations of statistics  (2nd ed.). Dover. (Original work 
published 1954).
Society of Information Risk Analysts. (n.d.). About SIRA. https://societyinforisk.
org/aboutsira
Taylor, F . W. 1911. The principles of scientific management . Harper & Brothers.
U.S. Department of Defense. (1978,. January 30). DoD Instruction 6055.1: Department 
of Defense occupational safety and health program .
Vose, D. (2019,. July 1). Semi-quantitative risk analysis and other absurdities. 
LinkedIn .  https://www.linkedin.com/pulse/semi-quantitative-risk-analysis-
other-absurdities-david-vose/CHAPTeR 2  PRobAbILITy’S PLoT TWIST : AfTeR 300 yeARS, We CoLoRed IT Red

