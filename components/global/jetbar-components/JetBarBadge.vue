<template>
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full my-2" :class="badgeColors">{{ text }}</span>
</template>

<script>
export default {
    name: "JetBarBadge",
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['info', 'success', 'warning', 'danger'].includes(value);
            }
        }
    },
    computed: {
        badgeColors(){
            const colors = {
                "info":"bg-blue-200 text-blue-800",
                "success": "bg-green-200 text-green-800",
                "warning":"bg-yellow-200 text-yellow-800",
                "danger":"bg-red-200 text-red-800"
            }
            return colors[this.type];
        }
    }
}
</script>
