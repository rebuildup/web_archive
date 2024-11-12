gsap.registerPlugin(ScrollTrigger);

function scrollfunc() {
  const barTl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
  barTl.fromTo(".header-line_inner", { width: 0 }, { width: "100%" });
}
window.onload = () => {
  scrollfunc();
};

/*
https://zenn.dev/frontendflat/articles/94c403e9af89ab
// set アニメーション対象要素の初期値を指定
const firstPosition = {
  x: 100, 
  y: 100, 
}
gsap.set('.box', {
  x: firstPosition.x, //x軸を100px移動
  y: firstPosition.y, //y軸を100px移動
})

// to アニメーション終了時の状態を指定
gsap.to('.box', 1, {
 // // x, y 100px移動した状態で終了
  x: 100, 
  y: 100, 
})

// from アニメーション開始時の状態を指定
gsap.from('.box', 1, {
  // x, y 100px移動した状態で開始
  x: 100,
  y: 100,
})

// fromTo アニメーション開始時と終了時の状態を指定
gsap.fromTo('.box', 1,
  // x, y -100px移動した状態で開始
  {
    x: -100,
    y: -100,
  },
  // x, y 100px移動した状態で終了
  {
    x: 100,
    y: 100,
  }
)
*/