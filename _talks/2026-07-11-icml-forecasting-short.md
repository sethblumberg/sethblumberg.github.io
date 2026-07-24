---
title: "Making Forecasting Useful (short version)"
collection: talks
type: "Conference workshop talk"
permalink: /talks/2026-07-11-icml-forecasting-short
published: false  # short summary; not shown on the site. See README-icml-2026.md.
venue: "ICML 2026 — Workshop: Forecasting as a New Frontier of Intelligence"
date: 2026-07-11
location: "Seoul, South Korea"
---

*A short summary of a talk I gave at the ICML 2026 workshop "Forecasting as a New Frontier
of Intelligence." I run a small internal prediction market at Google; these are
perspectives informed by that, not internal research.*

![The forecasting stack: question, prediction, decision](/images/icml-2026/slide-05.png)

As AI gets better at forecasting, two questions matter: what do we use the output for, and
what inputs constrain making it better? The stack is question → prediction → decision, and
most of the interesting problems are at the ends, not the middle.

On outputs: forecasts inform decisions (fish-farming resilience at 26%), ROI (7% can be a
lot when the base rate is 3%), and trading (oil over $100, go long) — though trading relies
on financial infrastructure we happen to have built. Whether it helps society is a real
question: the social loss from a mispricing grows as the *square* of the error, so
correcting big, persistent mispricings attached to consequential decisions is worth far
more than the tiny, short-lived corrections high-frequency trading makes.

On inputs: forecasts need data (and someone has to create it), rationales (people can't act
on "26%" but can verify a reason — and you can score explanations by whether they improve
the forecast, then crowdsource or hill-climb on that), and resolution (a genuine source of
truth, which is hard: did China "end" zero-COVID, did the US "enter" Iran, and watch for
Goodharting like the space heater in the Paris airport). Why anyone supplies forecasts is a
real puzzle — the Grossman-Stiglitz paradox and the no-trade theorem — with hedging and
plain entertainment as the main answers.

Two cautions and a closing note. Causality is not prediction: "will this client buy if I
email them?" is a causal claim dressed as a forecast, and it's genuinely unsolved. And I
don't think better forecasting ends wars — it's more like another arms race. But there's
enormous value in general, calibrated forecasting: will my flight leave on time, what helps
my toddler sleep, which papers will matter — and, most importantly, what is AI going to do
to society?

---

*Slides: [tinyurl.com/seth-icml-talk](https://tinyurl.com/seth-icml-talk)*
