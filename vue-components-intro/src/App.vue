<template>
    <div>
        <AppHeader />
        <AppContador />
    </div>
</template>

<script>

import AppHeader from './components/shared/AppHeader.vue'
import AppContador from './components/contador/Contador.vue'

export default {
    components: {
        AppContador,
        AppHeader
    }
}
</script>