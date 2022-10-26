import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader'

import { Amplify } from 'aws-amplify'
import awsconfig from '../src/aws-exports'

Amplify.configure(awsconfig)

if (process.client) {
  applyPolyfills().then(() => {
    defineCustomElements(window)
  })
}
