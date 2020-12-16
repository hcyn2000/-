<template>
  <!-- 新碟上架 -->
  <div class="n-new">
    <div class="v-hd2">
      <router-link to="/discover/album/" class="tit f-ff2 f-tdn"
        >新碟上架</router-link
      >
      <span class="more"
        ><router-link to="/discover/album/" class="s-fc3">更多</router-link
        ><i class="cor s-bg s-bg-6">&nbsp;</i></span
      >
    </div>
    <div class="n-disk">
      <div class="inner" id="album-roller">
        <router-link
          hidefocus="true"
          to="#"
          class="click-flag pre s-bg s-bg-7 f-tdn"
          >&nbsp;</router-link
        >
        <div class="roll f-pr">
          <!-- <ul class="f-cb roller-flag" style="left: -645px">
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg?param=100y100"
                  src="http://p3.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg?param=100y100"
                />
                <router-link
                  title="AZORAland·我是尤长靖"
                  to="/album?id=97409230"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97409230"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="AZORAland·我是尤长靖"
                  to="/album?id=97409230"
                  class="s-fc0 tit"
                  >AZORAland·我是尤长靖</router-link
                >
              </p>
              <p class="tit f-thide" title="尤长靖">
                <router-link class="s-fc3" to="/artist?id=13058503">尤长靖</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/DWosx7VLGDEM0ahaxQ0h6Q==/109951165408512367.jpg?param=100y100"
                  src="http://p4.music.126.net/DWosx7VLGDEM0ahaxQ0h6Q==/109951165408512367.jpg?param=100y100"
                />
                <router-link title="positions" to="/album?id=97226760" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97226760"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="positions" to="/album?id=97226760" class="s-fc0 tit"
                  >positions</router-link
                >
              </p>
              <p class="tit f-thide" title="Ariana Grande">
                <router-link class="s-fc3" to="/artist?id=48161">Ariana Grande</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/1xeJa4fE4N4YVM68FJ69lQ==/109951165403024844.jpg?param=100y100"
                  src="http://p3.music.126.net/1xeJa4fE4N4YVM68FJ69lQ==/109951165403024844.jpg?param=100y100"
                />
                <router-link title="致明日的舞" to="/album?id=97079895" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97079895"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="致明日的舞"
                  to="/album?id=97079895"
                  class="s-fc0 tit"
                  >致明日的舞</router-link
                >
              </p>
              <p class="tit f-thide" title="陈奕迅">
                <router-link class="s-fc3" to="/artist?id=2116">陈奕迅</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/teVK0N534C2mSYoaLr0uqw==/109951165397709994.jpg?param=100y100"
                  src="http://p4.music.126.net/teVK0N534C2mSYoaLr0uqw==/109951165397709994.jpg?param=100y100"
                />
                <router-link
                  title="幸存者 Drifter"
                  to="/album?id=96964343"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96964343"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="幸存者 Drifter"
                  to="/album?id=96964343"
                  class="s-fc0 tit"
                  >幸存者 Drifter</router-link
                >
              </p>
              <p class="tit f-thide" title="林俊杰">
                <router-link class="s-fc3" to="/artist?id=3684">林俊杰</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100"
                  src="http://p4.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100"
                />
                <router-link title="REVISIT" to="/album?id=96871982" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96871982"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="REVISIT" to="/album?id=96871982" class="s-fc0 tit"
                  >REVISIT</router-link
                >
              </p>
              <p class="tit f-thide" title="张国荣">
                <router-link class="s-fc3" to="/artist?id=6457">张国荣</router-link>
              </p>
            </li>
          </ul> -->
          <ul class="f-cb roller-flag" style="left: 0px">
            <li v-for="item in NewDiscList" :key="item.id">
              <div
                class="u-cover u-cover-alb1"
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
              >
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/2ztAT9l4eOZeEUfcsqmBkA==/109951165393210183.jpg?param=100y100"
                  :src="item.picUrl + '?param=100y100'"
                />
                <router-link
                  :title="item.name"
                  to="/album?id=96880875"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  :title="item.name"
                  to="/album?id=96880875"
                  class="s-fc0 tit"
                  >{{ item.name }}</router-link
                >
              </p>
              <p class="tit f-thide" :title="item.artists[0].name">
                <router-link
                  class="s-fc3"
                  to="/artist?id=35531"
                  v-for="(names, index) in item.artists"
                  :key="names.id"
                  >{{
                    index == item.artists.length - 1
                      ? names.name
                      : names.name + " / "
                  }}</router-link
                >
                <!-- <router-link class="s-fc3" to="/artist?id=286948">Benny Blanco</router-link> -->
              </p>
            </li>
            <!-- <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg?param=100y100"
                  src="http://p4.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg?param=100y100"
                />
                <router-link title="彩券" to="/album?id=96680121" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96680121"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="彩券" to="/album?id=96680121" class="s-fc0 tit"
                  >彩券</router-link
                >
              </p>
              <p class="tit f-thide" title="薛之谦">
                <router-link class="s-fc3" to="/artist?id=5781">薛之谦</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100"
                  src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100"
                />
                <router-link
                  title="Hybrid Theory (20th Anniversary Edition)"
                  to="/album?id=96493815"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96493815"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="Hybrid Theory (20th Anniversary Edition)"
                  to="/album?id=96493815"
                  class="s-fc0 tit"
                  >Hybrid Theory (20th Anniversary Edition)</router-link
                >
              </p>
              <p class="tit f-thide" title="Linkin Park">
                <router-link class="s-fc3" to="/artist?id=95439">Linkin Park</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/nVcyy4_yHQknqkeC-pqOgw==/109951165362948150.jpg?param=100y100"
                  src="http://p3.music.126.net/nVcyy4_yHQknqkeC-pqOgw==/109951165362948150.jpg?param=100y100"
                />
                <router-link
                  title="《半是蜜糖半是伤》影视原声带"
                  to="/album?id=96342190"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96342190"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="《半是蜜糖半是伤》影视原声带"
                  to="/album?id=96342190"
                  class="s-fc0 tit"
                  >《半是蜜糖半是伤》影视原声带</router-link
                >
              </p>
              <p class="tit f-thide" title="群星">
                <router-link class="s-fc3" to="/artist?id=122455">群星</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/9uFWVbZgjjRNFa4hypOQ2A==/109951165354295618.jpg?param=100y100"
                  src="http://p4.music.126.net/9uFWVbZgjjRNFa4hypOQ2A==/109951165354295618.jpg?param=100y100"
                />
                <router-link title="我的祖国" to="/album?id=96178356" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96178356"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="我的祖国" to="/album?id=96178356" class="s-fc0 tit"
                  >我的祖国</router-link
                >
              </p>
              <p
                class="tit f-thide"
                title="佟丽娅 / 王丽达 / 张若昀 / 钟楚曦 / 李沁 / 王鸥 / 吴谨言 / 李一桐 / 尹颂 / 魏允熙 / 蔡诚俊 / 李治廷 / 谷嘉诚 / R1SE夏之光 / 胡夏 / 赖冠霖 / 于朦胧 / 曾舜晞 / 郭俊辰 / 费启鸣 / 孙怡 / 李汶翰 / 林一 / 苏青 / 梦然 / 陈燕妮 / 赵志伟 / 王博文 / 沈以诚 / 李兰迪 / 梁靖康 / 汪卓成 / 米热 / 万思维 / 李宸希 / 官鸿 / 陈蓓蓓 / 窦昆 / 周峻宇"
              >
                <router-link class="s-fc3" to="/artist?id=190298">佟丽娅</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12184055">王丽达</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=1088047">张若昀</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13228312">钟楚曦</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12140179">李沁</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12676434">王鸥</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=33469057">吴谨言</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12620112">李一桐</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989709">尹颂</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12233087">魏允熙</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=31154363">蔡诚俊</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=4031">李治廷</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13973042">谷嘉诚</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=29783224">R1SE夏之光</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=3273">胡夏</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=31153220">赖冠霖</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=1193417">于朦胧</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12008056">曾舜晞</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=11975240">郭俊辰</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=30035218">费启鸣</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13465110">孙怡</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27889649">李汶翰</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989215">林一</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=28897420">苏青</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=9039">梦然</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=29897401">陈燕妮</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=28387502">赵志伟</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=827615">王博文</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12002248">沈以诚</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=32295510">李兰迪</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27695878">梁靖康</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36990279">汪卓成</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989779">米热</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=32146264">万思维</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12345552">李宸希</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27889345">官鸿</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12347137">陈蓓蓓</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=33197327">窦昆</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989768">周峻宇</router-link>
              </p>
            </li> -->
          </ul>
          <!-- <ul class="f-cb roller-flag" style="left: 645px">
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg?param=100y100"
                  src="http://p3.music.126.net/1XfoEJK6dQ2TEw55eXZLfA==/109951165418603915.jpg?param=100y100"
                />
                <router-link
                  title="AZORAland·我是尤长靖"
                  to="/album?id=97409230"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97409230"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="AZORAland·我是尤长靖"
                  to="/album?id=97409230"
                  class="s-fc0 tit"
                  >AZORAland·我是尤长靖</router-link
                >
              </p>
              <p class="tit f-thide" title="尤长靖">
                <router-link class="s-fc3" to="/artist?id=13058503">尤长靖</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/DWosx7VLGDEM0ahaxQ0h6Q==/109951165408512367.jpg?param=100y100"
                  src="http://p4.music.126.net/DWosx7VLGDEM0ahaxQ0h6Q==/109951165408512367.jpg?param=100y100"
                />
                <router-link title="positions" to="/album?id=97226760" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97226760"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="positions" to="/album?id=97226760" class="s-fc0 tit"
                  >positions</router-link
                >
              </p>
              <p class="tit f-thide" title="Ariana Grande">
                <router-link class="s-fc3" to="/artist?id=48161">Ariana Grande</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/1xeJa4fE4N4YVM68FJ69lQ==/109951165403024844.jpg?param=100y100"
                  src="http://p3.music.126.net/1xeJa4fE4N4YVM68FJ69lQ==/109951165403024844.jpg?param=100y100"
                />
                <router-link title="致明日的舞" to="/album?id=97079895" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="97079895"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="致明日的舞"
                  to="/album?id=97079895"
                  class="s-fc0 tit"
                  >致明日的舞</router-link
                >
              </p>
              <p class="tit f-thide" title="陈奕迅">
                <router-link class="s-fc3" to="/artist?id=2116">陈奕迅</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/teVK0N534C2mSYoaLr0uqw==/109951165397709994.jpg?param=100y100"
                  src="http://p4.music.126.net/teVK0N534C2mSYoaLr0uqw==/109951165397709994.jpg?param=100y100"
                />
                <router-link
                  title="幸存者 Drifter"
                  to="/album?id=96964343"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96964343"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="幸存者 Drifter"
                  to="/album?id=96964343"
                  class="s-fc0 tit"
                  >幸存者 Drifter</router-link
                >
              </p>
              <p class="tit f-thide" title="林俊杰">
                <router-link class="s-fc3" to="/artist?id=3684">林俊杰</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100"
                  src="http://p4.music.126.net/-eo6zwqZEdRCX_4NhFIWNw==/109951165392959577.jpg?param=100y100"
                />
                <router-link title="REVISIT" to="/album?id=96871982" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96871982"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="REVISIT" to="/album?id=96871982" class="s-fc0 tit"
                  >REVISIT</router-link
                >
              </p>
              <p class="tit f-thide" title="张国荣">
                <router-link class="s-fc3" to="/artist?id=6457">张国荣</router-link>
              </p>
            </li>
          </ul> -->
          <!-- <ul class="f-cb roller-flag" style="left: 1290px">
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/2ztAT9l4eOZeEUfcsqmBkA==/109951165393210183.jpg?param=100y100"
                  src="http://p4.music.126.net/2ztAT9l4eOZeEUfcsqmBkA==/109951165393210183.jpg?param=100y100"
                />
                <router-link title="Lonely" to="/album?id=96880875" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96880875"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="Lonely" to="/album?id=96880875" class="s-fc0 tit"
                  >Lonely</router-link
                >
              </p>
              <p class="tit f-thide" title="Justin Bieber / Benny Blanco">
                <router-link class="s-fc3" to="/artist?id=35531">Justin Bieber</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=286948">Benny Blanco</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg?param=100y100"
                  src="http://p4.music.126.net/NP1Zg57UUbHNzAhw7n-LeA==/109951165386012146.jpg?param=100y100"
                />
                <router-link title="彩券" to="/album?id=96680121" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96680121"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="彩券" to="/album?id=96680121" class="s-fc0 tit"
                  >彩券</router-link
                >
              </p>
              <p class="tit f-thide" title="薛之谦">
                <router-link class="s-fc3" to="/artist?id=5781">薛之谦</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100"
                  src="http://p3.music.126.net/q6h3zFrzr6Y3NlQT8rir6w==/109951165373635125.jpg?param=100y100"
                />
                <router-link
                  title="Hybrid Theory (20th Anniversary Edition)"
                  to="/album?id=96493815"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96493815"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="Hybrid Theory (20th Anniversary Edition)"
                  to="/album?id=96493815"
                  class="s-fc0 tit"
                  >Hybrid Theory (20th Anniversary Edition)</router-link
                >
              </p>
              <p class="tit f-thide" title="Linkin Park">
                <router-link class="s-fc3" to="/artist?id=95439">Linkin Park</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p3.music.126.net/nVcyy4_yHQknqkeC-pqOgw==/109951165362948150.jpg?param=100y100"
                  src="http://p3.music.126.net/nVcyy4_yHQknqkeC-pqOgw==/109951165362948150.jpg?param=100y100"
                />
                <router-link
                  title="《半是蜜糖半是伤》影视原声带"
                  to="/album?id=96342190"
                  class="msk"
                ></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96342190"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link
                  title="《半是蜜糖半是伤》影视原声带"
                  to="/album?id=96342190"
                  class="s-fc0 tit"
                  >《半是蜜糖半是伤》影视原声带</router-link
                >
              </p>
              <p class="tit f-thide" title="群星">
                <router-link class="s-fc3" to="/artist?id=122455">群星</router-link>
              </p>
            </li>
            <li>
              <div class="u-cover u-cover-alb1">
                <img
                  class="j-img"
                  data-src="http://p4.music.126.net/9uFWVbZgjjRNFa4hypOQ2A==/109951165354295618.jpg?param=100y100"
                  src="http://p4.music.126.net/9uFWVbZgjjRNFa4hypOQ2A==/109951165354295618.jpg?param=100y100"
                />
                <router-link title="我的祖国" to="/album?id=96178356" class="msk"></router-link>
                <router-link
                  to="javascript:;"
                  class="icon-play f-alpha f-fr"
                  title="播放"
                  data-res-type="19"
                  data-res-id="96178356"
                  data-res-action="play"
                ></router-link>
              </div>
              <p class="f-thide">
                <router-link title="我的祖国" to="/album?id=96178356" class="s-fc0 tit"
                  >我的祖国</router-link
                >
              </p>
              <p
                class="tit f-thide"
                title="佟丽娅 / 王丽达 / 张若昀 / 钟楚曦 / 李沁 / 王鸥 / 吴谨言 / 李一桐 / 尹颂 / 魏允熙 / 蔡诚俊 / 李治廷 / 谷嘉诚 / R1SE夏之光 / 胡夏 / 赖冠霖 / 于朦胧 / 曾舜晞 / 郭俊辰 / 费启鸣 / 孙怡 / 李汶翰 / 林一 / 苏青 / 梦然 / 陈燕妮 / 赵志伟 / 王博文 / 沈以诚 / 李兰迪 / 梁靖康 / 汪卓成 / 米热 / 万思维 / 李宸希 / 官鸿 / 陈蓓蓓 / 窦昆 / 周峻宇"
              >
                <router-link class="s-fc3" to="/artist?id=190298">佟丽娅</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12184055">王丽达</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=1088047">张若昀</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13228312">钟楚曦</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12140179">李沁</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12676434">王鸥</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=33469057">吴谨言</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12620112">李一桐</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989709">尹颂</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12233087">魏允熙</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=31154363">蔡诚俊</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=4031">李治廷</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13973042">谷嘉诚</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=29783224">R1SE夏之光</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=3273">胡夏</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=31153220">赖冠霖</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=1193417">于朦胧</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12008056">曾舜晞</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=11975240">郭俊辰</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=30035218">费启鸣</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=13465110">孙怡</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27889649">李汶翰</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989215">林一</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=28897420">苏青</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=9039">梦然</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=29897401">陈燕妮</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=28387502">赵志伟</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=827615">王博文</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12002248">沈以诚</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=32295510">李兰迪</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27695878">梁靖康</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36990279">汪卓成</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989779">米热</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=32146264">万思维</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12345552">李宸希</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=27889345">官鸿</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=12347137">陈蓓蓓</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=33197327">窦昆</router-link>
                &nbsp;/&nbsp;
                <router-link class="s-fc3" to="/artist?id=36989768">周峻宇</router-link>
              </p>
            </li>
          </ul> -->
        </div>
        <router-link
          hidefocus="true"
          to="#"
          class="click-flag nxt s-bg s-bg-8 f-tdn"
          >&nbsp;</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      NewDiscList: [],
    };
  },
  methods: {
    // 请求新碟上架
    getNewDiscs() {
      api.NewDiscs().then((res) => {
        // console.log(res);
        for (let i = 0; i < 5; i++) {
          this.NewDiscList.push(res.albums[i]);
        }
      });
    },
    // 鼠标经过
    mouseOver() {},
    // 鼠标离开
    mouseLeave() {},
  },
  created() {
    this.getNewDiscs();
  },
};
</script>

<style lang="less">
.n-new {
  margin: 0px 0 0px;
  .n-disk {
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    .inner {
      height: 184px;
      padding-left: 16px;
      background: #f5f5f5;
      border: 1px solid #fff;
    }
    .pre {
      left: 4px;
    }
    .roll {
      float: left;
      width: 645px;
      height: 180px;
      overflow: hidden;
    }
    ul {
      position: absolute;
      top: 0;
      width: 645px;
      margin: 28px 0 0 0;
    }
    li {
      float: left;
      display: inline;
      width: 118px;
      height: 150px;
      margin-left: 11px;
      background-position: -260px 100px;
    }
    .u-cover {
      margin-bottom: 7px;
    }
    p {
      width: 90%;
      line-height: 18px;
    }
  }
  .n-disk .pre,
  .n-disk .nxt {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
  }
  .u-cover-alb1 {
    width: 100px;
    height: 100px;
    .msk {
      width: 118px;
      height: 100px;
      background-position: 0 -570px;
    }
  }
}
</style>