---
title: "Making Forecasting Useful"
collection: talks
type: "Conference workshop talk"
permalink: /talks/2026-07-11-icml-forecasting
venue: "ICML 2026 — Workshop: Forecasting as a New Frontier of Intelligence"
date: 2026-07-11
location: "Seoul, South Korea"
---

*A write-up of a talk I gave at the ICML 2026 workshop "Forecasting as a New Frontier of
Intelligence." I run a small internal prediction market at Google, so what follows isn't
internal research, but perspectives informed by it.*

Two trends make this space interesting: AI systems are getting better at forecasting, and
prediction markets are growing and gaining public acceptance. So I want to ask two
questions. As forecasting improves, what should we use the output for? And what inputs
constrain making it better?

## A simple framework

![The forecasting stack: question, prediction, decision](/images/icml-2026/slide-05.png)

You have a question about the future, a system that gives a prediction, and something you
do with it — a decision, or sometimes just entertainment. A standard use case: you're the
Norwegian government, your model says climate change in the seas is 26% likely, and you
invest in resilience for fish farming. It might not come out as a probability — people
struggle to tell whether 26% is a lot — but a calibrated system trained to be helpful might
still give good advice. The same idea covers ROI (a 7% chance of a drug clearing trials can
be a lot, when the base rate is 3%) and financial trading (oil above $100, go long the
futures). Trading is the clearest case, but it's a hothouse plant: it relies on financial
infrastructure we happen to have built.

## Where forecasts come from, and why anyone supplies them

![Centralized versus crowdsourced](/images/icml-2026/slide-09.png)

You can source a forecast centrally (rent a chip, or hire humans) or through a market
(a stock or prediction market, a crowdsourced contest). But there's a supply problem
economic theory takes seriously. The Grossman-Stiglitz paradox: if markets already
incorporate all public information, there's no alpha from research, so who supplies the
forecast? And the no-trade theorem: your order only fills if someone takes the other side —
possibly someone who knows more than you — so absent hedging or impatience, we shouldn't be
able to trade at all.

So why does anyone trade? One answer is hedging — an airline locking in oil exposure — and
part of the Kalshi/Polymarket thesis is huge latent demand for it. The other answer is less
dignified and maybe more important:

![Sports are fun](/images/icml-2026/slide-12.png)

Sports are fun. Crypto is sports, politics is sports. It's easy to dismiss, but it's an
answer to the no-trade theorem: people trade at slightly negative expected value because
they enjoy it — betting $100 might cost $5 in expectation, less than Uber Eats. Entertainment
is a way to subsidize the activity, and it would be nice if it subsidized information useful
for science and health.

## Does better forecasting help society?

![Social loss grows as the square of the mispricing](/images/icml-2026/slide-21.png)

Prices are a public good — they coordinate society, in the Hayekian sense. So do
AI-driven price moves help society or just the traders? A little econ 101: the social loss
from a mispricing is the area of a Harberger triangle, proportional to the *square* of the
error. Correcting a big mispricing is worth far more than shaving a basis point off an
already-good price. That's the case against high-frequency trading creating much social
value — the moves it corrects are tiny and short-lived — and it tells you where the value
is: big mispricings, persistent for a long time, attached to decisions that matter
(DRAM and compute are candidates; CME Group is building compute futures).

## The ingredients that go missing

![Rationales make a forecast actionable](/images/icml-2026/slide-26.png)

A prediction needs support. It needs data — at inference time, and someone has to create
that data in the first place (how does news get supplied? Lloyd's List and Variety started
as information people paid for). And it needs rationales: people don't know what to do with
"26% likely," but a reason they can verify, they'll fold into their own thinking. Rationales
have a useful property — with a good AI forecaster you can *score explanations* by whether
they improve the forecast (ablate the explanation and see), which turns them into a bounty
you can hill-climb with RL or crowdsource. Ezra Karger and co-authors have work on
incentivizing explanations.

## Resolution is harder than it looks

![Resolution is tricky](/images/icml-2026/slide-36.png)

To train systems you need a source of truth: how did things resolve? Did China "end"
zero-COVID — on which day? Did the US "enter" Iran when a helicopter recovered a downed
pilot? And watch out for Goodharting: someone put a space heater in the Paris airport to
move a temperature bet. Benign there; not benign if someone starts a wildfire to win one.
When people benefit differentially from what's declared true, adjudicating truth is hard —
I think of it as a public resource we're using up and need to actively resupply.

## Causality is not prediction

![Correlation is not causation](/images/icml-2026/slide-41.png)

An economist's warning: forecasting and causal effects are different. "Will this client buy
if I email them?" is a causal claim dressed as a forecast — a conditional prediction isn't
advice about whether to act. When a decision is revealed it reveals correlated information
(when the Fed cuts rates, markets move for more than one reason). From the outside you can
train on past data; recursively inside the decision loop, you need something trained on
causality. There are ways to attack it — feeding decisions back, injecting randomization —
but it's genuinely unsolved.

## There's value everywhere

![Forecasting is everywhere](/images/icml-2026/slide-44.png)

I've mixed optimism and skepticism, but there's enormous value in general, well-calibrated
forecasting. Will my flight leave on time? What helps my toddler sleep? Which papers will
matter in five years? And the big one: what is AI going to do to society? That seems pretty
important to forecast.

---

*Slides: [tinyurl.com/seth-icml-talk](https://tinyurl.com/seth-icml-talk)*
