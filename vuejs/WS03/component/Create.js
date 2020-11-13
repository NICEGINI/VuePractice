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
      <button class="btn btn-primary" @click="checkHandler">등록</button>
      <button class="btn btn-primary" @click="moveList">목록</button>
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
    // 입력값 체크하기 - 체크가 성공하면 createHandler 호출
    checkHandler() {
      // 사용자 입력값 체크하기
      // 작성자, 제목, 내용
      // 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = '';
      !this.writer && ((msg = '작성자를 입력해주세요'), (err = false), this.$refs.writer.focus());
      err && !this.title && ((msg = '제목 입력해주세요'), (err = false), this.$refs.title.focus());
      err &&
        !this.content &&
        ((msg = '내용 입력해주세요'), (err = false), this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 createHandler 호출
      else this.createHandler();
    },

    createHandler() {
      // 로컬스토리지에 저장된 데이터 가져오기
      const board = localStorage.getItem('board');
      // 데이터 선언
      let newBoard = {
        sequence: 0,
        items: [],
      };

      // 기존 로컬스토리지에 저장된 내용이 있다면 newBoard 객체를 변경
      if (board) {
        newBoard = JSON.parse(board);
      }

      // 글번호 증가
      newBoard.sequence += 1;
      // 화면 입력된 데이터를 newBoard에 추가
      newBoard.items.push({
        writer: this.writer,
        title: this.title,
        content: this.content,
        no: newBoard.sequence,
        regtime: new Date(),
      });
      // 로컬스트리지 저장
      localStorage.setItem('board', JSON.stringify(newBoard));
      // 등록 성공 메세지 출력
      alert('등록이 완료되었습니다.');
      // 목록 페이지로 이동하기
      location.href = './list.html';
    },
    moveList() {
      location.href = 'list.html';
    },
  },
};
