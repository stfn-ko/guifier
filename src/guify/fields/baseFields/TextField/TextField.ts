import './textFieldStyle.css'

import type { TextFieldLocalParamInternal } from './types'

import { Field } from '../../Field/Field'
import { textFieldLocalParamSchema } from './types'

export class TextField extends Field {
    public static fieldLabelName: string = 'Text'

    /**
     * The localParam property is the this.property._params of this field
     */
    public localParam: TextFieldLocalParamInternal = textFieldLocalParamSchema.parse(this.property._params)

    /**
     * This function validates the _params of the property object
     */
    protected validateParams (): void {

    }

    /**
     * This function validates the _rules of the property object
     */
    protected validateRules (): void {

    }

    /**
     * This function validates the _rules of the property object
     */
    public getFieldLabelName (): string {
        return TextField.fieldLabelName
    }

    /**
     * this function is responsible for drawing the text field HTMLElement
     *
     * @returns {HTMLElement} html element object
     */
    public draw (): HTMLElement {
        // drawing the input
        const inputElement = document.createElement('input')
        inputElement.type = 'text'
        inputElement.classList.add('guifyTextField')
        if (this.property._value !== '') {
            inputElement.value = this.property._value
        }

        // setting style based on color set wether primary or secondary
        if (this.showSecondaryColors) {
            inputElement.classList.add('guifyPrimaryBgColor')
        } else {
            inputElement.classList.add('guifySecondaryBgColor')
        }

        // adding the event handler
        inputElement.addEventListener('input', (e) => {
            this.inputEventHandler(e)
        })

        return inputElement
    }

    /**
     * This function handles the input event on the text field
     */
    private inputEventHandler (event: Event): void {
        const element = event.target as HTMLInputElement
        this.setValue(element.value)
    }
}
