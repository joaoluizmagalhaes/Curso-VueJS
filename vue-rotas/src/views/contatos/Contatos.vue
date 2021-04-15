<template>
    <div>
        
        <transition name="slideDown" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition name="slideDown" mode="out-in">
            <router-view name="contato-detalhes"></router-view>
        </transition>
         <transition name="slideDown" mode="out-in">
            <router-view name="novo"></router-view>
        </transition>

    </div>

</template>



<style scoped>
    .slideDown-enter,
    .slideDown-leave-to {
        transform: translateX(-50px);
        opacity: 0;
    }

    .slideDown-enter-active,
    .slideDown-leave-active {
        transition: all 0.3s
    }

    .slideUp-enter,
    .slideUp-leave-to {
        transform: translateX(50px);
        opacity: 0;
    }

    .slideUp-enter-active,
    .slideUp-leave-active {
        transition: all 0.3s
    }
</style>