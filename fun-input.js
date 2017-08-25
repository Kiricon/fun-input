/**
 * The template that is used for the shadow root for every copy of your element,
 * which houses the styles and layout for the element.
 */
const template = document.createElement("template");
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }

        input {
            padding: 0.5em;
            border-radius: 3px;
            font-size: 0.8em;
            border: none;
        }

        input:focus {
            outline: none;
        }

        div {
            height: 2px;
            width: 0px;
            background-color: var( --fun-input-color ,var(--primary-color, #673AB7));
            margin: 0px auto;
            transition: ease width 0.3s;
            z-index: 1;
        }

        input:focus + div {
            width: calc( 100% - 4px);
        }
    </style>
`;

/**
 * This is the class that controls each instance of your custom element.
 */
class FunInput extends HTMLElement {
    /**
     * Part of the custom element spec. Returns an array of strings that are 
     * the names of attributes that this element observes/listens to.
     * 
     * @returns {Array} an array of strings, each of which representing an 
     *  attribute.
     */
    static get observedAttributes() {
        return ['type'];
    };

    constructor() {
        super();

        // create shadow root for any children context
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // add any initial variables here
    }

    /**
     * Part of the custom element spec. Called after your element is attached to
     * the DOM. Do anything related to the element or its children here in most
     * cases.
     */
    connectedCallback() {
        let attributesToWatch = [
            'type',
            'placeholder',
            'name',
            'value'
        ];
        this.input = document.createElement('input');
        this.setAttributes(this.input, attributesToWatch);
        this.shadowRoot.appendChild(this.input);
        this.shadowRoot.appendChild(document.createElement('div'))
    }

    /**
     * Part of the custom element spec. Called after your element is remove from
     * the DOM. Disconnect any listeners or anything else here.
     */
    disconnectedCallback() {

    }

    /**
     * Part of the custom element spec. Called when one of the observed
     * attributes changes, either via setAttribute() or with the attribute being
     * manually set in the HTML.
     * 
     * @param {String} name the name of the attribute that changed
     * @param {Mixed} oldValue the previous value of the attribute
     * @param {Mixed} newValue the new value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // respond to a changed attribute here
    }

    /**
     * Loop through attray of attributes and set them to an element
     * from teh custom element
     * @param {HTMLElement} element 
     * @param {string[]} attributes 
     */
    setAttributes(element, attributes) {
        for(let i = 0; i < attributes.length; i++) {
            if(this.hasAttribute(attributes[i])) {
                element.setAttribute(attributes[i], this.getAttribute(attributes[i]));
            }
        }
    }

}

customElements.define("fun-input", FunInput);
