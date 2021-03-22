---
title: 'Plantilla'
description: 'Collection of components to accelerate even more your development with Laravel Jetstream.'
position: 3
category: 'Components'
---

Este paquete agrega un layout con un hermoso sidebar como layout de tu applicación estilizado con tailwindcss.

## Plantilla con Livewire

La plantilla se encuentra en: `resources/views/layouts`.

Este usa los siguientes componentes:

- Sidebar (`x-jet-bar-sidebar`).
- Navigation Menu (`x-jet-navigation-menu`).
- Navigation Menu / Responsive links (`x-jet-bar-responsive-links`).

Ahí puedes agregar links o personalizar tu plantilla como requieras.

<alert>

El componente Navigation menu agrega un dropdown para notificaciones del usuario, puedes usar o descartar este elemento según haga sentido en tu app.

</alert>


<img src="/jetbar-navigation-screenshot.png" width="1280" height="640" alt="Jetbar navigation menu" class="rounded-xl shadow" />

## Plantilla con InertiaJS

La plantilla se encuentra en: `resources/js/Layouts`.

Este usa los siguientes componentes:

- Sidebar (`jet-bar-sidebar`).
- Navigation Menu (`jet-navigation-menu`).
- Navigation Menu / Responsive links (`jet-bar-responsive-links`).

Ahí puedes agregar links o personalizar tu plantilla como requieras.

## App layout slots

Ambos layouts tienen dos `slots`

- Header (Agrega opcionalmente un titulo con el tag `<h1></h1>` en la pagina actual).
- Default slot (Donde se agrega todo el contenido).