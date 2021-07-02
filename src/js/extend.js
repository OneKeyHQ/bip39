// Solution: https://css-tricks.com/sticky-smooth-active-nav/
function smoothScroll() {
  let mainNavLinks = document.querySelectorAll(".js-anchor-link");

  window.addEventListener("scroll", (event) => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("anchor-link-active");
      } else {
        link.classList.remove("anchor-link-active");
      }
    });
  });
}

function createPopover() {
  const recoveryPhrasePopoverBtn = document.getElementById(
    "recoveryPhrasePopoverBtn"
  );
  const recoveryPhrasePopoverContent = document.getElementById(
    "recoveryPhrasePopoverContent"
  );
  const derivedAddressesPopoverBtn = document.getElementById(
    "derivedAddressesPopoverBtn"
  );
  const derivedAddressesPopoverContent = document.getElementById(
    "derivedAddressesPopoverContent"
  );

  recoveryPhrasePopoverContent.style.display = "block";
  derivedAddressesPopoverContent.style.display = "block";

  tippy(recoveryPhrasePopoverBtn, {
    content: recoveryPhrasePopoverContent,
    arrow: true,
    arrowType: "round",
    animation: "shift-away",
    duration: 150,
    interactive: true,
    allowHTML: true,
    theme: "light-border",
    trigger: "click",
    placement: "bottom-end",
    distance: 16,
  });

  tippy(derivedAddressesPopoverBtn, {
    content: derivedAddressesPopoverContent,
    arrow: true,
    arrowType: "round",
    animation: "shift-away",
    duration: 150,
    interactive: true,
    allowHTML: true,
    theme: "light-border",
    trigger: "click",
    placement: "bottom-end",
    distance: 16,
  });
}

smoothScroll();
createPopover();
