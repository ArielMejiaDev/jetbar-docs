---
title: Layout
description: 'Collection of components to accelerate even more your development with Laravel Jetstream.'
position: 3
category: 'Components'
---

The package adds an app layout with a beautiful sidebar styled with tailwindcss.

## Livewire layout

The application layout is located in `resources/views/layouts`.

It use different components:

- Sidebar (`x-jet-bar-sidebar`).
- Navigation Menu (`x-jet-bar-navigation-menu`).
- Navigation Menu / Responsive links (`x-jet-bar-responsive-links`).

There you can add any link or customize it as you need.

<alert>

Navigation menu component ships with a notifications dropdown element, feel free to use or discard it as your app needs.

</alert>

<img src="/jetbar-navigation-screenshot.png" width="1280" height="640" alt="Jetbar navigation menu" class="rounded-xl shadow" />


## InertiaJS layout

The application layout is located in `resources/js/Layouts`.

It use different components:

- Sidebar (`jet-bar-sidebar`).
- Navigation Menu (`jet-navigation-menu`).
- Navigation Menu / Responsive links (`jet-bar-responsive-links`).

There you can add any link or customize it as you need.

## App layout slots

it adds two slots:

- Header (It adds optionally a `<h1></h1>` tag title to the current page).
- Default slot (where it adds all the content).