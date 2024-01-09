import svelite from 'svelitecms/config'
import adapter from '@sveltejs/adapter-node'

// adapter config as string..
export default svelite({
    kit: {
        adapter: adapter()
    }
})
