<template>
<div class="w-full">
    <jet-bar-stats-container >
        <jet-bar-stat-card title="Total clients" number="6389" type="warning">
            <template v-slot:icon>
                <jet-bar-icon type="users" fill ></jet-bar-icon>
            </template>
        </jet-bar-stat-card>

        <jet-bar-stat-card title="Account balance" number="$ 46,760.89" type="success">
            <template v-slot:icon>
                <jet-bar-icon type="money" fill ></jet-bar-icon>
            </template>
        </jet-bar-stat-card>
    </jet-bar-stats-container>
</div>
</template>

<script>
import JetBarStatsContainer from "./jetbar-components/JetBarStatsContainer";
import JetBarStatCard from "./jetbar-components/JetBarStatCard";
import JetBarIcon from "./jetbar-components/JetBarIcon";

export default {
    name: 'Stats',
    components: {
        JetBarStatsContainer,
        JetBarStatCard,
        JetBarIcon,
    }
}
</script>