const body = document.getElementsByTagName("body")[0];

const polyfillScript = document.createElement("script");
polyfillScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js");
body.insertAdjacentElement("afterbegin", polyfillScript);

const howlerScript = document.createElement("script");
howlerScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/howler@2.1.3/dist/howler.min.js");
body.insertAdjacentElement("afterbegin", howlerScript);

const jqueryScript = document.createElement("script");
jqueryScript.setAttribute("src", "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js");
body.insertAdjacentElement("afterbegin", jqueryScript);

const pixiScript = document.createElement("script");
pixiScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/pixi.js@4.6.1/dist/pixi.min.js");
body.insertAdjacentElement("afterbegin", pixiScript);

const autoloadScript = document.createElement("script");
autoloadScript.setAttribute("src", "https://cdn.jsdelivr.net/gh/Cao0220/jerryisveryhandsome@HEAD/live2dv3.js");
body.insertAdjacentElement("afterbegin", autoloadScript);

window.onload = () => {
    new l2dViewer({
        el: document.getElementById('L2dCanvas'),
        basePath: 'https://cdn.jsdelivr.net/gh/Cao0220/jerryisveryhandsome@HEAD/assets',
        modelName: 'biaoqiang_3',
        sizeLimit: false,
        mobileLimit: false,
        sounds: []
    })
}