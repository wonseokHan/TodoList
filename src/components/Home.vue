<template>
  <v-container class="py-8 px-6" fluid>
    <v-row no-gutters>
      <v-col v-for="card in cards" :key="card" cols="8">
        <v-card>
          <v-subheader>{{ card }}</v-subheader>
          <!-- 캘린더 내부 컴포넌트-->
          <v-list>
            <template>
              <v-list-item>
                <calendar v-on:update="showDate" v-on:arr="showArray" />
              </v-list-item>
            </template>
          </v-list>
          <!-- 캘린더 내부 컴포넌트 /-->
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-subtitle v-if="this.today == ''"
            ><b>{{ now }}</b></v-card-subtitle
          >
          <v-card-subtitle v-else
            ><b>{{ this.today }}</b></v-card-subtitle
          >
          <v-divider class="Tdvd"></v-divider>
          <!-- 캘린더 내부 컴포넌트-->
          <v-list class="vl">
            <template>
              <v-list-item>
                <Todo :relateDate="this.today" :sendModel="this.isArray" />
              </v-list-item>
            </template>
          </v-list>
          <!-- 캘린더 내부 컴포넌트 /-->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import calendar from "./mainComponents/Calendar";
import Todo from "./mainComponents/Todo";

export default {
  data: () => ({
    cards: ["Today"],
    drawer: null,
    mDate: "",
    today: "",
    isShow: "",
    isArray: [],
  }),
  components: {
    calendar,
    Todo,
  },
  // methods 시작
  methods: {
    showDate(mDate) {
      this.today = mDate;
    },
    showArray(items) {
      this.isArray = items;
    },
  },
  computed: {
    now() {
      return new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0];
    },
  },
};
</script>

<style scoped>
.Tdvd {
  margin-bottom: 10px;
}
.vl {
  overflow: auto;
}
.vSub {
  padding: 16px;
}
</style>
