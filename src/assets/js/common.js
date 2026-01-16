// $(function() {
jQuery(function ($) {
	/* --------------------
  GLOBAL VARIABLE
  --------------------- */
	// Selector
	// var $pageTop = $('.js-pageTop');

	// Init Value
	var breakpointSP = 767,
		breakpointTB = 1050,
		wWindow = $(window).outerWidth();

	/* --------------------
  FUNCTION COMMON
  --------------------- */
	// Setting anchor link
	var anchorLink = function () {
		// Scroll to section
		$('a[href^="#"]')
			.not("a[class*='carousel-control-']")
			.click(function () {
				var href = $(this).attr("href");
				var hash = href == "#" || href == "" ? "html" : href;
				var position = $(hash).offset().top;
				$("body,html")
					.stop()
					.animate({ scrollTop: position - 0 }, 1000);
				return false;
			});
	};

	// Animation on scroll
	var scrollLoad = function () {
		var scroll = $(this).scrollTop();
		$(".ani").each(function () {
			var elemPos = $(this).offset().top;
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100) {
				setTimeout(() => {
					$(this).addClass("in");
				}, 50);
			}
		});
	};

	// Animation on scroll
	var scrollLoad2 = function () {
		var scroll2 = $(this).scrollTop();
		$(".ani-later").each(function () {
			var elemPos2 = $(this).offset().top;
			var windowHeight2 = $(window).height();
			if (scroll2 > elemPos2 - windowHeight2 + 500) {
				$(this).addClass("in");
			}
		});
	};

	var matchHeight = function () {
		var $elem01 = $(".matchHeight");
		if ($elem01.length) {
			$elem01.matchHeight();
		}
	};

	// hamburger
	var hamburger = function () {
		$("#hamburger").on("click", function () {
			$(this).find("#line1").toggleClass("active");
			$(this).find("#line2").toggleClass("active");
			$(this).find("#line3").toggleClass("active");
			$(this).toggleClass("active");
			$(this).next("#hamburger-menu").toggleClass("active");
			$("body").toggleClass("noscroll");
			$(".l-header").toggleClass("beige");
		});
		$("#hamburger-menu a").on("click", function () {
			$("#hamburger #line1").removeClass("active");
			$("#hamburger #line2").removeClass("active");
			$("#hamburger #line3").removeClass("active");
			$("#hamburger").removeClass("active");
			$("#hamburger-menu").removeClass("active");
			$("body").removeClass("noscroll");
			$(".l-header").removeClass("beige");
		});
	};

	// フェードで1つずつ表示させる
	var leftfadein = function () {
		$(".lfin").each(function () {
			var lfin = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < lfin.length; i++) {
				var span = $("<span />").addClass("chara").text(lfin[i]); // 各文字をspanに
				span.css("animation-delay", i * 0.08 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});
		$(".lfin2").each(function () {
			var lfin2 = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < lfin2.length; i++) {
				var span = $("<span />").addClass("chara").text(lfin2[i]); // 各文字をspanに
				span.css("animation-delay", 0.8 + i * 0.08 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});

		$(".lfinsp2").each(function () {
			var lfinsp2 = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < lfinsp2.length; i++) {
				var span = $("<span />").addClass("chara").text(lfinsp2[i]); // 各文字をspanに
				span.css("animation-delay", 0.5 + i * 0.08 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});
		$(".lfinsp3").each(function () {
			var lfinsp3 = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < lfinsp3.length; i++) {
				var span = $("<span />").addClass("chara").text(lfinsp3[i]); // 各文字をspanに
				span.css("animation-delay", 1.0 + i * 0.08 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});
		$(".lfinsp4").each(function () {
			var lfinsp4 = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < lfinsp4.length; i++) {
				var span = $("<span />").addClass("chara").text(lfinsp4[i]); // 各文字をspanに
				span.css("animation-delay", 1.5 + i * 0.08 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});
	};

	var eachCharaFU = function () {
		$(".eachCharaFU").each(function () {
			var content = $(this).text(); // コンテナ内のテキストを取得
			$(this).html(""); // コンテナをクリア
			for (var i = 0; i < content.length; i++) {
				var span = $("<span />").addClass("chara").text(content[i]); // 各文字をspanに
				span.css("animation-delay", i * 0.05 + "s"); // 0.5秒ごとの遅延を設定
				$(this).append(span); // コンテナにspanを追加
			}
		});
	};

	// タブ
	$(".tab_box .tab_btn").click(function () {
		var index = $(".tab_box .tab_btn").index(this);
		$(".tab_box .tab_btn, .tab_box .tab_panel").removeClass("active");
		$(this).addClass("active");
		$(".tab_box .tab_panel").eq(index).addClass("active");
	});

	// アコーディオン
	$(".ac-label").click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass("open");
		$(this).parent().toggleClass("openParent");
	});

	// 吸着お問い合わせボタン
	const footfix = $(".footfix");
	footfix.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			footfix.fadeIn();
		} else {
			footfix.fadeOut();
		}
	});

	//　スクロールしたらクラスを追加
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$(".l-header").addClass("fixed");
		} else {
			$(".l-header").removeClass("fixed");
		}
	});

	//MW WP Form スマホで入力時にテンキー（数字のキーボード）を表示
	$("input.tel").on("focus", function () {
		$(this).attr("inputmode", "tel");
	});

	//ドロップダウンナビの設定を関数でまとめる
	$(".has-second > a , .has-second .second").on({
		mouseenter: function () {
			var parentElem = $(this).parent(); // aタグから見た親要素のliを取得し
			$(parentElem).addClass("active"); //矢印方向を変えるためのクラス名を付与して
			$("body").addClass("blur"); //矢印方向を変えるためのクラス名を付与して
		},
		mouseleave: function () {
			var parentElem = $(this).parent(); // aタグから見た親要素のliを取得し
			$(parentElem).removeClass("active"); //矢印方向を変えるためのクラス名を付与して
			$("body").removeClass("blur"); //矢印方向を変えるためのクラス名を付与して
		},
	});
	$(".second-backbtn").on("click", function () {
		//has-secondクラスがついたaタグをクリックしたら
		$(".has-second").removeClass("active"); //矢印方向を変えるためのクラス名を付与して
	});

	/* --------------------
  INIT (WINDOW ON LOAD)
  --------------------- */
	// Run all script when DOM has loaded
	var init = function () {
		anchorLink();
		scrollLoad();
		scrollLoad2();
		matchHeight();
		hamburger();
		leftfadein();
		eachCharaFU();
	};

	init();

	/* --------------------
  WINDOW ON RESIZE
  --------------------- */
	$(window).resize(function () {
		wWindow = $(window).outerWidth();
	});

	/* --------------------
  WINDOW ON SCROLL
  --------------------- */
	$(window).scroll(function () {
		scrollLoad();
		scrollLoad2();
	});
});
