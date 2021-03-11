---
title: 'Componentes'
description: 'Collection of components to accelerate even more your development with Laravel Jetstream.'
position: 4
category: 'Components'
---

### Alert Component

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-alert text="This is an alert message" />
<x-jet-bar-alert text="This is an alert message" type="success" />
<x-jet-bar-alert text="This is an alert message" type="warning" />
<x-jet-bar-alert text="This is an alert message" type="danger" />
<x-jet-bar-alert text="This is an alert message" type="info" />
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<jet-bar-alert text="This is an alert message" />
<jet-bar-alert text="This is an alert message"  type="success" />
<jet-bar-alert text="This is an alert message"  type="warning" />
<jet-bar-alert text="This is an alert message" type="danger" />
<jet-bar-alert text="This is an alert message" type="info" />
  ```

  </code-block>
</code-group>

### Stats Component

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-stat-card title="Total clients" number="6389" type="warning" >
    <x-jet-bar-icon type="users" fill />
</x-jet-bar-stat-card>
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<jet-bar-stat-card title="Total clients" number="6389" type="warning">
    <template v-slot:icon>
        <jet-bar-icon type="users" fill />
    </template>
</jet-bar-stat-card>
  ```

  </code-block>
</code-group>

### Badge Component

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-badge text="Active" type="success" />
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<jet-bar-badge text="Active" type="success" />
  ```

  </code-block>
</code-group>

### Icon Component

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-icon type="trash" fill />
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<jet-bar-icon type="trash" fill />
  ```

  </code-block>
</code-group>

### Table Component

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-table :headers="['Name', 'Edit', 'Delete']">
    <tr class="hover:bg-gray-50">
        <x-jet-bar-table-data>
            Jane Cooper
        </x-jet-bar-table-data>

        <x-jet-bar-table-data>
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
        </x-jet-bar-table-data>

        <x-jet-bar-table-data>
            <a href="#" class="text-gray-400 hover:text-gray-500">
                <x-jet-bar-icon type="trash" fill />
            </a>
        </x-jet-bar-table-data>
    </tr>
</x-jet-bar-table>
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<jet-bar-table :headers="['Name', 'Edit', 'Delete']" >
    <tr class="hover:bg-gray-50">
        <jet-bar-table-data>Jane Cooper</jet-bar-table-data>
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
  ```

  </code-block>
</code-group>

### Simple Pagination Component

Here an example with an eloquent collection of users (User model).

<code-group>
  <code-block label="For Livewire stack" active>

  ```php
<x-jet-bar-table :headers="['Name', 'Delete']">
    <tr class="hover:bg-gray-50">
        <x-jet-bar-table-data>
            {{ $user->name }}
        </x-jet-bar-table-data>

        <x-jet-bar-table-data>
            <a href="{{ route('users.delete', $user->id) }}" class="text-gray-400 hover:text-gray-500">
                <x-jet-bar-icon type="trash" fill />
            </a>
        </x-jet-bar-table-data>
    </tr>
</x-jet-bar-table>

{{ $users->links() }}
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```vue
<template>
    <jet-bar-table :headers="['Name', 'Delete']" >
        <tr v-for="(index, user) in users.data" :key="index" class="hover:bg-gray-50">
            <jet-bar-table-data>
                {{ user.name }}
            </jet-bar-table-data>
            <jet-bar-table-data>
                <inertia-link :href="route('users.delete', user.id)" class="text-gray-400 hover:text-gray-500">
                    <jet-bar-icon type="trash" fill />
                </inertia-link>
            </jet-bar-table-data>
        </tr>
        <template name:pagination>
            <jet-bar-simple-pagination :items="users" />
        </template>
    </jet-bar-table>
</template>
<script>
    props: { users:Object }
</script>
  ```

  </code-block>
</code-group>