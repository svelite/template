import svelite from 'svelitecms/config'
import adapter from '@sveltejs/adapter-auto'

const config = svelite({
    kit: {
        adapter: adapter()
    }
})


config.kit.alias['$svelite'] = "./svelite.config.js"
console.log(config)
export default config;
