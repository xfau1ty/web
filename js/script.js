document.addEventListener('DOMContentLoaded', function() {
    const roomCards = document.querySelectorAll('.room-card');

    roomCards.forEach(function(card) {
        const button = card.querySelector('.room-card__button');
        let isPendingSelection = false;

        if (button) {
            button.addEventListener('click', function(event) {
                event.stopPropagation();
                
                if (!card.classList.contains('room-card--selected')) {
                    isPendingSelection = true;
                    card.classList.add('room-card--pending-selection');
                }
            });
        }

        card.addEventListener('mouseleave', function() {
            if (isPendingSelection) {
                card.classList.remove('room-card--pending-selection');
                card.classList.add('room-card--selected');
                isPendingSelection = false;
            }
        });

        card.addEventListener('click', function() {
            if (card.classList.contains('room-card--selected')) {
                card.classList.remove('room-card--selected');
            }
        });
    });
});
