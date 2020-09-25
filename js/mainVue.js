// 오늘 날짜
let date = new Date(),
    year     = date.getFullYear(),
    month    = date.getMonth() + 1,
    day      = date.getDate();

if (month < 10) { month = '0' + month; }
if (day < 10)   { day = '0' + day; }
let fulldate =  year + '.' + month + '.' + day;

Vue.component('portfolio-items', {
    props : ['items'],
    template :
    	'<li>' +
			'<a :href="items.link">' +
				'<div class="ico_wrap">' +
					'<span class="ico new" v-if="items.new">NEW</span>' +
					'<span class="ico">{{ items.type }}</span>' +
					'<span class="ico">{{ items.leng }}</span>' +
				'</div>' +
				'<img :src="items.imgSrc" :alt="items.title" />' +
				'<div class="over">' +
					'<p class="tit">' +
						'<em v-html="items.title"></em>' +
						'<span class="date">{{ items.date }}</span>' +
					'</p>' +
					'<span class="more">자세히보기</span>' +
				'</div>' +
			'</a>' +
		'</li>'
});

new Vue({
    el: '#wrap',
    data: {
        portfolio:[
            {
                gubun : "y2018 y2019 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2018.08.01 ~ "+fulldate+" ",
                link : "detail/mobile/m_finnq_app_v2.html",
                imgSrc : "img/portfolio/finnq_m.jpg",
                title : "Finnq<br />모바일 앱 서비스 운영",
                sch : "2018 finnq 핀크 mobile app 앱"
            },
            {
                gubun : "y2018 y2019 ui w r",
                type : "Responsive",
                leng : "KOR",
                new : false,
                date : "2018.08.01 ~ "+fulldate+" ",
                link : "detail/web/w_finnq_v2.html",
                imgSrc : "img/portfolio/finnq_w.jpg",
                title : "Finnq<br />웹 서비스 2.0 운영",
                sch : "2018 finnq 핀크 web responsive 반응형 웹 홈페이지"
            },
            {
                gubun : "y2017 p2018 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2017.11.10 ~ "+ "2018.07.31",
                link : "detail/web/w_kebhana_open.html",
                imgSrc : "img/portfolio/kebhana_w_open.jpg",
                title : "KEB 하나은행<br />기업뱅킹 고도화 구현",
                sch : "2017 KEB 하나은행 기업뱅킹 hanabank web 웹 홈페이지"
            },
            {
                gubun : "y2018 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2018.01.08 ~ "+ "2018.06.29",
                link : "detail/mobile/m_hana_app.html",
                imgSrc : "img/portfolio/kebhana_m_app.jpg",
                title : "KEB 하나은행<br /> 1Q bank 기업",
                sch : "2018 KEB 하나은행 1Q hanabank 기업 mobile 모바일"
            },
            {
                gubun : "y2017 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2017.08.07 ~ "+ "2017.11.09",
                link : "detail/web/w_kebhana_company2.html",
                imgSrc : "img/portfolio/kebhana_w_com2.jpg",
                title : "KEB 하나은행<br />기업뱅킹 서비스 운영",
                sch : "2017 KEB 하나은행 1Q hanabank 기업뱅킹 운영 web 웹 홈페이지"
            },
            {
                gubun : "y2017 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2017.02.27 ~ 2017.08.06",
                link : "detail/web/w_kebhana_combine.html",
                imgSrc : "img/portfolio/kebhana_w_combine.jpg",
                title : "KEB 하나은행<br /> CBS / CBS Light 통합개편",
                sch : "2017 KEB 하나은행 1Q CBS / CBS Light hanabank 통합개편 web 웹 홈페이지"
            },
            {
                gubun : "y2017 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2017.01.11 ~ 2017.02.24",
                link : "detail/web/w_kebhana_company.html",
                imgSrc : "img/portfolio/kebhana_w_com.jpg",
                title : "KEB 하나은행<br />기업뱅킹 서비스 운영",
                sch : "2017 KEB 하나은행 1Q hanabank 기업뱅킹 운영 web 웹 홈페이지"
            },
            {
                gubun : "y2016 p2017 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2016.06.27 ~ 2017.01.06",
                link : "detail/web/w_mirae.html",
                imgSrc : "img/portfolio/mirae_w.jpg",
                title : "미래에셋대우<br /> 채널통합 TFT 시스템",
                sch : "2016 미래에셋대우 miraeasset daewoo TFT web 웹 홈페이지"
            },
            {
                gubun : "y2016 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2016.04.11 ~ 2016.06.03",
                link : "detail/web/w_kebhana.html",
                imgSrc : "img/portfolio/kebhana_w.jpg",
                title : "KEB 하나은행<br /> 웹사이트 통합개편",
                sch : "2016 KEB 하나은행 hanabank web 웹 홈페이지"
            },
            {
                gubun : "y2015 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2015.08.31 ~ 2015.12.30",
                link : "detail/web/w_han.html",
                imgSrc : "img/portfolio/han_w.jpg",
                title : "한국수력원자력<br /> 웹 사이트 통합개편",
                sch : "2015 한국수력원자력 한수원 web 웹 홈페이지"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.08.31 ~ 2015.12.30",
                link : "detail/mobile/m_han.html",
                imgSrc : "img/portfolio/han_m.jpg",
                title : "한국수력원자력<br /> 웹 사이트 통합개편",
                sch : "2015 한국수력원자력 한수원 mobile 모바일"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_tgif.html",
                imgSrc : "img/portfolio/tgif_m.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 TGI FRIDAYS",
                sch : "2015 롯데리아 moblie tgi fridays mobile 티지아이 티쥐아이"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "ENG",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_tgif_e.html",
                imgSrc : "img/portfolio/tgif_m_e.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 TGI FRIDAYS",
                sch : "2015 롯데리아 moblie tgi fridays mobile 티지아이 티쥐아이"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_angel.html",
                imgSrc : "img/portfolio/angel_m.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 엔제리너스 커피",
                sch : "2015 롯데리아 모바일 웹 엔제리너스 커피 mobile"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "ENG",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_angel_e.html",
                imgSrc : "img/portfolio/angel_m_e.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 엔제리너스 커피",
                sch : "2015 롯데리아 모바일 웹 엔제리너스 커피 mobile angel coffee"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_lotteria.html",
                imgSrc : "img/portfolio/lotteria_m.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 롯데리아",
                sch : "2015 롯데리아 모바일 웹 롯데리아 mobile lotteria"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_natuur.html",
                imgSrc : "img/portfolio/natuur_m.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 나뚜루 팝",
                sch : "2015 모바일 웹 나뚜루 팝 mobile natuur"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.05.26 ~ 2015.08.14",
                link : "detail/mobile/m_krispy.html",
                imgSrc : "img/portfolio/krispy_m.jpg",
                title : "롯데리아 5개 브랜드<br /> 모바일 웹 구축 크리스피 크림 도넛",
                sch : "2015 모바일 크리스피 크림 도넛 mobile krispy"
            },
            {
                gubun : "y2015 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2015.02.16 ~ 2015.04.22",
                link : "detail/web/w_benecol.html",
                imgSrc : "img/portfolio/benecol_w.jpg",
                title : "롯데푸드 파스퇴르 베네콜",
                sch : "2015 롯데푸드 파스퇴르 베네콜 web benecol 홈페이지 웹"
            },
            {
                gubun : "y2015 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2015.01.05 ~ 2015.02.06",
                link : "detail/mobile/m_adcap.html",
                imgSrc : "img/portfolio/adcapsule_m.jpg",
                title : "애드캡슐소프트<br /> 홈페이지 개편",
                sch : "2015 애드캡슐소프트 mobile adcapsule 홈페이지 웹"
            },
            {
                gubun : "y2014 ui r",
                type : "Responsive",
                leng : "KOR",
                new : false,
                date : "2014.08.11 ~ 2014.12.26",
                link : "detail/web/w_samsung.html",
                imgSrc : "img/portfolio/samsung_stock_r.jpg",
                title : "삼성증권 홈페이지 개편",
                sch : "2014 삼성증권 responsive 홈페이지 웹 반응형"
            },
            {
                gubun : "y2014 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2014.06.02 ~ 2014.06.27",
                link : "detail/web/w_lotte_leader.html",
                imgSrc : "img/portfolio/lotte_leader_w.jpg",
                title : "롯데 리더그룹<br />리더역량 평가 시스템",
                sch : "2014 롯데 리더그룹 리더역량 평가 시스템 web 홈페이지 웹"
            },
            {
                gubun : "y2014 ui m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2014.05.12 ~ 2014.05.30",
                link : "detail/mobile/m_kloudbeer.html",
                imgSrc : "img/portfolio/kloud_m.jpg",
                title : "클라우드 맥주 브랜드 사이트",
                sch : "2014 클라우드 맥주 롯데주류 mobile 모바일"
            },
            {
                gubun : "y2014 ui w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2014.03.03 ~ 2014.05.02",
                link : "detail/web/w_namdong_k.html",
                imgSrc : "img/portfolio/kosep_w_kr.jpg",
                title : "한국남동발전<br /> 인터넷 웹 서비스 개선",
                sch : "2014 한국남동발전 web 웹"
            },
            {
                gubun: "p2014 ui w",
                type: "WEB",
                leng: "ENG",
                new: false,
                date: "2014.03.03 ~ 2014.05.02",
                link: "detail/web/w_namdong_e.html",
                imgSrc: "img/portfolio/kosep_w_en.jpg",
                title: "한국남동발전<br /> 인터넷 웹 홈페이지 서비스 개선",
                sch : "2014 한국남동발전 web 웹"
            },
            {
                gubun : "y2013 dev w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2013.04.24 ~ 2013.07.31",
                link : "detail/web/w_lotte.html",
                imgSrc : "img/portfolio/lotte_w.jpg",
                title : "롯데카드 차세대 멤버스 홈페이지",
                sch : "2013 롯데카드 차세대 홈페이지 웹 web lottecard"
            },
            {
                gubun : "y2013 dev m",
                type : "MOBILE",
                leng : "KOR",
                new : false,
                date : "2013.04.24 ~ 2013.07.31",
                link : "detail/mobile/m_lotte.html",
                imgSrc : "img/portfolio/lotte_m.jpg",
                title : "롯데카드 차세대 모바일",
                sch : "2013 롯데카드 차세대 모바일 mobile lottecard"
            },
            {
                gubun : "y2013 dev w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2013.03.01 ~ 2013.03.28",
                link : "detail/web/w_dovol.html",
                imgSrc : "img/portfolio/doval_w.jpg",
                title : "청소년 자원봉사<br /> 활동정보서비스",
                sch : "2013 청소년 자원봉사 활동정보서비스 웹 web 홈페이지"
            },
            {
                gubun : "y2013 dev w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2012.10.01 ~ 2013.02.28",
                link : "detail/web/w_mofat.html",
                imgSrc : "img/portfolio/mofat_w.jpg",
                title : "외교통상부<br /> 통합문서 관리 시스템",
                sch : "2013 외교통상부 통합문서 관리 시스템 웹 web"
            },
            {
                gubun : "y2012 dev w",
                type : "WEB",
                leng : "KOR",
                new : false,
                date : "2010.04.12 ~ 2012.02.01",
                link : "detail/web/w_ramada.html",
                imgSrc : "img/portfolio/ramada_w.jpg",
                title : "Ramada HOTEL Casino<br /> 웹 사이트 운영",
                sch : "2012 Ramada hotel Casino 웹 운영 web 라마다 카지노 호텔 홈페이지"
            }
        ],
        query : '',
        sort : 'all',
        total : ''
    },
    methods:{
        sortChange: function ()
        {
            let evtTagert = this.sort;
            $('#wrap.main .port__list li').css({'display' : 'block'});

            if (evtTagert == 'all') { $('#wrap.main .port__list li').css({ 'display' : 'block' }); }
            else { $('#wrap.main .port__list li').not( 'li.'+ evtTagert +'' ).css({'display' : 'none'}); }

            $('#wrap').after( '<div class="mask loading">암막효과 Layer</div>' );
            $('.mask').css({
                width : $(window).width(),
                height : $(window).height(),
                opacity : .8
            });

            setTimeout(function(){
                $('.mask').remove();
            },300)
        }, //sortChange
    }, // methods
    computed:
    {
        searching: function ()
        {
            let query = this.query.toLowerCase();

            if(query == undefined || query == "") {
                return;
            }

            return this.portfolio.filter(function (items, idx) {
                return items.sch.includes(query)
            });
        } // searching
    } // computed
});
