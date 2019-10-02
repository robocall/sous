# README

To edit one page, use the `*-src.md` file (NOT the html file)
To build one page, for example the tour page, run `pandoc tour-src.md > tour.html; open tour.html`
To build the site, run `node build.js .`


# Git setup
## Make a directory
macbook:~ $ mkdir sous
macbook:~ $ cd sous

## Initialize git
macbook:sous $ git init
Initialized empty Git repository in /Users//sous/.git/


## Copy remote into local
macbook:sous $ git remote add origin https://github.com/sousveillance-collective/sousveillance-collective.github.io
macbook:sous $ git clone https://github.com/sousveillance-collective/sousveillance-collective.github.io.git
Cloning into 'sousveillance-collective.github.io'...
remote: Enumerating objects: 82, done.
remote: Counting objects: 100% (82/82), done.
remote: Compressing objects: 100% (55/55), done.
remote: Total 520 (delta 48), reused 56 (delta 27), pack-reused 438
Receiving objects: 100% (520/520), 27.59 MiB | 2.98 MiB/s, done.
Resolving deltas: 100% (304/304), done.


## Check the files exist
macbook:sous $ ls
sousveillance-collective.github.io
macbook:sous $ cd sousveillance-collective.github.io/
macbook:sousveillance-collective.github.io $ ls
CNAME			eyes.png		styles			workshop-src.md
README.md		index-src.md		toolkit-src.md		workshop.html
ai-intro.md		index.html		toolkit.html		workshop.md
build.js		lib			tour-src.md
camera-spotting-src.md	media			tour.html
camera-spotting.html	misc.md			whos-watching.md

## Create branch
$ git checkout -b jean_reorg

## Push changes
$ git push origin jean_reorg
