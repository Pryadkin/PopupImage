
const popup_gallery = (function(){

  let
    $li = $('.popup-gallery__list-item'),
    $links = $li.find(' > a'),
    $lightbox = $('.lightbox'),
    $overlay = $('.lightbox__overlay'),
    $prev = $('.lightbox__prev'),
    $next = $('.lightbox__next'),
    targetImg,
    liIndex,
    images =[];

  // Preload image - Start
  for(let i = 0; i < $links.length; i++){
    images[i] = new Image();
    images[i].src = 'img-popup/' + ++i + '-lg.jpg';
  };
  // Preload image - End

  let setImg = function(src){
    $lightbox.find('img').attr('src', src);
  };

  let getImg = function(index){
    return $li.eq(index).find('> a').attr('href');
  };

  $links.click(function(e){
    e.preventDefault();
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    setImg(targetImg);
    $lightbox.fadeIn(150);
  });

  $overlay.click(function(){
    $lightbox.fadeOut(150);
  });

  $next.click(function(){
    if((liIndex) < $links.length - 1){
      targetImg = getImg(++liIndex);
      setImg(targetImg);
    } else {
      targetImg = getImg(0);
      liIndex = 0;
      setImg(targetImg);
    }
  });

  $prev.click(function(){
    if((liIndex) > 0){
      targetImg = getImg(--liIndex);
      setImg(targetImg);
    } else {
      targetImg = getImg($links.length - 1);
      liIndex = $links.length - 1;
      setImg(targetImg);
    }
  });

}()); // popup_gallery - End;
