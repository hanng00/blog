---
title: Everything I learnt from solo-building our internal tool Unstruct
description: Unstruct, our internal tool for parsing unstructured data, saved us 80% of manual work. Here's everything I learnt from the experience.
pubDate: 2025-12-03
tags:
  - unstruct
---

There’s one major problem every marketplace business face that bottlenecks them from scaling: keeping the marketplace data up-to-date.There's at least on thing a good marketplace requires: prices, product information, supplier information, and more to be up-to-date and in the correct format. This can be solved in one of two ways: either you do it (not preferred), or your suppliers do it. But unless you're a giant like Amazon (and have the leverage to demand that suppliers provide their data in a certain format) or the data you require is sufficiently simple (e.g. weekly price updates), it will be a very (VERY) time-consuming task.

But all of this was true before [November 30, 2022](https://www.scribbr.com/frequently-asked-questions/when-was-chatgpt-released/).

In this blog post, I'll share everything I learnt from the experience of solo-building Unstruct. I'll cover the why, the what, and the how.

<img src="/img/unstruct-header.jpg" alt="Unstruct" class="w-full h-auto rounded-md" />

## Starting with the why: How the process looked like before Unstruct

Once upon a time, I joined Circulate (in Nov 2024). Circulate provides a packaging tool for buyers and suppliers to stay compliant with mandatory reporting, optimise costs, and improve sustainability across all packaging. When I joined, we were a fairly small team: CEO, CTO, two in commercial, two half-time developers, one principal developer, a sustainability expert, and then me. What immediately struck me was the amount of manual work we were doing. We were using a lot of spreadsheets to manage our data, and it was a pain to keep everything in sync. I decided to build a tool that would help us automate the process.