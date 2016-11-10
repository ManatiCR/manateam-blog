"use strict";angular.module("manatiBlogApp",["ngCookies","ngResource","ngSanitize","ui.router","pascalprecht.translate","ngDisqus","ngAnimate"]).constant("appConfig",{api:{url:"http://test-manatiblog.pantheonsite.io/api/"}}).config(["$stateProvider","$urlRouterProvider","$locationProvider","$translateProvider",function(a,b,c,d){b.otherwise("/not-found"),c.html5Mode(!0),d.translations("en",{"MANATI-SLOGAN":"A bunch of Drupal geeks from Costa Rica","MANATI-SLOGAN-SHORT":"A bunch of Drupal geeks","MANATI-DESCRIPTION":"A full stack, Drupal design and development agency from Costa Rica","FOOTER-BADGE":"EMBRACE OPEN SOURCE","CLOSING-INFORMATION":"made in Costa Rica",BLOG:"Blog","READ-MORE-LINK":"Read More","POST-NOT-FOUND-LANG":"The requested post doesn't exist in requested language. Falling back to actual language.",LANGUAGE:"Español",SHARE:"Share"}),d.translations("es",{"MANATI-SLOGAN":"Somos un montón de Drupal geeks de Costa Rica","MANATI-SLOGAN-SHORT":"Un montón de Drupal geeks","MANATI-DESCRIPTION":"Una agencia full stack de desarrollo y diseño especializados en Drupal de Costa Rica","FOOTER-BADGE":"ABRAZA EL OPEN SOURCE","CLOSING-INFORMATION":"hecho en Costa Rica",BLOG:"Blog","READ-MORE-LINK":"Leer más","POST-NOT-FOUND-LANG":"El post solicitado no existe en el idioma solicitado. Mostrando el post en el lenguage actual.",LANGUAGE:"English",SHARE:"Comparte en"}),d.registerAvailableLanguageKeys(["en","es"],{en_US:"en",en_UK:"en",es_ES:"es",es_CL:"es",es_CR:"es"}),d.fallbackLanguage("en"),d.determinePreferredLanguage(),d.useCookieStorage(),d.useSanitizeValueStrategy("escape")}]),angular.module("manatiBlogApp").controller("BlogPostCtrl",["$scope","$rootScope","$stateParams","$translate","$state","$location","dataFactory",function(a,b,c,d,e,f,g){a.post=[],a.absoluteUrl=f.absUrl();var h=function(c,f){g.getPostById(c,f).then(function(e){if(void 0!==e[0])a.post=e[0];else{var g="es"===f?"en":"es";a.flashMessage=d.instant("POST-NOT-FOUND-LANG"),b.destLang=g,d.use(g),h(c,g)}}).catch(function(a){404===a.status&&e.go("not-found")})};a.clearFlashMessage=function(){a.flashMessage=""},h(c.id,c.lang)}]),angular.module("manatiBlogApp").config(["$stateProvider",function(a){a.state("blogPost",{url:"/:lang/post/:id",templateUrl:"app/blogPost/blogPost.html",controller:"BlogPostCtrl"})}]),angular.module("manatiBlogApp").controller("MainCtrl",["$scope","$stateParams","dataFactory","$translate","$state",function(a,b,c,d,e){a.posts=[],a.loadingFinished=!1,a.pageLength=3,a.pages=[],b.lang||e.go("main",{lang:"en"}),a.language=b.lang,a.page=b.page?parseInt(b.page):1;var f=function(b,d){d>0&&(d-=1),c.getPosts(b,d).then(function(b){a.posts=b,a.posts.length||e.go("not-found")}).finally(function(){a.loadingFinished=!0})},g=function(b){c.getPostCount(b).then(function(b){a.pageCount=Math.ceil(b.length/a.pageLength),a.pages=[];for(var c=1;c<=a.pageCount;c++)a.pages.push(c)})};d.use(a.language),f(d.use(),b.page),g(d.use())}]),angular.module("manatiBlogApp").config(["$stateProvider",function(a){a.state("main",{url:"/:lang?page",templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("manatiBlogApp").controller("NotFoundCtrl",function(){}),angular.module("manatiBlogApp").config(["$stateProvider",function(a){a.state("not-found",{url:"/not-found",templateUrl:"app/not-found/not-found.html",controller:"NotFoundCtrl"})}]),angular.module("manatiBlogApp").factory("dataFactory",["$resource","appConfig",function(a,b){function c(a,b){return f.query({page:b,lang:a}).$promise}function d(a,b){return f.get({id:a,lang:b}).$promise}function e(a){return f.get({id:"count",lang:a}).$promise}var f=a(b.api.url+"blog/:id",{id:"@id",lang:"@lang"},{query:{method:"GET",isArray:!0,params:{lang:"en"}},get:{method:"GET",isArray:!0,params:{id:0,lang:"en"}}});return{getPosts:c,getPostById:d,getPostCount:e}}]),angular.module("manatiBlogApp").controller("NavbarCtrl",["$scope","$translate","$rootScope",function(a,b,c){a.newLang=function(){return"en"===a.language?"es":"en"},a.language=b.use(),c.destLang=a.newLang(),a.switchLanguage=function(){var a="en"===b.use()?"es":"en";b.use(a)},a.menu=[{title:"About us",link:"/#about"},{title:"Our Work",link:"/#work"},{title:"Community",link:"/#community"},{title:"Blog",link:"/blog"},{title:"Contact us",link:"/#contact"}]}]),angular.module("manatiBlogApp").controller("PostRelatedContentCtrl",function(){}),angular.module("manatiBlogApp").run(["$templateCache",function(a){a.put("app/blogPost/blogPost.html",'<div class=page-main><div ng-include="\'components/navbar/navbar.html\'"></div><main class=l-content-limiter role=main><header class=content-section-header><h2 class="title content-section-title">{{ \'BLOG\' | translate }}</h2><!-- por el momento sin breadcrumbs --><!-- insert categories in the future --><!-- insert search in the future\n        <div class="js-search-toggle">\n          Search\n          <form action="" role="search"></form>\n        </div>\n      --><div class=alert ng-show=flashMessage><p>{{flashMessage}}</p><a href=# class=close-message ng-click=clearFlashMessage()>X</a></div></header><!-- blog item --><article class="entry entry-full-content"><div class=entry-main-body><header class=entry-full-content-header><h1 class="title entry-full-content-title">{{post.title}}</h1><!-- ANGULARIZAR ESTO --><figure class=entry-media-image><img class=entry-lead-image ng-src={{post.image}} alt=""></figure></header><div class=entry-main-body-content ng-bind-html=post.body></div><!-- ANGULARIZAR TODO LO QUE SIGUE --><footer class=entry-footer><div class=social-share><h4 class="title social-share-title">{{\'SHARE\' | translate}}</h4><a class="social-share-link social-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u={{ absoluteUrl }}">Facebook</a> <a class="social-share-link social-share-twitter" href="https://twitter.com/intent/tweet?url={{ absoluteUrl }}&text={{post.title}}">Twitter</a> <a class="social-share-link social-share-google" href="https://plus.google.com/share?url={{ absoluteUrl }}">Google Plus</a></div></footer></div><aside class=entry-details><img class=entry-details-profile-image ng-src={{post.authorPicture}}><h3 class=entry-details-author-name>{{post.authorName}}</h3><time class=entry-details-date datetime=2014-12-16>{{post.created}}</time><div class=categories-list>{{post.tags}}</div><!-- <ul class="categories-list">\n            <li class="categories-item"><a href="#" class="categories-item-link">Drupal</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">Views</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">Databases</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">RESTful Services</a></li>\n          </ul> --></aside></article><!-- end blog item --><div disqus=post.nid></div></main><!-- main --></div><!-- page-main --><script>window.disqus_shortname = \'manatiblog\';</script>'),a.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=page-main><main class=l-content-limiter role=main><header class=content-section-header><h1 class="title section-title">{{ \'BLOG\' | translate }}</h1><!-- insert categories in the future --><!-- insert search in the future\n        <div class="js-search-toggle">\n          Search\n          <form action="" role="search"></form>\n        </div>\n      --></header><!-- @TODO: LOADING text should be changed --><div class="spinner animate-hide" ng-hide=loadingFinished>LOADING</div><div class="entry-list animate-show" ng-cloak ng-show="posts.length && loadingFinished"><!-- blog item --><article class="entry entry-teaser" ng-repeat="post in posts"><div class="entry-container entry-teaser-container"><h2 class="title entry-title-teaser"><a ui-sref="blogPost({id: post.nid, lang: language})">{{post.title}}</a></h2><p class="entry-content entry-teaser-content" ng-bind-html=post.body></p><a ui-sref="blogPost({id: post.nid, lang: language})" class="button button-with-arrow read-more">{{\'READ-MORE-LINK\' | translate }}</a></div><aside class=entry-details><img class=entry-details-profile-image ng-src={{post.authorPicture}}><h3 class=entry-details-author-name>{{post.authorName}}</h3><time class=entry-details-date datetime=2014-12-16>{{post.created}}</time><div class=categories-list>{{post.tags}}</div><!--  <ul class="categories-list">\n            <li class="categories-item"><a href="#" class="categories-item-link">Drupal</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">Views</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">Databases</a></li>\n            <li class="categories-item"><a href="#" class="categories-item-link">RESTful Services</a></li>\n          </ul> --></aside></article><!-- end blog item --></div><!-- entry-list --><ul class=pager ng-cloak ng-if="pageCount > 1" ng-show=loadingFinished><li class=pager-item ng-if="page > 1"><a ui-sref=".({page: page - 1})" class="pager-link pager-previous">Previous</a></li><li class=pager-item ng-repeat="actual in pages"><a ng-if="actual != page" ui-sref=".({page: {{ actual }}})" class=pager-link>{{ actual }}</a> <span ng-if="actual == page" class="pager-link actual">{{ actual }}</span></li><li class=pager-item ng-if="page + 1 <= pageCount"><a ui-sref=".({page: page + 1})" class="pager-link pager-next">Next</a></li></ul></main><!-- main --></div>'),a.put("app/not-found/not-found.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><!-- @TODO: This page should be created --><div class=page-main>This is the not-found view.</div>"),a.put("components/navbar/navbar.html",'<header class=nav><div class="nav--wrapper limiter"><div class="logo logo--wrapper"><a href="/"><img src=/assets/images/89539ec0.manati-logo.png alt="" class=logo--image></a></div><nav class=nav--menu-list><a href=/our-work.html class="nav--menu-link nav--menu-list-item">Our work</a> <a href=/what-we-do.html class="nav--menu-link nav--menu-list-item">What we do</a> <a href=/about-us.html class="nav--menu-link nav--menu-list-item">About Us</a> <a href=https://medium.com/manati-web-agency target=_blank class="nav--menu-link nav--menu-list-item">Medium</a></nav><a class="nav--menu-link nav--menu-list-item lang-switcher" ng-click=switchLanguage() ui-sref=".({lang: destLang})">{{\'LANGUAGE\' | translate}}</a> <a href=/contact-us.html class="cta cta__header">Contact Us</a><ul class="social-network--list social-network--list__header"><li class="social-network--list-item social-network--list-item__twitter"><a href=https://twitter.com/estudiomanati target=_blank class=social-network--link>Twiter</a></li><li class="social-network--list-item social-network--list-item__github"><a href=https://github.com/ManatiCR target=_blank class=social-network--link>Github</a></li><li class="social-network--list-item social-network--list-item__drupal"><a href=https://www.drupal.org/manat%C3%AD target=_blank class=social-network--link>Drupal</a></li><li class="social-network--list-item social-network--list-item__facebook"><a href="https://www.facebook.com/estudiomanati/" target=_blank class=social-network--link>Facebook</a></li><li class="social-network--list-item social-network--list-item__linkedin"><a href=https://www.linkedin.com/company/manat%C3%AD target=_blank class=social-network--link>LinkedIn</a></li></ul></div></header><aside class=header-punchline><p class=header-punchline--text>Get inside our heads and learn all about Drupal, Frontend, Backend, Design, UX, Strategy.</p></aside>'),a.put("components/postRelatedContent/postRelatedContent.html",'<div ng-controller=PostRelatedContentCtrl><h2 class="title entry-footer-recommended-title">Blogs recientes:</h2><ul class=entry-recommended><li class=entry-recommended-list><h3 class="title entry-recommended-title">Lorem ipsum dolor sit amet</h3><time class=entry-recommended-date datetime=2014-12-16>16 diciembre de 2014</time></li></ul></div>')}]);