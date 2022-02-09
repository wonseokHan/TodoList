<template>
  <v-row>
    <v-col>
      <v-sheet height="483px">
        <v-alert
          border="left"
          colored-border
          color="blue darken-2"
          elevation="2"
          v-show="relateDate == i.date"
          v-for="(i, index) in sendModel"
          :key="index"
        >
          <ul class="Tul">
            <li>제목 : {{ i.title }}</li>
            <li>날짜 : {{ i.date }}</li>
            <li>할일 : {{ i.textarea }}</li>
            <li class="Tli">{{ index }}</li>
            <li>
              <v-btn depressed small color="primary" @click="Modify(index)"
                >Modify</v-btn
              >
              /
              <v-btn depressed small color="error" @click="Delete(index)"
                >Delete</v-btn
              >
            </li>
          </ul>
        </v-alert>
      </v-sheet>
      <!-- 캘린더 내부 컴포넌트 /-->

      <!--수정 모달창 시작-->
      <v-dialog v-model="modifyDialog" max-width="500">
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
              <v-btn text color="primary" @click="saveModify">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <!--수정 모달창 종료 /-->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "todo",
  props: {
    relateDate: String,
    sendModel: Array,
  },
  data() {
    return {
      result: "",
      i: 0,
      modifyDialog: false,
      mTitle: "",
      mDate: "",
      mTextarea: "",
    };
  },
  methods: {
    Delete(index) {
      this.idx = index;
      this.result = window.confirm("이 일정을 삭제하시겠습니까?");
      if (this.result == true) {
        this.sendModel.splice(this.idx, 1);
      }
    },
    Modify(index) {
      this.modifyDialog = true;
      this.idx = index;
      this.mTitle = this.sendModel[this.idx].title;
      this.mDate = this.sendModel[this.idx].date;
      this.mTextarea = this.sendModel[this.idx].textarea;
    },
    saveModify() {
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
      this.sendModel[this.idx].title = this.mTitle;
      this.sendModel[this.idx].date = this.mDate;
      this.sendModel[this.idx].textarea = this.mTextarea;

      this.modifyDialog = false;
      this.mTitle = "";
      this.mDate = "";
      this.mTextarea = "";
    },
  },
};
</script>
<style scoped>
.Tul {
  list-style-type: none;
}
.Tli {
  visibility: hidden;
}
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
