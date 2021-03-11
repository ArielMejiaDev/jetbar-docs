---
title: Setup
description: 'Collection of components to accelerate even more your development with Laravel Jetstream.'
position: 2
category: Introduction
---

## Installation

Add `jetbar` using composer:

<code-group>
  <code-block label="composer" active>

  ```bash[terminal/cmd]
  composer require arielmejiadev/jetbar --dev
  ```

  </code-block>
</code-group>

## Install the components

<code-group>
  <code-block label="For Livewire stack" active>

  ```php[terminal/cmd]
  php artisan jetbar:install 
  ```

  </code-block>
  <code-block label="For InertiaJS stack">

  ```php[terminal/cmd]
  php artisan jetbar:install --inertia
  ```

  </code-block>
</code-group>