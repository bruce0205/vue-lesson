<template>
  <div>
    <h1>About</h1>
      <router-link :to="{name: 'me'}">Me</router-link>
      <router-link to="/about/you">You</router-link>
      <router-link to="/about/both">Both</router-link>
      <router-link :to="{name: 'prod', params: {id: '3'}}">Prod3</router-link>

      <router-view></router-view>
      <router-view name="default"></router-view>
      <router-view name="another"></router-view>
  </div>
</template>