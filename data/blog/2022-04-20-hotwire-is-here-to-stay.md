---
authors:
  - dusan
title: 'Hotwire: It is here to stay'
date: '2022-04-20'
tags: ['rails', 'hotwire']
draft: false
summary: It’s been four months since Rails 7 was released
thumbnail:
  id: 1S6VJgQ-xTQ
  author: Shay
---

It’s been four months since Rails 7 was released (Rails 7.0.0 was officially released on the 15th of December 2021). We saw Hotwire getting some excellent traction during this period and becoming universally accepted. It became the de-facto standard for building new Web applications in the Rails world.

# What is Hotwire?

I already wrote a bit [about it](/blog/2021-03-01-goodbye-bootstrapping-turbostrapping-is-here), but in simple terms, **Hotwire** is a combination of Turbo and Stimulus. It turned out it is a pretty darn good combination. Turbo and Stimulus complement each other nicely. It enables you to build some amazing user experiences on the front-end without using too much code.

Both Turbo and Stimulus are already seen, and Turbo used to be what most people know as Turbolinks. Its latest incarnation is what makes it appropriate for modern-day usage. It replaces both Turbolinks and Rails UJS.

Stimulus is a minimal JS framework for the existing HTML. It enhances it nicely with desired behavior. Why is this important? Because that way you can use what Rails already gives you, so you do not have to give up on simple ERB rendering, for example.

It means this new workflow enables you to just feed incremental HTML updates from the back end, and then potentially sprinkle it with some JS magic when needed. Viola, you have single page application, using Rails only.

# New features of Rails 7

It’s been years into the making, and it became a significant release. Other than Hotwire, the biggest change Rails brought us is:

## Asset management

Gone are the days of Webpack and Webpacker clumsy configurations and slow build times. Welcome `jsbundling-rails` and `cssbundling-rails` gems. This way you can use any JS bundler or CSS preprocessor you want, and significantly increase performance and convenience. For example, you can now easily use esbuild + TailwindCSS. My favorite combo.

One step further, when it comes to JS code, you do not have to use bundlers at all. [Read more](https://github.com/rails/importmap-rails) about new **importmap** standard way of consuming JS libs. Basically it relies on some browser features now widely available in order to improve JS assets loading.

And [**Propshaft**](https://github.com/rails/propshaft) will be replacing Sprockets for good. It is a minimal asset manager in charge of versioning and delivering asset files build by one of the above techniques.

Should you switch to Rails 7? Absolutely. If you did not already try, now it is a good time. Just fetch the latest gem and run `rails new something_awesome`.
