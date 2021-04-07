<template>
    <div>
        <AppHeader />
        <AppContador />
    </div>
</template>

<script>

import AppHeader from './AppHeader.vue'
import AppContador from './AppContador.vue'

export default {
    components: {
        AppContador,
        AppHeader
    }
}
</script>