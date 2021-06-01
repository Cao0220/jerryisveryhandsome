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