---
author: default
title: Modern Rails Manifesto
date: '2021-03-15'
tags: ['rails', 'tests']
draft: false
summary: At RubySoft, we strongly believe there is a right way to do Rails.
thumbnail: ivan-aleksic-FoYLV60_eHY-unsplash.jpg
thumbnail_attribution_id: FoYLV60_eHY
---

- Only Rails built-in functionalities and sub-frameworks should be used:
  - It is strictly forbidden to use any gem, library or framework that replicates functionality already provided by Rails
- No ~~RSpec~~ or its alternatives: **minitest** only
- No ~~microservices~~: just a big **monolith** app
- No ~~design patterns~~ are allowed(beside what’s already there)
  - No ~~viewcomponents~~ nor ~~trailblazer~~
  - No command or operation objects that are not patterns
  - No presentation objects. Never try to test any of these in isolation. Only helper tests are allowed
- No mongoDB: **PostgreSQL** only
- Minimal use of 3rd party gems:
  - You have to explicitly ask, and be allowed to add a 3rd party gem. This has to be reviewed and vetted unless the gem is already on our whitelist. You would have to answer these questions first:
    - Is the gem well maintained? When was the last commit?
    - If they stop maintaining it, are we allowed to fork it ourselves and keep it running?
    - Would it be simple to maintain it ourselves in case they abandon it?
    - Does it have a major impact on our app? Will the app stop working without it?
- Minimum use of 3rd party APIs and services
  - The other way around is true as well. We do not build Rails ~~API only~~ backends
- Minimum configuration required to run the app in local:
  - Limited set of local ENV variables required.
  - You can introduce a new ENV variable only when absolutely necessary
  - If an ENV is required you are expecting to be there that is not present during runtime you have to raise an exception.
  - The ENV should hold secrets only. Use Rails encrypted credentials if possible:
  - Anything non-secret, that can be safely committed and submitted to repo, should be hardcoded as a CONST at the beginning of a file.
  - Anything environment dependent should go to the appropriate environment config file: test.rb, development.rb… or an initializer
- It should be enough to start the app in development by simply typing `rails s`
  - No other services should be required to run the app locally
  - ~~Docker~~ use for development is strictly forbidden
  - No virtual machines in local, and no windows subsystem for Linux
  - Only **mac** and Ubuntu local environments are allowed
- No ~~React or vue.js~~
  - All client side JS logic has to go to **Stimulus** controllers
  - jQuery CAN be used
  - **Turbo** and Hotwire are a must for any advanced user interactions
    - But be careful with streams, or anything that goes over sockets
- No logic in models. Models can have:
  - relationships defined
  - validations
  - finders and scopes
  - Some very basic simple methods beyond that
  - Most of the logic should go to controllers
  - Specifically, no model lifecycle callbacks or observers are ever allowed to be used
  - if multiple objects are created at once, ask yourself:
    - Should this be wrapped inside a transaction?
    - Should there be an explicit lock?
- Do not overthink DB indexing
- Testing before code whenever you can
  - Be sure to never test Rails itself or gems
  - System tests are a must(capybara and chrome)
  - Followed by controller test
  - It is allowed to use `assigns` in controller tests(add this gem: [](https://github.com/rails/rails-controller-testing))
  - Model tests less often
    - Only when absolutely needed, since we do not have much logic there. We do not want to be testing ActiveRecord!
  - Fixtures are OK to be used.
  - No factories are allowed
- Devise is allowed
  - If you are rolling out your own solution makes sure to use `has_secure_password ` and add bcrypt gem
- Attach files using ActiveStorage only
- Simple branching strategy
  - Branch directly out of the `main` branch, merge back to the `main` branch. Deploy immediately
  - No releases, or complicated branching strategies. It is all constantly and continuously deployed
- For jobs use `ActiveJob` only and its default backends in development and testing
- In development no background job queue is allowed to be run, expect simple `rails s`
- No ~~Procfile~~ nor ~~foreman~~ should be allowed in development
