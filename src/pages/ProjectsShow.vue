<script>
import {store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            project: {},
        }
    },
    created() {
        // fai la richiesta axios
        axios.get(this.store.baseUrl + 'api/projects/' + this.$route.params.slug)
        .then(response => this.project = response.data)
        console.log(this.project);
    }
    

};
</script>

<template>
  <h2>show</h2>
  <h5>{{ project.title }}</h5>
</template>

<style>

</style>

