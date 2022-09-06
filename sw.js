/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/12/19/记录搭建博客时候的那些事/QQ图片20211219155304.png","d0c267d31758d95fedf3e7d77b3645d6"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219154727502.png","be54450ee45e5347d8f6d1be99ae8444"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219155705942.png","57bcbe28599fcd235985203b72ce9754"],["/2021/12/19/记录搭建博客时候的那些事/image-20211219160220211.png","3c1c9264939132643bdad275fca05b80"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625204426189.png","dbb1fbf4554103be2a8a5df7765dd74a"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625210024054.png","4d196d60beedfcfba91fe9696f469a1c"],["/2021/12/19/记录搭建博客时候的那些事/image-20220625211100626.png","bc66f66493732caa097353131e3f9fcc"],["/2021/12/19/记录搭建博客时候的那些事/index.html","b44f491e6558c0c7b3dd386bb0721640"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211150135911.png","7c8a69681f3309f7d1078ad813cb0503"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153122913.png","9642689da2ec2c5f33a0e52c2646b8f1"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153220743.png","563e23b8006c81bafa9fe997bb86ad2a"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153642930.png","6a89770106961b4d88e5a6f73ac0335a"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211153657928.png","9971bdc80da2489818616def865b8fed"],["/2022/02/11/记录Windows更新后崩溃-1/image-20220211154256815-16445653809671.png","d269aa51bce3162ec68ce39c55578c66"],["/2022/02/11/记录Windows更新后崩溃-1/index.html","075ddeb81153bfc2d1711c5eb0224558"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416161928461.png","e7f1163a26e3c09aacef8087bdcebf51"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162025389.png","be0540906623b974e0a9785c218bcf00"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162105616.png","698f509956d2f4120ed8786f5598da8d"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162316611.png","c90720fb016d77fe237d73aad3e70d81"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162621413.png","fab558fbc072ce01ce9478aac13205de"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162737991.png","34da3724abf2f995d10b8d23cc36d0e0"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416162932165.png","a19bcf6b79a377182e899ad7b7fee9eb"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163209499.png","c695659aee8ca89ef96a6faf7872e893"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163222305.png","3f6a3cb099bb73c6dc1ee4d23c79eab5"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163310459.png","f2a68fd57e9e36e2843b2f34cc40a3ed"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163403965.png","da115be5d78b0e30fb20303bc376ba79"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416163648581.png","d4c48d75e79ad467ab6657d704c0a983"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416164143980.png","241c09b7d4a1b7d39775e898594c12c9"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220416164205958.png","f2f955f844cf0c6141226cbcc525f8d9"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417203906152.png","fae40f0ab0c2e802430a0bb26f19c2b8"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417203941786.png","6734661bbc85518f83a24d12f240675f"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417204304640.png","d03916326c1b75cfd7ab1fd1c2483d81"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417204557907.png","01fe5f6dd6d6445e26a4925206e31521"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417210241098.png","46a6f6778b894694197d203ecfea5e62"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417211046410.png","4282a4c2ad54a81d0300d614de7e5340"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417211319914.png","52fab14035d7cd49698aba3c6c898855"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/image-20220417214603300.png","63472e7e50a5f1b2aa5a4a09e772d0ec"],["/2022/04/16/windows-anaconda配置pytorch-gpu环境/index.html","9fdb80e285ada4894d58f21dec84d0b6"],["/2022/06/04/论文笔记/image-20220604175417280.png","d61ee2e127ad44b0244455a8229bb884"],["/2022/06/04/论文笔记/image-20220604175952635.png","c31170540074ca0f3be09fc9d81628f2"],["/2022/06/04/论文笔记/image-20220604180451609.png","0cc16158dd0ba832408f8c5fb76127f5"],["/2022/06/04/论文笔记/image-20220604181220879.png","e830de54e532996153ba283b5299a843"],["/2022/06/04/论文笔记/index.html","97bcf42593a58b0d87734678378fb49f"],["/2022/06/27/歌曲评价/image-20220627231843452.png","f601fb3145af3cd4a8402584b278e3bc"],["/2022/06/27/歌曲评价/image-20220630224923460.png","8cb1770b209b7666d0f9cd6e0824a9a3"],["/2022/06/27/歌曲评价/image-20220630225012837.png","f5e1cc5c7883f41612578dcd45f9b01f"],["/2022/06/27/歌曲评价/image-20220630225054469.png","2aef9068ee184c49745c30248d26df5b"],["/2022/06/27/歌曲评价/image-20220630230020675.png","0b87654d6ab10276c38ed565a699b503"],["/2022/06/27/歌曲评价/index.html","ae4fffe8421d71f864aa42a9c8a49e9c"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/image-20220627231051040.png","3f71af79a919225d09dbbf9a313de9c6"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/image-20220627231144594.png","db0f986b0ada899ffafa6d1bfc6ffdd5"],["/2022/06/27/爱情里的主角应该怎么权衡理性和感性/index.html","fdb8bf6b86dde84ec5a80221652abc84"],["/2022/06/30/To-do List/index.html","ec43edf278c8b918c220466728e48376"],["/2022/07/06/信号与系统-傅里叶变换的思考/3139D2C0CA4E7384F68C995EFF09AEC7.jpg","3139d2c0ca4e7384f68c995eff09aec7"],["/2022/07/06/信号与系统-傅里叶变换的思考/419C4FEBDCEDFC3694F4FA0AB8FC9DBB.jpg","419c4febdcedfc3694f4fa0ab8fc9dbb"],["/2022/07/06/信号与系统-傅里叶变换的思考/443548F907E8412739E85369052E5650-16571181147071.jpg","443548f907e8412739e85369052e5650"],["/2022/07/06/信号与系统-傅里叶变换的思考/443548F907E8412739E85369052E5650.jpg","443548f907e8412739e85369052e5650"],["/2022/07/06/信号与系统-傅里叶变换的思考/C2E8860ED8FAEC8FAE2A26D5CE68DA2A.jpg","c2e8860ed8faec8fae2a26d5ce68da2a"],["/2022/07/06/信号与系统-傅里叶变换的思考/index.html","4bb4a7d07bcfec9e7ea3c1d1b3d894ca"],["/2022/07/08/神经网络学习笔记/1.jpg","66b3671daabd48f249b413a078658cc3"],["/2022/07/08/神经网络学习笔记/A6FE9710B65DCC240A451DC21BE22CC4.jpg","a6fe9710b65dcc240a451dc21be22cc4"],["/2022/07/08/神经网络学习笔记/CF916ED7D561D11DFB1616482C749667-16572624575102.jpg","cf916ed7d561d11dfb1616482c749667"],["/2022/07/08/神经网络学习笔记/image-20220708124357589.png","89d6a59ef07d717e8fde1798acd07ad6"],["/2022/07/08/神经网络学习笔记/image-20220708124516778.png","9c4dc0a0a29978feafbac9f8ce841272"],["/2022/07/08/神经网络学习笔记/image-20220708124629305.png","c66e5556d618710b02f8fe8a03ed4576"],["/2022/07/08/神经网络学习笔记/image-20220708131910144.png","31c66c2eaf0e5c8fa5f8ea3c3a008220"],["/2022/07/08/神经网络学习笔记/image-20220708132405382.png","2042ee07b91a2e11152c75ae1149df71"],["/2022/07/08/神经网络学习笔记/image-20220708132803269.png","bb633027f7764b4b11184ffea18f51ee"],["/2022/07/08/神经网络学习笔记/image-20220708143303814.png","8ef135e3a59515feabdcf5e89c585ebd"],["/2022/07/08/神经网络学习笔记/image-20220708143406994.png","4c13c5f5d00179822e35e27ec9406067"],["/2022/07/08/神经网络学习笔记/image-20220717200429426.png","b1c57cf99d6f9e4aa8e7a36eafb11973"],["/2022/07/08/神经网络学习笔记/image-20220717201919049.png","fd22363a4196623b6961dd62edaf06a4"],["/2022/07/08/神经网络学习笔记/index.html","e052d3dd77209d69b114a6df1f0d2cbe"],["/2022/07/08/神经网络学习笔记/v2-766c3f59d3791da39ad805606d6445f6_r.jpg","e13c8c3a59cf76f1c92514c6b4e39ed1"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/04AC92024B2F07A184D9712B131A46AD.jpg","fc21de8c49f7b888b2b411e0ddfff183"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/33E9A49EC8D54DA5E380432B4309067B.jpg","a6b1d7722f65a3003311f8c40a4de039"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/64B34E95ED8E36899CF278C859C285C3-16610062534765.jpg","e8d6d647e21c6a65d84e9e0a94a12f86"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/64B34E95ED8E36899CF278C859C285C3.jpg","e8d6d647e21c6a65d84e9e0a94a12f86"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/6D24D5941D451F5E9780CE93F6E14C78.jpg","911df2c0e54325b61147af137f8f1611"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/A0378A5D245800156973F9901CF369A3.jpg","8021ad2095a6b7c58ab5cb636acc26e4"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/BFEDF684B44E37179B683BE185C4230C.jpg","aa4504371dd768a6fc299bb683581b4a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/D38CB3F2B64B429C936AE448B2CC1271.jpg","657c11786f4c1d9f03714c6667a07d5b"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/D966F5BB3F5A9129E729A8067074F462.jpg","5638c97289c3735568ae3f97ddd16006"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220312_155717.jpg","c81bad878112097626d696c9b64b6a8e"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220318_170224.jpg","4b06c8cda0475b08430063f637a4d722"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220325_165344-16610056893581.jpg","0dace5f2b341b8679837cbf793da7bcf"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220325_165344.jpg","0dace5f2b341b8679837cbf793da7bcf"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220703_122041.jpg","4e0ef0c35e06b281285b75330fe8d62e"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220703_204841.jpg","2924b6369b945a962328a78cd73b6df9"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220704_113622.jpg","9277bca0e1309f228519f33428761374"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220704_173752.jpg","b35865cfec5740cf6a4fc0cdfc417b47"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220705_113156.jpg","df1c752d9bed16e02ce0179897643765"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220706_185106.jpg","468f7626043480bed1ce49b8f3202928"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220707_184246.jpg","e87e36b010ea59ec49cb31baeaf1a334"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220708_190020-16610058669032.jpg","037ee182ec0462b5bc33c5a245441bf5"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220708_190020.jpg","037ee182ec0462b5bc33c5a245441bf5"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220708_211020_edit_97593037383545.jpg","dcc1aafe311ef376c81ab94b4fccac2a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220713_192117.jpg","8f1872942ec012395f48d1a5a38e1c22"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220716_123232.jpg","c57a22ba34a55e24a6515f32effd1898"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220806_130439-16610059250373.jpg","6db4e6a099128dc8a613e34dfa1ea1fc"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220806_130439.jpg","6db4e6a099128dc8a613e34dfa1ea1fc"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220813_183451.jpg","be757267d3b8611a2a1ea99b27e824b8"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220815_173829.jpg","cdc0d77412bca1ba7bb14abe45aa9a7a"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220818_060204.jpg","94c6b87ee92f3baa35a57b4231520cca"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220820_083802-16610061074884.jpg","db819a4748f0519eaea4eee5a7f59d57"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/IMG_20220820_083802.jpg","db819a4748f0519eaea4eee5a7f59d57"],["/2022/08/20/第十七届智能车竞赛回忆-无缘国赛/index.html","abb04ff7c49a8750c061202db26e32c6"],["/archives/2021/12/index.html","0af8cc1c3d76d7ddf7bee8d2111f00a5"],["/archives/2021/index.html","e53e9065eb57ceb30f0535a1acfc12cc"],["/archives/2022/02/index.html","81ab5678dcb3138e0a212fc422e71422"],["/archives/2022/04/index.html","587b1ae82bbf8b4f8acad57a9050a183"],["/archives/2022/06/index.html","94cc84d777ef6c5c1b4e3bcd6a910006"],["/archives/2022/07/index.html","570f447d6f930058185c13722b31e2d6"],["/archives/2022/08/index.html","bdee16149af232ad1c11828fdc1aa3a7"],["/archives/2022/index.html","af15166a1e1de414ccfbab2875593d31"],["/archives/index.html","ff51ef591da33c999114e5a29da08eb3"],["/categories/index.html","a077f18f8715303d4b08d6ab88095ccd"],["/categories/技术博客/index.html","7f0ccc94681d7d9a7ca4817a6beb7e43"],["/categories/生活的碎碎念/index.html","d5d2ab8b70656a68f328d92bbda55384"],["/categories/论文笔记/index.html","fbc378b7936a5a132b265873af31e9ca"],["/css/index.css","b1c4512b1ce1adc81cbd32b446a2816c"],["/css/main.css","ec160d035ba380dbc3fccdf4a769c990"],["/images/algolia.svg","7f55a5eff525feb4fa927e617395323a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/first_photo_in_NJUPT.jpg","7129d8ecc1c716dc6703f0c084f6efa5"],["/images/icons/apple-touch-icon-180x180_polo.png","2bc03ffdd7902eecda1ca55d38b8ab21"],["/images/icons/favicon-16x16.png","edf1afce2acf6b68ee38dc302591ad0d"],["/images/icons/favicon-32x32.png","445e33f3b5dd377fa49b2fbff15e40be"],["/images/icons/favicon_polo-16x16.png","b82cc346e0522f0b59b6db8f21bc8afa"],["/images/icons/favicon_polo-32x32.png","c00fd41bf4901a70eed8b0c6d577f853"],["/images/icons/safari-pinned-tab_polo.svg","255059f8be427789485c97850dd7aa40"],["/images/icons/stun-logo.svg","7866794021fb9567e574c2ef7295bcae"],["/images/illenium.jpg","630e473042edd0ab59bb9406bc69952f"],["/images/loading.svg","626a1afa3e60e3fbf6af9535e476434a"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","a990c857ada973e92adfa7bf60d2a3e0"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/clicklove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/header.js","1f38556fb6b6f1071c636e9478c44d7c"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/scroll.js","5c7b389ea1003645b2e2132379a6aa2c"],["/js/sidebar.js","80945c0975fc9cbe619b0f82ce5f31cf"],["/js/stun-boot.js","0bf548eda18a96d5ee7bb68bea9f330f"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","e390e575d4f48c0d12b46b71e2b8e6b4"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d_models/assets/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2d_models/assets/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2d_models/assets/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2d_models/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2d_models/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/sw-register.js","2e90d42a011522482cb72e04a6821123"],["/tags/index.html","0dd8a6a4e1c367d9ed1a6182e04dffad"],["/tags/搭建博客/index.html","86fb8269a11eb2f412bfc1dabc53df7c"],["/tags/智能车竞赛/index.html","26996aaf7f00b61c98fbddebfc1367a8"],["/tags/神经网络/index.html","d743404cd18aa91d31195aaff4a60894"],["/tags/锐评/index.html","a3c1194f27b4e4046b62d8fe7c2f0b20"],["/tags/音乐/index.html","7775e67f105602d91d51d8cd81f9669d"],["/uploads/alipay.jpg","2de45ea59742c08a2a36558261c2b2cc"],["/uploads/apple-touch-icon-180x180_polo.jpg","2bc03ffdd7902eecda1ca55d38b8ab21"],["/uploads/apple-touch-icon-180x180_polo.png","2bc03ffdd7902eecda1ca55d38b8ab21"],["/uploads/favicon_polo-16x16.png","b82cc346e0522f0b59b6db8f21bc8afa"],["/uploads/favicon_polo-32x32.png","c00fd41bf4901a70eed8b0c6d577f853"],["/uploads/first_photo_in_NJUPT.jpg","7129d8ecc1c716dc6703f0c084f6efa5"],["/uploads/illenium.jpg","630e473042edd0ab59bb9406bc69952f"],["/uploads/wechatpay.jpg","6833bd4a921134c03658bc4ab6aefe64"]];
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
