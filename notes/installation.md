---
title: How to install this theme ?
date: 2020-08-25
tags: ["theme","installation","netlify"]
---


### Steps for installation

Easiest way is to deploy this theme on netlify. Just **[FORK](https://github.com/sharadcodes/dev-notes-theme)** and deploy this repo using 
```
yarn build
```
for build command and then specify `dist` folder as the root folder, thats it :)

### Configuration

You can change siteTitle & userImageUrl in `static.config.js` file as

```js
............
............
............
    getSiteData: () => ({
        siteTitle: 'Dev Notes Theme for you by Sharad :)',
        userImageUrl: 'https://my.awesome/image.png',
............
............
............
```

---

[Repo Link](https://github.com/sharadcodes/dev-notes-theme)

You can Follow me on [Twitter](https://twitter.com/iamsharadraj), [Github](https://github.com/haradcodes) or [Message](http://codingindian.codes/contact) me :)
