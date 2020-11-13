export default {
  template: `
  <div>
      <div v-if="items.length">
        <table class="table table-bordered table-condensed">
          <colgroup>
            <col :style="{width: '5%'}"/>
            <col :style="{width: '50%'}"/>
            <col :style="{width: '10%'}"/>
            <col :style="{width: '25%'}"/>
          </colgroup>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
          <tr v-for="(item, index) in items" :key="index + '_items'">
            <td>{{item.no}}</td>
            <td><router-link :to="'read?no=' + item.no">{{item.title}}</router-link></td>
            <td>{{item.writer}}</td>
            <td>{{getFormatDate(item.regtime)}}</td>
          </tr>
        </table>
      </div>
      <div v-else>
        글이 없습니다.
      </div>
      <div class="text-right">
        <button class="btn btn-primary" @click="movePage">등록</button>
      </div>
    </div>
    `,
  data: function () {
    return {
      items: [],
    };
  },
  created() {
    axios.get('http://localhost:9999/vue/api/board').then(({ data }) => {
      this.items = data;
    });
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD');
    },
    movePage() {
      this.$router.push('/create');
    },
  },
};
