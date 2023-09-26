# Traderepublic Blog

This is the blog for our project in the Traderepublic hackaton 2022-07-21.

## Stack
- Jekyll
- Github pages
- AWS API Gateway
- AWS Lambda
- AWS S3
## Running locally
Build:
```
docker build -t jekyll .
```

Run:
```
docker run --rm -p 4000:4000 --entrypoint bash jekyll -c \
'bundler exec jekyll serve -H 0.0.0.0 -P 4000'
```

For development with live reload:
```
docker run -it --rm -v $(pwd):/app -p 4000:4000 -p 35729:35729 --entrypoint bash jekyll -c \
'bundler exec jekyll serve -H 0.0.0.0 -P 4000 --livereload'
```

See the preview [here](localhost:4000).

### TODO
- [x] Decide theme
- [ ] Customize theme
    - [ ] fixed mnu bar
- [x] Deploy theme
- [ ] Enable i18n
- [x] Enable SEO plugins
- [ ] Create PR for CRECORD pointing `blog.traderepublic.com` to `https://traderepublic.github.io/blog/`
- [x] Create first blog post (english/german?)

Fix:
- blogs in the _posts dir are breaking the site when removed

Nice to have:
- [x] Store search terms
