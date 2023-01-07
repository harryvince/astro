<template>
  <button @click="modalVisible = !modalVisible">Create</button>
  <div v-if="modalVisible" ref="myModal" class="modal">
    <!-- Modal content -->
    <div v-if="modalVisible" id="modal" class="modal-content">
      <span
        v-if="modalVisible"
        class="close"
        @click="modalVisible = !modalVisible"
        >&times;</span
      >
      <h2 v-if="modalVisible">Create a note</h2>
      <div class="input-row">
        <input v-model="Title" placeholder="Title" />
        <textarea
          v-model="Data"
          placeholder="Enter you description here"
        ></textarea>
        <button @click="createNote()">Create</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  max-width: 288px;
  max-height: 500px;
}
::placeholder {
  color: white;
  opacity: 0.75;
}
input {
  text-align: center;
  background-color: #2e2e2e;
  color: white;
  border: 1px solid #888;
  max-width: 288px;
}
button {
  background-color: #2e2e2e;
  border: #d8d7d5 solid 1px;
  color: white;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  max-width: 70px;
  position: relative;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.input-row {
  display: grid;
  grid-template-columns: 1;
  gap: 1em;
  justify-content: center;
}
/* The Modal (background) */
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #2e2e2e;
  color: white;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CreateNote",
  data() {
    return {
      Title: "",
      Data: "",
      modalVisible: false,
    };
  },
  methods: {
    async createNote() {
      if (this.Title.trim() === "" || this.Data.trim() === "")
        return alert("No input provided, please provide");
      const response = await fetch(window.location.origin + "/api/note", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Title: this.Title, Data: this.Data }),
      });
      if (response.status === 201) {
        window.location.reload();
      }
    },
  },
});
</script>
