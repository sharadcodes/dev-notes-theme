# dev-notes-theme
A note taking theme for Hoomans :)

## To deploy run

```
yarn build
```
then use `dist` folder as the root folder.

## Changing Name & Image in sidebar

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