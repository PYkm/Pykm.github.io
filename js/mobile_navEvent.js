/* window.onload = function() { */

	var list195 = false;
	MobileNav = document.getElementById('mobile_nav');
	NavList = document.getElementById('nav_list');
	
	MobileNav.onclick = toggleMenuList;

	function toggleMenuList() {
		list195 = !list195;
		if (list195) {
			MobileNav.classList.remove("mobile_nav40");
			MobileNav.classList.add("mobile_nav195");
			
			NavList.classList.remove("list40");
			NavList.classList.add("list195");
			
		} else {
			MobileNav.classList.remove("mobile_nav195");
			MobileNav.classList.add("mobile_nav40");
			
			NavList.classList.remove("list195");
			NavList.classList.add("list40");
		}
	};

/* } */
