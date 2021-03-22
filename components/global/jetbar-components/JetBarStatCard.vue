<template>
    <div class="flex items-center py-2 px-4 bg-white border rounded-lg shadow dark:bg-gray-800">
        <div v-if="this.$slots.icon" class="p-3 mr-4 rounded-full" :class="cardIconColors">
            <slot name="icon" />
        </div>
        <div>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {{ title }}
            </p>
            <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {{ number }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "JetBarStatCard",
    props: {
        title: {
            type: String,
            required: true
        },
        number: String|Number,
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['info', 'success', 'warning', 'danger'].includes(value);
            }
        }
    },
    computed: {
        cardIconColors() {
            const colors = {
                "info":"text-blue-600 bg-blue-200 dark:text-blue-200 dark:bg-blue-600",
                "success": "text-green-600 bg-green-200 dark:text-green-200 dark:bg-green-600",
                "warning":"text-yellow-600 bg-yellow-200 dark:text-orange-200 dark:bg-orange-600",
                "danger":"text-red-600 bg-red-200 dark:text-red-200 dark:bg-red-600"
            }
            return colors[this.type];
        }
    }
}
</script>
