/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/19/记录搭建博客时候的那些事/QQ图片20211219155304.png","d0c267d31758d95fedf3e7d77b3645d6"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219154727502.png","be54450ee45e5347d8f6d1be99ae8444"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219155705942.png","57bcbe28599fcd235985203b72ce9754"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219160220211.png","3c1c9264939132643bdad275fca05b80"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625204426189.png","dbb1fbf4554103be2a8a5df7765dd74a"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625210024054.png","4d196d60beedfcfba91fe9696f469a1c"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625211100626.png","bc66f66493732caa097353131e3f9fcc"],["/2021/12/19/记录搭建博客时候的那些事/index.html","2ede8a608f2bbea6902c1fadacdb9330"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211150135911.png","7c8a69681f3309f7d1078ad813cb0503"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153122913.png","9642689da2ec2c5f33a0e52c2646b8f1"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153220743.png","563e23b8006c81bafa9fe997bb86ad2a"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153642930.png","6a89770106961b4d88e5a6f73ac0335a"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153657928.png","9971bdc80da2489818616def865b8fed"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211154256815-16445653809671.png","d269aa51bce3162ec68ce39c55578c66"],["/2022/02/11/记录Windows更新后崩溃-1/index.html","083bf88b7d98a3bfdbc65f224e8c9b74"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416161928461.png","e7f1163a26e3c09aacef8087bdcebf51"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162025389.png","be0540906623b974e0a9785c218bcf00"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162105616.png","698f509956d2f4120ed8786f5598da8d"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162316611.png","c90720fb016d77fe237d73aad3e70d81"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162621413.png","fab558fbc072ce01ce9478aac13205de"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162737991.png","34da3724abf2f995d10b8d23cc36d0e0"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162932165.png","a19bcf6b79a377182e899ad7b7fee9eb"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163209499.png","c695659aee8ca89ef96a6faf7872e893"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163222305.png","3f6a3cb099bb73c6dc1ee4d23c79eab5"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163310459.png","f2a68fd57e9e36e2843b2f34cc40a3ed"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163403965.png","da115be5d78b0e30fb20303bc376ba79"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163648581.png","d4c48d75e79ad467ab6657d704c0a983"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416164143980.png","241c09b7d4a1b7d39775e898594c12c9"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416164205958.png","f2f955f844cf0c6141226cbcc525f8d9"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417203906152.png","fae40f0ab0c2e802430a0bb26f19c2b8"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417203941786.png","6734661bbc85518f83a24d12f240675f"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417204304640.png","d03916326c1b75cfd7ab1fd1c2483d81"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417204557907.png","01fe5f6dd6d6445e26a4925206e31521"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417210241098.png","46a6f6778b894694197d203ecfea5e62"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417211046410.png","4282a4c2ad54a81d0300d614de7e5340"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417211319914.png","52fab14035d7cd49698aba3c6c898855"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417214603300.png","63472e7e50a5f1b2aa5a4a09e772d0ec"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/index.html","b1a6b62f46de37eee184a26864694cd0"],["/2022/06/04/论文笔记/image-20220604175417280.png","d61ee2e127ad44b0244455a8229bb884"],["/2022/06/04/论文笔记/image-20220604175952635.png","c31170540074ca0f3be09fc9d81628f2"],["/2022/06/04/论文笔记/image-20220604180451609.png","0cc16158dd0ba832408f8c5fb76127f5"],["/2022/06/04/论文笔记/image-20220604181220879.png","e830de54e532996153ba283b5299a843"],["/2022/06/04/论文笔记/index.html","41e9d0ee88afe1fe42fa25f563a575e1"],["/2022/06/27/歌曲评价/image-20220627231843452.png","f601fb3145af3cd4a8402584b278e3bc"],["/2022/06/27/歌曲评价/image-20220630224923460.png","8cb1770b209b7666d0f9cd6e0824a9a3"],["/2022/06/27/歌曲评价/image-20220630225012837.png","f5e1cc5c7883f41612578dcd45f9b01f"],["/2022/06/27/歌曲评价/image-20220630225054469.png","2aef9068ee184c49745c30248d26df5b"],["/2022/06/27/歌曲评价/image-20220630230020675.png","0b87654d6ab10276c38ed565a699b503"],["/2022/06/27/歌曲评价/index.html","2bb8e0767fde5b3a82ad101972344855"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/image-20220627231051040.png","3f71af79a919225d09dbbf9a313de9c6"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/image-20220627231144594.png","db0f986b0ada899ffafa6d1bfc6ffdd5"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/index.html","068bc3d86fbfefdad6132f5271442265"],["/2022/06/30/To-do List/index.html","11ea021b94530d929d59d55e12735892"],["/2022/07/06/信号与系统-傅里叶变换的思考/3139D2C0CA4E7384F68C995EFF09AEC7.jpg","3139d2c0ca4e7384f68c995eff09aec7"],["/2022/07/06/信号与系统-傅里叶变换的思考/419C4FEBDCEDFC3694F4FA0AB8FC9DBB.jpg","419c4febdcedfc3694f4fa0ab8fc9dbb"],["/2022/07/06/信号与系统-傅里叶变换的思考/443548F907E8412739E85369052E5650-16571181147071.jpg","443548f907e8412739e85369052e5650"],["/2022/07/06/信号与系统-傅里叶变换的思考/443548F907E8412739E85369052E5650.jpg","443548f907e8412739e85369052e5650"],["/2022/07/06/信号与系统-傅里叶变换的思考/C2E8860ED8FAEC8FAE2A26D5CE68DA2A.jpg","c2e8860ed8faec8fae2a26d5ce68da2a"],["/2022/07/06/信号与系统-傅里叶变换的思考/index.html","2e0203ee57771645fba2ddc48381425c"],["/2022/07/08/神经网络学习笔记/1.jpg","66b3671daabd48f249b413a078658cc3"],["/2022/07/08/神经网络学习笔记/A6FE9710B65DCC240A451DC21BE22CC4.jpg","a6fe9710b65dcc240a451dc21be22cc4"],["/2022/07/08/神经网络学习笔记/CF916ED7D561D11DFB1616482C749667-16572624575102.jpg","cf916ed7d561d11dfb1616482c749667"],["/2022/07/08/神经网络学习笔记/image-20220708124357589.png","89d6a59ef07d717e8fde1798acd07ad6"],["/2022/07/08/神经网络学习笔记/image-20220708124516778.png","9c4dc0a0a29978feafbac9f8ce841272"],["/2022/07/08/神经网络学习笔记/image-20220708124629305.png","c66e5556d618710b02f8fe8a03ed4576"],["/2022/07/08/神经网络学习笔记/image-20220708131910144.png","31c66c2eaf0e5c8fa5f8ea3c3a008220"],["/2022/07/08/神经网络学习笔记/image-20220708132405382.png","2042ee07b91a2e11152c75ae1149df71"],["/2022/07/08/神经网络学习笔记/image-20220708132803269.png","bb633027f7764b4b11184ffea18f51ee"],["/2022/07/08/神经网络学习笔记/image-20220708143303814.png","8ef135e3a59515feabdcf5e89c585ebd"],["/2022/07/08/神经网络学习笔记/image-20220708143406994.png","4c13c5f5d00179822e35e27ec9406067"],["/2022/07/08/神经网络学习笔记/image-20220717200429426.png","b1c57cf99d6f9e4aa8e7a36eafb11973"],["/2022/07/08/神经网络学习笔记/image-20220717201919049.png","fd22363a4196623b6961dd62edaf06a4"],["/2022/07/08/神经网络学习笔记/index.html","db658555b4fdba3dbb405b88766ebf84"],["/2022/07/08/神经网络学习笔记/v2-766c3f59d3791da39ad805606d6445f6_r.jpg","e13c8c3a59cf76f1c92514c6b4e39ed1"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/04AC92024B2F07A184D9712B131A46AD.jpg","04ac92024b2f07a184d9712b131a46ad"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/33E9A49EC8D54DA5E380432B4309067B.jpg","33e9a49ec8d54da5e380432b4309067b"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/64B34E95ED8E36899CF278C859C285C3-16610062534765.jpg","64b34e95ed8e36899cf278c859c285c3"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/64B34E95ED8E36899CF278C859C285C3.jpg","64b34e95ed8e36899cf278c859c285c3"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/6D24D5941D451F5E9780CE93F6E14C78.jpg","6d24d5941d451f5e9780ce93f6e14c78"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/A0378A5D245800156973F9901CF369A3.jpg","a0378a5d245800156973f9901cf369a3"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/BFEDF684B44E37179B683BE185C4230C.jpg","bfedf684b44e37179b683be185c4230c"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/D38CB3F2B64B429C936AE448B2CC1271.jpg","d38cb3f2b64b429c936ae448b2cc1271"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/D966F5BB3F5A9129E729A8067074F462.jpg","d966f5bb3f5a9129e729a8067074f462"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220312_155717.jpg","ef1ce4504cdd3c1499930af3b5511fb7"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220318_170224.jpg","c2182fe41a932790ef4bf9d300b1bfaf"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220703_122041.jpg","2401be9be1b7ddfc7a823752027ca5cb"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220703_204841.jpg","4f44be7881f0587a202f525eae2c51e2"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220704_113622.jpg","bf7bbad6ff5038289910689b30097bf1"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220704_173752.jpg","7636cd0319de7434bb3e91e3b501746a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220705_113156.jpg","973d8cad1ac33080d9248990d9bedd40"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220706_185106.jpg","543e46061ce988556d6163e99f69543c"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220707_184246.jpg","0a8714a2ca651a0a396ebc39621b9031"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220708_190020-16610058669032.jpg","8ac9ebb8df3c2baf870efc0f547167a3"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220708_190020.jpg","8ac9ebb8df3c2baf870efc0f547167a3"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220713_192117.jpg","c4d254247f98f1170dd086221667bb68"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220716_123232.jpg","2cd74e5ed5364f2a08f357f8748e9cee"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220806_130439-16610059250373.jpg","9d7eb29a4eb9424452b16df0dc65331a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220806_130439.jpg","9d7eb29a4eb9424452b16df0dc65331a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220813_183451.jpg","952b75c29c9b8701e62c8c957d319d43"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220815_173829.jpg","3fd86190d1d19a546b5a3f3e30bba5d0"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220818_060204.jpg","04c74c040dda37a608a91fe1a78a4cf0"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220820_083802-16610061074884.jpg","036fa629615ba4507dcd5c7d4da0ae84"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220820_083802.jpg","036fa629615ba4507dcd5c7d4da0ae84"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/index.html","d43f7d8c71c82f6534609fd9977fdb43"],["/archives/2021/12/index.html","8f99c94890827f8683c49249a6414109"],["/archives/2021/index.html","c15c1fe6a028d7248f331e05720ca87b"],["/archives/2022/02/index.html","d7709b9a698a692e288cc59f9917ed3e"],["/archives/2022/04/index.html","c3cef4a1ef09a8c055095c5b30340c24"],["/archives/2022/06/index.html","8af7089aca5a3239cd42a59a4e32f0ec"],["/archives/2022/07/index.html","aa70e8297ae785894c9362521272a942"],["/archives/2022/08/index.html","2c708a8cb1e94ebc2e706e0527dfae22"],["/archives/2022/index.html","52dca7ab112e21e4dc7385ffcddf07cc"],["/archives/index.html","fa615cb6550559d04c567940e7b660d8"],["/categories/index.html","a056065e0f0f232598a9921d37c4d52c"],["/categories/技术博客/index.html","4674fa4efc216351bcf9a134abfa37b2"],["/categories/生活的碎碎念/index.html","8a56ee0a864fe299bc6e53bea15e0ce0"],["/categories/论文笔记/index.html","7c923721897d8c9c23a912452e806621"],["/css/index.css","b1c4512b1ce1adc81cbd32b446a2816c"],["/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["/images/cc-by-nc-nd.svg","5fcd1a5c962391d092c995d457fb3040"],["/images/cc-by-nc-sa.svg","2ec8ab6280fa7ada792bebed6f636d8b"],["/images/cc-by-nc.svg","cb04a42b5be6f93f0d2051bcbe1a828a"],["/images/cc-by-nd.svg","c8941a39e22284084c2ec0d2e09c7759"],["/images/cc-by-sa.svg","61380e86b4cec4af627e7228bb302a2b"],["/images/cc-by.svg","f614962aac0740852c7fb67225856be7"],["/images/first_photo_in_NJUPT.jpg","7129d8ecc1c716dc6703f0c084f6efa5"],["/images/icons/apple-touch-icon-180x180_polo.png","2bc03ffdd7902eecda1ca55d38b8ab21"],["/images/icons/favicon-16x16.png","edf1afce2acf6b68ee38dc302591ad0d"],["/images/icons/favicon-32x32.png","445e33f3b5dd377fa49b2fbff15e40be"],["/images/icons/favicon_polo-16x16.png","b82cc346e0522f0b59b6db8f21bc8afa"],["/images/icons/favicon_polo-32x32.png","c00fd41bf4901a70eed8b0c6d577f853"],["/images/icons/safari-pinned-tab_polo.svg","255059f8be427789485c97850dd7aa40"],["/images/icons/stun-logo.svg","7866794021fb9567e574c2ef7295bcae"],["/images/illenium.jpg","630e473042edd0ab59bb9406bc69952f"],["/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["/index.html","0935efcccb921765e408760f11a30959"],["/js/header.js","1f38556fb6b6f1071c636e9478c44d7c"],["/js/scroll.js","5c7b389ea1003645b2e2132379a6aa2c"],["/js/sidebar.js","80945c0975fc9cbe619b0f82ce5f31cf"],["/js/stun-boot.js","0bf548eda18a96d5ee7bb68bea9f330f"],["/js/utils.js","6c01990edb6a03f853fe9e9c3d379615"],["/live2d_models/assets/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2d_models/assets/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2d_models/assets/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2d_models/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2d_models/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/sw-register.js","a03acf007ca7cb295fd922b1caa2a537"],["/tags/index.html","0625fe3c63a07e1d38fbdb220b651fbf"],["/tags/搭建博客/index.html","045d33377d864280383e52270420fff9"],["/tags/智能车竞赛/index.html","bb7a0f6fb0ecac064a7d1d5f4ea10f6f"],["/tags/歌曲/index.html","25ccaff18c1c31e45e8d90534f901059"],["/tags/神经网络/index.html","d2fa94c913847caaf2e1afe16f0a5258"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
