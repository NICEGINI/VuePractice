<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h2>아파트 매매 정보</h2>
      </b-col>
    </b-row>
    <search-bar @send-dong-code="sendDongCode" />
    <b-row>
      <b-col cols="5" align="left">
        <apt-list :aptlist="apts" @select-apt="selectApt" />
      </b-col>
      <b-col cols="7">
        <apt-detail :apt="selectedApt" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import SearchBar from '@/components/SearchBar.vue';
import AptList from '@/components/AptList.vue';
import AptDetail from '@/components/AptDetail.vue';

// vue cli enviroment variables 검색
// 반드시 VUE_APP으로 시작해야 한다.
const API_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
const API_URL =
  'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev';

export default {
  name: 'Apt',
  components: {
    SearchBar,
    AptList,
    AptDetail,
  },
  data() {
    return {
      dongCode: '',
      selectedApt: '',
      apts: [],
    };
  },
  methods: {
    sendDongCode: function(dongCode) {
      console.log('>>>>>' + dongCode);
      this.dongCode = dongCode;

      // const API_KEY =
      //   '9Xo0vlglWcOBGUDxH8PPbuKnlBwbWU6aO7%2Bk3FV4baF9GXok1yxIEF%2BIwr2%2B%2F%2F4oVLT8bekKU%2Bk9ztkJO0wsBw%3D%3D';
      // const API_URL =
      //   'http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?LAWD_CD=' +
      //   dongCode +
      //   '&DEAL_YMD=202010&serviceKey=' +
      //   API_KEY;

      //   axios
      //     .get(API_URL)
      //     .then((response) => {
      //       console.log(response); //apt list
      //       this.apts = response.data.response.body.items.item;
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // },

      const params = {
        LAWD_CD: this.dongCode,
        DEAL_YMD: '202010',
        serviceKey: decodeURIComponent(API_KEY),
      };

      axios
        .get(API_URL, {
          params,
        })
        .then((response) => {
          console.log(response); //apt list
          this.apts = response.data.response.body.items.item;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectApt: function(apt) {
      this.selectedApt = apt;
    },
  },
};
</script>

<style></style>
