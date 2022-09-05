$(function () {
  $('.ac').css("display", "none");
  $('.ac-grand').on('click', function () {
    // openクラスをつける
    $(this).toggleClass('open', 800);
    // クリックされていないac-parentのopenクラスを取る
    $('.ac-grand').not(this).removeClass("open");
    $(this).next().slideToggle();
    // 他を開くと全て閉じる
    $('.ac-grand').not($(this)).next('.ac').slideUp(); $('.ac-parent').not($(this)).next('.ac-child').slideUp();    $('.ac-child__item').not($(this)).next('.ac-child__description').slideUp();


  })
  $('.ac-child').css("display", "none");
  $('.ac-parent').on('click', function () {
    // openクラスをつける
    $(this).toggleClass('open', 800);
    // クリックされていないac-parentのopenクラスを取る
    $(".ac-parent").not(this).removeClass("open");
    $(this).next().slideToggle();
    $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  })
  // 下層メニューの制御
  $('.ac-child__description').css("display", "none");
  $('.ac-child__item').on('click', function () {
    $(this).next().slideToggle();
    $('.ac-child__item').not($(this)).next('.ac-child__description').slideUp();
    //openクラスをつける
    $(this).toggleClass('open', 800);
    //クリックされていないac-parentのopenクラスを取る
    $(".ac-child__item").not(this).removeClass("open");
  })
});

//タブ用のjs
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}