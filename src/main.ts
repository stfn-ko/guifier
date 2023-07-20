import './style.css'

import type { Parameters } from './guify/types'
import { DataType } from './guify/enums'
import { Guify } from './guify/Guify'
import { exampleData } from './dataExamples'

async function init (): Promise<void> {
    const params: Parameters = {
        elementId: 'app',
        data: exampleData,
        dataType: DataType.Yaml,
        onChange: () => {
            console.log('data has changed')
        }
    }

    const guify = new Guify(params)

    // FIXME: an error happens when using the guify.getData twice
    document.addEventListener('click', () => {
        console.log('wowoowowowowowowowoowo')
        console.log(guify.getData(DataType.Yaml))
    })
}

void init()
