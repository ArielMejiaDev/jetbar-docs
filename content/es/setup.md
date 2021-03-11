---
title: 'Instalación'
description: 'Collection of components to accelerate even more your development with Laravel Jetstream.'
position: 2
category: Introduction
---

## Instalación del paquete

Instalar `jetbar` con composer:

<code-group>
  <code-block label="composer" active>

  ```bash[terminal/cmd]
  composer require arielmejiadev/jetbar --dev
  ```

  </code-block>
</code-group>

## Instala los componentes

<code-group>
  <code-block label="Para el stack de Livewire." active>

  ```php[terminal/cmd]
  php artisan jetbar:install 
  ```

  </code-block>
  <code-block label="Para el stack de InertiaJS.">

  ```php[terminal/cmd]
  php artisan jetbar:install --inertia
  ```

  </code-block>
</code-group>