---
title: "Making Forecasting Useful (long version)"
collection: talks
type: "Conference workshop talk"
permalink: /talks/2026-07-11-icml-forecasting-long
published: false  # long-form write-up; not shown on the site. See README-icml-2026.md.
venue: "ICML 2026 — Workshop: Forecasting as a New Frontier of Intelligence"
date: 2026-07-11
location: "Seoul, South Korea"
---

*This is a write-up of a talk I gave at the ICML 2026 workshop "Forecasting as a New
Frontier of Intelligence." I run a small internal prediction market at Google — much
smaller than the real-money markets others on the stage described, and we don't publish
much about it — so what follows isn't internal research, but perspectives informed by it.*

Two big trends make this whole space interesting. AI systems are getting better at
forecasting, and prediction markets are growing enormously, achieving more public
acceptance and more public debate. Both trends seem likely to continue — though of course
that itself is a forecasting problem. So I want to structure things around two questions.
As AI systems get better at forecasting: first, the output — what should we use it for?
And second, the constraints — what inputs do we need to make it better, either generally
or in particular domains that could be very high-value for society but are constrained
today?

## A simple framework

![The forecasting stack: question, prediction, decision](/images/icml-2026/slide-05.png)

Here's a simple framework — not the full forecasting cycle; you'll notice I left white
space to add elements later. You have a question about the future, a system that gives you
a prediction, and you do something with it. I said "decision," though it could just as
well be entertainment.

![Forecasting to inform a discrete investment decision](/images/icml-2026/slide-06.png)

Take a standard use case. You have a system that makes good forecasts and some investment
problem: where should I allocate resources? Maybe you're the Norwegian government and you
want to know about climate change in the seas. Your model says it's somewhat likely — 26%,
say — and your action is to invest in resilience for fish farming. From a product
perspective this is straightforward: if a set of people actually cares about this outcome,
it's entirely plausible they'd ask the system for advice. It might not come out as a
probability — as Philip Tetlock noted that morning, people have real trouble thinking in
terms of probability; is 26 a lot or a little? — but a system good at calibrated
forecasting, with other incentives and training to be helpful, might be good at advice.

You can push the same idea toward ROI. Ask your forecasting system for the return on
different projects. Say you're a pharma company looking at a particular gene-therapy cancer
treatment. The base rate is low — in some domains only 3% of candidates make it through
certain stages of clinical trials — so if your trusted model says 7%, that's actually a
lot, and maybe it's worth investing. Or, if you have a scarce team of scientists you
trust, you use the forecast as another layer of checking.

![Financial trading](/images/icml-2026/slide-08.png)

Financial trading is the clearest case. If you can build something better than everyone
else at forecasting, one thing you can turn it to is forecasting asset prices. Will oil be
above $100 a barrel a year from now? If your model says it's very likely, you go long the
futures. This scales — but it's a hothouse plant. It requires social infrastructure. Two
thousand years ago in Rome, being great at this wouldn't have been a useful skill. It
relies on financial plumbing and an incentive system we happen to have built, into which a
lot of machine learning and quantitative work has fed. It's worth dwelling on, because it's
an area where we expect a lot more development — and it's worth asking why we should expect
it to benefit not just the people earning profits but society more generally.

## Where forecasts come from

![Centralized versus crowdsourced sourcing](/images/icml-2026/slide-09.png)

Say you want a forecast about oil prices. You could go centralized — rent a Blackwell chip
from a hyperscaler, spend your electricity and water to produce the forecast, or hire
humans. Or you could use a market mechanism: a stock market, a prediction market, or some
other crowdsourced system like a forecasting contest with incentives.

If the information is valuable because you already have a financial market to trade in, you
care about *relative* information — knowledge the rest of the world doesn't have. A
prediction market about geopolitics is available to everyone; you might analyze it more
cleverly, which is fair game and is much of what quantitative trading is. But if you were
trying to understand geopolitical events in order to trade, you'd keep that in house.

There are more fundamental problems. Suppose you wanted to know about COVID, or the North
Atlantic sea and climate change. It isn't obvious why you should be able to ask financial
markets — why would anyone supply those forecasts? Economic theory struggles here. The
Grossman-Stiglitz paradox says that if a version of the efficient market hypothesis holds
and markets already incorporate all public information, there's no alpha from more
research — so who provides the good if there's nothing to earn? That's a rebuttal of the
strongest form of the hypothesis. I prefer a weaker one: an equilibrium where if you pay
$500,000 for a very smart PhD student and the resources they need, you should expect to
make a little more than $500,000. If not, you'd cut back; and in the other direction you'd
keep hiring until the profits were whittled away. It's noisy, but that's the condition I
keep in mind.

Then there's the no-trade theorem — a very old Milgrom and Stokey paper. Suppose you put
out an open order, in a small illiquid market like our internal one: a bet on whether a
project will deliver on time. It's behind schedule, you've built a good base rate, and you
want to say it's less than 10% likely. That won't trade unless someone takes the other
side. So you have to ask not just what you believe today, but what's true conditional on
someone taking the other side — possibly someone far in the future, or someone who knows
more than you and would only trade in the state of the world where they know something you
don't. The strong version says that absent some other need like hedging, or impatience,
we shouldn't be able to trade at all: if I think it's a good trade, you should infer that
and not want to make it.

There's also a blog post several of us have discussed, arguing that prediction markets have
been a cool idea for a while and haven't taken off — because savers want positive returns
over time, gamblers want excitement (and these markets can take a long time), and the
sharps want liquidity. Looking back, that was a bad prediction. But the framework is good,
and it points at the real question: why would anyone trade?

## Hedging and entertainment

One answer is hedging — the classic economic answer. An airline has a risk it can't control
around oil prices that affects its margins, so it might want contracts to lock that in,
even at an average cost. Oil actually cooperates with the example: West Texas Intermediate
and Brent Crude diverged in annoying ways, which is just basis risk — using a market that
measures something highly correlated with, but not identical to, what you care about.
Nothing's perfect. Part of the thesis of Kalshi, Polymarket, and others is that there's a
huge latent demand for hedging; if it felt normal enough that VPs said "here are the
contracts I use to manage this risk," there could be a huge market. Entirely possible — but
it wouldn't shock me if in ten years we're not there and big companies keep self-insuring.
I'm rooting for it; I'm not sure.

![Sports are fun](/images/icml-2026/slide-12.png)

The other answer is entertainment. Sports are fun. If you're watching a boring game and
you're short on dopamine, betting adds excitement. Channeling Matt Levine: crypto is
sports, politics is sports. A chart of Kalshi's volume shows the vast majority is sports —
though what we heard that morning is that it's actually more diversified, so treat these as
two data points, and I put less thought into mine than she did into hers.

It's easy to dismiss sports as a domain where we don't care about the probability unless
we're betting — and that's kind of true. But it's an answer to the no-trade theorem. Why
trade against a quant firm at negative expected value? Because maybe you like it. If you
bet $100 at slightly negative expected value, it might cost you $5 in expectation — less
than you'd spend on Uber Eats. Gambling can be genuinely harmful, and I don't wave that
away; but many people bet for excitement without ruining their lives, and the point is that
entertainment is one way to subsidize this activity. When I think about what's left after
AGI, we turn a lot of things into entertainment. Formula One is competitive engineering —
the heights of science and engineering plus the nerves of the driver. There are whole
channels about real estate. Sometimes that entertainment cross-subsidizes valuable activity
elsewhere, and it would be nice if it subsidized information useful for things like science
and health.

## Prices as a public good

![Prices coordinate society](/images/icml-2026/slide-15.png)

Traditionally, what are prices? The Hayekian view: prices coordinate society. The planners
of the Soviet economy didn't know how much wheat or how many oranges people needed. Prices
communicate supply and demand, and people use that to make decisions and hedge risk. Each
person generates a little of that information — you see cherries at $20, decide you don't
like them that much, and your demand, predictive of others', gets aggregated into the
price. You're doing a little work and contributing information to society.

So what's the nature of AI-forecasting-driven changes to prices? Do they benefit society,
or mostly the traders? If you deploy talent and strategy well, you gain — and we're
comfortable with that in capitalist societies, where everyone can trade and better
strategies earn more, risk-adjusted. But some cases look closer to zero-sum. High-frequency
trading is the standard example: building a microwave link to move information from Chicago
to New York a few milliseconds faster. Over lunch I heard the counterargument — it reduces
risk and bid-ask spreads, and there's a real debate — but a lot of it is resources spent
mainly to be a little ahead of the other guy.

![Social loss grows as the square of the mispricing](/images/icml-2026/slide-21.png)

Here's a little econ 101 as a lens — an economist telling you free competition might not be
that beneficial, and how to decide when. Draw supply and demand for, say, oil; they meet at
the equilibrium price, which under certain conditions gives socially optimal allocations.
Now suppose there's a mispricing and the commodity sits at $20. People willing to sell at
$50 but not $20 don't sell — they don't drill the wells, they hold on — and society consumes
less than optimal. The green area is surplus: someone willing to pay 100 meets someone
willing to sell at zero, and there's a $100 pie to share; these other people have more like
a $60 pie. As long as there's win-win value, doing the transaction beats not, until the
sign flips negative — which is what a social planner would do.

Push the price up toward equilibrium and the surplus is the dark green area. You've
probably earned money noticing what the price should be, and in doing so you caused
beneficial transactions to take place that had been stopped. It's the same diagram used to
argue about rent control or minimum wage — all more nuanced than econ 101, but this channel
matters. The fun fact: the social loss is the area of the Harberger triangle, and it's
proportional to the *square* of the mispricing. As you move the price closer to
equilibrium, you keep generating surplus but less each time. So one way to argue that
high-frequency trading generates private profit but not much social value is that the
changes it corrects are very small and not persistent for long.

![Big, persistent mispricings attached to real decisions](/images/icml-2026/slide-22.png)

What you'd ideally want from better asset-pricing tools is not just small short-term moves,
but catching the things we've gotten wrong for a long time, that are far off, the way value
investing does. A big mispricing, present for a long time, that matters to important
decisions. Some candidates: DRAM, where the world decided there was a shortage and that
companies like Micron upstream of the AI hardware chain would be very profitable — the stock
shot up, and in theory that high price is a signal that lets them raise money and expand
supply. Or compute: CME Group is working on futures markets for it, and whether AI is a
bubble or grows at 20% forever is an extremely socially important question. Even though
finance is specialized, it's well suited for this, if you can set up the rails — prediction
markets, traditional markets, whatever.

## Inputs: data, and who creates it

Switch back to inputs. What else do you need for good forecasts? Data, particularly at
inference time — and, for training, relevant data: oceanic data, climate modeling, and so
on for the fish-farming example. There's a lot to be said for scraping and finding
available data well; we've seen papers on exactly that. But I take a longer view: how is
the data even present? Who creates it, and do we have the right incentives? People worry
that as users turn to AI chatbots instead of search, the web may be dying — the old model
was clicking links for ad revenue. We ran some forecasting questions, and the number of
active websites hasn't really fallen yet, but that's not to say it won't. So what leads to
the supply of that information? How does news get supplied?

Historically, the things that became newspapers started with groups who had a reason to pay.
Lloyd's List tracked ships coming into port and expanded into foreign news. Variety, which I
think of as entertainment, was an industry journal — was this Broadway show popular, who
left from here to there. People collectively paid, by buying a physical paper, for
information valuable to them. And note this isn't quite *rival* information the way a trading
edge is: you'd like to know before others which play will be popular, but you still want to
know even if everyone already does. It's a societal institution that, if you're building one
model, you take as given — but we should ask how to catalyze the creation of that kind of
information. If we're stalling on AI progress, maybe the answer is the bitter lesson: we
need ways to generate new data — more surveys, or ways for people in whatever app they use
to tell us things and be rewarded for it.

One example I didn't put in the slides: that morning we saw Kalshi's implied probability of
Trump winning. Around October, a trader in France put millions of dollars on Trump to win
the election and the popular vote, then around 20 cents on the dollar. He won both. What he
told newspapers was that he'd commissioned his own surveys with a different methodology —
social science says people reticent about their own behavior may answer "do you think your
neighbors will vote for Trump?" So instead of asking if *you* will vote for Trump, you ask
about neighbors. Very informative — but notice he had to do it full stack: have the idea,
commission the survey, and trade on it. Ten years ago that wouldn't have been possible. To
me it's inspiring: could we disaggregate it? Could we make markets for people who can
generate useful information, funneling it into better forecasts? I think it's possible, and
useful.

## Rationales

![Rationales make a forecast actionable](/images/icml-2026/slide-26.png)

Back to the stack. Working with people to inform decisions, I've seen again and again that
humans don't know what to do with "26% likely" — whether it's a lot or a little, or whether
it's correct. You might see a track record, but should you trust it? If the forecast comes
with rationales, those are easier to verify: if the reasons make sense, you incorporate
them into your own reasoning. Humans are good at digesting that. It can be co-produced —
reasoning traces, or asking human forecasters to write it down, though you don't get it
automatically. Prediction markets give you comment threads, mostly entertainment-driven,
but another potentially valuable output.

![Scoring explanations by whether they improve the forecast](/images/icml-2026/slide-27.png)

So how do you get good rationales? Good AI forecasters are a tool for eliciting and scoring
many kinds of information. It's not just me — Ezra Karger and co-authors have work on
incentivizing explanations. The simplified version I arrived at, which is similar, is
ablation: here's a forecast of an event with an explanation, and here's one without. If the
explanation, at the RAG step, improved the forecast — sampling multiple times if it's noisy
— we call it informative. You don't know right away; like scored forecasting, you wait until
resolution. But you're making a bounty for the thing you want, paying for outputs — just as
a prediction market or a scored forecasting prize rewards output. That means you can
hill-climb with RL, or make a bounty and crowdsource it. The more things we can put into the
format of "I know how to give a bounty for what I want," the more we can scale, and do
market design on it. That's exciting.

## Wiser policies?

![The full stack, filled in](/images/icml-2026/slide-34.png)

Another use case: wiser policies. COVID is an area where forecasting rationalists did
extremely well. Most people here can remember the moment they realized COVID would be a big
deal; for me it was February. I knew someone in the rationalist community who got an RV and
left the big cities — normally you'd think that's crazy, but it may have been the right
call. So if policymakers want to understand the effects of policies, better forecasts about
geopolitics and outcomes would be enormously valuable.

But I don't want to get carried away. If you read Asimov as a kid, Foundation imagines
people so good at understanding the course of history that they can steer it — Paul Krugman
says that inspired him to become an economist. Robin Hanson proposes futarchy: for any
decision-making body, instead of voting on policies, you set the objective and ask a market
which policies, if enacted, will improve health or education or reduce recidivism — you
outsource the causal question to the market. An exciting use case, though it's hard to get
people to adopt new things like this.

You might also think we'd avoid wars. There are plenty of wars based on miscalculation — the
US in Iraq believing (or wanting others to believe) in WMDs and a quick war; Russia
apparently surprised it didn't quickly conquer Ukraine. But they kind of already had access
to better forecasts and either ignored or disincentivized them. Who tells Vladimir Putin
not to do the thing he's committed to? Motivated reasoning, especially in groups, is
strong. Maybe the better model is COVID or education policy, where wise advice is heeded
because people want to do a good job. Will forecasting end wars? Probably not — I think it's
another arms race. The Guns of August describes Europe sleepwalking into World War I; if
England and Germany in 1895 had had great forecasters, they'd have been told they'd fight in
20 years, which would only have reinforced the arms race that made the war so destructive.
So I don't think forecasting makes wars more likely or more dangerous — but I don't think it
fixes them either; the problems are deeper than a shortage of good advice. My epistemic
status: these are interesting ideas I'm willing to debate.

## Questions, resolution, and Goodhart

For training, questions matter as much as they do at inference time. We've seen ideas for
sourcing good questions — Manifold's is sensible, and I'm curious how it works. Someone
mentioned "crux" that morning: an intermediate, shorter-term event whose forecast is
informative about a longer one, playing a role like a clever take injected at the RAG stage.
I don't have a favorite idea here; it's a hard problem — what will you use the information
for, and how do you measure how much it's appreciated? But being able to scale lets you
outsource to a crowd or to machines and speed the pipeline up.

![Resolution is trickier than it looks](/images/icml-2026/slide-36.png)

Now resolution. If you just want a forecast, you make your decision and you're done. But to
train good systems you need a source of truth: how did things resolve? Resolution is very
tricky — something I've learned running a small market. Will China end zero-COVID? The
answer was yes, but for a day the New York Times relayed the government's line that it was
only an adjustment; within 24 hours the consensus flipped. For a day it wasn't obvious. Will
the US enter Iran, will there be boots on the ground? A helicopter went in to recover a
downed pilot — does that count as invasion? The spirit of the question is a ground invasion;
the letter is what you're betting on, and you have to be precise. Reality always has edge
cases.

Watch out for Goodharting of facts. Someone put a space heater in Charles de Gaulle airport
to move a Paris temperature bet worth maybe $10–20k — the basis risk wasn't the temperature
in Paris but the reading of one sensor. Benign here; not benign if weather sensors were
tampered with at scale, or if someone started a wildfire to win a bet, which would outweigh
any information benefit. Once manipulation is cheap and the stakes rise, people do it, and
you have to watch out when crowdsourcing. (I had a slide about Zelensky's suit but lost it —
there was a whole market on whether he'd wear a suit to the White House, and it took fashion
experts to adjudicate.)

In other domains, how do we resolve things? Matt Levine's column has infiltrated my brain,
so here's a non-market example. Venture Global built an LNG plant with contracts to sell at
a set price; then gas prices spiked after Russia invaded Ukraine, and their lawyers found a
clause saying they only had to deliver once the plant was "finished" — so they sold at high
prices while claiming it wasn't done. The counterparties were displeased; that's what
contracts are for. A judge ruled it was done. If you ask "is it finished, how do we know,"
the answer is: whatever a legitimate process rules, and we're all committed to those rules.
When truth matters for agreements and people benefit differentially from what's declared
true, adjudicating it is hard. I think of truth as a public resource, like grazing land —
now that we're using it up, we have to actively supply more, growing the forest instead of
clear-cutting it.

Resolution remains a challenge. Kalshi has a committed internal team whose answer is: we'll
do our best, trust us, complaints go to us. Polymarket has a crypto protocol with nice
properties, but there are complaints that someone already betting can cheaply buy enough
tokens to change the resolution. That collusion problem is difficult, maybe not impossible —
maybe AI systems pre-committed to judge fairly could help, though if my hedge fund writes
the system, I might make it rule in ways correlated with my positions. There's a method I
like, Bayesian truth serum, meant to get people to share what they know even when the
researcher doesn't know the answer — about higher-order beliefs rather than agreement. But
the collusion problem is a challenge for all these systems; if there's work addressing it,
I'm curious. It's another thing we'll need to scale to build forecasting systems in novel
domains.

## Causality is not prediction

![Correlation is not causation](/images/icml-2026/slide-41.png)

As an economist, I have to flag that forecasting and causal effects are very different. In
some domains it barely matters: a molecule's counterfactual effectiveness as a cancer drug
is about the same whether or not you decide to develop it. But "should I email this client,
will they buy my product?" is different — if the advice is no, you skip them, and there's
correlated information that's hard for the analyst to observe in decisions. When the Fed
lowers rates, markets move: partly because lower rates raise borrowing and consumption,
partly because the Fed's decision reveals information about the economy. When a decision is
revealed, it reveals correlated information. From the outside, making a forecasting model,
you can train on past data. But inside the Fed, recursively using the model, it might
diverge — you'd lose accuracy and not get the policy advice you want without something
trained on causality. So if you're using predictions to decide what someone should *do*,
think carefully.

Part of the solution may be training on that environment. Building such products, you'd
need clients to feed back their decisions (or pay a premium), and to think about capturing
the data that exists — you tried this under the system's advice, how did it go? You might
inject orthogonal randomization for identification; customers may not love that, but maybe
it can be framed acceptably, or you find orthogonal noise in the logits that's there anyway.
There are ways to attack it — but causality is not prediction.

Relatedly, value sometimes comes not from the forecast but from what's co-produced with it.
Forecasting competitions yield leaderboards: this person, model, or team is good at this
domain, so maybe you hire them for private work inside your company. And — no evidence, but
it's on everyone's mind — we trained models to predict the next token and they learned to
code, so training for calibrated forecasts might yield other emergent skills. The analogy to
people: train someone to be better calibrated and more rational, and maybe they make better
life decisions. Sometimes the value is in the co-produced thing you pivot to.

## Closing

![There's value everywhere](/images/icml-2026/slide-44.png)

I've mixed optimism and skepticism, but I keep coming back to how much value there is in
systems that are general and well-calibrated at forecasting. Will my flight leave on time —
we have predictions, but we can improve them. I have a toddler, and I'd love trustworthy
advice about what to try and how to read the evidence on what helps her sleep. In academia,
people worry about drowning in AI slop and keeping up with peer review; you can turn that
into a forecasting question — what gets the most citations in five years isn't quite
quality, but if you squint, maybe you can use it to elicit more inputs. And the big one:
what is AI going to do to society? That seems pretty important to forecast.

Thank you — I really enjoyed thinking about this, and feel free to reach out.

---

*Slides: [tinyurl.com/seth-icml-talk](https://tinyurl.com/seth-icml-talk)*
