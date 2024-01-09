import vite from 'svelitecms/vite'

export default {

    ...vite,
    optimizeDeps: {
        ...vite.optimizeDeps,
        // TODO: exclude in main repo
        exclude: [...(vite.optimizeDeps?.exclude??[]), 'svelitecms/admin']
    }
}

