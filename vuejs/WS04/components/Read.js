export default {
  template: `
    <div>
      <table class="table table-bordered w-50">
        <tr>
          <th>번호</th>
          <td>{{item.no}}</td>
        </tr>
        <tr>
          <th>글쓴이</th>
          <td>{{item.writer}}</td>
        </tr>
        <tr>
          <th>제목</th>
          <td>{{item.title}}</td>
        </tr>
        <tr>
          <th>날짜</th>
          <td>{{getFormatDate(item.regtime)}}</td>
        </tr>
        <tr>
          <td colspan="2">
            {{item.content}}
          </td>
        </tr>
      </table>
      <br />
      <div class="text-center">
        <router-link :to="'/list'"><button class="btn btn-primary">목록</button></router-link>
        <router-link :to="'/update?no=' + item.no"><button class="btn btn-primary">수정</button></router-link>
        <router-link :to="'/delete?no=' + item.no"><button class="btn btn-primary">삭제</button></router-link>
      </div>
    </div>
    `,
  name: 'read',
  data: function () {
    return {
      item: {},
    };
  },
  created() {
    const params = new URL(document.location).searchParams;
    axios.get(`http://localhost:9999/vue/api/board/${params.get('no')}`).then(({ data }) => {
      this.item = data;
    });
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD HH:mm:ss');
    },
  },
};
