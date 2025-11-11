// Interactive block-card behavior
document.addEventListener('DOMContentLoaded', function () {
	// Make top-level main-content blocks clickable when they contain a prominent link
	const container = document.querySelector('.main-content');
	if (!container) return;

	// Select candidate blocks: immediate children that are not headers/navigation
	const candidates = Array.from(container.children).filter(el => {
		return el.nodeType === 1 && !el.matches('h1, .page-navigation, .skip-link');
	});

	candidates.forEach(block => {
		// If block already contains a full-width anchor wrapping it, ensure class and handler
		const wrappingLink = block.querySelector('a.block-card') || (block.tagName === 'A' ? block : null);
		if (wrappingLink && wrappingLink.href) {
			// Mark as interactive
			wrappingLink.classList.add('block-card');
			wrappingLink.setAttribute('role', 'link');
			wrappingLink.tabIndex = 0;
			return;
		}

		// Find the first usable link inside the block (prefers internal nav links)
		const link = block.querySelector('a[href]:not([href^="javascript:"])');
		if (!link) return;

		const href = link.getAttribute('href');
		if (!href) return;

		// Turn the block into a clickable card that navigates to href
		block.classList.add('block-card');
		block.setAttribute('role', 'link');
		block.tabIndex = 0;

		const navigate = (targetHref) => {
			// Respect relative urls
			window.location.href = targetHref;
		};

		block.addEventListener('click', function (e) {
			// ignore clicks on inner interactive controls
			const interactiveTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'];
			if (interactiveTags.includes(e.target.tagName)) return;
			navigate(href);
		});

		block.addEventListener('keydown', function (e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				navigate(href);
			}
		});
	});

	// Enhance anchors that wrap entire blocks but lack the class
	document.querySelectorAll('a').forEach(a => {
		if (a.classList && a.classList.contains('block-card')) return;
		// If anchor directly contains a single block-level child, mark it
		if (a.children.length === 1 && a.firstElementChild && a.firstElementChild.parentElement === a) {
			a.classList.add('block-card');
			a.setAttribute('role', 'link');
			a.tabIndex = 0;
		}
	});
});
