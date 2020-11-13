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
      <a href="./list.html" class="btn btn-primary">목록</a>
      <a :href="'./update.html?no=' + item.no" class="btn btn-primary">수정</a>
      <a :href="'./delete.html?no=' + item.no" class="btn btn-primary">삭제</a>
    </div>
  </div>
  `,
  data: function () {
    return {
      item: {},
    };
  },
  created() {
    const params = new URL(document.location).searchParams;
    const board = JSON.parse(localStorage.getItem('board'));
    for (let obj of board.items) {
      if (params.get('no') == obj.no) {
        this.item = obj;
        break;
      }
    }
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD HH:mm:ss');
    },
  },
};
