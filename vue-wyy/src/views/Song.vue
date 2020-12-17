<template>
  <div class="g-bd4 f-cb">
    <div class="g-mn4">
      <div class="g-mn4c">
        <div class="g-wrap6">
          <div class="m-lycifo">
            <div class="f-cb">
              <div class="cvrwrap f-cb f-pr">
                <div class="u-cover u-cover-6 f-fl">
                  <img :src="SongDetails.al.picUrl" class="j-img" />
                  <span class="msk f-alpha"></span>
                </div>
              </div>
              <div class="cnt">
                <div class="hd">
                  <i class="lab u-icn u-icn-37"></i>
                  <div class="tit">
                    <em class="f-ff2">{{ SongDetails.name }} </em>
                    <a title="播放mv" href="/mv?id=10782615"
                      ><i class="icn u-icn u-icn-2"></i
                    ></a>
                  </div>
                </div>
                <p class="des s-fc4">
                  歌手：<span :title="singer"
                    ><a
                      class="s-fc7"
                      href="/artist?id=12085562"
                      v-for="(item, index) in SongDetails.ar"
                      :key="item.id"
                      >{{
                        index == SongDetails.ar.length - 1
                          ? item.name
                          : item.name + " / "
                      }}</a
                    >
                  </span>
                </p>
                <p class="des s-fc4">
                  所属专辑：<a href="/album?id=74715426" class="s-fc7">{{
                    SongDetails.al.name
                  }}</a>
                </p>
                <div class="m-info">
                  <div id="content-operation" class="btns f-cb">
                    <a
                      href="javascript:;"
                      class="u-btn2 u-btn2-2 u-btni-addply f-fl"
                      hidefocus="true"
                      title="播放"
                      @click="GetMusicUrl"
                      ><i><em class="ply"></em>播放</i></a
                    >
                    <a
                      href="javascript:;"
                      class="u-btni u-btni-add"
                      hidefocus="true"
                      title="添加到播放列表"
                    ></a>
                    <a class="u-btni u-btni-fav" href="javascript:;">
                      <i>收藏</i>
                    </a>
                    <a class="u-btni u-btni-share" href="javascript:;"
                      ><i>分享</i></a
                    >
                    <a class="u-btni u-btni-dl" href="javascript:;"
                      ><i>下载</i></a
                    >
                    <a href="javascript:;" class="u-btni u-btni-cmmt"
                      ><i>(<span id="cnt_comment_count">451271</span>)</i></a
                    >
                  </div>
                </div>
                <!-- <div
                  id="lyric-content"
                  class="bd bd-open f-brk f-ib"
                  copy-from=""
                >
                  作词 : 米果<br />作曲 : 高橋優<br />编曲：池窪浩一 (Kouichi
                  Ikekubo)<br /><br />这一路上走走停停<br />顺着少年漂流的痕迹<br />迈出车站的前一刻<br />竟有些犹豫<br />不禁笑这近乡情怯<br />仍无可避免<br />而长野的天<br />依旧那么暖<br />风吹起了从前<br />
                  <div id="flag_more" class="f-hide">
                    从前初识这世间<br />万般流连<br />看着天边似在眼前<br />也甘愿赴汤蹈火去走它一遍<br />如今走过这世间<br />万般流连<br />翻过岁月不同侧脸<br />措不及防闯入你的笑颜<br />我曾难自拔于世界之大<br />也沉溺于其中梦话<br />不得真假
                    不做挣扎 不惧笑话<br />我曾将青春翻涌成她<br />也曾指尖弹出盛夏<br />心之所动
                    且就随缘去吧<br />逆着光行走 任风吹雨打<br />短短的路走走停停<br />也有了几分的距离<br />不知抚摸的是故事
                    还是段心情<br />也许期待的不过是 与时间为敌<br />再次看到你<br />微凉晨光里<br />笑得很甜蜜<br />从前初识这世间<br />万般流连<br />看着天边似在眼前<br />也甘愿赴汤蹈火去走它一遍<br />如今走过这世间<br />万般流连<br />翻过岁月不同侧脸<br />措不及防闯入你的笑颜<br />我曾难自拔于世界之大<br />也沉溺于其中梦话<br />不得真假
                    不做挣扎 不惧笑话<br />我曾将青春翻涌成她<br />也曾指尖弹出盛夏<br />心之所动
                    且就随缘去吧<br />晚风吹起你鬓间的白发<br />抚平回忆留下的疤<br />你的眼中
                    明暗交杂 一笑生花<br />暮色遮住你蹒跚的步伐<br />走进床头藏起的画<br />画中的你
                    低着头说话<br />我仍感叹于世界之大<br />也沉醉于儿时情话<br />不剩真假
                    不做挣扎 无谓笑话<br />我终将青春还给了她<br />连同指尖弹出的盛夏<br />心之所动
                    就随风去了<br />以爱之名 你还愿意吗<br /><br />吉他：
                    池窪浩一 (Kouichi Ikekubo)<br />贝斯：小島剛広 (Takehiro
                    Kojima)<br />鼓：吉田佳史 (TRICERATOPS) (Yoshifumi
                    Yoshida(TRICERATOPS))<br />键盘：平畑徹也 (Tetsuya
                    Hirahata)<br />小提琴：須磨和声 (Wasei Suma)<br />弦乐：須磨和声、池窪浩一<br /><br />录音工程：玉乃井光紀
                    (Mitsunori Tamanoi) - studioFine<br />发行公司：Negia
                    Entertainment Inc.<br />特别支持：中村光雄(Mitsuo
                    Nakamura)<br /><br />
                  </div>
                  <div class="crl">
                    <a id="flag_ctrl" href="javascript:void(0)" class="s-fc7"
                      >展开<i class="u-icn u-icn-69"></i
                    ></a>
                  </div>
                </div> -->
              </div>
            </div>
            <div id="user-operation" class="lrc-user">
              <p>
                <a class="f-tdu s-fc4" href="/lyric/report?id=1330348068"
                  >报错</a
                >
              </p>
              <p class="s-fc3"></p>
              <!--#if-->
            </div>
          </div>
          <!-- <div
            class="n-cmt"
            id="comment-box"
            data-tid="R_SO_4_1330348068"
            data-count="0"
          >
            <div id="auto-id-A1O5vhhT10SDF23t">
              <div class="u-title u-title-1">
                <h3><span class="f-ff2">评论</span></h3>
                <span class="sub s-fc3"
                  >共<span class="j-flag">451271</span>条评论</span
                >
              </div>
              <div class="m-cmmt">
                <div class="iptarea">
                  <div class="head">
                    <img
                      src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
                    />
                  </div>
                  <div class="j-flag">
                    <div>
                      <div class="m-cmmtipt f-cb f-pr">
                        <div
                          class="u-txtwrap holder-parent f-pr"
                          style="display: block"
                        >
                          <textarea
                            class="u-txt area j-flag"
                            data-type=""
                            placeholder="评论"
                            id="auto-id-Hq7Vg6thiI8nJ1UL"
                          ></textarea>
                        </div>
                        <div class="btns f-cb f-pr">
                          <i
                            class="icn u-icn u-icn-36 j-flag"
                            id="auto-id-lAbckt6ILzK3cOvJ"
                          ></i
                          ><i
                            class="icn u-icn u-icn-41 j-flag"
                            id="auto-id-BiXv2HfTSI8RmK4u"
                          ></i
                          ><a
                            href="javascript:void(0)"
                            class="btn u-btn u-btn-1 j-flag"
                            id="auto-id-IOuWGZKdRGmqpxzA"
                            >评论</a
                          ><span class="zs s-fc4 j-flag">140</span>
                        </div>
                        <div class="corr u-arr">
                          <em class="arrline">◆</em
                          ><span class="arrclr">◆</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cmmts j-flag" id="auto-id-ebD6X2gCwDEO2awm">
                  <h3 class="u-hd4">精彩评论</h3>
                  <div
                    id="13166692141607925448732"
                    class="itm"
                    data-id="1316669214"
                  >
                    <div class="head">
                      <a href="/user/home?id=317469911"
                        ><img
                          src="https://p1.music.126.net/WgiqIY1S268Td693Ik5aHA==/109951164361179380.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=317469911" class="s-fc7"
                            >你也没能成为我的救赎</a
                          ><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923139/f08a/c6ea/10ee/f7e2deef21937a1042e370c47525c956.png"
                            class="brand-tag brand-vip"
                          />：给大家科普一下<br />上一个版本是自己录的没拿到版权<br />而这个版本是原曲日本作家<br />亲自给买辣椒录的曲啦<br />这次是有版权的了<img
                            src="http://s1.music.126.net/style/web2/emt/emoji_33.png"
                          />
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316669214"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (62.2万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316669214"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13168772531607925448732"
                    class="itm"
                    data-id="1316877253"
                  >
                    <div class="head">
                      <a href="/user/home?id=246912803"
                        ><img
                          src="https://p1.music.126.net/6pmUvHURajDbfXEhQybtLA==/109951162792060497.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=246912803" class="s-fc7"
                            >西北北七</a
                          >：听了新版起风了<br />什么感觉呢<br />就像是认识了好久的随便画了个淡妆的姑娘，虽然有瑕疵，但是很好看，很舒服，也习惯了<br />这次这个姑娘认真地画了妆，不是不好看，只是不习惯，觉得不如淡妆好看<br />还是喜欢淡妆随性的那个姑娘&nbsp;&#8203;&#8203;&#8203;
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316877253"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (44.6万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316877253"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13166391331607925448732"
                    class="itm"
                    data-id="1316639133"
                  >
                    <div class="head">
                      <a href="/user/home?id=69548480"
                        ><img
                          src="https://p1.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=69548480" class="s-fc7"
                            >帐号已注销</a
                          >：现在的喜欢好廉价，好友删了就什么都断了
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316639133"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (32.6万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316639133"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13167195841607925448732"
                    class="itm"
                    data-id="1316719584"
                  >
                    <div class="head">
                      <a href="/user/home?id=1438276683"
                        ><img
                          src="https://p1.music.126.net/mi8OOMcHjNgyKfxAhII-Gw==/109951164372250841.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1438276683" class="s-fc7"
                            >盼你温柔</a
                          ><img
                            style="margin-right: 5px; vertical-align: -2px"
                            width="13"
                            height="13"
                            src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
                          /><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923139/f08a/c6ea/10ee/f7e2deef21937a1042e370c47525c956.png"
                            class="brand-tag brand-vip"
                          />：我喜欢三月的风.<br />六月的雨.<br />不落的太阳.<br />和最好的你.
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316719584"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (22.3万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316719584"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13166886371607925448732"
                    class="itm"
                    data-id="1316688637"
                  >
                    <div class="head">
                      <a href="/user/home?id=328902811"
                        ><img
                          src="https://p1.music.126.net/J21riuUfrHhoVFJqRP9qig==/109951163343394365.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=328902811" class="s-fc7"
                            >cmj草莓酱</a
                          ><img
                            style="margin-right: 5px; vertical-align: -2px"
                            width="13"
                            height="13"
                            src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png"
                          /><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923139/f08a/c6ea/10ee/f7e2deef21937a1042e370c47525c956.png"
                            class="brand-tag brand-vip"
                          />：愿你出走半生，归来仍是少年<img
                            src="http://s1.music.126.net/style/web2/emt/emoji_33.png"
                          />
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316688637"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (14万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316688637"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13168727711607925448732"
                    class="itm"
                    data-id="1316872771"
                  >
                    <div class="head">
                      <a href="/user/home?id=357670019"
                        ><img
                          src="https://p1.music.126.net/X-a_KS6wDv47b0PQfey4BQ==/109951165275736986.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=357670019" class="s-fc7"
                            >唔吃苦瓜_</a
                          ><img
                            src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923094/81eb/9288/68a5/a427a0dbf899d616c3f715272a71ee59.png"
                            class="brand-tag brand-vip"
                          />：高一的时候，遇到想照顾一生的女孩，看见她就会脸红，惊喜紧张，深刻的体验拙于言辞<br />只因年少不懂爱，不知道那不只是友情<br />或者晚一点遇上成熟的我……<br />当流星划过天际，我喜欢过你，用珍惜的心情。<br />--致曾经抬头1点方向就能看到的你❤
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316872771"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (13.3万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316872771"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13167992841607925448732"
                    class="itm"
                    data-id="1316799284"
                  >
                    <div class="head">
                      <a href="/user/home?id=66340494"
                        ><img
                          src="https://p1.music.126.net/YGfuYuNyxUagCGWXpq1M5g==/109951164290254403.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=66340494" class="s-fc7"
                            >人有病得治</a
                          ><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923139/f08a/c6ea/10ee/f7e2deef21937a1042e370c47525c956.png"
                            class="brand-tag brand-vip"
                          />：你本无意穿堂风&nbsp;偏偏孤倨引山洪
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316799284"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (10.8万)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316799284"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13166954661607925448732"
                    class="itm"
                    data-id="1316695466"
                  >
                    <div class="head">
                      <a href="/user/home?id=475668327"
                        ><img
                          src="https://p1.music.126.net/Z0_KQLdhu2MkNeHHlssKbg==/109951164074699113.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=475668327" class="s-fc7"
                            >迦捡</a
                          ><img
                            src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923094/81eb/9288/68a5/a427a0dbf899d616c3f715272a71ee59.png"
                            class="brand-tag brand-vip"
                          />：“这样确切的爱，一生只有一次。”
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316695466"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (94945)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316695466"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13167999311607925448732"
                    class="itm"
                    data-id="1316799931"
                  >
                    <div class="head">
                      <a href="/user/home?id=1325095400"
                        ><img
                          src="https://p1.music.126.net/7XbJrhizl6IiM2YUikcrBg==/109951165177932551.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1325095400" class="s-fc7"
                            >小瓜子不香</a
                          ><img
                            src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922900/5a1b/446b/b722/ec5a532c258824e8b59a45c166195e90.png"
                            class="brand-tag brand-vip"
                          />：我只是想起你，不是想你啦
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316799931"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (78726)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316799931"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13167198751607925448732"
                    class="itm"
                    data-id="1316719875"
                  >
                    <div class="head">
                      <a href="/user/home?id=115916300"
                        ><img
                          src="https://p1.music.126.net/tqKKW161M08AX-MGnzBGmw==/109951164172930759.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=115916300" class="s-fc7"
                            >生活_陌路人</a
                          ><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923139/f08a/c6ea/10ee/f7e2deef21937a1042e370c47525c956.png"
                            class="brand-tag brand-vip"
                          />：起风了&nbsp;唯有努力生存
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316719875"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (68652)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316719875"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13324421271607925448732"
                    class="itm"
                    data-id="1332442127"
                  >
                    <div class="head">
                      <a href="/user/home?id=448756764"
                        ><img
                          src="https://p1.music.126.net/JCF7tQKcF9wolPM1E2TDhA==/109951163215366674.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=448756764" class="s-fc7"
                            >彼年-此时</a
                          >：其实我觉得上一个好听......这个也好听
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=317469911"
                          >你也没能成为我的救赎</a
                        >：给大家科普一下<br />上一个版本是自己录的没拿到版权<br />而这个版本是原曲日本作家<br />亲自给买辣椒录的曲啦<br />这次是有版权的了<img
                          src="http://s1.music.126.net/style/web2/emt/emoji_33.png"
                        />
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月20日</div>
                        <a
                          data-id="1332442127"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (50024)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1332442127"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13167037701607925448732"
                    class="itm"
                    data-id="1316703770"
                  >
                    <div class="head">
                      <a href="/user/home?id=1614232684"
                        ><img
                          src="https://p1.music.126.net/qH-ifuHFzbme7mbc9toAkw==/109951163703315532.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1614232684" class="s-fc7"
                            >Lifeaacquaintense</a
                          >：风起于初春&nbsp;那是微风拂面&nbsp;清爽撩人&nbsp;是为心动&nbsp;风落于寒冬&nbsp;那是寒风刺骨&nbsp;冻彻心脾&nbsp;是为心动&nbsp;初识世间&nbsp;走过世间&nbsp;心之所动&nbsp;随缘去吧
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316703770"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (45819)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316703770"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13166459931607925448732"
                    class="itm"
                    data-id="1316645993"
                  >
                    <div class="head">
                      <a href="/user/home?id=513559539"
                        ><img
                          src="https://p1.music.126.net/BCd2xWg-xzNfOCq38Hg1Ng==/109951165223557627.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=513559539" class="s-fc7"
                            >TrampoIine</a
                          ><img
                            src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213923094/81eb/9288/68a5/a427a0dbf899d616c3f715272a71ee59.png"
                            class="brand-tag brand-vip"
                          />：总是这样&nbsp;很难过又很难说
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月3日</div>
                        <a
                          data-id="1316645993"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (44525)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1316645993"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13324376501607925448732"
                    class="itm"
                    data-id="1332437650"
                  >
                    <div class="head">
                      <a href="/user/home?id=1544950927"
                        ><img
                          src="https://p1.music.126.net/2ZrG6ldzL_xt5GnNXsQV9g==/109951164446207041.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1544950927" class="s-fc7"
                            >包子裂开啦</a
                          ><img
                            src="//p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922900/5a1b/446b/b722/ec5a532c258824e8b59a45c166195e90.png"
                            class="brand-tag brand-vip"
                          />：曾经那个版本真的让我感触很深，超级喜欢
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=246912803"
                          >西北北七</a
                        >：听了新版起风了<br />什么感觉呢<br />就像是认识了好久的随便画了个淡妆的姑娘，虽然有瑕疵，但是很好看，很舒服，也习惯了<br />这次这个姑娘认真地画了妆，不是不好看，只是不习惯，觉得不如淡妆好看<br />还是喜欢淡妆随性的那个姑娘&nbsp;&#8203;&#8203;&#8203;
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月20日</div>
                        <a
                          data-id="1332437650"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (41083)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1332437650"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="13325009741607925448732"
                    class="itm"
                    data-id="1332500974"
                  >
                    <div class="head">
                      <a href="/user/home?id=1487269454"
                        ><img
                          src="https://p2.music.126.net/42s92vzCxO83X7W4b8klVA==/109951164496290510.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1487269454" class="s-fc7"
                            >熟悉的bing</a
                          >：现在还能听到旧版吗？
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=317469911"
                          >你也没能成为我的救赎</a
                        >：给大家科普一下<br />上一个版本是自己录的没拿到版权<br />而这个版本是原曲日本作家<br />亲自给买辣椒录的曲啦<br />这次是有版权的了<img
                          src="http://s1.music.126.net/style/web2/emt/emoji_33.png"
                        />
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">2018年12月20日</div>
                        <a
                          data-id="1332500974"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (40768)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="1332500974"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <br /><br />
                  <h3 class="u-hd4">最新评论(451271)</h3>
                  <div
                    id="51824620101607925448732"
                    class="itm"
                    data-id="5182462010"
                  >
                    <div class="head">
                      <a href="/user/home?id=1551558165"
                        ><img
                          src="https://p1.music.126.net/pV8YzwQI7tZvU4URQLWVLA==/109951165391314395.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1551558165" class="s-fc7"
                            >山上的死人</a
                          >：关我屁事
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=313655963"
                          >Timo_千里及</a
                        >：宁城高级中学17级二十班<br />班主任（语文老师）：齐永峰<br />数学老师：贾柱<br />英语老师：王文娴<br />物理老师：李玉龙<br />化学老师：吴静<br />生物老师：李春晖<br />戴鹏&nbsp;冯鹏&nbsp;王禹博&nbsp;柴冠宇&nbsp;程家文&nbsp;成姝颖&nbsp;陈旭&nbsp;崔晓丽&nbsp;丛新宇&nbsp;范莉婕&nbsp;高明月&nbsp;高颖&nbsp;巩越&nbsp;贾宇航&nbsp;郝嘉骏&nbsp;韩世杰&nbsp;韩晓旭&nbsp;胡馨月&nbsp;景新贺&nbsp;梁丹姝&nbsp;梁红宇&nbsp;刘东旭
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">8分钟前</div>
                        <a
                          data-id="5182462010"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182462010"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824232211607925448732"
                    class="itm"
                    data-id="5182423221"
                  >
                    <div class="head">
                      <a href="/user/home?id=396861586"
                        ><img
                          src="https://p1.music.126.net/gXW5P8eI_b0H3iANMIXZew==/109951165541323232.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=396861586" class="s-fc7"
                            >安好_HSRY</a
                          >：今天是12.14了，我们已经分开也快有一年了，我每次看到你就会想起从前的点点滴滴，可看到和你一路的男生，我就会打掉这个念头，但又会一直去想.这首歌是你最喜欢听的，让不喜欢这首歌的我也变得每天都会听，可每次听了就会哭.安好！
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12分钟前</div>
                        <a
                          data-id="5182423221"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (3)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182423221"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824520321607925448732"
                    class="itm"
                    data-id="5182452032"
                  >
                    <div class="head">
                      <a href="/user/home?id=3727246203"
                        ><img
                          src="https://p1.music.126.net/JTNOCsgV2VqN7rfA-dCSQA==/109951165527427487.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=3727246203" class="s-fc7"
                            >我叫馬瀟-</a
                          ><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922817/9124/a83c/7eb7/6d7d81b608bfb56d7fb286bd8eb72346.png"
                            class="brand-tag brand-vip"
                          />：这世间车遥马慢&nbsp;我爱你何止三五年_
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=3442260329"
                          >不要让他难过</a
                        >：“没有人会像电影里一样等你三五年”
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12分钟前</div>
                        <a
                          data-id="5182452032"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182452032"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824152551607925448732"
                    class="itm"
                    data-id="5182415255"
                  >
                    <div class="head">
                      <a href="/user/home?id=394305229"
                        ><img
                          src="https://p1.music.126.net/tS-SbYJjwd8dhn8AmA6v3w==/18819241022717335.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=394305229" class="s-fc7"
                            >夕无殇</a
                          >：a
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12分钟前</div>
                        <a
                          data-id="5182415255"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182415255"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824480781607925448732"
                    class="itm"
                    data-id="5182448078"
                  >
                    <div class="head">
                      <a href="/user/home?id=446621005"
                        ><img
                          src="https://p1.music.126.net/Uo8KtSYMAPOhi07Of3Pqfg==/109951165287543301.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=446621005" class="s-fc7"
                            >仰望星芒</a
                          >：考研倒计时11天，<img
                            src="http://s1.music.126.net/style/web2/emt/emoji_96.png"
                          />
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=348305849"
                          >SexyDynamite-</a
                        >：考研倒计时12天&nbsp;加油
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">13分钟前</div>
                        <a
                          data-id="5182448078"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182448078"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824181611607925448732"
                    class="itm"
                    data-id="5182418161"
                  >
                    <div class="head">
                      <a href="/user/home?id=332687870"
                        ><img
                          src="https://p1.music.126.net/uWy2Oxwdu9pIBrrs7UTfLA==/109951165221541578.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=332687870" class="s-fc7"
                            >張張張R雲</a
                          >：2018年的起风了，现在味道也变了！那个说要保护我的男孩现在保护别的女孩去了，那个说要护我的人去了北方。
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">17分钟前</div>
                        <a
                          data-id="5182418161"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (3)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182418161"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824529951607925448732"
                    class="itm"
                    data-id="5182452995"
                  >
                    <div class="head">
                      <a href="/user/home?id=1537535508"
                        ><img
                          src="https://p1.music.126.net/a9jGdG88nHNUMXxyjtc1Pg==/109951165538883150.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1537535508" class="s-fc7"
                            >tikhyb</a
                          ><img
                            src="//p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4213922957/d393/4206/8928/a082dd9a7e7bb69e84b138b8df7bbcd0.png"
                            class="brand-tag brand-vip"
                          />：这首歌火起来的时候，我初三毕业，算起来我已经毕业两年了，我还记得那时候的《纸短情长》，《可不可以》《白羊》《为你写诗》，好想回到那个夏天
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">18分钟前</div>
                        <a
                          data-id="5182452995"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182452995"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51823813041607925448732"
                    class="itm"
                    data-id="5182381304"
                  >
                    <div class="head">
                      <a href="/user/home?id=1506327318"
                        ><img
                          src="https://p2.music.126.net/pJrMEboBQ4cmLN_ShftGsQ==/109951165532034678.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1506327318" class="s-fc7"
                            >小吴不在1</a
                          >：原来人悲伤到一种程度&nbsp;是真的哭不出来的，我真的不明白，本是同根生，相煎何太急，我也不知道为什么&nbsp;，一个妈生的为什么处处都要针对我，我真的好累，想尽了一切办法要好好相处，确真的太难了，她嫉妒你，他不希望你好，她真的一点都不希望
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">33分钟前</div>
                        <a
                          data-id="5182381304"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182381304"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824429531607925448732"
                    class="itm"
                    data-id="5182442953"
                  >
                    <div class="head">
                      <a href="/user/home?id=1984192036"
                        ><img
                          src="https://p2.music.126.net/5gR7dod0xl1ExULlmi3vSg==/109951164721468383.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1984192036" class="s-fc7"
                            >想当声优的默存</a
                          >：加油吧，早些走出来，你可以往回看，但不能往回走
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=630651170"
                          >小Y同学喵</a
                        >：我长高了&nbsp;头发剪短了&nbsp;也变漂亮了&nbsp;认识你的时候是小学&nbsp;下学期我就要上高二啦&nbsp;我们有1500多天没有见面了&nbsp;你还记得我嘛
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">36分钟前</div>
                        <a
                          data-id="5182442953"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182442953"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824499111607925448732"
                    class="itm"
                    data-id="5182449911"
                  >
                    <div class="head">
                      <a href="/user/home?id=560521745"
                        ><img
                          src="https://p2.music.126.net/7orKkXbiIdbKaQ5By-Gq5w==/109951165401912665.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=560521745" class="s-fc7"
                            >霆有一科嵩4o4</a
                          >：我我我，发我求求了
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=1961446659"
                          >Zzzz_Hy_</a
                        >：有的
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">36分钟前</div>
                        <a
                          data-id="5182449911"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182449911"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824588601607925448732"
                    class="itm"
                    data-id="5182458860"
                  >
                    <div class="head">
                      <a href="/user/home?id=1984192036"
                        ><img
                          src="https://p2.music.126.net/5gR7dod0xl1ExULlmi3vSg==/109951164721468383.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1984192036" class="s-fc7"
                            >想当声优的默存</a
                          >：我也有个这样的女生....也许她在多年后再某个下午茶的时候想起来小时候的事，也许就这样随时间淡忘
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=630651170"
                          >小Y同学喵</a
                        >：我长高了&nbsp;头发剪短了&nbsp;也变漂亮了&nbsp;认识你的时候是小学&nbsp;下学期我就要上高二啦&nbsp;我们有1500多天没有见面了&nbsp;你还记得我嘛
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">37分钟前</div>
                        <a
                          data-id="5182458860"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182458860"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824081141607925448732"
                    class="itm"
                    data-id="5182408114"
                  >
                    <div class="head">
                      <a href="/user/home?id=548091798"
                        ><img
                          src="https://p2.music.126.net/ZyLpUG8UW4eo9o2Sj_bvuQ==/109951164654407808.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=548091798" class="s-fc7"
                            >阿璇Honey</a
                          >：我做了一个很短的梦&nbsp;梦里是高二&nbsp;广播里放着起风了&nbsp;你在校门口等了我五分钟
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">37分钟前</div>
                        <a
                          data-id="5182408114"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182408114"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824469261607925448732"
                    class="itm"
                    data-id="5182446926"
                  >
                    <div class="head">
                      <a href="/user/home?id=3395281309"
                        ><img
                          src="https://p2.music.126.net/zSxQ0BoEoNLQtYxyW75Isg==/109951165115209611.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=3395281309" class="s-fc7"
                            >怎样都有遗憾吧</a
                          >：我们都被困在18年的初夏了...
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">38分钟前</div>
                        <a
                          data-id="5182446926"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182446926"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824598491607925448732"
                    class="itm"
                    data-id="5182459849"
                  >
                    <div class="head">
                      <a href="/user/home?id=1961446659"
                        ><img
                          src="https://p1.music.126.net/aGu8ZBNKxDxBiLe8huQWpQ==/109951164874819741.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1961446659" class="s-fc7"
                            >Zzzz_Hy_</a
                          >：有的
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=1634968888"
                          >世事1810</a
                        >：有没有原版，真的不想忘记
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">41分钟前</div>
                        <a
                          data-id="5182459849"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182459849"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824577681607925448732"
                    class="itm"
                    data-id="5182457768"
                  >
                    <div class="head">
                      <a href="/user/home?id=1634968888"
                        ><img
                          src="https://p1.music.126.net/bHsiciynXpM23s_hDqZEMg==/109951163624059649.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1634968888" class="s-fc7"
                            >世事1810</a
                          >：有没有原版，真的不想忘记
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">54分钟前</div>
                        <a
                          data-id="5182457768"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182457768"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51823980191607925448732"
                    class="itm"
                    data-id="5182398019"
                  >
                    <div class="head">
                      <a href="/user/home?id=1654523631"
                        ><img
                          src="https://p1.music.126.net/TpnnxeTx1kKEH4dZZNd9Dg==/109951165541201798.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1654523631" class="s-fc7"
                            >我睡著了嗎</a
                          >：大家希望的重启2020只剩下16天了。
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">58分钟前</div>
                        <a
                          data-id="5182398019"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182398019"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824557371607925448732"
                    class="itm"
                    data-id="5182455737"
                  >
                    <div class="head">
                      <a href="/user/home?id=1834894954"
                        ><img
                          src="https://p1.music.126.net/T7hZ2vQdSP5yyDD4ISVqeQ==/109951165506062482.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1834894954" class="s-fc7"
                            >醋王_meet</a
                          >：求
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=1600567809"
                          >终焉TpC鬼神</a
                        >：私信我，我发给你
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">59分钟前</div>
                        <a
                          data-id="5182455737"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182455737"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824308301607925448732"
                    class="itm"
                    data-id="5182430830"
                  >
                    <div class="head">
                      <a href="/user/home?id=1884160171"
                        ><img
                          src="https://p1.music.126.net/HR650PNyIE5VhVFaemoSCA==/109951164650519570.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=1884160171" class="s-fc7"
                            >长沙彭于晏啊</a
                          >：你也牛逼
                        </div>
                      </div>
                      <div class="que f-brk f-pr s-fc3">
                        <span class="darr"
                          ><i class="bd">◆</i><i class="bg">◆</i></span
                        ><a class="s-fc7" href="/user/home?id=1670758889"
                          >浅色年华__2qht</a
                        >：牛逼呀
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12:51</div>
                        <a
                          data-id="5182430830"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (1)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182430830"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51823457251607925448732"
                    class="itm"
                    data-id="5182345725"
                  >
                    <div class="head">
                      <a href="/user/home?id=3317905960"
                        ><img
                          src="https://p1.music.126.net/2HKffpUNrD9SWQVDBhQ31A==/109951165485598090.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=3317905960" class="s-fc7"
                            >芊芊_l0eJ</a
                          >：两年了嘛……
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12:48</div>
                        <a
                          data-id="5182345725"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182345725"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    id="51824198211607925448732"
                    class="itm"
                    data-id="5182419821"
                  >
                    <div class="head">
                      <a href="/user/home?id=550359567"
                        ><img
                          src="https://p1.music.126.net/u6ky_7uTVYeAN-HO86ul5A==/19241453486341195.jpg?param=50y50"
                      /></a>
                    </div>
                    <div class="cntwrap">
                      <div class="">
                        <div class="cnt f-brk">
                          <a href="/user/home?id=550359567" class="s-fc7"
                            >审美一定要跟上我</a
                          >：再热情的希望，经历春夏秋之后，到冬天也冷了。
                        </div>
                      </div>
                      <div class="rp">
                        <div class="time s-fc4">12:42</div>
                        <a
                          data-id="5182419821"
                          data-type="like"
                          href="javascript:void(0)"
                          ><i class="zan u-icn2 u-icn2-12"></i> (2)</a
                        ><span class="sep">|</span
                        ><a
                          href="javascript:void(0)"
                          class="s-fc3"
                          data-id="5182419821"
                          data-type="reply"
                          >回复</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="j-flag auto-1607925448735-parent">
                  <div class="auto-1607925448735 u-page">
                    <a
                      href="#"
                      class="zbtn zprv js-p-1607925448732 js-disabled"
                      id="auto-id-lpFyMB59zE3wTacV"
                      >上一页</a
                    ><a
                      href="#"
                      class="zpgi zpg1 js-i-1607925448732 js-selected"
                      id="auto-id-8439qvpbwVK1IfgI"
                      >1</a
                    ><a
                      href="#"
                      class="zpgi zpg2 js-i-1607925448732"
                      id="auto-id-1IIwH5FOgDHTWVzP"
                      >2</a
                    ><a
                      href="#"
                      class="zpgi zpg3 js-i-1607925448732"
                      id="auto-id-IewQfTBbhsUgvsTE"
                      >3</a
                    ><a
                      href="#"
                      class="zpgi zpg4 js-i-1607925448732"
                      id="auto-id-kalQv1nRna0RTBAn"
                      >4</a
                    ><a
                      href="#"
                      class="zpgi zpg5 js-i-1607925448732"
                      id="auto-id-3wh5UExcXLUPRZCt"
                      >5</a
                    ><a
                      href="#"
                      class="zpgi zpg6 js-i-1607925448732"
                      id="auto-id-Sk25KENfi4hRNG2q"
                      >6</a
                    ><a
                      href="#"
                      class="zpgi zpg7 js-i-1607925448732"
                      id="auto-id-4nuitCaOF38wLX85"
                      >7</a
                    ><a
                      href="#"
                      class="zpgi zpg8 js-i-1607925448732"
                      id="auto-id-H90XcytOEx317Z0D"
                      >8</a
                    ><span class="zdot">...</span
                    ><a
                      href="#"
                      class="zpgi zpg9 js-i-1607925448732"
                      id="auto-id-AzVODgRS2TMJG3Bq"
                      >22564</a
                    ><a
                      href="#"
                      class="zbtn znxt js-n-1607925448732"
                      id="auto-id-lZK8rZDWa7nqC43L"
                      >下一页</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <!-- <div class="g-sd4">
      <div class="g-wrap7">
        <div id="j-music-ad" class="m-sidead f-hide" data-has-music-ad="0">
          <div class="j-flag f-hide" id="auto-id-dB8vXSuHnkd51OsW"></div>
          <div class="f-hide j-flag">
            <ins
              class="adsbydm"
              inner-prod="adbid"
              inner-width="200"
              inner-height="220"
              inner-src="https://iad.g.163.com/wa/ad?site=netease&amp;affiliate=music&amp;cat=detail&amp;type=logo200x220&amp;location=1"
              check-src="https://iad.g.163.com/wa/ad_check?site=netease&amp;affiliate=music&amp;cat=detail&amp;type=logo200x220&amp;location=1"
            ></ins>
          </div>
        </div>
        <h3 class="u-hd3">
          <span class="f-fl">包含这首歌的歌单</span>
        </h3>
        <ul class="m-rctlist f-cb">
          <li>
            <div class="cver u-cover u-cover-3">
              <a
                href="/playlist?id=2438292020"
                title="听说你也在找好听的华语歌"
                data-res-id="2438292020"
                data-res-type="13"
                data-res-action="log"
                data-res-data="recommendclick|0||song-playlist-recommend|1330348068"
                ><img
                  src="http://p2.music.126.net/Fs0DjAvcAAyAZa1dgXzFfQ==/109951163571833739.jpg?param=50y50"
                />
              </a>
            </div>
            <div class="info">
              <p class="f-thide">
                <a
                  class="sname f-fs1 s-fc0"
                  href="/playlist?id=2438292020"
                  title="听说你也在找好听的华语歌"
                  data-res-id="2438292020"
                  data-res-type="13"
                  data-res-action="log"
                  data-res-data="recommendclick|0||song-playlist-recommend|1330348068"
                  >听说你也在找好听的华语歌</a
                >
              </p>
              <p>
                <span class="by s-fc4">by</span
                ><a
                  class="nm nm f-thide s-fc3"
                  href="/user/home?id=493707309"
                  title="鹿白川"
                  >鹿白川</a
                >
              </p>
            </div>
          </li>
          <li>
            <div class="cver u-cover u-cover-3">
              <a
                href="/playlist?id=2578068117"
                title="2018年度最热新歌TOP100"
                data-res-id="2578068117"
                data-res-type="13"
                data-res-action="log"
                data-res-data="recommendclick|1||song-playlist-recommend|1330348068"
                ><img
                  src="http://p2.music.126.net/6Dnpnv9pi30ix2LuoNU1IQ==/109951163755515426.jpg?param=50y50"
                />
              </a>
            </div>
            <div class="info">
              <p class="f-thide">
                <a
                  class="sname f-fs1 s-fc0"
                  href="/playlist?id=2578068117"
                  title="2018年度最热新歌TOP100"
                  data-res-id="2578068117"
                  data-res-type="13"
                  data-res-action="log"
                  data-res-data="recommendclick|1||song-playlist-recommend|1330348068"
                  >2018年度最热新歌TOP100</a
                >
              </p>
              <p>
                <span class="by s-fc4">by</span
                ><a
                  class="nm nm f-thide s-fc3"
                  href="/user/home?id=1"
                  title="网易云音乐"
                  >网易云音乐</a
                >
              </p>
            </div>
          </li>
          <li>
            <div class="cver u-cover u-cover-3">
              <a
                href="/playlist?id=2232237850"
                title="耳朵喜欢你 好听到可以单曲循环"
                data-res-id="2232237850"
                data-res-type="13"
                data-res-action="log"
                data-res-data="recommendclick|2||song-playlist-recommend|1330348068"
                ><img
                  src="http://p2.music.126.net/Y-xCoGkrYBc_tezzNDeJ6g==/109951164209203442.jpg?param=50y50"
                />
              </a>
            </div>
            <div class="info">
              <p class="f-thide">
                <a
                  class="sname f-fs1 s-fc0"
                  href="/playlist?id=2232237850"
                  title="耳朵喜欢你 好听到可以单曲循环"
                  data-res-id="2232237850"
                  data-res-type="13"
                  data-res-action="log"
                  data-res-data="recommendclick|2||song-playlist-recommend|1330348068"
                  >耳朵喜欢你 好听到可以单曲循环</a
                >
              </p>
              <p>
                <span class="by s-fc4">by</span
                ><a
                  class="nm nm f-thide s-fc3"
                  href="/user/home?id=493707309"
                  title="鹿白川"
                  >鹿白川</a
                >
              </p>
            </div>
          </li>
        </ul>
        <h3 class="u-hd3">
          <span class="f-fl">相似歌曲</span>
        </h3>
        <ul class="m-sglist f-cb">
          <li></li>
          <li class="f-cb">
            <div class="txt">
              <div class="f-thide">
                <a
                  href="/song?id=1363948882"
                  title="世间美好与你环环相扣"
                  class="s-fc1"
                  data-res-id="1363948882"
                  data-res-type="18"
                  data-res-action="log"
                  data-res-data="recommendclick|0||song-song-recommend|1330348068"
                  >世间美好与你环环相扣</a
                >
              </div>
              <div class="f-thide s-fc4">
                <span title="柏松"
                  ><a class="s-fc4" href="/artist?id=31876221">柏松</a></span
                >
              </div>
            </div>
            <div class="opr f-cb">
              <a
                data-res-action="play"
                data-res-id="1363948882"
                data-res-type="18"
                class="play"
                href="javascript:;"
              ></a>
              <a
                data-res-action="addto"
                data-res-id="1363948882"
                data-res-type="18"
                class="add"
                href="javascript:;"
              ></a>
            </div>
          </li>

          <li></li>
          <li class="f-cb">
            <div class="txt">
              <div class="f-thide">
                <a
                  href="/song?id=1398663411"
                  title="冬眠"
                  class="s-fc1"
                  data-res-id="1398663411"
                  data-res-type="18"
                  data-res-action="log"
                  data-res-data="recommendclick|1||song-song-recommend|1330348068"
                  >冬眠</a
                >
              </div>
              <div class="f-thide s-fc4">
                <span title="司南"
                  ><a class="s-fc4" href="/artist?id=28863695">司南</a></span
                >
              </div>
            </div>
            <div class="opr f-cb">
              <a
                data-res-action="play"
                data-res-id="1398663411"
                data-res-type="18"
                class="play"
                href="javascript:;"
              ></a>
              <a
                data-res-action="addto"
                data-res-id="1398663411"
                data-res-type="18"
                class="add"
                href="javascript:;"
              ></a>
            </div>
          </li>

          <li></li>
          <li class="f-cb">
            <div class="txt">
              <div class="f-thide">
                <a
                  href="/song?id=1344897943"
                  title="你是人间四月天"
                  class="s-fc1"
                  data-res-id="1344897943"
                  data-res-type="18"
                  data-res-action="log"
                  data-res-data="recommendclick|2||song-song-recommend|1330348068"
                  >你是人间四月天</a
                >
              </div>
              <div class="f-thide s-fc4">
                <span title="邵帅"
                  ><a class="s-fc4" href="/artist?id=29392693">邵帅</a></span
                >
              </div>
            </div>
            <div class="opr f-cb">
              <a
                data-res-action="play"
                data-res-id="1344897943"
                data-res-type="18"
                class="play"
                href="javascript:;"
              ></a>
              <a
                data-res-action="addto"
                data-res-id="1344897943"
                data-res-type="18"
                class="add"
                href="javascript:;"
              ></a>
            </div>
          </li>

          <li></li>
          <li class="f-cb">
            <div class="txt">
              <div class="f-thide">
                <a
                  href="/song?id=493735012"
                  title="无人之岛"
                  class="s-fc1"
                  data-res-id="493735012"
                  data-res-type="18"
                  data-res-action="log"
                  data-res-data="recommendclick|3||song-song-recommend|1330348068"
                  >无人之岛</a
                >
              </div>
              <div class="f-thide s-fc4">
                <span title="任然"
                  ><a class="s-fc4" href="/artist?id=9255">任然</a></span
                >
              </div>
            </div>
            <div class="opr f-cb">
              <a
                data-res-action="play"
                data-res-id="493735012"
                data-res-type="18"
                class="play"
                href="javascript:;"
              ></a>
              <a
                data-res-action="addto"
                data-res-id="493735012"
                data-res-type="18"
                class="add"
                href="javascript:;"
              ></a>
            </div>
          </li>

          <li></li>
          <li class="f-cb">
            <div class="txt">
              <div class="f-thide">
                <a
                  href="/song?id=1436709403"
                  title="夏天的风"
                  class="s-fc1"
                  data-res-id="1436709403"
                  data-res-type="18"
                  data-res-action="log"
                  data-res-data="recommendclick|4||song-song-recommend|1330348068"
                  >夏天的风</a
                >
              </div>
              <div class="f-thide s-fc4">
                <span title="火羊瞌睡了"
                  ><a class="s-fc4" href="/artist?id=34522800"
                    >火羊瞌睡了</a
                  ></span
                >
              </div>
            </div>
            <div class="opr f-cb">
              <a
                data-res-action="play"
                data-res-id="1436709403"
                data-res-type="18"
                class="play"
                href="javascript:;"
              ></a>
              <a
                data-res-action="addto"
                data-res-id="1436709403"
                data-res-type="18"
                class="add"
                href="javascript:;"
              ></a>
            </div>
          </li>
        </ul>
        <div class="m-multi">
          <h3 class="u-hd3">
            <span class="f-fl">网易云音乐多端下载</span>
          </h3>
          <ul class="bg f-cb">
            <li>
              <a
                href="https://itunes.apple.com/cn/app/id590338362"
                class="ios"
                hidefocus="true"
                target="_blank"
                >iPhone</a
              >
            </li>
            <li>
              <a
                href="https://music.163.com/api/pc/download/latest"
                class="pc"
                hidefocus="true"
                target="_blank"
                >PC</a
              >
            </li>
            <li>
              <a
                href="https://music.163.com/api/android/download/latest2"
                class="aos"
                hidefocus="true"
                target="_blank"
                >Android</a
              >
            </li>
          </ul>
          <p class="s-fc4">同步歌单，随时畅听320k好音乐</p>
        </div>
        <a href="/#/wiki/song?songId=1330348068" target="_blank"
          >补充或修改歌曲资料&gt;</a
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Song",
  data() {
    return {
      SongDetails: [], // 歌曲详情
      singer: "", // 歌手名字
    };
  },
  methods: {
    getSongDetails() {
      let id = this.$route.query.id;
      const params = {
        ids: id,
      };
      api.SongDetails(params).then((res) => {
        // console.log(res);
        this.SongDetails = res.songs[0];
        for (let i = 0; i < this.SongDetails.ar.length - 1; i++) {
          this.singer = this.singer + this.SongDetails.ar[i].name + " / ";
        }
        this.singer =
          this.singer +
          this.SongDetails.ar[this.SongDetails.ar.length - 1].name;
      });
    },
    GetMusicUrl() {
      const params = {
        id: this.$route.query.id,
      };
      api.MusicUrl(params).then((res) => {
        // console.log(res);
        this.$store.commit("modifyUrl", res.data[0].url);
      });
    },
  },
  mounted() {
    this.getSongDetails();
  },
};
</script>

<style lang="less">
.m-lycifo .cvrwrap {
  float: left;
  width: 206px;
  margin-right: -226px;
}
.u-cover .msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.u-cover-6 .msk {
  width: 206px;
  height: 205px;
  top: -4px;
  left: -4px;
  background-position: -140px -580px;
}
.m-lycifo .cvrwrap .out {
  float: left;
  margin: 20px 0 0 46px;
}
.m-lycifo .des {
  margin: 10px 0;
}
.m-lycifo .cvrwrap .des {
  text-decoration: underline;
}
.m-lycifo .cnt {
  float: right;
  width: 414px;
}

.m-lycifo .hd .lab {
  float: left;
}
.m-lycifo .tit {
  margin-left: 64px;
  position: relative;
  top: -6px;
  font-size: 24px;
}
.m-lycifo .tit * {
  vertical-align: middle;
}
.m-lycifo .tit em {
  margin-right: 7px;
}
.m-lycifo .des {
  margin: 10px 0;
}
.m-lycifo .des span {
  color: #333;
}
.m-info .btns {
  margin-bottom: 25px;
  margin-right: -10px;
}
.u-btni-addply .ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  background-position: 0 -1622px;
  overflow: hidden;
}
.m-info .btns2 .u-btni,
.m-info .btns .u-btni {
  margin-right: 6px;
  font-family: simsun, \5b8b\4f53;
}
.m-info .btns .u-btni-add {
  margin-right: 5px;
}
.m-lycifo .bd {
  height: 299px;
  margin-top: 13px;
  line-height: 23px;
}
.m-lycifo .bd-open {
  height: auto;
}
</style>