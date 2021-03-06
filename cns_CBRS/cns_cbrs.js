
		function getWindowHeight() {
			var windowHeight = 0;
			if (typeof(window.innerHeight) == 'number') {
				windowHeight = window.innerHeight;
			}
			else {
				if (document.documentElement && document.documentElement.clientHeight) {
					windowHeight = document.documentElement.clientHeight;
				}
				else {
					if (document.body && document.body.clientHeight) {
						windowHeight = document.body.clientHeight;
					}
				}
			}
			return windowHeight;
		}
		function setFooter() {
			if (document.getElementById) {
				var windowHeight = getWindowHeight();
				if (windowHeight > 0) {
					var headerHeight = document.getElementById('header-container').offsetHeight;
					var contentHeight = document.getElementById('columns').offsetHeight;
					var navHeight = document.getElementById('menu-bar').offsetHeight;
					var footerElement = document.getElementById('footer');
					var footerHeight  = footerElement.offsetHeight;
					if (windowHeight - (navHeight + headerHeight + contentHeight + footerHeight) >= 0) {
						footerElement.style.position = 'absolute';
						footerElement.style.top = (windowHeight - footerHeight) + 'px';
					}
					else {
						footerElement.style.position = 'static';
					}
				}
			}
		}
		
		function checkWidth() {
			if (window.innerWidth <= 768){
				jQuery('<li id="mobileToggle"><a href="#" class="navicon" title="Mobile Menu Toggle">&#9776; MENU</a></li>').prependTo('#menu-bar ul.nice-menu');
				jQuery("#menu-bar ul.nice-menu li").hide();
				jQuery("#menu-bar ul.nice-menu li#mobileToggle").show();
    			jQuery(".navicon").click(function() {
        			jQuery("#menu-bar ul.nice-menu li#mobileToggle").toggle();
        			jQuery("#menu-bar ul.nice-menu li").slideToggle(500);
   				 });
			} else {
				jQuery('#mobileToggle').remove();
			}
		}
		
		function initMenu() {
			jQuery("section.block-boxes-os_taxonomy_fbt").addClass("navigation");
		};
		
		window.onload = function() {
			initMenu();
			setFooter();
			checkWidth();
		}
		window.onresize = function() {
			setFooter();
		}

window.addEventListener("orientationchange", function() {
	 location.reload(); 
}, false);
		
//Insert the secondary nav to the content region for smartphone
 jQuery(window).resize(function() {
  if (jQuery(window).width() < 600) {
     jQuery(".region-header-third #block-os-secondary-menu").insertAfter(".region-sidebar-second");
  }

 });