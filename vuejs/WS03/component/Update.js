export default {
  template: `
          <div>
            <div class="form-group">
              <label for="writer">작성자</label>
              <input type="text" class="form-control" id="writer" ref="writer" placeholder="작성자를 입력하세요" v-model="writer">
            </div>
            <div class="form-group">
              <label for="title">제목</label>
              <input type="text" class="form-control" id="title" ref="title" placeholder="제목을 입력하세요" v-model="title">
            </div>
            <div class="form-group">
              <label for="content">내용</label>
              <textarea type="text" class="form-control" id="contnet" ref="content" placeholder="내용을 입력하세요"
                v-model="content"></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-primary" @click="checkHandler">수정</button>
            </div>
          </div>
  `,
  data: function () {
    return {
      no: '',
      regtime: '',
      writer: '',
      title: '',
      content: '',
    };
  },
  methods: {
    checkHandler() {
      let err = true;
      let msg = '';
      !this.writer && ((msg = '작성자를 입력해주세요'), (err = false), this.$refs.writer.focus());
      err && !this.title && ((msg = '제목 입력해주세요'), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = '내용 입력해주세요'), (err = false), this.$refs.content.focus());

      if (!err) alert(msg);
      else this.updateHandler();
    },
    updateHandler() {
      const params = new URL(document.location).searchParams;
      const board = JSON.parse(localStorage.getItem('board'));
      for (let i = 0; i < board.items.length; i++) {
        if (board.items[i].no == params.get('no')) {
          board.items[i] = {
            no: this.no,
            regtime: this.regtime,
            writer: this.writer,
            title: this.title,
            content: this.content,
          };
          break;
        }
      }
      localStorage.setItem('board', JSON.stringify(board));
      alert('수정이 완료되었습니다.');
      location.href = './list.html';
    },
  },
  created() {
    const params = new URL(document.location).searchParams;
    const board = JSON.parse(localStorage.getItem('board'));
    for (let obj of board.items) {
      if (params.get('no') == obj.no) {
        this.no = obj.no;
        this.regtime = obj.regtime;
        this.writer = obj.writer;
        this.title = obj.title;
        this.content = obj.content;
        break;
      }
    }
  },
};
