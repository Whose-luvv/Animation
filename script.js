function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./frames/male0001.png
     ./frames/male0002.png
     ./frames/male0003.png
     ./frames/male0004.png
     ./frames/male0005.png
     ./frames/male0006.png
     ./frames/male0007.png
     ./frames/male0008.png
     ./frames/male0009.png
     ./frames/male0010.png
     ./frames/male0011.png
     ./frames/male0012.png
     ./frames/male0013.png
     ./frames/male0014.png
     ./frames/male0015.png
     ./frames/male0016.png
     ./frames/male0017.png
     ./frames/male0018.png
     ./frames/male0019.png
     ./frames/male0020.png
     ./frames/male0021.png
     ./frames/male0022.png
     ./frames/male0023.png
     ./frames/male0024.png
     ./frames/male0025.png
     ./frames/male0026.png
     ./frames/male0027.png
     ./frames/male0028.png
     ./frames/male0029.png
     ./frames/male0030.png
     ./frames/male0031.png
     ./frames/male0032.png
     ./frames/male0033.png
     ./frames/male0034.png
     ./frames/male0035.png
     ./frames/male0036.png
     ./frames/male0037.png
     ./frames/male0038.png
     ./frames/male0039.png
     ./frames/male0040.png
     ./frames/male0041.png
     ./frames/male0042.png
     ./frames/male0043.png
     ./frames/male0044.png
     ./frames/male0045.png
     ./frames/male0046.png
     ./frames/male0047.png
     ./frames/male0048.png
     ./frames/male0049.png
     ./frames/male0050.png
     ./frames/male0051.png
     ./frames/male0052.png
     ./frames/male0053.png
     ./frames/male0054.png
     ./frames/male0055.png
     ./frames/male0056.png
     ./frames/male0057.png
     ./frames/male0058.png
     ./frames/male0059.png
     ./frames/male0060.png
     ./frames/male0061.png
     ./frames/male0062.png
     ./frames/male0063.png
     ./frames/male0064.png
     ./frames/male0065.png
     ./frames/male0066.png
     ./frames/male0067.png
     ./frames/male0068.png
     ./frames/male0069.png
     ./frames/male0070.png
     ./frames/male0071.png
     ./frames/male0072.png
     ./frames/male0073.png
     ./frames/male0074.png
     ./frames/male0075.png
     ./frames/male0076.png
     ./frames/male0077.png
     ./frames/male0078.png
     ./frames/male0079.png
     ./frames/male0080.png
     ./frames/male0081.png
     ./frames/male0082.png
     ./frames/male0083.png
     ./frames/male0084.png
     ./frames/male0085.png
     ./frames/male0086.png
     ./frames/male0087.png
     ./frames/male0088.png
     ./frames/male0089.png
     ./frames/male0090.png
     ./frames/male0091.png
     ./frames/male0092.png
     ./frames/male0093.png
     ./frames/male0094.png
     ./frames/male0095.png
     ./frames/male0096.png
     ./frames/male0097.png
     ./frames/male0098.png
     ./frames/male0099.png
     ./frames/male0100.png
     ./frames/male0101.png
     ./frames/male0102.png
     ./frames/male0103.png
     ./frames/male0104.png
     ./frames/male0105.png
     ./frames/male0106.png
     ./frames/male0107.png
     ./frames/male0108.png
     ./frames/male0109.png
     ./frames/male0110.png
     ./frames/male0111.png
     ./frames/male0112.png
     ./frames/male0113.png
     ./frames/male0114.png
     ./frames/male0115.png
     ./frames/male0116.png
     ./frames/male0117.png
     ./frames/male0118.png
     ./frames/male0119.png
     ./frames/male0120.png
     ./frames/male0121.png
     ./frames/male0122.png
     ./frames/male0123.png
     ./frames/male0124.png
     ./frames/male0125.png
     ./frames/male0126.png
     ./frames/male0127.png
     ./frames/male0128.png
     ./frames/male0129.png
     ./frames/male0130.png
     ./frames/male0131.png
     ./frames/male0132.png
     ./frames/male0133.png
     ./frames/male0134.png
     ./frames/male0135.png
     ./frames/male0136.png
     ./frames/male0137.png
     ./frames/male0138.png
     ./frames/male0139.png
     ./frames/male0140.png
     ./frames/male0141.png
     ./frames/male0142.png
     ./frames/male0143.png
     ./frames/male0144.png
     ./frames/male0145.png
     ./frames/male0146.png
     ./frames/male0147.png
     ./frames/male0148.png
     ./frames/male0149.png
     ./frames/male0150.png
     ./frames/male0151.png
     ./frames/male0152.png
     ./frames/male0153.png
     ./frames/male0154.png
     ./frames/male0155.png
     ./frames/male0156.png
     ./frames/male0157.png
     ./frames/male0158.png
     ./frames/male0159.png
     ./frames/male0160.png
     ./frames/male0161.png
     ./frames/male0162.png
     ./frames/male0163.png
     ./frames/male0164.png
     ./frames/male0165.png
     ./frames/male0166.png
     ./frames/male0167.png
     ./frames/male0168.png
     ./frames/male0169.png
     ./frames/male0170.png
     ./frames/male0171.png
     ./frames/male0172.png
     ./frames/male0173.png
     ./frames/male0174.png
     ./frames/male0175.png
     ./frames/male0176.png
     ./frames/male0177.png
     ./frames/male0178.png
     ./frames/male0179.png
     ./frames/male0180.png
     ./frames/male0181.png
     ./frames/male0182.png
     ./frames/male0183.png
     ./frames/male0184.png
     ./frames/male0185.png
     ./frames/male0186.png
     ./frames/male0187.png
     ./frames/male0188.png
     ./frames/male0189.png
     ./frames/male0190.png
     ./frames/male0191.png
     ./frames/male0192.png
     ./frames/male0193.png
     ./frames/male0194.png
     ./frames/male0195.png
     ./frames/male0196.png
     ./frames/male0197.png
     ./frames/male0198.png
     ./frames/male0199.png
     ./frames/male0200.png
     ./frames/male0201.png
     ./frames/male0202.png
     ./frames/male0203.png
     ./frames/male0204.png
     ./frames/male0205.png
     ./frames/male0206.png
     ./frames/male0207.png
     ./frames/male0208.png
     ./frames/male0209.png
     ./frames/male0210.png
     ./frames/male0211.png
     ./frames/male0212.png
     ./frames/male0213.png
     ./frames/male0214.png
     ./frames/male0215.png
     ./frames/male0216.png
     ./frames/male0217.png
     ./frames/male0218.png
     ./frames/male0219.png
     ./frames/male0220.png
     ./frames/male0221.png
     ./frames/male0222.png
     ./frames/male0223.png
     ./frames/male0224.png
     ./frames/male0225.png
     ./frames/male0226.png
     ./frames/male0227.png
     ./frames/male0228.png
     ./frames/male0229.png
     ./frames/male0230.png
     ./frames/male0231.png
     ./frames/male0232.png
     ./frames/male0233.png
     ./frames/male0234.png
     ./frames/male0235.png
     ./frames/male0236.png
     ./frames/male0237.png
     ./frames/male0238.png
     ./frames/male0239.png
     ./frames/male0240.png
     ./frames/male0241.png
     ./frames/male0242.png
     ./frames/male0243.png
     ./frames/male0244.png
     ./frames/male0245.png
     ./frames/male0246.png
     ./frames/male0247.png
     ./frames/male0248.png
     ./frames/male0249.png
     ./frames/male0250.png
     ./frames/male0251.png
     ./frames/male0252.png
     ./frames/male0253.png
     ./frames/male0254.png
     ./frames/male0255.png
     ./frames/male0256.png
     ./frames/male0257.png
     ./frames/male0258.png
     ./frames/male0259.png
     ./frames/male0260.png
     ./frames/male0261.png
     ./frames/male0262.png
     ./frames/male0263.png
     ./frames/male0264.png
     ./frames/male0265.png
     ./frames/male0266.png
     ./frames/male0267.png
     ./frames/male0268.png
     ./frames/male0269.png
     ./frames/male0270.png
     ./frames/male0271.png
     ./frames/male0272.png
     ./frames/male0273.png
     ./frames/male0274.png
     ./frames/male0275.png
     ./frames/male0276.png
     ./frames/male0277.png
     ./frames/male0278.png
     ./frames/male0279.png
     ./frames/male0280.png
     ./frames/male0281.png
     ./frames/male0282.png
     ./frames/male0283.png
     ./frames/male0284.png
     ./frames/male0285.png
     ./frames/male0286.png
     ./frames/male0287.png
     ./frames/male0288.png
     ./frames/male0289.png
     ./frames/male0290.png
     ./frames/male0291.png
     ./frames/male0292.png
     ./frames/male0293.png
     ./frames/male0294.png
     ./frames/male0295.png
     ./frames/male0296.png
     ./frames/male0297.png
     ./frames/male0298.png
     ./frames/male0299.png
     ./frames/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})