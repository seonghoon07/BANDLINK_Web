import { jsx as _jsx } from "react/jsx-runtime";
import { button } from './style.css';
export default function Button({ type = 'button', color = 'primary', size = 'lg', className = '', onClick, children, disabled, }) {
    return (_jsx("button", { type: type, onClick: onClick, className: `${button({ color, size })} ${className}`, disabled: disabled, children: children }));
}
