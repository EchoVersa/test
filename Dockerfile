FROM jekyll/jekyll:4.2.2

COPY ./ /app

WORKDIR /app

RUN bundle install
