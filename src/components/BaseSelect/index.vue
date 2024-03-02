<script setup lang="ts">
import {  type PropType, ref } from 'vue';  
const emit = defineEmits(['select'])
interface Language {
    id: number,
    title: string,
    icon?: string
}
const props = defineProps({
    options: {
        type: Array as PropType<Language[]>,
        required: true
    },
    width: {
        type: String,
        default: 'w-24'
    }
})

const selectedItem = ref<Language>(props.options[0])
const isOpen = ref<boolean>(false)
function clickOption(val: any) {
    selectedItem.value = val
    emit('select', val)
    isOpen.value = !isOpen.value
}
window.addEventListener('click', () => {
    isOpen.value = false
})
</script>
<template>
    <div class="relative">
        <div class="flex items-center justify-between py-2 px-2 rounded-lg cursor-pointer select-none"
            @click.stop="isOpen = !isOpen" :class="props.width">
            <div class="flex items-center justify-start gap-1">
                <BaseIcon :name="selectedItem.icon" class="w-5 h-5" />
                <p>{{ selectedItem.title }}</p>
            </div>
            <BaseIcon name="down" class="w-3 h-3" :class="[isOpen ? 'rotate-180' : '']" />
        </div>
        <Transition>
            <div class="backdrop-blur-md bg-white select-none border rounded-lg w-full mt-2 absolute z-50 py-1" v-if="isOpen">
                <div v-for="item in props.options" :key="item.id" @click.stop="clickOption(item)"
                    class="py-1.5 cursor-pointer hover:bg-slate-200 duration-150 px-2 rounded-md flex items-center justify-start gap-2 w-full">
                    <BaseIcon :name="item.icon" class="w-5 h-5" />
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </Transition>

    </div>
</template> 