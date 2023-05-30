## What is Tailwind CSS

 - Tailwind CSS is a front-end CSS framework, First released in May 2019.
 - Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

 - It's fast, flexible, and reliable — with zero-runtime.

## Installation
 - https://tailwindcss.com/docs/installation/framework-guides

## Component Composition with `tailwind-merge` utility function

## Arbitrary Values
 - Arbitrary values use `square brackets` to allow custom css values instead of classes built from your `tailwind.config.js`


## Presets
 - Presets are just regular Tailwind configuration objects, taking the exact same shape as the configuration you would add in your tailwind.config.js file.

## Plugins
 - there are 11 functions that can be destructured from tailwindcss plugin which are:
    # addUtilities()
     - for registering new static utility styles
     - used to create new custom components styles.
    # matchUtilities() 
     - for registering new dynamic utility styles
    # addComponents()
     - for registering new static component styles
    # theme()
     - for looking up values in the user’s theme configuration
