let value;

const link = document.querySelectorAll("#button");
const image = document.querySelector("#video");
const ul = document.querySelector("#focus");

image.addEventListener("mouseover", play);
image.addEventListener("mouseout", pause);
ul.addEventListener("click", run);

function run(e) {
  e.preventDefault();
  if (e.target == ul.children[0] || e.target == ul.children[0].children[0]) {
    image.src = "./image/dans.mp4";
  } else if (
    e.target == ul.children[1] ||
    e.target == ul.children[1].children[0]
  ) {
    image.src = "./image/vol.mp4";
  } else if (
    e.target == ul.children[2] ||
    e.target == ul.children[2].children[0]
  ) {
    image.src = "./image/cylcing.mp4";
  } else if (
    e.target == ul.children[3] ||
    e.target == ul.children[3].children[0]
  ) {
    image.src = "./image/diving.mp4";
  } else if (
    e.target == ul.children[2] ||
    e.target == ul.children[4].children[0]
  ) {
    image.src = "./image/rap.mp4";
  } else if (
    e.target == ul.children[2] ||
    e.target == ul.children[5].children[0]
  ) {
    image.src = "./image/defile.mp4";
  }
}

function play(e) {
  var playPromise = image.play();

  if (playPromise !== undefined) {
    playPromise
      .then((_) => {
        image.play();
      })
      .catch((error) => {
        image.pause();
      });
  }
}

function pause(e) {
  if (e.target.src.includes("/image/videoplayback.webm")) {
    image.pause();
  }
}
