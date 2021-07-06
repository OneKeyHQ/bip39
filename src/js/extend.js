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

// Get the trigger of dropdown
const enableDropdown = (btnID, menuID) => {
  const dropdownActiveClass = "dropdown__menu--active";

  const trigger = document.getElementById(btnID);

  // Get content of dropdown
  const dropdownMenu = document.getElementById(menuID);

  const showDropdown = () => {
    dropdownMenu.classList.add(dropdownActiveClass);
  };

  const hideDropdown = () => {
    dropdownMenu.classList.remove(dropdownActiveClass);
  };

  // Click trigger to show content of dropdown
  trigger.addEventListener("click", function () {
    if (
      dropdownMenu.classList.contains(dropdownActiveClass)
    ) {
      hideDropdown();
    } else {
      showDropdown();
    }
  });

  // Hide content of dropdown if click outside of dropdown element
  document.addEventListener("click", (event) => {
    if (event.target.closest(".js-dropdown")) return
    hideDropdown();
  });
}

smoothScroll();
enableDropdown("recoveryPhrasePopoverBtn", "recoveryPhrasePopoverContent");
enableDropdown("languagePopoverBtn", "languagePopoverContent");
enableDropdown("derivedAddressesPopoverBtn", "derivedAddressesPopoverContent");