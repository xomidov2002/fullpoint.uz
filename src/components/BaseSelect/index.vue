<script setup lang="ts">
import { type PropType, ref } from 'vue';
import BaseIcon from '@/components/Icons/index.vue';

const emit = defineEmits(['select', 'update:modelValue'])
interface Language {
    id: number,
    title: string,
    icon?: string,
    value?: string
}
const props = defineProps({
    options: {
        type: Array as PropType<Language[]>,
        required: true
    },
    modelValue: {
      type: String
    },
    color: {
        type: String,
        default: 'white'
    },
    size: {
        type: String,
        default: 'sm',
        validator(value: string
        ) {
            return ['sm', 'md'].includes(value)
        }
    }
})
function emitInput(event: any) {
    emit('update:modelValue', event.target.value);
}
const selectedItem = ref(props.options[0])
const isOpen = ref<boolean>(false)
function clickOption(val: any) {
    selectedItem.value = val
    emit('update:modelValue', val.value);
    emit('select', val)
    isOpen.value = !isOpen.value
}
window?.addEventListener('click', () => {
    isOpen.value = false
})
</script>
<template>
    <div class="hidden">
        <input type="text" :value="modelValue" @input="emitInput" />
    </div>
    <div class="relative">
        <div class="flex items-center justify-between rounded-lg cursor-pointer select-none gap-1"
            @click.stop="isOpen = !isOpen" :class="{
                'py-2 pl-2': props.size == 'sm',
                'md:py-5 py-2 px-4': props.size == 'md',
                'bg-white' : !selectedItem.icon
            }">
            <div class="flex items-center justify-start">
                <BaseIcon v-if="selectedItem.icon" :name="selectedItem.icon" class="w-5 h-5" />
                <p :class="{
                    'text-[#202636] ': props.color == 'black',
                    'text-white': props.color == 'white'
                }" class="2xl:text-lg font-medium lg:text-sm ml-1">{{ selectedItem.title }}</p>
            </div>
            <BaseIcon name="down" class="text-black" :class="{
                'rotate-180': isOpen,
                'text-white': props.color == 'white',
                'text-[#202636]': props.color == 'black',
                'w-3.5 h-3.5': props.size == 'sm',
                'w-5 h-5': props.size == 'md'
            }
                " />
        </div>
        <Transition>
            <div class="bg-white select-none border rounded-lg w-full mt-2 absolute z-20" v-if="isOpen">
                <div v-for="item in props.options" :key="item.id" @click.stop="clickOption(item)" :class="{
                    'px-1.5 py-1.5': props.size == 'sm',
                    'px-3 py-3': props.size == 'md'
                }"
                    class="cursor-pointer hover:bg-slate-200 duration-150 rounded-md flex items-center justify-start gap-2 w-full">
                    <BaseIcon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
                    <p class="lg:text-sm 2xl:text-lg">{{ item.title }}</p>
                </div>
            </div>
        </Transition>

    </div>
</template>