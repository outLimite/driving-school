/**
 * Reviews Management
 * Управление отображением отзывов - показать больше/скрыть
 */

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const reviewsSection = document.getElementById('reviews');
    let reviewsExpanded = false;

    if (!showMoreBtn) return;

    showMoreBtn.addEventListener('click', function() {
        const hiddenReviews = document.querySelectorAll('.review-card.hidden');
        
        if (!reviewsExpanded) {
            hiddenReviews.forEach((review, index) => {
                setTimeout(() => {
                    review.classList.remove('hidden');
                    review.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`;
                }, index * 100);
            });
            
            showMoreBtn.textContent = 'Скрыть отзывы';
            reviewsExpanded = true;
        } else {
            hiddenReviews.forEach(review => {
                review.classList.add('hidden');
            });
            
            showMoreBtn.textContent = 'Смотреть больше отзывов';
            reviewsExpanded = false;
            
            if (reviewsSection) {
                reviewsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});