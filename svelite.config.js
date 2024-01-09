import { AdminPanelPlugin } from 'svelitecms/admin'
import HelloWorld from './modules/HelloWorld.svelte'

export default {
    plugins: [
       AdminPanelPlugin({
           collections: [
           ]
            // admin panel config...
         })
    ],
    // custom modules
    modules: {
        HelloWorld: {
            name: 'Hello World',
            description: "Simple hello world",
            component: HelloWorld,         }

    },
    // custom layouts
    layouts: {},
    pages: [
        {
            slug: 'hello', 
            title: 'Hello', 
            modules: [
                {
                    name: 'HelloWorld', 
                    props: {}
                }
            ]
        }
    ],
    api: 'http://localhost:3010/api'
}
