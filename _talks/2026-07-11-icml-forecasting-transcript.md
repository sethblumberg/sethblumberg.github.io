---
title: "Making Forecasting Useful — transcript"
collection: talks
type: "Conference workshop talk"
permalink: /talks/2026-07-11-icml-forecasting-transcript
published: false  # lightly-cleaned transcript; not shown on the site. See README-icml-2026.md.
venue: "ICML 2026 — Workshop: Forecasting as a New Frontier of Intelligence"
date: 2026-07-11
location: "Seoul, South Korea"
---

*A lightly cleaned transcript of the talk: filler and false starts removed, obvious
transcription errors corrected (names, terms), and split into sentences and paragraphs.
Wording is otherwise as delivered. Q&A is included at the end.*

---

Okay, good afternoon, everyone. It's been a long day, but also an interesting day. I hope
to keep this exciting for you.

So I'm Seth Blumberg. I'm a behavioral economist at Google. If you want the slides,
they're available, but if you look ahead you'll spoil whatever might be interesting in
terms of information revelation as we go.

I'm invited to talk about prediction markets — thank you very much to the organizers, I
really appreciate it. I run a prediction market, but it's much smaller and doesn't
involve real money in the way that other people who have been on the stage and are
involved in running a prediction market have mentioned. We don't publish a lot externally
about it. There was one blog post, and there was a paper I collaborated on with some
colleagues in Google DeepMind, but it continues to go — we continue to research with it.
While I don't have internal research to share with you today, I'll share my perspectives,
which are informed by all of that. Some sort of distillation process.

It should surprise no one: two big trends make the whole space very interesting. One, AI
systems are getting better at forecasting. Two, prediction markets are growing enormously
in the public and achieving more public acceptance, and also more public debate. These
trends seem likely to continue — but that's a forecasting problem.

So I'm going to structure my talk around two basic questions. As AI systems get better at
forecasting: first, the output — what should we be using it for? And second, what are the
constraints? What inputs do we need to make it better, either generally or at particular
domains, which might be very high value for society but are constrained today?

## A simple framework

This is a simple framework — not the full nine-step forecasting cycle, although you'll
see I left white space to add other elements. You have a question about the future, you
have a system that gives you a prediction, and you do something with that. I said
decision; I suppose it could just be entertainment value as well.

Here's one particular use case, a very standard one. You have a system that makes good
forecasts, and you have some investment problem: where should I allocate my time, my
resources, what should I do? For instance, maybe you're the Norwegian government and you
want to know about the future of climate change in the seas. Your model says it's
somewhat likely — I think 26% might fall under "somewhat likely" — and your action might
be, okay, we need to invest in resilience for fish farming. Straightforward use case from
a product perspective: if this is a set of people who actually cares about this outcome,
it seems entirely plausible to me that they would ask the system for that advice.

Maybe it wouldn't come out in the form of a probability. As Philip Tetlock mentioned this
morning, a lot of human beings have real trouble thinking in terms of probability — is 26
a lot, is it a little? But a system that's good at this type of calibrated forecasting,
and has other incentives and training to be helpful, might be better at giving advice.

Here's another form of the forecast-to-inform-decision problem. Just try to ask your
forecasting system: what is the ROI of different projects? Say you're a pharma company,
and this is a particular class of gene therapy cancer treatment, which in fact ended up
being a successful cancer drug — I think maybe in the early 2010s. This is a classic
problem: the base rate is quite low. In some domains, 3% of candidates will make it
through certain stages of clinical trials. If your model, which you trust, says it's 7%
likely, in this case that's actually a lot. That suggests maybe it's worth investing.
Good, let's go invest. Or maybe if you have a scarce team of human scientists whom you
trust, you can use this as another layer of checking. Another resource problem, and here
the prediction is: what is the ROI of making this choice over that choice?

Financial trading. To me this is the clearest, most obvious one. The fact that this is
supported by financial trading companies — there's a lot of interest in it. If you can
make something that is better than everyone else at forecasting, one domain you can turn
that to is forecasting asset prices and making trades. Will oil be above $100 a barrel a
year from now? If your model says it's very likely, okay, I'm going to go long on some
particular futures for one year in the future.

This scales. But I should add, this is sort of a hothouse plant. It requires all this
social infrastructure. If you were 2,000 years ago in Rome, or in a society that doesn't
have a concentration of people, being great at this would not be a terribly useful skill.
It relies on the fact that we've set up this financial plumbing and this incentive
system, and plenty of technological and other advances in machine learning and
quantitative skills have fed into this pipeline. Let me talk a little more about this one,
because I think it's actually very interesting, and because it's an area where we expect a
lot more development and deployment. It's worth thinking through: why should we expect
that it will be beneficial not just to the people who employ it and earn profits, but also
to society more generally?

## Inputs: where do forecasts come from?

Let me switch for a minute to inputs — I'm going to go back and forth between inputs and
outputs. Say you want a forecast about oil prices. How would you do it? One, you can do a
centralized system: get one of these Blackwell chips, rent it from a hyperscaler, and
you're the only one who runs it. You spend your resources of electricity, water, whatever,
to have it output that forecast. Or maybe you hire humans — makes sense, centralized. Or
you can use a market mechanism: a stock market, a prediction market, or some other
decentralized crowdsourced system like a forecasting contest with incentives on it.

Now, if the information is valuable to you because you already have a financial market to
trade in, then you really care about *relative* information. You want better knowledge
about the future that the whole rest of the world doesn't have. So if you turn to a
prediction market about geopolitics and you're going to use that to forecast asset prices
in larger, more liquid financial markets — everyone has access to that information. You
might be more clever in using it and analyzing it, which is fair game; that's what a lot
of quantitative trading is about. But if you were trying to find a way to better
understand geopolitical events in order to make financial trades, you'd want to keep that
in house.

There are actually more fundamental problems. Say you had a different use case, and you
wanted to know about COVID, or the North Atlantic sea and climate change. It isn't
actually obvious why you should be able to ask financial markets. You might ask: why would
anyone be supplying those forecasts in the markets? You might say, oh, it's obvious — the
market's there, they'll trade and make money from it. But economic theory actually
struggles with this. The Grossman-Stiglitz paradox says that if a version of the efficient
market hypothesis holds — markets already incorporate all publicly available information —
then there's no alpha from doing more research. Markets already know everything there is
to be known. So who's actually going to provide that good if there's nothing to be earned
from it?

This is a rebuttal of that strongest form of the efficient market hypothesis. I prefer a
slightly weaker one: some sort of equilibrium where if you pay $500,000 to hire a very
smart PhD student and give them the resources they need, in expectation you should make a
little more than $500,000 in profit. If that didn't hold, you would cut back; and if it
didn't hold in the other direction, you would keep hiring until those profits were
whittled away. Of course it's very noisy — you shouldn't expect this to exactly hold — but
that's the equilibrium condition I keep in mind.

There's a very old Milgrom and Stokey paper from the '70s — which I think was eventually
published like 20 or 30 years later — the no-trade theorem. This is another fundamental
problem with markets. Say I put out an open order. I think about this a lot in much
smaller, less liquid markets, like our internal one. Say you want to make a bet about
whether a project will deliver on time. It looks like it's been behind schedule, you've
made a good base rate, and maybe you want to say it's less than 10% likely. Well, that
won't trade unless you already have market-making institutions to fill that role — it
won't trade unless someone takes the other side. So you have to ask not just what I today
believe the probability is; you have to ask, conditional on someone coming and taking the
other side. In that case it might be someone far in the future from when you started that
order, or it might be someone who has a lot more information than you and would only trade
in the state of the world where they know things you do not. The strong version of the
no-trade theorem says that unless there's some other need, like hedging, or people are
irrational and not patient — which people are not perfectly patient — we shouldn't be able
to trade. If I think something is a good trade from my side in expectation, you should
also believe that, and you shouldn't want to make it.

I'll add — not a thousand-citation economic paper, but a blog post that several of us have
talked about from a few years ago — basically arguing: look, prediction markets have been
a cool idea for a while, and they really haven't taken off. Why? Well, savers want
positive returns over time. You invest in the stock market and hopefully, on average, it
goes up. Gamblers want excitement, and a lot of prediction-market things might take a long
time. And the sharps — people who are clever and can have an edge — want liquidity.
Looking back, this ended up being a pretty bad prediction, and I think it's interesting to
think about why. I think the framework is perfectly good.

## Why would anyone trade? Hedging and entertainment

One answer for why anyone would trade is hedging — a classic economic answer. You're an
airline; you have a risk you can't really control, about geopolitics and oil prices, but
it very much affects your profit margin. Maybe you'd like to get contracts to lock that
in, even if on average it costs you something. And indeed oil has moved around. While I
was looking for a good article to paste in as a screenshot, I learned that there's West
Texas Intermediate and there's Brent Crude, and those diverged in ways that were annoying.
So there's always basis risk if you want to use a market that measures one thing highly
correlated to the thing you care about but not quite the same. Nothing's perfect.

Part of the thesis of Kalshi, Polymarket, and others in this space is: hey, there's a huge
latent demand for hedging. People have a lot of risks they don't currently hedge. Right
now it's for extremely high-value use cases, but if it got easy enough, if it felt more
normal — if it was something you expected your VPs to do, to say "here are the prediction
market contracts I use to manage this risk" — then there could be a huge market for it. I
think that's entirely possible, but it wouldn't shock me if in ten years we were not
there — that the thing that's weird today, big companies just self-insuring those risks,
continued. So I wouldn't be surprised either way. I'm rooting for this, and I think it's a
good problem to think about from a product perspective, but I'm not sure.

Another answer is entertainment. Sports are fun. If you're watching a boring game and
you're chronically short on dopamine because your brain has been fried by social media, or
for whatever reason — okay, you can add a little more excitement to it. I don't do a lot
of sports gambling; I think people who are really into it and are strong fans of their
team get a different sort of entertainment. And I'm channeling Matt Levine's column, but
crypto is also sports, politics is sports — you can generate excitement from it. Compared
to this morning, this is a chart that shows Kalshi's — the vast majority of it is sports.
What we heard this morning is that it's actually more diversified than that; these are two
different data points, and I put a lot less thought into this one than she put into hers.

It's easy to dismiss sports and say, oh, that's unimportant, that's not a domain where we
really care about the probability, unless you're going to bet. And that's kind of true —
we don't consume that the way we consume the future price of oil. But this is an answer to
the no-trade theorem. Why would someone trade even if it's negative expected value and
they think there's a quant firm on the other side? Well, maybe they like it. Maybe they
want some risk. If you bet $100 and it's slightly negative expected value, maybe in
expectation it only costs you $5 — and you'd probably spend more than that on Uber Eats.
Now, gambling can be problematic for many people, and I don't want to just wave that away.
There's a view that gambling is bad, we shouldn't have it in society — perhaps. But many,
many people bet on things, or do financial-market stuff, for excitement, and it doesn't
ruin their life. They enjoy it. Maybe they develop skills. So I just want to point out
that this entertainment aspect is actually one solution to how you might subsidize this.

When I look around and think about what's going to be left with AGI — actually, we turn a
lot of things into entertainment. Formula One. I was not an F1 fan before, and now I kind
of get it. What is it? It's competitive engineering — almost the ultimate sport of the
heights of society, science, and engineering, and the drive and nerves of the person in
the seat, together. Higher or lower culture: there are whole channels devoted to real
estate, especially in America but not uniquely, finding ways to get entertainment value
out of a lot of things. You can have different views about it, but one thing I'll point
out is that sometimes that might cross-subsidize valuable activity in other areas. This
one lives rent-free in my head. Maybe this is what our post-AGI world will look like —
not sure. If it did, it would be nice if it were subsidizing information that was useful
for highly valuable aims, like science and health.

## Prices as a public good

Traditionally, what are prices? The Hayekian view is that prices help coordinate society.
The people who ran the Soviet economy didn't know how much wheat people need, didn't know
how many oranges — I guess they didn't grow oranges there. Prices communicate information
about supply and demand, and people use that for economic decisions and hedging risk.
Think about it: each person, why are they generating this information? You go to the
supermarket, cherries are $20, and you think, I don't like cherries that much. You're
making a decision, contributing something about your demand — which is probably predictive
of other people's demand — that gets aggregated into prices. You're doing a little work
and contributing information to society.

What might be the nature of AI-forecasting-driven changes to prices? Do we think it's
going to benefit society as a whole, or primarily benefit those doing the trading? If you
have a clever trading strategy, or are deploying resources and talent well, you're going
to be the primary person who gains. But we're comfortable with that in capitalist
societies — everyone is available to trade, and if you have better strategies you'll earn
more than others in a risk-adjusted way.

But there are some examples closer to zero-sum — or at least you can offer this critique.
About a decade ago people were talking about high-frequency trading; people have been
talking about high-frequency trading for a while. In particular: let's build a microwave
connection to send information from Chicago to New York and back a few milliseconds
quicker. I just had this debate over lunch — actually, what this is doing is reducing risk,
it reduces bid-ask spreads, and there's a debate to be had. But when I think of this,
primarily what we're doing is putting a lot of resources into building stuff whose main
benefit is that I can be a little ahead of the other guy.

## A little econ 101

Let me show you some basic econ 101 that gives a little lens. Here's an economist telling
you that maybe free competition is actually not that beneficial — how do you decide when?
I drew some supply and demand curves; maybe you can think of this as a market for oil.
Econ 101 says if this is the supply and this is the demand, they meet somewhere, and
that's the equilibrium price. Under certain conditions, that price gives you socially
optimal allocations.

But suppose there's a mispricing. Suppose, for whatever reason — Grossman-Stiglitz — society
isn't there. This commodity is only $20. Well, people who might be willing to sell at $50
and not at $20 aren't going to sell it. Maybe they won't drill oil wells, or they'll hold
onto it. And the quantity society gets to consume will be less than optimal. Suppose you
realize, hey, society is misunderstanding this — I can, through some market transactions,
push those prices higher.

Before that, let me show: we have green and red. Green is all the surplus. The surplus is
the integral between these curves. Here's someone whose willingness to pay is 100, here's
someone whose willingness to sell is zero, and there's a $100 pie to be shared between
those people. These other people have more like a $60 pie to share. As long as there's
some win-win value to be shared, it's better to do the transaction than not, and we should
keep doing that until that flips sign and goes negative. That's what the social planner
who controls everything — as a thought experiment — would do.

So suppose you do something that causes the price to go up. Now the surplus is this dark
green area. You've probably earned some money from noticing what the price should be, which
maybe isn't pictured on this graph. But in doing so, you cause transactions that are
beneficial to actually take place, where they had been stopped. This is the same sort of
graph you see to argue why rent control causes problems, or minimum wage. These are all
policies that are more nuanced than the econ 101 version, but this channel is certainly an
important one.

The point I want to raise is this fun fact. The social loss is the area of this Harberger
triangle — what could be realized if we only had the right prices — and that's proportional
to the *square* of the delta, which here is from 50 to 30. Now it's been reduced from a
delta of 30 to a delta of 20. As you incrementally move the price closer to the
equilibrium, you're still generating positive surplus in green, but it's smaller each
time. So one way to think about why you might argue that high-frequency trading generates
private profits for those doing it, but not that much social value, is that the changes
are very, very small and they're not persistent for very long.

What you'd ideally like, if you have tools that make us better at pricing assets
generally, is: sure, they may do things in the short term, move prices a few points here
and there — but it would be great if they got the things we were getting wrong for a long
time, that were very far off, and we noticed them. Like value investing. You'd want to
find a big mispricing that was present for a long time and that matters to important
decisions for society.

Let me give you some candidates. DRAM — we have a shortage. The world decided there was a
shortage, and that it would be very profitable for Micron or other components upstream of
the AI hardware value chain. This company shot up in a hurry. In theory, their high stock
prices are a signal from markets that says: you can raise money much more easily, you can
do projects, you can expand supply. Of course, many hardware-component makers have been
burned by previous cycles, so they're making their own decisions based on those
incentives. But it's an incentive that says: what you do is socially valuable, you can
command an incredibly high price for it, society believes you're likely to continue to
command that high price in the future, therefore we collectively want you to be able to
invest more resources.

Another one is compute. CME Group is working on futures markets for it. There's a lot of
uncertainty — is AI a bubble? Is it just going to go up and up, and we're going to have
20% growth rates forever? I don't know. It seems an extremely socially important question.
I think this is a channel where, even though finance is a very specialized thing, it's
well suited for this — if you can set up the rails for it to go on, be they prediction
markets, more traditional financial markets, whatever.

## Inputs: data, and who creates it

Let me switch back to inputs. What else do you need in order to do good forecasts? Here's
the Norwegian sea-ice fish-farming example. You need data, particularly at inference time.
And if you're thinking about training, you need relevant data for it — here it might be
oceanic data, climate modeling, all kinds of things. There's a lot to be said for how do I
scrape and find the available data well; we've seen papers today where that's an important
step in having your model improve.

I take a little longer view: how is it even present? Who creates that data? Do we have the
right incentives? People worry that, with people using AI chatbots instead of searching
the internet, maybe the web is dying. There was a business model where you'd click on
links, go to the site, and there'd be advertising revenue to be earned. We did some
forecasting questions, and actually the number of active websites hasn't really fallen
yet — but that's not to say it won't. So what leads to the supply of that type of
information? How does news get supplied?

If you go back, the things that turned into newspapers — there were groups of people who
had a reason to pay for it. Lloyd's List was about what ships are coming into port, and
expanded to be about news in foreign countries. Variety, which I think of as a magazine to
entertain people, was an industry journal: this Broadway show, this vaudeville play — was
it popular, this person left from here to there. There was a group of people willing,
through a business model like buying a physical newspaper, to subsidize or collectively
pay for information that was valuable to them. And I'd add, this is not quite *rival*
information in the way a trading edge is. You might want to know before someone else which
play is going to be really popular, but you still want to know even if everyone else
already knows it.

This is another example of a societal institution that, if you're just building one model,
you take as given — here's the information available. But we should think broader: how can
we catalyze the creation of this kind of information? In the previous Manifold talk, I was
thinking: if we're stalling out on AI progress, maybe the answer is the bitter lesson — we
need ways to generate new data that will let us better figure out things like, is this
going to be popular at the box office? Maybe we need a lot more surveys. Maybe we need ways
for people, in whatever app they're using, to tell us and reward them and make it worth
their while. I'm not sure, but I feel it will be a valuable dimension.

Let me add one more example, which I didn't put in the slides. We saw this morning the plot
of Kalshi's implied probability of Trump winning the US election. Around October, there
was a trader in France who put millions of dollars betting Trump would win the election and
win the popular vote, which I think was around 20 cents on the dollar — considered unlikely.
In fact, he won both. It's all exposed now, but what he said to newspapers was: I
commissioned my own surveys. I paid resources to generate new information, and it was a
survey with a different methodology. Social science suggests that if people are reticent
about sharing something about their own behavior, maybe you ask, do you think people around
you will do this? So instead of asking "are you going to vote for Trump," it's "do you
think your neighbors will vote for Trump?" That was very informative. But notice: he had to
do it full stack. He had to have the idea, commission the survey, and then go trade on it.
Ten years ago it wouldn't have been possible to do all that. To me that's inspiring, in the
sense of: could we disaggregate that? Could we have a way to make markets for people who
can generate useful information that helps you know about the world, by funneling it into
better forecasts? I think it might be possible, and I think it would be really useful.

## Rationales

Going back to this stack — there's another thing you might want, to make decisions, which
I've seen time and time again working with people to inform decisions with forecasting:
human beings don't know what to do with "26% likely." We're not used to thinking that way;
we don't know if it's a lot or a little, and it's hard to judge if it's correct. Maybe you
can see the track record of the forecasting system or the prediction market — but should
you trust it? If it comes with rationales, those are easier to verify. If the reasons are
things that make sense to you, things that after you've heard them you say "oh yeah,
that's good, I'm going to incorporate that into my own reasoning" — I think humans are good
at digesting that.

This can be co-produced. It could be in the reasoning traces; you can ask your models to
output it. If you have human forecasters, you can ask them to output it — but you don't get
it automatically. On prediction markets, you do get comment threads, which again are mostly
driven by entertainment, but they're another output that could be very valuable to drive
decisions.

So how can you get good rationales? I think having pretty good AI forecasters is a tool we
can use to elicit and score a lot of types of information. In this case it's not just me —
Ezra Karger and co-authors have some work on how to incentivize explanations. The basic
idea — I'm going to oversimplify and do the version that I thought of, which is pretty
similar — is that you can do ablation. Here's a forecast of this future event with this
explanation; here's a forecast without it. If the explanation, at the RAG step, improved
the quality of the forecast — maybe you need to sample it multiple times if it's noisy —
we're going to judge that, we're going to call that informative. Now, you don't know right
away what's informative; just like prediction markets and scored forecasting, you have to
wait until resolution if you really want to know. But you're making a bounty for the thing
you want. You're paying for outputs — just like when you have a prediction market, or
scoring with prizes and probabilistic forecasting, you're rewarding output. That means you
can hill-climb with RL, and you can make a bounty and crowdsource it. So more and more
things that we can put into the format of "I know how to give a bounty for what I want"
means we can scale, and we can do market design on it. To me, that's very exciting.

## Wiser policies?

Another use case: wiser policies. I think COVID is an area where forecasting rationalists
did extremely well. Probably everyone in this room had a moment — many of us can remember
the moment — when you realized, oh, this COVID is going to be a big deal. For me it was
sometime in February. I knew someone in the rationalist community who lived in the Bay Area
and got himself an RV and left big cities. Normally you'd think, wow, this person is really
crazy — that might have been the correct call. I mean, the disease was not as deadly as we
feared, but it was still extremely bad.

So if policymakers want to understand what the effects of policies will be, what we should
do — if we actually want to make things good — then better forecasts about geopolitics and
the effects of policies on outcomes will be enormously valuable. But I think we shouldn't
get too carried away automatically. If you read Asimov as a kid — the Foundation is a book
about what if people are so smart they can understand what's going to happen in history for
thousands of years and take actions that help it. Pretty cool. Paul Krugman has articles
where he says this is what inspired him to become an economist. And Robin Hanson, full of
super-interesting ideas, says what we should do is futarchy — a system, which doesn't have
to be for a government, for anything that makes decisions. Instead of voting on which policy
to do or whom to elect, you set the priority and you ask a prediction market, or crowdsource
somehow, which policies, if we enact them, will improve health, improve education, reduce
recidivism. That causal-effects question you outsource to the market. To me this is an
exciting use case — though it's hard to get people to do new things like this.

You might also think, oh, we'll avoid wars. I don't have to look back too far to find wars
based on miscalculations. The US invaded Iraq and seemed to either believe, or want
everyone to believe, there were weapons of mass destruction, and also that it would be a
quick, painless war. Russia invaded Ukraine, and it seems they were genuinely surprised
that they didn't immediately conquer them. Maybe I'm cherry-picking stories — but if they
had access to accurate forecasts of how difficult that military campaign would be, would
they not have done it? They kind of already had access; they either chose to ignore other
opinions or disincentivized them. Who's going to tell Vladimir Putin, no, you shouldn't do
this thing that you believe is really worth doing and is an extremely valuable political
aim? Motivated reasoning, especially in groups, is very strong.

Maybe this shouldn't be our canonical example. Maybe more things look like COVID, or
education policy, where wise advice will be heeded because people want to do a good job — as
opposed to people being committed to an action and not wanting to hear other advice. But
will it lead us to a world where we don't have wars anymore? Probably not. I think it's
another type of arms race. The Guns of August is about how World War I started — to
everyone's surprise, Europe sleepwalked into war. But if England and Germany in 1895 had
had really good forecasters, what would those forecasters have said? They probably would
have said: England, you're going to fight Germany in 20 years; Germany, you're going to
fight England in 20 years. And that would have reinforced what they did — arm, build ships,
everything — which ended up making it an extremely destructive war. So I don't have the
view that forecasting is going to make wars more common or more dangerous. I just also
don't have the view that it's going to fix the problems. I think they're deeper than just
"we don't have good enough advice." I should add, my epistemic status on all this is:
these are interesting ideas, and I'm willing to debate them.

## Questions, resolution, and Goodhart

Coming back from war to ingredients. I was talking about the input you'd need to make good
forecasts, like at inference time. What about for training? Questions matter in both cases.
We've seen some ideas already for how you could source good questions. Manifold's idea is a
sensible one, and I'm interested to see how it works. Haifeng, or maybe Ezra Karger,
mentioned crux this morning. When they use the word crux, they mean an intermediate event,
more short-term, whose forecast is informative about the longer one. That plays a similar
role to something that might come in at the RAG stage — a very clever take about politics
that updates your forecast. In general, though, I don't have an idea that I love that I
think could work here. It's a hard problem: what are you going to use the information for?
How will you measure how much that information is appreciated? But again, being able to
scale all these things means you can outsource them to a crowd, you can give them to
machines, and it lets that pipeline go a lot faster.

Now I'm going to talk about resolutions. If you're just asking for a forecast, you don't
really need to come back. You make your decision — maybe the makers of the system, or your
own memory of your AI system, would perform better if you said "no, that didn't work out,
that was stupid advice" — but you're kind of done. You made your decision. But if you're
trying to train good systems, then you actually do need a source of truth: how did things
resolve? Resolution is very tricky. This is one thing I've learned running a small
prediction market.

Will China end its zero-COVID policy? The answer ended up being yes. But for a day, the
New York Times said basically what the Chinese government said — no, we're doing an
adjustment, we're not getting rid of this policy. Within 24 hours the news cycle had come
to a consensus: no, they're making a very large change. But if you're betting on "will they
end zero-COVID," there was a day when it wasn't immediately obvious. Or: will the US enter
Iran, will there be boots on the ground? There was an operation where a helicopter went in
to get a downed pilot — does that count as an invasion? The spirit of a question like that
is, will the US do a ground invasion of Iran? But the letter of the thing you're betting on
you have to be very precise about. Reality always has these edge cases.

You should also watch out for Goodharting of facts. Someone — I think to earn on the order
of less than $10,000 or $20,000 — put a space heater in Charles de Gaulle, the Paris
airport, because they were betting on the temperature in Paris. But the basis risk was not
the temperature in Paris; it was the reading of this one temperature sensor. Now, this one
is pretty benign. But if our weather sensors were tampered with at a much larger scale,
that would be a problem. If you have markets about wildfires and someone starts a fire in
order to win a bet, that's a really big problem — that probably outweighs any information
benefit you might have gotten. So Goodharting is the right frame: once it starts to matter
more, if it's relatively cheap to manipulate, people might do it, and you have to watch out
if you're trying to crowdsource. I had a slide about Zelensky's suit, but I guess I lost
it. There was a whole market about whether Volodymyr Zelensky would wear a suit when he
went to the White House, and he wore something where it took fashion experts to weigh in on
whether it counts as a suit.

In other domains, how do we resolve things? If you read Matt Levine's column a lot, you
might have noticed it's infiltrated my brain and a lot of my examples come from there. This
one's not prediction markets: Venture Global built a liquefied natural gas plant and had
secured contracts to sell at a certain price. Then Russia invaded Ukraine and the price of
natural gas went very high, and they were looking for how not to have to sell at the low
prices they'd agreed to. Their lawyers found a clause that said they only had to sell when
it was finished — so they found ways to sell while saying, no, we're still working on it.
The people on the other side of the contract were not pleased, and that's what contracts
are for. They went before arbitration, or a judge, and the judge basically said no, it's
done. I don't know if they're out of appeals. But if you're trying to say "is it done, how
do we know," the answer here is: it's whatever the judge, through the thing we consider a
legitimate process, rules — and we're kind of all committed to those rules.

So when the truth matters for agreements, and people have different views on it, or benefit
differentially from what gets declared the truth, it can be very hard to adjudicate the
truth. I think about it like a public resource — grazing lands. Now that we're using it,
it's used up, so we need to think about how to actively supply more of it. We grow the
forest instead of just clear-cutting it.

On resolutions, this remains a challenge. Kalshi, as I understand it, has a committed
internal team, and their answer to how markets resolve is: we will do our absolute best to
resolve it well, you should trust us, and if you have a complaint, the complaint is with
us. Polymarket has a crypto-based protocol, which has some nice properties, but there have
also been reports and complaints that, basically, someone already betting in the market —
it's not that expensive for them to buy up enough of the tokens to change the resolution.
That collusion problem is difficult, maybe not impossible. Maybe if you have AI systems
that you've pre-committed will judge things fairly, you could trust it to those. But if the
AI system is written by my hedge fund, maybe I'll try to make it rule in a way correlated
with how I do my predictions. I don't think it's intractable; I just think it's difficult.
There's a method I like called Bayesian truth serum, which is supposed to incentivize
people to share what they know even when you — the social-science researcher — don't know
the answer. It's not quite an agreement metric; it's about higher-order beliefs. Something
like that might be employed. But the collusion problem — someone has an interest in the
truth being declared a certain way — is a challenge for all these systems. If you know of
papers or work that addresses that, it might well exist, and I'm curious. This is another
thing we're going to need to scale if we want to develop forecasting systems in novel
domains, or expand prediction markets to be more useful.

## Causality is not prediction

A slight pivot — not exactly a pivot. As an economist, forecasting and causal effects are
very different. In some domains, maybe it doesn't matter that much. If you're asking which
molecule to invest in developing into a cancer drug, its effectiveness — its counterfactual
effectiveness — is probably the same whether or not you decide to do it. But if you're
asking "should I email this client, will they buy my B2B SaaS product," and you get the
advice that they're not going to, you might skip them. There's correlated information which
is very hard to observe for the analyst, for the econometrician, in decisions.

For instance: when the Fed announces they're lowering rates, markets move. Why? One channel
is that lower rates might mean borrowing is higher and consumption is higher. Another
channel is that the Fed's data suggests something about the market — this one maybe has the
opposite sign of what I was looking for. But the point is: when a decision is revealed, it
reveals correlated information. If you're sitting on the outside and just want to make a
forecasting model, you don't really have to worry about that — you can train on past data.
But if you're in the Fed and you're going to recursively use the model, then it might
diverge; you might have less accuracy and not get the policy advice you want if you don't
have something trained on causality. So if you're trying to use predictions to inform which
decision someone should take, think really carefully about this.

I drew this arrow because maybe part of the solution is: you need to train on that
environment. If you're building products like this, you need your clients to agree to feed
back the decisions, or they pay a much higher premium. You need to think about how to
capture that data, which exists — you tried this under the advice of the system, how did it
work? Maybe you'd want to inject some orthogonal randomization into the system so you have
good identification. Your customers may not like that, but maybe there's a way to frame it
that they're okay with. Or maybe you can look in the logits and capture something you
consider orthogonal noise that's there anyway. So there are ways you can attack this — but
causality is not the same as prediction.

## Co-produced outputs

One other aspect of how we get value is less the forecast itself and more what we do with
that information. You get leaderboards. If you have a forecasting competition for people,
bots, or with money — with money, I guess they become rich — but with leaderboards, you get
to see: this person is really good at forecasting this domain, this model is really good at
this domain, this team that built the model is good. Maybe you want to hire them to do
something else; you believe they have expertise that will help not in public prediction
markets but on private data inside your company. So that's information that's co-produced.

The other one — I don't have evidence, but I think it's on everyone's mind who works on
this — we trained something to predict the next token, and it started eventually being able
to do coding. So it might be that if you train something to be good at calibrated
forecasts, it ends up getting other emergent skills. This is certainly a hope. You might
think this is like with people: if you train people to be better calibrated, more rational,
maybe they'll make better decisions in their life, be a better employee, a better
entrepreneur. So bear this channel in mind too. Sometimes the thing that creates value is
not the direct thing you're creating; it's a co-produced thing, and then you pivot or take
advantage of that.

## Closing

I'm coming to the end, and I think I still have a few minutes. I've done a mix of optimism
and skepticism. I just feel there's so much value that can be created by making systems
that are general and good at forecasting in a calibrated way. Will my flight leave on time?
We have regular data-science-based predictions, but we can always improve those. I have a
toddler — I would love to get better advice that I trusted about what to try, and how to
interpret the evidence of what helps her go to sleep. In academia, people are worried about
drowning in AI slop — how are we going to keep up with peer review? You can convert this to
a forecasting question; it might not be the best one. What's likely to get the most
citations in five years reflects things that aren't quite the same as quality. But maybe if
you squint, if you're clever, you can find a way to use this to elicit more inputs, or do
other things to cope with that. And the big one: what's AI going to do to society? It seems
pretty important to forecast.

I had some takeaways, but they're not needed. Thank you very much. I really enjoyed
thinking about this for all of you, and feel free to reach out. If we have time for
questions, I'm happy to take some.

## Q&A

**Q: On causality — I'm from academia, and I truly believe causality is very important to
improving prediction. In industry, what do you think about causality in terms of the
performance of forecasting?**

Right now I haven't seen people making major decisions just because the model told them. We
take it into advisement — we have a forecasting system, and I'm going to triangulate my
view. So it's relatively safe to start doing this, even though I just gave an invocation of
"don't mix up causality and prediction." I don't think it's that harmful to try and see;
maybe this is a domain where there is that bias term, but it doesn't actually matter that
much. But especially if you want to employ these things at scale, we have ways to get
causality — natural experiments, do-calculus if you believe your graphs, natural and real
experiments. Maybe you can power them up by using forecasting to use smaller samples. AB
testing has found a lot of applications; that's a tool we know how to use to generate more
causality. But it might not be a good fit for all the kinds of decisions you want to make.
I'm sure I have further thoughts, but nothing earth-shattering.

**Q: In comparison to financial markets, there are regulations trying to prevent negative
utility — things like the space-heater manipulation, or placing bets to manipulate some
downstream or upstream action, like shorting a company and then saying false things to
drive down the price. How do you reconcile that with your view — is it a big concern, or a
minor side effect we'll have to deal with?**

I'm going to put it at medium. If these become more important, with more money at stake,
then we have to watch out for it more. People have a sensible moral revulsion to, say,
markets for terrorism — even though it would be extremely useful to have better information
about whether a terrorist attack is likely. In sports, there's a lot of concern about more
cheating in small ways, for parlays. People follow the incentives. One possibility is you
could limit who is able to bet in the markets. If you want to use a prediction market for
wildfires, there's also an ethical concern some people feel — I lost my house, why are you
betting for this to happen? Even if you didn't cause it, it just feels wrong, and the
psychology and economics of moral repugnance is not to be discarded. But if your ethical
system says that's okay, yet you don't want to encourage arson, maybe you don't open it to
everybody — you open it only to vetted people who have a lot to lose from being kicked out
of the market. Maybe you can get a lot of the benefits of decentralized forecasting through
policies like that. It's a medium concern, and it's entirely possible it becomes a much
more serious one. But my hope — maybe it's just optimism, motivated reasoning — is that
there's a path where we can regulate out many of the harms and still get many of the
benefits.

**Q: About the rationales part and the "tell me why" paper you introduced. I can imagine
eliciting rationales and explanations along with the prediction, and operationalizing how
informative that is by the outcome. But that requires the rationale and the actual
prediction to be consistent — at least directionally, your prediction needs to move in the
direction the rationale implies. How would we incentivize people to be consistent, given
humans are bad at these calibrations, and there's a gap between what they believe
internally and what they say to a platform?**

My first instinct is it might not be as much of a problem. I wrote this as: while you're
generating a probabilistic forecast, you also generate a rationale. You could have a
contest for bots or humans that's just an essay contest — give a take, write a blog post,
and we're going to score it on its informativeness. If you trust the AI system you're
putting it into, and ablating, to be pretty good — I don't know where that bar is — then you
trust it to take that into account. So in this particular example, if someone exhibits that
kind of inconsistency, it doesn't seem like a serious problem to me.

*[Session close: we'll stop there for the break. If you have more questions for Seth, feel
free to talk to him during the 20-minute break; we'll resume at 3:20 with oral
presentations and a panel.]*
