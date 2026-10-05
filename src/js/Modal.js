import newGame from "./game";
import { createEl } from "./helpers";
import { CloseButton, NewGameButton } from "./Button";

const createModal = (content, onNewGame) => {
    const modal = createEl('dialog', {className: 'modal overlay'});    
    const modalInner = createEl('div', { className: 'modal-inner' });
    const modalContent = createEl('div', { className: 'modal-content' });
    const modalFooter = createEl('div', { className: 'modal-footer' });

    const closeModal = CloseButton(() => modal.close());

    if (onNewGame) {
        const newGameBtn = NewGameButton(() => newGame());
        modalFooter.append(newGameBtn);
    }

    modalContent.append(...content);
    modalFooter.append(closeModal)
    modalInner.append(modalContent, modalFooter);
    modal.append(modalInner);

    const body = document.querySelector('body');
    body.append(modal);

    modal.addEventListener('click', ({ target }) => {
        console.log('e', target)
        if (target === modal) {
            modal.close(); 
        }
    });

    modal.showModal(); 
    return modal;
};

export default createModal;