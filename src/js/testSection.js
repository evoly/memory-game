import Button from "./Button";

import { createEl } from "./helpers";

const WinButton = (openBoard) => 
    Button({ classes: 'btn-lg', text: 'Press to win', onClick: openBoard });

export const TestSection = (openCards) => {
    const container = createEl('div', { className: 'container test-section'});
    container.append(WinButton(openCards))
    return container

}