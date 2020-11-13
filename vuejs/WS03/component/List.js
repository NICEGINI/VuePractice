export default {
  template: `
      <div>
      <div v-if="items.length">
        <table class="table table-bordered table-condensed">
          <colgroup>
            <col :style="{width: '10%'}" />
            <col :style="{width: '50%'}" />
            <col :style="{width: '15%'}" />
            <col :style="{width: '25%'}" />
          </colgroup>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
          <tr v-for="(board, index) in items" :key="index + '_items'">
            <td>{{board.no}}</td>
            <td><a :href="'read.html?no=' + board.no">{{board.title}}</a></td>
            <td>{{board.writer}}</td>
            <td>{{getFormatDate(board.regtime)}}</td>
          </tr>
        </table>
      </div>
      <div v-else class="text-center">
        게시글이 없습니다.
      </div>
      <div class="text-right">
        <button class="btn btn-primary" @click="movePage">등록</button>
      </div>
      </div>
        
    `,
  created() {
    const board = localStorage.getItem('board');
    let newBoard = {
      sequence: 0,
      items: [],
    };
    if (board) {
      newBoard = JSON.parse(board);
    } else {
      localStorage.setItem('board', JSON.stringify(newBoard));
    }
    newBoard.items.sort((a, b) => {
      return -(a.no - b.no);
    });
    this.items = newBoard.items;
  },
  methods: {
    getFormatDate(regtime) {
      return moment(new Date(regtime)).format('YYYY.MM.DD');
    },
    movePage() {
      location.href = 'create.html';
    },
  },
};
