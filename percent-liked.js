if (/^https:\/\/twitter\.com.*$/.test(window.location.href)) {
  function run() {
    document.querySelectorAll(".views-to-likes-ratio").forEach(function (element) {
      element.remove();
    });

    function shortToNumber(s) {
      s = s.replace(",", "");
      if (s.includes("K")) {
        return Number(s.replace("K", "")) * 1000;
      } else if (s.includes("M")) {
        return Number(s.replace("M", "")) * 1000000;
      } else {
        return Number(s);
      }
    }

    var bigBarElements = document.querySelectorAll(
      ".css-1dbjc4n.r-2sztyj.r-1efd50x.r-5kkj8d.r-13awgt0.r-18u37iz.r-tzz3ar.r-s1qlax.r-1yzf0co"
    );
    bigBarElements.forEach(function (element) {
      var viewsCount = shortToNumber(
        element.children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText
      );
      var likesCount = shortToNumber(
        element.children[3].children[0].children[0].children[0].children[0].children[0].children[0].innerText
      );

      var percentLikes = Math.round((likesCount / viewsCount) * 10000) / 100;

      var ratioElement = document.createElement("div");
      ratioElement.classList.add(
        "views-to-likes-ratio",
        "css-4rbku5",
        "css-18t94o4",
        "css-901oao",
        "r-1nao33i",
        "r-1loqt21",
        "r-37j5jr",
        "r-a023e6",
        "r-16dba41",
        "r-rjixqe",
        "r-bcqeeo",
        "r-qvutc0"
      );
      ratioElement.style.marginLeft = "20px";
      ratioElement.innerText = percentLikes + "%";
      element.appendChild(ratioElement);
    });

    var smallBarElements = document.querySelectorAll('[role="group"]');

    smallBarElements.forEach(function (element) {
      // Skip invalid elements. (Ads?) Fixes bug where some tweets are skipped?
      if (element.children[3].children[0].children[0].children.length <= 1) {
        return
      };
      var viewsCount = shortToNumber(element.children[3].children[0].children[0].children[1].innerText);
      var likesCount = shortToNumber(element.children[2].children[0].children[0].children[1].innerText);
      var percentLikes = Math.round((likesCount / viewsCount) * 10000) / 100;

      var ratioElement = document.createElement("div");

      ratioElement.classList.add(
        "views-to-likes-ratio",
        "css-901oao",
        "r-1awozwy",
        "r-1bwzh9t",
        "r-6koalj",
        "r-37j5jr",
        "r-a023e6",
        "r-16dba41",
        "r-1h0z5md",
        "r-rjixqe",
        "r-bcqeeo",
        "r-o7ynqc",
        "r-clp7b1",
        "r-3s2u2q",
        "r-qvutc0"
      );
      ratioElement.innerText = percentLikes + "%";
      element.appendChild(ratioElement);
    });
  }

  setInterval(run, 333);
}
