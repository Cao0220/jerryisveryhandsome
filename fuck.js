const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cdn.jsdelivr.net/gh/Cao0220/jerryisveryhandsome@HEAD/live2dv3.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)

const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)


const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cdn.jsdelivr.net/npm/howler@2.1.3/dist/howler.min.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)


const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)

const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cdn.jsdelivr.net/npm/pixi.js@4.6.1/dist/pixi.min.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)

const e = document.createElement("script");
e.setAttribute("type", "text/javascript");
e.setAttribute("src", "https://cdn.jsdelivr.net/gh/Cao0220/jerryisveryhandsome@HEAD/live2dv3.js");
document.getElementsByTagName("body")[0].insertAdjacentElement("afterbegin",
    e)

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