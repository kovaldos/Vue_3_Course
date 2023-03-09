<template>
  <div class="container">
    <div class="card">
      <h1 class="title">Работа с БД</h1>
      <add-person-form
          @submitForm="addPerson">
      </add-person-form>
    </div>
    <persons-list :persons="persons" @loadData="loadData"></persons-list>
  </div>
</template>

<script>

import AddPersonForm from "@/components/AddPersonForm.vue";
import PersonsList from "@/components/PersonsList.vue";

const URL = "https://vue-app-http-ab1dd-default-rtdb.firebaseio.com/persons.json";
export default {
  components: {PersonsList, AddPersonForm},
  data() {
    return {
      persons: []
    }
  },
  methods: {
    async addPerson(data) {
      const response =  await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          firstName: data.firstName
        })
      });
      const fbData = await response.json();
    },
    loadData() {
      console.log('loaded')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
