(function () {
    pagination(true);
})();

(function () {
    if (!document.body.classList.contains('post-template')) return;

    const cover = document.querySelector('.gh-cover');
    if (!cover) return;

    const image = cover.querySelector('.gh-cover-image');

    window.addEventListener('load', function () {
        cover.style.setProperty('--cover-height', image.clientWidth * image.naturalHeight / image.naturalWidth + 'px');
        cover.classList.remove('loading');
    });
})();

/* HEADER DROPDOWN */

// function handleHeaderDropdown() {
// 	const headerDropdownContainer = document.querySelector('.nav-member-resources');
// 	const dropdownHTML = `
// 	<a class="header-dropdown__header">Member resources</a>
// 	<div class="header-dropdown__body">
// 		<div class="header-dropdown__title_first">Guides</div>
// 		<div class="header-dropdown__body_secondary">
// 			<a href="${window.location.origin}/tag/advertising/" class="header-dropdown__title_second">Advertising</a>
// 			<a href="${window.location.origin}/tag/strategic/" class="header-dropdown__title_second">Strategic</a>
// 			<a href="${window.location.origin}/tag/audience/" class="header-dropdown__title_second">Audience</a>
// 		</div>
// 		<div class="header-dropdown__title_first">Climate Communications</div>
// 		<div class="header-dropdown__body_secondary">
// 			<a href="${window.location.origin}/tag/culture/" class="header-dropdown__title_second">Culture</a>
// 			<a href="${window.location.origin}/tag/energy/" class="header-dropdown__title_second">Energy</a>
// 			<a href="${window.location.origin}/tag/food/" class="header-dropdown__title_second">Food</a>
// 			<a href="${window.location.origin}/tag/politics/" class="header-dropdown__title_second">Politics</a>
// 			<a href="${window.location.origin}/tag/transport/" class="header-dropdown__title_second">Transport</a>
// 			<a href="${window.location.origin}/tag/science/" class="header-dropdown__title_second">Science</a>
// 		</div>
// 	</div>
// 	`;
// 	headerDropdownContainer.innerHTML = dropdownHTML;
  
// 	const headerDropdownTarget = document.querySelector('.header-dropdown__header');
// 	headerDropdownTarget.addEventListener('click', () => {
// 	  headerDropdownTarget.classList.toggle('active');
// 	  if (headerDropdownTarget.classList.contains('active')) {
// 		// Add the global click event listener when the header is active
// 		document.addEventListener('click', clickOutsideHandler);
// 	  } else {
// 		// Remove the global click event listener when the header is not active
// 		document.removeEventListener('click', clickOutsideHandler);
// 	  }
// 	});
  
// 	const headerDropdownTargetSecondary = document.querySelectorAll('.header-dropdown__title_first');
// 	headerDropdownTargetSecondary.forEach(title => {
// 	  title.addEventListener('click', () => {
// 		title.classList.toggle('active');
// 	  });
// 	});
//   }
  
//   function clickOutsideHandler(event) {
// 	const headerDropdownTarget = document.querySelector('.header-dropdown__header');
// 	const headerDropdownContainer = document.querySelector('.nav-member-resources');
// 	if (!headerDropdownContainer.contains(event.target) && !headerDropdownTarget.contains(event.target)) {
// 	  // Click is outside of the dropdown and header, so remove the 'active' class
// 	  headerDropdownTarget.classList.remove('active');
// 	  // Remove the global click event listener
// 	  document.removeEventListener('click', clickOutsideHandler);
// 	}
//   }
  
//   handleHeaderDropdown();
  
  function handleHeaderDropdown() {
	const headerDropdownContainer = document.querySelector('.nav-member-resources');
	const dropdownHTML = `
	<a class="header-dropdown__header">Member resources <img class="header-dropdown__header-icon" src="${document.body.classList.contains('is-head-transparent') ? '/assets/images/arrow-down_light.svg' : '/assets/images/arrow-down_dark.svg'}" alt="arrow down"></a>
	<div class="header-dropdown__body">
		<a href="${window.location.origin}/member-resources/" class="header-dropdown__title_first">Member Resources</a>
		<a href="${window.location.origin}/guides/" class="header-dropdown__title_first">Guides</a>
		<div class="header-dropdown__body_secondary">
			<a href="${window.location.origin}/tag/advertising/" class="header-dropdown__title_second">Advertising</a>
			<a href="${window.location.origin}/tag/strategic/" class="header-dropdown__title_second">Strategic</a>
			<a href="${window.location.origin}/tag/audience/" class="header-dropdown__title_second">Audience</a>
		</div>
		<a href="${window.location.origin}/climate-communications" class="header-dropdown__title_first">Climate Communications</a>
		<div class="header-dropdown__body_secondary">
			<a href="${window.location.origin}/tag/culture/" class="header-dropdown__title_second">Culture</a>
			<a href="${window.location.origin}/tag/energy/" class="header-dropdown__title_second">Energy</a>
			<a href="${window.location.origin}/tag/food/" class="header-dropdown__title_second">Food</a>
			<a href="${window.location.origin}/tag/politics/" class="header-dropdown__title_second">Politics</a>
			<a href="${window.location.origin}/tag/transport/" class="header-dropdown__title_second">Transport</a>
			<a href="${window.location.origin}/tag/science/" class="header-dropdown__title_second">Science</a>
		</div>
	</div>
	`;
	headerDropdownContainer.innerHTML = dropdownHTML;
  
	const headerDropdownTarget = document.querySelector('.header-dropdown__header');
	const headerDropdownTargetSecondary = document.querySelectorAll('.header-dropdown__title_first');
  
	headerDropdownTarget.addEventListener('click', () => {
	  headerDropdownTarget.classList.toggle('active');
  
	  if (headerDropdownTarget.classList.contains('active')) {
		// Add the global click event listener when the header is active
		document.addEventListener('click', clickOutsideHandler);
	  } else {
		// Remove the global click event listener and the 'active' class from all titles
		document.removeEventListener('click', clickOutsideHandler);
		headerDropdownTargetSecondary.forEach(title => {
		  title.classList.remove('active');
		});
	  }
	});
  
	headerDropdownTargetSecondary.forEach(title => {
	  title.addEventListener('click', () => {
		title.classList.toggle('active');
	  });
	});
  }
  
  function clickOutsideHandler(event) {
	const headerDropdownTarget = document.querySelector('.header-dropdown__header');
	const headerDropdownContainer = document.querySelector('.nav-member-resources');
	if (!headerDropdownContainer.contains(event.target) && !headerDropdownTarget.contains(event.target)) {
	  // Click is outside of the dropdown and header, so remove the 'active' class
	  headerDropdownTarget.classList.remove('active');
	  // Remove the 'active' class from all titles
	  const headerDropdownTargetSecondary = document.querySelectorAll('.header-dropdown__title_first');
	  headerDropdownTargetSecondary.forEach(title => {
		title.classList.remove('active');
	  });
	  // Remove the global click event listener
	  document.removeEventListener('click', clickOutsideHandler);
	}
  }
  
  handleHeaderDropdown();
  

  function handleSignInPopup() {
    const popupTarget = document.querySelector('.header-popup-target');
    const popupContainer = document.querySelector('.c-signup-popup-container');
    const popupMain = document.querySelector('.c-signup-popup');
	const popupError = document.querySelector('.subscribe-form__error')
	const popupInput = document.getElementById('subscribe-form__email');

    if (popupTarget) {
        popupTarget.addEventListener('click', () => {
            popupContainer.classList.remove('disabled');
            document.body.classList.add('no-scroll');
        });

        const popupCloseIcon = document.querySelector('.c-signup-popup__close');
        popupCloseIcon.addEventListener('click', () => {
            popupContainer.classList.add('disabled');
            document.body.classList.remove('no-scroll');
			popupError.innerHTML = '';
			popupInput.value = '';
        });

        document.addEventListener('click', (event) => {
            if (
                !popupMain.contains(event.target) &&
                !popupContainer.classList.contains('disabled') &&
                !popupTarget.contains(event.target)
            ) {
                popupContainer.classList.add('disabled');
                document.body.classList.remove('no-scroll');
				popupError.innerHTML = '';
				popupInput.value = '';
            }
        });
    }
}

handleSignInPopup();
