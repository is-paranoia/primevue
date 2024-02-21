export default {
    css: `
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-decoration: none;
    padding: 1.125rem 1.125rem 1.125rem 1.125rem;
    color: var(--p-accordion-header-text-color);
    background: var(--p-accordion-header-background);
    font-weight: 600;
    border-radius: var(--p-rounded-base);
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    outline-color: transparent;
}

.p-accordion-header-text {
    line-height: 1;
}

.p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -2px;
}
.p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    color: var(--p-accordion-header-text-color-hover);
}
.p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    color: var(--p-accordion-header-text-color-active);
}

.p-accordion-toggle-icon {
    transform: rotate(90deg);
}

.p-accordion-header.p-highlight .p-accordion-toggle-icon {
    transform: rotate(-180deg);
}

.p-accordion-content {
    padding: 0 1.125rem 1.125rem 1.125rem;
    background: var(--p-accordion-content-background);
    color: var(--p-accordion-content-text-color);
}

.p-accordion-tab {
    border-bottom: 1px solid var(--p-accordion-content-border-color);
}

.p-accordion-tab:last-child {
    border-bottom: 0 none
}
`
};