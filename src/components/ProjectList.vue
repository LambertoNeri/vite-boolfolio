<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import {store} from '../store';

export default {
  components: { ProjectCard },
  data() {
    return {
      arrProjects: [],
      currentPage: 1,
      nPages: 0,
      store,
    }
  },
  methods: {
    // changePage(page) {
    //   this.currentPage = page;
    //   this.getProjects();
    // },
    nextPage() {
      this.currentPage != this.nPages ? this.currentPage++ : null;
      console.log(this.currentPage);
    },
    prevPage() {
      this.currentPage != 1 ? this.currentPage-- : null;
      console.log(this.currentPage);
    },
    getProjects() {
      axios
        .get(this.store.baseUrl + 'api/projects', {
          params: {
            page: this.currentPage,
          },
        })
        .then(response => {
          this.arrProjects = response.data.data;
          this.nPages = response.data.last_page;
        });
    },

  },
  created() {
    // richiesta dati al server
    // axios
    //   .get('http://localhost:8000/api/projects', {
    //     params: {
    //       page: this.currentPage,
    //     },
    //   })
    //   .then(response => {
    //     this.arrProjects = response.data.data;
    //     this.nPages = response.data.last_page;
    //   });
    this.getProjects();
  },
  watch: {
    currentPage() {
      this.getProjects();

    }
  }

};
</script>

<template>
  <ul>
    <li v-for="project in arrProjects" :key="project.id"><a href="">{{ project.title }}</a></li>
  </ul>
  <div class="row">
    <project-card 
      v-for="project in arrProjects" 
      :key="project.id" 
      :project="project"
    />
  </div>

  <nav>
      <ul class="pagination">
        <!-- <li class="page-item">
          <a class="page-link" href="#" @click="prevPage(page)">Previous</a>
        </li>
        <li v-for="page in nPages" :key="page" class="page-item cursor-pointer" :class="{ active: page == activePage }">
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click="nextPage(page)">Next</a>
        </li> -->

        <li class="page-item" :class="{ disabled: currentPage == 1 }">
          <a class="page-link" href="#" @click="prevPage">Previous</a>
        </li>
      
        <li v-for="page in nPages" :key="page" class="page-item cursor-pointer" :class="{ active: page == currentPage}">
          <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
        </li>
      
        <li class="page-item" :class="{ disabled: currentPage == nPages }">
          <a class="page-link" href="#" @click="nextPage">Next</a>
        </li>
      </ul>
    </nav>
</template>

<style scoped lang="scss">

</style>