<template>
  <v-row>
    <v-col>
      <v-sheet height="500px">
        <v-calendar v-model="mDate" color="primary" @click:date="visible">
          <template>
            <v-row class="fill-height">
              <template>
                <v-sheet> </v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
      <!-- 캘린더 컴포넌트 /-->

      <!--모달창 시작-->
      <v-dialog v-model="visibleDialog" max-width="500">
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="primary" dark></v-toolbar>
            <v-card-text class="cardText">
              <!--모달창 내부-->
              <v-form ref="form">
                <v-text-field
                  prepend-icon="fas fa-user"
                  label="제목"
                  v-model="mTitle"
                ></v-text-field>

                <v-text-field
                  prepend-icon="fas fa-clock"
                  label="날짜"
                  v-model="mDate"
                  ref="vDate"
                ></v-text-field>

                <v-textarea
                  prepend-icon="fas fa-bookmark"
                  label="할일"
                  v-model="mTextarea"
                ></v-textarea>
              </v-form>
              <!--모달창 내부 /-->
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Close</v-btn>
              <v-btn text color="primary" @click="setInputData">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!--모달창 종료 /-->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: "calendar",
      today: new Date(),
      picked: "",
      mTitle: "",
      mDate: "",
      mTextarea: "",
      visibleDialog: false,
      items: [],
    };
  },
  methods: {
    visible() {
      this.visibleDialog = true;
      this.$emit("update", this.mDate);
      console.log("date", this.mDate);
    },

    setInputData() {
      if (this.mTitle == "") {
        alert("제목을 입력하세요.");
        return false;
      } else if (this.mTextarea == "") {
        alert("할 일을 입력하세요.");
        return false;
      } else if (this.mDate == "") {
        alert("날짜를 입력하세요.");
        return false;
      }

      this.items.push({
        title: this.mTitle,
        date: this.mDate,
        textarea: this.mTextarea,
      });

      this.visibleDialog = false;
      this.mTitle = "";
      this.mDate = "";
      this.mTextarea = "";
      this.$emit("arr", this.items);
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
.Dbtn {
  margin-top: 20px;
}
.v-card__subtitle,
.v-card__text,
.v-card__title {
  padding: 14px;
}
.cardText {
  margin-top: 10px;
}
</style>