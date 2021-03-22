<template>
    <div class="my-4">
        <jet-bar-table :headers="['name', 'title', 'status', 'role', '', '']">
            <tr class="hover:bg-gray-100" v-for="index in 3" :key="index">
                <jet-bar-table-data>Jane Cooper</jet-bar-table-data>
                <jet-bar-table-data>
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                </jet-bar-table-data>
                <jet-bar-table-data>
                    <jet-bar-badge text="Active" type="success" />
                </jet-bar-table-data>
                <jet-bar-table-data>Admin</jet-bar-table-data>
                <jet-bar-table-data>
                    <inertia-link href="#" class="text-indigo-600 hover:text-indigo-900">Edit</inertia-link>
                </jet-bar-table-data>
                <jet-bar-table-data>
                    <inertia-link href="#" class="text-gray-400 hover:text-gray-500">
                        <jet-bar-icon type="trash" fill />
                    </inertia-link>
                </jet-bar-table-data>
            </tr>
    </jet-bar-table>
    </div>
</template>

<script>
import JetBarTable from "./jetbar-components/JetBarTable";
import JetBarTableData from "./jetbar-components/JetBarTableData";

export default {
    name: 'SimpleTable',
    components: {
        JetBarTable,
        JetBarTableData,
    }
}
</script>

<style>

</style>