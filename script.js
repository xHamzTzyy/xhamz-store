(function () {
    const items = document.querySelectorAll('.xhamz-faq .faq-item');
    items.forEach(item => {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            items.forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                i.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
            });
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
                answer.setAttribute('aria-hidden', 'false');
                btn.focus();
            }
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                btn.click();
            }
        });
    });
})();
(function () {
    const hub = document.querySelector('.hubungi');
    if (!hub) return;
    const panel = hub.querySelector('.hubungi-panel');
    if (!panel) return;

    hub.setAttribute('role', 'button');
    hub.setAttribute('tabindex', '0');
    hub.setAttribute('aria-expanded', 'false');

    function toggle(open) {
        hub.classList.toggle('open', open);
        hub.setAttribute('aria-expanded', open ? 'true' : 'false');
        panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    hub.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        toggle(!hub.classList.contains('open'));
    });

    hub.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle(!hub.classList.contains('open'));
        } else if (e.key === 'Escape') {
            toggle(false);
        }
    });

    document.addEventListener('click', (e) => {
        if (!hub.contains(e.target)) toggle(false);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggle(false);
    });
})();
document.querySelectorAll('.btn-beli').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('.product-name').textContent;
        const telegramUrl = `https://t.me/hamzneverlose?text=BANG+AKU+MAU+BELI+${encodeURIComponent(productName)}`;
        window.open(telegramUrl, '_blank');
    });
});