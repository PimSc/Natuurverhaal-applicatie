.iconContainer {
    position: relative;
    display: inline-block;
}

.iconOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: auto;
    background-color: white; /* Doorzichtige achtergrondkleur */
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0; /* Verberg het tekstvlak standaard */
    transition: opacity 0.3s ease; /* Voeg een vloeiende overgang toe */
    margin: 15px 0 0 5px;
    border: 1px solid var(--darkerGrey);
    border-radius: 10px;
    padding: 5px;
    pointer-events: none; /* Voorkom dat het tekstvlak interactie ontvangt */
}

.iconContainer:hover .iconOverlay {
    opacity: 1; /* Laat het tekstvlak zien wanneer erover wordt gehoverd */
    z-index: 2;
}