<template>
  <div class="container">
    <div class="card" v-if="alert">
      <app-alert :alert="alert" @closeAlert="alert = null"></app-alert>
    </div>
    <div class="card">
      <h1 class="title">Работа с БД</h1>
      <add-person-form
          @submitForm="addPerson"
      >
      </add-person-form>
    </div>
    <page-loader v-if="loader"></page-loader>
    <persons-list
        v-else
        :persons="persons"
        @loadData="loadData"
        @remove="removePerson"
    >
    </persons-list>
  </div>
</template>

<script>

import AddPersonForm from "@/components/AddPersonForm.vue";
import PersonsList from "@/components/PersonsList.vue";
import axios from "axios";
import AppAlert from "@/components/AppAlert.vue";
import PageLoader from "@/components/UI/PageLoader.vue";

const URL = "https://vue-app-http-ab1dd-default-rtdb.firebaseio.com/";
export default {
  components: {PageLoader, AppAlert, PersonsList, AddPersonForm},
  data() {
    return {
      alert: null,
      persons: [],
      loader: false
    }
  },
  methods: {
    // Используем нативный fetch + async await
    async addPerson(data) {
      const response = await fetch(`${URL}persons.json`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          firstName: data.firstName
        })
      });
      const fbData = await response.json();
      this.persons.push({
        firstName: data.firstName,
        id: fbData.name
      })
    },
    // axios + async await
    async loadData() {
      this.loader = true;
      try {
        const {data} = await axios.get(`${URL}persons.json`);
        if (!data) {
          throw new Error("Список персон пуст")
        }
        this.persons = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key]
          }
        });
        this.loader = false;
      } catch (err) {
        this.alert = {
          type: "danger",
          title: "Ошибка",
          text: err.message
        };
        this.loader = false;
      }
    },
    async removePerson(id) {
      const person = this.persons.find(pers => pers.id === id)
      await axios.delete(`${URL}persons/${id}.json`);
      this.persons = this.persons.filter((person) => person.id !== id)
      this.alert = {
        type: "primary",
        title: "Сообщение",
        text: `Пользователь с именем "${person.firstName}" был удалён`
      }
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped lang="scss">

</style>
