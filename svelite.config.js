import HelloWorld from './modules/HelloWorld.svelte'

import {AdminPanelPlugin} from 'svelitecms'


export default {
    plugins: [
       AdminPanelPlugin({
            // admin panel config...

         })
    ],
    modules: {
        HelloWorld: {
            name: 'Hello World',
            description: "Simple hello world",
            component: HelloWorld,         }

    },
    layouts: {},
    pages: [{slug: 'hello', title: 'Hello', modules: [{name: 'HelloWorld', props: {}}]}],
    api: 'http://localhost:3010/api'
}
